# type: ignore
'''
从知乎上下载文章，保存为 Markdown 格式。
'''

import re
import urllib.parse
import requests
from bs4 import BeautifulSoup
from pathlib import Path

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36'
}


def escape(s):
    return re.sub(r'[\\`\*_\{\}\[\]\(\)#\+-\.\!\|]', lambda match: '\\' + match.group(), s).replace('\\,', ',')


def link(s):
    if s[:31] == 'https://link.zhihu.com/?target=':
        return urllib.parse.unquote(s[31:])
    return s


def html2md(node):
    if node is None:
        return ''
    if node.name is None:
        return escape(str(node))
    if node.name == 'p':
        return ''.join((html2md(c) for c in node.children)) + '\n\n'
    if node.name == 'a':
        if node.attrs.get('data-reference-link'):
            index = node.attrs['href'].split('_')[1]
            return f'[^{index}]'
        return f'[{node.text}]({link(node.attrs["href"])})' + ('\n' if 'LinkCard' in node.attrs['class'] else '')
    if node.name == 'hr':
        return '\n---\n'
    if node.name == 'h2':
        return f'## {node.text}\n'
    if node.name == 'h3':
        return f'### {node.text}\n'
    if node.name == 'figure':
        return html2md(node.img) + '\n' + html2md(node.figcaption)
    if node.name == 'img':
        if node.attrs.get('eeimg'):
            formula = node.attrs.get('alt').replace('|', '\\|')
            return f'$${formula}$$'
        src = node.attrs['src']
        name = src.split('/')[-1]
        with open(f'./_drafts/{title_quoted}-assets/{name}', 'wb') as img:
            img.write(requests.get(src, headers=headers, stream=True).content)
        return f'\n![{name}](./{title_quoted}-assets/{name})\n'
    if node.name == 'figcaption':
        return f'*{node.text}*\n'
    if node.name == 'b':
        return f"**{''.join((html2md(c) for c in node.children))}**"
    if node.name == 'i':
        return f"*{''.join((html2md(c) for c in node.children))}*"
    if node.name == 'div':
        return ''.join((html2md(c) for c in node.children)) + '\n\n'
    if node.name == 'pre':
        return ('```' 
        + node.code.attrs['class'][0].split('-')[-1] 
        + '\n' + node.code.text 
        + '\n```\n')
    if node.name == 'code':
        return f'`{node.text}`'
    if node.name == 'blockquote':
        content = ''.join((html2md(c) for c in node.children))
        return '> ' + '\n> \n> '.join(content.split('\n')) + '\n\n'
    if node.name == 'br':
        return '\n'
    if node.name == 'ol':
        if node.attrs.get('class') and 'ReferenceList' in node.attrs['class']:
            result = ''
            for li in node.children:
                index = li.attrs['id'].split('_')[1]
                result += f"[^{index}]: {escape(li.text).strip('^')}\n"
            return result
        result = ''.join(f'{index}. {html2md(li)}\n' for index, li in enumerate(node.children, start=1))

        return result
    if node.name == 'ul':
        return '- ' + '\n- '.join((html2md(c) for c in node.children)) + '\n\n'
    if node.name == 'li':
        return ''.join((html2md(c) for c in node.children))
    if node.name == 'span':
        if node.attrs.get('data-tex'):
            return f'$${node.attrs.get("data-tex")}$$'
        return ''.join((html2md(c) for c in node.children))
    if node.name == 'sup':
        return ''.join((html2md(c) for c in node.children))
    return str(node)


if __name__ == '__main__':
    url = input('请输入网址: ').strip()    
    req = requests.get(url, headers=headers)
    req.encoding = 'utf-8'
    soup = BeautifulSoup(req.text, features='lxml')
    title = soup.title.text.strip('- 知乎').strip()
    title_quoted = title.replace(' ', '')
    Path(f'./_drafts/{title_quoted}-assets').mkdir(exist_ok=True, parents=True)
    markdown = f'''# 文章 | {title}

:::tip
本文首发于知乎。
:::

'''
    for n in soup.find(class_='RichText'):
        markdown += html2md(n)
    while re.findall(r'\n\n\n', markdown):
        markdown = re.sub(r'\n\n\n', '\n\n', markdown)
    with open(f'./_drafts/{title}.md', 'w', encoding='utf-8') as f:
        f.write(markdown)
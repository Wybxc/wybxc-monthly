import React from 'react'

const tips = [
  '你瞎了？试试深色模式',
  '忘忧北萱草月刊是用 Docusaurus 搭建的哦',
  '欢迎来到月刊，有什么问题可以在这里提问',
  '想知道网站的源码？右上角点击 Github 图标',
  '有什么想说的？可以在这里留言',
  '热知识：99% 的网站的进度条都是假的',
  '好看的 badge 可以从 shields.io 上生成哦',
  '忘忧北萱草月刊目前托管在 vercel 上',
  '忘忧北萱草月刊的网站：https://monthly.wybxc.cc',
  '主题色：#3a6adb',
  '阿祖，别刷新了，阿妈叫你洗碗了',
  '都几点了，还在看，赶快睡觉',
  'sdıʇ ǝsɹǝʌǝɹ ɐ sı sıɥʇ',
  '你是过来看文章的还是看 tips 的',
  'Loading 是停不下来的',
  '请大声喊出我的名字吧！',
  '不要停下来啊（指写文章）',
  '塔塔开，一自摸塔塔开',
  '剑光如我，斩尽芜杂',
  '忘忧北萱草，哇库哇库',
  '冷知识：来回切换深色模式可以快速刷新 tips',
  '冷知识：评论区加载前后会刷新 tips 哦',
  '如果看到 tips 突然变化，这是特性，绝对不是 bug',
  '如果文章看不懂，那么你没有看懂文章',
  '你这网站是金子做的还是服务器是金子做的',
  'fut.set_result("KEEP_ALIVE")',
  '因为忘忧北萱草去写作业了，所以文章咕了',
  '因为忘忧北萱草去打音游了，所以文章咕了',
  '因为忘忧北萱草去隔壁看热闹了，所以文章咕了',
  '因为忘忧北萱草想咕咕咕，所以文章咕了',
  '什么超级魔法',
  '好康，是新魔法哦',
  '基操勿6',
  '不是 excel？？不是 excel？？',
  '新人欢迎我们',
  '泻药，阿巴阿巴阿巴',
  '好欸，是北大美少女',
  '所以，忘忧北萱草月刊在哪里能看呢',
  '热知识：这里的 tips 大部分是从 graiax.cn 复制的',
  '最❤️新❤️最❤️热',
  '没有更多了',
  '你猜猜刷新几次才能再看到这条 tips？',
  '&wybxc as *const _ as *mut _',
  '话放在这里，如果没写完，下个月我再来套娃',
  '什么时候能在 Github Trending 上看到忘忧北萱草呢',
  '怎么有人明天要交的论文还没开始写',
  '不要问，问就是上游依赖的问题',
  'await group.mute("忘忧北萱草")',
  '大佬您来了',
  '/约锅 忘忧北萱草 1200 农 孜然 1 1',
  '这是你群北大美少女',
  '这是一条 tips',
  '欢迎大家投稿 tips！'
]

const Tips: React.FC = () => {
  const tip = tips[Math.floor(Math.random() * tips.length)]
  return (
    <p style={{ textAlign: 'center', marginTop: '1rem' }}>
      <b>Tips: </b>
      {tip}
    </p>
  )
}

export default Tips

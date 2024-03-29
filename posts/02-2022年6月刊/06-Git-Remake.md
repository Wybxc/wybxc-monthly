# 项目 | Git 重学指南

:::tip
最新 Git 重学指南。

来自：https://github.com/Wybxc/git-remake-guide
:::

<div style={{ textAlign: "center" }}>

<svg width="200px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>{`.cls-1{fill:#bf7141;}.cls-2{fill:#fff;}`}</style></defs><rect class="cls-1" x="91.89" y="85.66" width="337.68" height="337.68" rx="27.83" transform="translate(-103.59 258.9) rotate(-45)"/><path class="cls-2" d="M261.91,151c-3.34,0-6.65.15-9.91.45V111.6l-99.09,78.87L252,249.61V211.17a49.28,49.28,0,1,1-32.27,74.16c-.12-.31-.29-.69-.49-1.09-2.16-4.41-2.35-8-8.05-13.21-12.43-11.34-21.86-13.11-33.51-8.74-18.31,6.86-20.41,23.32-17.49,35a54,54,0,0,0,2,6,109,109,0,0,0,99.76,64.69c60.2,0,109-48.56,109-108.45S322.11,151,261.91,151Z"/></svg>

> 不要因为学不会 Git 而选择 remake。在那之前，先来 remake 一下你的 Git 知识。

[![Build](https://img.shields.io/github/deployments/Wybxc/git-remake-guide/github-pages?label=build&logo=mdbook&style=for-the-badge)](https://github.com/Wybxc/git-remake-guide/deployments/activity_log?environment=github-pages)
[![Licence](https://img.shields.io/badge/licence-CC--BY--NC--SA--4.0-%23EF9421?style=for-the-badge&logo=Creative%20Commons&logoColor=white)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Remake](https://img.shields.io/badge/let's-%2Fremake-ff69b4?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTcuOTkgMjU2LjMyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTI3LjU5LDM5LjU4cS01LDAtOS45LjQ0Vi4xNUwxOC42LDc5bDk5LjA5LDU5LjE1Vjk5LjcyYTQ5LjI3LDQ5LjI3LDAsMSwxLTMyLjI4LDc0LjE2Yy0uMTItLjMyLS4yOS0uNjktLjQ4LTEuMS0yLjE2LTQuNDEtMi4zNi04LTguMDUtMTMuMkM2NC40NSwxNDguMjQsNTUsMTQ2LjQ2LDQzLjM2LDE1MC44M2MtMTguMzEsNi44Ny0yMC40LDIzLjMyLTE3LjQ5LDM1YTUzLjIyLDUzLjIyLDAsMCwwLDIsNiwxMDksMTA5LDAsMCwwLDk5Ljc1LDY0LjY4YzYwLjIsMCwxMDktNDguNTUsMTA5LTEwOC40NFMxODcuNzksMzkuNTgsMTI3LjU5LDM5LjU4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4LjYgLTAuMTUpIi8+PC9zdmc+)](https://git-remake.wybxc.cc)

</div>

这里是 Git 重学指南，顾名思义，帮助你重新学习 Git。

它适用于**已经学习过 Git，但是还想再学一遍**的人。

点击[这里](https://git-remake.wybxc.cc)开始 remake。

## 为什么要再学一遍？

我相信很多人和我一样，第一次知道 Git 是因为 GitHub。为了把自己的代码上传到 GitHub，上网随便找了一篇 Git 教程，匆匆浏览一遍，大概记住了几个命令，然后就开始使用 Git。最开始还没有什么问题，但是当你的项目做大了，或者有人向你发来了第一个 Pull Request，或者你想给项目发布第一个 Release，问题就接踵而至。

- 那些教程里讲的分支、合并、回滚，我应该在什么时候用？
- Pull Request 里的合并冲突为什么要在本地解决？
- Release 里的 tag 到底是打在哪里的？
- 我的项目依赖是否应该用 submodule 引入？

假如你对这些问题还是一头雾水，这说明，**你的 Git 知识需要 remake 了**。继续阅读本书，一定会对你有所帮助。

当然，如果你能清晰地回答出每个问题的正确答案，那么你的知识水平已经超过我了 :D。你可以继续往后翻一翻，看看文章中是不是有错误，指出来，或者帮我改正它。

## 如果我没学过 Git 呢？

如果你从来没有学过 Git，我的建议是先去阅读其他的教程，比如 [git-recipes](https://github.com/geeeeeeeeek/git-recipes) 和[廖大的教程](https://www.liaoxuefeng.com/wiki/896043488029600)，他们对初学者来说，绝对比这本书友好。

## 这本书会讲什么？

你可以看一眼旁边的目录。嗯，这个目录似乎和其他的 Git 教程没有什么区别。不过，我可以保证，这本书里的内容会和那些入门向的教程大不相同。

章节架构的相似是刻意为之。我希望这是一本由浅入深再浅出的书，按照相似于初次学习时走过的路径，再次看到那些命令和概念时，会有不一样的收获。

第一遍学到某个东西时，也许难免会产生一些误解。这里就是澄清误解，看透本质的好地方。

## 这里讲的一定是正确的吗？

老实说，我不确定。因为我本人也是正处于 remake 我的 Git 知识的阶段，这本书相当于我重学的笔记，所以难免会有一些错误。

另一方面，这本书会涉及到很多“最佳实践”。众所周知，“最佳实践”永远不是最完美的解决方案。而且，“最佳实践”难免带有我个人的喜好。我会尽可能做到客观，还希望诸位自行甄别扬弃。

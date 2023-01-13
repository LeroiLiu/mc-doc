# Mc-Doc

> Mc-Doc 是一个开源的快速文档生成器，您可以使用此项目快速生成文档项目

## 安装启动

```shell
git clone https://github.com/LeroiLiu/mc-doc.git
cd mc-doc
pnpm i
pnpm run dev
```

## 资料参考

- [vitepress英文文档](https://vitepress.vuejs.org/)
- [Mc-Doc的github地址](https://github.com/LeroiLiu/mc-doc/)

## 目录结构

```
docs
├─.vitepress
|     ├─config.ts
|     ├─terms.ts
|     ├─utils.ts
|     ├─versions.ts
|     ├─theme
|     ├─configDir
|     |     ├─themeConfig
|     |     |      ├─copyright.ts
|     |     |      ├─editLink.ts
|     |     |      ├─license.ts
|     |     |      ├─nav.ts
|     |     |      ├─sidebar.ts
|     |     |      └socialLinks.ts
|     |     ├─appConfig
|     |     |     └head.ts
├─src
|  ├─index.md
|  ├─public
|  ├─docs
|  |  ├─Mc-Doc
|  |  |   ├─1.x
|  |  |   |  ├─index.md
|  |  |   |  ├─...
├─.editorconfig
├─.npmrc
├─.prettierrc
├─README.md
├─package.json
├─postcss.config.js
├─tailwind.config.js
├─tsconfig.json
```

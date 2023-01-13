# 主题配置

> 站点配置继承vitepress优良特性，在此基础上，做了项目拆分

## 原始配置
在 `docs/.vitepress/config.ts`中进行`vitepress`的配置方式

## 拆分配置
您也可以在`docs/.vitepress/configDir/themeConfig`下新增配置，目前默认的为`copyright.ts`、`editLink.ts`、`license.ts`、`nav.ts`、`sidebar.ts`、`socialLinks.ts`。您也可以新增，然后在`docs/.vitepress/config.ts`中进行引入。

## nav.ts
该配置将会在右上角进行展示项目的信息，此信息需要依赖`docs/src/docs`目录下的配置，目前的版本不支持在开发端做到热更新。若新增项目，需要按照`项目名/版本号`创建目录。

例如Mc-Doc项目，则会在`docs/src/docs`下创建目录`Mc-Doc/1.x`。这样左上角的`nav`栏将会展示该项目。

## sidebar.ts
该配置将会在左侧进行展示项目的侧边栏分类，此信息需要依赖`docs/src/docs/项目名/版本号/sidebar.js`文件。

例如Mc-Doc项目，则会有`docs/src/docs/Mc-Doc/1.x/sidebar.js`文件。配置信息将会在每个项目左侧进行展示。`sidebar.js`也依然按照`vitepress`的配置进行。例如：
```
[
  {
    text: '开始使用',
    items: [
      { text: '关于1.x', link: '/docs/Mc-Doc/1.x/introduction' },
      { text: '立即开始', link: '/docs/Mc-Doc/1.x/' },
      { text: '常见问题汇总', link: '/docs/Mc-Doc/1.x/troubleshooting' },
      { text: '参与贡献', link: '/docs/Mc-Doc/1.x/contributing' },
    ]
  }
]
```


## copyright.ts
  您可以在这里配置copyright基本信息。
  ```
    export default `Copyright © 2013-${new Date().getFullYear()}`
  ```
## editLink.ts
  您可以在这里配置仓库修改地址，以便让更多的人参与到项目中。
  ```
    export default {
        pattern: 'https://github.com/LeroiLiu/mc-doc/edit/master/src/:path',
        text: '帮助我们改善此页面！'
    }
  ```
## license.ts
  您可以在这里配置license基本信息。
  ```
    export default {
      text: 'MIT License',
      link: 'https://opensource.org/licenses/MIT'
    }
  ```
## socialLinks.ts
  您可以在这里配置社交信息，将会在右上角进行展示。
  ```
    export default [
      { icon: 'github', link: 'https://github.com/LeroiLiu/mc-doc' }
    ]
  ```




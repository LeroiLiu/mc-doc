# 站点配置

> 站点配置继承vitepress优良特性，在此基础上，做了项目拆分

## 原始配置
在 `docs/.vitepress/config.ts`中进行`vitepress`的配置方式

## 拆分配置
您也可以在`docs/.vitepress/configDir/appConfig`下新增配置，目前默认的为`head.ts`,您也可以新增，然后在`docs/.vitepress/config.ts`中进行引入。

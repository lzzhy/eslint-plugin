使用自定义 Eslint 插件流程如下：
# 插件名：eslint-plugin-8513

插件名是 package.json 中的 name 字段，在这里就是 eslint-plugin-8513

## 安装：在需要使用的项目中

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-8513`:

```sh
npm install eslint-plugin-8513 --save-dev
```

## 使用\配置方式：在需要使用的项目中

Add `8513` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "8513"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "8513/【规则名】": 2  // 如： "8513/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here



```
# 全局安装 TypeScript
npm i -g typescript 

npm init

# 创建 tsconfig.json 配置文件
tsc --init

# 编译 ts 文件
tsc filename.ts 

# 运行编译后的 js 文件
node filename.js

# 监控文件变化，自动编译
tsc -w 
```

## 问题

1. [Cannot redeclare block-scoped variable 'name'](https://github.com/Microsoft/vscode/issues/22436)

2. [Node projects with --lib es6: cannot find name 'console'](https://github.com/Microsoft/TypeScript/issues/9545)

## 参考链接

[https://www.tslang.cn/](https://www.tslang.cn/)

[TypeScript 入门教程](https://legacy.gitbook.com/book/xcatliu/typescript-tutorial/details)

[使用VSCode搭建TypeScript开发环境 (重点)](https://www.cnblogs.com/faunjoe88/p/7160650.html)
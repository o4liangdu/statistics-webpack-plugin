### 一个打包大小分析插件

此webpack插件由以下几个部分组成：
1. 一个具名javaScript函数
2. 在插件函数的 prototype 上定义的一个 apply 方法。
3. 指定一个绑定到 webpack 自身的事件钩子。
4. 处理 webpack 内部实例的特定数据。
5. 功能完成后调用 webpack 提供的回调  

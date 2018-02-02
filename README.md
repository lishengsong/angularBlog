# AngularBlog

Angualr CLI提供了许多常用命令供我们选择：

ng generate class my-new-class              // 新建 class
ng generate component my-new-component      // 新建组件
ng generate directive my-new-directive      // 新建指令
ng generate enum my-new-enum                // 新建枚举
ng generate module my-new-module            // 新建模块
ng generate pipe my-new-pipe                // 新建管道
ng generate service my-new-service          // 新建服务
当然选择。。简写：

ng g cl my-new-class        // 新建 class
ng g c my-new-component     // 新建组件
ng g d my-new-directive     // 新建指令
ng g e my-new-enum          // 新建枚举
ng g m my-new-module        // 新建模块
ng g p my-new-pipe          // 新建管道
ng g s my-new-service       // 新建服务
CLI git文档

3. 单元测试
Angular默认帮我们集成了``karma`测试框架，我们只需要：

$ ng test
4. 端到端测试

$ ng e2e
关于Angular测试部分详细可以参考官方文档。
5. 构建应用程序

$ ng built
其中过程应该是这样的：
Angular CLI 从 .angular-cli.json 文件中加载配置信息
Angular CLI 运行 Webpack 打包项目相关的 JavaScript、 CSS 等文件
打包后的资源，将被输出到配置文件中 outDir 所指定的目录，默认是输出到 dist 目录。

这只是一个初级的文档，强烈建议请参考Angular CLI 终极指南

7. 参考文献
官方文档--Angular CLI快速起步
官方文档--部署
Angular CLI 终极指南

链接：https://www.jianshu.com/p/327d88284abb
 

# 仿CNode的多人博客管理系统
## 技术栈

- express——开启服务的框架
- MongoDB——数据库

- Mongoose——操作数据库
- art-template——模版引擎
- express-art-template
- md5——密码加密
- session——管理数据登录状态

## 实现功能 

- 登录
- 注册
- 首页退出

## 路由设计

| 路径      | 方法 | get参数 | post参数                  | 是否需要权限（登录） | 备至         |
| --------- | ---- | ------- | ------------------------- | -------------------- | ------------ |
| /         | GET  |         |                           |                      | 渲染首页     |
| /register | GET  |         |                           |                      | 渲染注册页面 |
| /register | POST |         | email、nickname，password |                      | 处理注册请求 |
| /login    | GET  |         |                           |                      | 渲染登录页面 |
| /login    | POST |         | email，password           |                      | 处理登录请求 |
| /logout   | GET  |         |                           |                      | 处理退出请求 |

## 项目结构

├── README.md<br/>
├── package-lock.json<br/>
├── package.json<br/>
├── node_modules<br/>
├── app.js<br/>
├── router.js<br/>
├── models<br/>
│   ├── comment.js<br/>
│   ├── topic.js<br/>
│   └── user.js<br/>
├── public<br/>
│   ├── css<br/>
│   │   ├── login.css<br/>
│   │   ├── main.css<br/>
│   │   ├── markdown-github.css<br/>
│   │   └── settings.css<br/>
│   ├── img<br/>
│   │   ├── avatar-default.png<br/>
│   │   ├── avatar-max-img.png<br/>
│   │   └── logo3.png<br/>
│   └── js<br/>
├── views<br/>
│   ├── _layouts<br/>
│   │   └── home.html<br/>
│   ├── _partials<br/>
│   │   ├── footer.html<br/>
│   │   ├── header.html<br/>
│   │   └── settings-nav.html<br/>
│   ├── index.html<br/>
│   ├── login.html<br/>
│   ├── register.html<br/>
│   ├── settings<br/>
│   │   ├── admin.html<br/>
│   │   └── profile.html<br/>
│   └── topic<br/>
│       ├── edit.html<br/>
│       ├── new.html<br/>
│       └── show.html<br/>

## 截图
   
   - ### 登录
![](./登录页.png)

   - ### 首页
![](./首页.png)

   - ### 注册页
![](./注册页面.png)
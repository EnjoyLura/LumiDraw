# Lumi-Draw — AI 画图微信小程序

## 项目概述

Lumi-Draw 是一个基于**微信小程序云开发**的 AI 画图应用，支持多模型接入（Google Nano Banana、OpenAI GPT-Image、字节 Seedream 等），采用积分经济体系（1 元 = 10 积分）。

项目包含两部分代码：
- **`prototypes/`** — HTML 原型（纯前端 HTML/CSS/JS，用于设计验证与交互原型）
- **`miniprogram/`** — 微信小程序正式代码（WXML/WXSS/JS + 云开发后端）

## 目录结构

```
├── cloudfunctions/          # 云函数
├── docs/                    # 产品需求文档 & 技术设计文档
├── miniprogram/             # 微信小程序源码
│   ├── components/          # 小程序组件
│   ├── images/              # 图片资源
│   ├── pages/               # 小程序页面
│   ├── app.js / app.json    # 小程序入口
│   └── envList.js           # 云环境配置
├── prototypes/              # HTML 原型（独立运行，不依赖小程序框架）
│   ├── shared/              # 共享样式与脚本（base.css, lightfx.css, glass-components.css 等）
│   ├── images/              # 原型图片资源
│   └── *.html               # 各页面原型
├── project.config.json      # 微信开发者工具项目配置
└── docs/                    # 产品需求文档.md / 技术设计文档.md
```

## 技术栈

| 模块 | 技术 |
|------|------|
| 小程序前端 | WXML + WXSS + JS（微信原生） |
| 后端服务 | 微信云开发（云函数 + 云数据库 + 云存储） |
| HTML 原型 | 纯 HTML/CSS/JS，无框架依赖 |
| 原型本地服务 | `python -m http.server 8080`（在 `prototypes/` 目录执行） |

## 核心功能（5 个 TabBar）

1. **画廊** — 用户作品展示、生成同款、收藏
2. **灵感** — 官方模板 + AI 图片处理工具
3. **创作** — 多模型 AI 生图（中间 TabBar 按钮，视觉突出）
4. **作品** — 用户历史 / 发布 / 收藏管理
5. **我的** — 用户中心 + 积分体系

## 设计规范

### 视觉风格
- **暗色极简 × 毛玻璃 × 光动效**
- 背景色：`#0a0a0f`（极深紫黑）
- 主色（极光紫）：`#6c5ce7`（CSS 变量 `--accent-1`）
- 辅助色：赛博青 `#00cec9`、玫粉 `#fd79a8`、金 `#fdcb6e`
- 毛玻璃：`rgba(255,255,255, .04 ~ .08)`

### 原型设计令牌
- 手机框架：`.phone-frame`（375 × 812）
- 12 个 CSS 变量统一管理色彩、间距、圆角等
- 4 种光动效：流光边框 / 呼吸脉冲 / 极光散射 / 星尘漂浮

### 文案规范
- UI 中 `Prompt` 标签统一显示为 **"标题"**
- 积分直接叫"积分"，不使用别名

## 开发约定

### HTML 原型
- 所有原型页面共享 `prototypes/shared/` 下的设计令牌与组件库
- 新增页面必须引用 `base.css`、`pages.css`，按需引入 `lightfx.css`、`glass-components.css`
- TabBar 导航结构保持一致，当前页高亮状态正确设置
- 原型通过 `http://localhost:8080/页面名.html` 访问

### 小程序
- 遵循微信云开发最佳实践
- 页面与组件使用微信原生写法（WXML/WXSS/JS/JSON 四件套）
- 云函数放在 `cloudfunctions/` 目录，每个云函数一个子目录
- TabBar 配置在 `miniprogram/app.json` 中维护

### 代码风格
- 缩进：2 空格
- CSS 使用 CSS 变量引用设计令牌，避免硬编码色值
- 注释使用中文

## 文档索引

- [产品需求文档](docs/产品需求文档.md) — 产品定位、竞品分析、用户画像、功能设计、经济模型、增长策略、UI 设计
- [技术设计文档](docs/技术设计文档.md) — 系统架构、数据库设计、云函数、AI 模型对接、前端实现、安全、运维
- [原型开发计划](prototypes/PLAN.md) — HTML 原型页面开发进度与规划

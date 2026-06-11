# Lumi-Draw 微信小程序完整 HTML 原型图计划

## Context

用户需要将 `GLM5.1.html` 的极简主义+毛玻璃+光动效设计风格，应用到 Lumi-Draw 微信小程序的所有界面，生成一套完整的可交互 HTML 原型图文件。Lumi-Draw 是"人人都是AI艺术家"的 AI 生图小程序，包含5个TabBar页面+13个子页面，共18个界面。

设计风格核心要素：深色背景(#0a0a0f)、毛玻璃卡片(blur 40px)、5种光动效(流光边框/呼吸脉冲/极光散射/星尘漂浮/波纹触控)、极光紫#6c5ce7+赛博青#00cec9等品牌色、Inter字体、cursor glow、scroll reveal动画。

---

## Task 1: 创建共享框架 (5个文件)

**目标**: 将 GLM5.1.html 的设计系统提取为可复用的CSS/JS模块

**文件清单**:
- `prototypes/shared/base.css` — 设计令牌(12个CSS变量)+全局重置+手机框架(.phone-frame 375x812居中)+状态栏+底部TabBar(创作Tab放大渐变)+通用排版
- `prototypes/shared/glass-components.css` — 9个毛玻璃组件类：.glass/.glass-card/.glass-pill/.glass-input/.glass-btn-primary/.glass-btn-glass/.glass-tab/.glass-list-item/.glass-badge
- `prototypes/shared/lightfx.css` — 5种光动效完整提取(流光边框/呼吸脉冲/极光散射/星尘漂浮/波纹触控+入场动画)，从GLM5.1.html L399-595+L584-595直接迁移
- `prototypes/shared/animations.css` — fadeUp/reveal/lfx-enter/slide-up/fade-in/stagger-children
- `prototypes/shared/app.js` — 10个共享JS函数：initPhoneFrame/initScrollReveal/initStardust/initRipple/initTabs/navigateTo/showToast/showModal/initPullRefresh/initWaterfall

**关键设计**:
- 每个HTML文件用 `.phone-frame` 包裹，模拟iPhone界面(375x812居中展示)
- TabBar共享组件：5个Tab，创作Tab特殊处理(渐变色圆形背景+放大)
- 所有页面通过CSS变量继承同一设计令牌体系

---

## Task 2: 创建5个TabBar页面 (5个HTML文件)

| 文件 | 光动效选择 | 关键组件 | 交互要点 |
|------|-----------|----------|---------|
| `proto-gallery.html` | 极光散射(顶部背景)+星尘漂浮(空状态) | 分类筛选条(7个Pill)+双列瀑布流+下拉刷新+骨架屏 | 篮选切换分类→卡片点击→详情页 |
| `proto-inspiration.html` | 流光边框(激活Tab)+呼吸脉冲(工具图标) | 双Tab切换器+模板分类+模板卡片+2x3工具宫格 | Tab切换→卡片点击→详情/工具页 |
| `proto-create.html` | 流光边框(创作按钮)+极光散射(等待动画)+波纹触控(模型卡片) | Prompt文本域+模型选择器(分组横滑)+参数面板+积分消耗提示+创作按钮 | 输入→选模型→调参数→看积分→创作→等待→结果 |
| `proto-works.html` | 呼吸脉冲(子Tab指示器) | 三个子Tab+3列网格+空状态+批量管理 | 子Tab切换→卡片点击→详情 |
| `proto-profile.html` | 极光散射(用户信息背景) | 用户信息卡+积分余额(金色)+统计三宫格+功能列表 | 头像点击→编辑/积分→各功能跳转 |

---

## Task 3: 创建画廊子页面 (2个HTML文件)

| 文件 | 光动效 | 关键组件 |
|------|--------|---------|
| `proto-gallery-detail.html` | 流光边框(生成同款按钮)+波纹触控(点赞/收藏) | 大图+创作参数卡+操作栏(生成同款/收藏/分享/点赞)+作者信息 |
| `proto-gallery-user.html` | 极光散射(封面背景) | 用户封面+作品数/获赞+双列瀑布流 |

---

## Task 4: 创建灵感子页面 (3个HTML文件)

| 文件 | 光动效 | 关键组件 |
|------|--------|---------|
| `proto-template-detail.html` | 流光边框(使用模板按钮)+呼吸脉冲(轮播指示器) | 示例图轮播+Prompt模板展示+推荐模型+使用模板按钮 |
| `proto-tool-list.html` | 呼吸脉冲(工具图标) | 2x3宫格6个工具卡片(图标+名称+积分标签) |
| `proto-tool-process.html` | 极光散射(处理中动画)+流光边框(开始处理按钮) | 三态切换(上传/处理/结果)+进度动画+结果预览 |

---

## Task 5: 创建创作+作品子页面 (2个HTML文件)

| 文件 | 光动效 | 关键组件 |
|------|--------|---------|
| `proto-create-result.html` | 流光边框(结果卡边框)+星尘漂浮(装饰) | 大图预览+操作按钮(保存/发布/重新生成/修改参数) |
| `proto-works-detail.html` | 波纹触控(操作按钮) | 大图+参数卡+操作(下载/发布/删除) |

---

## Task 6: 创建我的子页面 (5个HTML文件)

| 文件 | 光动效 | 关键组件 |
|------|--------|---------|
| `proto-points-center.html` | 极光散射(余额区)+流光边框(选中档位) | 余额卡(金色大号数字)+5档充值选择+积分明细Tab |
| `proto-sign-in.html` | 呼吸脉冲(签到按钮)+星尘漂浮(签到成功撒花) | 日历视图+连续签到里程碑+签到按钮+奖励提示 |
| `proto-invite.html` | 极光散射(海报区)+流光边框(邀请码卡片) | 邀请码(6位大号)+复制按钮+邀请规则+海报预览+分享按钮 |
| `proto-settings.html` | 波纹触控(列表项) | 分组列表(通知/隐私/关于)+开关+退出登录 |
| `proto-edit-profile.html` | 流光边框(保存按钮) | 头像上传+昵称输入+签名文本域+保存按钮 |

---

## Task 7: 创建公共页面 (1个HTML文件)

| 文件 | 光动效 | 关键组件 |
|------|--------|---------|
| `proto-image-preview.html` | 星尘漂浮(背景轻量) | 全屏图片+关闭按钮+保存按钮 |

---

## 导航关系

- TabBar页面间通过底部TabBar直接切换(window.location.href)
- 子页面顶部有返回按钮(history.back())
- 画廊详情→创作(生成同款)、灵感→创作(使用模板)、创作→结果(生成完成)
- 所有含大图页面→图片预览页
- 参数通过URL query string传递模拟

---

## 验证方案

1. 在浏览器中打开每个proto-xxx.html文件，确认：
   - 手机框架正确显示(375x812居中)
   - 毛玻璃效果可见(backdrop-filter生效)
   - 光动效按预期运行(流光旋转/呼吸起伏/极光波动/粒子漂浮/波纹扩散)
   - TabBar切换正常
   - 页面间链接跳转正常
2. 重点验证创作页(proto-create.html)的模型选择+积分计算联动
3. 验证签到页(proto-sign-in.html)的日历渲染+签到动画
4. 验证工具处理页(proto-tool-process.html)的三态流转

---

## 实施顺序

第一批→共享框架+画廊页(验证框架可行性)
第二批→5个TabBar页面
第三批→画廊+灵感子页面
第四批→创作+作品子页面
第五批→我的+公共子页面
# Purrl (Catelier) — MCP 全自动化工作流

> AIGC 猫美学 + 定制 POD 独立站 | 生成 → 处理 → 上架 → 运营 → 收款

---

## 🧩 MCP 链条架构

```
┌─────────────────────────────────────────────────────────┐
│                    Purrl MCP Pipeline                    │
├──────────┬──────────┬──────────┬──────────┬─────────────┤
│ 灵感搜集  │  AI生图   │  后期处理  │  电商运营  │   收款     │
│          │          │          │          │           │
│ stock-   │ image_   │ fal-     │ shopify  │ stripe    │
│ images   │ generate │ mcp      │ mcp      │ mcp       │
│          │          │          │          │           │
│ Pexels   │ FAL via  │ 去背景    │ 产品管理  │ 支付处理   │
│ 搜参考图  │ Nous订阅  │ 放大     │ 订单履约  │ 订阅账单   │
│          │          │ 模型发现  │ 客户管理  │           │
└──────────┴──────────┴──────────┴──────────┴───────────┘
```

---

## ⚙️ 已安装的 MCP 服务器

| 服务器 | 传输 | 工具数 | 状态 | 用途 |
|--------|------|--------|------|------|
| `fal` | stdio (npx) | 5 | ✅ Active | 生图/去背景/放大/TTS/模型列表 |
| `stock-images` | stdio (npx) | 2 | ✅ Active | Pexels 搜图/下载 |
| `stripe` | HTTP | 20+ | ✅ Active | 支付/订阅 (OAuth) |
| `comfyui` | HTTP | 8+ | ✅ Active | ComfyUI 深度生图 (需本地启动) |
| `shopify` | stdio | 36 | ⚠️ Disabled | 店铺管理 (需 Shopify 凭证) |
| `shopops` | stdio | 12 | ⚠️ Disabled | 运营分析 (需 git clone 构建) |
| `github` | stdio | 26 | ✅ Active | Git/Issue/PR 管理 |

### 配置位置
`%LOCALAPPDATA%\hermes\config.yaml` → `mcp_servers:` 节点

### 需要的 API Keys

| Key | 用于 | 获取 |
|-----|------|------|
| `FAL_KEY` | fal-mcp 生图/去背景 | [fal.ai/dashboard/keys](https://fal.ai/dashboard/keys) |
| `PEXELS_API_KEY` | stock-images 搜图 | [pexels.com/api](https://www.pexels.com/api/) 免费 |
| Shopify Token | shopify MCP | Shopify Admin → 开发应用 |
| Stripe OAuth | stripe MCP | 首次使用弹窗认证 |

---

## 🎯 工作流操作手册

### 1. 搜灵感参考图
```
直接说: "搜 10 张日系猫插画参考图"
        "找极简风格猫的 reference"
        "搜适合做手机壳图案的猫"
```
→ 自动调用 `mcp_stock_images_search_images`

### 2. AI 生成猫图案
```
直接说: "生成一张水墨风猫剪影，做 T 恤用"
        "赛博朋克猫，深色背景"
        "水彩风格猫脸，柔和色调"
```
→ 自动调用 `image_generate` (Hermes 内置，走 Nous FAL)

### 3. 质量评估
```
直接说: "这张图适合做卫衣吗"
        "评估印刷效果"
```
→ 自动调用 `vision_analyze`

### 4. 下载素材
```
直接说: "把这些参考图都下载到 purrl/moodboard"
```
→ 自动调用 `mcp_stock_images_download_image`

### 5. 查看可用模型
```
直接说: "FAL 现在有哪些生图模型"
```
→ 自动调用 `mcp_fal_list_models`

### 6. 去背景 + 放大（需要 FAL_KEY 后可用）
```
直接说: "把这张产品图去背景"
        "放大到 4K"
```
→ 自动调用 `mcp_fal_remove_background` / `mcp_fal_upscale_image`

### 7. 上架 Shopify（需要店铺后可用）
```
直接说: "把这个图案创建为 Shopify 产品，定价 $29.99"
```
→ 自动调用 `mcp_shopify_*`

---

## 🔄 完整自动化示例

```
用户: "做一套 3 张日系猫图案，准备上架 T 恤"

Hermes:
  1. stock-images 搜 "Japanese cat illustration minimal" → 5 张参考
  2. image_generate 生成 3 张不同配色
  3. vision_analyze 评估每张印刷效果
  4. [店铺就绪后] shopify 创建 3 个产品
```

---

## 📂 导出目录

```
D:\hermes-workspace\exports\purrl-test\
├── moodboard/        ← 参考图
├── designs/          ← AI 生成的图案
├── processed/        ← 去背景+放大后
└── product-photos/   ← 上架用产品图
```

---

## 🚧 待办

- [ ] 获取 FAL_KEY 激活去背景/放大
- [ ] 创建 Shopify 店铺 → 激活 shopify MCP
- [ ] 构建 shopops-mcp → git clone + npm build
- [ ] 启动 ComfyUI → 激活深度生图能力
- [ ] 配置 Stripe OAuth → 激活收款

---

*最后更新: 2026-06-27 | Hermes Agent + Nous Research*

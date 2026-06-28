# Purrl — MCP 框架 v2（对齐六支柱）

> 2026-06-28 | 重新梳理：每个 MCP 工具映射到验证后的产品支柱

---

## 一、产品支柱 → MCP 工具映射

```
完整商业闭环
  AI短视频(获客) → 写真集(转化) → 真猫配饰(变现) → 3D雕塑(高客单)
                                          ↓
                                    数字孪生(留存)
```

| 支柱 | 阶段 | 需要的能力 | MCP/工具 | 状态 |
|------|------|-----------|----------|------|
| **AI短视频** | MVP | 图生视频 | 可灵/Runway API（待接） | ❌ 未配 |
| **写真集** | MVP | 文生图/图生图 | `image_generate`(FAL,Nous订阅) | ✅ 已验证 |
| **写真集** | MVP | LoRA保脸 | FAL LoRA训练（待接） | ⚠️ 待配 |
| **真猫配饰** | MVP | 毛色提取 | `vision_analyze` + 自写色板算法 | ✅ 可用 |
| **真猫配饰** | MVP | 去背景做产品图 | `fal_remove_background` | ✅ 已配 |
| **真猫配饰** | MVP | 上架/下单 | `shopify`(待启) + `stripe` | ⚠️ 待配 |
| **真猫配饰** | MVP | POD履约 | Printful/1688（待接） | ❌ 未配 |
| **3D雕塑** | Phase2 | 单图3D重建 | TripoSR/comfyui（待接） | ⚠️ comfyui需启 |
| **3D雕塑** | Phase2 | 放大修模 | `fal_upscale_image` | ✅ 已配 |
| **数字孪生** | Phase2 | 猫角色对话 | LLM(DeepSeek/MiniMax) | ✅ 可用 |
| **数字孪生** | Phase2 | 猫声合成 | `fal_generate_speech`(Chatterbox) | ⚠️ 需本地启 |
| 全局 | — | 灵感参考图 | `stock_images`(Pexels) | ⚠️ 缺key |
| 全局 | — | 代码托管 | `github` | ✅ 已用 |
| 全局 | — | 收款 | `stripe`(OAuth) | ✅ 已配 |

---

## 二、MCP 服务器清单（重新核对）

| 服务器 | 工具数 | 状态 | 对应支柱 |
|--------|--------|------|----------|
| `fal` | 5 | ✅ Active | 写真集/配饰图/3D放大 |
| `image_generate`(内置) | 1 | ✅ Active | 写真集主力（Nous订阅FAL） |
| `vision_analyze`(内置) | 1 | ✅ Active | 配饰毛色提取 |
| `stripe` | 20+ | ✅ Active | 全局收款 |
| `github` | 26 | ✅ Active | 全局托管 |
| `comfyui` | 8+ | ⚠️ 需本地启 | 3D雕塑深度生成 |
| `stock_images` | 2 | ⚠️ 缺Pexels key | 灵感参考图 |
| `shopify` | 36 | ⚠️ Disabled缺店铺 | 配饰上架 |
| `shopops` | 12 | ⚠️ Disabled | 运营分析 |

> 可用模型：nano-banana-pro(推荐) / flux-2(常403,慎用)。去背景birefnet、放大clarity-upscaler均可用。

---

## 三、按 MVP 优先级排的待办

### MVP 必须打通（获客→转化→变现闭环）

```
1. AI短视频（获客）
   [ ] 接入可灵(Kling)API — 图生视频
   [ ] 水印系统（免费段带Purrl水印=传播）
   [ ] 成本控制：免费1段低清

2. 写真集（转化）
   [✅] image_generate 已跑通（9张9分样本）
   [ ] LoRA保脸训练管线（FAL）
   [ ] 付费墙：3.9元解锁高清无水印

3. 真猫配饰（变现）
   [✅] vision_analyze 可提毛色
   [ ] AI配色算法（毛色→项圈配色推荐）
   [✅] fal_remove_background 做产品图
   [ ] Printful/1688 POD对接
   [ ] shopify 店铺 + stripe 收款
```

### Phase 2

```
4. 3D雕塑
   [ ] comfyui 本地启动 + TripoSR
   [ ] 猫毛重建质量测试（100张照片，看失败率）
   [ ] POD 3D打印供应商对接

5. 数字孪生
   [ ] 猫角色 LLM prompt 系统
   [ ] fal_generate_speech 猫声（可选）
```

---

## 四、关键缺口（阻塞MVP）

| 缺口 | 影响支柱 | 优先级 |
|------|---------|--------|
| 可灵/Runway 视频API未接 | AI短视频(获客) | 🔴 高 |
| LoRA保脸管线未建 | 写真集差异化 | 🔴 高 |
| POD供应链未对接 | 真猫配饰变现 | 🔴 高 |
| shopify店铺未建 | 配饰上架 | 🟡 中 |
| Pexels key缺失 | 灵感图（非必须） | 🟢 低 |

---

## 五、技术成本估算（每用户）

| 操作 | 成本 | 备注 |
|------|------|------|
| 写真生成 | ~0.01元/张 | FAL极便宜 |
| LoRA训练 | ~1-3元/猫 | 一次性 |
| AI短视频 | ~1元/5秒段 | 可灵 |
| 3D重建 | ~1-3元/次 | TripoSR |
| 数字孪生对话 | ~0.001元/条 | DeepSeek便宜 |
| 毛色提取 | ~0.01元 | vision |

> 数字成本几乎可忽略。真正的成本在POD实物履约（配饰28-38元/3D 70-100元）。

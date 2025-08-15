<p align="center"><img src="https://github.com/y271727uy/farmers-ranch-modpack/blob/main/image/logo_three.png" alt="Logo"></p>
<h1 align="center">农夫的牧场：田园牧歌</h1>
<p align="center">适用于Mincraft 1.20.1 forge的整合包.</p>
<h1 align="center">

![License](https://img.shields.io/badge/license-LGPL--3.0(Partial)-blue.svg)  
![Version](https://img.shields.io/badge/version-6.5.1-green.svg)
![Minecraft](https://img.shields.io/badge/Minecraft-1.20.1-%2365C737) 
![Forge](https://img.shields.io/badge/Forge-47.4.0-%23E04E14)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)
![Maintenance](https://img.shields.io/badge/maintained-yes-green.svg)  
[![CurseForge](https://img.shields.io/badge/CurseForge-orange?logo=curseforge&logoColor=white)](https://www.curseforge.com/minecraft)
[![Modrinth](https://img.shields.io/badge/Modrinth-00AF5C?logo=modrinth&logoColor=white)](https://modrinth.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/y271727uy/farmers-ranch-modpack)
[![Bilibili](https://img.shields.io/badge/Bilibili-00A1D6?logo=bilibili&logoColor=white)](https://b23.tv/ZP8FzY8)
[![MC百科](https://img.shields.io/badge/mc百科-green.svg)](https://www.mcnod.cn/)
 
[English](https://github.com/y271727uy/farmers-ranch-modpack/tree/main) | 简体中文

</h1>

## 📜 目录
- [特色内容](#-特色内容)
- [安装指南](#-安装指南)
- [配置说明](#-配置说明)
- [许可协议](#-许可协议)
- [署名作品](#-署名作品)
- [贡献者名单](#-贡献者名单)
- [参与项目与反馈](#-参与项目与反馈)
- [法律信息声明](#-法律信息声明)
- [其他](#-其他)
- [FAQ](#-FAQ)

## 特色内容 
🌾 全新的种田体验

剔除掉重复农作物，并为特殊农作物提供详细的种植指南。
以现实世界的“四大农业”为基础，丰富农业玩法，让农业不再只是单一的“种地”。

<p align="center"><img src="https://github.com/y271727uy/farmers-ranch-modpack/blob/main/image/image_12.png" alt="Logo"></p>

---
💰 完整的经济与货币系统

村民不再是摆设！在多人游戏中，玩家之间可以通过市场进行以物易物或货币交易。 
贸易不再只是经济学的理论，而是融入生活与游戏的必需品。 
通过贸易与经济，重新连接整个世界。 

<p align="center"><img src="https://github.com/y271727uy/farmers-ranch-modpack/blob/main/image/image_2.png" alt="Logo"></p>

---
💤 松弛但不空虚的休闲包

“休闲包就是不能有目标？”完全错误！
这里没有强制目标，也没有卡科技线的硬性要求，但有一个“最终挑战”——类似 All the Mods 系列里的“星星收集”。
你可以：
- 全力追逐最终目标
- 放下脚步休息放松
- 按自己心意建造城邦
- 打造属于自己的侏罗纪公园
- 成为金牌大厨烹饪所有食物
- 做忙碌的店员，穿梭于厨房与顾客之间
- 或者做一个农民，享受朴实真诚的一刻

---
🛠 模组选择理念

秉承着“他们很精彩，但并不属于这里”的思路，本整合包没有加入太多冒险与战斗模组。
在烹饪模组方面，我选择了“农夫乐事全家桶”，但没有额外添加 Let's Do 系列、烹饪锅、分茶等优秀作品
尽管它们机制出色，但与现有内容重合度高，需要额外适配与魔改，并可能带来不可预知的兼容问题。
唯一的例外是“Let's do Vinery”，用于补全农夫乐事缺失的红酒酿造体系。

---
🍲 种田 + 模拟经营

可以理解为 《星露谷物语》 + 《夜雀食堂》 的组合：
既能经营农场，又能当店长开餐馆，让你在农场主与老板之间自由切换。

---

## 安装指南

 1. 获取整合包  
你可以在以下平台下载本整合包：
- CurseForge
- Modrinth
- GitHub Releases

本整合包严格遵循[mojang最终用户协议(Minecraft EULA)](https://www.minecraft.net/zh-hans/eula)，以免费更新、免费分发的形式进行传播。任何以付费形式提供下载的行为均属非法

 2. 系统要求  
- Java 版本：Java 17
- 内存分配：建议 ≥ 4GB
- Minecraft 版本：1.20.1
- forge版本：47.4.0

---

## 配置说明

 1. **Distant Horizons**   
根据测试本整合包完全兼容Distant Horizons 2.3.4-b版本，但进入世界后将会根据渲染距离出现40min-3h的世界渲染时间（这段时间内将会是黑屏状态）  
解决方案：在设置中关闭“启用渲染”，调低LOD渲染区块半径距离以减少时间

<p align="center"><img src="https://github.com/y271727uy/farmers-ranch-modpack/blob/main/image/image_1.png" alt="Logo"></p>
 
 2. **FancyMenu**  
添加主菜单音乐：`config\fancymenu\assets`，音频需要`.ogg`格式
添加幻灯片：`config\fancymenu\slideshows\slideshows_1\images`，图片需要`.png`格式且需要命名为`image_xxx.png`

 3. **ReTerraForged**  
**警告**：本模组兼容较差，且高度自定义化，游玩前请确保你的配置无误且未加载与其有严重冲突的模组（大部分地形模组都与其冲突）。

 4. **Create**  
**警告**：由于create 6.0+版本api变动导致大量已停更mod不兼容api，当前支持最高版本为create 0.5.1.j

---

## 许可协议

本项目采用联合授权方式，使用者必须同时遵守全部协议的规定,详见LICENSE文件夹
 - GUN LGPLv3.0
 - GMPLv1.0
 - EUROPEAN UNION PUBLIC LICENCEv1.2 （EUPL 1.2）
 - CC BY CN-4.0
 - AGPLv3 与 SSPLv1(**根据使用场景**选择其一)
 - 附加协议
 - 第三方项目使用协议

---

## 署名作品  
[详见这里](https://github.com/y271727uy/farmers-ranch-modpack/blob/main/License/third-party%20license/license%20list.xlsx) 
**第三方项目的许可证均在LICENSE文件夹下**
若有遗漏请通过github issue向我们反馈

---

## 贡献者名单
- [y271727uy](https://github.com/y271727uy):拥有者、主创
- [DancingSonw](https://github.com/DancingSnow0517):技术指导、mod移植
- [草莓棉花糖🍥](https://x.com/mhtqwq):贡献者、联系人
- [五六鸽二世]( https://b23.tv/31jZGZp):前期任务书
- [你是想气死铨酱么🍥]( https://b23.tv/Jl4DouS):法务
- [筱雨awa](https://x.com/_XiaoYu_OvO_):数据整理
- [这是谁？吃了！](https://x.com/Black_Millet):数据整理
- [nil](https://x.com/ChariseStever):提供部分主菜单背景图片
- [🏳️‍⚧️yc🍥](https://x.com/yccc_0000):贡献者Contributor
- dongziwawawa:摄影

---

## 参与项目与反馈  
1. 若您希望加入我们的团队进行开发您可通过以下渠道进行联系
- 邮箱联系(请填写主题)
- 在X上私信[草莓棉花糖🍥](https://x.com/mhtqwq)
2. 反馈
若您希望反馈bug、提出建议您可以通过以下渠道
- github issue
- 邮箱联系(请填写主题)
- 在线表格

---

## 法律信息声明

为保障创作者合法权益，**经授权，天津市小药娘网络科技工作室作为本项目的知识产权维权代表及法律事务执行实体。**  
在发现以下侵权或严重违规行为时，该单位将有权采取包括但不限于发函警告、平台申诉、律师函、民事诉讼等方式追责：

- 未经授权擅自转载、搬运、评测、伪装原创、去署名发布；
- 擅自修改协议内容并继续传播；
- 违反本整合包附带的自定义传播协议；
- 以恶意诽谤、抹黑、断章取义等方式损害作品及作者声誉的行为。

我们鼓励合理引用、合规使用及有署名的二次创作，但对任何形式的恶意侵权行为，将依法追究其法律责任。

---

## 其他

- **联系/反馈邮箱**：y871787uy@outlook.com
- **代执行单位联系方式**：1@ryq59.com  
- [在线反馈表格](暂未设置)
- [Bilibili预告片](https://b23.tv/ZP8FzY8)
- [Bilibili作者主页](https://space.bilibili.com/2014261602?spm_id_from=333.788.upinfo.head.click)

---

## FAQ

Q：为什么这个整合包是6.5.1版本？   
A：其实这是我从2023年5月开始游玩的一个小存档，那时它只有30个模组。随着后来因为生活与学业压力（也有一定gregtech的原因）越来越疲惫，我开始沉浸于休闲与种田，并在第五版之后正式决定开始制作本包。

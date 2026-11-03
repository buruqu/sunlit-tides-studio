# 晴光与泡影 Studio v2.1.1

联合发行 **Codex 2.1.1 / DSH 0.3.1**。

## 前端优化

- 调色板按功能分组，精简重复说明，固定标题与底部操作。
- 编辑器跟随亮暗外观，素材、布局、字体、特效分别展示对应内容；窄窗布局保持可操作。
- 画布选择、落叶或泡泡预设添加同步切换分类和导入用途，避免特效页继续按普通图片导入。
- 撤销与重做留在内容顶部；「工程」收纳恢复默认、恢复上次保存、导出分享工程与导入工程。
- DSH 使用「调色板」入口，改善外部亮色面板的主按钮文字对比。

保留原有壁纸、人物动画、落叶与泡泡、渐变文字、素材格式和工程保存协议。预设呼吸自然度仍有独立待检查项，本版未重调参数。

## 下载与升级

- [Codex Windows x64](https://github.com/buruqu/sunlit-tides-studio/releases/download/v2.1.1/SunlitTidesCodex-2.1.1-win-x64.zip)
- [DSH 插件](https://github.com/buruqu/sunlit-tides-studio/releases/download/v2.1.1/SunlitTides-DSH-0.3.1.zip)
- [DSH 独立源码](https://github.com/buruqu/sunlit-tides-studio/releases/download/v2.1.1/SunlitTides-DSH-source-0.3.1.zip)

沿用原安装入口，保留设置、素材工程及安装备份。Codex 只更新主题辅助程序和受管文件，无需重启主程序；DSH 先等待运行任务结束并正常退出，再安装和重开。恢复入口与边界见[安装指南](INSTALL.md)。

## 兼容与验证

Codex 面向 Windows 11 x64；DSH 接口基线为桌面端 0.2.1-rc.2，适配环境为 0.2.1-rc.3。主题和插件版本与宿主版本分别管理。DSH 包不含 GPT / Dragon 启动动画。

已完成两端合成宿主浏览器回归、编辑器检查、最终版本与模块检查、安装器隔离升级及 ZIP 完整性检查。合成浏览器结果不代表原生跨窗全验收；具体结果与未验证范围见[本版验证记录](VALIDATION-2.1.1.md)。

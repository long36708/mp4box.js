# MP4Box.js 演示

本目录包含 MP4Box.js 的多个演示示例，展示了该库的各种功能和用法。所有演示均在浏览器中运行，文件处理完全在本地进行，不会上传到任何服务器。

## 演示列表

### 1. MP4 在线播放器 (index.html)

一个功能完整的 MP4 播放器，支持实时分片和通过 Media Source Extensions (MSE) API 播放任意 MP4 文件。

**功能特性：**

- 支持选择预设 URL 或输入自定义视频 URL
- 可调节下载速率和下载块大小
- 支持实时下载模式
- 可配置分片设置（每个分段的媒体样本数）
- 显示媒体信息、轨道信息和 HTML5 MediaElement 轨道信息
- 支持播放速率调整
- 支持播放、停止、重置等控制

**适用场景：**

- 学习如何使用 MP4Box.js 进行实时分片
- 了解 MSE API 与 MP4Box.js 的集成
- 测试不同 MP4 文件的兼容性

### 2. MP4 文件分析工具 (filereader.html)

一个功能强大的 ISOBMFF Box 结构查看器，用于分析和检查 MP4 文件的内部结构。

**功能特性：**

- 支持本地文件上传或 HTTP URL 加载
- 多种查看视图：
  - 文件概览
  - Box 树状视图（支持展开/折叠）
  - Box 分区视图
  - Box Treemap 可视化视图
  - Sample 视图（表格、图形、映射、时间线）
  - Item 视图
  - Entity Group 视图
  - Segment 视图（表格、图形）
- 详细显示每个 Box 的属性和结构
- 可视化展示文件结构和样本分布

**适用场景：**

- 深入了解 MP4 文件内部结构
- 调试 MP4 文件问题
- 学习 ISOBMFF 规范
- 比较不同编码方式生成的 MP4 文件

### 3. 文件差异对比工具 (filediff.html)

用于比较两个 MP4 文件差异的工具。

**功能特性：**

- 同时加载两个 MP4 文件
- 比较它们的 Box 结构和属性
- 高亮显示差异部分：
  - 字段差异（橙色背景）
  - 子节点差异（黄色背景）
- 树状视图展示对比结果

**适用场景：**

- 对比不同编码参数生成的文件
- 验证文件修改前后差异
- 调试 MP4 文件处理流程

### 4. 基础文件分片工具 (file-segmenter.html)

一个简单的命令行风格分片工具，用于将 MP4 文件分段。

**功能特性：**

- 选择本地文件进行分片
- 可选择是否保留 mdat 数据
- 可配置是否执行分片操作
- 可配置分片后是否释放样本
- 可调整每个分段的样本数
- 实时显示文件大小和内存使用情况

**适用场景：**

- 快速测试文件分片功能
- 内存使用分析
- 批量文件处理

### 5. 分段文件播放器 (segment-player.html)

专门用于播放分段 MP4 文件的工具。

**功能特性：**

- 设置文件 MIME 类型
- 支持加密文件（通过 ClearKey DRM）
- 支持拖放分段文件
- 实时显示加载状态

**适用场景：**

- 测试 MSE 分段文件
- 测试加密视频播放
- 调试分段播放流程

### 6. MSE AVIF 查看器 (mse-avif-viewer.html)

基于 MSE 的 AVIF 图像查看器。

**功能特性：**

- 通过 Media Source Extensions 播放 AVIF 格式的图像序列
- 支持选择或输入 URL

**适用场景：**

- 测试 AVIF 格式支持
- 学习 MSE API 处理非标准媒体

### 7. HEVC 图像查看器 (hevcimageviewer/)

从 MP4 文件中提取 HEVC 图像并使用 BPG 显示的工具。

**功能特性：**

- 支持上传 MP4-HEVC 或 BPG 文件
- 支持通过 HTTP URL 加载
- 提取和显示 HEVC 编码的图像帧
- 时间轴导航
- 图像预览弹窗
- 可停止提取过程

**适用场景：**

- 从 MP4 视频中提取关键帧
- 查看 HEVC 编码的图像
- 学习 HEVC 解码流程

## 使用方法

所有演示页面都可以直接在浏览器中打开，无需额外的服务器配置（某些功能可能需要本地服务器以避免 CORS 限制）。

### 在线访问

如果部署了静态服务器，可以通过以下 URL 访问各演示：

- 播放器：`http://your-server/demo/index.html`
- 文件分析：`http://your-server/demo/filereader.html`
- 文件对比：`http://your-server/demo/filediff.html`
- 分片工具：`http://your-server/demo/file-segmenter.html`
- 分段播放：`http://your-server/demo/segment-player.html`
- AVIF 查看器：`http://your-server/demo/mse-avif-viewer.html`
- HEIC 查看器：`http://your-server/demo/hevcimageviewer/index.html`

### 本地运行

1. 在项目根目录运行：
   ```bash
   npm run build
   ```
2. 使用本地服务器（如 http-server、live-server 等）：
   ```bash
   npx http-server .
   ```
3. 在浏览器中访问对应的 demo 页面

## 技术栈

所有演示使用以下技术：

- **MP4Box.js**：核心 MP4 处理库
- **jQuery**：DOM 操作
- **jQuery UI**：UI 组件（对话框、进度条、标签页等）
- **Fancytree**：树状视图组件
- **D3.js**：数据可视化（Treemap 等）
- **jDataView**：二进制数据操作（HEIC 查看器）
- **BPG**：图像解码（HEIC 查看器）

## 注意事项

- 所有演示都在浏览器中运行，不会上传文件到服务器
- 某些功能需要浏览器支持 Media Source Extensions API
- 建议使用 Chrome 或 Firefox 浏览器以获得最佳兼容性
- 对于跨域资源，需要确保服务器正确配置了 CORS 头，或在 Chrome 中使用 `--disable-web-security` 标志启动

## 开发与贡献

如需修改或创建新的演示，请参考现有示例的代码结构，并确保：

1. 正确引用 `mp4box.all.global.js` 或 `mp4box.all.js`
2. 遵循 MP4Box.js 的 API 使用规范
3. 添加适当的错误处理
4. 保持代码风格与现有演示一致

更多关于 MP4Box.js 的信息，请参考 [主 README](../README.md)。

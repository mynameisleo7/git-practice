## 環境建置
### 1. Node.js 安裝版本：20.16.0
   - （思考）安裝原因：蠻久之前安裝的，有點忘記。但從現在官網首頁推薦的是 20.17.0 版本，推測是之前按照他首頁推薦的下載。
   - （反思）偶數較穩定、最新的(22.9.0)通常可能有bug、第二新的偶數版(20.17.0) 有LTS。因此現在若要重新安裝，確實也會安裝官網所推薦的20.17.0版本，或是根據團隊專案需求下載指定版本
### 2. NVM vs. NPM：

  |  | NVM | NPM |
  |-----|-----|------|
  | 全名 | Node Version Manager | Node Package Manager|
  | 用途 | 管理 Node.js 版本的工具，允許在一個系統中安裝、切換不同的 Node.js 版本 | Node.js 套件管理器，用來下載、安裝、管理及分享 JavaScript 庫和工具。 |
  | 安裝方式 | 額外安裝 | node.js 內建 |
  | 功能 | &#8226; 允許在同一台電腦上安裝多個版本的 Node.js。 <br> &#8226; 可根據專案需求快速切換預設啟用環境 Node.js 版本，避免不同專案之間 Node.js 版本衝突。 <br> &#8226; 安裝不同的套件至特定的版本上 | &#8226; 管理專案所使用的套件（dependencies）。 <br> &#8226; 安裝指定套件（package）（例如 `npm install express`）。 <br> &#8226; 建立並發布自己的 JavaScript package。 |
  | 常見指令 | &#8226; `nvm`：可檢查是否已安裝nvm <br> &#8226; `nvm install <version>`：安裝特定版本的 Node.js。 <br> &#8226; `nvm use <version>`：切換到指定版本的 Node.js。<br> &#8226; `nvm list`：列出已安裝的 Node.js 版本。 <br> &#8226; `nvm alias default node`：設定預設開啟的 Node.js 版本 <br> &#8226; `nvm use`：當前命令列套用特定版本的 Node.js| &#8226; `npm version`:檢查是否安裝/安裝版本 <br> &#8226; `npm install`：安裝專案中所有 dependencies。 <br> &#8226; `npm install <package>`：安裝指定套件。 &#8226; `npm search <package>`：搜尋套件。 <br> &#8226; `npm run <script>`：執行專案中的腳本指令（如測試或編譯指令）。<br>  |

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) ## GitHub Pages 部署指南 (Deployment Guide)

由於此專案原始碼位於 `source` 分支，網站部屬至 `main` 分支，請依照以下步驟進行更新。

### 1. 更新原始碼 (Update Source)
修改完檔案後，執行以下指令同步到 GitHub `source` 分支：

```bash
git add .
git commit -m "您的修改描述"
git push origin source
```

### 2. 發佈至 GitHub Pages (Deploy)
執行以下指令會自動打包並推送到 `main` 分支發佈網站：

```bash
npm run deploy
```

---
> [!TIP]
> **快速更新並部署指令：**
> `git add . && git commit -m "update" && git push origin source && npm run deploy`

# Google Apps Scriptプロジェクト用ボイラープレート
Google Apps Scriptプロジェクト用のボイラープレートです。
TypeScriptで記述します。

## 初期設定
1. `.clasp.json` の `scriptId` を設定する。

2. 以下を参考に `.dotenv` を作成する。
```
// ファイルID
FILE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
```

## コマンド一覧
* プロジェクトのビルド
```
yarn build
```
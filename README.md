# Google Apps Scriptプロジェクト用ボイラープレート
Google Apps Scriptプロジェクト用のボイラープレートです。

## 初期設定
1. `.clasp.json` の `scriptId` を設定する。

2. 以下を参考に `.dotenv` を作成する。
```
// ファイルID
FILE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
```

## JSON Schemaの生成
1. `typescript-json-schema`の導入
```
npm install -g typescript-json-schema 
```

2. JSON Schemaの生成
```
typescript-json-schema --ignoreErrors tsconfig.json PostRequestBody > ./src/schema.json
```
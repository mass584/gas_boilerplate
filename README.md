# Google Apps Scriptプロジェクト用ボイラープレート

## プロジェクトのビルドとデプロイ
1. `.clasp.json`を作成し、`scriptId` を設定する。

2. `.env.development`もしくは`.env.production`を作成し、外部変数を設定する。

3. プロジェクトのビルド

```
yarn # install package
yarn build:dev # build for development
yarn build:prod # build for production
```

4. ソースのアップロード

```
clasp push
```

5. アップロードしたソースコードのデプロイ

WEB_APIにデプロイする場合、`-i`オプションでdeployIDを指定してください。

```
clasp deploy
clasp deploy -i ${DEPLOY_ID}
```

## 技術スタック
* 言語
  - Typescript

* コード解析+フォーマッター
  - ESLint + Prettier

* ビルド
  - yarn
  - webpack

* 使用パッケージ
  - ajv + quicktype
  - moment.js

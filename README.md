# Google Apps Scriptプロジェクト用ボイラープレート

## デモ
* [[業務向け]名簿管理アプリ](https://docs.google.com/spreadsheets/d/1OWQlz0oJJjt1BNB6CsHjVy7SnwWAQoWZsYDGvsXlvkg/edit#gid=1619384257)

## 技術スタック
* 言語
  - [TypeScript](https://www.typescriptlang.org/)

* コード解析+フォーマッター
  - [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

* ユニットテスト
  - [Jest](https://jestjs.io/)

* ビルド
  - [yarn](https://yarnpkg.com)
  - [webpack](https://webpack.js.org/)
  - [dotenv](https://github.com/motdotla/dotenv)

* ユーティリティ
  - [ajv](https://github.com/ajv-validator/ajv) + [quicktype](https://quicktype.io/)
  - [moment.js](https://momentjs.com/)

## NPMスクリプト一覧
```sh
$ yarn                   # install dependencies
$ yarn build:dev         # build and generate the development codes
$ yarn build:prod        # build and generate the production codes
$ yarn fix               # fix source codes
$ yarn lint              # lint source codes
$ yarn test              # run the test codes using Jest framework
$ yarn push              # push source codes
$ yarn deploy            # deploy google apps script project
```

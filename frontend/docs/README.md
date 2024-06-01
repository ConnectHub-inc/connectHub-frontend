# セットアップ
1. `npm install`
2. `npm run start`

# ディレクトリ構造
- `build`: ビルド後に生成されるディレクトリ。このディレクトリ配下のファイル一式をサーバーにアップする。
- `docs`: 開発環境に関するドキュメント
- `public`: ビルド時に build ディレクトリ内にコピペされる。`npm run start`や`npm run build`に必須。
- `src`: ソースディレクトリ
  - `components`: コンポーネント
    - `layouts`: ベースレイアウトのコンポーネント
    - `pages`: ページ内限定のコンポーネント
    - `parts`: ページ共通のコンポーネント
  - `pages`: ページコンポーネント
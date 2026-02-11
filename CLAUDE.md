# 納幸堂 HP プロジェクト

## 概要
映像制作・動画クリエイティブの個人サイト。静的HTML/CSS/JSで構成。

## ファイル構成
- `index.html` - メインHTML（シングルページ）
- `css/style.css` - 全スタイル
- `js/main.js` - 全JavaScript（先頭にCONFIG設定あり）
- `img/` - 画像・動画素材

## デザインルール
- **和スタイル**: 白ベース、筆文字風、ミニマルな角（border-radius: 2px）
- **配色**: 背景 `#faf8f5`、テキスト `#2c2c2c`、アクセント `#c41e3a`（朱色）
- **フォント**: Yuji Syuku（見出し）、Shippori Mincho（本文）、Montserrat（英字ラベル）
- **SVGアイコン**: `fill: currentColor` で統一（色をハードコードしない）
- **ロゴ**: `img/title.png`（白背景PNG）→ `mix-blend-mode: multiply` で背景と馴染ませる

## コード規約
- CSSクラス名: ケバブケース（例: `work-card-overlay`）
- レスポンシブ: タブレット `1024px`、モバイル `768px`
- セクション背景: `#faf8f5` / `#fff` / `#f3f0eb` を交互に使用
- フッター背景: `#2c2c2c`（ロゴは `filter: brightness(0) invert(1)` で白く表示）

## SNSリンク
- YouTube: https://youtube.com/@naoki_tarushiru
- Instagram: https://www.instagram.com/naoki_nosideboys
- TikTok: https://www.tiktok.com/@go2go252

## 注意事項
- フレームワーク不使用（素のHTML/CSS/JS）
- お問い合わせは `mailto:` 方式（`js/main.js` 先頭の `CONFIG.EMAIL` で送信先設定）
- 外部サービス依存: Google Fonts、YouTube サムネイル（i.ytimg.com）

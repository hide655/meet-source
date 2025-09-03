# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## リポジトリ概要

「OITA IT MEET SOURCE!」イベントのランディングページを作成するMeetSourceリポジトリです。

## 確認ページ

https://hide655.github.io/meet-source/index.html

## イベント詳細

- **イベント名**: OITA IT MEET SOURCE!
- **日付**: 10月17日（金曜日）
- **時間**: PM 21:00 - AM 3:00
- **会場**: CLUB FREEDOM
- **チケット**: 1,000円（1ドリンク付き）
- **キャッチコピー**: "LET'S HANG OUT!"
- **ビジュアルテーマ**: レトロな80s/90sスタイル、ラジカセ、稲妻、星をモチーフに、ダークブルーの背景にピンクとイエローのアクセント

## プロジェクトステータス

- イベント用の1枚のランディングページを作成中
- メインブランチ: `main`
- デザイン参考資料: oita_meet_source.png（イベントフライヤー）

## デザイン要件

### モバイル専用設計
**参考サイト:**
- https://www.hasegawa-kogyo.co.jp/lucano/new_color/
- https://www.globalwork.jp/women/utsuku-silhouette/soukai-story/

**設計方針:**
モバイル（スマートフォン）専用のランディングページとして設計し、デスクトップ対応は行わない。
PCでアクセスした場合も、モバイル幅（max-width: 430px）で中央表示する。

### 主要な設計原則

#### 1. ビジュアルストーリーテリング
- **縦長スクロール体験**: 10〜15画面分の長さ
- **フルスクリーン画像**: 各セクションで画面全体を使った大胆なビジュアル
- **最小限のテキスト**: 画像で物語る、テキストは補助的役割
- **写真・イラスト主体**: イベントの雰囲気を伝える高品質な画像を多用

#### 2. モバイルUX最適化
- **親指操作への配慮**: ボタンは画面下部に配置
- **大きなタップエリア**: 最小44pxのタッチターゲット
- **スムーズなスクロール**: 慣性スクロール、スナップポイントの活用
- **軽量化**: 画像の遅延読み込み、WebP形式の使用

#### 3. インタラクション
- **パララックス効果**: 奥行き感のあるスクロール演出
- **フェードイン/アウト**: スクロールに応じた要素の出現
- **固定要素**: スティッキーヘッダー、フローティングCTAボタン
- **スワイプ対応**: 横スワイプでの画像切り替え（カルーセル）

#### 4. コンテンツ構成
- **ヒーローセクション**: インパクトのあるキービジュアル
- **ストーリーセクション**: イベントの流れを時系列で表現
- **詳細情報**: アコーディオンやタブで情報を整理
- **CTAセクション**: チケット購入への導線を複数配置

### 技術スタック
- **HTML/CSS**: シンプルな構成、Tailwind CSSでスタイリング
- **JavaScript**: 
  - バニラJSでスクロールアニメーション実装
  - Intersection Observer APIでパフォーマンス最適化
- **画像最適化**:
  - srcsetで複数解像度対応
  - lazy loading属性の活用
  - WebP形式での配信

### レイアウト仕様
- **固定幅**: 最大430px（iPhone Pro Max基準）
- **セーフエリア**: 左右に16pxのパディング
- **フォントサイズ**: 
  - 見出し: 24-32px
  - 本文: 14-16px
  - 注釈: 12px
- **カラーパレット**: イベントフライヤーに準拠
  - 背景: ダークブルー (#1a1a2e)
  - アクセント: ピンク (#ff006e)、イエロー (#ffbe0b)

### 実装優先順位
1. モバイル表示の完璧な実装
2. スクロールアニメーションの実装
3. 画像の最適化とローディング改善
4. パフォーマンスチューニング

## 開発メモ

このリポジトリが発展するにつれて、以下の内容を更新してください：
- ビルドシステムが確立されたら、ビルドとテストコマンドを追加
- コードベース構造が定義されたら、アーキテクチャの概要を追加
- このプロジェクト固有の主要な開発ワークフローを追加

## 協賛企業
- 株式会社HAB&Co.
- 株式会社moreMost
- ennode
- LaunchCraft
- QOX

## 当日タイムテーブル（詳細版）

### 📅 2024年10月17日（金）21:00 - 27:00 @ CLUB FREEDOM

#### タイムテーブル構造化データ

```json
{
  "event": {
    "name": "OITA IT MEET SOURCE!",
    "date": "2024-10-17",
    "venue": "CLUB FREEDOM",
    "startTime": "21:00",
    "endTime": "27:00"
  },
  "staff": {
    "mc": "勝河",
    "technicalSupport": ["柴部", "藤田"]
  },
  "schedule": [
    {
      "startTime": "20:00",
      "endTime": "21:00",
      "type": "preparation",
      "title": "リハーサル・会場準備",
      "performers": [],
      "description": "サウンドチェック、機材セッティング"
    },
    {
      "startTime": "21:00",
      "endTime": "21:30",
      "type": "dj",
      "title": "DJ JAYS",
      "performers": [
        {
          "name": "DJ Jays",
          "organization": "株式会社HAB&Co.",
          "profile": "大分県出身。2007年DJとしてのキャリアをスタート。Black Musicを中心に様々なジャンルを織り込んでいくオープンフォーマットスタイルと、WordPlayやスクラッチを織り交ぜたクリエイティブなプレイでPartyをRockしている。",
          "imageFile": "img/DJJays.jpg"
        }
      ]
    },
    {
      "startTime": "21:30",
      "endTime": "22:00",
      "type": "dj",
      "title": "DJ 逢莉",
      "performers": [
        {
          "name": "DJ 逢莉",
          "organization": "",
          "profile": "ジャパニーズ ヒップホップをメインでプレイするDJとして、レギュラーを中心に毎月複数のクラブイベントに出演しながら、中心市街地で開催されるストリートイベントなどにも参戦し、幅広く活動中！",
          "imageFile": "img/DJAIRI.jpg"
        }
      ]
    },
    {
      "startTime": "22:00",
      "endTime": "22:15",
      "type": "ceremony",
      "title": "🥂 乾杯",
      "performers": [],
      "description": "オープニング乾杯"
    },
    {
      "startTime": "22:15",
      "endTime": "22:30",
      "type": "networking",
      "title": "歓談タイム",
      "performers": [],
      "description": "参加者同士の交流時間"
    },
    {
      "startTime": "22:30",
      "endTime": "23:00",
      "type": "talk",
      "title": "トークセッション",
      "performers": [
        {
          "name": "大久保 貴浩",
          "organization": "株式会社クオックス",
          "profile": "",
          "imageFile": ""
        }
      ]
    },
    {
      "startTime": "23:00",
      "endTime": "23:30",
      "type": "performance",
      "title": "ライブAIコーディング・コーディングバトル",
      "performers": [
        {
          "name": "川野 秀幸",
          "organization": "Nanolights",
          "profile": "",
          "imageFile": ""
        }
      ],
      "description": "AIを活用したライブコーディングパフォーマンス"
    },
    {
      "startTime": "23:30",
      "endTime": "24:30",
      "type": "openmic",
      "title": "オープンマイク",
      "performers": [
        {
          "name": "青柳",
          "organization": "",
          "profile": "",
          "imageFile": ""
        }
      ],
      "description": "ピッチイベント、歌、特技披露など自由参加。https://oden.pref.oita.jp/ の内容紹介など"
    },
    {
      "startTime": "24:30",
      "endTime": "25:00",
      "type": "dj",
      "title": "DJ smokin",
      "performers": [
        {
          "name": "DJ smokin",
          "organization": "",
          "profile": "大分を拠点に活動するDJ／トラックメイカー90's HIPHOPやR&Bを軸に、現行のMAIN STREAMやJAPANESE HIPHOPも自在にブレンド。クラシックなサンプリングと最新ビートをつなぎ、オールジャンルでミックス。独自のセンスで、自分の時間を作り出す。",
          "imageFile": "img/DJsmokin.jpg"
        }
      ]
    },
    {
      "startTime": "25:00",
      "endTime": "25:30",
      "type": "performance",
      "title": "ビートライブ",
      "performers": [
        {
          "name": "ケイジ",
          "organization": "",
          "profile": "",
          "imageFile": ""
        }
      ],
      "description": "ビートメイキングライブパフォーマンス"
    },
    {
      "startTime": "25:30",
      "endTime": "26:00",
      "type": "performance",
      "title": "ラップパフォーマンス",
      "performers": [
        {
          "name": "勝河 祥",
          "organization": "LAUNCH CRAFT",
          "profile": "",
          "imageFile": ""
        }
      ]
    },
    {
      "startTime": "26:00",
      "endTime": "26:30",
      "type": "dj",
      "title": "DJ Kg",
      "performers": [
        {
          "name": "DJ Kg",
          "organization": "株式会社moreMost",
          "profile": "10代後半から活動をスタートし、現在は大分県内のクラブのレギュラーイベントをメインに活動しつつ、ゲストイベントのオーガナイズや中心市街地・野外・ストリートのイベントなども積極的に展開する。楽曲制作・リリースやMCへの提供、アナログ・デジタルを織り交ぜたマシンライブ、ステージ・広告物などの制作も手掛ける。",
          "imageFile": "img/DJKg.png"
        }
      ]
    },
    {
      "startTime": "26:30",
      "endTime": "27:00",
      "type": "dj",
      "title": "フリーDJタイム",
      "performers": [],
      "description": "DJ Kg、DJ JAYS、DJ 逢莉、DJ smokinが自由にプレイ"
    }
  ]
}
```

#### タイムテーブル概要

| 時間 | 内容 | 演者 | 所属 |
|------|------|------|------|
| **20:00-21:00** | リハーサル・会場準備 | - | - |
| **21:00-21:30** | DJ JAYS | DJ Jays | 株式会社HAB&Co. |
| **21:30-22:00** | DJ 逢莉 | DJ 逢莉 | - |
| **22:00-22:15** | 🥂 乾杯 | - | - |
| **22:15-22:30** | 歓談タイム | - | - |
| **22:30-23:00** | トークセッション | 大久保 貴浩 | 株式会社クオックス |
| **23:00-23:30** | ライブAIコーディング | 川野 秀幸 | Nanolights |
| **23:30-24:30** | オープンマイク | 青柳 他 | - |
| **24:30-25:00** | DJ smokin | DJ smokin | - |
| **25:00-25:30** | ビートライブ | ケイジ | - |
| **25:30-26:00** | ラップパフォーマンス | 勝河 祥 | LAUNCH CRAFT |
| **26:00-26:30** | DJ Kg | DJ Kg | 株式会社moreMost |
| **26:30-27:00** | フリーDJタイム | 各DJ | - |

#### 運営体制
- **MC・進行**: 勝河
- **転換作業・技術サポート**: 柴部、藤田	


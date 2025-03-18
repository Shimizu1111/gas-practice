# GAS（Google Apps Script）入門コース

## **📌 目標**
このコースでは、Google Apps Script（GAS）を使った開発の基本を学び、`clasp` を活用してローカル開発とバージョン管理ができるようになります。

---

## **📝 目次**
1. GASの基本概念
2. GASのWebエディタで開発してみる
3. `clasp` のセットアップ
4. ローカルでGASプロジェクトを管理する
5. GitHubでバージョン管理する
6. ローカル開発のワークフロー
7. 実践演習（簡単なスクリプトを作る）
8. まとめ

---

## **1. GASの基本概念**
### **🔹 GASとは？**
- Googleが提供するクラウドベースのスクリプト言語
- JavaScriptベースでGoogleサービス（スプレッドシート、Gmail、Googleカレンダーなど）を操作できる
- 無料で利用可能

### **🔹 できること**
✅ スプレッドシートの自動化
✅ メール送信の自動化
✅ API連携
✅ カスタムWebアプリの開発  など

### **🔹 GASの実行環境**
- Google Apps Script エディタ（Web上）
- `clasp` を使ったローカル開発

---

## **2. GASのWebエディタで開発してみる**
1. [GASのエディタ](https://script.google.com/) にアクセス
2. `新しいプロジェクトを作成`
3. 以下のコードを入力して実行

```javascript
function helloWorld() {
  Logger.log("Hello, GAS!");
}
```
4. `ログの表示` で出力を確認

---

## **3. `clasp` のセットアップ**
### **🔹 `clasp` とは？**
`clasp` はGoogleが提供するCLIツールで、ローカル環境でGASを管理・開発できます。

### **🔹 インストール手順**
#### **1. Node.js をインストール（未インストールの場合）**
- [Node.js公式サイト](https://nodejs.org/) からインストール

#### **2. `clasp` をインストール**
```sh
npm install -g @google/clasp
```

#### **3. Googleアカウントで認証**
```sh
clasp login
```

#### **4. `clasp` の動作確認**
```sh
clasp -v
```

---

## **4. ローカルでGASプロジェクトを管理する**
### **🔹 GASのプロジェクトをローカルにクローン**
1. GASのエディタで `新しいスクリプトを作成`
2. `スクリプトID` を取得（URLの一部）
3. ターミナルで以下を実行
```sh
clasp clone <スクリプトID>
```
4. ローカルフォルダが作成され、GASのコードが取得される

### **🔹 ローカルでコード編集＆プッシュ**
1. `Code.gs` を修正（例えば `Hello, World!` のログを変更）
2. 変更をGASに反映
```sh
clasp push
```

---

## **5. GitHubでバージョン管理する**
### **🔹 GitHubのリポジトリを作成**
1. GitHubで新しいリポジトリを作成
2. ローカルでリポジトリを初期化

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

3. これでGASのコードがGitHubで管理できる！

---

## **6. ローカル開発のワークフロー**
1. `clasp pull` で最新のGASコードを取得
2. エディタ（Cursor, VSCode など）で編集
3. `clasp push` でGASに反映
4. `git commit` & `git push` でGitHubに保存

---

## **7. 実践演習（簡単なスクリプトを作る）**
**📌 スプレッドシートに自動でデータを書き込むスクリプト**
```javascript
function writeToSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow(["日付", "メッセージ"]);
  sheet.appendRow([new Date(), "GASからデータ追加！"]);
}
```

- `writeToSheet` を実行すると、スプレッドシートにデータが追加される
- `clasp push` でアップロードすれば、Webエディタなしで開発できる

---

## **8. まとめ**
✅ GASの基本を学び、Webエディタで実行した
✅ `clasp` を使ってローカル開発環境を構築
✅ GitHubと連携し、バージョン管理できるようにした
✅ 簡単なスクリプトを作って動作確認

---

🎉 **お疲れさまでした！** これでGASを本格的にローカル開発＆バージョン管理できるようになりました！ 🚀
# gas-practice

**できる！** 🎉  
`clasp` を使えば、Google Apps Script（GAS）のコードをローカルで管理し、GitHubでバージョン管理も可能になる。これでCursorとかのエディタでも編集しやすくなる！

---

## **🚀 GASのコードをGitHubで管理する手順**
### **1. claspのインストール**
まずは `clasp` をインストール：
```sh
npm install -g @google/clasp
```

### **2. Googleアカウントで認証**
```sh
clasp login
```
これでGoogleアカウントにログインし、GASのプロジェクトと連携できる。

### **3. GASプロジェクトをローカルにクローン**
GASのスクリプトIDを取得し、ローカルにダウンロード：
```sh
clasp clone <スクリプトID>
```
- スクリプトIDはGASエディタのURLに含まれてる（`https://script.google.com/d/<スクリプトID>/edit`）

すると、以下のような構成でローカルにファイルが作成される：
```
/my-gas-project
  ├── .clasp.json
  ├── appsscript.json
  ├── Code.gs
  ├── utils.gs
```

### **4. GitHubリポジトリを作成**
- GitHubで新しいリポジトリを作成
- ローカルでリポジトリを初期化
  ```sh
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin https://github.com/your-username/your-repo.git
  git push -u origin main
  ```

これで、GASのコードをGitHubで管理できる！

---

## **5. 開発の流れ**
GitHubで開発するときの基本的な流れはこう：

1. **GASのコードを修正**（Cursorなどのエディタで編集）
2. **GitHubにプッシュ**
   ```sh
   git add .
   git commit -m "Update GAS script"
   git push
   ```
3. **GASに反映**
   ```sh
   clasp push
   ```
4. **GASで動作確認**
   ```sh
   clasp run <関数名>
   ```

---

## **6. チーム開発も可能！**
GASのコードをGitHubで管理することで、PRレビューやバージョン管理ができるようになる。

例えば：
- **GitHubでPRを作る**
- **コードレビューをする**
- **マージ後に `clasp push` でGASに反映**
  
---

## **🎯 まとめ**
✅ **GASをGitHubで管理できる！**  
✅ `clasp` を使えば、ローカル開発＋バージョン管理が可能  
✅ GitHubを活用すれば、PRレビューやチーム開発もしやすい  
✅ `Cursor` や `VSCode` で編集OK！  

GASの管理がめちゃくちゃ快適になるから、ぜひ試してみて！ 🚀
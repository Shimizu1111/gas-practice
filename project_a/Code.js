function helloWorld() {
  Logger.log("Hello, GAS2!");
}

function writeToSheet() {
  var spreadsheet = SpreadsheetApp.openById("1Dsq2ZtezN907ytbmgcdIQZvUE3V30bDtexPQUyMSdrQ");
  var sheet = spreadsheet.getActiveSheet(); // or getSheetByName("シート名")
  // var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  console.log("sheet1");
  console.log(sheet);
  console.log("sheet2");
  // 新しい行を追加、配列の順序が行の順序
  sheet.appendRow(["日付", "メッセージ"]);
  sheet.appendRow([new Date(), "GASからデータ追加！"]);
  // 既存の行を更新、対象のセルを修正する
  sheet.getRange(1, 1).setValue("更新されたデータ");
}

function createEvent() {
  // 対象のgmailアドレスを指定
  var calendar = CalendarApp.getCalendarById("test@example.com");
  var title = "テストミーティング";
  var startTime = new Date(); // 現在の日付を取得
  startTime.setHours(14, 0, 0); // 時間を14時に設定

  var endTime = new Date(startTime); // 開始時間を基に終了時間を設定
  endTime.setHours(15, 0, 0); // 終了時間を15時に設定

  // var startTime = new Date(2025, 3, 20, 14, 0); // 2025年3月20日 14:00
  // var endTime = new Date(2025, 3, 20, 15, 0); // 2025年3月20日 15:00
  
  var event = calendar.createEvent(title, startTime, endTime);
  Logger.log("作成したイベント: " + event.getTitle() + " 開始時間: " + event.getStartTime());
}

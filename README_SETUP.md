# Orthocure Patient Experience App

## Google Sheets Integration Setup

To connect this app to Google Sheets and enable password management, follow these steps:

1.  Create a new Google Sheet.
2.  Rename the first sheet to **"Responses"**.
3.  Create a second sheet and rename it to **"Config"**.
4.  In the **"Config"** sheet:
    *   Cell **A1**: `Key`
    *   Cell **B1**: `Value`
    *   Cell **A2**: `password`
    *   Cell **B2**: `admin` (or your desired initial password)
5.  Go to **Extensions > Apps Script**.
6.  Delete any existing code and paste the following:

```javascript
function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var params = e.parameter;
  var data = JSON.parse(e.postData.contents);
  
  // Handle Password Update
  if (params.type === "updatePassword") {
    var configSheet = ss.getSheetByName("Config") || ss.insertSheet("Config");
    if (configSheet.getLastRow() === 0) {
      configSheet.appendRow(["Key", "Value"]);
    }
    
    var range = configSheet.getRange("A:A");
    var values = range.getValues();
    var found = false;
    for (var i = 0; i < values.length; i++) {
      if (values[i][0] === "password") {
        configSheet.getRange(i + 1, 2).setValue(data.password);
        found = true;
        break;
      }
    }
    if (!found) {
      configSheet.appendRow(["password", data.password]);
    }
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  // Handle Survey Submission
  var sheet = ss.getSheetByName("Responses") || ss.getSheets()[0];
  if (sheet.getLastRow() == 0) {
    var headers = Object.keys(data);
    sheet.appendRow(headers);
  }
  var row = Object.values(data);
  sheet.appendRow(row);
  
  return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var params = e.parameter;
  
  // Handle Config Fetch (Password)
  if (params.type === "config") {
    var configSheet = ss.getSheetByName("Config");
    var config = { password: "admin" };
    if (configSheet) {
      var values = configSheet.getDataRange().getValues();
      for (var i = 1; i < values.length; i++) {
        if (values[i][0] === "password") {
          config.password = values[i][1];
          break;
        }
      }
    }
    return ContentService.createTextOutput(JSON.stringify(config))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  // Handle Data Fetch (Dashboard)
  var sheet = ss.getSheetByName("Responses") || ss.getSheets()[0];
  var rows = sheet.getDataRange().getValues();
  if (rows.length < 2) return ContentService.createTextOutput("[]").setMimeType(ContentService.MimeType.JSON);
  
  var headers = rows[0];
  var data = [];
  for (var i = 1; i < rows.length; i++) {
    var obj = {};
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = rows[i][j];
    }
    data.push(obj);
  }
  
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

7.  Click **Deploy > New Deployment**.
8.  Select **Web App**.
    *   Execute as: **Me**
    *   Who has access: **Anyone**
9.  Copy the **Web App URL** and add it to your `.env` file as `VITE_GOOGLE_SCRIPT_URL`.

## Environment Variables
VITE_GOOGLE_SCRIPT_URL=your_google_script_url_here
VITE_DASHBOARD_PASSWORD=admin

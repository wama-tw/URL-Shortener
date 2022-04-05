# URL Shortener

這是一份申請 Dcard 2022 Backend Intern 的作業
詳情可見：[需求書（PDF 說明檔）](https://drive.google.com/file/d/1AreBiHDUYXH6MI5OqWpKP-f6-W0zA8np/view) 或 [職缺說明](https://boards.greenhouse.io/dcard/jobs/3874841)

## 思路

一開始便是抱著挑戰及學習的心態開始寫此份作業的，因此實作的順序是先使用 node.js 實作出基礎要求的功能，再慢慢建構架構及撰寫測試，最後使用 GitHub Action 實現 CI。
Test 的部分先使用 feature test 的方式測試，主要是因為這個專案比較小，一個 feature 也只有用到一個 function，所以沒有再另外寫 Unit test。

## DB & 3rd Party Lib

- [MySQL](https://www.mysql.com/)
  - 以前曾經使用過 Laravel 搭配 MySQL，這次希望專注於學習 node.js，因此選擇熟悉的 DB
- [express](https://expressjs.com/)
  - 使用 node.js 建立 Web server 時常搭配且方便使用的工具，可以建立 MVC 框架
- [nodemon](https://www.npmjs.com/package/nodemon)
  - 開發時可以在存檔時自動重新啟動 server，很方便
- [prisma](https://www.prisma.io/)
  - 協助連線、管理資料庫的工具，紀錄資料庫欄位變動（migration），也不用在 js 中混雜 SQL 語法。
- [dotenv](https://www.npmjs.com/package/dotenv)
  - 可以將測試、CI、production 的環境變數分開獨立成不同的 env 檔。方便管理，也可以避免 production 的資料被放進 git
- [dotenv-cli](https://www.npmjs.com/package/dotenv-cli)
  - 可以用指令指定要使用哪一個 env 檔
- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)
  - 可以自動產出假資料幫助測試
- [supertest](https://www.npmjs.com/package/supertest)
  - 在測試時模擬 http request 給指定的 endpoint
- [jest](https://jestjs.io/)
  - JavaScript 的測試框架

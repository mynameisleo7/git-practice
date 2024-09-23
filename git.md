## 說明 `blob`, `tree`, `commit`, `branch`, `head` 分別是什麼

### 1. blob：
`blob`在 Git 中用來儲存檔案的內容。當你將檔案添加到 Git 中時，Git 會將檔案內容存成一個 `blob` 物件，並賦予它一個唯一的hash值。`blob` 不記錄檔案名稱或目錄結構，僅僅會紀錄檔案的內容。


### 2. tree：
`tree`是用來管理目錄名稱以及檔案名稱的物件。一個`tree`物件可以紀錄包含哪些 blob 物件 (即檔案內容)，以及該 blob 物件對應的檔案名稱，以及其他 tree 物件和其對應的目錄名稱。
簡單來說，`tree`在 Git 中是用來表示目錄結構的物件。`tree` 能夠將檔案與其目錄層次關聯起來。

#### 個人理解：blob與tree都是Git中用來儲存資料的物件。差別在於blob負責儲存檔案的內容，而tree則是負責儲存目錄名稱以及檔案名稱。

### 3. commit：
`commit`是 Git 中用來記錄程式碼紀錄的一個快照。每次的 commit 會將當前的目錄樹和提交訊息（包括作者、日期等）儲存成一個 commit 物件。每個 commit 都有一個唯一的哈希值，並且指向它的父 commit（或多個父 commit）。

### 4. branch：
`branch` 是 Git 中用來指向某一系列 commit 的可移動指標。當在一個 branch 上進行 commit 時，該 branch 的指標會隨著每次提交自動前進。branch 通常用可以用來區分不同的功能或版本開發，例如 main 和 feature-branch。

### 5. head：
`head` 是Git 中的一個特殊指標，它指向當前你所在的 branch 的最新 commit。換句話說，HEAD 代表你當前檢出的狀態。如果你切換到不同的 branch，HEAD 也會指向該 branch。當 HEAD 指向某一個 commit 而不是 branch 時，這叫做 "detached HEAD" 狀態。

#### 個人理解：branch 和 head 兩者類似，皆為可移動的指標。而 head 可以看成是最特殊、最主要、當下處在的那個 branch

<br>

---

<br> 

## 紀錄在 Git repo 操作過程中，.git 資料夾裡的變化

在一個資料夾中執行 git init 指令後，Git 會自動創建一個名為 .git 的隱藏資料夾。
這個資料夾包含了以下幾個重要子資料夾和檔案：
- objects：這裡儲存了所有的物件，包括commit物件、tree物件和blob物件。每一個版本的快照都會以物件的形式存在於此。
- refs：這個資料夾包含了指向各種 Git 參考的指標，例如 branches 和 tags。
- config：這是一個檔案，用來儲存該儲存庫的配置設置，例如遠端儲存庫的地址和使用者訊息。

操作過程中的變化:
1. 初始化：
- 當執行 `git init` 時，.git 資料夾會被建立，並且開始追蹤該目錄下的所有檔案。
- 使用`ls -a` 可以查看到 .git 資料夾的存在，這表示該目錄已成功初始化為 Git 儲存庫.

2. 新增檔案到暫存區：
當你透過 `git add <file>` 將檔案新增到暫存區時，Git 會在 .git/objects 中建立相應的物件來儲存那個檔案的快照.

3. 提交變更：
執行 `git commit -m "message"` 後，Git 會將暫存區中的變更記錄到版本庫中，並在 .git/objects 中產生新的提交物件，這些物件包含了該次提交的快照及其歷史記錄.

4. 查看歷史紀錄：
使用 `git log` 可以查看到所有提交的歷史紀錄，這些紀錄是從 .git/refs/heads 中獲取的，顯示了當前分支的所有提交快照.

5. 分支管理：
當你創建新分支時，例如使用 `git branch <branch-name>`，Git 會在 .git/refs/heads/ 中新增一個指向新分支最新提交的檔案.

6. 恢復變更：
如果需要恢復到某個特定版本，可以使用 git checkout <commit-hash> 指令，這會更新工作目錄中的檔案，使其與指定提交相符，並可能影響 .git/refs/heads 中的指標.

  
<br>

---

<br>

## commit message 應該怎麼寫比較好？應該有什麼 style 嗎？
以下為好的 commit message 寫法建議：
分為兩（或三）部分：標題、內文（及結尾）

### 標題行（50字內）：
簡潔有力的描述這次提交的內容。第一行應盡量控制在 50 字元以內，並且以大寫字母開頭。不要在末尾加句號。
格式：`<type>(<scope>): <subject>`
 - `type`: 代表 commit 的類別。例如：feat, fix, docs, style, refactor, test, chore，必要欄位。
 - `scope`：代表 commit 影響的範圍，例如資料庫、控制層、模板層等等，視專案不同而不同，為可選欄位。
 - `subject`：代表此 commit 的簡短描述，不要超過 50 個字元，結尾不要加句號，為必要欄位。
   建議使用祈使句，動詞應該是現在式，例如：
    - Add user login feature
    - Fix login bug on iOS
    - Remove deprecated API calls

### 內文（72字內/行）：
- 可詳細說明更動內容，在標題空一行後繼續撰寫內文。
- 內文應解釋這次變更的原因，以及如果有的話，這次變更的背景和影響。
- 說明程式碼變動的項目與原因，還有與先前行為的對比。

### 結尾（可無）：
- 填寫任務編號（如果有的話）.
- 或填寫BREAKING CHANGE（可忽略），記錄不兼容的變動：以 “BREAKING CHANGE: ”為開頭，後面是對變動的描述、以及變動原因和遷移方法。



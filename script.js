// Add Habit Event
// ================================================
$("#addBtn").on("click", function() {
    const habitData = $("#habitForm").val();
    if (habitData) {
        let storedHabits = JSON.parse(localStorage.getItem("habits"))||[];
        // habitsというキーにある、文字列を解析してJavaScriptで扱えるオブジェクトに変換した
        // そもそもhabitsが空だったら空データの配列として取得してね
        // JSON javascript object notion（JavaScriptで扱えるオブジェクトの記法）
        // parse 解析する
        storedHabits.push(habitData);
        // push habitData（habitFormに入力されたデータ）を、storedHabitsに追記する
        localStorage.setItem("habits",JSON.stringify(storedHabits));
        // ローカルストレージは文字列しか保存できない
        // storedHabitsというオブジェクト（JSON）を、文字列化して,habitsに入れる
        $("#habitForm").val("");
        // ローカルストレージに入力したから、入力フォームの文字列をクリアする
        displayHabits();
    }
});

// Display Habits Function
// ================================================
// 習慣を表示する関数
function displayHabits() {
    let storedHabits = localStorage.getItem("habits") || "[]";
    // habitsというキーの文字列を取り出す
    let habitsArray = JSON.parse(storedHabits); 
    // JSONとしてパース（解析）して文字列を配列に 
    let cardContainer = $("#cardContainer");
    cardContainer.empty(); 
    // 以前のリストをクリア
    
    // 習慣を順番に表示
    for(let i = 0; i<habitsArray.length; i++) {
        let habit = habitsArray[i];
        cardContainer.append(`
            <div>
                <input type="checkbox" id="habitCheckbox">
                <label for="habitCheckbox">${habit}</label>
            </div>
            `);
    }};

// Clear All Habits Event
// ================================================
// すべての習慣を消すボタンのクリックイベント
$("#clearBtn").on("click", function() {
    // ローカルストレージをクリア
    localStorage.removeItem("habits");
    // 表示をクリア
    $("#cardContainer").empty();
});

// Initial Habit Display on Page Load
// ================================================
// ページを読み込んだ時に習慣を表示
$(document).ready(function() {
    displayHabits();
});

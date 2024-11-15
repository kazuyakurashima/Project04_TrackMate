$("#addBtn").on("click", function() {
    // 入力した習慣を取得
    const habitData = $("#habitForm").val();
    if (habitData) {
        // ローカルストレージに保存 (カンマで区切った文字列として)
        let storedHabits = localStorage.getItem("habits");
        if (storedHabits) {
            // すでにある習慣があれば追加
            storedHabits += `,${habitData}`;
        } else {
            // 初めての習慣
            storedHabits = habitData;
        }
        localStorage.setItem("habits", storedHabits);

        // 入力をクリア
        $("#habitForm").val("");

        // 習慣を表示
        displayHabits();
    }
});

// 習慣を表示する関数
function displayHabits() {
    let storedHabits = localStorage.getItem("habits") || "";
    let habitsArray = storedHabits.split(","); // カンマで分割して配列にする
    let cardContainer = $("#cardContainer");
    cardContainer.empty(); // 以前のリストをクリア

    // 習慣を順番に表示
    habitsArray.forEach(habit => {
        cardContainer.append(`<p>${habit}</p>`);
    });
}

// すべての習慣を消すボタンのクリックイベント
$("#clearBtn").on("click", function() {
    // ローカルストレージをクリア
    localStorage.removeItem("habits");

    // 表示をクリア
    $("#cardContainer").empty();
});

// ページを読み込んだ時に習慣を表示
$(document).ready(function() {
    displayHabits();
});

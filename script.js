$("#addBtn").on("click", function() {
    const habitData = $("#habitForm").val();
    if (habitData) {
        // 入力があれば、habitsというキーのデータをstoredHabitsに入れます
        let storedHabits = localStorage.getItem("habits");
        if (storedHabits) {
            // すでに入力したhabitsに、文字列を追記します
            storedHabits += `,${habitData}`;
        } else {
            // 空白のままボタンを押した場合は、そのままにします
            storedHabits = habitData;
        }
        // 追記した習慣を、habitsのキーに入れます
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

$("#addBtn").on("click",function() {
    const habitData = $("#habitForm").val();

    // ローカルストレージに保存
    localStorage.setItem("key",habitData);
    habitForm.value = "";
    console.log(habitData);

    if(habitData) {
        const card = $()

        const v = localStorage.getItem("key");
        $("#cardContainer").val(v);
    }

    // カードを作成
    const card = document.createElement("div");
    // cardという変数に、空のhtml要素<div>を作成します。
    // card → <div></div>
    card.classList.add("card");
    // cardにクラスを付け加える。cardというクラスを
    // card → <div class="card"></div>
    card.textContent = "aaa";
    // cardにテキストを付け加える。textを

    // cardContainer.appendChild(card);



});

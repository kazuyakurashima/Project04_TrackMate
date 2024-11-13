const habitForm = document.querySelector("#habitForm")
const addBtn = document.querySelector("#addBtn")

addBtn.addEventListener("click",()=> {
    const habitData = habitForm.value;

    // ローカルストレージに保存
    localStorage.setItem("key",habitData);
    habitForm.value = "";

    // カードを作成
    const card = document.createElement("div");
    // cardという変数に、空のhtml要素<div>を作成します。
    // card → <div></div>
    card.classList.add("card");
    // cardにクラスを付け加える。cardというクラスを
    // card → <div class="card"></div>
    card.textContent = text;
    // cardにテキストを付け加える。textを

    cardContainer.appendChild(card);



});

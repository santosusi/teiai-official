document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let address = document.getElementById("address").value.trim();
        let message = document.getElementById("message").value.trim();
        let errorMessage = "";

        // 入力欄が空かチェック
        if (name === "" || email === "" || address === "" || message === "") {
            errorMessage += "全ての項目を入力してください。\n";
        }

        // メールアドレスの形式チェック
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            errorMessage += "メールアドレスの形式が正しくありません。\n";
        }

        // エラーがある場合は送信をキャンセル
        if (errorMessage !== "") {
            alert(errorMessage);
            event.preventDefault(); // フォーム送信をキャンセル
        }
    });
});


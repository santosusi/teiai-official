// フォーム送信時の処理
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // フォームのデフォルトの送信を防ぐ
    alert('お問い合わせありがとうございます！後ほどご連絡いたします。');
    // ここでフォームの内容をサーバーに送信する処理を追加できます
});

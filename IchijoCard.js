// IchijoCard.js
import React from "react";
import ichijoImage from "./ichijo.jpg"; // ← 一条の画像ファイルを用意してね

function IchijoCard() {
  return (
    <div className="card">
      <img src={ichijoImage} alt="一条聖也" className="profile-img" />
      <h2>一条 聖也</h2>
      <p>地下帝国カジノ支配人（元）</p>
      <p>「美しき沼」設計・運営責任者。
      圧倒的強運と策略の持ち主だが、カイジとの対決に敗北。</p>
    </div>
  );
}

export default IchijoCard;

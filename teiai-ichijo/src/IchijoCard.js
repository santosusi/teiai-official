// IchijoCard.js
import React from "react";
import ichijoImage from "./ichijo.jpg"; // 同じsrcにichijo.jpg画像入れてね

function IchijoCard() {
  return (
    <div className="card">
      <img src={ichijoImage} alt="一条聖也" className="profile-img" />
      <h2>一条 聖也</h2>
      <p>地下カジノ支配人（元）</p>
      <p>「美しき沼」を管理し、帝愛の名を背負った男。</p>
    </div>
  );
}

export default IchijoCard;

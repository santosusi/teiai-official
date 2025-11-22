import React from "react";
import "./App.css";
import EmployeeCard from "./EmployeeCard";

import ichijoImg from "./ichijo.jpg";
import hyoudouImg from "./hyoudou.jpg";
import otsukiImg from "./otsuki.jpg";

const employees = [
  {
    name: "一条 聖也",
    role: "地下カジノ支配人（元）",
    description: "「美しき沼」を管理し、帝愛の名を背負った男。",
    img: ichijoImg,
    quote: "沼が泣いてる...!"
  },
  {
    name: "兵藤 和尊",
    role: "会長",
    description: "帝愛グループの頂点に立つ絶対的支配者。",
    img: hyoudouImg,
    quote: "一人の豊かさがその十人・百人の希望だ…それがこの世の仕組み…"
  },
  {
    name: "大槻 班長",
    role: "地下強制労働班長",
    description: "あの“キンキンに冷えた”で有名な搾取の鬼。",
    img: otsukiImg,
    quote: "今日......今日だけがんばるんだっ............!今日をがんばった者..........今日もがんばり始めた者にのみ......明日が来るんだよ......!"
  }
];

function App() {
  return (
    <div className="App">
      <h1>帝愛グループ 社員紹介</h1>
      <div className="card-container">
        {employees.map((emp, index) => (
          <EmployeeCard key={index} {...emp} />
        ))}
      </div>
    </div>
  );
}

export default App;


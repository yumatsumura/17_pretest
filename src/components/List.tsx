import React, { useState, useEffect } from 'react';
import Data from "data/data.json";
import Lists from "components/List.styl";
import Countup from 'components/Countup';
import usePrevious from 'components/usePrevious';

// 最小値min〜最大値maxの間のランダムな整数を取得します
function randomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function compareScore(a: any, b: any) {
  var r = 0;
  if (a.score > b.score) { r = -1; }
  else if (a.score < b.score) { r = 1; }
  return r;
}

let pre = Data;

const Listtag = () => {
  const [timer] = useState(true);
  const [data, setData] = useState(Data)
  const sorted = data.slice().sort(compareScore);
  pre = usePrevious(data);

  const updaterank = () => {
    const target = randomInt(0, data.length);
    let updateTarget = ({ ...data[target], score: (data[target].score + randomInt(1, 5000)) })
    setData((predata) => predata.map((obj) => (obj.userID === data[target].userID ? updateTarget : obj)));
  }

  useEffect(() => {
    if (timer) {
      const timerId = setInterval(updaterank, 1000);
      return () => clearInterval(timerId);
    }
  });

  const sortedScore = sorted.map((obj) => {
    return obj.score;
  });

  const List = data.map((item, index) => {
    const rank = sortedScore.indexOf(item.score) + 1;
    const rankclass = "rank-" + rank;
    const stylImg = { backgroundImage: 'url(' + item.picture + ')' }

    // インジケーター
    const stylInd = {width: item.score/data[0].score*100 +'%'};

    return (
      <li key={item.userID} className={"profile " + rankclass}>
        <div className='profile-box'>
          <div className='profile-rank'>
            {rank}
          </div>
          <div className='profile-img' style={stylImg}>

          </div>
          <div className='profile-name'>
            {item.displayName}
          </div>
          <div className='profile-score'>
            <Countup prescore={pre[index].score} score={item.score} />
          </div>
        </div>
        <div className='profile-indi' style={stylInd}></div>
      </li>
    )
  });

  return (
    <Lists>
      <ul>
        {List}
      </ul>
    </Lists>
  );
};

export default Listtag;
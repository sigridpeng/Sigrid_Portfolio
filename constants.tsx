import { Category, Project } from './types';
import image1 from './IWillSaveYou.jpg';
import image2 from './her_message.jpg';
import image3 from './命懸一線.webp';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '童話之約',
    description: '這是一款以繪本故事為主軸的劇情向「實境解謎遊戲」，將透過遊戲App的指引，觀察現場景物並搭配使用道具包、AR、Linebot，解開故事中的謎團。',
    category: Category.REAL_LIFE,
    imageUrl: 'https://i0.wp.com/content.escape.bar/wp-content/uploads/2024/02/%E5%85%8B%E6%8B%89%E7%8F%8A-%E7%AB%A5%E8%A9%B1%E4%B9%8B%E7%B4%84-01.jpg?fit=1280%2C960&ssl=1',
    tags: ['AR', '解謎', '實境遊戲'],
    url: 'https://popworld.cc/guide/14162/preview',
    isAwardWinning: true
  },
  {
    id: '3',
    title: 'R8M Escape',
    description: '新開的神祕旅館，免費提供住宿及迎賓點心，天下有這麼好的事嗎？不過優惠實在太吸引人了，過去看看應該沒關係吧……一進到旅館就立刻送上迎賓飲料，這服務也太好了！咦咦？我的頭怎麼開始痛了，難道這飲料……',
    category: Category.MOBILE,
    imageUrl: 'https://play-lh.googleusercontent.com/grbxGEKgFnFrLdXVWI0rWh-SFZhtiRzYo9bUp4NlnnA-k3hewta4pSZCHbgnf2QjVeU=w832-h470-rw',
    tags: ['Android App/Kotlin', 'MVVM', '密室逃脫'],
    url: 'https://play.google.com/store/apps/details?id=com.classam.r8mescape'
  },
  {
    id: '5',
    title: '命懸一線',
    description: '1994 年 5 月，單親媽媽林慧君接到一通詭異電話。對方自稱是她「未來的兒子」，並發出驚人預言：她將在兩天後的一場火災中喪命。這場跨越時空的通話，成為揭開真相的唯一線索。',
    category: Category.LARP,
    imageUrl: image3,
    tags: ['本格推理', '多結局', '情感沉浸'],
    url: 'https://www.uzu-app.com/zh-TW/scenario/8404',
    isAwardWinning: true
  },
  {
    id: '6',
    title: 'Magic Pen Note',
    description: '極輕量的繪圖板App，可自訂筆刷大小/顏色(含透明度及深淺)、即時儲存與讀取，無須輸出至手機相簿即可自由編輯及預覽，並擁有圖貼(印章)功能，手指點擊即可生成內建的可愛圖案',
    category: Category.MOBILE,
    imageUrl: 'https://play-lh.googleusercontent.com/2LV_yF9rtxoQudsOdIlcHKFtOfSUT-shqvVmmajH3Q2gHW88dtElkjQiEGRdUPMQcA=w832-h470-rw',
    tags: ['Android App/Java', '繪圖工具'],
    url: 'https://play.google.com/store/apps/details?id=com.classam.magicpennote'
  },
  {
    id: '7',
    title: '拯救之命',
    description: '《拯救之命 I Will Save You》是一款結合變格推理、多輪迴敘事與自由探索系統的劇情向獨立遊戲。玩家將在封閉空間中進行調查、懷疑、指認與選擇——然而，找出兇手並不代表故事結束。',
    category: Category.OTHER,
    imageUrl: image1,
    tags: ['獨立遊戲', '變格推理', '多輪迴'],
    url: 'https://sigridpeng.github.io/i_will_save_you/'
  },
  {
    id: '8',
    title: '她留下的訊息',
    description: '這是一款溫馨劇情的點擊解謎遊戲。玩家將扮演主角，在前往女友住處卻發現人不見了的情況下，透過探索房間內的物品與線索，拼湊出她留下的訊息。',
    category: Category.OTHER,
    imageUrl: image2,
    tags: ['點擊解謎', '溫馨劇情', '探索'],
    url: 'https://sigridpeng.github.io/her_message/'
  }
];

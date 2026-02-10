
import { Category, Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '童話之約',
    description: '這是一款以繪本故事為主軸的劇情向「實境解謎遊戲」，將透過遊戲App的指引，觀察現場景物並搭配使用道具包、AR、Linebot，解開故事中的謎團。',
    category: Category.REAL_LIFE,
    imageUrl: 'https://i0.wp.com/content.escape.bar/wp-content/uploads/2024/02/%E5%85%8B%E6%8B%89%E7%8F%8A-%E7%AB%A5%E8%A9%B1%E4%B9%8B%E7%B4%84-01.jpg?fit=1280%2C960&ssl=1',
    tags: ['AR', '解謎', '實境遊戲'],
    url: 'https://popworld.cc/guide/14162/preview'
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
    description: '於2025年4月發布，是一部聚焦1994年單親媽媽林慧君相關懸疑案件的現代科幻作品。',
    category: Category.LARP,
    imageUrl: 'https://external.ftpe7-2.fna.fbcdn.net/emg1/v/t13/4226358108188043966?stp=dst-src&url=https%3A%2F%2Fimagedelivery.net%2Fhtp-D7B2hJT5XtdWYN9e7Q%2F4ca9ba39-6050-4fe6-1840-c1318b294300%2Foriginal&utld=imagedelivery.net&_nc_gid=-kPBhAEAQVggYz9hxrvMRQ&_nc_oc=Adn0vktji4SWi-WLvObC2xgPn1n1y-m7ZhJ8FmfzMyEhOM819k02JOHLRr8maT51orV-k7jbXV35Ngd1_Odt-mmz&ccb=13-1&oh=06_Q3-8AQr1P4St6H37Gpj5nDD6lcjQwnhg9vHz868kTbrFwkMR&oe=698D2488&_nc_sid=1d65fc',
    tags: ['本格推理', '多結局', '情感沉浸'],
    url: 'https://www.uzu-app.com/zh-TW/scenario/8404'
  },
  {
    id: '6',
    title: 'Magic Pen Note',
    description: '極輕量的繪圖板App，可自訂筆刷大小/顏色(含透明度及深淺)、即時儲存與讀取，無須輸出至手機相簿即可自由編輯及預覽，並擁有圖貼(印章)功能，手指點擊即可生成內建的可愛圖案',
    category: Category.MOBILE,
    imageUrl: 'https://play-lh.googleusercontent.com/2LV_yF9rtxoQudsOdIlcHKFtOfSUT-shqvVmmajH3Q2gHW88dtElkjQiEGRdUPMQcA=w832-h470-rw',
    tags: ['Android App/Java', '繪圖工具'],
    url: 'https://play.google.com/store/apps/details?id=com.classam.magicpennote'
  }
];

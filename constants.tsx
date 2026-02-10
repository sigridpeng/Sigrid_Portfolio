
import { Category, Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '霓虹迷蹤：都市逃脫',
    description: '一款結合 AR 技術的實境尋寶遊戲，將台北街頭轉化為一座巨大的解謎迷宮。強調空間感知與團隊高強度互動。',
    category: Category.REAL_LIFE,
    imageUrl: 'https://picsum.photos/seed/escape/600/400',
    tags: ['AR', '空間互動', '實境遊戲']
  },
  {
    id: '2',
    title: '深海的最後一封信',
    description: '沉浸式劇場劇本殺。在密閉的潛水艇空間內，玩家需透過破碎的日記與聲納紀錄，拼湊出被遺忘的歷史真相。',
    category: Category.LARP,
    imageUrl: 'https://picsum.photos/seed/mystery/600/400',
    tags: ['懸疑', '角色扮演', '劇作深度']
  },
  {
    id: '3',
    title: 'QuestMaster Hub',
    description: '為實境遊戲主理人量身打造的行動管理 App，即時監控玩家進度、自動派發線索並同步燈光音效。',
    category: Category.MOBILE,
    imageUrl: 'https://picsum.photos/seed/app/600/400',
    tags: ['UI/UX', '自動化', '工具應用']
  },
  {
    id: '4',
    title: '禁忌實驗室',
    description: '融合實體機關與化學變化的實境闖關活動。玩家必須在限時內操作真實設備完成實驗以獲取通關代碼。',
    category: Category.REAL_LIFE,
    imageUrl: 'https://picsum.photos/seed/lab/600/400',
    tags: ['實體機關', '沉浸感', '科學解謎']
  },
  {
    id: '5',
    title: '霧中紅月',
    description: '19世紀背景的維多利亞風格劇本殺。強調精緻的角色服裝設計與多重結局的敘事路徑。',
    category: Category.LARP,
    imageUrl: 'https://picsum.photos/seed/larp2/600/400',
    tags: ['維多利亞風', '多結局', '情感沉浸']
  },
  {
    id: '6',
    title: 'EcoTrack：綠色足跡',
    description: '個人碳足跡計算與社群挑戰 App。透過視覺化的數據圖表，鼓勵使用者在日常生活中實踐永續。',
    category: Category.MOBILE,
    imageUrl: 'https://picsum.photos/seed/eco/600/400',
    tags: ['環保', '數據視覺化', 'React Native']
  }
];

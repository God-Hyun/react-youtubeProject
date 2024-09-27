import { create } from 'zustand';
// import youtube from './api/youtube'
import { mockVideos } from './api/mockData';

const useStore = create((set) => ({
  videos: [],
  selectedVideo: null,
  searchTerm: '',

  fetchVideos: (term) => {
    const filteredVideos = mockVideos.filter(video => 
      video.snippet.title.toLowerCase().includes(term.toLowerCase())
    );
    set({ videos: filteredVideos, selectedVideo: filteredVideos[0], searchTerm: term });
  },

  setSelectedVideo: (video) => set({ selectedVideo: video }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  isLoggedIn: false,
  user: null,

  login: (username, password) => {
    // 실제 인증 로직은 여기에 구현해야 합니다.
    // 지금은 간단히 사용자 이름만 확인합니다.
    if (username) {
      set({ isLoggedIn: true, user: { username } });
    }
  },

  logout: () => {
    set({ isLoggedIn: false, user: null });
  },
}));

export default useStore;


// API를 사용할 때 쓰면 되는 코드
//   fetchVideos: async (term) => {
//     try {
//       const response = await youtube.get('/search', {
//         params: { q: term || 'popular' },
//       });
//       set({ 
//         videos: response.data.items, 
//         selectedVideo: response.data.items[0], 
//         searchTerm: term 
//       });
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   },

//   setSelectedVideo: (video) => set({ selectedVideo: video }),
//   setSearchTerm: (term) => set({ searchTerm: term }),
// }));

// export default useStore;
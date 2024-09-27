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
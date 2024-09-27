import { create } from 'zustand';  // default import 대신 named import 사용
import youtube from './api/youtube';

const useStore = create((set) => ({
  videos: [],
  selectedVideo: null,
  searchTerm: '',

  fetchVideos: async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term },
    });
    set({ videos: response.data.items, selectedVideo: response.data.items[0], searchTerm: term });
  },

  setSelectedVideo: (video) => set({ selectedVideo: video }),
  setSearchTerm: (term) => set({ searchTerm: term }),
}));

export default useStore;
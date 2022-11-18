import {reactive} from 'vue'

export const store = reactive({
  apiUrl: "https://www.breakingbadapi.com/api/characters",
  charactersListData: [],
  isLoaded: false,
  categorySelected: "",
  categories: ["Breaking Bad", "Better Call Saul"]
});
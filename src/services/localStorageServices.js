const SCORE = "SCORE";

export const localStorageServices = {
  setScore: (data) => {
    let json = JSON.stringify(data);
    localStorage.setItem(SCORE, json);
  },
  getScore: () => {
    if (localStorage.getItem(SCORE)) {
      let json = localStorage.getItem(SCORE);

      return JSON.parse(json);
    } else {
      return null;
    }
  },
  removeScore: () => {
    localStorage.removeItem(SCORE);
  },
};

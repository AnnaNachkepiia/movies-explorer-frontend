const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

export const getMovies = () => {
  return fetch(BASE_URL).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка HTTP: ${res.status}`);
    }
  });

};

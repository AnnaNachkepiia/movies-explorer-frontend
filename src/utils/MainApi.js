const BASE_URL = "https://api.nachkepia.movies-exp.nomoredomains.icu";
// const token = `${localStorage.getItem("token")}`;

function checkRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ name, email, password }),
  }).then(checkRes);
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  })
    .then((token) => {
      localStorage.setItem("token", token);
      return token;
    })
    .then(checkRes);
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkRes);
};

const getHeaders = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
};
export const getUserData = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: getHeaders(),
    credentials: "include",
  }).then(checkRes);
};

export const editUserData = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: getHeaders(),
    credentials: "include",
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then(checkRes);
};

export const getSavedMovies = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: getHeaders(),
    credentials: "include",
  }).then(checkRes);
};

export const saveMovie = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: getHeaders(),
    credentials: "include",
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `${"https://api.nomoreparties.co"}${data.image.url}`,
      trailerLink: data.trailerLink,
      thumbnail: `${"https://api.nomoreparties.co"}${
        data.image.formats.thumbnail.url
      }`,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    }),
  }).then(checkRes);
};

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: getHeaders(),
    credentials: "include",
  }).then(checkRes);
};

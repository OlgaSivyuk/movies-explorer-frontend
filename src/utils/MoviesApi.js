export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function checkResponse(res) {
    return res.ok 
    ? res.json() 
    : Promise.reject(`Ошибка...: ${res.status}`);
}

export function getMovies() { //searchString, isShort
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(checkResponse)
}


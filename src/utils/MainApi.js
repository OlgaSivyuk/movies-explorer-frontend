// export const BASE_URL = "https://api.movies-sivyuko.nomoredomains.xyz";
export const BASE_URL = 'http://localhost:3001';

function checkResponse(res) {
  return res.ok 
  ? res.json() 
  : Promise.reject(`Ошибка...: ${res.status}`);
}

// проблемка с корс, nomod использовать нельзя
export function register(name, email, password) {
    return fetch(`${BASE_URL}/signup`, {
      // mode: 'no-cors',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({name, email, password})
    })
    .then(checkResponse)
  };

  export function authorize(email, password) {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({email, password})
    })
    .then(checkResponse)
  };

  export function signout(){
    return fetch(`${BASE_URL}/signout`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    .then(checkResponse)
  };

  export function getUser() {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(checkResponse)
  };

  export function updateUser(name, email) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ name, email })
    })
    .then(checkResponse)
  };

  export function addMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  }) {
    return fetch(`${BASE_URL}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }),
    }).then(checkResponse);
  };

  export function getSavedMovies() {
    return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(checkResponse)
  };

  export function deleteSavedMovie(id) { 
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    })
    .then(checkResponse)
  };



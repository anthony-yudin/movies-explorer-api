class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkPromise(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }

    return Promise.resolve(res.json())
  }

  tokenCheck(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkPromise)
  };

  getLikedMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    }).then(this._checkPromise)
  };

  likeMovie(data, token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data),
    }).then(this._checkPromise)
  };

  deleteLikedMovie(id, token) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    }).then(this._checkPromise)
  };
}

  const api = new Api({
  //baseUrl: 'http://localhost:3005',
  baseUrl: 'https://backend.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;

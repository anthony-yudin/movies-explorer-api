class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkPromise(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }

    return Promise.resolve(res.json())
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then(this._checkPromise);
  };
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default moviesApi;

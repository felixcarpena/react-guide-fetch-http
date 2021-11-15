import { call, takeEvery, put } from "redux-saga/effects";
import { updateIsLoading, updateMovies } from './movies'
import sagaActions from './saga-actions'

const fetchMoviesFomApi = async () => {
    const response = await fetch("https://swapi.dev/api/films")
    const data = await response.json()

    return data.results.map((film) => ({
      id: film.episode_id,
      title: film.title,
      openingText: film.opening_crawl,
      releaseDate: film.release_date
    }))
};

export function* fetchMovies() {
  try {
    const movies = yield call(() => fetchMoviesFomApi());
    yield put(updateIsLoading(true));
    yield put(updateMovies(movies));
    yield put(updateIsLoading(false));
  } catch (e) {
    yield put({ type: "FETCH_MOVIES_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_MOVIES, fetchMovies);
}

import React, {useEffect} from 'react'
import MoviesList from './components/MoviesList'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import sagaActions from './store/saga-actions'

function App() {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.movies)
  const isLoading = useSelector((state) => state.movies.isLoading)

  useEffect(() => {
    (async () => {
      //dispatch({ type: sagaActions.FETCH_MOVIES })
    })()
  }, [dispatch])

  return (
    <React.Fragment>
      <section>
        <button onClick={() => dispatch({ type: sagaActions.FETCH_MOVIES })}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Loading ...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

const initialState = {
  film: null,
  films: [],
  loading: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case 'GET_FILMS_REQUEST': {
    return {
      ...state,
      loading: true,
    }
  }
  case 'GET_FILMS_FAILURE': {
    return {
      ...state,
      loading: false,
      films: action.error
    }
  }
  case 'GET_FILMS_SUCCESS': {
    return {
      ...state,
      loading: false,
      films: action.films.results,
      film: action.films.results[0]
    }
  }
  case 'CHOOSE_FILM': {
    return {
      ...state,
      film: state.films.filter((f) => f.episode_id === action.id )[0]
    }
  }
  default:
    return state
  }
}

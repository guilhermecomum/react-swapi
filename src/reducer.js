const initialState = {
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
      films: action.films.results
    }
  }
  default:
    return state
  }
}

import apiAction from './apiAction'

export const getFilms = () => {
  return apiAction({
    prefix: 'GET_FILMS',
    path: '/films/',
    processResponse: async (response, films) => {
      return { films }
    }
  })
}

export const chooseFilm = (id) => {
  return dispatch => {
    dispatch({ type: 'CHOOSE_FILM', id})
  }
}

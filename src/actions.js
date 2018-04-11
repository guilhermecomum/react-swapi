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

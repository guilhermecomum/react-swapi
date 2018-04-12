export const requestHeaders = credentials => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
})

export const parseError = error => {
  if (error instanceof Error) {
    return {
      id: error.name,
      message: error.message,
    }
  }

  if (error.errors) {
    const messages = error.errors.fullMessages || error.errors
    const message = messages[0]
    return {
      id: error.id || error.errors.id || message,
      message,
      error,
    }
  }

  return error
}

export const apiAction = options => (dispatch, getState) => {
  return apiDispatchAction(dispatch, options, getState)
}


export const apiDispatchAction = async (dispatch, options, getState) => {
  const { prefix, path, method, params } = options
  const { requestAttributes, processResponse, successAction } = options

  dispatch({
    type: `${prefix}_REQUEST`,
    ...requestAttributes,
  })

  let fetchOptions = { method: method ? method : 'get' }

  fetchOptions.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  if (params) {
    fetchOptions.body = JSON.stringify(params)
  }

  fetchOptions.mode = 'cors'

  return fetch(`https://swapi.co/api${path}`, fetchOptions).then(
    async response => {
      const body = await response.text()
      const contentType = response.headers.get('content-type')
      let json

      if (contentType && contentType.match(/application\/json/)) {
        json = JSON.parse(body)
      } else {
        json = {
          id: `${response.status}`,
          message: body,
        }
      }

      if (response.ok) {
        dispatch({
          type: `${prefix}_SUCCESS`,
          ...(processResponse && (await processResponse(response, json))),
        })

        if (successAction) {
          await successAction(dispatch)
        }

      } else {

        return dispatch({
          type: `${prefix}_FAILURE`,
          ...requestAttributes,
          error: parseError(json),
        })
      }
    },
    error => {
      if (process.env.NODE_ENV === 'test') {
        console.warn(error)
      }

      dispatch({
        type: `${prefix}_FAILURE`,
        ...requestAttributes,
        error: parseError(error),
      })
    },
  )
}

export default apiAction

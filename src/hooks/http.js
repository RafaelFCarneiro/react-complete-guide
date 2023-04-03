import { useCallback, useReducer } from 'react';

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null,
};

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier,
      };
    case 'RESPONSE':
      return {
        ...currentHttpState,
        loading: false,
        data: action.data,
        extra: action.extra,
      };
    case 'ERROR':
      return { loading: false, error: action.errorMessage };
    case 'CLEAR':
      return initialState;
    default:
      throw new Error('Should not get reached!');
  }
};

const useHttp = () => {
  const [httpState, dispatch] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => dispatch({ type: 'CLEAR' }), []);

  const sendRequest = useCallback((url, method, body, extra, identifier) => {
    dispatch({ type: 'SEND', identifier });
    fetch(url, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: 'RESPONSE', data, extra });
      })
      .catch((error) => {
        dispatch({ type: 'ERROR', errorMessage: error.message });
      });
  }, []);

  return {
    loading: httpState.loading,
    error: httpState.error,
    identifier: httpState.identifier,
    data: httpState.data,
    extra: httpState.extra,
    sendRequest,
    clear,
  };
};

export default useHttp;

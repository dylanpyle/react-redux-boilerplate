import { get } from '../../../services/api';

export const GET_LIST_REQUEST = 'countries/GET_LIST_REQUEST';
export const GET_LIST_SUCCESS = 'countries/GET_LIST_SUCCESS';
export const GET_LIST_FAILURE = 'countries/GET_LIST_FAILURE';

function getListRequest() {
  return {
    type: GET_LIST_REQUEST
  };
}


function getListSuccess(data) {
  return {
    type: GET_LIST_SUCCESS,
    data
  };
}

function getListFailure(error) {
  return {
    type: GET_LIST_FAILURE,
    errorMessage: error.message
  };
}

export default function getList() {
  return (dispatch) => {
    dispatch(getListRequest());

    get('/all').then(
      ([body]) => {
        dispatch(getListSuccess(body));
        return body;
      },
      (error) => {
        dispatch(getListFailure(error));
        throw error;
      }
    );
  };
}

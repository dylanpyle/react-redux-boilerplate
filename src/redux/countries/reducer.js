import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE
} from './actions/get-list';

export default function (state = {
  errorMessage: null,
  isFetching: false,
  countryCodes: [],
  data: {}
}, action) {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return Object.assign({}, state, {
        errorMessage: null,
        isFetching: true
      });

    case GET_LIST_SUCCESS: {
      // In the future, we can split this out to two separate reducers; one to
      // handle the "cache" of items by ID (in this case, alpha-2 code), one to
      // handle the response containing a list of IDs.
      const countriesByCode = {};
      const countryCodes = [];

      action.data.forEach((country) => {
        countriesByCode[country.alpha2Code] = country;
        countryCodes.push(country.alpha2Code);
      });

      return Object.assign({}, state, {
        errorMessage: null,
        isFetching: false,
        data: countriesByCode,
        countryCodes
      });
    }

    case GET_LIST_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        isFetching: false
      });

    default:
      return state;
  }
}

import * as actions from '../actions/singlePostActions';

export const initialState = {
  singlePost: {},
  loading: false,
  hasErrors: false,
};

export default function singlePostReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_SINGLE_POST:
      return { ...state, loading: true };
    case actions.GET_SINGLE_POST_SUCCESS:
      return { singlePost: action.payload, loading: false, hasErrors: false };
    case actions.GET_SINGLE_POST_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}

// Create Redux action types
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
export const GET_SINGLE_POST_SUCCESS = 'GET_SINGLE_POST_SUCCESS';
export const GET_SINGLE_POST_FAILURE = 'GET_SINGLE_POST_FAILURE';

// Create Redux action creators that return an action
export const getSinglePost = () => ({
  type: GET_SINGLE_POST,
});

export const getSinglePostSuccess = (post) => ({
  type: GET_SINGLE_POST_SUCCESS,
  payload: post,
});

export const getSinglePostFailure = () => ({
  type: GET_SINGLE_POST_FAILURE,
});

// Combine them all in an asynchronous thunk
export function fetchSinglePost(id) {
  return async (dispatch) => {
    dispatch(getSinglePost());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();

      dispatch(getSinglePostSuccess(data));
    } catch (error) {
      dispatch(getSinglePostFailure());
    }
  };
}

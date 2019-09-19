export const getAllPosts = data => ({
  type: 'GET_ALL_POSTS',
  data,
});

export const getPosts = () => {
  return dispatch => {
    fetch('https://venbest-test.herokuapp.com/')
      .then(data => data.json())
      .then(data => dispatch(getAllPosts(data)));
  };
};

export const filterPosts = data => ({
  type: 'FILTER_POSTS',
  data,
});


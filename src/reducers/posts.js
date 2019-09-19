const initialState = {
  data: null,
  sortedData: null
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return { ...state, data: action.data, sortedData: action.data };
    case 'FILTER_POSTS':
      const {data} = action
      if(data.name === '' && data.lastname === '' && data.age === '' &&
        data.sexM === false && data.sexW === false) {
        return { ...state};
      }

      let newData = {};
      newData = state.data.filter(el => {
        return (el.lastname.toUpperCase()
            .includes(data.lastname.toUpperCase()) ||
            !data.lastname.trim()) && 
          (el.name.toUpperCase()
            .includes(data.name.toUpperCase()) ||
            !data.name.trim()) &&
          (+el.age === +data.age ||
            !data.age.trim()) &&
          ((el.sex === 'f' && data.sexW) || (el.sex === 'm' && data.sexM))
      })

      return { ...state, sortedData: newData };
      
    default:
      return state;
  }
};

export default posts;

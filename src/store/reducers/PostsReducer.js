
const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {
  switch(action.type){

    case 'GET_POSTS_SUCCESS': {

      const { posts } = action.payload;
      return posts;
    }

    default: 
      return state;
  }
}
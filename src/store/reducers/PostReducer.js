
const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {
  switch(action.type){

    case 'GET_POST_SUCCESS': {

      const { post } = action.payload;
      return post;
    }

    default: 
      return state;
  }
}
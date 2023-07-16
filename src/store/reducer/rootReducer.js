const initState = {
    users: [
        { id: 1 ,name: 'John'},
        { id: 2 ,name:'hoi dan it'}
    ],
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'deleteUser':
            console.log("ren in",action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            return {
                ...state, users
            }
          // code block
        
        case 'CREACT_USER':
            let id = Math.floor(Math.random() *10000)

            let user = {id:id , name : `random ${id}`}
          
            return {
                ...state, users:[...state.users, user]
            }
          break;
        default:
          // code block
      }
    return state;

};


export default rootReducer;
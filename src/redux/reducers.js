/*   
DATA STORE STRUCTURE


{
    user:{ 
        f_name: '',
        l_name: '',
        email: '',
        phone: '',
        password: '',
        confirm: '',
        login_state: ,
    }
}



*/

initialState = {
  user: {},
};

export const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATEUSER':
      return {
        ...state,
        user: {
          f_name: action.f_name,
          l_name: action.l_name,
          email: action.email,
          phone: action.phone,
          pass: action.pass,
          conf_pass: action.pass,
        },
      };

    case 'CHGLOGIN':
      return {
        ...state,
        user: {
          ...state.user,
          login_state: action.login_state,
        },
      };

    default:
      return state;
  }
};

import * as authAction from "../Actions/Auth/AuthAction";
const authReducer = (
  state = {
    loginData: "",
    loginLoading: false,

    signUpData: "",
    signupLoading: false
  },
  action
) => {
  switch (action.type) {
    case authAction.LOGIN_REQUEST:
      return Object.assign({}, state, {
        loginLoading: true
      });
    case authAction.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loginLoading: false,
        loginData: action.data
      });
    case authAction.LOGIN_ERROR:
      return Object.assign({}, state, {
        loginLoading: false
      });

    case authAction.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        signupLoading: true
      });
    case authAction.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        signupLoading: false,
        signUpData: action.data
      });
    case authAction.SIGNUP_ERROR:
      return Object.assign({}, state, {
        signupLoading: false
      });

    default:
      return state;
  }
};

export default authReducer;

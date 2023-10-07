import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSigInStart = () => ({
  type: UserActionTypes.GOOGLE_SIG_IN_START,
});

export const sigInSuccess = (user) => ({
  type: UserActionTypes.SIG_IN_SUCCESS,
  payload: user,
});

export const sigInFailure = (error) => ({
  type: UserActionTypes.SIG_IN_FAILURE,
  payload: error,
});

export const emailSigInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIG_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => {
  return { type: UserActionTypes.CHECK_USER_SESSION };
};

export const signOutStart = () => ({ type: UserActionTypes.SIG_OUT_START });
export const signOutSuccess = () => ({ type: UserActionTypes.SIG_OUT_SUCCESS });
export const signOutFailure = (error) => ({
  type: UserActionTypes.SIG_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (newUser) => ({
  type: UserActionTypes.SIG_UP_START,
  payload: newUser,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIG_UP_SUCCESS,
  payload: {user, additionalData}
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIG_UP_FAILURE,
  payload: error,
});

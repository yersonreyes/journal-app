import { async } from "@firebase/util";
import {
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSingIn = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMesage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  displayName,
  password,
  email,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMesage } =
      await registerUserWithEmailPassword({
        displayName,
        password,
        email,
      });

    if (!ok) return dispatch(logout({ errorMesage }));
    dispatch(login({ displayName, password, email, uid }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMesage, displayName } =
      await loginWithEmailPassword({
        email,
        password,
      });
    if (!ok) return dispatch(logout({ errorMesage }));
    dispatch(login({ displayName, email, uid, photoURL, errorMesage }));
  };
};

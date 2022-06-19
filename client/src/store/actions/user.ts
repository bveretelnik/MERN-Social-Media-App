import { UserAction, UsersActionsType } from "../../types/actionTypes";
import { IUser } from "../../types/types";
import { Dispatch } from "redux";
import * as api from "../../api/index";

export const signin =
  (formData: IUser, history: (...arg: any) => void) =>
  async (dispatch: Dispatch<UserAction>) => {
    try {
      const { data } = await api.signIn(formData);

      dispatch({
        type: UsersActionsType.AUTH,
        payload: { ...data.result, tokenId: data.token },
      });

      history("/");
    } catch (error) {
      console.log(error);
    }
  };

export const signup =
  (result: IUser, history: (...arg: any) => void) =>
  async (dispatch: Dispatch<UserAction>) => {
    try {
      const { data } = await api.signUp(result);
      console.log(data);
      dispatch({
        type: UsersActionsType.AUTH,
        payload: { ...data.result, tokenId: data.token },
      });

      history("/");
    } catch (error) {
      console.log(error);
    }
  };
export const signinGoogle = (result: IUser, history: (...arg: any) => void) => {
  history("/");
  return { type: UsersActionsType.AUTH_GOOGLE, payload: result };
};

export const logOut = () => {
  return { type: UsersActionsType.LOGOUT };
};

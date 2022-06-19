import { UserAction, UsersActionsType } from "../../types/actionTypes";
import { IUserState } from "../../types/types";

export const userReducer = (
  state: IUserState | null = null,
  action: UserAction
) => {
  switch (action.type) {
    case UsersActionsType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return { ...action.payload };
    case UsersActionsType.AUTH_GOOGLE:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return { ...action.payload };
    case UsersActionsType.LOGOUT:
      localStorage.clear();
      return null;
    default:
      return state;
  }
};

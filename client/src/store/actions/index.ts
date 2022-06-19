import * as PostActionCreators from "./posts";
import * as UserActionCreators from "./user";

export default {
  ...PostActionCreators,
  ...UserActionCreators,
};

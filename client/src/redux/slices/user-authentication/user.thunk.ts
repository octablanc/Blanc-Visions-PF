import { setUser, setLoading } from "./user.slice";
import { User } from "../../../models/User.model";
import { getuser } from "../../../services/services";

export function getUser(mail: string | null) {
  return async (dispatch: any) => {
    if (!mail) {
      dispatch(setUser(null));
    } else {
      try {
        dispatch(setLoading(true));
        const data: User = await getuser(mail);
        dispatch(setUser(data));
      } catch (error) {
        dispatch(setLoading(false));
      }
    }
  };
}

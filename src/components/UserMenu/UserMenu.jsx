import { useDispatch, useSelector } from "react-redux";
import { resetCredentials } from "features/authSlice";
import { selectCurrentUserStatus } from "features/authSlice";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);
  const isLoggedIn = useSelector(selectCurrentUserStatus);

  const handleClick = async () => {
    try {
      dispatch(resetCredentials());
    } catch (error) {
      console.log(error); 
    }
  }


  return (
    <div>
      <p>{isLoggedIn ? email : 'not logged in'}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

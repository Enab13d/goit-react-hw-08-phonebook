import { logOut } from "features/auth/operations";
import { selectIsLoggedIn, selectUser } from "features/auth/selectors";
import { useDispatch, useSelector } from "react-redux";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClick = async () => {
    try {
      dispatch(logOut());
    } catch (error) {
      console.log(error); 
    }
  }


  return (
    <div>
      <p>{isLoggedIn ? user.email : 'not logged in'}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

import { logOut } from "features/auth/operations";
import { selectIsLoggedIn, selectUser } from "features/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { LogoutBtn, USerMenuContainer, UserLabel} from "./UserMenu.styled";

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
    <USerMenuContainer>
      <UserLabel>{isLoggedIn ? user.email : 'not logged in'}</UserLabel>
      <LogoutBtn onClick={handleClick}>Logout</LogoutBtn>
    </USerMenuContainer>
  );
};

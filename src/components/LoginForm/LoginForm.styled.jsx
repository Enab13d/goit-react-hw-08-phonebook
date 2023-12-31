import styled from '@emotion/styled';
import { theme } from 'constants';

export const CustomLoginForm = styled.form`
  max-width: 100%;
  margin-top: ${theme.sizing(7)};
  ${theme.mq[0]} {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: ${theme.sizing(4)};
  background-color: ${theme.colors.transparentWhiteBg};
  backdrop-filter: blur(8px);
`;

export const LoginLabel = styled.label`
  margin-bottom: ${theme.sizing(2)};
  font-weight: 500;
  color: ${theme.colors.abmientWhite};
  font-size: 18px;
`;

export const LoginField = styled.input`
  margin-bottom: ${theme.sizing(2)};
  padding: ${theme.sizing(3)};
  font-size: 18px;
  background-color: hsla(193, 35%, 89%, 1);
  border-radius: 4px;
  padding-left: ${theme.sizing(2)};
  padding-top: ${theme.sizing(1)};
  padding-bottom: ${theme.sizing(1)};
  border: none;
  &: last-of-type {
    margin-bottom: ${theme.sizing(4)};
  }
`;
export const LogintBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 100%;
  height: 36px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  background-color: hsla(111, 75%, 50%, 1);
  color: white;
  transition: background-color ${theme.transitionDuration}
      ${theme.transitionTimingFunction},
    color ${theme.transitionDuration}
      ${theme.transitionTimingFunction};
  &:hover,
  &:focus {
    color: hsla(193, 35%, 89%, 1);
    background-color: ${theme.colors.darkBlue};
  }
`;

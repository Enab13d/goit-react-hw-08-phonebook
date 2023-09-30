import styled from '@emotion/styled';
import { theme } from 'constants';
import { BsPersonAdd } from 'react-icons/bs';

export const ContactsForm = styled.form`
width: 100%;


  display: flex;
  flex-direction: column;

  border-radius: 8px;
  padding: ${theme.sizing(1)};
`;
export const Label = styled.label`
  margin-bottom: ${theme.sizing(2)};
`;
export const Field = styled.input`
  margin-bottom: ${theme.sizing(2)};
  height: ${theme.sizing(5)};
  padding-left: ${theme.sizing(2)};
  padding-top: ${theme.sizing(1)};
  padding-bottom: ${theme.sizing(1)};
  background-color: ${theme.colors.abmientWhite};
  border-radius: 4px;
  font-size: 18px;
  border: none;
  &: last-of-type {
    margin-bottom: ${theme.sizing(4)};
  }
`;
export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 100%;
  height: 36px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  background-color: ${theme.colors.formBorder};
  color: white;
  &:hover,
  &:focus {
    color: white;
    background-color: ${theme.colors.darkBlue};
  }
`;
export const AddContactIcon = styled(BsPersonAdd)`
width: 24px;
height: 24px;
margin-left: ${theme.sizing(2)};
`
export const ContactsWrapper = styled.div`
width: calc(100% - 18px);
padding: ${theme.sizing(5)};
border-radius: 8px;
margin-top: ${theme.sizing(7)};
${theme.mq[0]} {
  width: 380px;
  margin-left: auto;
  margin-right: auto;
};
  background-color: ${theme.colors.transparentWhiteBg};
  backdrop-filter: blur(12px);

`
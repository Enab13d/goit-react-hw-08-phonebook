import styled from "@emotion/styled";
import { theme } from "constants";

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.8);
z-index: 1200;
opacity: ${(props) => (props.expanded ? 1 : 0)};
transition: opacity 0.8s ease-in-out;
`
export const ModalWindow = styled.div`
max-width: calc(100vw - ${theme.sizing(12)});
max-height: calc(100vh - ${theme.sizing(6)});
`
export const EditContactsForm = styled.form`
width: calc(100% - 18px);

${theme.mq[0]} {
  width: 380px;
  margin-left: auto;
  margin-right: auto;
};
  display: flex;
  flex-direction: column;
  border: 2px solid ${theme.colors.formBorder};
  border-radius: 8px;
  padding: ${theme.sizing(1)};
`;
export const EditFormLabel = styled.label`
  margin-bottom: ${theme.sizing(2)};
`;
export const EditFormField = styled.input`
  margin-bottom: ${theme.sizing(2)};
  height: ${theme.sizing(5)};
  &: last-of-type {
    margin-bottom: ${theme.sizing(4)};
  }
`;
export const EditFormSubmitBtn = styled.button`
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
  margin-bottom: ${theme.sizing(2)};
`;
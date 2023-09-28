import styled from "@emotion/styled";
import { theme } from "constants";
import { AiOutlineCloseCircle } from "react-icons/ai";
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
pointer-events: ${(props) => (props.expanded ? 'auto' : 'none')};
opacity: ${(props) => (props.expanded ? 1 : 0)};
transition: opacity ${theme.transitionDuration} ${theme.transitionTimingFunction};

div {
  transform: scale${(props) => (props.expanded ? '(1)' : '(0.7)')};
  transition: transform ${theme.transitionDuration} ${theme.transitionTimingFunction};
}

`
export const ModalWindow = styled.div`
max-width: calc(100vw - ${theme.sizing(12)});
max-height: calc(100vh - ${theme.sizing(6)});
`
export const EditContactsForm = styled.form`
width: calc(100% - 18px);
  background-color: hsla(212, 5%, 47%, 1);
  backdrop-filter: blur(6px);

${theme.mq[0]} {
  width: 380px;
  margin-left: auto;
  margin-right: auto;
};
  display: flex;
  flex-direction: column;
  border: 1px solid hsla(193, 35%, 89%, 1);
  border-radius: 8px;
  padding: ${theme.sizing(4)};
  
`;
export const EditFormLabel = styled.label`
  margin-bottom: ${theme.sizing(2)};
`;
export const EditFormField = styled.input`
  margin-bottom: ${theme.sizing(2)};
  background-color: hsla(193, 35%, 89%, 1);
  border-radius: 4px;
  padding-left: ${theme.sizing(2)};
  padding-top: ${theme.sizing(2)};
  padding-bottom: ${theme.sizing(2)};
  border: none;
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
  background-color: black;
  color: hsla(193, 35%, 89%, 1);
  &:hover,
  &:focus {
    color: white;
    background-color: ${theme.colors.darkBlue};
  }
  margin-bottom: ${theme.sizing(2)};
`;
export const CloseIcon = styled(AiOutlineCloseCircle)`
width: 20px;
height: 20px;
margin-left: 12px;
pointer-events: none;
`

import styled from '@emotion/styled';
import { theme } from 'constants';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${theme.sizing(2)};
  padding-right: ${theme.sizing(2)};
`;
export const ContactActionBtn = styled.button`
  width: 40px;
  padding: ${theme.sizing(1)};
  border-radius: 8px;
  border: none;
  font-weight: 600;
  background-color: ${theme.colors.formBorder};
  color: white;
  transition: background-color ${theme.transitionDuration}
      ${theme.transitionTimingFunction},
    color ${theme.transitionDuration}
      ${theme.transitionTimingFunction};
  &:hover,
  &:focus {
    color: ${theme.colors.abmientWhite};
    background-color: ${theme.colors.darkBlue};
  }
`;
export const ContactBlock = styled.div``;
export const ContactName = styled.p`
  font-weight: 600;
  line-height: 0.8;
`;
export const ContactNumber = styled.p`
font-size: 14px;
line-height: 0.8;
font-weight: 600;
color: ${theme.colors.phoneColor};
& 
`;
export const DeleteIcon = styled(AiOutlineDelete)`
  width: 20px;
  height: 20px;
`;
export const EditIcon = styled(FiEdit2)`
  width: 20px;
  height: 20px;
`;
export const ButtonHolder = styled.div`
  display: flex;
  column-gap: ${theme.sizing(3)};
`;

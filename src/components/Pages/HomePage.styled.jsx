import styled from '@emotion/styled';
import { theme } from 'constants';

export const HomeSection = styled.section`
  max-width: 100%;
  margin-top: ${theme.sizing(7)};
  background-color: ${theme.colors.transparentWhiteBg};
  color: ${theme.colors.abmientWhite};
  backdrop-filter: blur(90px);
  padding: ${theme.sizing(5)} ${theme.sizing(5)};
  border-radius: 8px;
  ${theme.mq[0]} {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
  }
  ${theme.mq[1]} {
    max-width: 1440px;
  }
`;
export const HomeMainTitle = styled.h1`
  margin: 0;
  line-height: 1.5;
  letter-spacing: 0.2rem;
  margin-bottom: ${theme.sizing(3)};
  
`;
export const HomeDescription = styled.p`
position: relative;


  transform: translateX(-100%);
  animation: slide-in 1s ease-in-out forwards; 
  @keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0); 
  }
`;

export const HomeHeader = styled.h2``;
export const LogoHeader = styled.h3`
  color: ${theme.colors.darkBlue};
  font-size: 36px;
    padding-top: 0;
  margin: 0;
  margin-bottom: ${theme.sizing(3)};
  ${theme.mq[0]} {
  font-size: 48px;
  }
`;
export const FeaturesList = styled.ul`
  list-style: none;
  padding-left: 0;
`;
export const FeaturesListItem = styled.li`
  background-color: hsla(239, 0%, 0%, 0.61);
  padding: ${theme.sizing(2)};
  margin-bottom: 2px;
  border-radius: 8px;
`;
export const ImageThumb = styled.div`
  border-radius: 16px;

  overflow: hidden;
  width: 100%;
  ${theme.mq[1]} {
  max-width: 400px;
  }
`;
export const FlexContainer = styled.div`
  max-width: 100%;
  ${theme.mq[0]} {
    display: flex;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
  }
  ${theme.mq[1]} {
    max-width: 1440px;
  }

  column-gap: ${theme.sizing(4)};
  align-items: flex-start;
`;
export const HomeImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

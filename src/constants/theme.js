const breakpoints = [768, 1440];
const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const theme = {
  animation: {
    timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: '300ms',
  },
  shadow: '2px 2px 4px 0px rgba(0,0,0,0.75);',
  colors: {
    formBorder: '#00AEFF',
    contactBg: 'hsla(216, 100%, 87%)',
    darkBlue: '#0026FF',
    phoneColor: '#929394',
    transparentWhiteBg: 'hsla(248, 0%, 100%, 0.20)',
    abmientWhite: 'hsla(193, 35%, 89%, 1)',
  },
  transitionDuration:'350ms',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  sizing: value => `${value * 4}px`,
  mq,
};

const colors = {
    black: '#000',
    white: '#fff',
    red: '#f00'
};

const breakpoints = {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '960px',
    xl: '1200px'
};
// const breakpoints = Object.entries(breakpoint).map(([k, v]) => v);

const buttonStyles = {
    primary: {
        color: 'red'
    }
};

const fontWeights = {
    normal: 400,
    medium: 600,
    bold: 800
};

const theme = {
    breakpoints,
    buttonStyles,
    colors,
    fontWeights
};

export default theme;

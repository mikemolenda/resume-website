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
    xl: '1200px',
    map() {
        return [this.xs, this.sm, this.md, this.lg, this.xl].map;
    }
};

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

const colors = {
    black: '#000',
    white: '#fff',
    red: '#f00'
};

const contentWidth = { _: 1, md: '600px', lg: '800px', xl: '1000px' };

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
        normal: {
            backgroundColor: 'green',
            border: '1px solid',
            borderColor: 'white',
            color: 'white'
        },
        hover: {
            backgroundColor: 'yellow',
            borderColor: 'black',
            color: 'black'
        }
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
    contentWidth,
    fontWeights
};

export default theme;

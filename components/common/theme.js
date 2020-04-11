const colors = {
    trueBlack: `rgba(0, 0, 0, 1)`,
    black: `rgba(16, 16, 16, 1)`,
    white: `rgba(255, 255, 255, 1)`,
    darkGray: `rgba(64, 64, 80, 1)`,
    medGray: `rgba(128, 128, 160, 1)`,
    lightGray: `rgba(192, 192, 224, 1)`,
    slateGreen: `rgba(40, 70, 70, 1)`,
    slateBlue: `rgba(0, 45, 62, 1)`,
    darkBlue: `rgba(0, 45, 102, 1)`,
    gold: `rgba(255, 205, 0, 1)`,
    transparent: `rgba(0, 0, 0, 0)`
};

const contentWidth = { _: 1, md: '600px', lg: '800px', xl: '1200px' };

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
            backgroundColor: colors.darkBlue,
            color: colors.white,
            border: 'none'
        },
        hover: {
            backgroundColor: colors.gold,
            color: colors.black
        }
    }
};

const fonts = {
    sans: '"Open Sans", "Helvetica Neue", sans-serif',
    sectionTitle: '"Squada One", "Andale Mono", monospace'
};

const fontWeights = {
    ultraLight: 100,
    light: 200,
    normal: 400,
    medium: 600,
    bold: 800
};

const shadowColor = {
    light: `rgba(0, 0, 0, 0.25)`,
    med: `rgba(0, 0, 0, 0.5)`,
    dark: `rgba(0, 0, 0, 0.75)`
};

const shadowSize = {
    sm: `1px 1px 5px`,
    md: `3px 3px 8px`,
    lg: `5px 5px 10px`
};

const shadows = {
    sm: {
        light: `${shadowSize.sm} ${shadowColor.light}`,
        med: `${shadowSize.sm} ${shadowColor.med}`,
        dark: `${shadowSize.sm} ${shadowColor.dark}`
    },
    md: {
        light: `${shadowSize.md} ${shadowColor.light}`,
        med: `${shadowSize.md} ${shadowColor.med}`,
        dark: `${shadowSize.md} ${shadowColor.dark}`
    },
    lg: {
        light: `${shadowSize.lg} ${shadowColor.light}`,
        med: `${shadowSize.lg} ${shadowColor.med}`,
        dark: `${shadowSize.lg} ${shadowColor.dark}`
    }
};

const theme = {
    breakpoints,
    buttonStyles,
    colors,
    contentWidth,
    fonts,
    fontWeights,
    shadows
};

export default theme;

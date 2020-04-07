import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { Box, Flex } from './box';

const fontWeight = ({ fw, theme }) => {
    return {
        fontWeight: fw ? theme.fontWeights[fw] : theme.fontWeights[0]
    };
};

const fontFamily = ({ fontFamily, theme }) => {
    return {
        fontFamily: fontFamily ? fontFamily : theme.fonts['sans']
    };
};

const color = ({color, theme}) => {
    return {
        color: color ? color : theme.colors['black']
    }
}

const fontSizeVariants = {
    prop: 'fs',
    variants: {
        xs: {
            fontSize: 0,
            lineHeight: '16px'
        },
        sm: {
            fontSize: 1,
            lineHeight: '20px'
        },
        md: {
            fontSize: 2,
            lineHeight: '24px'
        },
        lg: {
            fontSize: 3,
            lineHeight: '25px'
        },
        xl: {
            fontSize: 4,
            lineHeight: '30px'
        },
        xxl: {
            fontSize: 5,
            lineHeight: '34px'
        },
        xxxl: {
            fontSize: 6,
            lineHeight: '39px'
        }
    }
};

export const Text = styled(Box)`
    ${props => css`
        text-align: ${props.textAlign || 'left'};
        text-shadow: ${props.textShadow};
        margin-top: ${props.m ? props.m : props.my ? props.my : props.mt};
        margin-right: ${props.m ? props.m : props.mx ? props.mx : props.mr};
        margin-bottom: ${props.m ? props.m : props.my ? props.my : props.mb};
        margin-left: ${props.m ? props.m : props.mx ? props.mx : props.ml};
    `}
    ${color}
    ${fontFamily}
    ${fontWeight}
    ${variant(fontSizeVariants)}
`;
Text.displayName = 'Text';

export const TextFlex = Text.withComponent(Flex);
TextFlex.displayName = 'TextFlex';

export const Span = Text.withComponent('span');
Span.displayName = 'Span';

export const H1 = Text.withComponent('h1');
H1.defaultProps = {
    fs: 'xxxl',
    fw: 'bold'
};
H1.displayName = 'H1';

export const H2 = Text.withComponent('h2');
H2.defaultProps = {
    fs: 'xxl',
    fw: 'bold'
};
H2.displayName = 'H2';

export const H3 = Text.withComponent('h3');
H3.defaultProps = {
    fs: 'xl',
    fw: 'bold'
};
H3.displayName = 'H3';

export const H4 = Text.withComponent('h4');
H4.defaultProps = {
    fs: 'lg',
    fw: 'bold'
};
H4.displayName = 'H4';

export const Subheading = Text.withComponent('p');
Subheading.defaultProps = {
    fs: 'xl',
    fw: 'medium'
};
Subheading.displayName = 'Subheading';

export const SubheadingSmall = Text.withComponent('p');
SubheadingSmall.defaultProps = {
    fs: 'lg',
    fw: 'medium'
};
SubheadingSmall.displayName = 'SubheadingSmall';

export const Body = Text.withComponent('p');
Body.defaultProps = {
    fs: 'md',
    fw: 'medium'
};
Body.displayName = 'Body';

export const Caption = Text.withComponent('p');
Caption.defaultProps = {
    fs: 'sm'
};
Caption.displayName = 'Caption';

export const FinePrint = Text.withComponent('p');
FinePrint.defaultProps = {
    fs: 'xs'
};
FinePrint.displayName = 'FinePrint';

export const LI = Text.withComponent('li');
LI.displayName = 'LI';


import styled, { css } from 'styled-components';
import { variant } from 'styled-system';

const fontFamily = ({ fontFamily, theme }) => {
    return {
        fontFamily: fontFamily ? fontFamily : theme.fonts['sans']
    };
};

const buttonVariants = (props) => {
    const { primary } = props.theme.buttonStyles;

    return {
        prop: 'appearance',
        variants: {
            primary: {
                ...primary.normal,
                ':hover': {
                    ...primary.hover
                }
            }
        }
    };
};

export const Button = styled.button`
    ${(props) => css`
        width: ${props.fullWidth ? '100%' : props.width ? props.width : 'auto'};
        padding-top: 20px;
        padding-bottom: 20px;
        border-radius: 25px;
        margin-left: auto;
        margin-right: auto;
    `}
    ${(props) => variant(buttonVariants(props))}
    ${fontFamily}
`;
Button.displayName = 'Button';

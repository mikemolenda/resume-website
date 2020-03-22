import styled, { css } from 'styled-components';
import { variant } from 'styled-system';

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
        width: ${props.fullWidth ? '100%' : 'auto'};
    `}
    ${(props) => variant(buttonVariants(props))}
`;
Button.displayName = 'Button';

import styled from 'styled-components'

export const Button = styled('button')(
    {
        color: `${props => props.theme.button.primary.color}`
    },
    {}
);

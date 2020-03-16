import styled from 'styled-components';
import {
    border,
    color,
    compose,
    shadow,
    space,
    typography
} from 'styled-system';

const textProps = compose(
    border,
    color,
    shadow,
    space,
    typography
);

export const Text = styled('div')({}, textProps);
export const H1 = styled('h1')({}, textProps);
export const H2 = styled('h2')({}, textProps);
export const H3 = styled('h3')({}, textProps);
export const H4 = styled('h4')({}, textProps);
export const Body = styled('p')({}, textProps);
export const Subheading = styled('p')({}, textProps);
export const SubheadingSmall = styled('p')({}, textProps);
export const Caption = styled('p')({}, textProps);
export const FinePrint = styled('p')({}, textProps);
export const Span = styled('span')({}, textProps);
export const TextFlex = styled('div')({}, textProps);


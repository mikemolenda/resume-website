import styled from 'styled-components';
import {
    border,
    color,
    compose,
    flexbox,
    layout,
    shadow,
    space,
    typography,
    position
} from 'styled-system';

const boxProps = compose(
    border,
    color,
    flexbox,
    layout,
    shadow,
    space,
    typography,
    position
)

export const Box = styled('div')({}, boxProps);
export const Flex = styled('div')({ display: 'flex' }, boxProps);
export const Header = styled('header')({}, boxProps);
export const Main = styled('main')({}, boxProps);
export const Footer = styled('footer')({}, boxProps);
export const Section = styled('section')({}, boxProps);
export const Article = styled('article')({}, boxProps);
export const Aside = styled('aside')({}, boxProps);
export const UL = styled('ul')({}, boxProps);
export const OL = styled('ol')({}, boxProps);
export const Nav = styled('nav')({}, boxProps);


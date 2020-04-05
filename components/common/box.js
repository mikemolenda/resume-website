import styled from 'styled-components';
import {
    background,
    border,
    color,
    compose,
    flexbox,
    grid,
    layout,
    shadow,
    space,
    typography,
    position
} from 'styled-system';

const boxProps = compose(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    shadow,
    space,
    typography,
    position
);

export const Box = styled.div(boxProps);
Box.displayName = 'Box';

export const Flex = styled(Box)`
    display: flex;
`;
Flex.displayName = 'Flex';

export const Grid = styled(Box)`
    display: grid;
`;
Grid.displayName = 'Grid';

export const Header = Box.withComponent('header');
Header.displayName = 'Header';

export const Main = Box.withComponent('main');
Main.displayName = 'Main';

export const Footer = Box.withComponent('footer');
Footer.displayName = 'Footer';

export const Section = Box.withComponent('section');
Section.displayName = 'Section';

export const Article = Box.withComponent('article');
Article.displayName = 'Article';

export const Aside = Box.withComponent('aside');
Aside.displayName = 'Aside';

export const UL = styled(Box.withComponent('ul'))`
    list-style: none;
    padding: 0;
`;
UL.displayName = 'UL';

export const OL = Box.withComponent('ol');
OL.displayName = 'OL';

export const Nav = Box.withComponent('nav');
Nav.displayName = 'Nav';

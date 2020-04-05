import { Box } from './box';
import { H2 } from './text';
import theme from './theme';

export const SectionTitle = props => (
    <Box mx="auto" mb={40}>
        <H2 fontFamily={theme.fonts.sectionTitle} textAlign="center">{props.text}</H2>
    </Box>
);

SectionTitle.displayName = 'SectionTitle';

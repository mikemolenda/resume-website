import { Box, H2 } from '../common';
import theme from '../common/theme';

export const SectionTitle = props => (
    <Box mx="auto" mb={80}>
        <H2
            fontFamily={theme.fonts.sectionTitle}
            textAlign="center"
            m={0}
        >
            {props.text}
        </H2>
    </Box>
);

SectionTitle.displayName = 'SectionTitle';

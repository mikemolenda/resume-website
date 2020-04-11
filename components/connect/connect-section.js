import { Box, Section } from '../common';
import { SectionTitle } from '../layout';
import theme from '../common/theme';

export const ConnectSection = () => (
    <Section bg={theme.colors.slateBlue} color={theme.colors.white}>
        <Box width={theme.contentWidth} mx="auto">
            <SectionTitle color={theme.colors.white} text="// Connect" />
        </Box>
    </Section>
);

ConnectSection.displayName = 'ConnectSection';

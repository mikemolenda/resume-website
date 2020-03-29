import { Box, Section, SectionTitle } from '../common';
import theme from '../common/theme';

export const ConnectSection = () => (
    <Section bg="magenta" pt={10} pb={40}>
        <Box bg="lime" width={theme.contentWidth} mx="auto">
            <SectionTitle text="// Connect" />
            connect
        </Box>
    </Section>
);

ConnectSection.displayName = 'ConnectSection';

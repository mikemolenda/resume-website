import { Box, Section } from '../common';
import { SectionTitle } from '../layout';
import theme from '../common/theme';

export const ConnectSection = () => (
    <Section>
        <Box
            width={theme.contentWidth}
            mx="auto"
        >
            <SectionTitle text="// Connect" />
        </Box>
    </Section>
);

ConnectSection.displayName = 'ConnectSection';

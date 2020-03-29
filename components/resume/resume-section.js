import { Box, Button, Section, SectionTitle } from '../common';
import theme from '../common/theme.js';

export const ResumeSection = () => (
    <Section bg="lime" pt={10} pb={40}>
        <Box bg="magenta" width={theme.contentWidth} mx="auto">
            <SectionTitle text="// Resume" />
            <Button appearance="primary" fullWidth onClick={() => {}}>
                Download My Resume
            </Button>
        </Box>
    </Section>
);

ResumeSection.displayName = 'ResumeSection';

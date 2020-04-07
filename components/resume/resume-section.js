import { Box, Button } from '../common';
import { SectionLayout } from '../layout';

export const ResumeSection = () => (
    <SectionLayout title="// Resume">
        <Button appearance="primary" fullWidth onClick={() => {}}>
            Download My Resume
        </Button>
    </SectionLayout>
);

ResumeSection.displayName = 'ResumeSection';

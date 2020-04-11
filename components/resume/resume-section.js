import { Box, Button } from '../common';
import { SectionLayout } from '../layout';
import theme from '../common/theme';

export const ResumeSection = () => (
    <SectionLayout title="// Resume">
        <Button appearance="primary" fullWidth onClick={() => {}}>
            Click Here to Download My Resume
        </Button>
    </SectionLayout>
);

ResumeSection.displayName = 'ResumeSection';

import { ThemeProvider } from 'styled-components';
import theme from '../components/common/theme';
import { AboutSection } from '../components/about';
import { ExperienceSection } from '../components/experience';
import { SkillsSection } from '../components/skills';
import { ResumeSection } from '../components/resume';
import { ConnectSection } from '../components/connect';

const contentWidth = { _: 1, md: '600px', lg: '800px', xl: '1000px' };

const Index = () => (
    <ThemeProvider theme={theme}>
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ResumeSection />
        <ConnectSection />
    </ThemeProvider>
);

export default Index;

import { ThemeProvider } from 'styled-components';
import theme from '../components/common/theme';
import { AboutSection } from '../components/about';
import { ExperienceSection } from '../components/experience';
import { SkillsSection } from '../components/skills';
import { ResumeSection } from '../components/resume';
import { ConnectSection } from '../components/connect';
import { experienceService } from '../services';
import fetch from 'isomorphic-unfetch';

const contentWidth = { _: 1, md: '600px', lg: '800px', xl: '1000px' };

const Index = props => (
    <ThemeProvider theme={theme}>
        <AboutSection />
        <ExperienceSection experience={props.experience} />
        <SkillsSection />
        <ResumeSection />
        <ConnectSection />
    </ThemeProvider>
);

Index.getInitialProps = async () => {
    const experience = await experienceService.get();
    console.log(experience);
    return { experience };
};

export default Index;

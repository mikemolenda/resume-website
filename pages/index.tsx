import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import theme from '../components/common/theme';
import { AboutSection } from '../components/about';
import { ExperienceSection } from '../components/experience';
import { SkillsSection } from '../components/skills';
import { ResumeSection } from '../components/resume';
import { ConnectSection } from '../components/connect';
import { experienceService, skillService } from '../services';

const contentWidth = { _: 1, md: '600px', lg: '800px', xl: '1000px' };

// TODO types for Experience and Skills
interface IndexProps {
    experience: Array<Object>;
    skills: Array<Object>;
}

const Index: NextPage<IndexProps> = (props) => (
    <ThemeProvider theme={theme}>
        <AboutSection />
        <ExperienceSection experience={props.experience} />
        <SkillsSection skills={props.skills} />
        <ResumeSection />
        <ConnectSection />
    </ThemeProvider>
);

Index.getInitialProps = async () => {
    const experience = await experienceService.get();
    const skills = await skillService.get();
    return { experience, skills };
};

export default Index;

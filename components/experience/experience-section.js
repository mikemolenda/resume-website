import { loremIpsum } from 'lorem-ipsum';
import { Box, Flex, Section, SectionTitle } from '../common';
import theme from '../common/theme';
import { ExperienceCard } from './experience-card';

export const ExperienceSection = props => (
    <Section pt={10} pb={40}>
        <Box width={theme.contentWidth} mx="auto">
            <SectionTitle text="// Where I've Worked" />
            <Flex flexWrap="wrap" justifyContent="center">
                {props.experience.map((exp, i) => (
                    <ExperienceCard key={i} {...exp} />
                ))}
            </Flex>
        </Box>
    </Section>
);

ExperienceSection.displayName = 'ExperienceSection';

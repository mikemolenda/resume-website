import { loremIpsum } from 'lorem-ipsum';
import { Box, Flex, Section, SectionTitle } from '../common';
import theme from '../common/theme';
import { ExperienceCard } from './experience-card';

export const ExperienceSection = () => (
    <Section bg="lime" pt={10} pb={40}>
        <Box bg="magenta" width={theme.contentWidth} mx="auto">
            <SectionTitle text="// Where I've Worked" />
            <Flex flexWrap="wrap" justifyContent="center">
                <ExperienceCard
                    icon="/images/exp-icon-nw-flat.svg"
                    details={loremIpsum({ count: 1, units: 'paragraphs' })}
                />
                <ExperienceCard
                    icon="/images/exp-icon-cna-flat.svg"
                    details={loremIpsum({ count: 1, units: 'paragraphs' })}
                />
                <ExperienceCard
                    icon="/images/exp-icon-rm-flat.svg"
                    details={loremIpsum({ count: 1, units: 'paragraphs' })}
                />
            </Flex>
        </Box>
    </Section>
);

ExperienceSection.displayName = 'ExperienceSection';

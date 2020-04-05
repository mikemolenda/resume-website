import { Box, Flex, Section, SectionTitle } from '../common';
import theme from '../common/theme';
import { SkillsCard } from './skills-card';

export const SkillsSection = props => (
    <Section bg="yellow" pt={10} pb={40}>
        <Box width={theme.contentWidth} mx="auto">
            <SectionTitle text="// Skills" />
            <Flex
                flexWrap="wrap"
                justifyContent="left"
                pl={{ sm: 70, md: 67, lg: 58, xl: 90 }}
            >
                {props.skills.map((skill, i) => (
                    <SkillsCard key={i} {...skill} />
                ))}
            </Flex>
        </Box>
    </Section>
);

SkillsSection.displayName = 'SkillsSection';

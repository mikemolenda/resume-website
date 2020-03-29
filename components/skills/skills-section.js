import { Box, Flex, Section, SectionTitle } from '../common';
import theme from '../common/theme';
import { SkillsCard } from './skills-card';

export const SkillsSection = () => (
    <Section bg="magenta" pt={10} pb={40}>
        <Box bg="lime" width={theme.contentWidth} mx="auto">
            <SectionTitle text="// Skills" />
            <Flex
                flexWrap="wrap"
                justifyContent="left"
                pl={{ sm: 70, md: 67, lg: 58, xl: 90 }}
            >
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
            </Flex>
        </Box>
    </Section>
);

SkillsSection.displayName = 'SkillsSection';

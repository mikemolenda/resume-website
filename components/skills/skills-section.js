import { Flex } from '../common';
import { SectionLayout } from '../layout';
import { SkillsCard } from './skills-card';

export const SkillsSection = props => (
    <SectionLayout title="// Skills">
        <Flex
            flexWrap="wrap"
            justifyContent="left"
            pl={{ sm: 70, md: 67, lg: 58, xl: 90 }}
        >
            {props.skills.map((skill, i) => (
                <SkillsCard key={i} {...skill} />
            ))}
        </Flex>
    </SectionLayout>
);

SkillsSection.displayName = 'SkillsSection';

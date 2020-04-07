import { Flex } from '../common';
import { SectionLayout } from '../layout';
import { ExperienceCard } from './experience-card';

export const ExperienceSection = props => (
    <SectionLayout title="// Where I've Worked">
        <Flex flexWrap="wrap" justifyContent="center">
            {props.experience.map((exp, i) => (
                <ExperienceCard key={i} {...exp} />
            ))}
        </Flex>
    </SectionLayout>
);

ExperienceSection.displayName = 'ExperienceSection';

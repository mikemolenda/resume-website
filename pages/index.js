import { ThemeProvider } from 'styled-components';
import theme from '../components/common/theme';
import {
    Box,
    Button,
    Flex,
    H1,
    H2,
    Image,
    ImageBox,
    Section,
    Text
} from '../components/common';
import { ExperienceCard } from '../components/experience-card';
import { SkillsCard } from '../components/skills-card.js';
import { SectionTitle } from '../components/section-title.js';
import { loremIpsum } from 'lorem-ipsum';

const contentWidth = { _: 1, md: '600px', lg: '800px', xl: '1000px' };

const Index = () => (
    <ThemeProvider theme={theme}>
        <Section bg="magenta" py={80}>
            <Flex
                bg="lime"
                flexDirection={{ _: 'column', md: 'row' }}
                width={contentWidth}
                mx="auto"
            >
                <Box
                    bg="blue"
                    height={256}
                    minWidth={256}
                    borderRadius="50%"
                    mx={{ _: 'auto', md: 0 }}
                >
                    Image
                </Box>
                <Box bg="yellow">
                    <H1>Mike Molenda</H1>
                    <H2>// About Me</H2>
                    <Text>{loremIpsum({ count: 1, units: 'paragraphs' })}</Text>
                </Box>
            </Flex>
        </Section>
        <Section bg="lime" pt={10} pb={40}>
            <Box bg="magenta" width={contentWidth} mx="auto">
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
        <Section bg="magenta" pt={10} pb={40}>
            <Box bg="lime" width={contentWidth} mx="auto">
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
        <Section bg="lime" pt={10} pb={40}>
            <Box bg="magenta" width={contentWidth} mx="auto">
                <SectionTitle text="// Resume" />
                <Button appearance="primary" fullWidth onClick={() => {}}>
                    Download My Resume
                </Button>
            </Box>
        </Section>
        <Section bg="magenta" pt={10} pb={40}>
            <Box bg="lime" width={contentWidth} mx="auto">
                <SectionTitle text="// Connect" />
                connect
            </Box>
        </Section>
    </ThemeProvider>
);

export default Index;

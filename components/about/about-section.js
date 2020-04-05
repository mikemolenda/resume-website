import {
    Box,
    Flex,
    H1,
    H2,
    ImageBox,
    ParallaxBG,
    Section,
    Text
} from '../common';
import theme from '../common/theme';
import { loremIpsum } from 'lorem-ipsum';

export const AboutSection = () => (
    <Section bg="black">
        <ParallaxBG
            backgroundImage="url('https://source.unsplash.com/1600x900/?aerial')"
            backgroundSize="cover"
            pt={100}
            pb={120}
        >
            <Flex
                flexDirection={{ _: 'column', md: 'row' }}
                width={theme.contentWidth}
                mx="auto"
            >
                <ImageBox
                    src="https://source.unsplash.com/256x256/?cat"
                    height={256}
                    minWidth={256}
                    borderRadius="50%"
                    mx={{ _: 'auto', md: 0 }}
                    boxShadow={theme.shadows.md.light}
                />
                <Box color="white" pl={40} textShadow={theme.shadows.lg.dark}>
                    <H1>Mike Molenda</H1>
                    <H2 fontFamily={theme.fonts.sectionTitle}>// About Me</H2>
                    <Text>{loremIpsum({ count: 1, units: 'paragraphs' })}</Text>
                </Box>
            </Flex>
        </ParallaxBG>
    </Section>
);

AboutSection.displayName = 'AboutSection';

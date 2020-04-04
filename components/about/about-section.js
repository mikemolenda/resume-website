import { Box, H1, H2, ImageBox, Text, Flex, Section } from '../common';
import theme from '../common/theme';
import { loremIpsum } from 'lorem-ipsum';

export const AboutSection = () => (
    <Section backgroundImage="url('https://source.unsplash.com/1600x900/?aerial')" py={80}>
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
            >
            </ImageBox>
            <Box color="white" px={20}>
                <H1>Mike Molenda</H1>
                <H2>// About Me</H2>
                <Text>{loremIpsum({ count: 1, units: 'paragraphs' })}</Text>
            </Box>
        </Flex>
    </Section>
);

AboutSection.displayName = 'AboutSection';

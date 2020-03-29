import { Box, H1, H2, Text, Flex, Section } from '../common';
import theme from '../common/theme';
import { loremIpsum } from 'lorem-ipsum';

export const AboutSection = () => (
    <Section bg="magenta" py={80}>
        <Flex
            bg="lime"
            flexDirection={{ _: 'column', md: 'row' }}
            width={theme.contentWidth}
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
);

AboutSection.displayName = 'AboutSection';

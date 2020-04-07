import { useState } from 'react';
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

export const AboutSection = () => {
    const [profilePic, setProfilePic] = useState('https://source.unsplash.com/256x256/?cat');

    return (
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
                        src={profilePic}
                        height={256}
                        minWidth={256}
                        borderRadius="50%"
                        mx={{ _: 'auto', md: 0 }}
                        boxShadow={theme.shadows.md.light}
                        onClick={() =>
                            setProfilePic(
                                'https://source.unsplash.com/256x256/?bird'
                            )
                        }
                    />
                    <Box
                        pl={40}
                        textShadow={theme.shadows.lg.dark}
                    >
                        <H1 color="white">Mike Molenda</H1>
                        <H2 color="white" fontFamily={theme.fonts.sectionTitle}>
                            // About Me
                        </H2>
                        <Text color="white">
                            {loremIpsum({ count: 1, units: 'paragraphs' })}
                        </Text>
                    </Box>
                </Flex>
            </ParallaxBG>
        </Section>
    );
};

AboutSection.displayName = 'AboutSection';

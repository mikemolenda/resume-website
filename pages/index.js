import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import { Box, Flex, H1, H2, Section } from '../components/common'

const contentWidth = {_: 1, md: '600px', lg: '800px', xl: '1000px'}

const SectionTitle = props => (
    <Box bg="red" mx="auto">
        <H2 textAlign="center">{props.text}</H2>
    </Box>
)

const ExperienceCard = props => (
    <Box bg="yellow" width={{_: 1, md: 1 / 2, lg: 1 / 3}} mb={40}>
        <Box bg="blue" width={160} height={160} borderRadius={'25%'} mx="auto">
            Image
        </Box>
        <Box bg="orange" mt={20}>
            Details
        </Box>
    </Box>
)

// TODO how to space evenly but also specify number in row? Do I have to use more than one flex?
// flex-basis @ n%?
const SkillsCard = props => (
    <Box bg="yellow"
         width={{_: 1 / 2, sm: 1 / 3, md: 1 / 4, lg: 1 / 5}}
         mb={20}
    >
        <Box mx="auto">
            <Box bg="blue">
                Icon
            </Box>
            <Box bg="orange">
                Details (hidden)
            </Box>
        </Box>
    </Box>
)

const Index = () => (
    <ThemeProvider theme={theme}>
        <Section bg="orange" py={80}>
            <Flex bg="cyan" flexDirection={{_: "column", md: "row"}} width={contentWidth} mx="auto">
                <Box bg="blue" width={256} height={256} borderRadius="50%" mx={{_: "auto", md: 0}}>
                    Image
                </Box>
                <Box bg="yellow">
                    <H1>Mike Molenda</H1>
                    <H2>// About Me</H2>
                    Detail
                </Box>
            </Flex>
        </Section>
        <Section bg="lime" minHeight={200} pt={10} pb={40}>
            <Box bg="magenta" width={contentWidth} mx="auto">
                <SectionTitle text="// Where I've Worked" />
                <Flex flexWrap="wrap" justifyContent="center">
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                </Flex>
            </Box>
        </Section>
        <Section bg="magenta" minHeight={200} pt={10} pb={40}>
            <Box bg="lime" width={contentWidth} mx="auto">
                <SectionTitle text="// Skills" />
                <Flex flexWrap="wrap" justifyContent="center">
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
        <Section bg="cyan" minHeight={200}>
            resume
        </Section>
        <Section bg="yellow" minHeight={200}>
            connect
        </Section>
    </ThemeProvider>
)

export default Index

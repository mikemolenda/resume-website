import { Box, Flex, Section } from '../common';
import { SectionTitle } from './section-title';
import theme from '../common/theme';

export const SectionLayout = (props) => (
    <Section>
        <Box
            width={theme.contentWidth}
            mx="auto"
            pt={80}
            pb={40}
            borderBottom={`2px solid ${theme.colors.lightGray}`}
        >
            <SectionTitle text={props.title} />
            {props.children}
        </Box>
    </Section>
);

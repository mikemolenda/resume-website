import { Box, H2 } from '../components/common';

export const SectionTitle = props => (
    <Box bg="red" mx="auto">
        <H2 textAlign="center">{props.text}</H2>
    </Box>
);

SectionTitle.displayName = 'SectionTitle';

import { Box } from '../common';

export const SkillsCard = props => (
    <Box
        bg="yellow"
        width={{ _: 1 / 2, sm: 66, md: 66, lg: 90, xl: 90 }}
        mb={20}
        mr={{ sm: 70, md: 67, lg: 58, xl: 90 }}
    >
        <Box width={{ _: 1 / 2, xs: 1 / 2, sm: 1 }} mx="auto">
            <Box bg="blue">Icon</Box>
            <Box bg="orange">Details (hidden)</Box>
        </Box>
    </Box>
);

SkillsCard.displayName = 'SkillsCard';

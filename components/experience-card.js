import { Box, ImageBox, Text } from '../components/common';

export const ExperienceCard = props => (
    <Box bg="yellow" width={{ _: 1, md: 1 / 2, lg: 1 / 3 }} mb={40}>
        <ImageBox
            src={props.icon}
            fallback={props.fallback}
            alt={props.alt}
            width={200}
            height={200}
            borderRadius={'25%'}
            mx="auto"
        />
        <Box bg="orange" mt={20} px={40}>
            <Text>{props.details}</Text>
        </Box>
    </Box>
);

ExperienceCard.displayName = 'ExperienceCard';

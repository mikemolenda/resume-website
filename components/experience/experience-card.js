import { Box, ImageBox, H2, H3, LI, Text, UL } from '../common';

export const ExperienceCard = props => {
    const {
        company,
        details,
        endDate,
        fallback,
        location,
        logo,
        title,
        startDate
    } = props;

    return (
        <Box width={{ _: 1, md: 1 / 2, lg: 1 / 3 }} mb={40}>
            <ImageBox
                src={logo}
                fallback={fallback}
                alt={company}
                width={200}
                height={200}
                borderRadius={'25%'}
                mx="auto"
            />
            <Box mt={20} px={40}>
                <H2>{company}</H2>
                <H3>{title}</H3>
                <UL>
                    {details.map((detail, i) => (
                        <LI key={i}>{detail}</LI>
                    ))}
                </UL>
            </Box>
        </Box>
    );
};

ExperienceCard.displayName = 'ExperienceCard';

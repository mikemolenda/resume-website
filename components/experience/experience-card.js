import { Box, ImageBox, H3, H4, LI, Text, UL } from '../common';

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
                <H3 textAlign="center" mt={0} mb="10px">
                    {company}
                </H3>
                <H4 textAlign="center" mt={0} mb="10px" fw="light">
                    {title}
                </H4>
                <UL mb={0}>
                    {details.map((detail, i) => (
                        <LI key={i} mb="20px">{detail}</LI>
                    ))}
                </UL>
            </Box>
        </Box>
    );
};

ExperienceCard.displayName = 'ExperienceCard';

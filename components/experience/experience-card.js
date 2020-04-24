import { Box, ImageBox, H3, H4, LI, SubheadingSmall, UL } from '../common';
import theme from '../common/theme';

export const ExperienceCard = (props) => {
    const { company, details, endDate, location, logo, title, startDate } = props;

    return (
        <Box width={{ _: 1, md: 1 / 2, lg: 1 / 3 }} mb={40}>
            <ImageBox
                src={logo?.src}
                fallback={`images/${logo?.filename}`}
                alt={logo.alt || ''}
                width={200}
                height={200}
                borderRadius={'25%'}
                mx="auto"
            />
            <Box mt={40} px={40}>
                <H3 textAlign="center" mt={0} mb="10px">
                    {company}
                </H3>
                <H4 textAlign="center" mt={0} mb="10px" fw={theme.fontWeights.light}>
                    {title}
                </H4>
                <SubheadingSmall
                    textAlign="center"
                    mt={0}
                    mb="30px"
                    fw={theme.fontWeights.ultraLight}
                    color={theme.colors.medGray}
                >
                    {startDate.years} - {endDate?.years || 'Present'}
                </SubheadingSmall>
                <UL mb={0}>
                    {details.map((detail, i) => (
                        <LI key={i} mb="20px" hyphens="auto">
                            {detail.text}
                        </LI>
                    ))}
                </UL>
            </Box>
        </Box>
    );
};

ExperienceCard.displayName = 'ExperienceCard';

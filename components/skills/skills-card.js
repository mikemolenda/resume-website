import { useState } from 'react';
import { Box, Caption, ImageBox } from '../common';
import theme from '../common/theme';

export const SkillsCard = (props) => {
    const normalSize = 75;
    const hoverSize = 90;

    const [size, setSize] = useState(normalSize);
    const [showName, setShowName] = useState(false);

    const { name, logo } = props;

    const setHover = () => {
        setSize(hoverSize);
        setShowName(true);
    };

    const setNormal = () => {
        setSize(normalSize);
        setShowName(false);
    };

    return (
        <Box
            width={90}
            mb={20}
            ml={{ xs: 'auto', sm: 0 }}
            mr={{ xs: 'auto', sm: 32, md: 42, lg: 58, xl: 60 }}
        >
            <Box
                width={1}
                mx="auto"
                onMouseOver={() => setHover()}
                onMouseOut={() => setNormal()}
            >
                <ImageBox
                    src={logo}
                    alt={name}
                    width={size}
                    height={90}
                    backgroundPosition="center"
                    mx="auto"
                />
                <Caption
                    textAlign="center"
                    color={
                        showName ? theme.colors.black : theme.colors.transparent
                    }
                >
                    {name}
                </Caption>
            </Box>
        </Box>
    );
};

SkillsCard.displayName = 'SkillsCard';

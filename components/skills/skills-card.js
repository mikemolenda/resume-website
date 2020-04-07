import { useState } from 'react';
import { Box, Caption, ImageBox } from '../common';
import theme from '../common/theme';

export const SkillsCard = props => {
    const normalSize = 70;
    const hoverSize = 90;

    const [size, setSize] = useState(normalSize);
    const [showName, setShowName] = useState(false);

    const { name, logo } = props;

    const setHover = () => {
        setSize(hoverSize);
        setShowName(true);
    }

    const setNormal = () => {
        setSize(normalSize);
        setShowName(false);
    }

    return (
        <Box
            width={{ _: 1 / 2, sm: 66, md: 66, lg: 90, xl: 90 }}
            mb={20}
            mr={{ sm: 70, md: 67, lg: 58, xl: 90 }}
        >
            <Box
                width={{ _: 1 / 2, xs: 1 / 2, sm: 1 }}
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
                    color={showName ? theme.colors.black : theme.colors.transparent}
                >
                    {name}
                </Caption>
            </Box>
        </Box>
    );
};

SkillsCard.displayName = 'SkillsCard';

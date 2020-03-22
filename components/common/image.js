import styled, { css } from 'styled-components';
import { useState } from 'react';
import { Box } from './box';

const ImageBoxWrapper = styled(Box)`
    ${props => css`
        background-image: url(${props.src});
        background-size: 100%;
    `}
`;

export const Image = ({ src, fallback, ...otherProps }) => {
    const [srcUrl, setSrcUrl] = useState(src);

    return (
        <img
            src={srcUrl}
            onError={() => fallback && setSrcUrl(fallback)}
            {...otherProps}
        />
    );
};

export const ImageBox = ({ src, fallback, ...otherProps }) => {
    const [srcUrl, setSrcUrl] = useState(src);

    return (
        <ImageBoxWrapper
            src={srcUrl}
            onError={() => fallback && setSrcUrl(fallback)}
            {...otherProps}
        />
    );
};

ImageBox.displayName = 'ImageBox';

import styled, { css } from 'styled-components';
import { useState } from 'react';
import { Box } from './box';

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
        <Box
            backgroundImage={`url('${srcUrl}')`}
            backgroundSize="100%"
            onError={() => fallback && setSrcUrl(fallback)}
            {...otherProps}
        />
    );
};

ImageBox.displayName = 'ImageBox';

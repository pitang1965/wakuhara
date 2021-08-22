import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-bottom: 2rem;

  &:after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const VideoContainer = ({ url }) => {
  return (
    <Wrapper
      dangerouslySetInnerHTML={{
        __html: `
          <iframe
            src=${url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        `,
      }}
    />
  );
};

export default VideoContainer;

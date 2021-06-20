import React from 'react';
import * as styles from './VideoContainer.module.css';

const VideoContainer = ({ url }) => {
  return (
    <div className = {styles.container}
      dangerouslySetInnerHTML={{
        __html: `
          <iframe
            src=${url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        `
      }}
    />
  );
};

export default VideoContainer;

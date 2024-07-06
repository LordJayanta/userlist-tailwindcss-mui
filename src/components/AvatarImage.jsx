import React from 'react'

const AvatarImage = ({ src, alt='avtar', fallbackSrc='./svg/user-sharing-stroke-rounded.svg', sx={} }) => {
    const handleError = (e) => {
        e.target.src = fallbackSrc;
        e.target.style.padding = '5px';
        e.target.style.background = '#1E1E1E';
      };
    
      return (
        <img src={src} alt={alt} onError={handleError} style={sx}/>
      );
}

export default AvatarImage

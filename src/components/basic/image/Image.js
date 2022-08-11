import React from "react";
import PropTypes from "prop-types";

import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ image, className, width, height, objectFill, imgStyle }) => {
  if (!image) {
    return <div className={className}>missing image data</div>;
  }
  if (image.mock) {
    return <img src={image.mock} alt="mocked" className={className} width={width} height={height} />;
  }
  if (image.ext === ".svg") {
    return <img src={image.localFile.url} alt={image.name} className={className} width={width} height={height} />;
  } else {
    return (
      <GatsbyImage
        objectFit={objectFill && "fill"}
        imgStyle={imgStyle}
        image={image.gatsbyImageData}
        alt={image.title}
        className={className}
      />
    );
  }
};

Image.propTypes = {
  className: PropTypes.string,
  imgStyle: PropTypes.object,
};

Image.defaultProps = {
  className: "",
  imgStyle: {},
};

export default Image;
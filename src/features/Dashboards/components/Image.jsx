import React from 'react';

const Image = ({
	width,
	height,
	src,
	description,
	styles,
}) => {
	return (
		<img
			width={width}
			height={height}
			src={src}
			alt={description}
			className={styles}
		/>
	);
};

export default Image;

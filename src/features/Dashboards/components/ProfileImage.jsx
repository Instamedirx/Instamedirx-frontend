import React from 'react';

const ProfileImage = ({ width, height, src, styles }) => {
	return (
		<img
			width={width}
			height={height}
			src={src}
			alt='Profile Image'
      className={styles}
		/>
	);
};

export default ProfileImage;

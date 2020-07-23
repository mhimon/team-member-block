import PropTypes from "prop-types";
import "./style.scss";

import { Button } from "@wordpress/components";

const ImageAvater = ({ imageUrl, onDeleteImage }) => (
	<div className="image-avatar" style={{ backgroundImage: `url(${imageUrl})` }}>
		<Button className="button" onClick={() => onDeleteImage()}>
			Delete
		</Button>
	</div>
);

ImageAvater.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	onDeleteImage: PropTypes.func.isRequired,
};

export default ImageAvater;

import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function DragonItem({ id, name, flickr_images, description, first_flight }) {
	return (
		<Col>
			<NavLink to={`detail/${id}`}>
				<Card>
					<Card.Img variant="top" src={flickr_images} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<div>
							<p><strong>Description:</strong> {description}</p>
							<div>
								<Badge variant="info" size="large">
								<span>First flight: </span>{first_flight ?? "Unknown first flight date"}
								</Badge>
							</div>
						</div>
					</Card.Body>
				</Card>
			</NavLink>
		</Col>
	);
}

DragonItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	flickr_images: PropTypes.array.isRequired,
	description: PropTypes.string.isRequired,
	first_flight: PropTypes.string.isRequired,
};

DragonItem.defaultProps = {
	first_flight: "Unknown",
};

export default DragonItem;
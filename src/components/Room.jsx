import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import defaultImg from "../images/room-1.jpeg";

const Room = ({ name, slug, price, images }) => {
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt={name} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

Room.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Room;

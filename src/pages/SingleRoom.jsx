import { Link, useParams } from 'react-router-dom';

import { useGlobalContext } from 'context/GlobalState';
import StyledHero from 'components/StyledHero';
import defaultBcg from 'images/room-1.jpeg';
import Banner from 'components/Banner';

const SingleRoom = () => {
  const { slug } = useParams();
  const { getRoom } = useGlobalContext();

  const room = getRoom(slug);

  if (!room) {
    return (
      <div className='error'>
        <h3>No such room could be found...</h3>
        <Link to='/rooms' className='btn-primary'>
          Back to rooms
        </Link>
      </div>
    );
  }

  const {
    pets,
    name,
    size,
    price,
    extras,
    images,
    capacity,
    breakfast,
    description,
  } = room;

  const [mainImg, ...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className='single-room'>
        <div className='single-room-images'>
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className='single-room-info'>
          <article className='desc'>
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>Info</h3>
            <h6>Price : ${price}</h6>
            <h6>Size : ${size} SQFT</h6>
            <h6>
              Max capacity :{' '}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'free breakfast included'}</h6>
          </article>
        </div>
      </section>
      <section className='room-extras'>
        <h6>Extras</h6>
        <ul className='extras'>
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;

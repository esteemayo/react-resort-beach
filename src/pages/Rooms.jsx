import { Link } from 'react-router-dom';

import Banner from 'components/Banner';
import RoomContainer from 'components/RoomContainer';

const Rooms = () => {
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='Our rooms'>
          <Link to='/' className='btn-primary'>
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;

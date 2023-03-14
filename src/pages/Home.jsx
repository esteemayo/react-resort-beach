import { Link } from 'react-router-dom';

import Banner from 'components/Banner';
import Services from 'components/Services';
import FeaturedRooms from 'components/FeaturedRooms';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title='Luxurious rooms'
          subTitle='Deluxe rooms starting at $299'
        >
          <Link to='/rooms' className='btn-primary'>
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;

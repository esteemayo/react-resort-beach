import { Link } from 'react-router-dom';

import Banner from 'components/Banner';

const Error = () => {
  return (
    <Hero>
      <Banner title='404' subTitle='Page not found'>
        <Link to='/' className='btn-primary'>
          Return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;

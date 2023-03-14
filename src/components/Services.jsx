import Title from './Title';
import data from 'services/services';

const Services = () => {
  return (
    <section className='services'>
      <Title title='Services' />
      <div className='services-center'>
        {data.map((item, index) => {
          const { icon, info, title } = item;
          return (
            <article key={index} className='service'>
              <span>{icon}</span>
              <h6>{title}</h6>
              <p>{info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

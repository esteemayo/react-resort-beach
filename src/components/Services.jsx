import data from 'services/services';
import Title from './Title';

class Services extends Component {
  state = {
    services: data,
  };

  render() {
    const { services } = this.state;

    return (
      <section className='services'>
        <Title title='Services' />
        <div className='services-center'>
          {services.map((item, index) => {
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
  }
}

export default Services;

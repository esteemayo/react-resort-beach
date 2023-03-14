import { useGlobalContext } from 'context/RoomContext';
import Loading from './Loading';
import Title from './Title';
import Room from './Room';

const FeaturedRooms = () => {
  const { featuredRooms: rooms, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <section className='featured-rooms'>
      <Title title='Featured rooms' />
      <div className='featured-rooms-center'>
        {rooms.map((room) => {
          return <Room key={room.id} {...room} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedRooms;

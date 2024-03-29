import Title from './Title';
import Loading from './Loading';
import Room from './Room';
import { useGlobalContext } from 'context/room/RoomContext';

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

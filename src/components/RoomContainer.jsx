import RoomFilter from './RoomFilter';
import Loading from './Loading';
import { useGlobalContext } from 'context/room/RoomContext';
import RoomList from './RoomList';

const RoomContainer = () => {
  const { rooms, loading, sortedRooms } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default RoomContainer;

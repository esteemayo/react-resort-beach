import { Component, useContext, createContext } from 'react';
import Client from '../../Contentful';

const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  //   getData
  getData = async () => {
    try {
      const res = await Client.getEntries({
        content_type: 'beachResortRoom',
        order: 'sys.createdAt',
      });

      const rooms = this.formatData(res.items);
      const featuredRooms = rooms.filter((room) => room.featured === true);
      const maxPrice = Math.max(...rooms.map((item) => item.price));
      const maxSize = Math.max(...rooms.map((item) => item.size));

      this.setState({
        rooms,
        sortedRooms: rooms,
        featuredRooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData = (items) => {
    const tempItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);
      const room = { ...item.fields, images, id };
      return room;
    });

    return tempItems;
  };

  getRoom = (slug) => {
    const tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = e.target.name;

    this.setState({ [name]: value }, this.filterRooms);
  };

  filterRooms = () => {
    let { pets, rooms, type, price, minSize, maxSize, capacity, breakfast } =
      this.state;
    // All the rooms
    let tempRooms = [...rooms];

    // Transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    // Filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // Filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // Filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // Filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    // Filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    // Filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    // Change state
    this.setState({ sortedRooms: tempRooms });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { RoomProvider };

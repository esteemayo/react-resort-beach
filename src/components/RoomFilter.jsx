import { useGlobalContext } from "../context/GlobalState";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const {
    pets,
    type,
    price,
    minSize,
    maxSize,
    minPrice,
    maxPrice,
    capacity,
    breakfast,
    handleChange,
  } = useGlobalContext();

  //   Get unique types
  let types = getUnique(rooms, "type");

  //   Add all
  types = ["all", ...types];

  //   Map to jsx
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((person, index) => {
    return (
      <option key={index} value={person}>
        {person}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Room type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            className="form-control"
            value={capacity}
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">Room price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">Room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="size"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="size"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
};

export default RoomFilter;

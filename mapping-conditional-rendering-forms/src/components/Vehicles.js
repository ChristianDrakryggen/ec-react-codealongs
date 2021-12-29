import VehicleItem from "./VehicleItem";
import styles from "../styles/vehicles.module.scss"

const Vehicles = () => {
  const cars = [
    {
      id: 1,
      name: "Volvo",
      color: "red",
    },
    {
      id: 2,
      name: "Ford",
      color: "blue",
    },
  ];

  const bikes = [
    {
      id: 1,
      name: "Honda",
      color: "black",
    },
    {
      id: 2,
      name: "Yamaha",
      color: "green",
    },
  ];

  return (
    <div className={styles.vehicles_wrapper}>
      <h2>Vehicles</h2>
      {cars.length > 0 &&
        cars.map((car) => (
          <VehicleItem key={car.id} vehicle={car} type="car" />
        ))}
      {bikes.length > 0 &&
        bikes.map((bike) => (
          <VehicleItem key={bike.id} vehicle={bike} type="bike" />
        ))}
    </div>
  );
};

export default Vehicles;

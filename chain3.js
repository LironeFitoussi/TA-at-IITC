const driveToGasStation = () => new Promise((resolve, reject) => {
    resolve('Drive to gas station');
});
  
const fillTheCar = () => new Promise((resolve, reject) => {
    resolve('Fill the car');
});
  
const driveToRestaurant = () => new Promise((resolve, reject) => {
    resolve('Drive to restaurant');
});
  
  // Using the functions and promise chaining to log the messages in order
  driveToGasStation()
    .then((message) => {
      console.log(message); // Logs: Drive to gas station
      return fillTheCar();
    })
    .then((message) => {
      console.log(message); // Logs: Fill the car
      return driveToRestaurant();
    })
    .then((message) => {
      console.log(message); // Logs: drive to restaurant
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
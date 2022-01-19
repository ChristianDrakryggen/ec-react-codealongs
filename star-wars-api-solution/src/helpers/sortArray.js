const sortArray = (array) => {
  return new Promise((resolve, reject) => {
    try {
      const sorted = array.sort((a, b) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      resolve(sorted);
    } catch (error) {
      reject(`Someting went wrong: ${error}`);
    }
  });
};

export default sortArray;

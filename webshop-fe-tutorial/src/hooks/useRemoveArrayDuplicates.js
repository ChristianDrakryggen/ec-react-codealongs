const useRemoveArrayDuplicates = (array) => {
  return array.filter(
    (value, index, arr) => arr.findIndex((val) => value.id === val.id) === index
  );
};

export default useRemoveArrayDuplicates;

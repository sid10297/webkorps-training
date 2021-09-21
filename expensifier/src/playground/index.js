const data = { one: 1 };
data["two"] = 2;
// console.log(data);

const newData = { ...data, three: 3 };
// console.log(newData);

const nestedData = {
  ...newData,
  someObject: {
    arr: [1, 2, 3],
    someOtherObject: {
      anotherData: 4,
    },
  },
};

console.log(nestedData);

const copy = { ...nestedData };

console.log(copy);

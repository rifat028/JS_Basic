let products = [
  {
    name: "I Phone 13 Pro",
    price: 899,
    brand: "iphone",
    rating: { average: "4.2", user_count: 200 },
    discount: "20%",
  },
  {
    name: "I Phone 7",
    price: 399,
    brand: "iphone",
    rating: { average: "3.9", user_count: 600 },
    discount: "0%",
  },
  {
    name: "I Phone sr",
    price: 599,
    brand: "iphone",
    rating: { average: "4.24", user_count: 450 },
    discount: "20%",
  },
  {
    name: "I Phone 12",
    price: 599,
    brand: "iphone",
    rating: { average: "4.3", user_count: 167 },
    discount: "14%",
  },
  {
    name: "Samsung Note 10",
    price: 699,
    brand: "samsung",
    rating: { average: "3.2", user_count: 154 },
    discount: "0%",
  },
  {
    name: "Samsung Note 11",
    price: 799,
    brand: "samsung",
    rating: { average: "4.7", user_count: 312 },
    discount: "5%",
  },
  {
    name: "A52s",
    price: 499,
    brand: "samsung",
    rating: { average: "4.6", user_count: 180 },
    discount: "6%",
  },
  {
    name: "A52s 5G",
    price: 599,
    brand: "samsung",
    rating: { average: "4.4", user_count: 61 },
    discount: "0%",
  },
  {
    name: "I Phone 14",
    price: 800,
    brand: "iphone",
    rating: { average: "4.8", user_count: 20 },
    discount: "0%",
  },
  {
    name: "I Phone 14 pro max",
    price: 1200,
    brand: "iphone",
    rating: { average: "5", user_count: 1 },
    discount: "50%",
  },
  {
    name: "Xiaomi Poco M5",
    price: 267,
    brand: "xiaomi",
    rating: { average: "2.3", user_count: 5 },
    discount: "10%",
  },
  {
    name: "Xiaomi A1",
    price: 199,
    brand: "xiaomi",
    rating: { average: "2.1", user_count: 9 },
    discount: "23%",
  },
  {
    name: "Vivo Y75s",
    price: 256,
    brand: "vivo",
    rating: { average: "4.1", user_count: 43 },
    discount: "16%",
  },
  {
    name: "Vivo iQOO 9T",
    price: 476,
    brand: "vivo",
    rating: { average: "4.5", user_count: 134 },
    discount: "20%",
  },
];

const p1 = () => {
  let numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
  let result = [];
  console.log();
  for (num of numbers) {
    num % 2 == 1 && num < 100 && result.push(num);
  }
  console.log("Solution of problem 1: ", result.join(", "));
};

const p2 = () => {
  let numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
  const result = numbers.sort((a, b) => a - b);
  console.log("Solution of problem 2: ", result.join(", "));
};

const p3 = () => {
  let numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
  let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log("Solution of problem 3: ", sum);
};

const p4 = () => {
  let numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
  let uniqueNumbers = [...new Set(numbers)];
  console.log("Solution of problem 4: ", uniqueNumbers.join(","));
};

const p5 = () => {
  let number = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0];
  console.log(
    "Solution of problem 5: ",
    number.filter((num) => Number(num) < 0).join(","),
  );
};

const p6 = () => {
  let number = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0];
  console.log(
    "Solution of problem 6: ",
    number.filter((num) => Number(num) % 10 == 0).join(","),
  );
};

const p7 = () => {
  let string = "How are you";
  let count = 0;
  for (char of string)
    if (
      char.toUpperCase() == "A" ||
      char.toUpperCase() == "E" ||
      char.toUpperCase() == "I" ||
      char.toUpperCase() == "O" ||
      char.toUpperCase() == "U"
    )
      count++;
  console.log("Solution of problem 7: ", count);
};

const p8 = () => {
  const result = products.sort((a, b) => a.price - b.price);
  console.log("Solution of problem 8: ", result);
};

const p9 = () => {
  let newProducts = [...products];
  for (product of newProducts) {
    product.discountedPrice =
      product.price -
      (product.price * Number(product.discount.slice(0, -1))) / 100;
  }
  console.log("Solution of problem 9: ", newProducts);
};

const p10 = () => {
  let newProducts = [...products];
  for (product of newProducts) {
    product.discountedPrice =
      product.price -
      (product.price * Number(product.discount.slice(0, -1))) / 100;
  }
  const result = newProducts.sort(
    (a, b) => b.discountedPrice - a.discountedPrice,
  );
  console.log("Solution of problem 10: ", result);
};

const p11 = () => {
  const result = products.sort((a, b) => b.rating.average - a.rating.average);
  console.log("Solution of problem 11: ", result);
};

const p12 = () => {
  const result = products.filter(
    (product) => product.brand == "iphone" && product.price < 500,
  );
  console.log("Solution of problem 12: ", result);
};

const p13 = () => {
  const result = products.filter(
    (product) =>
      (product.brand == "iphone" || product.brand == "samsung") &&
      product.price > 400,
  );
  console.log("Solution of problem 13: ", result);
};

// function calling
// p1();
// p2();
// p3();
// p4();
// p5();
// p6();
// p7();
// p8();
// p9();
// p10();
// p11();
// p12();
p13();

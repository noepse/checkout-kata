## checkout kata 🛒

A function that receives an array of item objects and calculates the subtotal, taking into account any eligible discounts.

### Getting started

1. Open this folder in your code editor

2. Ensure you have the required dependencies

```
npm install
```

### How to use the function

1. If you are working in a separate file, ensure the function is imported at the top of your file by adding the code below. Replace path-to-file with the relative path to your checkout.js file.

```
const checkout = require("path-to-file/checkout.js");
```

2. Call the function, ensuring your input is an array of objects with the below properties.

```
const input = [
      {
        code: "A",
        quantity: 4,
      },
      {
        code: "B",
        quantity: 7,
      },
      {
        code: "C",
        quantity: 2,
      },
      {
        code: "D",
        quantity: 1,
      },
]

const output = checkout(input);
console.log(output);
```

3. After running your file, read the output in your terminal - in the above case, the response will be 467.

### Running tests

While in the project folder, run the following command in terminal to run the unit tests. 

```
npm run test
```

### Minimum requirements

1. Node.js - version ^8.0 
2. Jest - version ^29.7.0


### Contact

Feel free to reach out via any of the routes below.

- [GitHub](https://github.com/noepse)
- [LinkedIn](https://www.linkedin.com/in/simran-amin/)
- Email: simranamin@hotmail.com
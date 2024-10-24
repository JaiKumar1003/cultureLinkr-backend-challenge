const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// In-memory product array (to simulate a database)
let products = [];

// Endpoint to add a new product
app.post('/products/create', (req, res) => {
  const { name, price, quality } = req.body;

  // Validate input
  if (typeof name !== 'string' || typeof price !== 'number' || typeof quality !== 'number') {
    return res.status(400).json({ error: 'Invalid product data' });
  }

  // Create the new product object
  const newProduct = { name, price, quality };

  // Add the product to the array
  products.push(newProduct);

  // Return a success message with the newly added product
  res.status(201).json({ message: 'Product created successfully', product: newProduct });
});

// Endpoint to get the total value of all products
app.post('/products/total-value', (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);

  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).json({ error: 'Product list is empty or invalid' });
  }

  // Calculate the total value
  const totalValue = products.reduce((total, product) => {
    const { price, quality } = product;

    if (typeof price !== 'number' || typeof quality !== 'number') {
      return res.status(400).json({ error: 'Invalid product data' });
    }

    return total + (price * quality);
  }, 0);

  // Return the total value
  res.json({ totalValue });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

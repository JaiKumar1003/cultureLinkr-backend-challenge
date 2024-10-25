const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

let products = []

app.post('/products/create', (req, res) => {
  const { name, price, quality } = req.body
  console.log("Headers:", req.headers)
  console.log("Body:", req.body)

  if (typeof name !== 'string' || typeof price !== 'number' || typeof quality !== 'number') {
    return res.status(400).json({ error: 'Invalid product data' })
  }

  const newProduct = { name, price, quality }

  products.push(newProduct)

  res.status(201).json({ message: 'Product created successfully', product: newProduct })
});

app.post('/products/total-value', (req, res) => {
  console.log("Headers:", req.headers)
  console.log("Body:", req.body)

  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).json({ error: 'Product list is empty or invalid' })
  }

  const totalValue = products.reduce((total, product) => {
    const { price, quality } = product

    if (typeof price !== 'number' || typeof quality !== 'number') {
      return res.status(400).json({ error: 'Invalid product data' })
    }

    return total + (price * quality)
  }, 0)

  res.json({ totalValue })
})

app.get('/', (req, res) => {
    res.send('Server is up and running!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// 1. POST /products - Add a new product
router.post('/', async (req, res) => {
  try {
    const { name, description, category, price, quantity } = req.body;

    // Input validation
    if (!name || !description || !category || !price || !quantity) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProduct = new Product({ name, description, category, price, quantity });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// 2. PUT /products/:id - Update an existing product by ID
router.put('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const { name, description, category, price, quantity } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, category, price, quantity },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// 3. GET /products - Retrieve a list of all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// 4. DELETE /products/:id - Remove a product from the inventory by ID
router.delete('/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// 5. POST /products/:id/sell - Sell one unit of the product
router.post('/:id/sell', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.quantity <= 0) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    product.quantity -= 1;
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection(config.mysql);

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
  createPackagesTable();
});

// Create Packages table if not exists
function createPackagesTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS packages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      packageName VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      duration VARCHAR(50) NOT NULL
    )
  `;
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Packages table created or already exists');
  });
}

// Create a package
app.post('/packages', (req, res) => {
  const { packageName, price, duration } = req.body;
  const query = 'INSERT INTO packages (packageName, price, duration) VALUES (?, ?, ?)';
  db.query(query, [packageName, price, duration], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error creating package' });
    } else {
      res.status(201).json({ message: 'Package created successfully' });
    }
  });
});

// Get all packages
app.get('/packages', (req, res) => {
  const query = 'SELECT * FROM packages';
  db.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching packages' });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/packages/:id', (req, res) => {
  const { id } = req.params; // Extract package ID from URL parameters
  const query = 'SELECT * FROM packages WHERE id = ?'; // Query to fetch package by ID
  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching package' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ error: 'Package not found' });
      } else {
        res.status(200).json(result[0]); // Send the first (and only) result as JSON
      }
    }
  });
});



// Update a package
app.put('/packages/:id', (req, res) => {
  const { id } = req.params;
  const { packageName, price, duration } = req.body;
  const query = 'UPDATE packages SET packageName = ?, price = ?, duration = ? WHERE id = ?';
  db.query(query, [packageName, price, duration, id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error updating package' });
    } else {
      res.status(200).json({ message: 'Package updated successfully' });
    }
  });
});

// Delete a package
app.delete('/packages/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM packages WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error deleting package' });
    } else {
      res.status(200).json({ message: 'Package deleted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

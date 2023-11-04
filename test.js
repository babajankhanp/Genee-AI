// server.js
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 5002;

const url = "mongodb+srv://babajanpatan:9866178972Pb@@cluster0.hakxcmx.mongodb.net/?retryWrites=true&w=majority"; // Your MongoDB connection URL
const dbName = 'Cluster0';

app.use(express.json());

app.post('/api/post-data', async (req, res) => {
  try {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('myCollection');

    const data = req.body; // Your data from the request body
    const result = await collection.insertOne(data);

    client.close();

    res.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

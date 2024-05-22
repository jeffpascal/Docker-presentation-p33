const express = require('express');
const { createClient } = require('redis');
const app = express();

// Create a new Redis client and connect
const client = createClient({
  socket: {
    host: 'redis'
  }
});

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();

app.get('/', async (req, res) => {
  try {
    const visits = await client.incr('visits');
    res.send('Number of visits is: ' + visits);
  } catch (error) {
    console.error(error);
    res.send('Error fetching visits');
  }
});

app.listen(3000, () => {
  console.log('Server is up on 3000');
});

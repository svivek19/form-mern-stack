const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://xyzabc123:xyz123@vivek.de83b4e.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
const userRouter = require('./routes/user');
app.use('/user', userRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

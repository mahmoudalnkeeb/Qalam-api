const express = require('express');
const cors = require('cors');
const { port } = require('./configs/env');
const router = require('./routes/router');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));
// routes
app.use(router)

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

const app = require('./app');
const port = process.env.PORT || 3000; // Default to port 3000 if not specified

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

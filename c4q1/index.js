const express = require('express'); 
const app = express(); 

const router = require('./router'); 


app.use('/api', router);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
const express = require('express');
const app = express();
const post= require('./routes/post')
const auth= require('./routes/auth')
app.use(express.json());
app.use('/post',post);
app.use('/auth',auth);


app.listen(8000,()=>{
    console.log('Server is running on port 8000...')
})
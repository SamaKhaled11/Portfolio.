const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const URouter = require('./routes/userRoute.js');
app.use('/userRoute', URouter);

const ARouter = require('./routes/adminRoute.js');
app.use('/adminRoute', ARouter);

const ERouter = require('./routes/experRoute.js');
app.use('/experRoute', ERouter);

const PRouter = require('./routes/projectRoute.js');
app.use('/projectRoute', PRouter);

const contactRouter = require('./routes/contactRoute.js');
app.use('/contactRoute', contactRouter);


mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => console.log('Server running on port 3000'));
})
.catch(err => {
    console.log(`error: ${err}`);
}); 
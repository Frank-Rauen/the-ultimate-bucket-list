const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true, 
        useCreateIndex: true,
        useUnifiedTopology: true 
}).catch(err => console.log(err));



db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
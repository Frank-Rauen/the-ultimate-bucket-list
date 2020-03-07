const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL || 'mongodb+srv://frankrauen:fjr5361!@cluster0-db3aj.mongodb.net/bartenders-best-friend?retryWrites=true&w=majority', {
        useNewUrlParser: true, 
        useCreateIndex: true,
        useUnifiedTopology: true 
});



db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
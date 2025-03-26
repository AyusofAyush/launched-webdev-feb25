const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo'); // it takes care of removing expired sessions
const config = require('./config');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.set('view engine', 'ejs'); // templating engine 
app.use(express.static('public')); // static folder set
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse all the request body
app.use(cookieParser()); // parse all the cookies in the request

// connect to the MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// we are using session-based authetication as well
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: config.mongoURI }),
}));

// we have all the routes below
// app.use('/v1', authRoutes); // backward compartibility 
app.use(authRoutes);
app.use(userRoutes);

app.get('/', (req, res) => res.render('home'));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));

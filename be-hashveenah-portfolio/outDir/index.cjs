"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const passport_1 = __importDefault(require("passport"));
const entry_1 = __importDefault(require("./routes/entry"));
const auth_1 = __importDefault(require("./routes/auth"));
const user_1 = __importDefault(require("./routes/user"));
const inbox_1 = __importDefault(require("./routes/inbox"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const passport_local_1 = __importDefault(require("passport-local"));
const authUtils_1 = require("./auth/authUtils");
const user_2 = __importDefault(require("./models/user"));
const middleware_1 = require("./utils/middleware");
const app = (0, express_1.default)();
// initislize env variables
dotenv_1.default.config();
// connecting to mongodb
if (typeof (process.env.MONGO_URL) === 'string') {
    mongoose_1.default.connect(process.env.MONGO_URL)
        .then(() => { console.log('connected to mongodb'); });
}
console.log('process.env.FE_URL');
console.log(process.env.FE_URL);
app.use(express_1.default.static('dist'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "PATCH", "DELETE"],
    credentials: true,
}));
//setting up session
const store = connect_mongo_1.default.create({
    mongoUrl: process.env.MONGO_URL,
    collectionName: 'session'
});
const session = (0, express_session_1.default)({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        sameSite: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 20 // 20 min
    }
});
app.use(session);
// setting up passport
const LocalStrategy = passport_local_1.default.Strategy;
const localStrategy = new LocalStrategy(authUtils_1.customFields, authUtils_1.validationFunction);
passport_1.default.use(localStrategy);
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((user_id, done) => {
    user_2.default.findById(user_id)
        .then((user) => {
        done(null, user);
    })
        .catch((err) => done(err));
});
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// routes
app.use('/entry', entry_1.default);
app.use('/auth', auth_1.default);
app.use('/user', user_1.default);
app.use('/inbox', inbox_1.default);
app.get('/', (req, res) => {
    res.send('hello world!');
});
app.use(middleware_1.errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

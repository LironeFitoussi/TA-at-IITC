import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = process.env.PORT;

if (!PORT) {
    throw new Error("Hey Dev, please add a port")
}

// Middlware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));

app.get('/api/health', (req, res) => {
    res.json({
        message: "Server is Running!"
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();  // .env faylini o‘qish

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas'ga ulanish
mongoose.connect(process.env.MONGO_URI)
      .then(() => {
            console.log("MongoDB Atlas bilan muvaffaqiyatli ulanish.");
      })
      .catch((err) => {
            console.error("MongoDB'ga ulanishda xatolik:", err);
      });


// Test route
app.get('/', (req, res) => {
      res.send('Backend ishlayapti!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
      console.log(`🚀 Server ishlayapti: http://localhost:${PORT}`);
});

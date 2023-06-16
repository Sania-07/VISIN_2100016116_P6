import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/productRouter';
import productRouter from './routes/userRouter';

const app = express();

app.use(express.json());

const dbUrl = 'mongodb+srv://sania2100016116:sania@cluster0.5mrack7.mongodb.net/?retryWrites=true&w=majority'; // Ganti dengan URL MongoDB Anda
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true } as any)
  .then(() => {
    console.log('Terhubung ke database MongoDB');
  })
  .catch((error) => {
    console.log('Kesalahan saat terhubung ke database:', error);
  });

app.use('/users', userRouter);

app.use('/products', productRouter);

const port = 3000; // Ganti dengan port yang ingin Anda gunakan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
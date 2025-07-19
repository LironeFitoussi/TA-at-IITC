const mongoose = require('mongoose');

// חיבור למסד הנתונים
mongoose.connect('mongodb://localhost:27017/testDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// הגדרת הסכמה עבור משתמש
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

// יצירת מודל של המשתמש
const User = mongoose.model('User', userSchema);

async function createUser() {
  try {
    // יצירת מסמך חדש בעזרת המודל
    const newUser = new User({ name: 'Alice', age: 30, email: 'alice@example.com' });
    const result = await newUser.save();
    console.log('User created with ID:', result._id);
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
}

createUser();
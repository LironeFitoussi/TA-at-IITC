const { MongoClient } = require('mongodb');

// URI של חיבור למסד הנתונים
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function createUser() {
  try {
    await client.connect();
    const db = client.db('testDB');
    const usersCollection = db.collection('users');

    // הוספת מסמך חדש
    const newUser = { name: 'Alice', age: 30, email: 'alice@example.com' };
    const result = await usersCollection.insertOne(newUser);
    console.log('User created with ID:', result.insertedId);
  } finally {
    await client.close();
  }
}

createUser().catch(console.error);
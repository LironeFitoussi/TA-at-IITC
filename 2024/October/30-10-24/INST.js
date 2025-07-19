// app.js

// ייבוא המודולים הנדרשים
const express = require('express');
const mongoose = require('mongoose');

// יצירת אפליקציית Express
const app = express();

// שימוש ב-middleware לניתוח גוף הבקשה בפורמט JSON
app.use(express.json());

// חיבור ל-MongoDB באמצעות Mongoose
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('חיבור ל-MongoDB הצליח באמצעות Mongoose'))
.catch(err => console.error('שגיאה בחיבור ל-MongoDB:', err));

// הגדרת הסכמה (Schema) עבור המודל Project
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // שדה חובה
  },
  description: String,
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'], // ערכים מותרים בלבד
    default: 'Not Started' // ערך ברירת מחדל
  },
  startDate: Date,
  endDate: Date,
  createdAt: {
    type: Date,
    default: Date.now // ברירת מחדל לתאריך הנוכחי
  }
});

// יצירת מודל (Model) מ-schemה
const Project = mongoose.model('Project', projectSchema);

// פונקציה ביניים (Middleware) לקבלת פרויקט לפי ID
async function getProject(req, res, next) {
  let project;
  try {
    // בדיקה אם ה-ID תקין
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send('ID לא תקין');
    }

    project = await Project.findById(req.params.id);
    if (project == null) {
      return res.status(404).json({ message: 'הפרויקט לא נמצא' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.project = project;
  next();
}

// נתיב לקבלת כל הפרויקטים (GET /api/projects)
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// נתיב לקבלת פרויקט לפי ID (GET /api/projects/:id)
app.get('/api/projects/:id', getProject, (req, res) => {
  res.json(res.project);
});

// נתיב ליצירת פרויקט חדש (POST /api/projects)
app.post('/api/projects', async (req, res) => {
  const project = new Project({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  });

  try {
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    // טיפול בשגיאות אימות
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

// נתיב לעדכון פרויקט קיים (PUT /api/projects/:id)
app.put('/api/projects/:id', getProject, async (req, res) => {
  // עדכון השדות הקיימים בלבד
  if (req.body.name != null) {
    res.project.name = req.body.name;
  }
  if (req.body.description != null) {
    res.project.description = req.body.description;
  }
  if (req.body.status != null) {
    res.project.status = req.body.status;
  }
  if (req.body.startDate != null) {
    res.project.startDate = req.body.startDate;
  }
  if (req.body.endDate != null) {
    res.project.endDate = req.body.endDate;
  }

  try {
    const updatedProject = await res.project.save();
    res.json(updatedProject);
  } catch (error) {
    // טיפול בשגיאות אימות
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

// נתיב למחיקת פרויקט (DELETE /api/projects/:id)
app.delete('/api/projects/:id', getProject, async (req, res) => {
  try {
    await res.project.remove();
    res.json({ message: 'הפרויקט נמחק בהצלחה' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// הגדרת הפורט שעליו השרת יאזין
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`השרת מאזין על פורט ${PORT}`);
});

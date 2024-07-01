const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Schema');
const StoryModel=require('./models/StorySchema')
const bcrypt = require('bcrypt');

const MONGO_URI = 'mongodb+srv://desaisiddharth1246:sidPass@authdb.al5otaa.mongodb.net/?retryWrites=true&w=majority&appName=AuthDB';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Successfully connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB', err));

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const username=user.name
                res.json({ message: "Success" ,username});
            } else {
                res.status(401).json({ message: 'Incorrect password' });
            }
        } else {
            res.status(404).json({ message: 'No records' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/data', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'Email already in use' });
        }

        const user = new UserModel({ name, email, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.post('/stories',async(req,res)=>{
    const { title, characters, content, author } = req.body;
   try{
    const story=new StoryModel({title,characters,content,author})
    await story.save();
    res.status(201).json({ message: 'Story posted successfully' });
}catch(err){
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });


   }
})
app.get('/stories', async (req, res) => {
    try {
        const stories = await StoryModel.find();
        res.json(stories);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.listen(5000, () => console.log('Running on port 5000'));

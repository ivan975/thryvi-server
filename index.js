const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors())

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('api running')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const getSingleCourse = courses?.find(p => p.id == id)
    res.send(getSingleCourse);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
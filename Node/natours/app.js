const express = require('express');
const fs = require('fs')
const morgan = require('morgan')
const router = require('./routers/tourRoutes')

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.use((req, res, next) => {
    console.log('Hello from the middleware')
    next();
})

app.use((req, res, next) => {
    req.readTime = new Date().toISOString();
    next();
})


const tourRouter = express.Router();
const userRouter = express.Router();

// Routes
// app.get('/api/v1/tours', getAllTours)
// app.post('/api/v1/tours', CreateTour)
// app.get('/api/v1/tours/:id', getTour)
// app.patch('/api/v1/tours/:id', updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)


app.use('/api/v1/tours', router)
app.use('/api/v1/users', router)


// Start Server
const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)
})
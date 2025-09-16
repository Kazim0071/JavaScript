const express = require('express');
const fs = require('fs')

const app = express()
app.use(express.json())
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

const getAllTours = (req, res) => {
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours
        }
    })
}

const getTour = (req, res) => {

    const id = req.params.id * 1;

    // if (id > tours.length)
    if (!tours) {
        res.status(404).json({
            status: "FAil",
            message: "Cannot Find the ID"
        })
    }

    const tour = tours.find(el => el.id === id)

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })
}

const CreateTour =(req, res) => {
    // console.log(req.body)

    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body)
    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    })
}

const updateTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        res.status(404).json({
            status: "Failed",
            message: "Cannot Find the ID"
        })
    }

    res.status(200).json({
        status: "Success",
        message: "<Updated your Tour here...>"
    })
}

const deleteTour = (req, res) => {
    if (req.params.id > tours.length) {
        res.status(404).json({
            status: "Failed",
            message: "Item can not be deleted"
        })
    }

    res.status(204).json({
        status: "success",
        message: "Your Item is deleted",
        data: null
    })
}

// app.get('/api/v1/tours', getAllTours)
// app.post('/api/v1/tours', CreateTour)
// app.get('/api/v1/tours/:id', getTour)
// app.patch('/api/v1/tours/:id', updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)

app.route('/api/v1/tours').get(getAllTours).post(CreateTour)
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour)

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)
})
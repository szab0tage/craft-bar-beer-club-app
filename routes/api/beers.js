// routes/api/beers.js

const express = require('express');
const router = express.Router();

// Load Beer model
const Beer = require('../../models/Beer');

// @route GET api/beers/test
// @description tests beers route
// @access Public
router.get('/test', (req, res) => res.send('beer route testing!'));

// @route GET api/beers
// @description Get all beers
// @access Public
router.get('/', (req, res) => {
    Beer.find()
        .then(beers => res.json(beers))
        .catch(err => res.status(404).json({ nobeersfound: 'No Beers found' }));
});

// @route GET api/beers/:id
// @description Get single beer by id
// @access Public
router.get('/:id', (req, res) => {
    Beer.findById(req.params.id)
        .then(beer => res.json(beer))
        .catch(err => res.status(404).json({ nobeerfound: 'No Beer found' }));
});

// @route GET api/beers
// @description add/save beer
// @access Public
router.post('/', (req, res) => {
    Beer.create(req.body)
        .then(beer => res.json({ msg: 'Beer added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this beer' }));
});

// @route GET api/beers/:id
// @description Update beer
// @access Public
router.put('/:id', (req, res) => {
    Beer.findByIdAndUpdate(req.params.id, req.body)
        .then(beer => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/beers/:id
// @description Delete beer by id
// @access Public
router.delete('/:id', (req, res) => {
    Beer.findByIdAndRemove(req.params.id, req.body)
        .then(beer => res.json({ mgs: 'Beer entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such beer' }));
});

module.exports = router;
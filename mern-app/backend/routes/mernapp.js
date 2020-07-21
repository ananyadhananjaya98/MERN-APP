const router = require('express').Router()
let mernapp = require('../models/mernapp.model')

router.route('/').get((req, res)=>{
    mernapp.find()
    .then(mernapp => res.json(mernapp))
    .catch(err => res.status(400).json('Error'+err))
})

router.route('/add').post((req,res)=>{
    const username = req.body.username
    const beforebreakfast = Number(req.body.beforebreakfast)
    const afterbreakfast = Number(req.body.afterbreakfast)

    const newMernapp = new mernapp({
        username,
        beforebreakfast,
        afterbreakfast
    })

    newMernapp.save()
    .then(() => res.json('Mernapp added'))
    .catch(err => res.json('Error ' + err))
})


router.route('/:id').get((req,res) =>{
    mernapp.findById(req.params.id)
    .then(mernapp => res.json(mernapp))
    .catch(err => res.status(400).json('Error:'+err))
})

router.route('/:id').delete((req,res) =>{
    mernapp.findByIdAndDelete(req.params.id)
    .then(() => res.json('Log deleted'))
    .catch(err => res.status(400).json('Error:'+err))
})


router.route('/update/:id').post((req,res)=> {
    mernapp.findById(req.params.id)
    .then(mernapp =>{
        mernapp.username = req.body.username
        mernapp.beforebreakfast = Number(req.body.beforebreakfast)
        mernapp.afterbreakfast = Number(req.body.afterbreakfast)

        mernapp.save()
        .then(() => res.json('Log updated'))
        .catch(err => res.status(400).json('Error:'+err))
    })
    .catch(err => res.status(400).json('Error:'+err))
})

module.exports = router
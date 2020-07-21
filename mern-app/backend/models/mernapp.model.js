const mongoose= require('mongoose')

const Schema = mongoose.Schema

const mernappSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    beforebreakfast: {
        type: Number,
        required : true
    },
    afterbreakfast: {
        type:Number,
        required: true
    }
}
)

const mernApp = mongoose.model('mernApp', mernappSchema)

module.exports = mernApp
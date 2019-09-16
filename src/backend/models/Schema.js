const mongoose = require('mongoose');

const table = mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    _id:{
        type: String,

    }, 
    tipo:{
        type: String,
        required: true
    },
    raca:{
        type: String,
    },
    idade:{
        type: String,
    },
    sexo:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    nomeDono:{
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required: true
    },
    cidade:{
        type: String,
        required: true
    },
    bairro:{
        type: String,
        required: true
    },
    rua:{
        type: String,
        required: true
    },
    num:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
},
    {
    timestamps: true,
  }
)

module.exports = mongoose.model('Schema', table);
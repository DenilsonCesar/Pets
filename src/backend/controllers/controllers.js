const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const postar = require('../models/schema')

module.exports = {
  async index(req, res) {
    const posts = await postar.find().sort('-createdAt');
    return res.json(posts);
  },
 
  async store(req, res) {
    try{
    const { 
        _id, tipo, raca, idade,
        sexo, descricao, nomeDono, telefone,
        cidade, bairro, rua, num, 
    } = req.body;
    const { filename: image } = req.file;

    const [name] = image.split('.');
    const fileName = `${name}.jpg`;

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, 'uploads', fileName));

    fs.unlinkSync(req.file.path);

    const post = await postar.create({
        image: fileName, 
        _id, tipo, raca,
        idade, sexo, descricao,
        nomeDono, telefone, cidade,
        bairro, rua, num,
    });

    req.io.emit('post', post);

    return res.json(post);
  }catch(err){
    console.log(err)
  }
  },
  async show(req, res){
    try{
        const pet = await postar.findById(
          req.params._id,
          req.body._id, req.body.image, req.body.sexo, req.body.descricao
        )
        return res.json(pet)
    }catch(err){
        return res.status(400).send({error: 'Erro ao Buscar!'})
    }
  },
};
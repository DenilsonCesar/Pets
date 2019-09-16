const express = require('express');
const multer = require('multer');
const Controller = require('../controllers/controllers');
const uploadConfig = require('../config/multer');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/post', Controller.index);
routes.get('/:_id', Controller.show);
routes.post('/post', upload.single('image'), Controller.store);

module.exports = routes;
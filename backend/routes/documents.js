const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const {userAuth} = require('../middleware.js');

const documentController = require('../controller/documents.js');

router.get('/', wrapAsync(documentController.getAllDocuments));
router.post('/', userAuth, wrapAsync(documentController.createDocument));

module.exports = router;
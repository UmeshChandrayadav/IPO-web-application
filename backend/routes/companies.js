const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const {userAuth, validateCompany} = require('../middleware.js');
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

const companyController = require('../controller/companies.js');

router.get('/', wrapAsync(companyController.getAllCompanies));
router.post('/', userAuth, upload.single('logo'), validateCompany, wrapAsync(companyController.createCompany));
router.get('/:id', wrapAsync(companyController.getCompanyById));
router.put('/:id', userAuth, upload.single('logo'), wrapAsync(companyController.updateCompany));
router.delete('/:id', userAuth, wrapAsync(companyController.deleteCompany));

module.exports = router;
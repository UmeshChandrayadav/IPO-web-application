const express = require('express');
const router = express.Router();
const ipoController = require('../controller/ipo.js');
const wrapAsync = require('../utils/wrapAsync.js');
const {userAuth, validateIPO} = require('../middleware.js');

router.get('/', wrapAsync(ipoController.getAllIpos));
router.post('/', wrapAsync(ipoController.createIpo));
router.get('/:id', wrapAsync(ipoController.getIpoById));
router.put(':id', wrapAsync(ipoController.updateIpo));
router.delete('/:id', wrapAsync(ipoController.deleteIpo));
router.patch('/:id/approve', wrapAsync(ipoController.approveIPO));
router.patch('/:id/cancel', wrapAsync(ipoController.cancelIPO)); // Cancel IPO
router.patch('/:id/status', wrapAsync(ipoController.changeStatus));
router.post('/:id/subscribe', wrapAsync(ipoController.subscribeIPO)); // Subscribe to IPO
router.patch('/:id/allot', wrapAsync(ipoController.allotIPO)); // Allot IPO


module.exports = router;
'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);

//获取卖家用户
router.get('/get/shops/all',  controller.getAllShops)
router.get('/verifyShop/:id',  controller.verifiedShop);

router.get('/changerole/:id',  controller.changerole);


router.get('/shopInfo/:id',  controller.shopInfo);

router.get('/get/supplier/all', controller.supplier)

module.exports = router;

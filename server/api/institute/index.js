'use strict';

var express = require('express');
var controller = require('./institute.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('superadmin'), controller.index);
router.get('/:id',auth.hasRole('superadmin'), controller.show);

router.get('/stats/:id', auth.hasRole('admin'), controller.stats);
router.get('/allStats/:id', auth.hasRole('superadmin'), controller.allStats);

router.post('/activate/:id', auth.hasRole('superadmin'),controller.activate);
router.post('/reactivate/:id',  auth.hasRole('superadmin'),controller.reactivate);
router.post('/deactivate/:id', auth.hasRole('superadmin'),controller.deactivate);
router.post('/resetAdminPassword/:id', auth.hasRole('superadmin'), controller.resetAdminPassword);
router.post('/', auth.hasRole('superadmin'), controller.create);

router.put('/:id',auth.hasRole('superadmin'), controller.update);
router.patch('/:id', auth.hasRole('superadmin'), controller.update);
router.delete('/:id', auth.hasRole('superadmin'), controller.destroy);

module.exports = router;
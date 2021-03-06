const express = require('express')
const router = express.Router()
const { getBootcamp, getBootcamps, updateBootcamp, deleteBootcamp, createBootcamp } = require('../controllers/bootcamps')

router.route('/')
  .get(getBootcamps)
  .post(createBootcamp)

router.route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp)

module.exports = router
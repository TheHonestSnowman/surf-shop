const express = require('express');
const router = express.Router();

/* GET posts index /posts */
router.get('/',(req, res, next) => {
    res.send('INDEX /posts');
  });
/* GET posts index /posts/new */
router.get('/new',(req, res, next) => {
    res.send('NEW /posts/new');
  });
/* POST posts create /posts */
router.post('/',(req, res, next) => {
    res.send('CREATE /posts');
  });
/* GET posts show /posts */
router.get('/:id',(req, res, next) => {
    res.send('SHOW /posts/:id');
  });

/* GET posts edit /posts */
router.get('/:id/edit',(req, res, next) => {
    res.send('EDIT /posts/:id/edit');
  });

/* PUT posts update /posts */
router.put('/:id',(req, res, next) => {
    res.send('UPDATE /posts/:id');
  });

/* DELETE posts destroy /posts */
router.delete('/:id',(req, res, next) => {
    res.send('DELETE /posts/:id');
  });

module.exports = router;
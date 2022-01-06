const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    let usuario;
    if (req.session.user){
      usuario = req.session.user
    };
    const estouLogado = !!req.session.user
    res.render('cafe', { title: 'Café', usuario, estouLogado });
});

router.get('/carrinho', function(req, res, next) {
  let usuario;
  if (req.session.user){
    usuario = req.session.user
  };
  const estouLogado = !!req.session.user
  res.render('carrinho', { title: 'Café', usuario, estouLogado });
});

module.exports = router;
const axios = require('axios');
const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    let usuario;
    if (req.session.user){
      usuario = req.session.user
    };
    const estouLogado = !!req.session.user


    
    res.render('location', { title: 'Endereço', usuario, estouLogado });
  });

  // router.get('/cep', ConsultaCEP, async function(req, res, next) {
  //   const cep = req.body
  //   // console.log(cep+ 'oi')
    
  //   try {
  //     const { data } = await axios('https://viacep.com.br/ws/'+ cep + '/json')
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   let usuario;
  //   if (req.session.user){
  //     usuario = req.session.user
  //   };
  //   const estouLogado = !!req.session.user
  //   res.render('location', { title: 'Endereço', usuario, estouLogado, findCEP });
  // });

module.exports = router;
const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

/* GET home page. */
router.get('/', function(req, res, next) {
  let usuario;
  if (req.session.user){
    usuario = req.session.user
  }
  res.render('index', { title: 'Coffee Precious', usuario });
});

router.get('/dev', function(req, res, next) {
  const usuario = req.session.user
  const estouLogado = !!req.session.user

  res.render('dev', { title: 'Coffee Precious', usuario, estouLogado });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res, next) {

  const {email, senha} = req.body
 
  const { senha: senhaNaoUsada, ...user} =  UsersController.login({
   email, 
   senha
  })

 const {session} = req;
 session.user = user;
 
   res.redirect('/');
 });

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Cadastro' })
});

router.post('/cadastro', function(req, res, next) {

 const {email, cpf, senha, confirma, nome, sobrenome, data, cep} = req.body

 const { id, nome: nomeUsuario } =  UsersController.cadastrar({

  email, 
  cpf, 
  senha, 
  confirma, 
  nome, 
  sobrenome, 
  data, 
  cep
 })
const {session} = req;
session.user = {
  id,
  nome: nomeUsuario
};
  res.redirect('/');
});

router.get("/logout", function(req, res, next) {
  req.session.destroy();
  res.redirect("/")
})

module.exports = router;

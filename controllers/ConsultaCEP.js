const { api } = require('../services/api')

exports.getAdresses = (cep) => api.get(`/${cep}/json`);


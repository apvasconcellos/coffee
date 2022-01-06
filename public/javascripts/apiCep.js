const { api } = require('../services/api')

exports.getAdresses = async (cep) => await api.get(`/${cep}/json`);
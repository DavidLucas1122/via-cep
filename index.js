'use strict'

async function perquisarCep(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
async function preencherCampos ({target}) {
    
    const infoCep = await perquisarCep(target.value)
    document.getElementById('endereco').value = infoCep.logradouro
    document.getElementById('bairro').value = infoCep.bairro
    document.getElementById('cidade').value = infoCep.localidade
    document.getElementById('estado').value = infoCep.estado
    
}

document.getElementById('cep').addEventListener('focusout', preencherCampos)


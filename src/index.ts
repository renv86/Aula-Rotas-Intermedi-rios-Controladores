import 'dotenv/config'

import express from 'express'

import { buscaUsuarios, buscaUsuariosQuery, itemProdutos } from './controladores'
import { intermediarioGeral, meuPrimeiroIntermediario } from '../intermediarios'

const servidor = express()

servidor.use(intermediarioGeral)


servidor.get('/produtos/:item', meuPrimeiroIntermediario, itemProdutos )

// servidor.get('/produtos/:item', (req, res, next) => {
// console.log('Passei pelo intermediario');
// next()

// }, itemProdutos )

servidor.get('/usuarios',buscaUsuarios) 

servidor.get('/usuarios',buscaUsuariosQuery) 
    
servidor.listen(process.env.PORT)
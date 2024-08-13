import { Request, Response } from "express";

const pessoas = [
    {nome: 'Guido', email: 'guido@email.com'},
    {nome: 'Joao', email: 'joao@email.com'},
    {nome: 'Maria', email: 'maria@email.com'}
]

export const itemProdutos = (req: Request , res: Response ) => {
    console.log(req.params.item);
    
return res.send('Chueguei no controlador')
}

export const buscaUsuarios = (req: Request, res: Response ) => {
    const { email } = req.params
    if(!email){
        return res.send('Parâmetro não informado')
    }
    const pessoa = pessoas.find((item) => {
        return item.email === email
    })
    if(!pessoa){
        return res.send('Pessoa não encontrada')
    
}
    return res.send(pessoa)
}

 
export const buscaUsuariosQuery = (req: Request, res: Response ) => {
    const { email } = req.query
    if(!email){
        return res.send('Parâmetro não informado')
    }
    const pessoa = pessoas.find((item) => {
        return item.email === email
    })
    if(!pessoa){
        return res.send('Pessoa não encontrada')
    
}
    return res.send(pessoa)
}
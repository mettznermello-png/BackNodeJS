import express from 'express'
import ControllerClientes from '../controller/clientes.js'

const router = express.Router()

router.get('/login', ControllerClientes.Login)
router.get('/buscar', ControllerClientes.Buscar)
router.get('/buscarum/:id', ControllerClientes.Um)
router.post('/criar', ControllerClientes.Criar)
router.put('/alterar/:id', ControllerClientes.Alterar)
router.delete('/delete/:id', ControllerClientes.Delete) 

export default router
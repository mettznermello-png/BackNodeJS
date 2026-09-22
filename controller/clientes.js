import ServiceClientes from '../service/clientes.js'


class ContorellerClientes {
    async Buscar(_, res) {
        try {
            const clientes = await ServiceClientes.Buscar()

            res
            .status(200)
            .send({ message: clientes })
        } catch (error) {
            res.stauts(500).send({
                mensagem: error.message
            })
        }
    }
    async Um(req, res) {
        try {
            const { id } = req.params.id

            const cliente = await ServiceUsuario.Um(id)

            if (!id || !dia || !hora || !valor || !concluido) {
                res
                    .status(500)
                    .send({ message: "Favor informar todos os dados" })
                return
            }

            cliente.push({id, dia, hora, valor, concluido})
            res
            .status(200)
                .send({
                    message: "Cadastrado com susseso"
                })
        } catch (error) {
            res.stauts(500).send({
                mensagem: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { dia, hora, valor, concluido} = req.body

            await ServiceClientes.Criar(dia, hora, valor, concluido)

            res
            .status(201)
            .send({
                    message: "Cadastrado com susseso"
                })
        } catch (error) {
            res.stauts(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const {id, dia, hora, valor, concluido} = req.params
            await ServiceClientes.Alterar(id, dia, hora, valor, concluido)

        } catch (error) {
            res.stauts(500).send({
                mensagem: error.message
            })
        }

    }

    async Delete(req, res) {
        try {
            const batata = req.body.id

            await ServiceClientes.Delete(batata)

            res
            .status(204)
            .send("Deletado")
        } catch (error) {
            res
            .stauts(500)
            .send({
            mensagem: error.message
            })
        }
    }
    async Login(req, res) {
        try {
            const {dia, hora, valor, concluido} = req.body

            const token = await ServiceClientes.Login(dia, hora, valor, concluido)
        } catch (error) {
            res
            .stauts(500)
            .send({
            mensagem: error.message
        })
    }
    }
}

export default new ContorellerClientes()
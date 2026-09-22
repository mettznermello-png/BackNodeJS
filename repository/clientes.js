import Cliente from "../model/clientes.js"

class RepositoryCliente {
    async Buscar() {
        const clientes = await Cliente.findAll()
        return clientes
    }
    async Um() {
        const um = await Cliente.findById()
        return um
    }
    async Criar(dia, hora, valor, concluido) {
        const criado = await Cliente.create({ dia, hora, valor, concluido})
        return criado
    }
    async Alterar(id, dia, hora, valor, concluido) {
        const alterar =  await Cliente.findByPk(id)
        if(!alterar) {
            throw new Error("Cliente não encontrado")
        }
        alterar.dia = dia
        alterar.hora = hora
        alterar.valor = valor
        alterar.concluido = concluido

        const update =  await Cliente.update(id, dia, hora, valor, concluido)
        return update
    }
    async Delete(id ) {
        const deleted =  await Cliente.findByPk(id)
        if ( !deleted ) {
            throw new Error("Cliente não encontrado")
        }
        await deleted.destroy()
        return deleted
    }
}

export default new RepositoryCliente()
import RepositoryCilentes from "../repository/clientes.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const segredo = "wasd17112009"

class ServiceClientes {

    //core
    async Buscar() {
        return RepositoryCilentes.Find()
    }

    Um(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        const cliente = RepositoryCilentes.Find(it => it.id === id)

        if (!cliente) {
            throw new Error(`Favor informar o ID ${id} de um cliente existente`)
        }

        return cliente
    }

    //Função(parametros, parametros, parametros, parametros, parametros) 
    async Criar(id, dia, hora, valor, concluido) {
        if ( !id || !dia || !hora || !valor || !concluido) {
            throw new Error({ message: "Favor informar todos os dados" })
        }

        const cliente = await RepositoryCilentes.Create(id, dia, hora, valor, concluido)

        return cliente
    }

    async Alterar(id, dia, hora, valor, concluido) { 
        if(!id || !dia || !hora || !valor || !concluido) {
            throw new Error(
                "Favor informar krl, fdp"
            )
        }
        const alterar = await RepositoryCilentes.Update(id, dia, hora, valor, concluido)

        return alterar
    }

    async Delete(id) {
        if (!id) {
            throw new Error({ message: "Favor informar todos os dados" })
        }

        const cliente = await RepositoryCilentes.Delete(id)

        return cliente
    }
    async Login(id, dia, hora, valor, concluido) {
        if (!id || !dia || !hora || !valor || !concluido) {
            throw new Error("email ou senha invalidos")
        }
        const cliente = await RepositoryCilentes.FindById(id)

        if (!cliente) {
            throw new Error("Email ou senha invalidos")
        }
        if (
            (await bcrypt.compare(id, cliente.id))
        ) {
            throw new Error ("Email ou senha invalidos")
        }

        return jwt.sign(
            { id: cliente.id, dia, hora, valor, concluido},
            segredo,
            { expiresin: 60*60 }

        )
    }
}

export default new ServiceClientes
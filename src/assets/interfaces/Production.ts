export interface Productions {
    id: number
    data: string
    quantidade: number
    observacao: string

    produto:produto
}

export interface produto {
    id: number
    nome: string
    descricao: string
    valor: number
    imagem: string
    restricao: string

    categoria: categoria
}

export interface categoria {
    id: string
}
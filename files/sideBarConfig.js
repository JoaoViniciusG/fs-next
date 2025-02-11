export const sideBarConfig = [
    {
        name: "Pedido",
        id: 1,
        subOptions: [
            {
                name: "Criar pedidos",
                route: "/interno/cliente/teste"
            },
            {
                name: "Consultar pedidos",
                route: "/interno/teste1"
            }
        ]
    },
    {
        name: "Clientes",
        id: 2,
        subOptions: [
            {
                name: "Cadastrar clientes",
                route: "/interno/cliente/adicionarCliente"
            },
            {
                name: "Consultar clientes",
                route: "modulos/clientes/consultar.html"
            }
        ]
    },
    {
        name: "Produtos",
        id: 3,
        subOptions: [
            {
                name: "Cadastrar produtos",
                route: "modulos/produtos/index.html"
            },
            {
                name: "Consultar produtos",
                route: "modulos/produtos/html/consultar_produtos.html"
            },
            {
                name: "Movimentar estoque",
                route: "modulos/pedidos/html/movimentacao_estoque.html"
            }
        ]
    },
    {
        name: "Funcionários",
        id: 4,
        subOptions: [
            {
                name: "Cadastrar funcionário",
                route: "/interno/funcionario/cadastrarFuncionario"
            },
            {
                name: "Consultar funcionário",
                route: "/interno/funcionario/consultarFuncionario"
            }
        ]
    },
    {
        name: "Marcas",
        id: 5,
        subOptions: [
            {
                name: "Cadastrar marcas",
                route: "modulos/marcas/index.html"
            },
            {
                name: "Consultar marcas",
                route: "modulos/marcas/consultar.html"
            }
        ]
    },
    {
        name: "Fornecedores",
        id: 6,
        subOptions: [
            {
                name: "Cadastrar fornecedores",
                route: "modulos/fornecedores/index.html"
            },
            {
                name: "Consultar fornecedores",
                route: "modulos/fornecedores/html/consultar_fornecedor.html"
            }
        ]
    },
    {
        name: "Endereço",
        id: 7,
        subOptions: [
            {
                name: "Cadastrar endereço",
                route: "/interno/endereco/cadastrar"
            },
            {
                name: "Visualizar endereço",
                route: "modulos/enderecos/informacoesEndereco.html"
            },
            {
                name: "Alterar endereço",
                route: "modulos/enderecos/alterarEndereco.html"
            }
        ]
    }
]
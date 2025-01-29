export const sideBarConfig = [
    {
        name: "Pedidos",
        id: 1,
        subOptions: [
            {
                name: "Criar pedidos",
                route: "modulos/pedidos/html/criar_pedido.html"
            },
            {
                name: "Consultar pedidos",
                route: "modulos/pedidos/html/consultar.html"
            }
        ]
    },
    {
        name: "Clientes",
        id: 2,
        subOptions: [
            {
                name: "Cadastrar clientes",
                route: "modulos/clientes/index.html"
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
                route: "modulos/funcionarios/index.html"
            },
            {
                name: "Consultar funcionário",
                route: "modulos/funcionarios/consultar.html"
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
                route: "modulos/enderecos/cadastrarEndereco.html"
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
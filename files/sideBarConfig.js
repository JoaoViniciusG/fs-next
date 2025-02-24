export const sideBarConfig = [
    {
        name: "Pedido",
        id: 1,
        subOptions: [
            {
                name: "Criar pedidos",
                route: "/interno/pedidos/criar_pedidos"
            },
            {
                name: "Consultar pedidos",
                route: "/interno/pedidos/consultar_pedidos"
            }
        ]
    },
    {
        name: "Clientes",
        id: 2,
        subOptions: [
            {
                name: "Cadastrar clientes",
                route: "/interno/cliente/cadastrarCliente"
            },
            {
                name: "Consultar clientes",
                route: "/interno/cliente/consultarCliente"
            }
        ]
    },
    {
        name: "Produtos",
        id: 3,
        subOptions: [
            {
                name: "Cadastrar produtos",
                route: "/interno/produtos/cadastrar"
            },
            {
                name: "Consultar produtos",
                route: "/interno/produtos/consultar"
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
                route: "/interno/marca/cadastrarMarca"
            },
            {
                name: "Consultar marcas",
                route: "/interno/marca/consultarMarca"
            }
        ]
    },
    {
        name: "Fornecedores",
        id: 6,
        subOptions: [
            {
                name: "Cadastrar fornecedores",
                route: "/interno/fornecedores/cadastrar"
            },
            {
                name: "Consultar fornecedores",
                route: "/interno/fornecedores/consultar"
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
                route: "/interno/endereco/visualizar"
            },
            {
                name: "Alterar endereço",
                route: "/interno/endereco/alterar"
            }
        ]
    },
    {
        name: "Permissões",
        id: 8,
        subOptions: [
            {
                name: "Permissões",
                route: "/interno/permissao"
            }
        ]
    }
]
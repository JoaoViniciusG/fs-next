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
                route: "/interno/cliente/informacoesCliente"
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
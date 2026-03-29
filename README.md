# Pet Manezinho — Projeto Fase 2

Site de um petshop fictício localizado em Florianópolis/SC, desenvolvido como trabalho da disciplina de **Fundamentos de Sistemas Web** da PUCRS Online.

## Sobre o Projeto

O **Pet Manezinho** é um petshop com mais de 15 anos de atuação em Florianópolis. O site apresenta os produtos e serviços da loja, organizados em páginas temáticas, com design responsivo baseado em Bootstrap 5, identidade visual inspirada na Ilha da Magia e funcionalidades em JavaScript.

## Estrutura de Páginas

| Arquivo | Descrição |
|---|---|
| `index.html` | Página inicial com carrossel de destaques e apresentação do petshop |
| `acessorios.html` | Catálogo de acessórios (brinquedos, camas, roupas) |
| `racoes.html` | Catálogo de rações não perecíveis para cães e gatos |
| `higiene.html` | Catálogo de produtos de higiene e limpeza |
| `servicos.html` | Serviços de banho e tosa (com e sem tele-busca) e tabela de preços |
| `cadastro.html` | Formulário de cadastro do cliente e do pet com agendamento de serviço |
| `contato.html` | Informações de contato e horário de funcionamento |

## Tecnologias Utilizadas

- HTML5 semântico (`header`, `main`, `footer`, `nav`, `address`, `article`, `section`)
- CSS3 com variáveis customizadas (paleta de cores tema Florianópolis)
- Bootstrap 5.3 (navbar responsiva, carrossel, cards, grid, formulários, tabelas)
- Bootstrap Icons 1.11
- JavaScript puro — relógio ao vivo e validação de formulário
- Logo vetorial em SVG

## Funcionalidades JavaScript

- **Relógio ao vivo** — exibido na barra superior, atualizado a cada segundo
- **Validação de formulário** — feedback visual em tempo real nos campos obrigatórios do cadastro
- **Alerta de confirmação** — mensagem de sucesso exibida após o envio do agendamento

## Formulário de Cadastro e Agendamento (`cadastro.html`)

- **Dados do cliente:** nome, CPF, e-mail, telefone, endereço, sexo (radio), data de nascimento, como conheceu a loja (select)
- **Dados do pet:** nome, espécie, raça, idade (number), porte, sexo, castrado/vacinado (checkbox), observações
- **Serviço:** Banho e Tosa ou Banho e Tosa com Tele-busca (radio), opções de tosa (checkbox)
- **Agendamento:** calendário de data (`input type="date"`) com mínimo = data atual, horário preferencial (select), forma de confirmação

## Acessibilidade

- Atributo `alt` descritivo em todas as imagens
- `aria-label` em botões, navegação, carrossel e campos de formulário
- `aria-live` no relógio ao vivo e no alerta de sucesso do formulário
- `aria-required` nos campos obrigatórios
- `aria-current="page"` no link ativo da navbar
- Link "Pular para o conteúdo principal" em todas as páginas
- `role` semânticos: `banner`, `contentinfo`, `menubar`, `list`, `listitem`, `img`
- `<caption>` e `scope="col"` nas tabelas
- `aria-hidden="true"` em todos os ícones decorativos
- `<title>` no SVG da logo

## Imagens

| Arquivo | Uso |
|---|---|
| `logo.svg` | Logo do site (navbar e rodapé) |
| `guia-cachorro.jpg` | Carrossel — slide 1 (Acessórios) |
| `racao-pedigree.jpg` | Carrossel — slide 2 (Rações) |
| `banho-dog.jpeg` | Carrossel — slide 3 (Serviços) |
| `pelucia-macaco.jpg` | Catálogo Acessórios |
| `cama-pet.jpg` | Catálogo Acessórios / seção boas-vindas |
| `roupa-snoopy.jpg` | Catálogo Acessórios |
| `royal-canin-light.jpg` | Catálogo Rações |
| `sache-cachorro.jpg` | Catálogo Rações |
| `racao-gato.jpg` | Catálogo Rações |
| `tapete-kelldog.jpg` | Catálogo Higiene e Limpeza |
| `fralda-caes.jpg` | Catálogo Higiene e Limpeza |
| `shampoo-caes.jpg` | Catálogo Higiene e Limpeza |
| `caminha-dog.jpg` | Disponível no projeto |

## Como Visualizar

Basta abrir o arquivo `index.html` diretamente em qualquer navegador. Nenhuma instalação ou servidor local é necessário.

## Informações do Petshop

- **Endereço:** Rua dos Pinheiros, 452 — Trindade, Florianópolis/SC — CEP 88036-001
- **Telefone:** (48) 9999-1234
- **WhatsApp:** (48) 99999-5678
- **E-mail:** contato@petmanezinho.com.br
- **Horário:** Segunda a Sexta das 8h às 19h | Sábado das 8h às 17h
- **CNPJ:** 80.008.091/0001-40

## Autoria

Desenvolvido por **Fernanda Nogueira Macena Lima**
Disciplina: Fundamentos de Sistemas Web — PUCRS Online — 2026
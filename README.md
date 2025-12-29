# Stock-manager 

1. Sistema focado no gerenciamento de estoque de produtos.
2. A api trabalha com vários tipos de validações além do uso de:
 
> 1. Criptografia de senha
> 2. Validação de rotas com base no ([JWT](https://jwt.io/))
> 3. Envio de mensagens para o front-end
> 4. Utilização de middlewares

3. A versão web lida com o gerenciamento dos produtos como: 

> 1. Cadastro, listagens, atualização e romoção.
> 2. Validações de login com yup e @unform
> 3. Utilização de styled-components

4. A versão mobile apresenta a quantidade de produtos em estoque utilizando gráficos.

> 1. Utilização de login opicional com validação usando ([Yup](https://github.com/jquense/yup)) e ([Formik](https://formik.org/docs/overview)) 
> 2. Uso de ([async-storage](https://github.com/react-native-async-storage/async-storage)) para salvar informações do usuário como token.

## módulos

O app contém os seguintes módulos:

* Uma tela de login opicional para autenticação com validação de erros.
* Uma tela de home mostrando as opções disponíveis para o usuário.
* Uma tela com uso de gráficos para mostrar os produtos com maior estoque.
* Uma tela com uso de gráficos para mostrar os produtos com menor estoque.

## Explicação do aplicativo no LinkedIn
* [Explicação do aplicativo](https://www.linkedin.com/posts/carlos-ferreira-4b2ba219a_js-yup-formik-activity-6833550560164114432-LLJM)

## Páginas do app
![Foto do App login](https://res.cloudinary.com/dbw8igay3/image/upload/v1766429842/github_projects/stock-manager/login.png)
![Foto do App Home](https://res.cloudinary.com/dbw8igay3/image/upload/v1766429839/github_projects/stock-manager/home.png)
![Foto do App BiggerStock](https://res.cloudinary.com/dbw8igay3/image/upload/v1766429845/github_projects/stock-manager/maior.png)
![Foto do App SmallerStock](https://res.cloudinary.com/dbw8igay3/image/upload/v1766429848/github_projects/stock-manager/menor.png)

## MOBILE
RODANDO O PROJETO MOBILE
* yarn install => para instalar dependências do projeto
* yarn start => para inicializar o projeto
* yarn android => para executar o projeto no emulador android
* yarn ios => Para executar no emulador iOS

## FRONTEND
RODANDO O PROJETO FRONTEND
* yarn install => para instalar as dependências do projeto
* yarn start => para inicializar o projeto
> lembre-se de trocar o IP pelo da sua rede no seguintes arquivos: api.js

## BACKEND
RODANDO O PROJETO BACKEND
* yarn install => para instalar as dependências do projeto
* yarn start => para inicializar o projeto

## Feito por Carlos Ferreira
* [Github](https://www.github.com/CarlosSTS)
* [Email](mailto://carlossts.dev@gmail.com)
* [LinkedIn](https://www.linkedin.com/in/carlos-ferreira-4b2ba219a/)

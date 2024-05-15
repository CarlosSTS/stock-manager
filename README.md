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
![Foto do App login](https://firebasestorage.googleapis.com/v0/b/portfolio-web-7fbff.appspot.com/o/github_projects%2Fstock-manager%2Flogin.png?alt=media&token=d61eae05-6dc4-42d9-92c0-7cf77d93a9a8)
![Foto do App Home](https://firebasestorage.googleapis.com/v0/b/portfolio-web-7fbff.appspot.com/o/github_projects%2Fstock-manager%2Fhome.png?alt=media&token=0c9bc5aa-a777-41f0-80a1-09fac48f41e1)
![Foto do App BiggerStock](https://firebasestorage.googleapis.com/v0/b/portfolio-web-7fbff.appspot.com/o/github_projects%2Fstock-manager%2Fmaior.png?alt=media&token=a129c845-789b-4baa-be4c-1bcdf4197394)
![Foto do App SmallerStock](https://firebasestorage.googleapis.com/v0/b/portfolio-web-7fbff.appspot.com/o/github_projects%2Fstock-manager%2Fmenor.png?alt=media&token=70f7f672-fdfa-45fd-b484-ee990e7e22cb)

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
* [Email](mailto://carlossts826@gmail.com)
* [LinkedIn](https://www.linkedin.com/in/carlos-ferreira-4b2ba219a/)

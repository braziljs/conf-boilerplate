*[Read the documentation in English](https://github.com/braziljs/conf-boilerplate/blob/master/README.md)*

---

# Conf Boilerplate [![Build Status](https://secure.travis-ci.org/braziljs/conf-boilerplate.png?branch=master)](https://travis-ci.org/braziljs/conf-boilerplate)

![image](http://f.cl.ly/items/2i1m3z3i1a3Z0I1X472B/logo.jpg)

Uma iniciativa da [BrazilJS Foundation](http://braziljs.org) para ajudar aqueles que querem organizar conferências/eventos e não tem muito tempo para criar o site disso.

> **Mantenedor:** [Jean Carlo Emer](https://github.com/jcemer)

## Índice

* [Veja o demo](http://braziljs.github.io/conf-boilerplate/)
* [Como funciona?](#como-funciona)
* [Primeiros passos](#primeiros-passos)
* [Estrutura](#estrutura)
* [Customização](#customizao)
* [Deploy](#deploy)
* [Showcase](#showcase)
* [Contribuindo](#contribuindo)
* [Quem está por trás disso?](#quem-est-por-trs-disso)
* [Licença](#licena)

## Como funciona?

[![image](http://f.cl.ly/items/1q3i0r3q0n3y1N070M47/Screen%20Shot%202012-11-16%20at%207.05.44%20PM.png)](http://www.youtube.com/watch?v=EI99oZI3nKY)

Nós usamos o [DocPad](https://github.com/bevry/docpad), um static generator em NodeJS, para criar esse modelo extremamente simples de customizar. Além disso, a hospedagem é gratuita via [GitHub Pages](http://pages.github.com) e você ainda pode usar seu próprio domínio *(mais informações sobre isso em [Deploy](#domnio-personalizado))*.

Por padrão, definimos as seguintes seções:

* *About* - Para que você possa descrever o objetivo do seu evento.
* *Location* - Para que você possa exibir a localização do seu evento através do Google Maps.
* *Speakers* - Para que você possa listar informações sobre os palestrantes.
* *Schedule* - Para que você possa mostrar a agenda do evento.
* *Sponsors* - Para que você possa fazer propaganda dos seus patrocinadores.
* *Partners* - Para que você possa fazer propaganda dos seus apoiadores.

*OBS 1: Não há integração com nenhum sistema de inscrição e/ou pagamento. Por conta disso, indicamos o [Eventick](http://eventick.com.br/).*

*OBS 2: Por enquanto ainda não conseguimos desenvolver uma solução altamente automatizada e customizável para formulários de contato. Por conta disso, indicamos o [Wufoo](http://wufoo.com/).*

## Primeiros passos

Pré-requisitos: Instale o [Git](http://git-scm.com/downloads) e o [NodeJS](http://nodejs.org/download/), caso você não os tenha ainda.

1. Instale [Git](http://git-scm.com/downloads) e [NodeJS](http://nodejs.org/download/), caso você não os tenha ainda.

2. Clone o repositório:

    ```sh
    $ git clone git://github.com/braziljs/conf-boilerplate.git

3. Vá para pasta do projeto:

    ```sh
    $ cd conf-boilerplate
    ```

4. Instale todas as dependências:

    ```sh
    $ npm install
    ```

5. E finalmente rode:

    ```sh
    $ npm run watch
    ```

Agora você irá ver o site rodando em `localhost:9778` :D

## Estrutura

A estrutura básica do projeto se dá na seguinte forma:

```
.
|-- out/
|-- src/
|   |-- documents
|   |-- layouts
|   |-- partials
|-- docpad.js
|-- package.json
`-- publish.sh
```

### out/

É onde os arquivos gerados são armazenados, uma vez que o DocPad tenha sido rodado. Porém, esse diretório se torna desnecessário no versionamento, por isso está ignorado ([.gitignore](https://github.com/braziljs/conf-boilerplate/blob/master/.gitignore)).

### [src/documents](https://github.com/braziljs/conf-boilerplate/blob/master/src/documents)

Contém o arquivo responsável por importar todas as seções da aplicação. Além disso contém o tema com todos seus arquivos como imagens, arquivos CSS e JS.

### [src/layouts](https://github.com/braziljs/conf-boilerplate/tree/master/src/layouts)

Contém o template padrão da aplicação.

### [src/partials](https://github.com/braziljs/conf-boilerplate/tree/master/src/partials)

São blocos de código utilizados para gerar a página principal do site ([index.html](https://github.com/braziljs/conf-boilerplate/blob/master/src/documents/index.html.eco)).

### [docpad.js](https://github.com/braziljs/conf-boilerplate/blob/master/docpad.js)

Armazena de forma fácil a maior parte das configurações da aplicação.

### [package.json](https://github.com/braziljs/conf-boilerplate/blob/master/package.json)

Lista as dependências de módulos do NodeJS.

### [publish.sh](https://github.com/braziljs/conf-boilerplate/blob/master/publish.sh)

Shell Script responsável pela publicação do site via [GitHub Pages](http://pages.github.com).

## Customização

O projeto já vem com um template visual pronto, use-o à vontade, mas nós recomendamos que você crie seu próprio, a fim de colocar sua própria cara no evento.

De qualquer forma, nós preparamos algo altamente customizável para você, portanto para maioria das alterações do projeto basta ir até o `docpad.js` e alterar o valor das variáveis.

### Informações básicas sobre a conferência

Quer alterar o nome, data, endereço, cidade ou preço do evento? É só mudar.

```
conf:
    name: "Conference name"
    description: "Conference description"
    date: "November 15"
    price: "$100"
    address: "Boulevard Kukulcan, 30, México"
    venue: "Coco Bongo"
    city: "Cancún"
```

### Informações básicas sobre o site

Quer mudar a imagem de capa, código do Google Analytics ou o favicon? Vá em frente!

```
site:
    theme: "yellow-swan"
    url: "http://braziljs.github.io/conf-boilerplate/"
    googleanalytics: "UA-33656081-1"
```

### Seções ativas

Ainda não definiu a programação completa do evento? Não tem problema, basta comentar a linha `schedule` (usando `#`).

Ainda não sabe quem irá palestrar? Tudo bem, basta comentar a linha `speakers` (usando `#`).

E por aí vai.

```
sections: [
  "about"
  "location"
  #"speakers"
  #"schedule"
  "sponsors"
  "partners"
  "contact"
]
```

Você ainda pode trocar a order em que eles aparecem na página e na navegação ao trocar a order das linhas também!

### Labels (i18n)

Se você quiser usar palavras diferentes do padrão ou diferentes línguas
é só trocar o valor das labels correspondentes:

```
labels:
  about: "Sobre"
  location: "Localização"
  speakers: "Palestrantes"
  schedule: "Agenda"
  sponsors: "Patrocinadores"
  partners: "Parceiros"
  contact: "Contato"
```

Você ainda pode usar esse objeto para definir outras labels que você gostaria de acessar nos seus templates.

### Lista de Palestrantes

Para incluir/alterar/excluir um palestrante também é igualmente simples, basta recorrer ao `schedule`.

```
schedule: [
    name: "Chuck Norris"
    photo: "http://f.cl.ly/items/2A3p1N0C3c0n3N3R1w2B/speaker.jpg"
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
    company: "Delta Command"
    twitter: "littlechuck"
    presentation:
        title: "How to kill a elephant with one finger"
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
        time: "13h00"
]
```

Quer listar mais algum atributo do palestrante que não está ali? Tudo bem, é só adicionar no `docpad.js` e depois exibí-lo com `<%= speaker.seuNovoAtributo %>` no [speakers.html.eco](https://github.com/braziljs/conf-boilerplate/blob/master/src/partials/section/speakers.html.eco).

### Lista de outros itens da Agenda

Para alterar os horários de check-in, almoço e coffee-break, é só recorrer as variáveis de `schedule`.

```
schedule: [
    name: "Check-in / Breakfast"
    time: "9h00"
]
```

Mas se você quiser adicionar mais um coffee-break ou qualquer outro tipo de item na agenda do evento, é só acrescentar mais um item nessa lista.

### Lista de Patrocinadores/Apoio

Para adicionar qualquer patrocinador ou apoio no evento, é só recorrer as variáveis `sponsors` e `partners`.

```
partners: [
    name: "BrazilJS"
    logo: "http://f.cl.ly/items/2N3i2W0X2f3c2g2Z2N0f/Untitled-1.png"
    url: "http://braziljs.org"
]
```

## Deploy

Nós não gostamos de centralizar o poder de deploy em uma pessoa, portanto utilizaremos o recurso de [GitHub Pages](http://pages.github.com) que ainda é gratuito. Para realizar o deploy basta rodar:

```sh
$ npm run deploy
```

Espere alguns minutos até que o GitHub lhe envie um e-mail avisando que tudo ocorreu bem. Depois é só acessar: `http://seuUsuario.github.io/seuFork`

### Domínio personalizado

Caso você não queira utilizar o domínio do GitHub, é possível usar seu próprio com alguns passos.

1. Crie um arquivo `CNAME` na pasta `src/files` do seu projeto e preencha com o nome do seu domínio: `seuevento.com`.
2. Altere o DNS do seu domínio seguindo as [instruções do GitHub](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

### Como fazer Deploy sem utilizar GitHub Pages

Se você prefere utilizar seu próprio servidor para hospedar o site:

* Rode `npm run generate` na raíz do projeto.

Esse comando irá gerar uma pasta `out` contendo apenas arquivos estáticos, depois é só fazer o upload do conteúdo dessa pasta para sua hospedagem.

## Showcase

Confira os eventos que usaram esse projeto como pontapé inicial:

* [FrontInterior](http://frontinterior.com.br)
* [Random Hacks of Kindness](http://www.myskills.com.br/rhok-recife/)
* [yoLab](http://yodojo.github.com/yoLab/) ([source code](https://github.com/yodojo/yoLab))
* [Payphone Hackday](http://payphonehackday.com/) ([source code](https://github.com/octanebaby/conf-boilerplate))
* [RSJS](http://rsjs.org/) ([source code](https://github.com/braziljs/rsjs))
* [Front in BH](http://frontinbh.com.br/) ([source code](https://github.com/braziljs/front-in-bh))
* [Front in Rio](http://frontinrio.com.br/)
* [Front in Bahia](http://frontinbahia.com.br/)
* [Dev in Company BH](http://devincompanybh.github.io/setembro-2013/) ([source code](https://github.com/devincompanybh/setembro-2013/))
* [TEDx Recife](http://tedxrecife.com.br/)
* [DevFest](http://www.devfest.com.br/2013/)
* [DevFest Sul](http://www.devfestsul.com.br/)
* [Front in Floripa](http://frontinfloripa.com.br/)
* [Front in POA](http://frontinpoa.com.br/) ([source code](https://github.com/braziljs/front-in-poa))
* [mloc.js](http://mloc-js.com/2014/)
* [Craft Conf](http://craft-conf.com/2014/) ([source code](https://github.com/ustream/craftconf))
* [Stretch Conference](http://stretchcon.com/2013/)
* [Meet.us()](http://meetus.github.io/) ([source code](https://github.com/meetus/meetus.github.io))

Criou um site usando o ConfBoilerplate? Nos avise =D

## Forks

* [Versão em Ruby do ConfBoilerplate usando Jekyll por Mauro George](https://github.com/maurogeorge/conf_boilerplate_ruby)

## Contribuindo

Se quiser enviar um pull request, por favor faça-o na branch `dev`.

* `master` contém a versão estável disso.
* `dev` contém as funcionalidades que estão em desenvolvimento.

## Quem está por trás disso?

Nós somos um grupo de desenvolvedores que passaram por muitas dificuldades organizando conferências pelo Brasil e agora queremos ajudar outras pessoas nesse árduo trabalho.

**Criado por**:

* [Zeno Rocha](http://github.com/zenorocha)
* [Bernard De Luna](http://github.com/bernarddeluna)

Agradecimento especial a todos os membros da comunidade pelos feedbacks e contribuições.

## Licença

[MIT License](http://braziljs.mit-license.org/) © BrazilJS Foundation
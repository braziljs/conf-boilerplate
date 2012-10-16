# Conf Boilerplate

An iniciative of [BrazilJS Foundation](http://braziljs.org) to help those people who wants to organize conferences/events and don't have too much time to create the website of it.

* [Como funciona?](#como-funciona)
* [Estrutura](#estrutura)
* [Primeiros passos](#primeiros-passos)
* [Customização](#customiza%C3%A7%C3%A3o)
* [Deploy](#deploy)
* [Showcase](#showcase)
* [Quem está por trás disso?](#quem-est%C3%A1-por-tr%C3%A1s-disso)

## How it works?

We use [DocPad](https://github.com/bevry/docpad), a static generator in NodeJS, to create an easily customizable template. More than that, hosting is free via [Github Pages](http://pages.github.com) and you can use your own domain *(mais informações sobre isso em [Deploy](#dom%C3%ADnio-personalizado))*

By default, we have the following sections:

* *About* - to describe what's the main goal of your event.
* *Location* - to show where it's going to happen through Google Maps.
* *Speakers* - to list information about speakers.
* *Schedule* - to show the agenda.
* *Sponsors* - to show the brand of your sponsors.
* *Partners* - to show the brand of your partners.

*P.S. 1: There is no integration with any registration and/or payment system. For this reason, we recommend [Eventick](http://eventick.com.br/).*

*P.S. 2: We haven't developed a highly automated and customizable solution for contact forms yet. For this reason, we recommend [Wufoo](http://wufoo.com/).*

## Structure

The basic structure of the project is given in the following way:

<pre>
.
|-- out/
|-- src/
|   |-- documents
|   |-- files
|   |-- layouts
|   |-- partials
|-- docpad.cson
|-- package.json
`-- publish.sh
</pre>

### out/

This is where the generated files are stored, once DocPad has been runned. However, this directory is unnecessary in versioning, so it is ignored ([.gitignore](https://github.com/braziljs/conf-boilerplate/blob/master/.gitignore)).

### [src/documents](https://github.com/braziljs/conf-boilerplate/blob/master/src/documents)

Contains the file responsible for importing all sections of the application.

### [src/files](https://github.com/braziljs/conf-boilerplate/tree/master/src/files)

Has images, CSS, JS and [CNAME](https://github.com/braziljs/conf-boilerplate/blob/master/src/files/CNAME) that indicates the custom domain that should be used *(more information on how to use your own domain on [Deploy](#dom%C3%ADnio-personalizado))*.

### [src/layouts](https://github.com/braziljs/conf-boilerplate/tree/master/src/layouts)

Contains the default template of the application.

### [src/partials](https://github.com/braziljs/conf-boilerplate/tree/master/src/partials)

Are blocks of code used to generate the site's main page ([index.html](https://github.com/braziljs/conf-boilerplate/blob/master/src/documents/index.html.eco)).

### [docpad.cson](https://github.com/braziljs/conf-boilerplate/blob/master/docpad.cson)

Stores most settings of the application.

### [package.json](https://github.com/braziljs/conf-boilerplate/blob/master/package.json)

List NodeJS modules dependencies.

### [publish.sh](https://github.com/braziljs/conf-boilerplate/blob/master/publish.sh)

Shell Script responsible for publishing the site via via [Github Pages](http://pages.github.com).

## Getting Started

1. Install [Git](http://git-scm.com/downloads) and [NodeJS](http://nodejs.org/download/), if you don't have it yet.

2. Open your terminal and install [DocPad](https://github.com/bevry/docpad) through this command:

    sudo npm install -fg docpad@6.7

3. Now clone it:

    git clone git@github.com:braziljs/conf-boilerplate.git

4. Then go to the project's folder:

    cd conf-boilerplate

5. Install all dependencies:

    sudo npm install .

6. And finally run:

    docpad run

Now you can see the website running in `localhost:9778` :D

## Customization

The project already comes with a visual template, feel free to use it, but we recommend you create your own in order to put your own identity in the event.

Anyway, we have prepared something highly customizable for you, so for most of the changes just go to the `docpad.cson` and change the value of variables.

### Basic information about the conference

Do you want to change the name, date, address, city or price of the conference? Go ahead.

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

### Basic information about the website

Do you want to change the cover image, Google Analytics code or favicon? Go ahead!

```
site:
  url: "http://confboilerplate.com"
  favicon: "http://braziljs.org/favicon.ico"
  googleanalytics: "UA-33656081-1"
  images:
    cover: "http://f.cl.ly/items/2X28422q1e3w0C2U1P3H/866591_24254643.jpg"
    facebook: "http://braziljs.org/img/fb-share.jpg"
```

### Active sections

Still don't get a full schedule of the event? No problem, just set `schedule` variable to `false`.

Still don't get who is going to speak? Ok, just set `speakers` variable to `false`.

And so on.

```
sections:
  about: true
  location: true
  speakers: true
  schedule: true
  sponsors: true
  partners: true
  contact: false
```

### Speakers List

To add/change/exclude a speaker is equally simple, just see `schedule` variable.

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

Do you want to list an attribute of the speaker that is not there? Okay just add it on `docpad.cson` and then show it with `<%= speaker.seuNovoAtributo %>` on [speakers.html.eco](https://github.com/braziljs/conf-boilerplate/blob/master/src/partials/section/speakers.html.eco).

### List of another items on Agenda

To change the time of check-in, lunch and coffee-break, just see `schedule` variable.

```
schedule: [
  name: "Check-in / Breakfast"
  time: "9h00"
]
```

But if you want to add another coffee-creak or any kind of item on agenda, just add the item on the list.

### List of Sponsors/Partners

To add any sponsor or partner, just use `sponsors` and `partners` variables.

```
partners: [
  name: "BrazilJS"
  logo: "http://f.cl.ly/items/2N3i2W0X2f3c2g2Z2N0f/Untitled-1.png"
  url: "http://braziljs.org"
]
```

## Deploy

Nós não gostamos de centralizar o poder de deploy em uma pessoa, portanto utilizaremos o recurso de [Github Pages](http://pages.github.com) que ainda é gratuito.

* Dê permissão de execução para o script publish.sh - `chmod +x publish.sh`
* Rode `sh publish.sh` na raíz do projeto.

Espere alguns minutos até que o Github lhe envie um e-mail avisando que tudo ocorreu bem. Depois é só acessar: `http://seuUsuario.github.com/seuFork`

OBS: Lembre-se de remover o arquivo `CNAME` que está na pasta `src/files` do seu projeto, caso você queira utilizar a URL pré-definida pelo Github.

### Domínio personalizado

Caso você não queira utilizar o domínio do Github, é possível usar seu próprio com alguns passos.

1. Altere o arquivo `CNAME` que está na pasta `src/files` do seu projeto e preencha com o nome do seu domínio: `seuevento.com`. [Veja o exemplo](https://github.com/braziljs/conf-boilerplate/blob/master/src/files/CNAME).
2. Altere o DNS do seu domínio seguindo as [instruções do Github](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

### Como fazer sem Deploy utilizar Github Pages

Se você prefere utilizar seu próprio servidor para hospedar o site:

* Rode `docpad generate` na raíz do projeto.

Esse comando irá gerar uma pasta `out` contendo apenas arquivos estáticos, depois é só fazer o upload do conteúdo dessa pasta para sua hospedagem.

## Showcase

Confira os eventos que usaram esse projeto como pontapé inicial:

* [FrontInterior](http://frontinterior.com.br)

## Quem está por trás disso?

Nós somos um grupo de desenvolvedores que passaram por muitas dificuldades organizando conferências pelo Brasil e agora queremos ajudar outras pessoas nesse árduo trabalho.

**Líder do Projeto**: [Zeno Rocha](http://github.com/zenorocha)

Agradecimento especial a todos os membros da comunidade pelos feedbacks e contribuições.

<!-- ---

# Conf Boilerplate



## How it works?

We use [Jekyll](http://jekyllrb.com/), a static generator in Ruby, to create an easily customizable template. More than that, hosting is free via [Github Pages](http://pages.github.com) and you can use your own domain.

## Getting started

[Install Ruby](http://www.ruby-lang.org/en/downloads/) (>= 1.9.2), if you don't have it yet.

Now, the best way to install [Jekyll](http://jekyllrb.com/) is via [RubyGems](http://rubygems.org/):

  gem install jekyll

Also install Packr:

  gem install packr

Once Jekyll is installed, you just need to clone the project:

  git clone git@github.com:braziljs/conf-boilerplate.git

Then go to the project's folder:

  cd conf-boilerplate

And finally run:

  jekyll --server --auto

Now you can see the website running in `localhost:4000` :D

## Deploy

If you are using any plugin:

* Run `./publish.sh` on the root folder.

If you're not, just send your files to `gh-pages` branch:

  git push origin gh-pages

## Who is behind of it?

We're a group of developers who have been through hard times organizing conferences around Brazil.

**Project Lead**: [Zeno Rocha](http://github.com/zenorocha) -->


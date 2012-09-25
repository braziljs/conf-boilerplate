# Conf Boilerplate

Uma iniciativa da [BrazilJS Foundation](http://braziljs.org) para ajudar aqueles que querem organizar conferências/eventos e não tem muito tempo para criar o site disso.

* [Como funciona?](https://github.com/braziljs/conf-boilerplate#como-funciona)
* [Primeiros passos](https://github.com/braziljs/conf-boilerplate#primeiros-passos)
* [Customização](https://github.com/braziljs/conf-boilerplate#customiza%C3%A7%C3%A3o)
* [Deploy](https://github.com/braziljs/conf-boilerplate#deploy)
* [Quem está por trás disso?](https://github.com/braziljs/conf-boilerplate#quem-est%C3%A1-por-tr%C3%A1s-disso)

## Como funciona?

Nós usamos o [Jekyll](http://jekyllrb.com/), um static generator em Ruby, para criar esse modelo extremamente simples de customizar. Além disso, a hospedagem é gratuita via [Github Pages](http://pages.github.com) e você ainda pode usar seu próprio domínio.

## Primeiros passos

[Instale o Ruby](http://www.ruby-lang.org/pt/downloads/), caso você não tenha ainda.

Agora, instale o [Jekyll](http://jekyllrb.com/) através do comando:

	make install

Uma vez tendo instalado, você só precisa clonar o projeto:

	git clone git@github.com:braziljs/conf-boilerplate.git

Depois vá para pasta do projeto:

	cd conf-boilerplate

E finalmente rode:

	make run

Agora você irá ver o site rodando em `localhost:4000` :D

## Customização

O projeto já vem com um template pronto pra você, use-o à vontade, mas nós recomendamos que você crie seu próprio, a fim de colocar sua própria cara no evento.

De qualquer forma, nós preparamos algo altamente customizável para você, portanto para maioria das alterações do projeto basta ir até o `_config.yml` e alterar o valor das variáveis.

### Informações básicas

Quer alterar o nome, data, endereço, cidade ou preço do evento? É só mudar.

```
conf:
  name: Conference name
  date: November 15
  venue: Coco Bongo
  city: Cancún
  price: $100`
```

### Seções ativas

Ainda não definiu a programação completa do evento? Não tem problema, basta alterar a variável `schedule` para `false`.

Ainda não sabe quem irá palestrar? Tudo bem, basta alterar a variável `speakers` para `false`.

E por aí vai.

```
sections:
  about: true
  location: true
  speakers: true
  schedule: true
  sponsors: true
  partners: true
  contact: true
```

### Lista de Palestrantes

Para incluir ou excluir um palestrante também é igualmente simples, basta adicionar mais um item na variável `speakers`.

```
speakers:
  - name: Chuck Norris
    bio: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    twitter: littlechuck
    presentation:
      title: How to kill a elephant with one finger
      description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      time: '13h00'
```

Quer listar mais algum atributo do palestrante que não está ali, tudo bem é só adicionar.

### Lista de outros itens da Agenda

Para alterar os horários de check-in, almoço e coffee-break, é só recorrer as variáveis de `schedule`.

```
schedule:
  - name: Check-in / Breakfast
    time: '9h00'
  - name: Lunch
    time: '12h00'
  - name: Coffee-break
    time: '15h00'
```

Mas se você quiser adicionar mais um coffee-break ou qualquer outro tipo de item na agenda do evento, é só acrescentar mais um item nessa lista.

### Lista de Patrocinadores/Apoio

Para adicionar qualquer patrocinador ou apoio no evento, é só recorrer as variáveis `sponsors` e `partners`.

```
sponsors:
  - name: Eventick
    logo: http://frontinbh.com.br/assets/imagens/apoiadores/eventick.png
    url: http://eventick.com.br
```

## Deploy

Para isso utilizaremos o recurso de [Github Pages](http://pages.github.com).

* Rode `make deploy` na raíz do projeto.

Depois é só acessar: `http://seuUsuario.github.com/seuFork`

### Domínio personalizado

Caso você não queira utilizar o domínio do Github, é possível usar seu próprio com alguns passos.

1. Altere o arquivo `CNAME` na raíz do seu projeto e preencha com o nome do seu domínio: `seuevento.com`. [Veja o exemplo](https://github.com/braziljs/conf-boilerplate/blob/master/CNAME).
2. Altere o DNS do seu domínio seguindo as [instruções do Github](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).


## Quem está por trás disso?

Nós somos um grupo de desenvolvedores que passaram por muitas dificuldades organizando conferências pelo Brasil.

**Líder do Projeto**: [Zeno Rocha](http://github.com/zenorocha)

<!-- ---

# Conf Boilerplate

An iniciative of [BrazilJS Foundation](http://braziljs.org) to help those people who wants to organize conferences/events and don't have too much time to create the website of it.

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
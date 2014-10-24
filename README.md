*[Leia a documentação em Português](https://github.com/braziljs/conf-boilerplate/blob/master/README-pt.md)*

---

# Conf Boilerplate [![Build Status](https://secure.travis-ci.org/braziljs/conf-boilerplate.png?branch=master)](https://travis-ci.org/braziljs/conf-boilerplate)

![image](http://f.cl.ly/items/2i1m3z3i1a3Z0I1X472B/logo.jpg)

An iniciative of [BrazilJS Foundation](http://braziljs.org) to help those people who wants to organize conferences/events and don't have too much time to create the website of it.

> **Maintainer:** [Jean Carlo Emer](https://github.com/jcemer)

## Table of contents

* [See live demo](http://braziljs.github.io/conf-boilerplate/)
* [How it works?](#how-it-works)
* [Getting Started](#getting-started)
* [Structure](#structure)
* [Customization](#customization)
* [Deploy](#deploy)
* [Showcase](#showcase)
* [Contributing](#contributing)
* [Who is behind it?](#who-is-behind-it)
* [License](#license)

## How it works?

[![image](http://f.cl.ly/items/1q3i0r3q0n3y1N070M47/Screen%20Shot%202012-11-16%20at%207.05.44%20PM.png)](http://www.youtube.com/watch?v=EI99oZI3nKY)

We use [DocPad](https://github.com/bevry/docpad), a static generator in NodeJS, to create an easily customizable template. More than that, hosting is free via [GitHub Pages](http://pages.github.com) and you can use your own domain *(more information about that on [Deploy](#custom-domain))*

By default, we have the following sections:

* *About* - to describe what's the main goal of your event.
* *Location* - to show where it's going to happen through Google Maps.
* *Speakers* - to list information about speakers.
* *Schedule* - to show the agenda.
* *Sponsors* - to show the brand of your sponsors.
* *Partners* - to show the brand of your partners.

*P.S. 1: There is no integration with any registration and/or payment system. For this reason, we recommend [Eventick](http://eventick.com.br/).*

*P.S. 2: We haven't developed a highly automated and customizable solution for contact forms yet. For this reason, we recommend [Wufoo](http://wufoo.com/).*

## Getting Started

1. Install [Git](http://git-scm.com/downloads) and [NodeJS](http://nodejs.org/download/), if you don't have it yet.

2. Now clone it:

    ```sh
    $ git clone git://github.com/braziljs/conf-boilerplate.git
    ```

3. Then go to the project's folder:

    ```sh
    $ cd conf-boilerplate
    ```

4. Install all dependencies:

    ```sh
    $ npm install
    ```

5. And finally run:

    ```sh
    $ npm run watch
    ```

Now you can see the website running in `localhost:9778` :D

## Structure

The basic structure of the project is given in the following way:

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

This is where the generated files are stored, once DocPad has been runned. However, this directory is unnecessary in versioning, so it is ignored ([.gitignore](https://github.com/braziljs/conf-boilerplate/blob/master/.gitignore)).

### [src/documents](https://github.com/braziljs/conf-boilerplate/blob/master/src/documents)

Contains the file responsible for importing all sections of the application. Also all theme's assets like images, CSS and JS.

### [src/layouts](https://github.com/braziljs/conf-boilerplate/tree/master/src/layouts)

Contains the default template of the application.

### [src/partials](https://github.com/braziljs/conf-boilerplate/tree/master/src/partials)

Are blocks of code used to generate the site's main page ([index.html](https://github.com/braziljs/conf-boilerplate/blob/master/src/documents/index.html.eco)).

### [docpad.js](https://github.com/braziljs/conf-boilerplate/blob/master/docpad.js)

Stores most settings of the application.

### [package.json](https://github.com/braziljs/conf-boilerplate/blob/master/package.json)

List NodeJS modules dependencies.

### [publish.sh](https://github.com/braziljs/conf-boilerplate/blob/master/publish.sh)

Shell Script responsible for publishing the site via via [GitHub Pages](http://pages.github.com).

## Customization

The project already comes with a visual template, feel free to use it, but we recommend you create your own in order to put your own identity in the event.

Anyway, we have prepared something highly customizable for you, so for most of the changes just go to the `docpad.js` and change the value of variables.

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
  theme: "yellow-swan"
  url: "http://braziljs.github.io/conf-boilerplate/"
  googleanalytics: "UA-33656081-1"
```

### Active sections

Still don't get a full schedule of the event? No problem, just comment out `schedule` line (using `#`).

Still don't get who is going to speak? Ok, just comment out `speakers` line (using `#`).

And so on.

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

You can also change order in which they appear on page and in navigation by changing order of lines here!

### Labels (i18n)

If you want to use different words than default or different language
just change labels for corresponding elements:


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

You can also use this object to define other labels, which you would like to access in your templates.

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

Do you want to list an attribute of the speaker that is not there? Okay just add it on `docpad.js` and then show it with `<%= speaker.yourNewAttribute %>` on [speakers.html.eco](https://github.com/braziljs/conf-boilerplate/blob/master/src/partials/section/speakers.html.eco).

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

We don't like to centralize the power of deploy in one person, so we'll use [GitHub Pages](http://pages.github.com) that is free. You just need to run:

```sh
$ npm run deploy
```

Wait a few minutes until GitHub send you an email telling that everything went well. Then just access: `http://yourUser.github.io/yourFork`

### Custom domain

If you don't want to use GitHub domain, you can use your own with a few steps.

1. Create a `CNAME` file under `src/files` folder and fill with your domain: `yourevent.com`.
2. Change the DNS of your domain [following GitHub instructions](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

### How to Deploy without GitHub Pages

If you want to use your own server to host the website:

* Run `npm run generate` on the root of the project.

This command will generate a folder called `out` that contains just static files, then just upload them to your server.

## Showcase

See the conferences that already used this project as a kickstart:

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

Have you created a website using ConfBoilerplate? Let's us know =D

## Forks

* [Ruby version of ConfBoilerplate made with Jekyll by Mauro George](https://github.com/maurogeorge/conf_boilerplate_ruby)

## Contributing

If you want to submit a pull request, please do it in `dev` branch.

* `master` contains the stable version of it.
* `dev` contains features that are being developed.

## Who is behind it?

We're a group of developers who have been through hard times organizing conferences around Brazil and now just want to help another people to do this hard task.

**Created by**:

* [Zeno Rocha](http://github.com/zenorocha)
* [Bernard De Luna](http://github.com/bernarddeluna)

Special thanks to all community members for feedbacks and contributions.

## License

[MIT License](http://braziljs.mit-license.org/) © BrazilJS Foundation
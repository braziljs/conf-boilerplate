module.exports =

  # These are variables will be accessible via our templates
  templateData:

    #Template
    template:
      FrontIn: true

    # Conference info
    conf:
      name: "Front In BH 2013"
      description: "Maior evento de Front-end do Brasil"
      date: "13 Julho"
      price: "R$ 50,00"
      venue: "UNI-BH Teatro Ney Soares"
      address: "UNI-BH, Rua Diamantina, lagoinha, Belo Horizonte, Minas Gerais"
      city: "Belo Horizonte"
      state: "MG"
      eventick: "http://eventick.com.br/FrontInBH2013"

    # Site info
    site:
      url: "http://confboilerplate.com"
      googleanalytics: "UA-33656081-1"
      images:
        cover: "http://www.wfotografias.com.br/wp-content/gallery/beaga/destaque_bh-6-of-14.jpg"
        facebook: "http://braziljs.org/img/fb-share.jpg"
        logo: "img/logo.png"

    # Active sections on the website
    # to deactivate comment out with '#'
    # you can also change order here and it will reflect on page
    sections: [
      'about'
      'location'
      'speakers'
      'schedule'
      'sponsors'
      'partners'
      #'contact'
    ]

    # Labels which you can translate to other languages
    labels:
      about: "Sobre"
      location: "Localização"
      speakers: "Palestrantes"
      schedule: "Patrocinadores"
      sponsors: "Apoio"
      partners: "Partners"
      contact: "Contato"

    # The entire schedule
    schedule: [
      name: "Check-in / Breakfast"
      time: "9h00"
    ,
      name: "Giovanni Keppelen"
      photo: "https://raw.github.com/braziljs/foundation/master/img/avatar/giovanni.jpg"
      bio: "Co-funder da BrazilJS Foundation, idealizador e organizador do Front In BH,  Rio.JS. Já foi Frontend Engineer no Peixe Urbano, hoje é Cordenador Frontend na Mobicare. Graduando em Produção Multimídia pela UNI-BH."
      company: "Mobicare"
      twitter: "keppelen"
      github: "keppelen"
      personal: "bygiovanni.com.br"
      presentation:
        title: "Comunidades e seu poder sobre mundo Open source ou não"
        description: "O grande poder das comunidades, como isso pode influenciar em sua carreira profissional e particular, e o retorno e felicidade que pode se ter em sua vida."
        time: "10h00"
    ]

    # List of Sponsors
    sponsors: [
      name: "Eventick"
      logo: "http://eventick.com.br/assets/eventick-logo-header.png"
      url: "http://eventick.com.br"
    ,
      name: "Globo.com"
      logo: "img/globo.png"
      url: "http://globo.com"
    ,
      name: "BrazilJS"
      logo: "http://f.cl.ly/items/2N3i2W0X2f3c2g2Z2N0f/Untitled-1.png"
      url: "http://braziljs.org"
    ]

    # List of Partners
    partners: [
      name: "BrazilJS"
      logo: "http://f.cl.ly/items/2N3i2W0X2f3c2g2Z2N0f/Untitled-1.png"
      url: "http://braziljs.org"
    ]

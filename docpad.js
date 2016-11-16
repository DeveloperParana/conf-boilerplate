module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Dev Paraná Conference",
      description: "2016",
      date: "26 de Novembro",
      logo: "themes/devparana-conf-2016/img/logo.svg",
      // If your event is free, just comment this line
      price: "",
      venue: "SEBRAE MARINGÁ",
      address: "Av. Bento Munhoz da Rocha Neto, 1116 - Zona 7",
      city: "Maringá",
      state: "Paraná",
      keyMapApi: "AIzaSyDWpbeLbFKUPzCBv-7oce-ANxdo1mzvGaw"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Participar",
        link: "#eventick"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/braziljs/conf-boilerplate"
    // },

    // Site info
    site: {
      theme: "devparana-conf-2016",
      url: "http://www.devparana.org/conf",
      googleanalytics: "UA-69209115-4"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'speakers',
      'schedule',
      'eventick',
      'sponsors',
      'partners',
      'location'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O EVENTO",
      location: "LOCALIZAÇÃO DO EVENTO",
      speakers: "OS PALESTRANTES",
      schedule: "CRONOGRAMA",
      sponsors: "PATROCINADORES",
      partners: "APOIO",
      eventick: "FAÇA SUA INSCRIÇÃO",
      contact: "CONTATO"
    },

    // The speakers
    speakers: [
      {
        name: "Maujor",
        photo: "themes/devparana-conf-2016/img/speakers/maujor.jpg",
        bio: "",
        company: "Dinossauro do CSS",
        link: {
          href: "http://twitter.com/maujor",
          text: "@maujor"
        }
      },
      {
        name: "Edson Yanaga",
        photo: "themes/devparana-conf-2016/img/speakers/yanaga.jpg",
        bio: "",
        company: "Red Hat",
        link: {
          href: "http://github.com/yanaga",
          text: "@yanaga"
        }
      },
      {
        name: "Jaydson Gomes",
        photo: "themes/devparana-conf-2016/img/speakers/jaydson.jpg",
        bio: "Jaydson Gomes tem +de 12 anos de experiência em desenvolvimento Web.",
        company: "Nasc",
        link: {
          href: "http://twitter.com/jaydson",
          text: "@jaydson"
        }
      },
      {
        name: "Guilherme Berghauser",
        photo: "themes/devparana-conf-2016/img/speakers/torto.jpg",
        bio: "",
        company: "",
        link: {
          href: "https://twitter.com/tortoyo",
          text: "@tortoyo"
        }
      },
      {
        name: "Fábio Rogério SJ",
        photo: "themes/devparana-conf-2016/img/speakers/fabio.jpg",
        bio: "Fábio Rogério da Silva José​, conhecido como Fábio Rogério SJ nas redes sociais, é desenvolvedor de aplicações web e mobile desde quando o Internet Explorer 7 erá um pesadelo e desenvolver aplicativos híbridos com tecnologias web era um trabalho árduo, ou seja, desde 2007. Atualmente Fábio Rogério trabalha como desenvolvedor Web no Grupo Benner e presta serviço de consultoria e treinamento em desenvolvimento de aplicações web e mobile utilizando tecnologias híbridas. Fábio também é professor, de curso superior, onde ministra as disciplinas de desenvolvimento frontend, desenvolvimento de aplicativos móveis, web design, design de interação e lógica de programação.",
        company: "",
        link: {
          href: "https://twitter.com/fabiorogeriosj",
          text: "@FabioRogerioSJ"
        }
      },
      {
        name: "Eduardo Spaki",
        photo: "themes/devparana-conf-2016/img/speakers/eduardo.jpg",
        bio: "Arquiteto de Software, atua há 14 anos com desenvolvimento de tecnologias, tendo participado de projetos em diversos países. É especialista em softwares para a Internet e possui MBA em Gerência de Projetos. Já publicou livro e artigos na área de tecnologia e vem palestrando sobre carreira profissional, inovação e TI.",
        company: "",
        link: {
          href: "https://twitter.com/eduardospaki",
          text: "@eduardospaki"
        }
      },
      {
        name: "Anderson M Fernandes",
        photo: "themes/devparana-conf-2016/img/speakers/burnes.jpg",
        bio: "Mestre em Informática pela UTFPR, Desenvolvedor Web desde 1999, Professor de Graduação e Pós-Graduação, Palestrante e degustador de Bacon. Atua ainda como sócio, desenvolvedor e gestor de e-commerce na Uniti, onde mantem parcerias com as lojas Vida de Programador, Vida de Suporte, Bugginho Developer e o Compra Canibal dos Irmãos Piologo.",
        company: "Faculdade Alfa",
        link: {
          href: "https://twitter.com/professorburnes",
          text: "@ProfessorBurnes"
        }
      },
      {
        name: "Munif Gebara Junior",
        photo: "themes/devparana-conf-2016/img/speakers/munif.jpg",
        bio: "Possui graduação em Ciência da Computação pela Universidade Estadual de Maringá (1997) e mestrado em Engenharia Elétrica e Informática Industrial pela Universidade Tecnológica Federal do Paraná (2001). Atualmente é professor da Fundação Faculdade de Filosofia Ciências e Letras de Mandaguari e professor de ensino superior Unicesumar e desenvolvedor na GUMGA S/A.",
        company: "GUMGA S/A",
        link: {
          href: "https://twitter.com/munifgebara",
          text: "@munifgebara"
        }
      }
    ],

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast",
        time: "8h00"
      },
      {
        name: "Maujor",
        photo: "themes/devparana-conf-2016/img/speakers/maujor.jpg",
        bio: "",
        company: "Dinossauro do CSS",
        link: {
          href: "http://twitter.com/maujor",
          text: "@maujor"
        },
        presentation: {
          title: "CSS - Uma tecnologia em constante evolução",
          description: "",
          time: "09h30"
        }
      },
      {
        name: "Edson Yanaga",
        photo: "themes/devparana-conf-2016/img/speakers/yanaga.jpg",
        bio: "",
        company: "Red Hat",
        link: {
          href: "http://github.com/yanaga",
          text: "@yanaga"
        },
        presentation: {
          title: "DevOps e Containers: como o Open Source está mudando a entrega de software",
          description: "Nesse novo mundo com novos modelos econômicos surgindo nós temos que entregar software em produção cada vez melhor, mais rápido e de modo mais seguro. DevOps é o movimento atual para conseguirmos alcançar esse objetivo, e Containers é uma das tecnologias que fazem parte de toda essa inovação. Venha aprender como Containers e diversas ferramentas Open Source estão habilitando o movimento de DevOps para entregar software mais rápido em produção.",
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Jaydson Gomes",
        photo: "themes/devparana-conf-2016/img/speakers/jaydson.jpg",
        bio: "Jaydson Gomes tem +de 12 anos de experiência em desenvolvimento Web.",
        company: "Nasc",
        link: {
          href: "http://twitter.com/jaydson",
          text: "@jaydson"
        },
        presentation: {
          title: "Como ser um bom dev FrontEnd em 2017",
          description: "Nos últimos o chamado desenvolvimento FrontEnd nasceu e cresceu de tal maneira que, para muitos, atingiu demasiada complexidade. De fato, a evolução do JavaScript, do HTML e do CSS, resultou no nascimento de uma variedade de novos conceitos, ferramentas, bibliotecas e frameworks. Como se manter atualizado e relevante em um ambiente tão volátil? Como ser um bom desenvolvedor FrontEnd? Nesta palestra Jaydson irá mostrar sua visão do mundo FrontEnd e o que é necessário para se tornar um bom desenvolvedor FrontEnd em 2017.",
          time: "13h00"
        }
      },
      {
        name: "Guilherme Berghauser",
        photo: "themes/devparana-conf-2016/img/speakers/torto.jpg",
        bio: "",
        company: "",
        link: {
          href: "https://twitter.com/tortoyo",
          text: "@tortoyo"
        },
        presentation: {
          title: "REACT",
          description: "Uma introdução ao framework e demonstração das possibilidades de sua utilização.",
          time: "09h50"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Fábio Rogério SJ",
        photo: "themes/devparana-conf-2016/img/speakers/fabio.jpg",
        bio: "Fábio Rogério da Silva José​, conhecido como Fábio Rogério SJ nas redes sociais, é desenvolvedor de aplicações web e mobile desde quando o Internet Explorer 7 erá um pesadelo e desenvolver aplicativos híbridos com tecnologias web era um trabalho árduo, ou seja, desde 2007. Atualmente Fábio Rogério trabalha como desenvolvedor Web no Grupo Benner e presta serviço de consultoria e treinamento em desenvolvimento de aplicações web e mobile utilizando tecnologias híbridas. Fábio também é professor, de curso superior, onde ministra as disciplinas de desenvolvimento frontend, desenvolvimento de aplicativos móveis, web design, design de interação e lógica de programação.",
        company: "",
        link: {
          href: "https://twitter.com/fabiorogeriosj",
          text: "@FabioRogerioSJ"
        },
        presentation: {
          title: "Desenvolvimento híbrido para mobile e desktop",
          description: "Passamos por muitas mudanças na evolução das plataformas de interação entre sistemas e usuários. Quando migramos do desktop para web um mundo de possibilidades, para os desenvolvedores, foi criado e hoje vivemos a expansão de aplicações web para o desktop, mas o que acontece com o mundo de possibilidades? Desenvolver aplicações híbridas é trazer todo o poder das tecnologias web para o desktop e mobile.",
          time: ""
        }
      },
      {
        name: "Eduardo Spaki",
        photo: "themes/devparana-conf-2016/img/speakers/eduardo.jpg",
        bio: "Arquiteto de Software, atua há 14 anos com desenvolvimento de tecnologias, tendo participado de projetos em diversos países. É especialista em softwares para a Internet e possui MBA em Gerência de Projetos. Já publicou livro e artigos na área de tecnologia e vem palestrando sobre carreira profissional, inovação e TI.",
        company: "",
        link: {
          href: "https://twitter.com/eduardospaki",
          text: "@eduardospaki"
        },
        presentation: {
          title: "Progressive Web Apps, será essa a nova tendência!?",
          description: "A tecnologia tem suas modas e vive se reinventando. Já tivemos a web, web 2.0, mobile, apps... Mas o que será que virá a seguir? Que tal conhecer um pouco do que os Progressive Web Apps tem para oferecer à este mundo cada vez mais conectado.",
          time: ""
        }
      },
      {
        name: "Anderson M Fernandes",
        photo: "themes/devparana-conf-2016/img/speakers/burnes.jpg",
        bio: "Mestre em Informática pela UTFPR, Desenvolvedor Web desde 1999, Professor de Graduação e Pós-Graduação, Palestrante e degustador de Bacon. Atua ainda como sócio, desenvolvedor e gestor de e-commerce na Uniti, onde mantem parcerias com as lojas Vida de Programador, Vida de Suporte, Bugginho Developer e o Compra Canibal dos Irmãos Piologo.",
        company: "Faculdade Alfa",
        link: {
          href: "https://twitter.com/professorburnes",
          text: "@ProfessorBurnes"
        },
        presentation: {
          title: "Realidade: Virtual ou Aumentada?",
          description: "Palestra sobre os temas Realidade Virtual e Aumentada, diferenças e aplicações para Web e Dispositivos Móveis. Nesta palestra são apresentados ao público de maneira prática o funcionamento, utilizando um Óculos de RV e o Sphero com um game com RA (https://www.youtube.com/watch?v=UPn3jVGQw68), além de discorrer sobre o sucesso do Pokemon Go e ferramentas de desenvolvimento Web.",
          time: ""
        }
      },
      {
        name: "Munif Gebara Junior",
        photo: "themes/devparana-conf-2016/img/speakers/munif.jpg",
        bio: "Possui graduação em Ciência da Computação pela Universidade Estadual de Maringá (1997) e mestrado em Engenharia Elétrica e Informática Industrial pela Universidade Tecnológica Federal do Paraná (2001). Atualmente é professor da Fundação Faculdade de Filosofia Ciências e Letras de Mandaguari e professor de ensino superior Unicesumar e desenvolvedor na GUMGA S/A.",
        company: "GUMGA S/A",
        link: {
          href: "https://twitter.com/munifgebara",
          text: "@munifgebara"
        },
        presentation: {
          title: "Introdução a Microserviços",
          description: "A era de grandes sistemas monolíticos esta acabando, sua manutenção, sua homogeneidade em tecnologias, suas necessidades específicas não tem mais espaço no mundo heterogêneo atual. Com a utilização de microserviços é possível criar soluções realmente reutulizáveis, heterogêneas e independentes de tecnologias. Esta paletra tem o objetivo de descrever as tecnologias de microserviços mostrando os conceitos e implementações da NetFlix utilizando como exemplo Spring e Java .",
          time: ""
        }
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Sicredi União",
        logo: "themes/devparana-conf-2016/img/sicredi.png",
        url: "http://sicredi.com.br"
      },
      {
        name: "RedHat",
        logo: "themes/devparana-conf-2016/img/redhat.png",
        url: "http://redhat.com"
      },
    ],

    // List of Partners
    partners: [
      {
        name: "SEBRAE Maringá",
        logo: "themes/devparana-conf-2016/img/sebrae.png",
        url: "http://www.sebraepr.com.br/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};

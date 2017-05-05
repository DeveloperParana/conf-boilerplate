module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Dev Paraná Conference 2017",
      description: "Conferência para desenvolvedores do Dev Paraná edição 2017",
      date: "22 de Julho",
      logo: "themes/devparana-conf-2017/img/logo.png",
      // If your event is free, just comment this line
      // price: "",
      venue: "Sebrae",
      address: "Av. Bento Munhoz da Rocha Neto, 1116 - Zona 7",
      city: "Maringá",
      state: "Paraná",
      keyMapApi: "AIzaSyDWpbeLbFKUPzCBv-7oce-ANxdo1mzvGaw"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "FAZER INSCRIÇÃO",
        link: "#eventick"
    },

    // Site info
    site: {
      theme: "devparana-conf-2017",
      url: "http://www.devparana.org/conf",
      googleanalytics: "UA-69209115-4"
    },

    sections: [
      'about',
      'speakers',
      // 'schedule',
      // 'eventick',
      'sponsors',
      'partners',
      'location',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O EVENTO",
      location: "LOCALIZAÇÃO",
      speakers: "PALESTRANTES",
      schedule: "CRONOGRAMA",
      sponsors: "PATROCINADORES",
      partners: "APOIO",
      // eventick: "INSCRIÇÃO",
      contact: "CONTATO"
    },

    // The speakers
    speakers: [
      {
        name: "Alê Borba",
        photo: "themes/devparana-conf-2017/img/speakers/aleborba.png",
        bio: "",
        company: "Google",
        link: {
          href: "https://github.com/aleborba",
          text: "@aleborba"
        }
      },
      {
        name: "Otavio Santana",
        photo: "themes/devparana-conf-2017/img/speakers/otavio.jpg",
        bio: "Engenheiro de Software na Tomitribe e Committer da Apache",
        company: "Tomitribe",
        link: {
          href: "https://github.com/otaviojava",
          text: "@otaviojava"
        }
      },
      {
        name: "Loiane Groner",
        photo: "themes/devparana-conf-2017/img/speakers/loiane.jpg",
        bio: "",
        company: "Desenvolvedora fullstack e escritora",
        link: {
          href: "http://loiane.com",
          text: "@loiane"
        }
      },
      {
        name: "Jeferson Fernando Noronha",
        photo: "themes/devparana-conf-2017/img/speakers/jeferson.jpg",
        bio: "",
        company: "LinuxTips",
        link: {
          href: "https://www.youtube.com/linuxtips",
          text: "@badtux_"
        }
      }
    ],

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento / Café",
        time: "8h00"
      },
      {
        name: "Abertura",
        time: "9h15"
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
          time: "10h20"
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
          description: "Algumas demonstrações da flexibilidade e das possibilidades de sua utilização.",
          time: "11h10"
        }
      },
      {
        name: "Almoço",
        time: "12h00"
      },
      {
        name: "Abertura e sorteios",
        time: "13h20"
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
          time: "13h30"
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
        },
        presentation: {
          title: "Como ser um bom dev FrontEnd em 2017",
          description: "Nos últimos o chamado desenvolvimento FrontEnd nasceu e cresceu de tal maneira que, para muitos, atingiu demasiada complexidade. De fato, a evolução do JavaScript, do HTML e do CSS, resultou no nascimento de uma variedade de novos conceitos, ferramentas, bibliotecas e frameworks. Como se manter atualizado e relevante em um ambiente tão volátil? Como ser um bom desenvolvedor FrontEnd? Nesta palestra Jaydson irá mostrar sua visão do mundo FrontEnd e o que é necessário para se tornar um bom desenvolvedor FrontEnd em 2017.",
          time: "15h10"
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
      {
        name: "Coffee Break",
        time: "16h00"
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
          time: "16h30"
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
          time: "17h30"
        }
      },
      {
        name: "Encerramento",
        time: "18h30"
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Google Developers",
        logo: "themes/devparana-conf-2017/img/google-developers.svg",
        url: "https://developers.google.com"
      },
      {
        name: "Tomitribe",
        logo: "themes/devparana-conf-2017/img/tomitribe.svg",
        url: "http://www.tomitribe.com"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "SEBRAE Maringá",
        logo: "themes/devparana-conf-2017/img/sebrae.svg",
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

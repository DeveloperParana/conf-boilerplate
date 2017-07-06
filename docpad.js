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
      'schedule',
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
      schedule: "AGENDA",
      sponsors: "PATROCINADORES",
      partners: "APOIO",
      // eventick: "INSCRIÇÃO",
      contact: "CONTATO"
    },

    // The speakers
    speakers: [
      {
        name: "Alê Borba",
        photo: "themes/devparana-conf-2017/img/speakers/aleborba.jpg",
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
        bio: "",
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
        company: "Citibank",
        link: {
          href: "https://github.com/loiane",
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
      },
      {
        name: "Leonardo Saraiva",
        photo: "themes/devparana-conf-2017/img/speakers/vyper.jpg",
        bio: "",
        company: "Parafuzo",
        link: {
          href: "https://github.com/vyper",
          text: "@vyper"
        }
      },
      {
        name: "Rodrigo Nonose",
        photo: "themes/devparana-conf-2017/img/speakers/nonose.jpg",
        bio: "",
        company: "Digital Natives",
        link: {
          href: "https://github.com/rhnonose",
          text: "@rhnonose"
        }
      },
      {
        name: "Raphael Amorim",
        photo: "themes/devparana-conf-2017/img/speakers/raphael.jpg",
        bio: "",
        company: "Globo.com",
        link: {
          href: "https://github.com/raphamorim",
          text: "@raphamorim"
        }
      },
      {
        name: "Sebastian Ferrari",
        photo: "themes/devparana-conf-2017/img/speakers/sebastian.jpg",
        bio: "",
        company: "Taller",
        link: {
          href: "https://github.com/sebas5384",
          text: "@sebas5384"
        }
      }
    ],

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento",
        time: "8h00"
      },
      {
        name: "Abertura",
        time: "8h30"
      },
      {
        name: "Alê Borba",
        photo: "themes/devparana-conf-2017/img/speakers/aleborba.jpg",
        bio: "",
        company: "Google",
        link: {
          href: "https://github.com/aleborba",
          text: "@aleborba"
        },
        presentation: {
          title: "",
          description: "Em breve",
          time: "08h40"
        }
      },
      {
        name: "Raphael Amorim",
        photo: "themes/devparana-conf-2017/img/speakers/raphael.jpg",
        bio: "Entusiasta da open web e software livre. Software Developer na globo.com e membro da JS foundation e jQuery team. Já trabalhou como desenvolvedor em empresas como Videolog e Petrobras. Em 2015, foi um dos desenvolvedores de software mais notáveis no GitHub, tendo feito contribuições significativas para projetos de código aberto por 500 dias seguidos. Orador em mais de vinte conferências dando palestras sobre tecnologias web como JavaScript / ES6, Web Performance, React e Canvas / WebGL.",
        company: "Globo.com",
        link: {
          href: "https://github.com/raphamorim",
          text: "@raphamorim"
        },
        presentation: {
          title: "Merging Products with Components",
          description: "Nesta palestra, veremos o case da plataforma de vídeos da globo.com, onde em diversos produtos com times diferentes havia a necessidade de unificar tanto componentes visuais quanto fonte de dados (que são baseadas em APIs diferentes, de produtos diferentes [globoplay, globosatplay, sportv, telecine…]), logo surgiu uma plataforma de componentes dentro da área de vídeos da globo.com. A ideia é contar sobre as escolhas de arquitetura e de nível técnico voltadas para atender diversos produtos, times, fontes de dados.",
          time: "09h30"
        }
      },
      {
        name: "Jeferson F. Noronha",
        photo: "themes/devparana-conf-2017/img/speakers/jeferson.jpg",
        bio: "",
        company: "LinuxTips",
        link: {
          href: "https://www.youtube.com/linuxtips",
          text: "@badtux_"
        },
        presentation: {
          title: "Descomplicando o Docker",
          description: "Vamos abordar de maneira muito leve e divertida tudo o que você precisa saber para criar, administrar e escalar containers utilizando Docker! Traga seu notebook, pois como sempre será prático! #VAIIII",
          time: "10h20"
        }
      },
      {
        name: "Leonardo Saraiva",
        photo: "themes/devparana-conf-2017/img/speakers/vyper.jpg",
        bio: "Co-fundador do GURU-PR e do WSO2 Brasil! Organizador do Tech Day, que ocorre anualmente em Curitiba. Desenvolvedor louco por tecnologia, atualmente surfando na onda de ruby, rails, hanami, go, grpc, docker, microserviços e kubernetes. Mas com experiência em sinatra, python (django), java, c# e um pouco de tudo, mas já não tão ativamente.",
        company: "Parafuzo",
        link: {
          href: "https://github.com/vyper",
          text: "@vyper"
        },
        presentation: {
          title: "Liberdade e escalabilidade: Microserviços, Kubernetes, gRPC e Docker",
          description: "Usando Kubernetes e Docker é possível entregar uma arquitetura de microserviços, multi cloud e encontrar a felicidade em forma de escalabilidade e liberdade, sem ficar amarrado e dependente das 'mágicas' de um PaaS.",
          time: "11h10"
        }
      },
      {
        name: "Almoço e Networking",
        time: "12h00"
      },
      {
        name: "Otávio Santana",
        photo: "themes/devparana-conf-2017/img/speakers/otavio.jpg",
        bio: "Otávio Santana is a developer and enthusiast of open source. He is an evangelist and practitioner of agile philosophy and polyglot development in Brazil. Santana is a JUG leader of JavaBahia and SouJava, and a strong supporter of Java communities in Brazil, where he also leads the BrasilJUGs initiative to incorporate Brazilian JUGs into joint activities. He is a cocreator and is also responsible for the Linguagil Group, merger of Java, Ruby, Python, and Agile groups that promotes agility across language-focused communities.",
        company: "Tomitribe",
        link: {
          href: "https://github.com/otaviojava",
          text: "@otaviojava"
        },
        presentation: {
          title: "Cassandra – NoSQL, NoLimits!",
          description: "Apache Cassandra é um altamente escalável, alta performance, banco de dados distribuído e desenhado para um alto volume de dados com alta disponibilidade sem pontos de falha. Cassandra tem comportamentos particulares como User Defined Type, Cassandra Query language e nível de consistência que faz o Cassandra único. Essa apresentação cobrirá sobre esse banco de dados, arquitetura, boas práticas e quando e como utilizar essa tecnologia de banco de dados.",
          time: "14h00"
        }
      },
      {
        name: "Rodrigo Nonose",
        photo: "themes/devparana-conf-2017/img/speakers/nonose.jpg",
        bio: "Desenvolvedor de Software na Digital Natives, atualmente usando Elixir",
        company: "Digital Natives",
        link: {
          href: "https://github.com/rhnonose",
          text: "@rhnonose"
        },
        presentation: {
          title: "Programação Funcional na web com Elixir e Elm",
          description: "O paradigma funcional está cada vez mais em vista recentemente e com boa razão: diversas linguagens e frameworks têm trazido um ponto de vista diferente para se resolver os problemas inerentes do desenvolvimento web. Nesta apresentação, pretende-se ilustrar conceitualmente como o as linguagens Elixir (backend) e Elm (frontend) resolvem os problemas mais comuns de uma maneira elegante e compreensível.",
          time: "14h50"
        }
      },
      {
        name: "Coffee Break e Networking",
        time: "15h40"
      },
      {
        name: "Sebastian Ferrari",
        photo: "themes/devparana-conf-2017/img/speakers/sebastian.jpg",
        bio: "Desenvolvedor / empreendedor apaixonado por web desde 2005 e amante do \"Lean Thinking\", sempre utilizando tecnologias Open Source como PHP, Javascript, GNU/Linux e banco de dados NoSQL como MongoDB e Apache Solr. Forte background em Ops (Infra). Membro e colaborador da comunidade Drupal, ReactJS e Javascript colaborando com código e organização de eventos. CTO e Co-fundador da Taller (taller.net.br).",
        company: "Taller",
        link: {
          href: "https://github.com/sebas5384",
          text: "@sebas5384"
        },
        presentation: {
          title: "Redux to the bones",
          description: "O bom funcionamento das aplicações no front-end dependem de uma arquitetura que permita lidar com todos os eventos e interações complexas que seus usuários realizam. Se você já tentou usar algo como MVC, MV* ou Flux, pode ser que tenha ouvido falar do Redux ou já esteja usando. Saiba como realmente funciona e descubra os paradigmas da programação funcional utilizados na sua criação. Quais são seus benefícios, e entenda porque precisa gerenciar o estado de sua aplicação de maneira previsível. Para entender melhor como o Redux funciona, vamos criar uma versão simples do Redux, desde a criação da Store até os Enahancers passando por Middlewares e seus Reducers.",
          time: "16h40"
        }
      },
      {
        name: "Loiane Groner",
        photo: "themes/devparana-conf-2017/img/speakers/loiane.jpg",
        bio: "Dev FullStack @ Citi e é autora de 7 livros publicados mundialmente em inglês. Nas horas vagas publica cursos gratuitos em loiane.training",
        company: "Citibank",
        link: {
          href: "https://github.com/loiane",
          text: "@loiane"
        },
        presentation: {
          title: "",
          description: "Em breve",
          time: "17h10"
        }
      },
      {
        name: "Encerramento e Sorteios",
        time: "18h00"
      },
      {
        name: "Happy Hour e Networking",
        time: "18h30"
      }
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
      },
      {
        name: "Rivendel",
        logo: "themes/devparana-conf-2017/img/rivendel.png",
        url: "http://www.rivendel.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "SEBRAE Maringá",
        logo: "themes/devparana-conf-2017/img/sebrae.svg",
        url: "http://www.sebraepr.com.br/"
      },
      {
        name: "BrazilJS",
        logo: "themes/devparana-conf-2017/img/braziljs.svg",
        url: "https://braziljs.org/"
      },
      {
        name: "Sicredi",
        logo: "themes/devparana-conf-2017/img/sicredi.png",
        url: "https://www.sicrediuniao.com.br/"
      },
      {
        name: "Capivara Codes",
        logo: "themes/devparana-conf-2017/img/capivara.svg",
        url: "http://capivara.codes/"
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

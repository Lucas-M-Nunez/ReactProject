
export function FakeApi() {
    const personajes = [
        { 
          id: 1,
          name: 'Spider-man (Tobey Maguire)',
          details: 'Spiderman (2004) Tierra-96283',
          img: "./imgs/img-9.png",
          link: ''
        },
        { 
          id: 2,
          name:'Spider-man Miles Morales',
          details: 'Spiderman Tierra-1610',
          img: './imgs/img-3.png',
          link: ''
        },
        { 
          id: 3,
          name:'Spider-man Insomniac Games',
          details: 'Spiderman Tierra-1048',
          img: './imgs/img-2.png',
          link: ''
        },
        { 
          id: 4,
          name:'Spider-man (Andrew Garfield)',
          details: 'Spiderman Tierra-120703 ',
          img: './imgs/img-1.png',
          link: ''
        },
        { 
          id: 5,
          name:'Spider Gwen',
          details: 'Spiderman across the spiderverse Tierra-65',
          img: './imgs/img-gwen.png',
          link: ''
        },
        { 
          id: 6,
          name:'Spot',
          details: 'Spot - La Mancha (Dr. Jonathan Ohnn) es un supervillano que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje ha sido representado como un enemigo de Spider-Man, Daredevil, Loki, Barón Mordo y más, quien ganó la habilidad de abrir portales interdimensionales, así como de menor escala, que usa para viajar largas distancias instantáneamente y cometer crímenes.',
          img: './imgs/img-spot.png',
          link: 'https://es.wikipedia.org/wiki/Mancha_(c%C3%B3mic)'
        },
        { 
          id: 7,
          name:'Kraven',
          details: 'Kraven Tierra-1048. Es el Cazador (Sergei Krávinov) es un supervillano Ruso que aparece en los cómics estadounidenses publicados por Marvel Comics. Debutando en el número 15 de The Amazing Spider-Man (agosto de 1964) como el enemigo del Hombre Araña pero a veces como antihéroe. Desde entonces ha resistido como uno de los enemigos más formidables del lanzaredes y es parte del colectivo de adversarios que conforman la galería de villanos del Hombre Araña. Sergei también ha entrado en conflicto con otros héroes, como La Pantera Negra y Tigra. Sergei es el hermanastro y enemigo del Camaleón y uno de los miembros fundadores de Los Seis Siniestros.',
          img: './imgs/img-kraven.png',
          link: 'https://es.wikipedia.org/wiki/Kraven_el_Cazador'
        },
        { 
          id: 8,
          name:'Venom',
          details: 'Villano Marvel Spiderman 2 PS5 Tierra-1048. - Venom es conocido por ser uno de los principales antagonistas en el universo arácnido de Marvel, en este Spider-Man 2 actúa como el jefe final en el juego. Un simbionte destructor que cada vez se come más a Harry Osborn, nuestro amigo de la infancia y uno de los personajes más relevantes de la historia.',
          img: './imgs/img-venom.png',
          link: ''
        },
        { 
          id: 9,
          name:'Lizard',
          details: 'Dr. Curtis "Curt" Connors (Tierra-1048) - Villano Marvel Spiderman 2 PS5',
          img: './imgs/img-lizard.png',
          link: ''
        },
        { 
          id: 10,
          name:"Miguel O'Hara",
          details: "Spider-man 2099 - es un personaje de superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue creado por Peter David y Rick Leonardi en 1992 para la línea de cómics Marvel 2099, y es una reinvención futurista de su homónimo creado por Stan Lee y Steve Ditko. Su verdadera identidad es Miguel O'Hara, un genetista que vive en Nueva York en el año 2099 y quien intenta recrear las habilidades del original Spider-Man en otras personas y luego sufre un accidente que hace que la mitad de su ADN se reescriba con el código genético de una araña",
          img: './imgs/img-7.png',
          link: 'https://es.wikipedia.org/wiki/Spider-Man_2099'
        }
      ];

      return personajes;
}


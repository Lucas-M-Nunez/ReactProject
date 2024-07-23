
export function FakeApi() {
    const personajes = [
        { 
          id: 1,
          name: 'Spider-man (Tobey Maguire)',
          details: 'Spiderman (2004) Tierra-96283. En un viaje escolar, Peter Parker, el estudiante adolescente de último año de preparatoria, visita un laboratorio de genética de la Universidad de Columbia con su amigo Harry Osborn y su enamorada Mary Jane Watson. Ahí, una «súper araña» modificada genéticamente se escapa de su jaula de contención, lo muerde y él se enferma al regresar a casa. Al día siguiente, Peter descubre que ya no es miope y descubre que ha desarrollado habilidades similares a las de una araña: puede lanzar telarañas de sus muñecas y tiene reflejos acelearados, velocidad, fuerza sobrehumana, capacidad de adherirse a las superficies para treparse y un «sentido arácnido», una mayor capacidad para sentir el peligro que lo acecha.',
          img: "./imgs/img-9.png",
          link: 'https://es.wikipedia.org/wiki/Spider-Man_(pel%C3%ADcula)'
        },
        { 
          id: 2,
          name:'Spider-man Miles Morales',
          details: 'Spiderman Tierra-1610. La historia se centra en un chico llamado Miles Morales, un adolescente que admira a Spider-Man, quien lucha por adaptarse a su nuevo internado de élite y estar a la altura de las expectativas de sus padres, Rio Morales y Jefferson Davis, quienes consideran a Spider-Man como una amenaza. Después de sentirse atraído por su compañera de clase llamada "Gwanda", Miles busca el consejo de su tío Aaron Davis, quien alienta a Miles a seguir su pasión por el arte del grafiti y lo lleva a una estación de metro donde puede dibujar sin muchos problemas, pero mientras está allí y una vez que termina de dibujar, Miles es mordido por una araña radioactiva y desarrolla habilidades de araña.',
          img: './imgs/img-3.png',
          link: 'https://es.wikipedia.org/wiki/Spider-Man:_un_nuevo_universo'
        },
        { 
          id: 3,
          name:'Spider-man Insomniac Games',
          details: 'Spiderman Tierra-1048. Peter Parker es un chico adulto de 23 años, becario en un laboratorio Whilst.18​ Peter ha sido Spider-Man por ocho años y se ha desempeñado como el protector de la Ciudad de Nueva York, Peter logró derrotar a un jefe mafioso llamado Wilson Fisk (alias Kingpin), pero una nueva pandilla conocida como los "Inner Demons" emergió apoderándose de los antiguos territorios de Fisk.',
          img: './imgs/img-2.png',
          link: ''
        },
        { 
          id: 4,
          name:'The Amazing Spider-Man (Andrew Garfield)',
          details: 'Spiderman Tierra-120703. Peter Parker, un joven estudiante al que durante una visita a Oscorp, por curiosidad entra en una sala de experimentos con arañas, y cuando es mordido por una, provoca que adquiera poderes arácnidos, convirtiéndose así en Spider-Man. ',
          img: './imgs/img-1.png',
          link: ''
        },
        { 
          id: 5,
          name:'Spider Gwen',
          details: 'Spiderman across the spiderverse Tierra-65, Después de ser mordida por una de ingeniería genética, Gwen recibió superpoderes de tipo arácnido, y comenzó una carrera como luchadora contra el crimen, apodada por los medios de comunicación como "Spider-Woman". La luchadora contra el crimen retirada Janet van Dyne le dio un traje y un juego de Lanza-Telarañas. Gwen pasó la mayor parte de sus primeras aventuras centrada en explotar y mantener su nueva atención más que en ayudar a los necesitados; sin embargo, el comportamiento de Gwen cambió después de que su padre expresara que creía que Spider-Woman podía ayudar fácilmente a la gente.',
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
          details: 'Dr. Curtis "Curt" Connors Tierra-1048 - (Villano Marvel Spiderman 2 PS5). El doctor Curtis "Curt" Connors era un médico del Hospital San Martín que ayudó a Peter Parker cuando se lesionó el hombro. En un momento desconocido de la vida de Curt y Peter, Curtis se convirtió en un reptil humanoide que se convertiría en uno de los primeros enemigos de Spider-Man hasta que Peter creó una cura utilizando la sangre de Curt. Sin embargo, la cura solo funcionó temporalmente y, al parecer, el Lagarto volvió a merodear por algún lugar de Nueva York. Peter guardó el frasco de sangre como recuerdo.',
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


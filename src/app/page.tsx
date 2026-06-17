"use client";

import { useDeferredValue, useState } from "react";

type AgeGroup = {
  label: string;
  category: "Infantil" | "Juvenil";
  intro: string;
  books: Book[];
};

type Book = {
  title: string;
  author: string;
  description: string;
};

const ageGroups: AgeGroup[] = [
  {
    label: "De 5 a 7 años",
    category: "Infantil",
    intro: "En la primera sección de los libros recomendados por edades, ponemos el foco en los libros para niños de 5 a 7 años, en los que encontrarán fantasía accesible y relatos profundos adaptados a su edad. La bruja que no quería una escoba fomenta la imaginación, mientras que El mundo según Lea introduce cuestiones filosóficas de manera sencilla, ayudándoles a hacerse preguntas sobre la vida y a disfrutar de la lectura desde que son pequeños.",
    books: [
      {
        title: "El mundo según Lea",
        author: "Carlos Javier González Serrano · Beascoa, 2023",
        description:
          "¿Quiénes somos? ¿Cómo deberíamos tratar a los demás? ¿Qué es lo que nos hace felices? Un álbum ilustrado en el que Lea hace preguntas tan importantes como difíciles. Filosofía adaptada a los más pequeños a través de relatos sencillos y profundos.",
      },
      {
        title: "La bruja que no quería una escoba",
        author: "Susana Isern y David Sierra Listón · Beascoa, 2023",
        description:
          "El gran mago Linus elegirá a la mejor bruja para que se convierta en su discípula y ayudante. Es una gran oportunidad para la bruja Petra de los Tornados, pero pronto descubre que hay una trampa oculta y que quizá Linus esconde motivaciones ocultas.",
      },
    ],
  },
  {
    label: "De 8 a 10 años",
    category: "Infantil",
    intro: "Los libros de 8 a 10 años combinan fantasía, clásicos infantiles y relatos con valores como la amistad y la capacidad de sobreponerse. Estas lecturas enganchan a los pequeños lectores, fomentan su gusto por la lectura y les ayudan a desarrollar empatía y pensamiento crítico, mientras disfrutan de historias emocionantes desde la primera página.",
    books: [
      {
        title: "Colegio de poderes secretos",
        author: "César Mallorquí · Alfaguara, 2023",
        description:
          "El día de su cumpleaños, los padres de Axel le confiesan que quizá tenga poderes mágicos y que se marchará a una escuela a averiguarlo. Libro que explota la idea de niños formándose en una escuela de magia. El libro es atractivo, con un ritmo ágil y fácil de leer. Tiene fantasía, aventuras y mucho humor. Primero de una colección que promete.",
      },
      {
        title: "Amarillo",
        author: "Lucy Zamora · Babidibú, 2021",
        description:
          "Cuentos infantiles que nos narran las aventuras de Susanita y sus tres peluches Pétric, Membrillo y Coita Perro. Conjunto de relatos infantiles escritos por la mexicana Lucy Zamora y dirigidos a niños a partir de 8 años, a los que les guste la luz y el color y las historias sencillas de fantasía con fondo de amistad.",
      },
      {
        title: "Karlsson en el tejado",
        author: "Astrid Lindgren · Kókinos, 2022",
        description:
          "Novela clásica infantil de la autora sueca Astrid Lindgren, conocida mundialmente por obras como Pipi Calzaslargas. Une, de una manera desenfadada, humor y fantasía infantil. Destaca el personaje de Karlsson, que saca al protagonista de su vida corriente y le hace conseguir su sueño.",
      },
      {
        title: "Miss Agatha. Misterio en Londres",
        author: "Christine Palluy y Sophie Leullier · Larousse, 2023",
        description:
          "1900, Agatha Christie vive con su madre, su hermano y su institutriz en Londres. En su casa acogen durante un tiempo a Max, un huérfano de su edad. Los niños tienen un espíritu de detectives que les lleva a investigar una estatuilla hindú que se ha roto. Historia muy sencilla y sin demasiadas pretensiones sobre Agatha Christie de niña. Resulta muy interesante que en las ilustraciones que acompañan al texto aparezcan pequeños acertijos para que los niños los averigüen y razonen.",
      },
      {
        title: "La señora Lana 2",
        author: "Jutta Richter · Lóguez, 2021",
        description:
          "Segunda entrega de los cuentos sobre la señora Lana de la conocida autora alemana Richter. La historia es divertida y nos lleva, con los dos protagonistas, a un mundo de ensueño y fantasía. Contrasta la vida que llevan los niños y su madre, que trabaja todo el día, y un padre que se ha marchado de casa, con las aventuras en Chiquitania.",
      },
      {
        title: "El club del fuego secreto",
        author: "Diego Blanco · Encuentro, 2020",
        description:
          "Primera parte de una saga de libros infantiles del guionista Pablo Blanco que intenta acercar a los niños a los principios humanistas de nuestra civilización y a autores cristianos destacados como J. R. R. Tolkien. El libro es muy divertido y deja entrever la gran cultura de su autor.",
      },
      {
        title: "Herederos. La piedra del destino",
        author: "Juan Gómez Jurado y Bárbara Montes · B de Blok, 2024",
        description:
          "Novela relacionada con el mundo de Amanda Black, la joven aventurera. La historia resulta muy entretenida desde el principio al más puro estilo Indiana Jones, con unos personajes interesantes y algo más verosímil que las aventuras de Amanda.",
      },
      {
        title: "Serie Ideas en la Casa del Árbol",
        author: "W. Ama",
        description:
          "La serie Ideas en la Casa del Árbol sigue a un grupo de amigas que están terminando Primaria en sus múltiples aventuras del día a día. Los libros giran en torno a la amistad, el trabajo en equipo, el desarrollo personal, la autoestima y el valor de la familia. Aunque no llega a su calidad literaria, imita el estilo de los clásicos infantiles de Enid Blyton.",
      },
      {
        title: "Las almohadas mágicas",
        author: "Evyenios Trivizas · Blackie Books, 2022",
        description:
          "Libro del conocido autor griego Trivizás, que cuenta de una manera imaginativa y fantástica como un gobernante déspota puede acabar con la libertad de un pueblo, y la capacidad de este para salir adelante y rebelarse ante la injusticia.",
      },
      {
        title: "Nika y el misterio de Violet Hill",
        author: "Rosario Ana · Destino, 2023",
        description:
          "Nika y su familia viajan a Inglaterra durante las vacaciones de Navidad, en concreto al pueblo de Violet Hill. Allí un guía turístico les habla de un bosque maldito. Nika, intrépida aventurera, se adentrará en el bosque con sus amigos. Segunda parte de la colección infantil de Nika que sigue un esquema parecido: los niños encuentran un misterio e intentan descifrarlo con ayuda de la lógica y la ciencia. Esta historia resulta más verosímil que las anteriores y es menos estresante.",
      },
      {
        title: "Otra vez al teatro con Rodari",
        author: "Gianni Rodari · SM, 2022",
        description:
          "Este libro recoge cuatro obras nuevas de teatro en español. Como todos los libros de Rodari, unen fantasía, amistad, amor y también su preocupación social por los desfavorecidos. A todo esto, siempre añade mucho humor. Obra muy recomendable para representar en los colegios.",
      },
      {
        title: "El niño de fuego",
        author: "Ledicia Costa · Anaya, 2022",
        description:
          "Morgan es un niño huérfano que cada mes vive con una familia distinta de Lilitown. Su aparición en el pueblo fue de lo más curiosa. La señora Culpepper le encontró en una cesta delante de su casa con una nota en la que ponía: Llévenme más allá de la niebla. Busquen la casa de las tres hermanas y díganles que soy el niño de fuego. Cuento largo infantil escrito por la autora gallega Ledicia Costas. La autora tiene una gran experiencia como escritora, lo que se nota en la prosa del libro y en unos personajes y ambientación inolvidables y bien trazados. Destaca el valor de la amistad.",
      },
      {
        title: "Guerrero tigre. El ataque del rey dragón",
        author: "M. Chan · SM, 2022",
        description:
          "Jack es un niño al que le encantan las historias de su abuelo sobre el reino de Jade, un lugar mágico con animales fantásticos, bestias y aventuras. Un día su abuelo le entrega un disco mágico con doce caras y le anuncia que es suyo y que ahora es el nuevo Guerrero Tigre. Con el disco puede traer a cualquier animal del zodiaco chino y adquirir sus cualidades. El reino de Jade es real y Jack pasará a conocerlo. Su abuelo le cuenta que no es un lugar peligroso, ya que él encerró al último dragón. Pero al llegar allí descubre que la realidad no es como le han dicho. Novela infantil ambientada en la antigua China y los animales de su horóscopo. Una historia muy sencilla y rápida para atrapar a los niños.",
      },
      {
        title: "Los Titanes del Fútbol. El asesinato del delantero centro",
        author: "Juan Ramón Barat · Anaya, 2026",
        description:
          "Primera entrega de una nueva serie del autor, que inicia una trama de misterio en el mundo del fútbol. Cuando el delantero centro de los Titanes es asesinado en extrañas circunstancias, un grupo de jóvenes se verá envuelto en una investigación que combina deporte, intriga y trabajo en equipo. Barat demuestra su buen pulso narrativo y su capacidad para conectar con los lectores jóvenes, iniciando una serie que promete mantener el nivel de sus obras anteriores.",
      },
      {
        title: "Los Futbolísimos. El misterio del córner más largo del mundo",
        author: "Roberto Santiago · SM, 2026",
        description:
          "Vigésimo novena entrega de la exitosa serie Los Futbolísimos, una de las colecciones infantiles más leídas de los últimos años en España. El equipo de Soto Alto se enfrenta a un nuevo misterio: un córner que parece no tener fin. Con su característica mezcla de humor, fútbol y trabajo en equipo, los Futbolísimos deberán usar su ingenio para resolver este enigma y demostrar que la amistad puede con todo.",
      },
    ],
  },
  {
    label: "A partir de 9 años",
    category: "Infantil",
    intro: "En los libros recomendados por edades a partir de 9 años predomina el humor y la literatura de calidad, pensados para los pequeños grandes lectores. Estas historias son divertidas, entretenidas y fáciles de leer, al mismo tiempo que introducen valores y enseñanzas importantes, animando a los niños a leer para disfrutar y a desarrollar su imaginación.",
    books: [
      {
        title: "Cómo arreglar un libro mojado",
        author: "Roberto Aliaga · SM, 2017",
        description:
          "Novela infantil que ganó el premio Gran Angular en 2017. Está muy bien escrita y engancha. Cuenta una historia simpática, con unos personajes muy bien definidos y llenos de humor. Tiene un giro al final que sorprende al lector. Chirría algo el lenguaje del protagonista, narrador en primera persona, que resulta algo inverosímil.",
      },
      {
        title: "Querido Bruto",
        author: "José Ramón Ayllón · Palabra, 2008",
        description:
          "Novela epistolar imaginaria sobre Julio César y Marco Bruto.",
      },
      {
        title: "El esplendor de los mares",
        author: "Paloma Bordons · Edebé, 2026",
        description:
          "Una novela de aventuras marítimas que transporta al lector a través de los océanos. La autora construye una historia de descubrimiento, amistad y superación personal, con el mar como escenario de fondo. Una lectura que engancha desde la primera página y despierta el espíritu aventurero, ideal para los jóvenes que buscan historias de exploración y crecimiento personal.",
      },
      {
        title: "Ana, la de las Tejas Verdes",
        author: "L. M. Montgomery · Bruño, 2022",
        description:
          "El clásico de la literatura canadiense en una nueva edición ilustrada. Ana Shirley, una huérfana de once años, llega por error a Tejas Verdes, la granja de los hermanos Cuthbert. Con su imaginación desbordante, su carácter inquebrantable y su forma única de ver el mundo, Ana conquista a todos los habitantes de Avonlea y demuestra que una niña puede cambiar la vida de quienes la rodean. Una historia atemporal sobre la pertenencia, la amistad y el poder de soñar.",
      },
      {
        title: "Quo Vadis?",
        author: "Henryk Sienkiewicz · Rialp, 2026",
        description:
          "Quo Vadis?, publicada en 1896 por Henryk Sienkiewicz, es una novela histórica ambientada en la Roma de Nerón, en la época del incendio de la ciudad y de la primera persecución contra los cristianos. Sobre ese marco histórico se desarrolla la historia de Marco Vinicio, un joven patricio romano, y Ligia, una rehén bárbara convertida al cristianismo. Uno de los principales valores de la obra es la reconstrucción ambiental: Sienkiewicz describe con detalle las costumbres de la plebe y del patriciado, los espectáculos públicos y la vida cotidiana de la capital del Imperio. Una obra maestra que sigue fascinando a los lectores jóvenes.",
      },
      {
        title: "Track 3. Sunny",
        author: "Jason Reynolds · La Galera, 2026",
        description:
          "Este volumen, que forma parte de la serie Track, sigue las trayectorias vitales de cuatro adolescentes unidos por el atletismo. En esta ocasión, el foco se centra en Sunny, un chico aparentemente luminoso, siempre dispuesto a sonreír, pero atravesado por un profundo conflicto interior: su madre murió al darle a luz. Su padre, emocionalmente distante, le obliga a practicar atletismo para honrar su memoria. Una novela sobre la culpa, el duelo y la búsqueda de la propia identidad, que mantiene el pulso narrativo del proyecto Track.",
      },
    ],
  },
  {
    label: "De 10 a 12 años",
    category: "Juvenil",
    intro: "Los libros de 10 a 12 años están dirigidos a preadolescentes y combinan fantasía con historias que invitan a reflexionar sobre crecer, los desafíos de la vida y valores como la superación o la honestidad. Estas lecturas enganchan desde la primera página y ayudan a desarrollar pensamiento crítico, empatía y gusto por la lectura a medida que maduran.",
    books: [
      {
        title: "El secreto del contrabandista",
        author: "Elly Griffiths · Maeva Young, 2023",
        description:
          "Segunda parte de una colección sobre Justina Jones, la joven investigadora de un internado inglés en el periodo de entreguerras del siglo XX. El libro mantiene el interés desde el principio y la historia está bien escrita y con mucha inteligencia. También destaca la ambientación en las marismas de la costa inglesa y la relación de amistad de Justina con Dorothy, una de las criadas.",
      },
      {
        title: "Los tres terribles inventos de Walter Swizwittha",
        author: "Ben Brooks · Blackie Books, 2024",
        description:
          "Novela infantil de Ben Brooks, autor también de La historia imposible de Sebastian Cole. La historia, que parece una fábula de aventura y aprendizaje, esconde también una crítica al sistema en que vivimos, a la adicción a las redes sociales, a los sistemas de trabajo abusivos y a la necesidad de una comunidad unida en la que apoyarse para vivir con libertad.",
      },
      {
        title: "Crónicas de Avonlea",
        author: "Lucy Maud Montgomery · Almuzara, 2024",
        description:
          "Una colección de historias encantadoras ambientadas en la pequeña comunidad de Avonlea. A través de las aventuras de sus queridos personajes, el libro captura la esencia de la vida en una comunidad rural de principios del siglo XX y los desafíos y alegrías de crecer y madurar en cualquier época. Cada historia es una deliciosa mezcla de drama, romance y humor.",
      },
      {
        title: "Preparados, listo, ¡ya!",
        author: "Andrea Tomé · La Galera, 2023",
        description:
          "Enri Baquero y su familia se van a vivir a otra ciudad. Enri era el mejor en su anterior equipo de atletismo, pero ahora pasa a ser uno más. Novela enfocada a un público preadolescente masculino al que le gustan los deportes. El argumento se centra en las competiciones y en cómo Enri lucha por superarse. También se trata la integración en el equipo y en un colegio nuevo.",
      },
      {
        title: "El joven Lorca",
        author: "Luna Bruna · Duomo, 2024",
        description:
          "Novela de aventuras y misterio que nos aproxima al personaje de Federico García Lorca de niño, sensible, amante de la música, y conocedor de todas las historias populares de Andalucía. La trama engancha y entretiene. Además de la resolución del misterio, la autora desarrolla la relación de amistad entre los tres niños de ambientes diferentes; Federico, Cecilia, una niña austríaca que vive con sus abuelos en una gran casa señorial, y Antoñito, un niño de la calle.",
      },
      {
        title: "Los dioses del Norte 5. El despertar del lobo",
        author: "Jara Santamaría · B de Blok, 2024",
        description:
          "Quinta entrega de Los dioses del Norte, la saga de Jara Santamaría sobre la mitología vasca. Como en las anteriores hay dos mundos paralelos, el normal y el de Gaua o mundo mágico. La historia resulta entretenida y ágil desde el principio. Está contada, cada capítulo, por los tres protagonistas. Se recomienda leer las anteriores entregas, antes que esta, para comprender mejor el contexto, la historia y los personajes.",
      },
      {
        title: "Amanda Black. El templo olvidado",
        author: "Juan Gómez Jurado y Bárbara Montes · B de Blok, 2024",
        description:
          "Nueva entrega de la saga de Amanda Black, dirigida a niños y preadolescentes. Como siempre, la protagonista y sus amigos utilizan tecnología sofisticada, que unida a su valentía, les ayudan a conseguir sus objetivos. Siempre son objetos mágicos peligrosos que recuperan para guardar a buen recaudo en su mansión y que no sean un peligro para la humanidad. En este caso un espíritu muy peligroso.",
      },
      {
        title: "City Spies 3. La ciudad prohibida",
        author: "James Ponti · Duomo, 2024",
        description:
          "La serie City Spies, que recoge las aventuras de un grupo de espías adolescentes reclutados por los servicios secretos británicos. De lectura ágil y ligera, la trama está muy bien desarrollada y mantiene la atención. Los personajes son atractivos y transmite una visión muy positiva de la amistad, la moral y la importancia de distinguir entre el bien y el mal.",
      },
      {
        title: "Manuela Jones y el misterio de la Alhambra",
        author: "Miriam Mosquera · Molino, 2025",
        description:
          "Manuela Jones es hija de los responsables del Museo Arqueológico Nacional. Un día llaman a sus padres desde Granada para recibir una donación muy valiosa. Cuando llegan, sufren un contratiempo, que hará que tanto Manuela como su hermano gemelo J.J. se adentren en una gran aventura. Primera novela de una saga dirigida a público infantil y preadolescente cuyo tema de fondo es la arqueología, la divulgación y conservación del patrimonio de nuestro país. La historia sigue el esquema de otras similares con aventuras, acción y misterios. Está bien escrita y se nota que la autora es historiadora.",
      },
      {
        title: "Feriópolis",
        author: "Ledicia Costa · SM, 2025",
        description:
          "Lola tiene diez años, es huérfana y vive con sus tíos que no la quieren nada y le revenden los juguetes. Lo que más le gusta es ir con Ruth a la feria de su ciudad y montarse en el tren de la bruja. Novela corta ganadora del premio Barco de Vapor 2025. El libro está muy bien editado con unas ilustraciones bonitas que realzan la fuerza del texto. La historia desborda imaginación tanto en la descripción del tren de la bruja y cómo lo vive una niña, así como en Feriópolis, el lugar en el que acaba la protagonista después de montar en el tren. De fondo está el tema de la búsqueda de una familia y un lugar en el que ser feliz cuando las circunstancias son negativas.",
      },
      {
        title: "Crónicas de la prehistoria",
        author: "Michelle Paver · Salamandra",
        description:
          "Saga de fantasía ambientada en la Edad de Piedra. Ocho libros de aventuras y magia que te sumergirán en la época de la Prehistoria como un miembro más del clan. Una combinación de fantasía e historia muy bien documentada que combina suspense, amistad, personajes entrañables y mucha acción.",
      },
      {
        title: "La Montaña del Eco",
        author: "Lauren Wolk · Errata naturae, 2025",
        description:
          "Después de perderlo casi todo en la Gran Depresión, la familia de Ellie se ve obligada a abandonar su casa en la ciudad y volver a empezar en la naturaleza indómita de la montaña del Eco. Ambientada en los años posteriores al crack de 1929, la novela sitúa al lector en una época marcada por la pobreza, el desarraigo y la necesidad de empezar de nuevo. Una historia de resiliencia, perseverancia y amistad a lo largo de tres generaciones, de la autora galardonada con la Medalla Newbery y el Premio Scott O'Dell.",
      },
      {
        title: "Intriga en Estambul",
        author: "Erica Ruth Neubauer · Maeva, 2026",
        description:
          "Jane Wunderly viaja a Estambul en busca de un profesor desaparecido. En su destino la recibe su tía Millie con noticias inquietantes: el profesor estaba en una misión para localizar el corazón perdido del sultán Solimán el Magnífico, una reliquia legendaria del Imperio otomano, pero no encuentran ningún rastro de sus pasos. Una novela de misterio histórico con una ambientación fascinante, personajes carismáticos y una trama llena de giros que mantiene el interés hasta la última página.",
      },
      {
        title: "La memoria de las bicicletas",
        author: "Josan Hatero · SM, 2026",
        description:
          "Galardonada con el Premio Barco de Vapor 2026. Martín, un niño de once años, inicia las vacaciones convencido de que serán las más aburridas de su vida: lejos de la playa, deberá instalarse en Corvo Blanco, el pueblo gallego de su madre. La llegada se ve alterada por la aparición de Sabela y Cibrán, que introducen un elemento de intriga —un supuesto fantasma en la casa familiar— que pronto se revela como una historia profundamente humana: la de la tía Aurora, atrapada entre los recuerdos y la espera.",
      },
      {
        title: "La historia interminable",
        author: "Michael Ende · Alfaguara, 2007",
        description:
          "La historia interminable construye un juego narrativo en el que realidad y fantasía se entrelazan. Bastián Baltasar Bux, un chico solitario e inseguro marcado por la muerte de su madre y víctima de acoso escolar, descubre en una librería un libro que lo atrapa desde el primer instante. Escondido en el desván del colegio, lee la historia de Fantasía, un reino amenazado por la Nada. Atreyu emprende la misión de salvar a la Emperatriz Infantil, pero la historia da un giro decisivo cuando Bastián deja de ser un simple lector y entra en Fantasía para vivir su propia aventura. Un clásico imprescindible de la literatura juvenil.",
      },
    ],
  },
  {
    label: "A partir de 11 años",
    category: "Juvenil",
    intro: "Para lectores mayores de 11 años ofrecemos novelas de aventuras, misterio y fantasía que combinan acción, reflexión y valores como la valentía y la perseverancia. Entre ellas se encuentra el primer libro de una trilogía clásica moderna, historias de misterio y relatos que muestran la importancia de sobreponerse a los obstáculos y tomar decisiones importantes.",
    books: [
      {
        title: "Trilogía de Howl",
        author: "Diana Wynne Jones · Nocturna",
        description:
          "El primero de esta saga está considerado uno de los clásicos modernos de la literatura fantástica. En el país de Ingary, donde existen cosas como las botas de siete leguas o las capas de invisibilidad, que una bruja te maldiga no es algo inusual. Cuando la Bruja del Páramo convierte a Sophie Hatter en una anciana, la joven abandona la sombrerería familiar para pedir ayuda en el único lugar mágico que se le ocurre: el castillo ambulante que atemoriza a los habitantes de Market Chipping. Pues dentro no sólo se halla un demonio del fuego, sino también el perverso mago Howl, tan diestro en realizar hechizos como en robar los corazones de las damas.",
      },
      {
        title: "Secuestro en la pandemia",
        author: "Juan José Molina · Alexia, 2025",
        description:
          "Novela de aventuras y misterio que muestra la vida y el paso a la madurez de un adolescente de 12 años. Una lectura breve, ágil y llena de aventuras.",
      },
      {
        title: "El príncipe de los caballos",
        author: "Stacy Gregg · HarperCollins, 2021",
        description:
          "Una historia de resiliencia que nos lleva a la Polonia invadida de 1939.",
      },
    ],
  },
  {
    label: "De 12 a 14 años",
    category: "Juvenil",
    intro: "Los libros de 12 a 14 años incluyen fantasía, historia, aventuras y misterio. Estas lecturas enganchan a los adolescentes mientras transmiten valores como la amistad, la valentía y la responsabilidad. Ideales para fomentar la curiosidad y la pasión por la lectura, permiten a los jóvenes explorar diferentes géneros y aprender mientras disfrutan de historias emocionantes y educativas.",
    books: [
      {
        title: "Elliot Tomclyde",
        author: "Joaquín Londaíz Montiel · Torbellino de Letras, 2021",
        description:
          "Primera parte de una saga de libros con Elliot como protagonista de una serie de aventuras en un mundo de magia amenazado por un villano de nombre Tanatos. Su formación en el colegio de magia de Hidden Wood, tiene cierto parecido a Harry Potter, pero los hechos resultarán interesantes para lectores de fantasía.",
      },
      {
        title: "La historia imposible de Sebastian Cole",
        author: "Ben Brooks · Blackie Books, 2020",
        description:
          "Novela juvenil de fantasía y aventuras. El argumento resulta muy entretenido y vamos siguiendo a los protagonistas en múltiples aventuras por salvar a su nuevo amigo. Se remarca mucho el valor de la amistad y el de la familia. Un libro divertido que gustará a un público amplio.",
      },
      {
        title: "El muro que nos separa",
        author: "Dan Smith · Algar, 2024",
        description:
          "Monika y Anja son primas y amigas inseparables que viven en Berlín. Un su calle se divide por la mitad con un alambre. Se describe con detalle la construcción del muro de Berlín y su influencia en los habitantes de ambos lados. También refleja bien los conflictos interiores de los personajes. La novela es epistolar y reúne cartas o fragmentos de diarios de las dos niñas, así como noticias de periódicos, lo que da mayor verosimilitud al texto.",
      },
      {
        title: "La chica que hablaba oso",
        author: "Sophie Anderson · Errata Naturae, 2024",
        description:
          "Novela juvenil que cuenta la búsqueda de la identidad de una adolescente. Y lo hace de una manera original, ya que enlaza la historia de la niña con cuentos de tradición rusa que le van contando de manera progresiva, según avanza la acción. El argumento resulta entretenido y destaca el valor de la amistad entre Yanka y los animales y personas que se va encontrando.",
      },
      {
        title: "Los ladrones buenos",
        author: "Katherine Rundell · Salamandra, 2021",
        description:
          "El libro está muy bien ambientado en el Nueva York de principios de siglo XX con sus bandas mafiosas. Y destaca sobre todo la protagonista, Vita, que a pesar de tener cierta discapacidad por la polio, se enfrenta a las adversidades con valentía y arrojo.",
      },
      {
        title: "El explorador del Amazonas",
        author: "Katherine Rundell · Salamandra, 2019",
        description: "Aventura clásica de supervivencia, crecimiento y naturaleza amazónica.",
      },
      {
        title: "¿Quién quieres ser?",
        author: "Carlo Frabetti · SM, 2020",
        description: "Novela premiada que introduce preguntas filosóficas mediante una historia con apariencia fantástica.",
      },
      {
        title: "Ceniza. Historia de una niña y su monstruo",
        author: "Jonathan Auxier · Blackie Books, 2022",
        description: "Fantasía victoriana sobre niños deshollinadores, amistad y redención.",
      },
      {
        title: "El diario de la peste",
        author: "Espido Freire · Anaya, 2025",
        description: "Novela histórica sobre una joven que huye durante la peste de 1598 en Toledo.",
      },
      {
        title: "Cuatro Lunas 1. Mareas de magia",
        author: "Laura Gallego · SM, 2025",
        description: "Fantasía de búsqueda con lealtad, maternidad y crecimiento del protagonista.",
      },
      {
        title: "Entre el amor y la guerra",
        author: "Julie Berry · Elastic Books, 2026",
        description:
          "Una novela histórica ambientada en un contexto bélico que explora las relaciones humanas en tiempos de conflicto. La autora teje una historia de amor, sacrificio y valentía donde los protagonistas deben enfrentarse a decisiones imposibles que pondrán a prueba sus convicciones y su corazón. Una lectura que invita a reflexionar sobre el precio de la guerra y la fuerza del amor en las circunstancias más adversas.",
      },
      {
        title: "El secreto del río",
        author: "Isabel Ibáñez · Puck, 2024",
        description:
          "Aventura con magia, intriga y ambientación egipcia, protagonizada por Inez Olivera.",
      },
      {
        title: "Un hijo",
        author: "Alejandro Palomas · Elastic Books, 2026",
        description:
          "Una novela que explora la paternidad desde una perspectiva profunda y conmovedora. El autor construye un relato íntimo sobre la relación entre padres e hijos, los lazos invisibles que nos unen y las decisiones que nos definen como personas. Una obra que invita a la reflexión sobre el significado de la familia, el sacrificio y el amor incondicional.",
      },
      {
        title: "El mundo perdido",
        author: "Arthur Conan Doyle · Rialp, 2026",
        description:
          "El clásico de aventuras del creador de Sherlock Holmes en una nueva edición. El profesor Challenger, un científico excéntrico y genial, reúne a un grupo de exploradores para viajar a una meseta remota de Sudamérica donde, según sus teorías, aún sobreviven especies prehistóricas. Una novela de aventuras trepidante que combina ciencia, misterio y exploración, ideal para los jóvenes amantes de la acción y los descubrimientos.",
      },
      {
        title: "La chica que lanzaba versos al aire",
        author: "Andrea Longarela · Nube de Tinta, 2026",
        description:
          "Una novela que retrata el desconcierto emocional de la adolescencia. Blue es una chica cuya vida ha perdido los puntos de apoyo que le daban estabilidad: su padre ha desaparecido, su madre ha rehecho su vida con otra persona y su mejor amigo ha dejado de hablarle. En el instituto es objeto de burlas y desprecios. Solo encuentra alivio en la escritura; con ella, el dolor se ordena y la angustia encuentra palabras. En ese proceso crea a Apple, un alter ego literario con el que dialoga. Una historia sobre el poder sanador de la palabra y la búsqueda de la propia identidad.",
      },
      {
        title: "La cacería",
        author: "David Lozano · Edebé, 2025",
        description:
          "Seis jóvenes son invitados a probar VENARI, un revolucionario videojuego de realidad mixta capaz de reproducir sensaciones físicas reales. Aislados en un pueblo abandonado y organizados en parejas, deberán enfrentarse a criaturas virtuales cada vez más letales con el objetivo de cazar a una monstruosa mantícora. Pero lo que comienza como una experiencia inmersiva se transforma en una pesadilla cuando el sistema, gobernado por una inteligencia artificial, empieza a actuar de forma autónoma. La línea entre ficción y realidad se diluye, y los cazadores se convierten en presas.",
      },
      {
        title: "El retorno de Rachel Price",
        author: "Holly Jackson · Crossbooks, 2025",
        description:
          "La autora británica Holly Jackson se ha consolidado como una de las voces más reconocibles del suspense juvenil contemporáneo. Rachel Price desapareció hace dieciséis años sin dejar rastro, teniendo como único testigo a su hija Bel, que entonces era un bebé. Cuando la familia accede a participar en un documental sobre la desaparición, ocurre lo impensable: Rachel Price regresa. Una novela adictiva que combina intriga, tensión psicológica y una brillante construcción del misterio, manteniendo al lector en vilo hasta la última página.",
      },
    ],
  },
  {
    label: "A partir de 13 años",
    category: "Juvenil",
    intro: "Para mayores de 13 años hemos seleccionado novelas históricas que combinan hechos reales con aventuras adaptadas a su edad. Estas lecturas permiten conocer la historia de manera entretenida, fomentando la curiosidad, el pensamiento crítico y la comprensión del pasado, mientras disfrutan de historias bien narradas y repletas de acción y emoción.",
    books: [
      {
        title: "El secreto de mi madre",
        author: "J. L. Witterick · Nube de Tinta, 2014",
        description: "Historia real de coraje y generosidad durante la ocupación nazi de Polonia.",
      },
      {
        title: "Saga Entonces",
        author: "Morris Gleitzman · Kailas",
        description: "Saga sobre un adolescente que escapa de la persecución nazi.",
      },
    ],
  },
  {
    label: "De 14 a 16 años",
    category: "Juvenil",
    intro: "Los libros juveniles de 14 a 16 años abordan temas actuales y relevantes, como la salud mental, el acoso escolar, la aceptación de la enfermedad, la amistad y los refugiados. Estas novelas fomentan la empatía, la reflexión y el debate, al tiempo que enganchan al lector con historias contemporáneas que conectan con sus experiencias y desafíos.",
    books: [
      {
        title: "Julia y el tiburón",
        author: "Kiran Millwood Hargrave · Torbellino de Letras, 2021",
        description: "Trata ecología, salud mental, enfermedad, amistad y acoso.",
      },
      {
        title: "El mar detrás",
        author: "Ginés Sánchez · SM, 2022",
        description: "Novela premiada sobre adolescentes en un campo de refugiados mediterráneo.",
      },
      {
        title: "Trenza del mar Esmeralda",
        author: "Brandon Sanderson · Nova, 2023",
        description: "Aventura de piratas con una protagonista inteligente, bondadosa y decidida.",
      },
      {
        title: "Redes",
        author: "Eloy Moreno · Nube de Tinta, 2024",
        description: "Novela sobre influencers, redes sociales y sus riesgos para adolescentes y adultos.",
      },
      {
        title: "Alas negras",
        author: "Laura Gallego García · Minotauro, 2021",
        description: "Fantasía sobre ángeles, demonios, redención, valentía y lealtad.",
      },
      {
        title: "Guiño",
        author: "Rob Harrell · Gran Travesía, 2020",
        description: "Un adolescente con cáncer de ojo afronta enfermedad, burlas y cambios personales.",
      },
      {
        title: "Ghost",
        author: "Jason Reynolds · La Galera, 2025",
        description: "Novela deportiva centrada en el aprendizaje vital de un adolescente conflictivo.",
      },
      {
        title: "Entre tonos de gris",
        author: "Ruta Sepetys · Maeva, 2012",
        description: "Historia de valentía sobre una adolescente lituana deportada a Siberia.",
      },
      {
        title: "Querido Bruto",
        author: "José Ramón Ayllón · Palabra, 2008",
        description: "Novela epistolar imaginaria sobre Julio César y Marco Bruto.",
      },
    ],
  },
  {
    label: "A partir de 15 años",
    category: "Juvenil",
    intro: "Para mayores de 15 años hemos seleccionado dos novelas de misterio e intriga y un clásico del humor británico de P. G. Wodehouse. Estas lecturas combinan entretenimiento, suspense y humor inteligente, ofreciendo historias que mantienen al lector interesado, fomentan la imaginación y animan a seguir descubriendo distintos géneros literarios.",
    books: [
      {
        title: "Las recetas perdidas de la taberna Kamogawa",
        author: "Hisashi Kashiwai · Salamandra, 2025",
        description: "Cozy crime gastronómico sobre personajes que reconstruyen su vida a través de recuerdos y platos.",
      },
      {
        title: "Toda la verdad",
        author: "Karen Cleveland · Planeta, 2019",
        description: "Thriller sobre una analista de la CIA que descubre una infiltración muy cercana.",
      },
      {
        title: "De acuerdo, Jeeves",
        author: "P. G. Wodehouse · Anagrama",
        description: "Clásico del humor británico con Jeeves ayudando a un joven tímido enamorado.",
      },
    ],
  },
  {
    label: "De 16 a 18 años",
    category: "Juvenil",
    intro: "Las novelas de 16 a 18 años tratan temas como la identidad, las relaciones y los retos personales, combinando historias emocionantes con reflexiones profundas. Ideales para desarrollar pensamiento crítico y empatía, nuestra selección mezcla clásicos y novedades juveniles que acompañan a los adolescentes en su crecimiento y fomentan el gusto por la lectura.",
    books: [
      {
        title: "Cincuenta cincuenta",
        author: "Steve Cavanagh · Roca Editorial, 2024",
        description: "Thriller judicial con tensión, giros y final impactante.",
      },
      {
        title: "La enfermera de Bellevue",
        author: "Ana Guelbenzu · Maeva, 2024",
        description: "Novela histórica sobre enfermería, segundas oportunidades y crecimiento personal.",
      },
      {
        title: "Erupción",
        author: "Michael Crichton y James Patterson · RBA, 2024",
        description: "Thriller de aventuras volcánicas con ritmo trepidante.",
      },
      {
        title: "Train Kids",
        author: "Dirk Reinhardt · Milenio, 2016",
        description: "Relato realista sobre cinco niños migrantes de México y Guatemala, con fuerte valor de amistad.",
      },
      {
        title: "Ninfa rota",
        author: "Alfredo Gómez Cerdá · Anaya, 2019",
        description: "Novela sobre una relación juvenil de maltrato, control y dependencia emocional.",
      },
      {
        title: "Voy a traicionarte",
        author: "Ruta Sepetys · Maeva, 2022",
        description: "Historia del régimen comunista rumano y su caída desde la mirada de un joven de 17 años.",
      },
      {
        title: "El túnel 29",
        author: "Helena Merriman · Salamandra, 2022",
        description: "Historia real de jóvenes que excavaron un túnel bajo el Muro de Berlín.",
      },
      {
        title: "Asesinato para principiantes",
        author: "Holly Jackson · Crossbooks, 2024",
        description: "Misterio juvenil con trama absorbente y personajes creíbles.",
      },
      {
        title: "El secreto del río",
        author: "Isabel Ibáñez · Puck, 2024",
        description: "Aventura con magia, intriga y ambientación egipcia, protagonizada por Inez Olivera.",
      },
    ],
  },
];

const coverImages: Record<string, string> = {
  "El mundo según Lea": "/covers/el-mundo-segun-lea.webp",
  "La bruja que no quería una escoba": "/covers/la-bruja-que-no-queria-una-escoba.webp",
  "Colegio de poderes secretos": "/covers/colegio-de-poderes-secretos.webp",
  Amarillo: "/covers/amarillo.webp",
  "Karlsson en el tejado": "/covers/karlsson-en-el-tejado.webp",
  "Miss Agatha. Misterio en Londres": "/covers/miss-agatha-misterio-en-londres.webp",
  "La señora Lana 2": "/covers/la-senora-lana-2.webp",
  "El club del fuego secreto": "/covers/el-club-del-fuego-secreto.webp",
  "Herederos. La piedra del destino": "/covers/herederos-la-piedra-del-destino.webp",
  "Serie Ideas en la Casa del Árbol": "/covers/serie-ideas-en-la-casa-del-arbol.webp",
  "Las almohadas mágicas": "/covers/las-almohadas-magicas.webp",
  "Nika y el misterio de Violet Hill": "/covers/nika-y-el-misterio-de-violet-hill.webp",
  "Otra vez al teatro con Rodari": "/covers/otra-vez-al-teatro-con-rodari.webp",
  "El niño de fuego": "/covers/el-nino-de-fuego.webp",
  "Guerrero tigre. El ataque del rey dragón": "/covers/guerrero-tigre-el-ataque-del-rey-dragon.webp",
  "Cómo arreglar un libro mojado": "/covers/como-arreglar-un-libro-mojado.webp",
  "Capitán Lucas": "/covers/capitan-lucas.webp",
  "El secreto del contrabandista": "/covers/el-secreto-del-contrabandista.webp",
  "Los tres terribles inventos de Walter Swizwittha": "/covers/los-tres-terribles-inventos-de-walter-swizwittha.webp",
  "Crónicas de Avonlea": "/covers/cronicas-de-avonlea.webp",
  "Preparados, listo, ¡ya!": "/covers/preparados-listo-ya.webp",
  "El joven Lorca": "/covers/el-joven-lorca.webp",
  "Los dioses del Norte 5. El despertar del lobo": "/covers/los-dioses-del-norte-5-el-despertar-del-lobo.webp",
  "Amanda Black. El templo olvidado": "/covers/amanda-black-el-templo-olvidado.webp",
  "City Spies 3. La ciudad prohibida": "/covers/city-spies-3-la-ciudad-prohibida.webp",
  "Manuela Jones y el misterio de la Alhambra": "/covers/manuela-jones-y-el-misterio-de-la-alhambra.webp",
  Feriópolis: "/covers/feriopolis.webp",
  "Crónicas de la prehistoria": "/covers/cronicas-de-la-prehistoria.webp",
  "Trilogía de Howl": "/covers/trilogia-de-howl.webp",
  "Secuestro en la pandemia": "/covers/secuestro-en-la-pandemia.webp",
  "El príncipe de los caballos": "/covers/el-principe-de-los-caballos.webp",
  "Elliot Tomclyde": "/covers/elliot-tomclyde.webp",
  "La historia imposible de Sebastian Cole": "/covers/la-historia-imposible-de-sebastian-cole.webp",
  "El muro que nos separa": "/covers/el-muro-que-nos-separa.webp",
  "La chica que hablaba oso": "/covers/la-chica-que-hablaba-oso.webp",
  "Los ladrones buenos": "/covers/los-ladrones-buenos.webp",
  "El explorador del Amazonas": "/covers/el-explorador-del-amazonas.webp",
  "¿Quién quieres ser?": "/covers/quien-quieres-ser.webp",
  "Ceniza. Historia de una niña y su monstruo": "/covers/ceniza-historia-de-una-nina-y-su-monstruo.webp",
  "El diario de la peste": "/covers/el-diario-de-la-peste.webp",
  "Cuatro Lunas 1. Mareas de magia": "/covers/cuatro-lunas-1-mareas-de-magia.webp",
  "El secreto de mi madre": "/covers/el-secreto-de-mi-madre.webp",
  "Saga Entonces": "/covers/saga-entonces.webp",
  "Julia y el tiburón": "/covers/julia-y-el-tiburon.webp",
  "El mar detrás": "/covers/el-mar-detras.webp",
  "Trenza del mar Esmeralda": "/covers/trenza-del-mar-esmeralda.webp",
  Redes: "/covers/redes.webp",
  "Alas negras": "/covers/alas-negras.webp",
  Guiño: "/covers/guino.webp",
  Ghost: "/covers/ghost.webp",
  "Entre tonos de gris": "/covers/entre-tonos-de-gris.webp",
  "Querido Bruto": "/covers/querido-bruto.webp",
  "Las recetas perdidas de la taberna Kamogawa": "/covers/las-recetas-perdidas-de-la-taberna-kamogawa.webp",
  "Toda la verdad": "/covers/toda-la-verdad.webp",
  "De acuerdo, Jeeves": "/covers/de-acuerdo-jeeves.webp",
  "Cincuenta cincuenta": "/covers/cincuenta-cincuenta.webp",
  "La enfermera de Bellevue": "/covers/la-enfermera-de-bellevue.webp",
  Erupción: "/covers/erupcion.webp",
  "Train Kids": "/covers/train-kids.webp",
  "Ninfa rota": "/covers/ninfa-rota.webp",
  "Voy a traicionarte": "/covers/voy-a-traicionarte.webp",
  "El túnel 29": "/covers/el-tunel-29.webp",
  "Asesinato para principiantes": "/covers/asesinato-para-principiantes.webp",
  "El secreto del río": "/covers/el-secreto-del-rio.webp",
  "Los Titanes del Fútbol. El asesinato del delantero centro": "/covers/los-titanes-del-futbol-el-asesinato-del-delantero-centro.webp",
  "Los Futbolísimos. El misterio del córner más largo del mundo": "/covers/los-futbolisimos-el-misterio-del-corner-mas-largo-del-mundo.webp",
  "La Montaña del Eco": "/covers/la-montana-del-eco.webp",
  "Intriga en Estambul": "/covers/intriga-en-estambul.webp",
  "La memoria de las bicicletas": "/covers/la-memoria-de-las-bicicletas.webp",
  "La historia interminable": "/covers/la-historia-interminable.webp",
  "Entre el amor y la guerra": "/covers/entre-el-amor-y-la-guerra.webp",
  "El pequeño mentiroso": "/covers/el-pequeno-mentiroso.webp",
  "El esplendor de los mares": "/covers/el-esplendor-de-los-mares.webp",
  "Ana, la de las Tejas Verdes": "/covers/ana-la-de-las-tejas-verdes.webp",
  "Quo Vadis?": "/covers/quo-vadis.webp",
  "Track 3. Sunny": "/covers/track-3-sunny.webp",
  "Un hijo": "/covers/un-hijo.webp",
  "El mundo perdido": "/covers/el-mundo-perdido.webp",
  "La chica que lanzaba versos al aire": "/covers/la-chica-que-lanzaba-versos-al-aire.webp",
  "La cacería": "/covers/la-caceria.webp",
  "El retorno de Rachel Price": "/covers/el-retorno-de-rachel-price.webp",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const allBooks = ageGroups.flatMap((group) =>
  group.books.map((book) => ({
    ...book,
    age: group.label,
    category: group.category,
    cover: coverImages[book.title] ? `${basePath}${coverImages[book.title]}` : undefined,
  })),
);

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeAge, setActiveAge] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const visibleBooks = allBooks.filter((book) => {
    const matchesSearch = `${book.title} ${book.author} ${book.description} ${book.age} ${book.category}`.toLowerCase().includes(deferredQuery);
    const matchesAge = !activeAge || book.age === activeAge;
    return matchesSearch && matchesAge;
  });

  const isSearching = !!query;
  const groupsToShow = isSearching
    ? []
    : activeAge
      ? ageGroups.filter((g) => g.label === activeAge)
      : ageGroups;

  function renderCard(book: typeof allBooks[number]) {
    return (
      <details className="book-card" key={`${book.age}-${book.title}`}>
        <summary>
          {book.cover && <img alt={`Portada de ${book.title}`} className="book-cover" loading="lazy" src={book.cover} />}
          <span className="book-meta">{book.age}</span>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </summary>
        <p className="book-description">{book.description}</p>
      </details>
    );
  }

  return (
    <main className="page-shell" id="arriba">
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">Guía interactiva</p>
          <h1 id="page-title">Libros recomendados por edades</h1>
          <p className="subtitle">(5 a 18 años)</p>
          <p className="lead">
            Una selección de lecturas infantiles y juveniles de 5 a 18 años, organizada para encontrar rápido el
            siguiente libro según edad, intereses y etapa lectora.
          </p>
          <p className="credit">
            Una selección realizada por <a href="https://www.aceprensa.com" target="_blank" rel="noopener">Aceprensa</a>, portal
            que analiza las tendencias sociales, corrientes de pensamiento y estilos de vida, con fondo y perspectiva
            internacional.
          </p>
        </div>
        <div className="hero-panel" aria-label="Resumen de la guía">
          <strong>{allBooks.length}</strong>
          <span>recomendaciones</span>
          <strong>{ageGroups.length}</strong>
          <span>tramos de edad</span>
        </div>
      </section>

      <section className="finder" aria-label="Buscador de libros">
        <label className="search-box">
          <span>Buscar por título, autor o tema</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ej. misterio, amistad, Laura Gallego..."
            type="search"
          />
        </label>
        <div className="age-filters">
          {ageGroups.map((group) => (
            <button
              key={group.label}
              className={`age-filter${activeAge === group.label ? " active" : ""}`}
              onClick={() => setActiveAge(activeAge === group.label ? "" : group.label)}
              type="button"
            >
              {group.label}
            </button>
          ))}
        </div>
      </section>

      {isSearching ? (
        <>
          <section className="results-header" aria-live="polite">
            <p>
              {visibleBooks.length} {visibleBooks.length === 1 ? "resultado" : "resultados"}
            </p>
            <button className="reset-button" onClick={() => setQuery("")} type="button">
              Limpiar búsqueda
            </button>
          </section>
          <section className="book-grid" aria-label="Libros recomendados">
            {visibleBooks.map(renderCard)}
          </section>
          {visibleBooks.length === 0 && (
            <section className="empty-state">
              <h2>No hay resultados para esa búsqueda</h2>
              <p>Prueba con otro tramo de edad o con una palabra más general, como aventura, misterio o amistad.</p>
            </section>
          )}
        </>
      ) : (
        groupsToShow.map((group) => (
          <section key={group.label} className="age-section" aria-labelledby={`heading-${group.label}`}>
            <h2 id={`heading-${group.label}`} className="age-heading">{group.label}</h2>
            <p className="age-intro">{group.intro}</p>
            <div className="book-grid">
              {group.books.map((book) => {
                const cover = coverImages[book.title] ? `${basePath}${coverImages[book.title]}` : undefined;
                return renderCard({ ...book, age: group.label, category: group.category, cover });
              })}
            </div>
          </section>
        ))
      )}
    </main>
  );
}

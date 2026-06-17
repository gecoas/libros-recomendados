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
    intro: "Fantasía accesible y relatos profundos adaptados a primeros lectores.",
    books: [
      {
        title: "El mundo según Lea",
        author: "Carlos Javier González Serrano · Beascoa, 2023",
        description:
          "Álbum ilustrado que acerca preguntas filosóficas sobre la identidad, la convivencia y la felicidad mediante relatos sencillos.",
      },
      {
        title: "La bruja que no quería una escoba",
        author: "Susana Isern y David Sierra Listón · Beascoa, 2023",
        description:
          "La bruja Petra aspira a ser discípula del mago Linus, pero descubre que la oportunidad esconde una trampa.",
      },
    ],
  },
  {
    label: "De 8 a 10 años",
    category: "Infantil",
    intro: "Fantasía, clásicos infantiles y relatos de amistad, superación y pensamiento crítico.",
    books: [
      {
        title: "Colegio de poderes secretos",
        author: "César Mallorquí · Alfaguara, 2023",
        description:
          "Axel descubre que quizá tiene poderes mágicos y entra en una escuela para averiguarlo. Aventura ágil, divertida y fantástica.",
      },
      {
        title: "Amarillo",
        author: "Lucy Zamora · Babidibú, 2021",
        description: "Cuentos sobre Susanita y sus peluches, con historias sencillas de fantasía, luz, color y amistad.",
      },
      {
        title: "Karlsson en el tejado",
        author: "Astrid Lindgren · Kókinos, 2022",
        description: "Clásico infantil que mezcla humor y fantasía con un personaje capaz de romper la rutina del protagonista.",
      },
      {
        title: "Miss Agatha. Misterio en Londres",
        author: "Christine Palluy y Sophie Leullier · Larousse, 2023",
        description: "Una Agatha Christie niña investiga una estatuilla rota junto a Max. Incluye acertijos en las ilustraciones.",
      },
      {
        title: "La señora Lana 2",
        author: "Jutta Richter · Lóguez, 2021",
        description: "Segunda aventura de la señora Lana, con fantasía, humor y un mundo de ensueño.",
      },
      {
        title: "El club del fuego secreto",
        author: "Diego Blanco · Encuentro, 2020",
        description: "Primera entrega de una saga infantil que combina aventura, humor y referencias culturales.",
      },
      {
        title: "Herederos. La piedra del destino",
        author: "Juan Gómez Jurado y Bárbara Montes · B de Blok, 2024",
        description: "Aventura al estilo Indiana Jones relacionada con el universo de Amanda Black.",
      },
      {
        title: "Serie Ideas en la Casa del Árbol",
        author: "W. Ama",
        description: "Serie sobre un grupo de amigas en Primaria, centrada en amistad, trabajo en equipo, autoestima y familia.",
      },
      {
        title: "Las almohadas mágicas",
        author: "Evyenios Trivizas · Blackie Books, 2022",
        description: "Fábula fantástica sobre un pueblo sometido por un gobernante déspota y su lucha por recuperar la libertad.",
      },
      {
        title: "Nika y el misterio de Violet Hill",
        author: "Rosario Ana · Destino, 2023",
        description: "Nika investiga un bosque maldito en Inglaterra con ayuda de la lógica y la ciencia.",
      },
      {
        title: "Otra vez al teatro con Rodari",
        author: "Gianni Rodari · SM, 2022",
        description: "Cuatro obras teatrales con fantasía, amistad, humor y preocupación social.",
      },
      {
        title: "El niño de fuego",
        author: "Ledicia Costa · Anaya, 2022",
        description: "Morgan llega envuelto en misterio a Lilitown. Destaca por su ambientación, personajes y valor de la amistad.",
      },
      {
        title: "Guerrero tigre. El ataque del rey dragón",
        author: "M. Chan · SM, 2022",
        description: "Jack descubre el reino de Jade y sus poderes ligados al zodiaco chino. Aventura breve y dinámica.",
      },
    ],
  },
  {
    label: "A partir de 9 años",
    category: "Infantil",
    intro: "Historias de humor y calidad literaria para lectores con más autonomía.",
    books: [
      {
        title: "Cómo arreglar un libro mojado",
        author: "Roberto Aliaga · SM, 2017",
        description: "Novela infantil premiada, con humor, buenos personajes y un giro final sorprendente.",
      },
      {
        title: "Capitán Lucas",
        author: "Carles Sala i Vila · La Galera, 2022",
        description: "Aventura imaginativa y humorística sobre unos niños que se escapan de su pueblo.",
      },
    ],
  },
  {
    label: "De 10 a 12 años",
    category: "Juvenil",
    intro: "Fantasía, misterio y crecimiento personal para preadolescentes.",
    books: [
      {
        title: "El secreto del contrabandista",
        author: "Elly Griffiths · Maeva Young, 2023",
        description: "Justina investiga en un internado inglés de entreguerras. Destacan la ambientación y la amistad.",
      },
      {
        title: "Los tres terribles inventos de Walter Swizwittha",
        author: "Ben Brooks · Blackie Books, 2024",
        description: "Aventura con crítica a redes sociales, trabajo abusivo y falta de comunidad.",
      },
      {
        title: "Crónicas de Avonlea",
        author: "Lucy Maud Montgomery · Almuzara, 2024",
        description: "Relatos ambientados en una comunidad rural con drama, humor y crecimiento.",
      },
      {
        title: "Preparados, listo, ¡ya!",
        author: "Andrea Tomé · La Galera, 2023",
        description: "Novela deportiva sobre atletismo, superación e integración en un nuevo equipo.",
      },
      {
        title: "El joven Lorca",
        author: "Luna Bruna · Duomo, 2024",
        description: "Aventura y misterio sobre Federico García Lorca niño y sus amistades.",
      },
      {
        title: "Los dioses del Norte 5. El despertar del lobo",
        author: "Jara Santamaría · B de Blok, 2024",
        description: "Fantasía basada en mitología vasca con mundos paralelos y narración coral.",
      },
      {
        title: "Amanda Black. El templo olvidado",
        author: "Juan Gómez Jurado y Bárbara Montes · B de Blok, 2024",
        description: "Nueva aventura de Amanda Black con tecnología, valentía y objetos mágicos peligrosos.",
      },
      {
        title: "City Spies 3. La ciudad prohibida",
        author: "James Ponti · Duomo, 2024",
        description: "Espionaje juvenil ágil, con amistad y distinción entre el bien y el mal.",
      },
      {
        title: "Manuela Jones y el misterio de la Alhambra",
        author: "Miriam Mosquera · Molino, 2025",
        description: "Aventura arqueológica y divulgativa ambientada en Granada.",
      },
      {
        title: "Feriópolis",
        author: "Ledicia Costa · SM, 2025",
        description: "Novela corta premiada sobre una niña huérfana que busca familia y felicidad en un mundo imaginativo.",
      },
      {
        title: "Crónicas de la prehistoria",
        author: "Michelle Paver · Salamandra",
        description: "Saga de fantasía ambientada en la Edad de Piedra, con aventura, magia, amistad y acción.",
      },
    ],
  },
  {
    label: "A partir de 11 años",
    category: "Juvenil",
    intro: "Aventuras, misterio y fantasía con valentía, perseverancia y crecimiento.",
    books: [
      {
        title: "Trilogía de Howl",
        author: "Diana Wynne Jones · Nocturna",
        description: "Clásico moderno de fantasía sobre Sophie, una maldición y el castillo ambulante del mago Howl.",
      },
      {
        title: "Secuestro en la pandemia",
        author: "Juan José Molina · Alexia, 2025",
        description: "Novela breve de aventuras y misterio sobre el paso a la madurez de un adolescente.",
      },
      {
        title: "El príncipe de los caballos",
        author: "Stacy Gregg · HarperCollins, 2021",
        description: "Historia de resiliencia ambientada en la Polonia invadida de 1939.",
      },
    ],
  },
  {
    label: "De 12 a 14 años",
    category: "Juvenil",
    intro: "Fantasía, historia, aventuras y misterio con amistad, valentía y responsabilidad.",
    books: [
      {
        title: "Elliot Tomclyde",
        author: "Joaquín Londaíz Montiel · Torbellino de Letras, 2021",
        description: "Inicio de una saga mágica con formación, aventuras y amenaza de un villano.",
      },
      {
        title: "La historia imposible de Sebastian Cole",
        author: "Ben Brooks · Blackie Books, 2020",
        description: "Fantasía y aventuras sobre amistad, familia y rescate.",
      },
      {
        title: "El muro que nos separa",
        author: "Dan Smith · Algar, 2024",
        description: "Novela epistolar sobre dos primas separadas por el Muro de Berlín.",
      },
      {
        title: "La chica que hablaba oso",
        author: "Sophie Anderson · Errata Naturae, 2024",
        description: "Búsqueda de identidad enlazada con cuentos de tradición rusa.",
      },
      {
        title: "Los ladrones buenos",
        author: "Katherine Rundell · Salamandra, 2021",
        description: "Aventura en el Nueva York de principios del siglo XX con una protagonista valiente.",
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
    ],
  },
  {
    label: "A partir de 13 años",
    category: "Juvenil",
    intro: "Novelas históricas que combinan hechos reales y aventura.",
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
    intro: "Salud mental, acoso, enfermedad, amistad, redes sociales, aventura y refugiados.",
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
    intro: "Misterio, intriga, gastronomía literaria y humor inteligente.",
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
    intro: "Identidad, relaciones, retos personales, historia, misterio y madurez lectora.",
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
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const visibleBooks = allBooks.filter((book) => {
    const searchable = `${book.title} ${book.author} ${book.description} ${book.age} ${book.category}`.toLowerCase();
    return searchable.includes(deferredQuery);
  });

  return (
    <main className="page-shell" id="arriba">
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">Guía interactiva</p>
          <h1 id="page-title">Libros recomendados por edades</h1>
          <p className="lead">
            Una selección de lecturas infantiles y juveniles de 5 a 18 años, organizada para encontrar rápido el
            siguiente libro según edad, intereses y etapa lectora.
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
      </section>

      <section className="results-header" aria-live="polite">
        <p>
          {visibleBooks.length} {visibleBooks.length === 1 ? "resultado" : "resultados"}
        </p>
        {query && (
          <button
            className="reset-button"
            onClick={() => setQuery("")}
            type="button"
          >
            Limpiar búsqueda
          </button>
        )}
      </section>

      <section className="book-grid" aria-label="Libros recomendados">
        {visibleBooks.map((book) => (
          <details className="book-card" key={`${book.age}-${book.title}`}>
            <summary>
              {book.cover && <img alt={`Portada de ${book.title}`} className="book-cover" loading="lazy" src={book.cover} />}
              <span className="book-meta">{book.age}</span>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </summary>
            <p className="book-description">{book.description}</p>
          </details>
        ))}
      </section>

      {visibleBooks.length === 0 && (
        <section className="empty-state">
          <h2>No hay resultados para esa búsqueda</h2>
          <p>Prueba con otro tramo de edad o con una palabra más general, como aventura, misterio o amistad.</p>
        </section>
      )}
    </main>
  );
}

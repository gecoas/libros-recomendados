"use client";

import { startTransition, useDeferredValue, useState } from "react";

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

const allBooks = ageGroups.flatMap((group) => group.books.map((book) => ({ ...book, age: group.label, category: group.category })));
const ageFilters = ["Todas", ...ageGroups.map((group) => group.label)];
const categoryFilters = ["Todas", "Infantil", "Juvenil"];

export default function Home() {
  const [selectedAge, setSelectedAge] = useState("Todas");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const visibleBooks = allBooks.filter((book) => {
    const matchesAge = selectedAge === "Todas" || book.age === selectedAge;
    const matchesCategory = selectedCategory === "Todas" || book.category === selectedCategory;
    const searchable = `${book.title} ${book.author} ${book.description} ${book.age}`.toLowerCase();
    return matchesAge && matchesCategory && searchable.includes(deferredQuery);
  });

  function updateAge(age: string) {
    startTransition(() => setSelectedAge(age));
  }

  function updateCategory(category: string) {
    startTransition(() => setSelectedCategory(category));
  }

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

      <section className="finder" aria-label="Buscador y filtros">
        <label className="search-box">
          <span>Buscar por título, autor o tema</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ej. misterio, amistad, Laura Gallego..."
            type="search"
          />
        </label>

        <div className="filter-block" aria-label="Filtrar por etapa">
          {categoryFilters.map((category) => (
            <button
              className={selectedCategory === category ? "chip active" : "chip"}
              key={category}
              onClick={() => updateCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="age-strip" aria-label="Filtrar por edad">
          {ageFilters.map((age) => (
            <button className={selectedAge === age ? "age-pill active" : "age-pill"} key={age} onClick={() => updateAge(age)} type="button">
              {age}
            </button>
          ))}
        </div>
      </section>

      <section className="age-map" aria-label="Mapa de edades">
        {ageGroups.map((group) => (
          <button className="age-card" key={group.label} onClick={() => updateAge(group.label)} type="button">
            <span>{group.category}</span>
            <strong>{group.label}</strong>
            <small>{group.books.length} libros</small>
          </button>
        ))}
      </section>

      <section className="results-header" aria-live="polite">
        <p>
          {visibleBooks.length} {visibleBooks.length === 1 ? "resultado" : "resultados"}
        </p>
        {(selectedAge !== "Todas" || selectedCategory !== "Todas" || query) && (
          <button
            className="reset-button"
            onClick={() => {
              setQuery("");
              setSelectedAge("Todas");
              setSelectedCategory("Todas");
            }}
            type="button"
          >
            Limpiar filtros
          </button>
        )}
      </section>

      <section className="book-grid" aria-label="Libros recomendados">
        {visibleBooks.map((book) => (
          <details className="book-card" key={`${book.age}-${book.title}`}>
            <summary>
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
          <h2>No hay resultados con esos filtros</h2>
          <p>Prueba con otro tramo de edad o con una palabra más general, como aventura, misterio o amistad.</p>
        </section>
      )}
    </main>
  );
}

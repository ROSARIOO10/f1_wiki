// ============================================
// DATOS DE PILOTOS (33 pilotos históricos)
// ============================================
const pilots = [
    {
        id: 1,
        number: 1,
        name: "Juan Manuel Fangio",
        team: "Alfa Romeo / Mercedes / Ferrari / Maserati",
        era: "1950-1958",
        teamFilter: "legend",
        description: "La mayor leyenda de la F1. Ganador de 5 campeonatos mundiales. Considerado el mejor piloto de su era con técnica impecable.",
        nationality: "Argentina",
        championships: 5,
        points: 244,
        debut: 1950,
        podiums: 35,
        victories: 24,
        emoji: "🇦🇷"
    },
    {
        id: 2,
        number: 41,
        name: "Ayrton Senna",
        team: "Toleman / Lotus / McLaren / Williams",
        era: "1984-1994",
        teamFilter: "legend",
        description: "Tres veces campeón mundial. Leyenda de la F1 con velocidad bruta incomparable y pasión extrema en la competición.",
        nationality: "Brasil",
        championships: 3,
        points: 610,
        debut: 1984,
        podiums: 64,
        victories: 41,
        emoji: "🇧🇷"
    },
    {
        id: 3,
        number: 27,
        name: "Alain Prost",
        team: "McLaren / Ferrari / Williams / Benetton",
        era: "1980-1993",
        teamFilter: "legend",
        description: "Cuatro veces campeón mundial. 'El Profesor' fue maestro de la táctica y consistencia. Rival histórico de Senna.",
        nationality: "Francia",
        championships: 4,
        points: 798.5,
        debut: 1980,
        podiums: 106,
        victories: 51,
        emoji: "🇫🇷"
    },
    {
        id: 4,
        number: 13,
        name: "Michael Schumacher",
        team: "Benetton / Ferrari",
        era: "1991-2006",
        teamFilter: "legend",
        description: "Siete veces campeón mundial. Dominó la F1 en los 2000 con Ferrari. Estableció múltiples récords históricos.",
        nationality: "Alemania",
        championships: 7,
        points: 1369,
        debut: 1991,
        podiums: 155,
        victories: 91,
        emoji: "🇩🇪"
    },
    {
        id: 5,
        number: 9,
        name: "Jackie Stewart",
        team: "BRM / Tyrrell / Lotus",
        era: "1965-1973",
        teamFilter: "legend",
        description: "Tres veces campeón mundial británico. Piloto versátil de los años 70 y pionero en seguridad.",
        nationality: "Reino Unido",
        championships: 3,
        points: 360,
        debut: 1965,
        podiums: 43,
        victories: 27,
        emoji: "🇬🇧"
    },
    {
        id: 6,
        number: 12,
        name: "Nigel Mansell",
        team: "Lotus / McLaren / Ferrari / Williams",
        era: "1980-1994",
        teamFilter: "legend",
        description: "Campeón mundial en 1992. Piloto agresivo intimidante conocido por su físico y determinación feroz.",
        nationality: "Reino Unido",
        championships: 1,
        points: 480,
        debut: 1980,
        podiums: 59,
        victories: 31,
        emoji: "🇬🇧"
    },
    {
        id: 7,
        number: 5,
        name: "Kimi Räikkönen",
        team: "McLaren / Ferrari / Lotus",
        era: "2001-2018",
        teamFilter: "legend",
        description: "Campeón mundial en 2007. Piloto finlandés legendario con determinación imperturbable.",
        nationality: "Finlandia",
        championships: 1,
        points: 1873,
        debut: 2001,
        podiums: 103,
        victories: 21,
        emoji: "🇫🇮"
    },
    {
        id: 8,
        number: 2,
        name: "David Coulthard",
        team: "Williams / McLaren / Red Bull",
        era: "1994-2008",
        teamFilter: "modern-past",
        description: "Piloto consistente de los años 90 y 2000. Ganador de 13 Grandes Premios con carrera larga y exitosa.",
        nationality: "Reino Unido",
        championships: 0,
        points: 535,
        debut: 1994,
        podiums: 62,
        victories: 13,
        emoji: "🇬🇧"
    },
    {
        id: 9,
        number: 6,
        name: "Rubens Barrichello",
        team: "Ferrari / Brawn / Williams",
        era: "1994-2011",
        teamFilter: "modern-past",
        description: "Piloto con mayor longevidad en F1. Corrió 18 años. Ganador de 11 Grandes Premios y múltiples podios.",
        nationality: "Brasil",
        championships: 0,
        points: 658,
        debut: 1994,
        podiums: 68,
        victories: 11,
        emoji: "🇧🇷"
    },
    {
        id: 10,
        number: 11,
        name: "Juan Pablo Montoya",
        team: "Williams / McLaren",
        era: "2001-2006",
        teamFilter: "modern-past",
        description: "Piloto colombiano carismático y agresivo. Ganador de 7 Grandes Premios con estilo arriesgado.",
        nationality: "Colombia",
        championships: 0,
        points: 666,
        debut: 2001,
        podiums: 30,
        victories: 7,
        emoji: "🇨🇴"
    },
    {
        id: 11,
        number: 7,
        name: "Gerhard Berger",
        team: "Benetton / McLaren / Ferrari",
        era: "1984-1997",
        teamFilter: "modern-past",
        description: "Piloto austriaco consistente y competitivo. Ganador de 10 Grandes Premios con carrera sólida.",
        nationality: "Austria",
        championships: 0,
        points: 385,
        debut: 1984,
        podiums: 48,
        victories: 10,
        emoji: "🇦🇹"
    },
    {
        id: 12,
        number: 1,
        name: "Damon Hill",
        team: "Williams / Arrows / Jordan",
        era: "1992-1999",
        teamFilter: "modern-past",
        description: "Campeón mundial en 1996. Hijo de Graham Hill. Piloto talentoso con 22 victorias.",
        nationality: "Reino Unido",
        championships: 1,
        points: 359,
        debut: 1992,
        podiums: 42,
        victories: 22,
        emoji: "🇬🇧"
    },
    {
        id: 13,
        number: 2,
        name: "Mika Häkkinen",
        team: "Lotus / McLaren",
        era: "1991-2001",
        teamFilter: "modern-past",
        description: "Dos veces campeón mundial (1998-1999). Piloto finlandés rápido y consistente.",
        nationality: "Finlandia",
        championships: 2,
        points: 512,
        debut: 1991,
        podiums: 51,
        victories: 20,
        emoji: "🇫🇮"
    },
    {
        id: 14,
        number: 44,
        name: "Lewis Hamilton",
        team: "Mercedes",
        era: "2007-presente",
        teamFilter: "modern",
        description: "Siete veces campeón mundial. Leyenda viviente. Rompió múltiples récords históricos.",
        nationality: "Reino Unido",
        championships: 7,
        points: 1648,
        debut: 2007,
        podiums: 196,
        victories: 103,
        emoji: "🇬🇧"
    },
    {
        id: 15,
        number: 19,
        name: "Felipe Massa",
        team: "Ferrari / Williams",
        era: "2006-2017",
        teamFilter: "modern",
        description: "Piloto brasileño consistente. Fue piloto de Ferrari muchos años. Ganador de 11 Grandes Premios.",
        nationality: "Brasil",
        championships: 0,
        points: 1436,
        debut: 2006,
        podiums: 41,
        victories: 11,
        emoji: "🇧🇷"
    },
    {
        id: 16,
        number: 5,
        name: "Sebastian Vettel",
        team: "Red Bull / Ferrari",
        era: "2007-2022",
        teamFilter: "modern",
        description: "Cuatro veces campeón mundial con Red Bull. Ganador de 53 Grandes Premios. Piloto versátil.",
        nationality: "Alemania",
        championships: 4,
        points: 3078,
        debut: 2007,
        podiums: 122,
        victories: 53,
        emoji: "🇩🇪"
    },
    {
        id: 17,
        number: 6,
        name: "Nico Rosberg",
        team: "Mercedes",
        era: "2010-2016",
        teamFilter: "modern",
        description: "Campeón mundial en 2016. Logró vencer a Hamilton en batalla épica de temporada completa.",
        nationality: "Alemania",
        championships: 1,
        points: 1580,
        debut: 2010,
        podiums: 57,
        victories: 23,
        emoji: "🇩🇪"
    },
    {
        id: 18,
        number: 3,
        name: "Daniel Ricciardo",
        team: "Red Bull / McLaren",
        era: "2011-presente",
        teamFilter: "modern",
        description: "Piloto australiano carismático y popular. Ganador de 8 Grandes Premios. Conocido por su sonrisa.",
        nationality: "Australia",
        championships: 0,
        points: 1532,
        debut: 2011,
        podiums: 32,
        victories: 8,
        emoji: "🇦🇺"
    },
    {
        id: 19,
        number: 7,
        name: "Mark Webber",
        team: "Minardi / Williams / Red Bull",
        era: "2002-2013",
        teamFilter: "modern",
        description: "Piloto australiano consistente. Ganador de 9 Grandes Premios con Red Bull muy competitivo.",
        nationality: "Australia",
        championships: 0,
        points: 1289,
        debut: 2002,
        podiums: 50,
        victories: 9,
        emoji: "🇦🇺"
    },
    {
        id: 20,
        number: 2,
        name: "Jenson Button",
        team: "Williams / BAR / Honda / Brawn / McLaren",
        era: "2000-2016",
        teamFilter: "modern",
        description: "Campeón mundial en 2009 con Brawn GP. Ganador de 15 Grandes Premios con carrera larga.",
        nationality: "Reino Unido",
        championships: 1,
        points: 1235,
        debut: 2000,
        podiums: 50,
        victories: 15,
        emoji: "🇬🇧"
    },
    {
        id: 21,
        number: 33,
        name: "Max Verstappen",
        team: "Red Bull Racing",
        era: "2015-presente",
        teamFilter: "contemporary",
        description: "Triple campeón mundial. Considerado el piloto más talentoso de su generación. Récord de victorias.",
        nationality: "Países Bajos",
        championships: 3,
        points: 1850,
        debut: 2015,
        podiums: 98,
        victories: 62,
        emoji: "🇳🇱"
    },
    {
        id: 22,
        number: 16,
        name: "Charles Leclerc",
        team: "Ferrari",
        era: "2018-presente",
        teamFilter: "contemporary",
        description: "Joven piloto de Ferrari con gran potencial. Demuestra consistencia y velocidad excepcional.",
        nationality: "Mónaco",
        championships: 0,
        points: 982,
        debut: 2018,
        podiums: 42,
        victories: 5,
        emoji: "🇲🇨"
    },
    {
        id: 23,
        number: 55,
        name: "Carlos Sainz Jr.",
        team: "Ferrari",
        era: "2015-presente",
        teamFilter: "contemporary",
        description: "Piloto español experimentado. Ganador de 5 Grandes Premios. Consistente y versátil.",
        nationality: "España",
        championships: 0,
        points: 890,
        debut: 2015,
        podiums: 56,
        victories: 5,
        emoji: "🇪🇸"
    },
    {
        id: 24,
        number: 4,
        name: "Lando Norris",
        team: "McLaren",
        era: "2019-presente",
        teamFilter: "contemporary",
        description: "Estrella joven británica de McLaren. Demuestra velocidad y consistencia notables.",
        nationality: "Reino Unido",
        championships: 0,
        points: 756,
        debut: 2019,
        podiums: 28,
        victories: 0,
        emoji: "🇬🇧"
    },
    {
        id: 25,
        number: 81,
        name: "Oscar Piastri",
        team: "McLaren",
        era: "2023-presente",
        teamFilter: "contemporary",
        description: "Talento australiano emergente. Rápido y adaptable. Ganador del campeonato F2.",
        nationality: "Australia",
        championships: 0,
        points: 654,
        debut: 2023,
        podiums: 12,
        victories: 0,
        emoji: "🇦🇺"
    },
    {
        id: 26,
        number: 63,
        name: "George Russell",
        team: "Mercedes",
        era: "2019-presente",
        teamFilter: "contemporary",
        description: "Piloto británico competitivo. Gran potencial para ganar campeonatos en el futuro.",
        nationality: "Reino Unido",
        championships: 0,
        points: 712,
        debut: 2019,
        podiums: 24,
        victories: 1,
        emoji: "🇬🇧"
    },
    {
        id: 27,
        number: 14,
        name: "Fernando Alonso",
        team: "Aston Martin",
        era: "2001-2018, 2021-presente",
        teamFilter: "contemporary",
        description: "Leyenda viviente. Dos veces campeón mundial. Regresó para demostrar competitividad a 40+ años.",
        nationality: "España",
        championships: 2,
        points: 581,
        debut: 2001,
        podiums: 98,
        victories: 32,
        emoji: "🇪🇸"
    },
    {
        id: 28,
        number: 18,
        name: "Lance Stroll",
        team: "Aston Martin",
        era: "2014-presente",
        teamFilter: "contemporary",
        description: "Piloto canadiense consistente. Buscando establecer su legado en Aston Martin.",
        nationality: "Canadá",
        championships: 0,
        points: 398,
        debut: 2014,
        podiums: 3,
        victories: 0,
        emoji: "🇨🇦"
    },
    {
        id: 29,
        number: 10,
        name: "Yuki Tsunoda",
        team: "Racing Bulls",
        era: "2021-presente",
        teamFilter: "contemporary",
        description: "Piloto japonés prometedor. Demuestra gran velocidad y consistencia notable.",
        nationality: "Japón",
        championships: 0,
        points: 275,
        debut: 2021,
        podiums: 1,
        victories: 0,
        emoji: "🇯🇵"
    },
    {
        id: 30,
        number: 27,
        name: "Nico Hülkenberg",
        team: "Haas",
        era: "2010-2022, 2023-presente",
        teamFilter: "contemporary",
        description: "Veterano experimentado. Regresó a la F1 con Haas demostrando veteranía.",
        nationality: "Alemania",
        championships: 0,
        points: 224,
        debut: 2010,
        podiums: 30,
        victories: 0,
        emoji: "🇩🇪"
    },
    {
        id: 31,
        number: 2,
        name: "Logan Sargeant",
        team: "Williams",
        era: "2023-presente",
        teamFilter: "contemporary",
        description: "Piloto estadounidense en Williams. Busca demostrar su valor en la máxima categoría.",
        nationality: "Estados Unidos",
        championships: 0,
        points: 62,
        debut: 2023,
        podiums: 0,
        victories: 0,
        emoji: "🇺🇸"
    },
    {
        id: 32,
        number: 81,
        name: "Zhou Guanyu",
        team: "Alfa Romeo / Sauber",
        era: "2022-presente",
        teamFilter: "contemporary",
        description: "Piloto chino en F1. Primer piloto de China en la Fórmula 1 de la era moderna.",
        nationality: "China",
        championships: 0,
        points: 50,
        debut: 2022,
        podiums: 1,
        victories: 0,
        emoji: "🇨🇳"
    },
    {
        id: 33,
        number: 1,
        name: "Alan Prost (Young)",
        team: "McLaren",
        era: "1983-1989",
        teamFilter: "legend",
        description: "Primer período de Prost ganando 3 títulos con McLaren. Considerado 'El Profesor'.",
        nationality: "Francia",
        championships: 3,
        points: 658,
        debut: 1980,
        podiums: 100,
        victories: 47,
        emoji: "🇫🇷"
    }
];

const pistas = [
    { id: 1, name: "Circuito de Mónaco", country: "Mónaco", longitud: "3.337 km", vueltas: 78, distancia: "260 km", recordVuelta: "1:11.703", recordPiloto: "Charles Leclerc", emoji: "🏰" },
    { id: 2, name: "Autódromo José María de Azcárraga", country: "México", longitud: "4.304 km", vueltas: 71, distancia: "305 km", recordVuelta: "1:17.040", recordPiloto: "Max Verstappen", emoji: "🇲🇽" },
    { id: 3, name: "Circuito de Silverstone", country: "Reino Unido", longitud: "5.891 km", vueltas: 52, distancia: "306 km", recordVuelta: "1:27.097", recordPiloto: "Lewis Hamilton", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { id: 4, name: "Autodromo Nazionale di Monza", country: "Italia", longitud: "5.793 km", vueltas: 53, distancia: "307 km", recordVuelta: "1:21.046", recordPiloto: "Sebastian Vettel", emoji: "🇮🇹" },
    { id: 5, name: "Circuito de Barcelona-Cataluña", country: "España", longitud: "4.655 km", vueltas: 66, distancia: "307 km", recordVuelta: "1:16.330", recordPiloto: "Max Verstappen", emoji: "🇪🇸" },
    { id: 6, name: "Circuito Gilles Villeneuve", country: "Canadá", longitud: "4.361 km", vueltas: 70, distancia: "305 km", recordVuelta: "1:13.622", recordPiloto: "Lewis Hamilton", emoji: "🇨🇦" },
    { id: 7, name: "Autódromo José de Alencar", country: "Brasil", longitud: "4.309 km", vueltas: 71, distancia: "305 km", recordVuelta: "1:10.540", recordPiloto: "Juan Pablo Montoya", emoji: "🇧🇷" },
    { id: 8, name: "Marina Bay Street Circuit", country: "Singapur", longitud: "5.065 km", vueltas: 61, distancia: "309 km", recordVuelta: "1:35.891", recordPiloto: "Sebastian Vettel", emoji: "🇸🇬" },
    { id: 9, name: "Suzuka International Racing Course", country: "Japón", longitud: "5.807 km", vueltas: 53, distancia: "307 km", recordVuelta: "1:27.064", recordPiloto: "Sebastian Vettel", emoji: "🇯🇵" },
    { id: 10, name: "Yas Marina Circuit", country: "Emiratos Árabes Unidos", longitud: "5.281 km", vueltas: 58, distancia: "306 km", recordVuelta: "1:26.103", recordPiloto: "Lewis Hamilton", emoji: "🇦🇪" },
    { id: 11, name: "Red Bull Ring", country: "Austria", longitud: "4.318 km", vueltas: 71, distancia: "306 km", recordVuelta: "1:05.619", recordPiloto: "Max Verstappen", emoji: "🇦🇹" },
    { id: 12, name: "Circuit Paul Ricard", country: "Francia", longitud: "5.842 km", vueltas: 53, distancia: "309 km", recordVuelta: "1:32.740", recordPiloto: "Max Verstappen", emoji: "🇫🇷" },
    { id: 13, name: "Circuit Zandvoort", country: "Países Bajos", longitud: "4.259 km", vueltas: 72, distancia: "306 km", recordVuelta: "1:11.097", recordPiloto: "Max Verstappen", emoji: "🇳🇱" },
    { id: 14, name: "Hungaroring", country: "Hungría", longitud: "4.381 km", vueltas: 70, distancia: "306 km", recordVuelta: "1:16.627", recordPiloto: "Lewis Hamilton", emoji: "🇭🇺" },
    { id: 15, name: "Nürburgring", country: "Alemania", longitud: "5.148 km", vueltas: 60, distancia: "309 km", recordVuelta: "1:29.468", recordPiloto: "Max Verstappen", emoji: "🇩🇪" },
    { id: 16, name: "Losail International Circuit", country: "Qatar", longitud: "5.419 km", vueltas: 57, distancia: "309 km", recordVuelta: "1:23.196", recordPiloto: "Max Verstappen", emoji: "🇶🇦" },
    { id: 17, name: "Jeddah Corniche Circuit", country: "Arabia Saudí", longitud: "6.174 km", vueltas: 50, distancia: "308 km", recordVuelta: "1:27.511", recordPiloto: "Charles Leclerc", emoji: "🇸🇦" },
    { id: 18, name: "Melbourne Grand Prix Circuit", country: "Australia", longitud: "5.303 km", vueltas: 58, distancia: "307 km", recordVuelta: "1:24.125", recordPiloto: "Lewis Hamilton", emoji: "🇦🇺" },
    { id: 19, name: "Shanghai International Circuit", country: "China", longitud: "5.451 km", vueltas: 56, distancia: "305 km", recordVuelta: "1:31.473", recordPiloto: "Sebastian Vettel", emoji: "🇨🇳" },
    { id: 20, name: "Circuit of the Americas", country: "Estados Unidos", longitud: "5.515 km", vueltas: 56, distancia: "308 km", recordVuelta: "1:32.238", recordPiloto: "Max Verstappen", emoji: "🇺🇸" },
    { id: 21, name: "Baku City Circuit", country: "Azerbaiyán", longitud: "6.003 km", vueltas: 51, distancia: "306 km", recordVuelta: "1:43.009", recordPiloto: "Charles Leclerc", emoji: "🇦🇿" },
    { id: 22, name: "Spa-Francorchamps", country: "Bélgica", longitud: "7.004 km", vueltas: 44, distancia: "308 km", recordVuelta: "1:46.286", recordPiloto: "Lewis Hamilton", emoji: "🇧🇪" },
    { id: 23, name: "Circuit Las Vegas", country: "Estados Unidos", longitud: "6.120 km", vueltas: 50, distancia: "306 km", recordVuelta: "1:35.890", recordPiloto: "Max Verstappen", emoji: "🎰" }
];

const coches = [
    { id: 1, name: "Red Bull RB21", team: "Red Bull Racing", pilotos: "Max Verstappen & Liam Lawson", motor: "Honda RBPT", potencia: "1050 CV", peso: "798 kg", aceleracion: "2.5 seg", velocidad: "370 km/h", emoji: "🔵" },
    { id: 2, name: "Mercedes W16", team: "Mercedes", pilotos: "Lewis Hamilton & George Russell", motor: "Mercedes", potencia: "1050 CV", peso: "798 kg", aceleracion: "2.6 seg", velocidad: "365 km/h", emoji: "⭐" },
    { id: 3, name: "Ferrari SF-25", team: "Ferrari", pilotos: "Charles Leclerc & Lewis Hamilton", motor: "Ferrari", potencia: "1050 CV", peso: "798 kg", aceleracion: "2.6 seg", velocidad: "368 km/h", emoji: "🐴" },
    { id: 4, name: "McLaren MCL39", team: "McLaren", pilotos: "Lando Norris & Oscar Piastri", motor: "Mercedes", potencia: "1050 CV", peso: "798 kg", aceleracion: "2.7 seg", velocidad: "360 km/h", emoji: "🧡" },
    { id: 5, name: "Aston Martin AMR25", team: "Aston Martin", pilotos: "Fernando Alonso & Lance Stroll", motor: "Mercedes", potencia: "1050 CV", peso: "798 kg", aceleracion: "2.8 seg", velocidad: "358 km/h", emoji: "💚" },
    { id: 6, name: "Haas VF-25", team: "Haas F1 Team", pilotos: "Nico Hülkenberg & Kevin Magnussen", motor: "Ferrari", potencia: "1050 CV", peso: "798 kg", aceleracion: "2.9 seg", velocidad: "355 km/h", emoji: "🇺🇸" },
    { id: 7, name: "RB21B (Racing Bulls)", team: "Racing Bulls", pilotos: "Yuki Tsunoda & Isack Hadjar", motor: "Honda RBPT", potencia: "1050 CV", peso: "798 kg", aceleracion: "2.9 seg", velocidad: "354 km/h", emoji: "🟦" },
    { id: 8, name: "Williams FW47", team: "Williams Racing", pilotos: "Alex Albon & Logan Sargeant", motor: "Mercedes", potencia: "1050 CV", peso: "798 kg", aceleracion: "3.0 seg", velocidad: "352 km/h", emoji: "🔵⚪" },
    { id: 9, name: "Sauber C45", team: "Kick Sauber", pilotos: "Zhou Guanyu & Gabriel Bortoleto", motor: "Ferrari", potencia: "1050 CV", peso: "798 kg", aceleracion: "3.0 seg", velocidad: "350 km/h", emoji: "⚫" },
    { id: 10, name: "Alpine A525", team: "Alpine F1 Team", pilotos: "Pierre Gasly & Jack Doohan", motor: "Renault", potencia: "1050 CV", peso: "798 kg", aceleracion: "3.1 seg", velocidad: "348 km/h", emoji: "🔵🟡" }
];

let currentFilter = 'all';
let searchTerm = '';
let searchPistas = '';
let searchCoches = '';
let sortBy = 'name';
let pilotImages = {};
let currentTab = 'pilotos';

function loadImagesFromStorage() {
    const saved = localStorage.getItem('pilotImages');
    if (saved) pilotImages = JSON.parse(saved);
}

function saveImagesToStorage() {
    localStorage.setItem('pilotImages', JSON.stringify(pilotImages));
}

function populateItemSelect() {
    const select = document.getElementById('itemSelect');
    select.innerHTML = '<option value="">-- Selecciona --</option>';
    
    if (currentTab === 'pilotos') {
        pilots.forEach(pilot => {
            const option = document.createElement('option');
            option.value = `pilot-${pilot.id}`;
            option.textContent = `👨‍✈️ Nº${pilot.number} - ${pilot.name}`;
            select.appendChild(option);
        });
    } else if (currentTab === 'pistas') {
        pistas.forEach(pista => {
            const option = document.createElement('option');
            option.value = `pista-${pista.id}`;
            option.textContent = `🏁 ${pista.name}`;
            select.appendChild(option);
        });
    } else if (currentTab === 'coches') {
        coches.forEach(coche => {
            const option = document.createElement('option');
            option.value = `coche-${coche.id}`;
            option.textContent = `🏎️ ${coche.team}`;
            select.appendChild(option);
        });
    }
}

function displayUploadedImages() {
    const list = document.getElementById('uploadedImagesList');
    list.innerHTML = '';
    
    Object.entries(pilotImages).forEach(([key, imageData]) => {
        const [type, id] = key.split('-');
        let item;
        
        if (type === 'pilot') {
            item = pilots.find(p => p.id === parseInt(id));
            if (item) {
                const div = document.createElement('div');
                div.className = 'uploaded-item';
                div.innerHTML = `<div class="uploaded-item-name">👨‍✈️ ${item.name}</div><img src="${imageData}" alt="${item.name}" class="uploaded-item-preview">`;
                list.appendChild(div);
            }
        } else if (type === 'pista') {
            item = pistas.find(p => p.id === parseInt(id));
            if (item) {
                const div = document.createElement('div');
                div.className = 'uploaded-item';
                div.innerHTML = `<div class="uploaded-item-name">🏁 ${item.name}</div><img src="${imageData}" alt="${item.name}" class="uploaded-item-preview">`;
                list.appendChild(div);
            }
        } else if (type === 'coche') {
            item = coches.find(c => c.id === parseInt(id));
            if (item) {
                const div = document.createElement('div');
                div.className = 'uploaded-item';
                div.innerHTML = `<div class="uploaded-item-name">🏎️ ${item.team}</div><img src="${imageData}" alt="${item.team}" class="uploaded-item-preview">`;
                list.appendChild(div);
            }
        }
    });

    if (Object.keys(pilotImages).length === 0) {
        list.innerHTML = '<p class="empty-message">No hay imágenes cargadas aún</p>';
    }
}

function getFilteredAndSortedPilots() {
    let filtered = pilots.filter(pilot => {
        const matchesFilter = currentFilter === 'all' || pilot.teamFilter === currentFilter;
        const matchesSearch = searchTerm === '' || pilot.name.toLowerCase().includes(searchTerm.toLowerCase()) || pilot.team.toLowerCase().includes(searchTerm.toLowerCase()) || pilot.nationality.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    filtered.sort((a, b) => {
        switch(sortBy) {
            case 'championships': return b.championships - a.championships;
            case 'victories': return b.victories - a.victories;
            case 'debut': return a.debut - b.debut;
            default: return a.name.localeCompare(b.name);
        }
    });

    return filtered;
}

function renderPilots() {
    const container = document.getElementById('pilotsContainer');
    container.innerHTML = '';
    const filteredPilots = getFilteredAndSortedPilots();
    document.getElementById('pilotsCount').textContent = filteredPilots.length;
    
    filteredPilots.forEach(pilot => {
        const card = document.createElement('div');
        card.className = 'pilot-card';
        const imageContent = pilotImages[`pilot-${pilot.id}`] ? `<img src="${pilotImages[`pilot-${pilot.id}`]}" alt="${pilot.name}" class="pilot-image">` : `<div class="pilot-image-placeholder">${pilot.emoji}</div>`;
        
        card.innerHTML = `
            <div class="pilot-image-container">${imageContent}</div>
            <div class="pilot-header">
                <div class="pilot-number">Nº ${pilot.number}</div>
                <div class="pilot-name">${pilot.name}</div>
                <div class="pilot-team">${pilot.team}</div>
                <div class="pilot-era">${pilot.era}</div>
            </div>
            <div class="pilot-body">
                <p class="pilot-description">${pilot.description}</p>
                <div class="pilot-stats">
                    <div class="stat"><div class="stat-label">Campeonatos</div><div class="stat-value">${pilot.championships}</div></div>
                    <div class="stat"><div class="stat-label">Victorias</div><div class="stat-value">${pilot.victories}</div></div>
                </div>
                <button class="pilot-btn" onclick="openModal('pilot', ${pilot.id})">Ver Detalles</button>
            </div>
        `;
        card.addEventListener('click', () => openModal('pilot', pilot.id));
        container.appendChild(card);
    });
}

function renderPistas() {
    const container = document.getElementById('pistasContainer');
    container.innerHTML = '';
    
    let filtered = pistas.filter(pista => searchPistas === '' || pista.name.toLowerCase().includes(searchPistas.toLowerCase()) || pista.country.toLowerCase().includes(searchPistas.toLowerCase()));
    document.getElementById('pistasCount').textContent = filtered.length;
    
    filtered.forEach(pista => {
        const card = document.createElement('div');
        card.className = 'pista-card';
        const imageContent = pilotImages[`pista-${pista.id}`] ? `<img src="${pilotImages[`pista-${pista.id}`]}" alt="${pista.name}" class="pista-image">` : `<div style="font-size: 4em; margin: auto;">${pista.emoji}</div>`;
        
        card.innerHTML = `
            <div class="pista-image-container">${imageContent}</div>
            <div class="pista-header">
                <div class="pista-name">${pista.name}</div>
                <div class="pista-country">${pista.country} ${pista.emoji}</div>
            </div>
            <div class="pista-body">
                <div class="pista-stats">
                    <div class="pista-stat"><div class="pista-stat-label">Longitud</div><div class="pista-stat-value">${pista.longitud}</div></div>
                    <div class="pista-stat"><div class="pista-stat-label">Vueltas</div><div class="pista-stat-value">${pista.vueltas}</div></div>
                    <div class="pista-stat"><div class="pista-stat-label">Distancia</div><div class="pista-stat-value">${pista.distancia}</div></div>
                    <div class="pista-stat"><div class="pista-stat-label">Récord</div><div class="pista-stat-value">${pista.recordVuelta}</div></div>
                </div>
                <button class="pista-btn" onclick="openModal('pista', ${pista.id})">Ver Detalles</button>
            </div>
        `;
        card.addEventListener('click', () => openModal('pista', pista.id));
        container.appendChild(card);
    });
}

function renderCoches() {
    const container = document.getElementById('cochesContainer');
    container.innerHTML = '';
    
    let filtered = coches.filter(coche => searchCoches === '' || coche.team.toLowerCase().includes(searchCoches.toLowerCase()) || coche.pilotos.toLowerCase().includes(searchCoches.toLowerCase()));
    document.getElementById('cochesCount').textContent = filtered.length;
    
    filtered.forEach(coche => {
        const card = document.createElement('div');
        card.className = 'coche-card';
        const imageContent = pilotImages[`coche-${coche.id}`] ? `<img src="${pilotImages[`coche-${coche.id}`]}" alt="${coche.name}" class="coche-image">` : `<div style="font-size: 4em; margin: auto;">${coche.emoji}</div>`;
        
        card.innerHTML = `
            <div class="coche-image-container">${imageContent}</div>
            <div class="coche-header">
                <div class="coche-name">${coche.name}</div>
                <div class="coche-pilotos">${coche.pilotos}</div>
            </div>
            <div class="coche-body">
                <div class="coche-stats">
                    <div class="coche-stat"><div class="coche-stat-label">Motor</div><div class="coche-stat-value">${coche.motor}</div></div>
                    <div class="coche-stat"><div class="coche-stat-label">Potencia</div><div class="coche-stat-value">${coche.potencia}</div></div>
                    <div class="coche-stat"><div class="coche-stat-label">Peso</div><div class="coche-stat-value">${coche.peso}</div></div>
                    <div class="coche-stat"><div class="coche-stat-label">0-100</div><div class="coche-stat-value">${coche.aceleracion}</div></div>
                </div>
                <button class="coche-btn" onclick="openModal('coche', ${coche.id})">Ver Detalles</button>
            </div>
        `;
        card.addEventListener('click', () => openModal('coche', coche.id));
        container.appendChild(card);
    });
}

function openModal(type, id) {
    if (type === 'pilot') {
        const pilot = pilots.find(p => p.id === id);
        if (!pilot) return;
        
        const modalImageContainer = document.getElementById('modalImageContainer');
        if (pilotImages[`pilot-${id}`]) {
            modalImageContainer.innerHTML = `<img src="${pilotImages[`pilot-${id}`]}" alt="${pilot.name}" class="modal-image">`;
        } else {
            modalImageContainer.innerHTML = `<div style="font-size: 6em; margin: auto;">${pilot.emoji}</div>`;
        }
        
        document.getElementById('modalName').textContent = pilot.name;
        document.getElementById('modalTeam').textContent = pilot.team;
        document.getElementById('modalEra').textContent = `Era: ${pilot.era}`;
        document.getElementById('modalNumber').textContent = `Nº ${pilot.number}`;
        document.getElementById('modalDescription').textContent = pilot.description;
        document.getElementById('modalNationality').textContent = pilot.nationality;
        document.getElementById('modalChampionships').textContent = pilot.championships;
        document.getElementById('modalPoints').textContent = pilot.points;
        document.getElementById('modalDebut').textContent = pilot.debut;
        document.getElementById('modalPodiums').textContent = pilot.podiums;
        document.getElementById('modalVictories').textContent = pilot.victories;
        
        document.getElementById('pilotModal').classList.add('active');
    } else if (type === 'pista') {
        const pista = pistas.find(p => p.id === id);
        if (!pista) return;
        
        const pistaImageContainer = document.getElementById('pistaImageContainer');
        if (pilotImages[`pista-${id}`]) {
            pistaImageContainer.innerHTML = `<img src="${pilotImages[`pista-${id}`]}" alt="${pista.name}" class="modal-image">`;
        } else {
            pistaImageContainer.innerHTML = `<div style="font-size: 4em; margin: auto;">${pista.emoji}</div>`;
        }
        
        document.getElementById('pistaName').textContent = pista.name;
        document.getElementById('pistaPais').textContent = pista.country;
        document.getElementById('pistaPaisValue').textContent = pista.country;
        document.getElementById('pistaLongitud').textContent = pista.longitud;
        document.getElementById('pistaVueltas').textContent = pista.vueltas;
        document.getElementById('pistaDistancia').textContent = pista.distancia;
        document.getElementById('pistaRecordVuelta').textContent = pista.recordVuelta;
        document.getElementById('pistaRecordPiloto').textContent = pista.recordPiloto;
        
        document.getElementById('pistaModal').classList.add('active');
    } else if (type === 'coche') {
        const coche = coches.find(c => c.id === id);
        if (!coche) return;
        
        document.getElementById('cocheName').textContent = `${coche.name}`;
        document.getElementById('cochePilotos').textContent = coche.pilotos;
        document.getElementById('cocheEquipo').textContent = coche.team;
        document.getElementById('cocheMotor').textContent = coche.motor;
        document.getElementById('cochePotencia').textContent = coche.potencia;
        document.getElementById('cochePeso').textContent = coche.peso;
        document.getElementById('cocheAceleracion').textContent = coche.aceleracion;
        document.getElementById('cocheVelocidad').textContent = coche.velocidad;
        
        document.getElementById('cocheModal').classList.add('active');
    }
}

function closeModal(type) {
    if (type === 'pilot') document.getElementById('pilotModal').classList.remove('active');
    else if (type === 'pista') document.getElementById('pistaModal').classList.remove('active');
    else if (type === 'coche') document.getElementById('cocheModal').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    loadImagesFromStorage();
    renderPilots();
    renderPistas();
    renderCoches();
    populateItemSelect();
    displayUploadedImages();
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            currentTab = tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            document.getElementById(`${tab}-tab`).classList.add('active');
            populateItemSelect();
            
            const uploadSubtitle = document.getElementById('uploadSubtitle');
            if (tab === 'pilotos') uploadSubtitle.textContent = 'Selecciona un piloto y carga su imagen';
            else if (tab === 'pistas') uploadSubtitle.textContent = 'Selecciona una pista y carga su imagen';
            else if (tab === 'coches') uploadSubtitle.textContent = 'Selecciona un coche y carga su imagen';
        });
    });
    
    const uploadToggleBtn = document.getElementById('uploadToggleBtn');
    const uploadPanel = document.getElementById('uploadPanel');
    uploadToggleBtn.addEventListener('click', () => uploadPanel.classList.toggle('active'));
    document.getElementById('closeUploadBtn').addEventListener('click', () => uploadPanel.classList.remove('active'));
    
    document.getElementById('searchPilotos').addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderPilots();
    });
    
    document.getElementById('searchPistas').addEventListener('input', (e) => {
        searchPistas = e.target.value;
        renderPistas();
    });
    
    document.getElementById('searchCoches').addEventListener('input', (e) => {
        searchCoches = e.target.value;
        renderCoches();
    });
    
    document.getElementById('sortPilotos').addEventListener('change', (e) => {
        sortBy = e.target.value;
        renderPilots();
    });
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderPilots();
        });
    });
    
    const imageInput = document.getElementById('imageInput');
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                document.getElementById('imagePreview').innerHTML = `<img src="${event.target.result}">`;
            };
            reader.readAsDataURL(file);
        }
    });
    
    document.getElementById('uploadBtn').addEventListener('click', () => {
        const itemSelect = document.getElementById('itemSelect');
        const itemId = itemSelect.value;
        const file = imageInput.files[0];
        
        if (!itemId || !file) {
            alert('Por favor, selecciona un elemento e imagen');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (event) => {
            pilotImages[itemId] = event.target.result;
            saveImagesToStorage();
            displayUploadedImages();
            renderPilots();
            renderPistas();
            renderCoches();
            
            imageInput.value = '';
            itemSelect.value = '';
            document.getElementById('imagePreview').innerHTML = '<p>Previsualización de la imagen</p>';
            alert('¡Imagen cargada exitosamente!');
        };
        reader.readAsDataURL(file);
    });
    
    document.getElementById('deleteBtn').addEventListener('click', () => {
        const itemId = document.getElementById('itemSelect').value;
        if (!itemId || !pilotImages[itemId]) {
            alert('Por favor, selecciona un elemento con imagen');
            return;
        }
        delete pilotImages[itemId];
        saveImagesToStorage();
        displayUploadedImages();
        renderPilots();
        renderPistas();
        renderCoches();
        imageInput.value = '';
        document.getElementById('itemSelect').value = '';
        document.getElementById('imagePreview').innerHTML = '<p>Previsualización de la imagen</p>';
        alert('¡Imagen eliminada!');
    });
    
    document.getElementById('closeModal').addEventListener('click', () => closeModal('pilot'));
    document.getElementById('closePistaModal').addEventListener('click', () => closeModal('pista'));
    document.getElementById('closeCocheModal').addEventListener('click', () => closeModal('coche'));
    
    window.addEventListener('click', (e) => {
        if (e.target.id === 'pilotModal') closeModal('pilot');
        if (e.target.id === 'pistaModal') closeModal('pista');
        if (e.target.id === 'cocheModal') closeModal('coche');
    });
});

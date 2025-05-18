const { v4: uuidv4 } = require("uuid");

function randomTickets(max) {
  return Math.floor(Math.random() * (max + 1));
}

const allowedDates = [
  "2025-05-01",
  "2025-05-02",
  "2025-05-03",
  "2025-05-04",
  "2025-05-05",
  "2025-05-06",
  "2025-05-07",
  "2025-05-08",
  "2025-05-09",
  "2025-05-10",
  "2025-05-11",
  "2025-05-12",
  "2025-05-13",
  "2025-05-14",
  "2025-05-15",
];

const locations = [
  {
    id: "1",
    name: "Kunsthallen A",
    address: "Nyvej 12, 2100 Kbh",
    maxGuests: 50,
    maxArtworks: 10,
  },
  {
    id: "2",
    name: "Galleri B",
    address: "Åboulevarden 21, 8000 Aarhus",
    maxGuests: 30,
    maxArtworks: 6,
  },
  {
    id: "3",
    name: "Warehouse C",
    address: "Vestervej 3, 5000 Odense",
    maxGuests: 100,
    maxArtworks: 15,
  },
  {
    id: "4",
    name: "Kunstforeningen D",
    address: "Strandgade 7, 1401 København K",
    maxGuests: 75,
    maxArtworks: 12,
  },
  {
    id: "5",
    name: "Studio E",
    address: "Havnegade 45, 9000 Aalborg",
    maxGuests: 40,
    maxArtworks: 8,
  },
  {
    id: "6",
    name: "Kunstlab F",
    address: "Nørregade 19, 6700 Esbjerg",
    maxGuests: 60,
    maxArtworks: 9,
  },
  {
    id: "7",
    name: "Kulturhuset G",
    address: "Kirkevej 23, 4600 Køge",
    maxGuests: 120,
    maxArtworks: 20,
  },
  {
    id: "8",
    name: "Galleriet H",
    address: "Søndergade 5, 8600 Silkeborg",
    maxGuests: 45,
    maxArtworks: 7,
  },
  {
    id: "9",
    name: "Kunstrum I",
    address: "Skovvej 88, 2800 Lyngby",
    maxGuests: 55,
    maxArtworks: 11,
  },
  {
    id: "10",
    name: "Værkstedet J",
    address: "Østergade 14, 7500 Holstebro",
    maxGuests: 65,
    maxArtworks: 13,
  },
];

function generateEvents() {
  return [
    {
      id: uuidv4(),
      title: "Abstrakt Aften",
      description:
        "En udstilling der udforsker abstrakte kunstformer gennem forskellige medier. Oplev farver og former i samspil uden begrænsninger.",
      date: "2025-05-01",
      locationId: "1",
      curator: "Anna K.",
      totalTickets: 50,
      bookedTickets: randomTickets(50),
      artworkIds: [],
    },
    {
      id: uuidv4(),
      title: "Lys og Mørke",
      description:
        "En kontrastfyldt udstilling der undersøger samspillet mellem lys og mørke i kunsten. Værker der udforsker skygger, kontraster og stemninger.",
      date: "2025-05-02",
      locationId: "2",
      curator: "Jonas B.",
      totalTickets: 30,
      bookedTickets: randomTickets(30),
      artworkIds: [],
    },
    {
    "id": "02979c36-6618-42e1-be9d-cf6faa0f05db",
    "title": "Farver i Bevægelse",
    "description": "Kunst, der kombinerer traditionelle teknikker med moderne teknologi.",
    "date": "2025-05-04",
    "locationId": "2",
    "curator": "Jonas B.",
    "artworkIds": [
      "KMSst64",
      "KMSst641",
      "KMSst66",
      "KMSst68",
      "KMSst7",
      "KMSst734",
      "KMSst736",
      "KMSst79"
    ]
  },
  {
    "id": "61f64b6b-3814-46e8-8a26-1845783a8b23",
    "title": "Sanselig Skulptur",
    "description": "Værker, der spejler tidens kulturelle og sociale tendenser.",
    "date": "2025-05-12",
    "locationId": "5",
    "curator": "Anna K.",
    "artworkIds": ["KMSst64"]
  },
  {
    "id": "ba707e0c-f8b4-424b-805f-f75e8b254e6e",
    "title": "Lys og Mørke",
    "description": "En udstilling der udforsker abstrakte kunstformer gennem forskellige medier.",
    "date": "2025-05-07",
    "locationId": "2",
    "curator": "Jonas B.",
    "artworkIds": ["KMSst734", "KMSst79"]
  },
  {
    "id": "4b006b04-9690-49f0-9ded-bf1758564d50",
    "title": "Krop og Sjæl",
    "description": "Farverige værker i bevægelse sætter fokus på dynamik og energi.",
    "date": "2025-05-12",
    "locationId": "8",
    "curator": "Jonas B.",
    "artworkIds": ["KMSst66", "KMSst641", "KMSst7"]
  },
  {
    "id": "6ad07ab8-6468-411e-976c-0ebb63841b24",
    "title": "Sanselig Skulptur",
    "description": "Farverige værker i bevægelse sætter fokus på dynamik og energi.",
    "date": "2025-05-13",
    "locationId": "5",
    "curator": "Mia M.",
    "artworkIds": ["KMSst68", "KMSst736"]
  },
  {
    "id": "fceebc62-e620-43c4-b8e9-4dbee163282e",
    "title": "Naturens Form",
    "description": "Værker, der spejler tidens kulturelle og sociale tendenser.",
    "date": "2025-05-06",
    "locationId": "3",
    "curator": "Anna K.",
    "artworkIds": ["KMSst734", "KMSst64"]
  },
  {
    "id": "82a0a6d4-a22b-4d3d-974b-f9e28078985a",
    "title": "Overflade og Struktur",
    "description": "En rolig, meditativ udstilling med fokus på indre refleksion.",
    "date": "2025-05-11",
    "locationId": "10",
    "curator": "Anna K.",
    "artworkIds": ["KMSst79", "KMSst66"]
  },
  {
    "id": "7f90db5c-78d2-41f6-bcbe-f76b7b3b2817",
    "title": "Form og Funktion",
    "description": "En udstilling der udforsker abstrakte kunstformer gennem forskellige medier.",
    "date": "2025-05-10",
    "locationId": "9",
    "curator": "Sofie P.",
    "artworkIds": ["KMSst641", "KMSst736"]
  },
  {
    "id": "bdb7ccac-a0b8-457e-a6c1-e1fcae21d391",
    "title": "Digital Drøm",
    "description": "Bylandskaber og arkitektur i et kunstnerisk perspektiv.",
    "date": "2025-05-06",
    "locationId": "5",
    "curator": "Sofie P.",
    "artworkIds": ["KMSst7", "KMSst734"]
  },
  {
    "id": "941fb907-0047-4afd-96a3-be7fb8a4f6e6",
    "title": "Stille Refleksion",
    "description": "En udstilling der udforsker abstrakte kunstformer gennem forskellige medier.",
    "date": "2025-05-13",
    "locationId": "5",
    "curator": "Sofie P.",
    "artworkIds": ["KMSst68"]
  },
  {
    "id": "2b6d433b-bdfe-4db7-b1ab-b3aab2eb0a02",
    "title": "Form og Funktion",
    "description": "En undersøgelse af kroppen i rumlige skulpturer og installationer.",
    "date": "2025-05-08",
    "locationId": "1",
    "curator": "Mia M.",
    "artworkIds": ["KMSst64", "KMSst66"]
  },
  {
    "id": "eb4c1a77-08ff-4487-8ee9-fa537c47a7fd",
    "title": "Sanselig Skulptur",
    "description": "Geometriske former og mønstre i moderne kunst.",
    "date": "2025-05-04",
    "locationId": "9",
    "curator": "Mia M.",
    "artworkIds": ["KMSst641", "KMSst79"]
  },
  {
    "id": "0a72bf6b-369f-4648-9b48-4171c7533c03",
    "title": "Overflade og Struktur",
    "description": "En udstilling der udforsker abstrakte kunstformer gennem forskellige medier.",
    "date": "2025-05-07",
    "locationId": "8",
    "curator": "Anna K.",
    "artworkIds": ["KMSst736", "KMSst7"]
  },
  {
    "id": "2d874e7a-403c-47f4-b508-17de0a2aff3b",
    "title": "Krop og Sjæl",
    "description": "Bylandskaber og arkitektur i et kunstnerisk perspektiv.",
    "date": "2025-05-07",
    "locationId": "8",
    "curator": "Mia M.",
    "artworkIds": ["KMSst68", "KMSst734"]
  },
  {
    "id": "906c0a86-aec8-4ed2-8ae4-17890c71bea7",
    "title": "Kunst & Teknologi",
    "description": "Kunst, der kombinerer traditionelle teknikker med moderne teknologi.",
    "date": "2025-05-05",
    "locationId": "3",
    "curator": "Anna K.",
    "artworkIds": ["KMSst66"]
  },
  {
    "id": "6c2fb172-9694-4581-b5b9-c608b8d6659b",
    "title": "Krop og Sjæl",
    "description": "Geometriske former og mønstre i moderne kunst.",
    "date": "2025-05-11",
    "locationId": "1",
    "curator": "Anna K.",
    "artworkIds": ["KMSst79", "KMSst64"]
  },
  {
    "id": "c9bfc621-2b4a-4b2e-93a5-79500f3516e2",
    "title": "Abstrakt Aften",
    "description": "En rolig, meditativ udstilling med fokus på indre refleksion.",
    "date": "2025-05-02",
    "locationId": "3",
    "curator": "Jonas B.",
    "artworkIds": ["KMSst641", "KMSst736"]
  },
  {
    "id": "f27653d0-6a73-43b5-a747-f3ec7b4c75b7",
    "title": "Overflade og Struktur",
    "description": "Kunst, der kombinerer traditionelle teknikker med moderne teknologi.",
    "date": "2025-05-15",
    "locationId": "3",
    "curator": "Sofie P.",
    "artworkIds": ["KMSst7", "KMSst68"]
  },
  {
    "id": "d28d20d4-bfbf-4f41-8151-794d8f6077f0",
    "title": "Tidens Tegn",
    "description": "Kunst, der kombinerer traditionelle teknikker med moderne teknologi.",
    "date": "2025-05-06",
    "locationId": "2",
    "curator": "Mia M.",
    "artworkIds": ["KMSst734"]
  },
  {
    "id": "c21df3ba-bc74-40cc-8cc6-28c47b0f9bf3",
    "title": "Form og Funktion",
    "description": "En undersøgelse af kroppen i rumlige skulpturer og installationer.",
    "date": "2025-05-01",
    "locationId": "2",
    "curator": "Jonas B.",
    "artworkIds": ["KMSst66", "KMSst79"]
  },
  {
    "id": "1eccfccd-2ddf-441b-996b-0cf0accb2ed9",
    "title": "Krop og Sjæl",
    "description": "En undersøgelse af kroppen i rumlige skulpturer og installationer.",
    "date": "2025-05-10",
    "locationId": "10",
    "curator": "Sofie P.",
    "artworkIds": ["KMSst641", "KMSst68"]
  },
  {
    "id": "478a1d30-7071-41fc-aec0-350a10af6b7e",
    "title": "Digital Drøm",
    "description": "Naturoplevelser formidlet gennem maleri og fotografi.",
    "date": "2025-05-09",
    "locationId": "2",
    "curator": "Emil R.",
    "artworkIds": ["KMSst736", "KMSst64"]
  },
  {
    "id": "cb06aafb-c39f-4755-bde8-3a63157f25e8",
    "title": "Byens Puls",
    "description": "Geometriske former og mønstre i moderne kunst.",
    "date": "2025-05-11",
    "locationId": "1",
    "curator": "Jonas B.",
    "artworkIds": ["KMSst7"]
  },
  {
    "id": "687d760f-a6fa-4507-8298-55c6fec30f53",
    "title": "Geometriske Drømme",
    "description": "En undersøgelse af kroppen i rumlige skulpturer og installationer.",
    "date": "2025-05-15",
    "locationId": "6",
    "curator": "Lars N.",
    "artworkIds": ["KMSst79", "KMSst734"]
  },
  {
    "id": "e15ad85e-e39d-4705-a431-15c36286bda6",
    "title": "Overflade og Struktur",
    "description": "En rolig, meditativ udstilling med fokus på indre refleksion.",
    "date": "2025-05-12",
    "locationId": "5",
    "curator": "Sofie P.",
    "artworkIds": ["KMSst66", "KMSst68"]
  },
  {
    "id": "740d7ece-7d42-45e6-9b2f-12e10790ee5e",
    "title": "Overflade og Struktur",
    "description": "Farverige værker i bevægelse sætter fokus på dynamik og energi.",
    "date": "2025-05-08",
    "locationId": "3",
    "curator": "Anna K.",
    "artworkIds": ["KMSst641", "KMSst736"]
  },
  {
    "id": "81d1af83-35bb-4dd4-84bd-e1a0d7bb99d9",
    "title": "Lys og Mørke",
    "description": "Kunst, der kombinerer traditionelle teknikker med moderne teknologi.",
    "date": "2025-05-02",
    "locationId": "9",
    "curator": "Mia M.",
    "artworkIds": ["KMSst64", "KMSst7"]
  },
  {
    "id": "e8170025-ef91-4001-bda2-925807e3ecab",
    "title": "Digital Drøm",
    "description": "En undersøgelse af kroppen i rumlige skulpturer og installationer.",
    "date": "2025-05-04",
    "locationId": "4",
    "curator": "Emil R.",
    "artworkIds": ["KMSst68"]
  },
  {
    "id": "4abf34a5-56a3-40bf-accb-c3d269c7d3af",
    "title": "Abstrakt Aften",
    "description": "En udstilling der udforsker abstrakte kunstformer gennem forskellige medier.",
    "date": "2025-05-14",
    "locationId": "4",
    "curator": "Emil R.",
    "artworkIds": ["KMSst734", "KMSst79"]
  },
  {
    "id": "1f0e4fb1-d5b7-4b96-b8fe-236a3c1d4def",
    "title": "Form og Funktion",
    "description": "En undersøgelse af kroppen i rumlige skulpturer og installationer.",
    "date": "2025-05-09",
    "locationId": "7",
    "curator": "Sofie P.",
    "artworkIds": ["KMSst66", "KMSst641"]
  }
  ];
}

let events = generateEvents();

// Migration: Sikrer at alle eksisterende events har artworkIds
function migrateEvents() {
  events.forEach((e) => {
    if (typeof e.description === "undefined") {
      e.description = "";
    }
    if (!e.artworkIds) {
      e.artworkIds = [];
    }
  });
}
migrateEvents();

// Dynamisk opdatering af billetantal hvert 90. sekund
setInterval(() => {
  events.forEach((e) => {
    e.bookedTickets = randomTickets(e.totalTickets);
  });
  console.log("[INFO] Events opdateret med nye tilfældige billetantal.");
}, 600000);

module.exports = {
  allowedDates,
  locations,
  events,
  generateEvents,
};

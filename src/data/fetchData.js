// HEADER EXAMPLE
// const HEADER = [
//   'User-Agent',
//   'accept: application/json',
//   'Content-Type: application/json',
// ];

/* async function apiFetch(URL, HEADER, method) {
  const headers = new Headers();
  headers.append(...HEADER);
  const request = new Request(URL, {
    method,
    headers,
  });
  const response = await fetch(request);
  if (response.ok) return response.json();
  throw new Error(`Request failed with ${response.status}`);
} */

const data = [
  {
    id: 1,
    name: 'La Pirata & Laugar Brewery Blackadder',
    photo:
      'https://static2.soloartesanas.es/3215-large_default/la-pirata-laugar-brewery-blackadder.jpg',
    style: 'Imperial Porter',
    price: 3.52,
    valoration: 85,
    company: 'Laugar',
  },
  {
    id: 2,
    name: 'Laugar Basurde',
    photo:
      'https://static2.soloartesanas.es/2958-large_default/laugar-basurde.jpg',
    style: 'Amber Ale',
    price: 4.25,
    valoration: 74,
    company: 'Laugar',
  },
  {
    id: 3,
    name: 'La Calavera & Laugar Brewery Hop Drama',
    photo:
      'https://static3.soloartesanas.es/3177-large_default/la-calavera-laugar-brewery-hop-drama.jpg',
    style: 'Session India Pale Lager',
    price: 3.24,
    valoration: 71,
    company: 'Laugar',
  },
  {
    id: 4,
    name: 'Sagra Bohío',
    photo:
      'https://static2.soloartesanas.es/3231-large_default/sagra-bohio.jpg',
    style: 'Strong Ale',
    price: 3.5,
    valoration: 95,
    company: 'Sagra',
  },
  {
    id: 5,
    name: 'Sagra Suxinsu',
    photo:
      'https://static2.soloartesanas.es/3232-large_default/sagra-suxinsu.jpg',
    style: 'Belgian Strong Ale',
    price: 3.0,
    valoration: 78,
    company: 'Sagra',
  },
  {
    id: 6,
    name: 'Menduiña Santa Compaña',
    photo:
      'https://static2.soloartesanas.es/3131-large_default/menduina-santa-compana.jpg',
    style: 'Barley Wine Madurada',
    price: 4.14,
    valoration: 70,
    company: 'Menduiña',
  },
  {
    id: 7,
    name: 'Menduiña Demo Neghro',
    photo:
      'https://static3.soloartesanas.es/3127-large_default/menduina-demo-neghro.jpg',
    style: 'Extra Stout',
    price: 3.17,
    valoration: 65,
    company: 'Menduiña',
  },
  {
    id: 8,
    name: 'Menduiña Barda',
    photo:
      'https://static2.soloartesanas.es/3126-large_default/menduina-barda.jpg',
    style: 'Pale Ale',
    price: 2.98,
    valoration: 55,
    company: 'Menduiña',
  },
  {
    id: 9,
    name: 'ISR31 Stout',
    photo:
      'https://static2.soloartesanas.es/2646-large_default/isr31-stout.jpg',
    style: 'Stout',
    price: 3.0,
    valoration: 88,
    company: 'Quana',
  },
  {
    id: 10,
    name: 'TR25 Dubbel',
    photo:
      'https://static3.soloartesanas.es/2645-large_default/tr25-dubbel.jpg',
    style: 'Abbey Dubbel',
    price: 3.0,
    valoration: 58,
    company: 'Quana',
  },
  {
    id: 11,
    name: 'Mustache Negra Marinera',
    photo:
      'https://static3.soloartesanas.es/1178-large_default/mustache-negra-marinera.jpg',
    style: 'Brown Ale',
    price: 2.89,
    valoration: 81,
    company: 'Cascallares',
  },
  {
    id: 12,
    name: 'Mustache Blanca de Trigo',
    photo:
      'https://static1.soloartesanas.es/328-large_default/mustache-cervezas.jpg',
    style: 'Weizen-Weissbier',
    price: 2.89,
    valoration: 62,
    company: 'Cascallares',
  },
  {
    id: 13,
    name: 'Arriaca Imperial Russian Stout',
    photo:
      'https://static3.soloartesanas.es/3446-large_default/arriaca-imperial-russian-stout.jpg',
    style: 'Russian Imperial Stout',
    price: 2.46,
    valoration: 52,
    company: 'Arriaca',
  },
  {
    id: 14,
    name: 'Arriaca Porter',
    photo:
      'https://static1.soloartesanas.es/3442-large_default/arriaca-imperial-porter.jpg',
    style: 'Porter',
    price: 2.49,
    valoration: 59,
    company: 'Arriaca',
  },
  {
    id: 15,
    name: 'Arriaca Centeno',
    photo:
      'https://static1.soloartesanas.es/3443-large_default/arriaca-centeno.jpg',
    style: 'Rye India Pale Lager',
    price: 4.14,
    valoration: 68,
    company: 'Arriaca',
  },
  {
    id: 16,
    name: 'Dawat One-Off Inch Smoked Beer Bourbon',
    photo:
      'https://static3.soloartesanas.es/2746-large_default/one-off-inch-smoked-beer-bourbon.jpg',
    style: 'Smoke Flavored and Wood Aged Beer',
    price: 2.95,
    valoration: 86,
    company: 'Cervezas Cuenca',
  },
  {
    id: 17,
    name: 'Dawat 7',
    photo: 'https://static2.soloartesanas.es/858-large_default/dawat-7.jpg',
    style: 'Pilsner',
    price: 1.96,
    valoration: 50,
    company: 'Cervezas Cuenca',
  },
  {
    id: 18,
    name: 'Dawat Pedro Ximénez',
    photo:
      'https://static1.soloartesanas.es/2748-large_default/pedro-ximenez.jpg',
    style: 'Specialty Beer',
    price: 2.12,
    valoration: 87,
    company: 'Cervezas Cuenca',
  },
  {
    id: 19,
    name: 'Dawat Pure Café',
    photo: 'https://static3.soloartesanas.es/2749-large_default/pure-cafe.jpg',
    style: 'Imperial Stout',
    price: 3.0,
    valoration: 95,
    company: 'Cervezas Cuenca',
  },
];

const apiFetch = async () => data;

export default apiFetch;

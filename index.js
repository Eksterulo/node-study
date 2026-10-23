const url = 'https://opendata.trudvsem.ru/api/v1/vacancies/region/40?limit=1';

const response = await fetch(url);
const data = await response.json();

console.log(data.results.vacancies[0].vacancy.company.name);
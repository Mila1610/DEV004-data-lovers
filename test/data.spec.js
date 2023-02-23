//======================================
// Test para la funcion filterData
//======================================

import { filterData } from '../src/data';
describe('filterData', () => {
  const data = [
    {
      "id": 1,
      "name": "Euan Abercrombie",
      "birth": "between 1 September 1983 and 31 August 1984",
      "house": "Gryffindor"
    },
    {
      "id": 2,
      "name": "Stewart Ackerley",
      "birth": "between 1 September 1982and 31 August 1983",
      "house": "Ravenclaw"
    },
    {
      "id": 3,
      "name": "African prince",
      "birth": null,
      "house": null
    },
    {
      "id": 4,
      "name": "Agnes's son",
      "birth": null,
      "house": null
    },
    {
      "id": 5,
      "name": "Cornelius Agrippa",
      "birth": "1486",
      "house": null
    },]
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  //   //Revisa que tenga el comportamiento deseado
  it('returns filter array', () => {
    const result = [{
      "id": 2,
      "name": "Stewart Ackerley",
      "birth": "between 1 September 1982and 31 August 1983",
      "house": "Ravenclaw"
    },]
    expect(filterData(data, "Ravenclaw")).toStrictEqual(result);
  });

  //   // Estresa
  it('', ()=>{
    expect(filterData(data, "")).toBeFalsy();
  // expect(filterData(data, "")).toBe(false); // matchers jest
  })
});


//======================================
// Test para la funcion OrdenarP 
//======================================
import {OrdenarP} from '../src/data.js';
describe('OrdenarP', () => {
  const data = [
    {
      "id": 1,
      "name": "Euan Abercrombie",
      "birth": "between 1 September 1983 and 31 August 1984",
      "house": "Gryffindor"
    },
    {
      "id": 2,
      "name": "Stewart Ackerley",
      "birth": "between 1 September 1982and 31 August 1983",
      "house": "Ravenclaw"
    },
    {
      "id": 3,
      "name": "African prince",
      "birth": null,
      "house": null
    },
    {
      "id": 4,
      "name": "Agnes's son",
      "birth": null,
      "house": null
    },
    {
      "id": 5,
      "name": "Cornelius Agrippa",
      "birth": "1486",
      "house": null
    },]
  it('is a function', () => {
    expect(typeof OrdenarP).toBe('function');
  });


  it('returns filter array', () => {
    const result = [
      {
        "id": 3,
        "name": "African prince",
        "birth": null,
        "house": null
      },
      {
        "id": 4,
        "name": "Agnes's son",
        "birth": null,
        "house": null
      },
      {
        "id": 5,
        "name": "Cornelius Agrippa",
        "birth": "1486",
        "house": null
      },
      {
        "id": 1,
        "name": "Euan Abercrombie",
        "birth": "between 1 September 1983 and 31 August 1984",
        "house": "Gryffindor"
      },
      {
        "id": 2,
        "name": "Stewart Ackerley",
        "birth": "between 1 September 1982and 31 August 1983",
        "house": "Ravenclaw"
      },]
    expect(OrdenarP(data, "Stewart Ackerley")).toStrictEqual(result);
  });

  // Estresa
  it('', ()=>{
    expect(OrdenarP("")).toBeFalsy();
    //     expect(OrdenarP(data, "")).toBe(false); // matchers jest
  })
});


//======================================
//Test para la funcion Calcular 
//======================================
import {Calcular} from '../src/data.js';
describe('Calcular', () => {
  // const data = [
  //   {
  //     "id": 1,
  //     "name": "Euan Abercrombie",
  //     "birth": "between 1 September 1983 and 31 August 1984",
  //     "house": "Gryffindor",
  //     "species": "Human"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Stewart Ackerley",
  //     "birth": "between 1 September 1982and 31 August 1983",
  //     "house": "Ravenclaw",
  //     "species": "Human"
  //   },
  //   {
  //     "id": 3,
  //     "name": "African prince",
  //     "birth": null,
  //     "house": null,
  //     "species": "Human"
  //   },
  //   {
  //     "id": 4,
  //     "name": "Agnes's son",
  //     "birth": null,
  //     "house": null,
  //     "species": "Human"
  //   },
  //   {
  //     "id": 5,
  //     "name": "Cornelius Agrippa",
  //     "birth": "1486",
  //     "house": null,
  //     "species": "Human"
  //   },]
  it('is a function', () => {
    expect(typeof Calcular).toBe('function');
  });

  //Revisa que tenga el comportamiento deseado
  it('returns filter array', () => {
    const result = [
      {
        "id": 1,
        "name": "Euan Abercrombie",
        "birth": "between 1 September 1983 and 31 August 1984",
        "house": "Gryffindor",
        "species": "Human"
      },
      {
        "id": 2,
        "name": "Stewart Ackerley",
        "birth": "between 1 September 1982and 31 August 1983",
        "house": "Ravenclaw",
        "species": "Human"
      },
      {
        "id": 3,
        "name": "African prince",
        "birth": null,
        "house": null,
        "species": "Human"
      },
      {
        "id": 4,
        "name": "Agnes's son",
        "birth": null,
        "house": null,
        "species": "Human"
      },
      {
        "id": 5,
        "name": "Cornelius Agrippa",
        "birth": "1486",
        "house": null,
        "species": "Human"
      }]
    // console.log(Calcular(result));
    expect(Calcular(result)).toStrictEqual(5);
  });
  

  // Estresa
  it('', ()=>{
    // expect(Calcular(data,"")).toBeFalsy();
    
    expect(Calcular("")).toBe(false); // matchers jest
  })
});
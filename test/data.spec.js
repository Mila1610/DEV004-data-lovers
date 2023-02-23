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

  //Revisa si es una funcion
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  //Revisa que tenga el comportamiento deseado
  it('returns filter array', () => {
    const result = [{
      "id": 2,
      "name": "Stewart Ackerley",
      "birth": "between 1 September 1982and 31 August 1983",
      "house": "Ravenclaw"
    },]
    expect(filterData(data, "Ravenclaw")).toStrictEqual(result);
  });

  //Estresa la funcion
  it('', ()=>{
    expect(filterData(data, "")).toBeFalsy();
  })
});


//======================================
// Test para la funcion OrdenarP 
//======================================
import {order} from '../src/data.js';
describe('order', () => {
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

  //Revisa si es una funcion
  it('is a function', () => {
    expect(typeof order).toBe('function');
  });

  //Revisa que tenga el comportamiento deseado
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
    expect(order(data, "Stewart Ackerley")).toStrictEqual(result);
  });

  // Estresa la funcion
  it('', ()=>{
    expect(order("")).toBeFalsy();
  })
});


//======================================
//Test para la funcion Calcular 
//======================================
import {calculate} from '../src/data.js';
describe('calculate', () => {

  //Revisa si es una funcion
  it('is a function', () => {
    expect(typeof calculate).toBe('function');
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
    expect(calculate(result)).toStrictEqual(5);
  });
  
  // Estresa la funcion
  it('', ()=>{
    expect(calculate("")).toBe(false); 
  })
});
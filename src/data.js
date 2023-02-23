// funcion para filtrar por casas a los personajes 
export const filterData=(characters, houses) => {
  if (houses === ''){
    return false
  }
  //Filtrando por cada una de las casas (4 casas)
  const filterCasa = characters.filter(character=> character.house === houses) 
  return filterCasa
};

//Funcion para ordenar los personajes de A-Z
export const order=(characters) => {
  if (characters === ''){
    return false
  }
  characters.sort((a, b) => 
  {
    if (a.name > b.name){
      return 1;
    }
    if (a.name < b.name){
      return -1;
    }
    return 0;
  }
  ); 
  return characters;
};


//Funcion para contar la cantidad de personajes
export const calculate=(amount) => {
  if (amount === ''){
    return false
  }
  let addition=0;
  for(let i=0;i<amount.length;i++){
    addition=addition+1;
  }
  return addition;
};
// funcionpara filtrar por datos 
export const filterData=(data, casas) => {
  switch(casas){
    case "Gryffindor":
      const casagryffindor = data.characters.filter(characters => characters.house == "Gryffindor");
      console.log(casagryffindor)
      break;
    case "Ravenclaw":
      const casaravenclaw = data.characters.filter(characters => characters.house == "Ravenclaw");
      console.log(casaravenclaw)
      break;
    case "Slytherin":
      const casaslytherin = data.characters.filter(characters => characters.house == "Slytherin");
      console.log(casaslytherin)
      break;
    case "Hufflepuff":
      const casahufflepuff = data.characters.filter(characters => characters.house == "Hufflepuff");
      console.log(casahufflepuff)
      break;
    }
};


//las clases inician en Mayuscula
class Pokemon{
    name = '';
    type = '';
    evolutions = [];

    constructor(name, type, evolutions){ //inicializar valores de nuestros objetos
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
    }
    attack(){
        return `${this.name}, esta atacando`;
    }
    evolve(evolution = 0){
        //valida que la opción exista
        const EVOLVE = this.evolutions[evolution] || '';
        let message = 'No puedo evolucionar';

        if(EVOLVE){
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }
        return message;
    }
} 

const Charmander = new Pokemon('Charmander', 'Fire', ['Charmeleon', 'Charizard']);
const Squirtle = new Pokemon('Squirtle', 'Water', ['Wartortle', 'Blastoise']);

console.log((`${Charmander.name} es de tipo ${Charmander.type}`));
console.log(Charmander.attack());
console.log(Charmander.evolve(0));

console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
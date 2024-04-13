export interface IPokemon {
  name: string;
  id: string;
  img: string;
  gif: string;
  types: string[];
  stats: IStats;
  weight: string;
  height: string;
}

export interface IStats {
  hp: string;
  atk: string;
  satk: string;
  def: string;
  sdef: string;
  spd: string;
}

export function getEmptyIPokemon() {
  return {
    name: '- - - - - -',
    id: '000',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    gif: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    types: ['- - -'],
    stats: {
      hp: '010',
      atk: '030',
      satk: '040',
      def: '020',
      sdef: '040',
      spd: '090',
    },
    weight: '1.0',
    height: '1.0',
  };
}

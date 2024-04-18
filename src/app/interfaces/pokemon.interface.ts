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
    id: '1',
    img: '',
    gif: '',
    types: ['- - -'],
    stats: {
      hp: '000',
      atk: '000',
      satk: '000',
      def: '000',
      sdef: '000',
      spd: '000',
    },
    weight: '1.0',
    height: '1.0',
  };
}

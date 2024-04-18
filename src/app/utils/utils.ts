export const Utils = {
  mapPokemon(pokemon: any): any {
    const mapType = (typeArray: any) => {
      return typeArray.type.name;
    };

    const findBaseStat = (
      stat:
        | 'hp'
        | 'attack'
        | 'special-attack'
        | 'defense'
        | 'special-defense'
        | 'speed'
    ) => {
      const baseStat = pokemon.stats.find(
        (el: any) => el.stat.name === stat
      ).base_stat;
      return `${baseStat}`.padStart(3, '0');
    };

    const mapStats = {
      hp: findBaseStat('hp'),
      atk: findBaseStat('attack'),
      satk: findBaseStat('special-attack'),
      def: findBaseStat('defense'),
      sdef: findBaseStat('special-defense'),
      spd: findBaseStat('speed'),
    };

    const formatarValor = (valor: number) => {
      if (valor < 10) {
        return `0.${valor}`;
      }
      const stringValor = `${valor}`;
      return `${stringValor.slice(0, -1)}.${stringValor.slice(-1)}`;
    };

    return {
      name: pokemon.name,
      id: `${pokemon.id}`,
      img: pokemon.sprites.other['official-artwork'].front_default,
      gif: pokemon.sprites.other['showdown'].front_default,
      types: pokemon.types.map(mapType),
      stats: mapStats,
      weight: formatarValor(pokemon.weight),
      height: formatarValor(pokemon.height),
    };
  },
};

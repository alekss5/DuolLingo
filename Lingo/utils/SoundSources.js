class SoundSource {
    static sources = {
      correct:require('../assets/sounds/correct.mp3'),
      Beer: require('../assets/sounds/beer.mp3'),
      Bread: require('../assets/sounds/bread.mp3'),
      Coffee: require('../assets/sounds/coffee.mp3'),
      Tea: require('../assets/sounds/tea.mp3'),
      Milk: require('../assets/sounds/milk.mp3'),

      
    };
  
    static getSoundSource(text) {
      return SoundSource.sources[text];
    }
  }
  
  export default SoundSource;
  
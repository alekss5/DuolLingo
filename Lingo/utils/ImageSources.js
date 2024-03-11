class ImageSource {
    static sources = {
      Beer: require('../assets/icons/Beer.png'),
      Bread: require('../assets/icons/Bread.png'),
      Coffee: require('../assets/icons/Coffee.png'),
      Tea: require('../assets/icons/Tea.png'),
      Milk: require('../assets/icons/Milk.png'),
     
    };
  
    static getImageSource(text) {

      return ImageSource.sources[text];

    }
  }
  
  export default ImageSource;
  
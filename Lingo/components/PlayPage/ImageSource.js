class ImageSource {
    static sources = {
      Beer: require('../../Images/icons/Beer.png'),
      Bread: require('../../Images/icons/Bread.png'),
      Coffee: require('../../Images/icons/Coffee.png'),
      Tea: require('../../Images/icons/Tea.png'),
      Milk: require('../../Images/icons/Milk.png'),
     
    };
  
    static getImageSource(text) {

      return ImageSource.sources[text];

    }
  }
  
  export default ImageSource;
  
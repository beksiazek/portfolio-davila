export default function checkImage(url) {
    var image = new Image();
    image.onload = function() {
      if (this.width > 0) {
        return url;
      }
    }
    image.onerror = function() {
      return false;
    }
    image.src = url;
  }
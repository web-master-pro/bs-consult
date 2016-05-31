(function () {
  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('.header__video'),

    // Container element
    container: document.querySelector('.header'),

    // Resize
    resize: true,

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'assets/video/video.mp4',
        type: 'video/mp4'
      },
      {
        src: 'assets/video/video.ogv',
        type: 'video/ogv'
      },
      {
        src: 'assets/video/video.webm',
        type: 'video/webm'
      }

    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('.header__video-cover').style.display = 'none';
    }
  });
}());

class SelectShr {
  constructor(opts) {
    this.opts = {};
    this.opts.elements = opts.elements;
    this.opts.socials = opts.socials;
  };

  init() {
    document.addEventListener('click', function(el) {
      var x             = el.clientX;
      var y             = el.clientY;
      var selectionText = getSelectionText().length;
      var selectShr     = document.querySelector('.selectShr');

      selectShrPosition(x, y, selectShr);

      if(selectionText > 0)
        selectShr.classList.add('selectShrOpen');
      else
        selectShr.classList.remove('selectShrOpen');

      console.log(getSelectionText());
    });

    function getSelectionText() {
      window.getSelection
        return window.getSelection().toString();
    };

    function selectShrPosition(selectShrX, selectShrY, selectShr) {
      selectShr.style.position = 'absolute';
      selectShr.style.left     = (selectShrX - 40) + 'px';
      selectShr.style.top      = (selectShrY - 55) + 'px';
    };

    var selectShrContainer = document.createElement('div');

    selectShrContainer.classList.add('selectShr');
    document.body.appendChild(selectShrContainer);
  }

  return init();
};
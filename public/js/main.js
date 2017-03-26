$(document).ready(function() {

   $('#search').typeahead({
                source: [ "Drone Footage of High Rises in a City", 
                  "Master hacker doing his work",
                  "A person working on a MacBook",
                  "Satellite orbiting in SPACE",
                  "Montreal skyline on Mount Royal",
                  ]
    });


   (function() {
  'use strict';

  class FileUploader {
    cache() {
      this.$fileInput = document.querySelector('input');
      this.$img = document.querySelector('img');
      this.$label = document.querySelector('label');
    }

    events() {
      this.$fileInput.addEventListener('change', this._handleInputChange.bind(this));
      this.$img.addEventListener('load', this._handleImageLoaded.bind(this));
      this.$label.addEventListener('dragenter', this._handleDragEnter.bind(this));
      this.$label.addEventListener('dragleave', this._handleDragLeave.bind(this));
      this.$label.addEventListener('drop', this._handleDrop.bind(this));
    }

    init() {
      this.cache();
      this.events();
    }

    _handleDragEnter(e){
      e.preventDefault();

      if (!this.$label.classList.contains('dragging')) {
        this.$label.classList.add('dragging');
      }
    }

    _handleDragLeave(e) {
      e.preventDefault();

      if (this.$label.classList.contains('dragging')) {
        this.$label.classList.remove('dragging');
      }
    }

    _handleDrop(e) {
      e.preventDefault();
      this.$label.classList.remove('dragging');

      this.$img.files = e.dataTransfer.files;
      this._handleInputChange();
    }

    _handleImageLoaded() {
      if (!this.$img.classList.contains('loaded')) {
        this.$img.classList.add('loaded');
      }
    }

    _handleInputChange(e) {
      var file = (undefined !== e)
      ? e.target.files[0]
      : this.$img.files[0];

      var pattern = /image-*/;
      var reader = new FileReader();

      if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
      }

      this.$img.src = "";

      reader.onload = this._handleReaderLoaded.bind(this);

      if (this.$label.classList.contains('loaded')) {
        this.$label.classList.remove('loaded');
      }

      this.$label.classList.add('loading');

      reader.readAsDataURL(file);
    }

    _handleReaderLoaded(e) {
      var reader = e.target;
      this.$img.src = reader.result;
      this.$label.classList.remove('loading');
      this.$label.classList.add('loaded');
    }
  }

  var fileUploader = new FileUploader();
  fileUploader.init();

} ());

   function myFunction1() {
      video = document.getElementById("video");
      url = document.getElementById("vidfile").src;
      endSecs = document.getElementById("endSecs").value;
      if (document.getElementById("checkbox").checked) {
      document.getElementById("url").innerHTML = url + "#t=" + video.currentTime + "," + endSecs;
      } else {
      document.getElementById("url").innerHTML = url + "#t=" + video.currentTime;
      }
      }

});
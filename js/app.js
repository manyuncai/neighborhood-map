var ViewModel = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable ('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr');
  this.incrementCounter = function() {
      this.clickCount(this.clickCount() + 1);
  };

  this.levels = ko.computed(function(){
    var level;
    if (this.clickCount() < 10) {
      level = "New Born";
    } else if (this.clickCount() < 30) {
      level = "Teen";
    } else {
      level = "Adult";
    }
    return level;
},this);

}
ko.applyBindings(new ViewModel());

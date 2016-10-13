(function () {
'use strict';

angular.module('MenuApp')
.component('menuList', {
  templateUrl: 'src/templates/menulist.template.html',
  bindings: {
    items: '<'
  //  getItemsForCategory: '&'
  }
});

})();

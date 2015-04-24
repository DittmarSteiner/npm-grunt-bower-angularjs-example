( function () {
  'use strict';

  angular.module ( 'app', [ ] )
    .controller ( 'MainCtrl', function () {
      var self = this;
      self.customer = {
        name: 'Lukas'
      };
    } );
} )
();

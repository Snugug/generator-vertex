(function (angular) {
  'use strict';

  <%= funcBody %>

  //////////////////////////////
  // Define Module
  //////////////////////////////
  angular
    .module('<%= moduleName %>', [])
    .<%= type %>('<%= typeName %>', <%= funcName %>);

})(window.angular);

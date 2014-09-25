'use strict';

angular.module('jsSparkUiApp').controller('ClientsCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.clients = [
        {id: '-ooHn-0id9eXLxRgAAAB'},
        {id: '1ooHn-0id9eXLxRgAAAB', email:'some@that.loggedin.com'}
    ];

});

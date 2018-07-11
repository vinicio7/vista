var service = angular.module('app.service.informacion', ['app.constants']);

service.service('InformacionService', ['$http', 'WS_URL', function($http, WS_URL)  {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.index = function(params){
        return $http.get(WS_URL+'informacion');
    };

    this.store = function(params) {
        console.log(params);
        return $http.post(WS_URL+'informacion', params);
    };

    this.update = function(params) {
        return $http.put(WS_URL+'informacion/' + params.id, params);
    };

    this.aprob = function(id) {
        return $http.post(WS_URL+'aprob/' + id);
    };

     this.clienteUsuario = function(params) {
        return $http.post(WS_URL+'crear/usuario/cliente', params);
    };

    this.rolesinformacion = function(id) {
        return $http.get(WS_URL+'roles/informacion');
    };
    
    this.reset = function(id) {
        return $http.get(WS_URL+'resetear/'+id);
    };

}]);
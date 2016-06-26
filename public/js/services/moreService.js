// TODO SERVICE
function moreService($http) {
    return {
        get : function() {
            return $http.get('/mores');
        },
        update : function(id, data){
            return $http.put('/mores/' + id, data);
        },
        create : function(data) {
            return $http.post('/mores', data);
        },
        delete : function(id) {
            return $http.delete('/mores/' + id);
        }
    }
};

// more CONTROLLER
function moreController($scope, $http, moreService) {
	$scope.title = "More List";
	
	function load(){
		moreService.get().then(function(res){
			$scope.mores = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		moreService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(more){
		moreService.update(more._id, more).then(function(res){
			load();
		});
	}
	$scope.delete = function(more){
		moreService.delete(more._id).then(function(res){
			load();
		});
	}
	load();
}
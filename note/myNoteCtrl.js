app.controller('myNoteCtrl', function ($scope) {
    $scope.message = "";
    $scope.left = function () { return 100-$scope.message.length;};
    $scope.clear = function () { return $scope.message = ""; };
    $scope.save = function () { alert("Note Saved"); };
});
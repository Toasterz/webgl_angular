(function() {
    angular.module('ngEarth')
          .controller('EarthController', EarthController);

    EarthController.$inject = ['$scope', 'WeatherService'];

    function EarthController($scope){
      $scope.latitude = 29;
      $scope.longitude = -82;
      $scope.options = { zoom: 3.0, position: [$scope.latitude, $scope.longitude] };
      // $scope.marker = WE.marker([$scope.latitude, $scope.longitude]).addTo($scope.map);
      $scope.map = new WE.map('earth_div', $scope.options);
      WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: '© OpenStreetMap contributors'
        }).addTo($scope.map);

      $scope.map.on('click', function(evt){
        console.log(evt);
        $scope.latitude = evt.latitude;
        $scope.longitude = evt.longitude;
        $scope.$apply();
      });



    }
})();

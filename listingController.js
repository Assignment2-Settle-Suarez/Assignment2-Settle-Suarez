angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = '';
    //$scope.searchText = '';

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.addListing = function() {
      $scope.listings.push($scope.newListing);
      $scope.newListing = '';
      $scope.listings.sort(function(e1,e2) {
        if(e1.code > e2.code) {
          return 1;
        }
        if (e1.code < e2.code) {
          return -1;
        }
        return 0;
      })

    };

    $scope.deleteListing = function(listing) {
      var index = $scope.listings.indexOf(listing);
      $scope.listings.splice(index,1);
    };

    $scope.showDetails = function(index) {

      $scope.detailedInfo = {

        name: $scope.listings[index].name,
        code: $scope.listings[index].code,
        coordinates: $scope.listings[index].coordinates,
        address: $scope.listings[index].address

      }

    };
  }
]);

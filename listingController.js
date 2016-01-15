angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings; 
    $scope.detailedInfo = undefined; //Created when showDetails is called
    $scope.newListing = ''; //Used to add listing
    $scope.searchText = ''; //Holds user's entry into directory search bar


    $scope.addListing = function() {

      /*Push new listing onto listings array*/
      $scope.listings.push($scope.newListing);

      /*Reset newListing variable to empty*/
      $scope.newListing = '';

      /*Sort array alphabetically by code*/
      $scope.listings.sort(function(e1,e2) {
        if(e1.code > e2.code) {
          return 1;
        }
        if (e1.code < e2.code) {
          return -1;
        }
        return 0;
      });

    };

    $scope.deleteListing = function(listing) {
      var index = $scope.listings.indexOf(listing);
      $scope.listings.splice(index,1);
    };

    $scope.showDetails = function(listing) {

      var index = $scope.listings.indexOf(listing);

      $scope.detailedInfo = {

        name: $scope.listings[index].name,
        code: $scope.listings[index].code,
        coordinates: $scope.listings[index].coordinates,
        address: $scope.listings[index].address

      }

    };
  }
]);

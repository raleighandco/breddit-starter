(function () {
    'use strict';
    angular.module('About')
        .controller('About', ['$scope', '$location', '$anchorScroll',
        function ($scope, $location, $anchorScroll) {
                //Calls the goToOneTimeGift Function
                $scope.goToWhoWeServe = function () {
                    $location.hash('who-we-serve');
                    $anchorScroll();
                };
                //Calls the goToMonthlyGift Function
                $scope.goToWhatWeDo = function () {
                    $location.hash('what-we-do');
                    $anchorScroll;
                };
                //Calls the goToCorporateGift Function
                $scope.goToOurFounder = function () {
                    $location.hash('our-founder');
                    $anchorScroll;
                };
                $scope.goToOurResults = function () {
                    $location.hash('our-results');
                    $anchorScroll;
                };
                $scope.goToTop = function () {
                    $location.hash('top');
                    $anchorScroll;
                };
            
        }]);
})();
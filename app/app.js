//IFFE Function
(function () {
    'use strict';
    angular.module('Home', []);
    angular.module('About', []);
    angular.module('Posts', []);
    angular.module('BredditStarter', [
        'Home',
        'About,
        'Posts'
    ])
    .config(function ($stateProivder, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/states/home/home.html",
            controller: "Home"
        })
        .state('about', {
            url: "/about", 
            templateUrl: "app/states/about/about.html",
            controller: "About"
        })
        .state('posts', {
            url: "/posts",
            templateUrl: "app/states/posts/posts.html",
            controller: "Posts"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "app/states/contact/contact.html",
            controller: "Contact"
        })
    });
}());
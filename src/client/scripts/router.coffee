angular.module('app').config ['$routeProvider', ($routeProvider) ->
	$routeProvider
		.when '/',
			templateUrl: 'views/main/home.html'

		.when '/how-old-is-your-baby',
			templateUrl: 'views/main/how-old-is-your-baby.html'

		.when '/baby-squirrel-care',
			templateUrl: 'views/main/baby-squirrel-care.html'

		.when '/nutrition',
			templateUrl: 'views/main/nutrition.html'

		.when '/photo-gallery',
			templateUrl: 'views/main/photo-gallery.html'

		.when '/contact',
			templateUrl: 'views/main/contact.html'

		.otherwise
			redirectTo: '/'

]

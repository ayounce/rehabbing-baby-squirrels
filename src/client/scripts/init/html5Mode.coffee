angular.module('app').run ['$route', angular.noop]

angular.module('app').config ['$locationProvider'
	($locationProvider) ->
		$locationProvider.html5Mode true
]
//resume v01
(function() {
	var ResumeApp = angular.module('ResumeApp', [
		'ngRoute',
		'controllers'
	]);

	ResumeApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/experience', {
				templateUrl: 'partials/_jobs.html',
				controller: 'ExperienceController'
			}).
			when('/accomplishments', {
				templateUrl: 'partials/_accomplishments.html',
				controller: 'AccomplishmentsController'
			}).
			when('/skills', {
				templateUrl: 'partials/_skills.html',
				controller: 'SkillsController'
			}).
			when('/education', {
				templateUrl: 'partials/_education.html',
				controller: 'EducationController'
			}).
			otherwise({
				redirectTo: '/experience'
			});
	}]);

	ResumeApp.factory('ResumeData', function($http) {
		return { 
			getResumeData: function(callback) {
				$http.get('js/resume.json').success(callback);
			}
		};
	});
})();

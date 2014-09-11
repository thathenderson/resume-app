//resume v01
(function() {
	//App config
	var ResumeApp = angular.module('ResumeApp', [
		'ngRoute',
		'controllers'
	]);

	//Router
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
			when('/print', {
				templateUrl: 'partials/_print.html',
				controller: 'PrintController'
			}).
			otherwise({
				redirectTo: '/experience'
			});
	}]);

	//Factory to grab appropriate json
	ResumeApp.factory('ResumeData', function($http) {
		return { 
			getResumeData: function(type, callback) {
				$http.get('js/resume_'+type+'.json').success(callback);
			}
		};
	});
})();
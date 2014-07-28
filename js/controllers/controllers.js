var controllers = angular.module('controllers', []);

controllers.controller('MeController', function($scope, $location, ResumeData) {
	ResumeData.getResumeData(function(data) {
		$scope.me = data.me;
	});

	$scope.isActive = function(path) {
		if ($location.path().substr(0, path.length) == path) {	
			return true;
			console.log('returned active class');
		} else {
			return false;
		}
	}

	$scope.showMenu = function() {
		$('.nav').toggleClass('show');
	}

	$scope.$on('$routeChangeStart', function() {
		$('.nav').removeClass('show');
	});
});

controllers.controller('ExperienceController', function($scope, ResumeData) {
	ResumeData.getResumeData(function(data) {
		$scope.jobs = data.jobs;
	});
});

controllers.controller('AccomplishmentsController', function($scope, ResumeData) {
	ResumeData.getResumeData(function(data) {
		$scope.accomplishments = data.accomplishments;
	});
});

controllers.controller('SkillsController', function($scope, ResumeData) {
	ResumeData.getResumeData(function(data) {
		$scope.skills = data.skills;
	});
});

controllers.controller('EducationController', function($scope, ResumeData) {
	ResumeData.getResumeData(function(data) {
		$scope.education = data.education;
	});
});
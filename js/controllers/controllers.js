var controllers = angular.module('controllers', []);

controllers.controller('MeController', function($scope, $location, ResumeData) {
	ResumeData.getResumeData('me', function(data) {
		$scope.me = data.me;
	});

	//check to see if any nav options are active
	$scope.isActive = function(path) {
		if ($location.path().substr(0, path.length) == path) {	
			return true;
		} else {
			return false;
		}
	}

	//open up the nav menu
	$scope.showMenu = function() {
		$('.menu').toggleClass('active-menu-button');
		$('.nav-options').toggleClass('show-menu');
	}

	//super, super hacky way to trigger print only after view has finished loading. I hate myself
	$scope.printMe = function() {
		window.setTimeout(window.print, 500);
	}

	//remove all menu class once something is selected
	$scope.$on('$routeChangeStart', function() {
		$('.menu').removeClass('active-menu-button');
		$('.nav-options').removeClass('show-menu');
	});
});

controllers.controller('ExperienceController', function($scope, ResumeData) {
	ResumeData.getResumeData('jobs', function(data) {
		$scope.jobs = data.jobs;
	});
});

controllers.controller('AccomplishmentsController', function($scope, ResumeData) {
	ResumeData.getResumeData('accm', function(data) {
		$scope.accomplishments = data.accomplishments;
	});
});

controllers.controller('SkillsController', function($scope, ResumeData) {
	ResumeData.getResumeData('skills', function(data) {
		$scope.skills = data.skills;
	});
});

controllers.controller('EducationController', function($scope, ResumeData) {
	ResumeData.getResumeData('edu', function(data) {
		$scope.education = data.education;
	});
});

controllers.controller('PrintController', function($scope, ResumeData) {
	ResumeData.getResumeData('full', function(data) {
		$scope.jobs = data.jobs;
		$scope.accomplishments = data.accomplishments;
		$scope.skills = data.skills;
		$scope.education = data.education;
	});
});
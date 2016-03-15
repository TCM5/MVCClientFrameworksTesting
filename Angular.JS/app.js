	var sampleApp = angular.module('sampleApp', ['ngRoute']);

	sampleApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'views/intro.html',                                               
			controller:'IntroCtrl',   
		})
		
		.when('/mei', {
			templateUrl: 'views/mei.html',                                               
			controller:'MeiCtrl',   
		})
		
		.when('/media', {
			templateUrl: 'views/media.html',                                               
			controller:'MediaCtrl',   
		})
		
		.when('/cadeiras', {
			templateUrl: 'views/cadeiras.html',                                               
			controller:'CadeirasCtrl',   
		})
				
		.when('/contactos', {
			templateUrl: 'views/contactos.html',                                               
			controller:'ContactosCtrl',   
		});

	}]);

	
	sampleApp.controller('IntroCtrl', function($scope) {
		$scope.message = 'intro!';

	});

	sampleApp.controller('MeiCtrl', function($scope) {
		$scope.message = 'mei!';
	});
	
	sampleApp.controller('MediaCtrl', function($scope) {
		$scope.message = 'media!';
		
			$scope.services = [
		{
			name: 'Tecnologias para Sistemas de Informação Operacionais',
			nota: 19,
			active:true
		},{
			name: 'Auditoria e Qualidade',
			nota: 14,
			active:false
		},{
			name: 'Sistemas Informáticos de Apoio à Decisão II',
			nota: 14,
			active:false
		},{
			name: 'Gestão de Projectos de Tecnologia e Sistemas de Informação',
			nota: 15,
			active:false
		},{
			name: 'Desenvolvimento de Aplicações para Ambientes Móveis',
			nota: 15,
			active:false
		}

	];
	
	
	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// method to calc average

	$scope.media = function(){

		var total_cadeiras = 0;
		var total_notas = 0;

		// Use the angular forEach 

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.nota;
			}
			total_cadeiras=total_cadeiras+1;
		});

		return total_notas/total_cadeiras;
	};
		
	});

	sampleApp.controller('CadeirasCtrl', function($scope) {
		$scope.message = 'cadeiras!';
	});

	sampleApp.controller('ContactosCtrl', function($scope) {
		$scope.message = 'contactos!';
	});

	
	


	
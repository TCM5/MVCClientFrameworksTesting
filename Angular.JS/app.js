	var angularAPP = angular.module('angularAPP', ['ngRoute']);

	angularAPP.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'views/intro.html',                                               
			controller:'IntroCtrl',   
		})
		
		.when('/intro', {
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
		
		 .when('/Cadeira/:cadeiraID', {
			templateUrl: 'views/cadeiras_detalhe.html',
			controller: 'CadeirasDetalheCtrl'
      })
				
		.when('/contactos', {
			templateUrl: 'views/contactos.html',                                               
			controller:'ContactosCtrl',   
		});

	}]);


	
	angularAPP.controller('IntroCtrl', function($scope) {
			

   //iniciar variaveis
     $scope.firstName = "";
	 $scope.lastName = "";
     $scope.moveAnimationState = "Por enviar";
     $scope.onCheckBoxChangeResult = "";

	$scope.getFullName = function ()  {
		if(  $scope.firstName != "" ||  $scope.lastName != ""){
			return "Eu, " + $scope.firstName + " " + $scope.lastName;
		}
	};

    $scope.onCheckBoxChange = function () {
		$scope.onCheckBoxChangeResult = ($scope.check1Selected ? "gosto" : "não gosto") + " do curso " +
        ", " + ($scope.check2Selected ? "gosto" : "não gosto") + " das cadeiras . Envio esta informação para fins estatisticos";
    };

   	
    $scope.moveAnimationState = "Por enviar";

    $scope.onMoveSquaresClick = function ()  {
    
        $scope.moveAnimationState = "A enviar...";
            
		sleep(3000); //3 segundinhos :P
        
		$scope.moveAnimationState = "Enviado!";
      
      }
});

//sleep como no java
		function sleep(milliseconds) {
			  var start = new Date().getTime();
			  for (var i = 0; i < 1e7; i++) {
				if ((new Date().getTime() - start) > milliseconds){
				  break;
					}
				}
			}
			
	
	angularAPP.controller('MeiCtrl', function($scope) {
	});




	
	
	
	
	
	
	
	
	// Define a new module. This time we declare a dependency on
// the ngResource module, so we can work with the Instagram API

var app = angular.module("switchableGrid", ['ngResource']);

// Create and register the new "instagram" service
app.factory('instagram', function($resource){

	return {
		fetchPopular: function(callback){

			// The ngResource module gives us the $resource service. It makes working with
			// AJAX easy. Here I am using a client_id of a test app. Replace it with yours.

			var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{
				client_id: '642176ece1e7445e99244cec26f4de1f'
			},{
				// This creates an action which we've chosen to name "fetch". It issues
				// an JSONP request to the URL of the resource. JSONP requires that the
				// callback=JSON_CALLBACK part is added to the URL.

				fetch:{method:'JSONP'}
			});

			api.fetch(function(response){

				// Call the supplied callback function
				callback(response.data);

			});
		}
	}

});

// The controller. Notice that I've included our instagram service which we
// defined below. It will be available inside the function automatically.

function SwitchableGridController($scope, instagram){

	// Default layout of the app. Clicking the buttons in the toolbar
	// changes this value.

	$scope.layout = 'grid';

	$scope.pics = [];

	// Use the instagram service and fetch a list of the popular pics
	instagram.fetchPopular(function(data){

		// Assigning the pics array will cause the view
		// to be automatically redrawn by Angular.
		$scope.pics = data;
	});

}

	
	
	
	
	
	
	
	
	
	
	
	
	
	angularAPP.controller('MediaCtrl', function($scope) {
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
				total_cadeiras+=1;			
				total_notas+= s.nota;
			
			}
			
		});
		
		var media = total_notas/total_cadeiras;
		
		return parseFloat(media).toFixed(2);
	};
		
	});

	angularAPP.controller('CadeirasCtrl', function($scope) {
		//Nothing to do here
	});

	

	
	angularAPP.controller('CadeirasDetalheCtrl', function($scope, $routeParams) {

	
	
	switch($routeParams.cadeiraID) {
		case '1':
			$scope.cadeiraNome = 'Tecnologias para Sistemas de Informação Operacionais';
			$scope.cadeiraFUC = 'Trabalho Grupo com Discussão 40% – Trabalho – TI – Trabalho - SI - Frequência (Avaliação Individual) "60% – Consituido pela matéria lecionada – Questões sobre temas dos trabalhos';
			break;
		
		case '2':
			$scope.cadeiraNome = 'Auditoria e Qualidade';
			$scope.cadeiraFUC  = 'Teste individual sem uso de computador (60%)		  Trabalho em grupo de Auditoria em Sistemas de Informação (40%)								  Exame';
			break;
		
		case '3':
			$scope.cadeiraNome = 'Sistemas Informáticos de Apoio à Decisão II';
			$scope.cadeiraFUC = 'Existem dois tipos de avaliação: contínua e por exame.Avaliação contínua  é composta pelos seguintes instrumentos de avaliação:- Trabalho prático de BSC em grupo -  60%- Teste teórico individual (frequência) - 40%A Nota mínima para cada instrumento de avaliação é de 10 valores. A nota de exame constitui 100% da nota da UC.';
			break;
		
		case '4':
			$scope.cadeiraNome = 'Gestão de Projectos de Tecnologia e Sistemas de Informação';
			$scope.cadeiraFUC = 'Avaliação por exame final:* 100% - Prova escrita: Teórica+Exercício- Aprovação - nota >= 10Avaliação Contínua (opcional):- Componentes:  * 50% - Projeto  ( 35% trab. Grupo + 15% avaliação individual); * 50% - Teste escrito individual (sem consulta).- Nota mínima em cada uma das componentes: 40%.';
			break;
		
		case '5':
			$scope.cadeiraNome = 'Desenvolvimento de Aplicações para Ambientes Móveis';
			$scope.cadeiraFUC = 'Avaliação Contínua:- Realização de projeto em grupo/individual (50%)- Apresentação e discussão do projeto (40%)- Participação nas aulas (10%)Exame Final:- Prova escrita (100%) ';
			break;
		
		default:
			break;
						
	}


	});
	
	
	
	angularAPP.filter('searchFor', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});
	
	
	angularAPP.controller('ContactosCtrl', function($scope) {
	
	$scope.items = [
	
		{
			url: 'https://ciencia.iscte-iul.pt/public/person/cjc',
			title: 'Carlos Manuel Jorge da Costa',
			image: 'https://ciencia.iscte-iul.pt/public/photo/cjc'
		},
		{
			url: 'https://ciencia.iscte-iul.pt/public/person/njsa',
			title: 'Nelson José dos Santos António',
			image: 'https://ciencia.iscte-iul.pt/public/photo/njsa'
		},
		{
			url: 'https://ciencia.iscte-iul.pt/public/person/agm',
			title: 'António Gonçalves Martins',
			image: 'https://ciencia.iscte-iul.pt/public/photo/agm'
		},
		{
			url: 'https://ciencia.iscte-iul.pt/public/person/aara',
			title: 'Álvaro Augusto da Rosa',
			image: 'https://ciencia.iscte-iul.pt/public/photo/aara'
		},
		{
			url: 'https://ciencia.iscte-iul.pt/public/person/earc',
			title: 'Elsa Alexandra Cabral da Rocha Cardoso',
			image: 'https://ciencia.iscte-iul.pt/public/photo/earc'
		},
		{
			url: 'https://ciencia.iscte-iul.pt/public/person/lcpd',
			title: 'Luisa Domingues',
			image: 'https://ciencia.iscte-iul.pt/public/photo/lcpd'
		},
		{
			url: 'https://ciencia.iscte-iul.pt/public/person/jgomes',
			title: 'José António Cordeiro Gomes',
			image: 'https://ciencia.iscte-iul.pt/public/photo/jgomes'
		},
		{
			url: 'https://ciencia.iscte-iul.pt/public/person/cjcs',
			title: 'Carlos José Corredoura Serrão',
			image: 'https://ciencia.iscte-iul.pt/public/photo/cjcs'
		}
	];
	
	});

	
	


	
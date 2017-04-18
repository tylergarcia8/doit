function AppCtrl($scope) {
	console.log("Hello World from controller");

	person1 = {
		name: 'Tyler',
		email: 'tyler@email.com',
		number: '(111) 111-1111'
	};

	person2 = {
		name: 'Marcial',
		email: 'marcial@email.com',
		number: '(222) 222-2222'
	};

	person3 = {
		name: 'Luciano',
		email: 'luchi@email.com',
		number: '(333) 333-3333'
	};

	var contactlist = [person1, person2, person3];
	$scope.contactlist = contactlist;

}
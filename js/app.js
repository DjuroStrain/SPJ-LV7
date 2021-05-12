var oVijestiModul = angular.module('vijesti-app', []);

oVijestiModul.controller('naslovniController', function ($scope, $http){
    $scope.oVijesti = [];

    $http({
        method : "GET",
        url: "./vijesti.json"
    }).then(function(response){
        console.log(response.data);
        $scope.oVijesti = response.data;    
    },function(response){
        console.log("Došlo je pogreške");
    });

    $scope.otvoriModal2 = function(sHref)
    {
        console.log("uslo");
        $('#modals').removeData('bs.modal');
        $('#modals').modal
        ({
        remote: sHref, 
        show: true
        });
    };

   
});

oVijestiModul.directive('prikaziVijestiSve', function(){
    return {
        restrict: "E",
        templateUrl: "templates/vijesti.html"
    };
});

oVijestiModul.filter('promijeniFormat', function(){
    return function (datum){
        var newDate = datum.replace(/\-/g,'.');
        return newDate;
    }
})


oVijestiModul.service('modal', function(){
    this.otvoriModal = function(sHref)
    {
        $('#modals').removeData('bs.modal');
        $('#modals').modal
        ({
        remote: sHref, //radi samo do Bootstrap verzije 3.3.7, ubacuje sadržaj u modal-content
        show: true
        });
        };
    });


    function Dodaj()
    {
        console.log("uslo");
        var sVijestNaziv = $('#post_naziv').val();
	    var sVijestTekst = $('#post_tekst').val();
        var Datum = getDate();
	    if(sVijestNaziv	== "" || sVijestTekst == "" )
	    {
		    alert("Nisu uneseni svi podaci!");
	    }
	    else{
	    $.ajax({
		    url: 'http://localhost/DuroBelacic(SPJ)/DuroBelacic/LV7/dataSaveAjax.php',
		    type: 'POST',
		    datatype: 'html',
		    data:
		    {
			    akcija: 'dodaj_vijest',
			    post_naziv: sVijestNaziv,
			    post_tekst: sVijestTekst,
                datum : Datum
		    },
		    success: function(sOdgovorPosluzitelja)
		    {
			    alert('Vijest je uspjesno dodana!');
		    },
		    error: function(XMLHttpRequest, textStatus, exception)
		    {
			    console.log('Doslo je do pogreske pri ododavanju vijesti');
		    },
		    async: true
	})};
    };

    function ObrisiVijest(nVijestID)
    {
        console.log("uslo");
	    $.ajax({
		url: 'http://localhost/DuroBelacic(SPJ)/DuroBelacic/LV7/dataSaveAjax.php',
		type: 'POST',
		datatype: 'html',
		data:
		{
			akcija:'obrisi_vijest',
			vijest_id:nVijestID
		},
		success: function (sOdgovorPosluzitelja)
		{
			alert('Vijest je uspjesno obrisana');
		},
		error: function(XMLHttpRequest, textStatus, exception)
		{
			console.log('Došlo je do pogreške pri brisanju vijesti');
		},
		async: true
        })

    }
    
    function CloseModal()
    {
    $('#modals').modal('hide');
    }

    function getDate()
    {
        var date = new Date();
	    var day = date.getDate();
	    var month = date.getMonth()+1;
	    var year = date.getFullYear();

	    var newDate = day+"-"+month+"-"+year;
        console.log(newDate);
        return newDate;
    }
      
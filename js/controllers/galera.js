angular.module('emprestiopatinhas').controller('galeraController', galeraController);

function galeraController($scope,$state,$http){
    console.log(2);
    if (1 == 1){
        console.log(1);
        $http.get('http://localhost:3000/consulta/todos',{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWNlZDY4ODc5YmQ1MzFjYTQxOTcyZDQiLCJpYXQiOjE1MDk0MDI1Njd9.X-dTtima6pbIVBDT3j57EGDi66T8jl9nK1VllBfKMyo"}})
        .then(function(respostaSucesso){
            console.log(`respostaSucesso: ${angular.toJson(respostaSucesso, 1)}`);
            // $state.go("main");
        }, function(respostaErro){
            console.log(respostaErro);
        });
    }
};

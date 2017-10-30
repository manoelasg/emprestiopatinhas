angular.module('emprestiopatinhas').controller('loginController', loginController);

function loginController($scope,$state,$http) {
    $scope.dados = {};
    $scope.valida = {
        email: false,
        senha: false
    };

    $scope.entrar = function() {
        if ($scope.dados.email == null) {
            $scope.valida.email = true;
        }else{
            $scope.valida.email = false;
        };
        if ($scope.dados.senha == null) {
            $scope.valida.senha = true;
        }else{
            $scope.valida.senha = false;
        };

        if ($scope.valida.email == false && $scope.valida.senha == false) {
            $http.post('http://localhost:3000/usuarios/login', $scope.dados).then(function(respostaSucesso){
                console.log(`respostaSucesso: ${angular.toJson(respostaSucesso, 1)}`);
                console.log(`respostaSucessoHeaders: ${angular.toJson(respostaSucesso.headers.Authorization, 1)}`);
                // $state.go("main");
            }, function(respostaErro){
                console.log(respostaErro);
                if (respostaErro.status == 403) {
                    alert('Usuários com menos de 18 anos não podem ser cadastrados');
                };
            });
        };


        // console.log('entrar()');
        // console.log($scope.dados);
        // console.log($scope.valida);

    };
};

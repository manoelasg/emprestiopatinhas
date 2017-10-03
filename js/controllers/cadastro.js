angular.module('emprestiopatinhas').controller('cadastroController', cadastroController);

function cadastroController($scope,$state,$http) {
    $scope.dados = {};
    $scope.valida = {
        nome: false,
        email: false,
        data_nascimento: false,
        senha: false
    };

    $scope.cadastrar = function() {
        if ($scope.dados.nome == null) {
            $scope.valida.nome = true
        }
        if ($scope.dados.email == null) {
            $scope.valida.email = true
        }
        if ($scope.dados.data_nascimento == null) {
            $scope.valida.data_nascimento = true
        }
        if ($scope.dados.senha == null) {
            $scope.valida.senha = true
        }

        $http.post('http://localhost:3000/usuarios/cadastro', $scope.dados).then(function(respostaSucesso){
            console.log(`respostaSucesso: ${respostaSucesso}`);
            $state.go("main");
        }, function(respostaErro){
            console.log(respostaErro);
            if (respostaErro.status == 403) {
                alert('Usuários com menos de 18 anos não podem ser cadastrados');
            }
        });


        console.log('cadastrar()');
        console.log($scope.dados);

    };
};

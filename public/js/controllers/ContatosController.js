angular.module('ifsp').controller('ContatosController',
    function($resource, $scope) {
        $scope.contatos = [];
        $scope.filtro = '';
        var Contato = $resource('/contatos');

        function buscaContatos() {
            Contato.query(
                function(contatos) {
                    $scope.contatos = contatos;
                },
                function(erro) {
                    console.log("Não foi possível obter a lista de contatos");
                    console.log(erro);
                }
            );
        }
        buscaContatos()

        $scope.remove = function(contato) {
            console.log(contato);
            Contato.delete({id: contato_id},
            buscaContatos,
            function(erro) {
                console.log("Não foi possível remover contato");
                console.log(erro);
            });
        }
    });
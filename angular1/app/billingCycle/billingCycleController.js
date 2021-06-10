(function(){
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        'msg',
        BillingCycleController
    ])

    function BillingCycleController($http) {
        const vm = this

        vm.create = function() {
            const url = 'http://localhost:3003/api/billingCycles'
            $http.post(url, vm.billingCycle).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação Realizada com sucesso!!')
            }).catch(function(response) {
                    msgs.addError(response.data.errors)
                })
        }
    }

})()
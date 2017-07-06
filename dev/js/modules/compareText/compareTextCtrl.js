export default [
    'compareTextService',
    function (compareTextService) {

        let vm = this;

        vm.compareEntity = compareTextService.getCompareEntity();

    }
]

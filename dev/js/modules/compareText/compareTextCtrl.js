export default [
    function () {
        let vm = this;

        vm.text1 = null;
        vm.text2 = null;
        vm.arr1 = [];
        vm.arr2 = []
        
        vm.checkText = function () {
            console.log(vm.text1);

            let res = textareaCurLineNum();

            console.log(res);
        };

        vm.checkText = function () {

            let res = textareaCurLineNum();

        };

        vm.checkText2 = function () {

            let res = textareaCurLineNum2();

        };

        function textareaCurLineNum() {
            var obj = document.getElementById('comment');

            vm.arr1 = obj.value.split('\n');

            console.log(vm.arr1);

        }

        function textareaCurLineNum2() {
            var obj = document.getElementById('comment1');

            vm.arr2 = obj.value.split('\n');

            console.log(vm.arr2);
        }

        // vm.start = function () {
        //     if(!vm.complete){
        //         vm.check();
        //     } else {
        //         vm.check2();
        //     }
        // };

        vm.check = function () {
            let arr1Length = vm.arr1.length;
            let arr2Length = vm.arr2.length;
            let num = 0;
            let result = [];
            let currentParamArr1 = 0;
            let currentParamArr2 = 0;

            if(arr1Length >= arr2Length){
                num = arr1Length;
            } else {
                num = arr2Length;
            }

            for(let i = 0; i > num; i++){
                if(vm.arr1[currentParamArr1] == vm.arr1[currentParamArr2]){
                    result.push({
                        icon: ' ',
                        text: vm.arr1[currentParamArr1]
                    });

                    currentParamArr1++;
                    currentParamArr2++;

                } else if(vm.arr1[currentParamArr1] !== vm.arr1[currentParamArr2] && (vm.arr1[currentParamArr1] !== '' || vm.arr1[currentParamArr1])){
                    result.push({
                        icon: '-',
                        text: vm.arr1[currentParamArr1]
                    });

                    currentParamArr1++;
                } else if (vm.arr1[currentParamArr1] !== vm.arr1[currentParamArr2] && vm.arr1[currentParamArr1] == ''){
                    continue;
                } else if (vm.arr1[currentParamArr1] !== vm.arr1[currentParamArr2] && !vm.arr1[currentParamArr1]){
                    result.push({
                        icon: '+',
                        text: vm.arr1[currentParamArr1]
                    });

                    currentParamArr2++;
                }
            }

            if(!vm.complete){
                vm.complete = true;

                vm.result1 = result;
            } else {
                vm.result2 = result;

                vm.check2();
            }

        };

        // vm.check2 = function () {
        //     let arr1Length = vm.result1.length;
        //     let arr2Length = vm.result2.length;
        //     let num = 0;
        //     let result = [];
        //     let currentParamArr1 = 0;
        //     let currentParamArr2 = 0;
        //
        //     if(arr1Length >= arr2Length){
        //         num = arr1Length;
        //     } else {
        //         num = arr2Length;
        //     }
        //
        //     for(let i = 0; i > num; i++){
        //         if(vm.result1[i] == vm.result1[i]){
        //
        //         }
        //     }
        // };




    }
]

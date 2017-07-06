export default [
    function () {

    let service = {};

        class CompareEntity {
            constructor () {
                this.text1 = null;
                this.text2 = null;
                this.arr1 = [];
                this.arr2 = [];
                this.result = [];
                this.pull = [];
            }
        }

        CompareEntity.prototype.splitTexts = function () {

            if(this.text1){
                this.arr1 = this.text1.split('\n');
            }

            if(this.text2){
                this.arr2 = this.text2.split('\n');
            }

            if(!this.text1 && !this.text2){

                this.result = [];

            } else {

                this.check();

            }

        };

        CompareEntity.prototype.check = function () {

            let self = this;
            let result = [];
            let localPull = [];
            let lock;

            self.arr1.forEach(function (item1, index1) {

                result.push(self.checkItem(item1, index1, self.arr2, self.arr1));

            });

            self.pull.forEach(function (item) {

                result.forEach(function(item2){

                    if(item2.text.indexOf(item) !== -1 && !lock) {
                        lock = true;
                    }

                });

                if(!lock){

                    localPull.push(item);

                }

                lock = false;

            });

            localPull.forEach(function (item) {
                result.push({
                    icon: '+',
                    text: item
                });
            });

            self.result = result;

        };

        CompareEntity.prototype.addToPull = function (item) {

            let exist;

            this.pull.forEach(function (item1) {

                if(item1 === item){
                    exist = true;
                }

            });

            if(!exist){

                this.pull.push(item);

            }

        };

        CompareEntity.prototype.checkItem = function (item1, index1, arr, arr1) {

            let self = this;
            let result;
            let cacheEqualLine;
            let lock;

            for(let i = 0; i < arr.length; i++){

                if(arr[i] === item1){

                    result = {
                        icon: ' ',
                        text: item1
                    };

                } else {

                    self.addToPull(arr[i]);

                }

                if(i === index1){

                    cacheEqualLine = arr[i];

                }

            }

            if(!result && index1 > arr.length - 1){

                result = {
                    icon: '-',
                    text: item1
                };

            } else if (!result && index1 <= arr.length - 1){

                arr1.forEach(function (item) {

                    if(item === cacheEqualLine){

                        lock = true;

                    }

                });

                if(!lock){

                    result = {
                        icon: '*',
                        text: item1 + '|' + cacheEqualLine
                    };

                } else {

                    result = {
                        icon: '-',
                        text: item1
                    };

                }

            }

            return result;
        };

        service.getCompareEntity = (function () {

            let compareEntity;

            function createInstance() {
                return new CompareEntity()
            }

            return function () {
                if (!compareEntity) compareEntity = createInstance();
                return compareEntity;
            };

        })();


        return service;
    }
]

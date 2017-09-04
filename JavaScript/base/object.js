function Car(quality, price) {
    
    this.quality = quality;
    this.price = price;
    
    this.run = function () {
        alert("i can run");
    }
    
    this.cost = function() {
        alert("costing");
    }
    
    this.prinit = function() {
        alert(quality+price);
    }
}

var car1 = new Car();
//car1.run();

var car2 = new Car("high", 23);

var arr = ["1","3","1","4","5","2","0"];
var arr2 = []; 
var arr3;
var i = 0;


arr3 = arr.join("#");

while(i < arr.length) {
    console.log(arr,arr[i]);
    arr2.push(arr[i]);
    console.log(arr2,arr2[i]);
    console.log(arr3,arr3[i]);
    i++;
}


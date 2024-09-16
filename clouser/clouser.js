

function number(){
    var a=24;
    function print(){
        console.log(a);
    }
    return print;
}
var operation = number();
console.log(operation);
//......
operation();

//===========================================================================================================

function grandParent() {
    var house = 'GreenHouse';
   
    function parent() {   
        var car = 'Tesla';
        house = 'YellowHouse';
        function child() {   
            var scooter = 'Vespa';
            console.log('I have:', house, car, scooter);
        }
        
        return child;
    }
   
    return parent;
}
var legacyGenX = grandParent();
console.log(typeof(legacyGenX)); //legacyGenX is of type function
var legacyGenY = legacyGenX();
console.log(typeof(legacyGenY)); //legacyGenY is of type function
legacyGenY(); // I have: YellowHouse Tesla Vespa

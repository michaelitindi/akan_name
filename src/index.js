import Car from './Car';
// import Person from './Person';
import Animal from './Animal';
import "./css/styles.css";

document.getElementById("btn").addEventListener("click", function(){
    const car = new Car("Peugeot", "3008", 2020);
    const rabit = new Animal("Bunny", 6, "Female");
    alert(rabit.getName());
    alert(car.getYear());

});


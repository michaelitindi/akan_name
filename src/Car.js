export default class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }  

    getYear(){
        return this.year;
    }

    setYear(year){
        this.year = year;
    }
}
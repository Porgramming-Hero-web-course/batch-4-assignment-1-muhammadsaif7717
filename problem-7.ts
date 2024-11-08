{
    /// Problem 7 ///

    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge(currentYear: number = new Date().getFullYear()): { carsAge: number; currentYear: number } {
            const carsAge = currentYear - this.year
            return { carsAge, currentYear };
        }

    }


    // const car = new Car("Honda", "Civic", 2018);
    // const result = car.getCarAge();
    // console.log(result.carsAge, "(assuming current year is", result.currentYear, ")");
}
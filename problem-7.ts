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

        getCarAge(currentYear: number = new Date().getFullYear()): string {
            const carsAge = currentYear - this.year
            return `${carsAge} (assuming current year is ${currentYear})`;
        }
    }

    // Sample Input 1:
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());

    // Sample Output 1:
    // 6 (assuming current year is 2024)

    ///
}
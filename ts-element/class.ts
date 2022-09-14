interface Employee{
    name: string;
    salary: number;
    bonus: number;
}

class EmplImpl implements Employee{
    private allocatedBonuses?: number;
    public name: string;
    public salary: number;
    constructor(name: string, salary: number,allocatedBonuses?:number) {this.name=name;this.salary=salary;};
    set bonus(v:number) { this.allocatedBonuses = v; };    
    get bonus(): number { return this.allocatedBonuses || 0; };
}

const empl = new EmplImpl('sirius',20000,200);
console.log(empl)
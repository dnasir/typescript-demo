export class Todo {
    public name: string;
    public done: boolean = false;
    
    constructor(name:string) {
        this.name = name;
    }
}
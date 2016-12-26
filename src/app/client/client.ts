export class Client {
    private id: number;
    private name: string;
    private isAuthed: boolean;

    constructor() {
        this.isAuthed = false;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setIsAuthed(isAuthed) {
        this.isAuthed = isAuthed;
    }

    getIsAuthed() {
        return this.isAuthed;
    }
}
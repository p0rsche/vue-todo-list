export default class TodoModel {
    id: string;
    text: string;
    isCompleted: boolean;
    createdAt: Date;

    constructor() {
        this.id = '';
        this.text = '';
        this.isCompleted = false;
        this.createdAt = new Date();
    }
}
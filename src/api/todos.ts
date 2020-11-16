import uuid from '@/helpers/uuid';
import TodoModel from "@/models/todo.model";

const _todos: TodoModel[] = [
    { id: uuid(), text: 'First todo', isCompleted: false, createdAt: new Date() },
    { id: uuid(), text: 'Second todo', isCompleted: false, createdAt: new Date() },
    { id: uuid(), text: 'Third todo', isCompleted: true, createdAt: new Date() },
]

export default function fetchAllTodos(): Promise<TodoModel[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(_todos);
        }, 1000);
    });
}
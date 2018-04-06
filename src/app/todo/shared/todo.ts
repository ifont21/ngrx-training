export class Todo {
    description: string;
    status: string;
    updatedAt: string;
    createdAt: string;
    constructor(description, status, updatedAt, createdAt) {
        this.description = description;
        this.status = status;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }
}

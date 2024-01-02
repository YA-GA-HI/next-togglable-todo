export interface Todo {
    id: string;
    title: string;
    createdAt: Date;
    completedAt: Date | undefined | null;
}

import prisma from "../../config/database.js";
const todoResolver = {
    Query: {
        todos: async () => {
            return await prisma.todo_tbl.findMany({ orderBy: { Id: "desc" } });
        },
        getTodo: async (_, { Id }) => {
            return await prisma.todo_tbl.findUnique({
                where: {
                    Id: Id
                }
            });
        }
    },
    Mutation: {
        createTodo: async (_, { todo }) => {
            const newTodo = await prisma.todo_tbl.create({
                data: {
                    todo: todo,
                    completed: false,
                },
            });
            return newTodo;
        },
        //* Updating Todo
        updateTodo: async (_, { Id, todo }) => {
            await prisma.todo_tbl.update({
                where: {
                    Id: Id
                },
                data: {
                    todo: todo
                }
            });
            return { message: "Updated Successfully" };
        },
        //* Updating Todo 2
        toggleCompleteTodo: async (_, { Id }) => {
            const findTodo = await prisma.todo_tbl.findUnique({ where: { Id: Id } });
            const updateCompletedTodoField = !findTodo.completed;
            await prisma.todo_tbl.update({
                where: { Id: Id },
                data: { completed: updateCompletedTodoField }
            });
            return {
                message: 'Updated Completed Field'
            };
        },
        //* Deleting Todo
        deleteTodo: async (_, { Id }) => {
            await prisma.todo_tbl.delete({
                where: {
                    Id: Id
                }
            });
            return {
                message: "Deleted Todo Successfully"
            };
        }
    },
};
export default todoResolver;

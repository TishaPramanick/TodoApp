const todoSchema = `#graphql

scalar Date

type ResponseType{
    message:String
}

type Todo{
    Id:Int!
    todo:String
    completed:Boolean
    created_at:Date
}

type Query{
    todos:[Todo]
    getTodo(Id:Int):Todo
}

type Mutation{
    createTodo(todo:String):Todo
    updateTodo(Id:Int , todo:String):ResponseType
    toggleCompleteTodo(Id:Int):ResponseType
    deleteTodo(Id:Int):ResponseType
   
}
`;
export default todoSchema;

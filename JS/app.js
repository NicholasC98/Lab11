var todoList =  [
    {todo: "clone repo for starter code", status:"completed"}, 
    {todo: "link stylesheet and JavaScript", status:"completed"},
    {todo: "check if todoList is complete", status:"started"},
    {todo: "push code to own GitHub repo", status:"started"}
];

let completedTodos = [];

for (i = 0; i < todoList.length; i++) {
    if(todoList[i].status === "completed") {
        completedTodos.push(todoList[i])
    }
}
  
for (i = 0; i < completedTodos.length; i++) {
    console.log(completedTodos[todo])
}




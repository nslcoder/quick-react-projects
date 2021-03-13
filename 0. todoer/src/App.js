import React, {useState} from "react";

function Todo({ index, todo, completeTodo, deleteTodo }) {
    return (
        <div className="todo-block">
            <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
                {todo.text}
            </div>
            <div className="todo-btn">
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
        </div>
    )
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Add a todo" maxlength="50"/>
        </form>
    )
}

function TodayDate() {
    const todayDate = new Date();
    
    const curDate = todayDate.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });

    return (
        <small className="cur-date">{curDate}</small>
    )
}

function App() {
    const [todos, setTodos] = useState(
        [
            { text: "Buy a book", isCompleted: false },
            { text: "Email Ranjita for reconfirmation", isCompleted: false },
            { text: "Wire money to the brother", isCompleted: false }
        ]
        );
        
    const addTodo = (text) => {
        const allTodos = [...todos, { text }];
        setTodos(allTodos);
    }
        
    const completeTodo = (index) => {
        const allTodos = [...todos];
        allTodos[index].isCompleted = true;
        setTodos(allTodos);
    }

    const deleteTodo = (index) => {
        const allTodos = [...todos];
        allTodos.splice(index, 1);
        setTodos(allTodos);
    }

    return (
        <div className="todo-app">
            <TodayDate />
            <h1>Todoer</h1>
            <p>Made with dedication by <a href="https://nslcoder.github.io/" target="_blank" rel="noreferrer">nslcoder</a> (Lokesh Gurung) for learning.</p>
            <TodoForm addTodo={addTodo} />
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
                ))}
            </div>
        </div>
    )
}

export default App;
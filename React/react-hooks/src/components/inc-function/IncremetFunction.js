import React, {useState, useEffect} from 'react'


export function IncrementFunction() {
    const [count, setCountVal] = useState(0);
    const [todo, setToDo] = useState(null);

    const fetchToDo = async (count) => {
        const response = await fetch(`http://jsonplaceholder.typicode.com/todos/${count}`);
        const data = await response.json();

        setToDo(data);
    }

    useEffect(() => {
        fetchToDo(count)
    }, [count])

    return (
        <div>

            <h1>{count}</h1>

                {!!todo && (
                    <div>
                        <h1>{todo.title}</h1>
                        <h1>{todo.completed ? 'TaskIsDone' : 'Task in not done yet!'}</h1>
                    </div>
                )}

            <button onClick={() => {
                setCountVal(prevCount => prevCount + 1)
            }}>Increment
            </button>
        </div>
    )
}
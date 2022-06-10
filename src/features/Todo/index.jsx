import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList= [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ];
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all')
    const handleTodoClick= (todo, idx) => {
        //clone current array to the new one
        const newTodoList = [...todoList];

        //toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        // newTodoList[idx] =newTodo;
        //update todo todoList
        setTodoList(newTodoList);
    }
    const handelShowAllClick =() => {
        setFilteredStatus('all')
    }
    const handelShowCompletedClick =() => {
        setFilteredStatus('completed')
    }

    const handelShowNewClick=() => {
        setFilteredStatus('new')
    }
    const renderedTodoList =todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status );
    


    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList ={renderedTodoList} onTodoClick={handleTodoClick}/>
            <div>
                <button onClick={handelShowAllClick}>Show All</button>
                <button onClick={handelShowCompletedClick}>Show Completed</button>
                <button onClick={handelShowNewClick}>Show New</button>

            </div>
        </div>
    );
}

export default TodoFeature;
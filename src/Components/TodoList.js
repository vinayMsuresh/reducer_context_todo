import React,{useCallback, useContext, useState} from 'react';
import { Container,Table,Modal, Button } from 'react-bootstrap';
import AddTodo from './AddTodo';
import { todoContext } from '../helpers/todoContext';
import UpdateTodo from './UpdateTodo';
export default function TodoList() {
    let todosContext = useContext(todoContext);
    let [isAdd, setAdd] = useState(false);
    let [isEdit, setEdit] = useState(false);
    let [item, setItem] = useState({});
    const addTodo = useCallback((todo) =>{
        todo.id = Math.floor(( Math.random() * 100 ) + 1 );
        todosContext.dispatch({type:'add',payload:todo});
        setAdd(false);
    },[todosContext]);

    const editTodo = useCallback((itm) =>{
        setItem(itm);
        setEdit(true);
    },[]);

    const updateTodo = useCallback((todo) =>{
        todosContext.dispatch({type:'update',payload:todo});
        setEdit(false);
    },[todosContext])

    const deleteTodo = useCallback((id) =>{
        todosContext.dispatch({type:'delete', payload:id})
    },[todosContext]);
    
    return ( 
        <Container fluid>
            <h2 className='m-2 bg-dark text-white p-1'>Todo List</h2>
            <Button variant='success' className='m-3' onClick={()=>setAdd(true)}>Add todo</Button>
            <Container>
                {todosContext.state.todos.length !== 0 &&
                    <Table striped bordered hover variant='dark'>
                        <thead>
                            <tr>
                            <th>Sl.no</th>
                            <th>Todo Title</th>
                            <th>Todo Description</th>
                            <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>{todosContext.state.todos.map((item, index)=>{
                            return(                
                                <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td><Button variant='info' onClick={()=>editTodo(item)}>Edit</Button></td>
                                <td><Button variant='danger' onClick={()=>deleteTodo(item.id)}>Delete</Button></td>
                                </tr>
                            )
                        })}
                        
                        </tbody>
                    </Table>
                }
            </Container>
            <Modal show={isAdd} onHide={()=>setAdd(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Todo</Modal.Title>
                    </Modal.Header>
                <Modal.Body><AddTodo onClick={addTodo} /></Modal.Body>      
            </Modal>

            <Modal show={isEdit} onHide={()=>setEdit(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Todo</Modal.Title>
                    </Modal.Header>
                <Modal.Body><UpdateTodo value={item} onClick={updateTodo} /></Modal.Body>      
            </Modal>
        </Container>
    );
}

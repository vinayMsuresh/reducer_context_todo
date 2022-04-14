import React,{useState, useEffect} from 'react';
import { Container, Form,Row,Col,Button } from 'react-bootstrap';

export default function UpdateTodo({value, onClick}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    useEffect(()=>{
        setTitle(value.title);
        setDescription(value.description);
    },[value])
    return(
        <Container>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Todo
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" defaultValue={value?.title} onChange={(e)=>setTitle(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Todo
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" defaultValue={value?.description} onChange={(e)=>setDescription(e.target.value)} />
                    </Col>
                </Form.Group>
                <Button variant='success' onClick={()=>onClick({title:title, description:description})}>Update todo</Button>
            </Form>
        </Container>
    );
}

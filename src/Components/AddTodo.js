import React,{useState} from 'react';
import { Container, Form,Row,Col,Button } from 'react-bootstrap';

export default function AddTodo({onClick}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return(
        <Container>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Todo
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Todo
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)} />
                    </Col>
                </Form.Group>
                <Button variant='primary' onClick={()=>onClick({title:title, description:description})}>Add todo</Button>
            </Form>
        </Container>
    );
}

import {useState, useEffect} from "react";
import "../../App.css";
import {db} from "../../firebase-config";
import {
    collection,
    addDoc
} from "firebase/firestore";

// BOOTSTRAP IMPORTING
import {Button, Container, Form, Card} from 'react-bootstrap';

function InputBook() {
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newStock, setNewStock] = useState(0);

    const booksCollectionRef = collection(db, "books");

    const createBook = async () => {
        await addDoc(booksCollectionRef, {
            title: newTitle,
            author: newAuthor,
            stock: Number(newStock)
        });
        alert("Data Berhasil Ditambah!");
    };

    return (
        <Container className="px-5">
            <Card  className="p-3">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Add Title" type="text"
                            onChange={
                                (event) => {
                                    setNewTitle(event.target.value);
                                }
                        }></Form.Control>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control placeholder="Add Author Name" type="text"
                            onChange={
                                (event) => {
                                    setNewAuthor(event.target.value);
                                }
                        }></Form.Control>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="number"
                            onChange={
                                (event) => {
                                    setNewStock(event.target.value);
                                }
                        }></Form.Control>
                    </Form.Group>
                </Form>
                <Button onClick={createBook}>Add New Book</Button>
            </Card>
        </Container>
    );
}

export default InputBook;

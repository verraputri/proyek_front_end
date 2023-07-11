import {useState, useEffect} from "react";
import "../../App.css";
import {db} from "../../firebase-config";
import {
    collection,
    addDoc
} from "firebase/firestore";

// BOOTSTRAP IMPORTING
import {Button, Container, Form, Card} from 'react-bootstrap';

function InputVisitor() {
    const [newName, setNewName] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newContact, setNewContact] = useState("");
    const [newBorrowedBooks, setNewBorrowedBooks] = useState("");

    const visitorsCollectionRef = collection(db, "visitors");

    const createVisitor = async () => {
        await addDoc(visitorsCollectionRef, {
            name: newName,
            address: newAddress,
            contact: newContact,
            borrowedBooks: newBorrowedBooks
        });
        alert("Data Berhasil Ditambah!");
    };

    return (
        <Container className="px-5">
            <Card  className="p-3">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Add Name" type="text"
                            onChange={
                                (event) => {
                                    setNewName(event.target.value);
                                }
                        }></Form.Control>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Add Address" type="text"
                            onChange={
                                (event) => {
                                    setNewAddress(event.target.value);
                                }
                        }></Form.Control>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="text" placeholder="Add Contact"
                            onChange={
                                (event) => {
                                    setNewContact(event.target.value);
                                }
                        }></Form.Control>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Borrowed Books</Form.Label>
                        <Form.Control type="text" placeholder="Add Title of borrowed books"
                            onChange={
                                (event) => {
                                    setNewBorrowedBooks(event.target.value);
                                }
                        }></Form.Control>
                    </Form.Group>
                </Form>
                <Button onClick={createVisitor}>Add New Visitor</Button>
            </Card>
        </Container>
    );
}

export default InputVisitor;

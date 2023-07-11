import {useState, useEffect} from "react";
import "../../App.css";
import {db} from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore";

// BOOTSTRAP IMPORTING
import {Table, Button, Container} from 'react-bootstrap';

function Book() {
    const [books, setBooks] = useState([]);
    const booksCollectionRef = collection(db, "books");

    const deleteBook = async (id) => {
        const bookDoc = doc(db, "books", id);
        await deleteDoc(bookDoc);
        window.location.reload();
    };

    useEffect(() => {
        const getBooks = async () => {
            const data = await getDocs(booksCollectionRef);
            setBooks(data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })));
        };

        getBooks();
    }, []);

    return (
        <Container>
            <Table id='tb-reg' striped bordered hover size="sm">
                <thead className='text-center align-middle'>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                books.map((book, number) => {
                    return (
                        <tr key={number}>
                            <td className="text-center">{number+1}</td>
                            <td className="text-center">{book.title}</td>
                            <td className="text-center">{book.author}</td>
                            <td className="text-center">{book.stock}</td>
                            <td className="text-center">
                                <>
                                <Button onClick={
                                    () => {
                                        deleteBook(book.id);
                                    }
                                }>
                                Delete
                                </Button>
                                </>
                            </td>
                        </tr>
                    );
                })
                }
                </tbody>
            </Table>
            
        </Container>
    );
}

export default Book;

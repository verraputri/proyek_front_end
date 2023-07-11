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

function Visitor() {
    const [visitors, setVisitors] = useState([]);
    const visitorsCollectionRef = collection(db, "visitors");

    const deleteVisitor = async (id) => {
        const visitorDoc = doc(db, "visitors", id);
        await deleteDoc(visitorDoc);
        window.location.reload();
    };

    useEffect(() => {
        const getVisitors = async () => {
            const data = await getDocs(visitorsCollectionRef);
            setVisitors(data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })));
        };

        getVisitors();
    }, []);

    return (
        <Container>
            <Table id='tb-reg' striped bordered hover size="sm">
                <thead className='text-center align-middle'>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Borrowed Books</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                visitors.map((visitor, number) => {
                    return (
                        <tr key={number}>
                            <td className="text-center">{number+1}</td>
                            <td className="text-center">{visitor.name}</td>
                            <td className="text-center">{visitor.address}</td>
                            <td className="text-center">{visitor.contact}</td>
                            <td className="text-center">{visitor.borrowedBooks}</td>
                            <td className="text-center">
                                <>
                                <Button onClick={
                                    () => {
                                        deleteVisitor(visitor.id);
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

export default Visitor;

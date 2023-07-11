import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Book,InputBook,Visitor,InputVisitor} from './components'
import './App.css';
import {Container,Navbar,NavDropdown,Nav} from 'react-bootstrap';

function App() {
    return (
        <Router>
            <div>
                <Navbar expand="lg" className="bg-primary mb-5">
                    <Container>
                    <Navbar.Brand className="text-white" href="#home">Admin-Library</Navbar.Brand>
                    <Navbar.Toggle className="text-white" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link className="text-white" href="/book">Book</Nav.Link>
                        <Nav.Link className="text-white" href="/inputbook">Add Book</Nav.Link>
                        <Nav.Link className="text-white" href="/visitor">Visitor</Nav.Link>
                        <Nav.Link className="text-white" href="/inputvisitor">Add Visitor</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route exact path="/inputbook"
                        element={<InputBook/>}/>
                    <Route path="/book"
                        element={<Book/>}/>
                    <Route path="/inputbook"
                        element={<InputBook/>}/>
                    <Route path="/visitor"
                        element={<Visitor/>}/>
                    <Route path="/inputvisitor"
                        element={<InputVisitor/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

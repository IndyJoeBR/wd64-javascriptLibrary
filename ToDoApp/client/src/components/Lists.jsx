import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';


const ListsComponent = (props) => {

  // When the component FIRST loads, get the owners list(s)
  const [ userLists, setUserLists ] = useState( [] );

  // Prevents the list entry modal from being open on mount
  const [modalOpen, setModalOpen ] = useState(false);

  const [newListTitle, setNewListTitle] = useState('');

  const modifyListTitle = (event) => setNewListTitle(event.target.value);

  const submitNewList = (event) => {
    event.preventDefault();
    fetch("htt://localhost:8080/list/new"),{
      method: "POST",
      headers: {
        Authorization: props.token,
        "Content-Type": "application/json"
      },
      body: { title: newListTitle, }
    },
  })
    .then(response => response.json())
    .then(json => {
      setUserLists([...userLists, json.List])
    })
    .catch(error => console.log(error))
  };





  const toggleModal = () => setModalOpen(!modalOpen);   // looks at current state of 'modalOpen' and reverses it


  useEffect( () => {
    fetch('http://localhost:8080/List', {
      //method: "GET",                      // default is GET, unneeded
      headers: { "Authorization": props.token },
    })
    .then(response => response.json())      // jsonify the response
    .then(body => {                         // send the jsonified response to 'userLists'
      setUserLists(body.results);
    })
    .catch(error => console.log(error))
  }, [] );                                  // [] will only update on mount


  return (
    <div id="listsView">

      <div id="ListViewHeader">
        <h2>Your Lists</h2>
        <Button color="success" onClick={toggleModal}>
          New List
        </Button>

        <Modal isOpen={modalOpen} toggle={toggleModal} >
          <ModalHeader>Create New TODO List</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label htmlFor="newTitle">
                  Title:
                </Label>
                <Input type="text" id="newTitle" onChange={modifyListTitle} value={newListTitle} />
              </FormGroup>
              <Button color="warning" onClick={toggleModal}>Cancel</Button>
            </Form>
          </ModalBody>
        </Modal>


      </div>



      { 
        userLists.length > 0
          ? userLists.map(item => {
              return (
                <Card>
                  <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>{item.description}</CardText>
                    <Button>View List Items</Button>
                  </CardBody>
                </Card>
              )
          })
          : ( <h2>You have no Lists</h2>)
      }

    


    </div>
    
  );


};

export default ListsComponent;
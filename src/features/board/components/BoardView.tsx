import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Modal } from 'react-bootstrap';
import { Board } from '../reducer/boardSlice';


const BoardView = ({match, history}: any) => {
  const [board, setBoard] = useState<Board>({
    title: '',
    content: ''
  });
  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  useEffect(() => {
    console.log(match);
    // getBoard(match.params.id);
  }, []);
 
//   const getBoard = async (id: string) => {
//     const res = await axios.get(`/api/board/${id}`);
//     console.log(res.data);
//     setBoard(res.data);
//   }
 
//   const handleDelete = async () => {
//     const res = await axios.delete(`/api/board?id=${match.params.id}`);
//     setShow(false);
//     history.goBack();
//   }
 
  return (
    <>
      <Row className="justify-content-end">
        <Button variant="info" onClick={() => history.push(`/board-edit/${match.params.id}`)}>수정</Button>
        <Button variant="danger" onClick={() => handleShow()}>삭제</Button>
      </Row>
      <Card className="p-3 my-3">
        <Card.Title className="pb-2" style={{borderBottom: '1px solid #dddddd'}}>{board?.title}</Card.Title>
        <Card.Text>
          {board?.content}
        </Card.Text>
      </Card>
      {/* <commentlist board_id="{match.params.id}"></commentlist> */}
      <Row className="justify-content-center">
        <Button variant="primary" onClick={() => history.goBack()}>돌아가기</Button>
      </Row>
 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>삭제</Modal.Title>
        </Modal.Header>
        <Modal.Body>삭제하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}> 
          {/* onClick={handleDelete} */}
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default BoardView;
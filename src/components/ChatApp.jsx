import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import BgImage from '../assets/left-bg-image.png';
import { IoIosArrowBack } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaLock, FaPenToSquare, FaWrench } from 'react-icons/fa6';
import { TiAnchorOutline } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import { MdCameraAlt } from 'react-icons/md';
import { BiMessageRounded } from 'react-icons/bi';
import { FaShareAlt } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import chatImage from '../assets/left-bg-image.png';
import chatImage1 from '../assets/photo.jpg';
import { addMessage } from '../redux/actions';
import { useState } from 'react';

const ChatApp = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      dispatch(addMessage(userMessage));

      try {
        const response = await axios.fetch(
          'https://openrouter.ai/api/v1/chat/completions',
          {
            method: 'POST',
            model: 'gryphe/mythomist-7b:free',
            message: [{ role: 'user', content: "How's Life?" }],
          },
          {
            headers: {
              Authorization: `Bearer ${
                sk -
                or -
                v1 -
                a11ee99c1326d80b59f22aad08f9d4856cd5dc0b361e4865d57c45454bcf4d16
              }`,
              'Content-Type': 'application/json',
            },
          }
        );
        const aiMessage = { sender: 'ai', text: response.data.message };
        dispatch(addMessage(aiMessage));
        setInput('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <>
      <Container fluid className="chat-header bg-dark">
        <Row>
          <div className="d-flex flex-wrap bg-dark">
            <Col>
              <div className="left-header">
                <div className="upper-sec bg-dark d-flex flex-wrap justify-content-between align-items-center mt-2 md:flex-column">
                  <div className="d-flex flex-wrap gap-2 fs-6 ms-3 text-light mt-2">
                    <IoIosArrowBack className="mt-1 fw-bold fs-5" />
                    <p className="fw-bold fs-6">
                      Chats img : <span className="text-info">3</span>{' '}
                    </p>
                    <p className="fw-bold fs-6">msg : </p>
                  </div>
                  <div className="upper-icon d-flex flex-wrap gap-2 me-3 text-light">
                    <BsThreeDotsVertical className="fw-bold fs-6" />
                    <FaWrench className="fw-bold fs-6" />
                    <TiAnchorOutline className="fw-bold fs-6" />
                    <FaPenToSquare className="fw-bold fs-6" />
                    <ImCross className="fw-bold fs-6" />
                  </div>
                </div>
                <div className="">
                  <Card
                    style={{ width: '26rem', border: 'none' }}
                    className="m-2"
                  >
                    <Card.Img variant="top" src={BgImage} />
                    <Card.Body
                      className="/* The `card-body` class is being used to style the body
                  content of the `Card` component from react-bootstrap. It is
                  adding styling such as padding, background color, and border
                  to the body section of the card. This class helps in
                  organizing and presenting the content within the card in a
                  visually appealing way. */
                  card-body"
                    >
                      <Card.Title className="">
                        <span className="card-title fw-bold ">
                          Jessica Anderson
                        </span>
                        <br />
                        <span className="card-title1 text-white mt-2">
                          @Jessica Anderson
                        </span>
                      </Card.Title>
                      <Card.Text className="card-text d-flex justify-content-between align-items-center bg-dark border-4 text-light">
                        <div className="d-flex gap-4 ms-4 p-2">
                          <a>
                            <MdCameraAlt /> 0
                          </a>
                          <a>
                            <BiMessageRounded /> 6
                          </a>
                        </div>
                        <div className="me-3">
                          <FaLock className="ms-2 text-secondary " />
                          <span className="ms-2">Make Character Public</span>
                          <FaShareAlt className="ms-2" />
                        </div>
                      </Card.Text>
                      <div>
                        <Row className="bottom-box p-4 text-white">
                          <Col>
                            <div className="bottom-sec">
                              <h4 className="fw-bold">Who I Am</h4>
                              <div className="mt-3">
                                <h5 className="fw-bold">Personality</h5>
                                <h6>Caregiver</h6>
                              </div>
                              <div className="mt-3">
                                <h5 className="fw-bold">Work</h5>
                                <h6>Yoga Instructor</h6>
                              </div>
                              <div className="mt-3">
                                <h5 className="fw-bold">Hobbies</h5>
                                <h6>Anime Fan</h6>
                              </div>
                              <div className="mt-3">
                                <h5 className="fw-bold">Relationship</h5>
                                <h6>Friend</h6>
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div className="bottom-sec1 d-flex flex-column justify-content-end align-content-end">
                              <div className=" d-flex gap-4 me-2">
                                <h4 className="fw-bold">About Me</h4>
                                <FaPenToSquare className="mt-2" />
                              </div>
                              <div className="bottom-text">
                                <p className="text-sm">
                                  21-year-old anime fanatic and yoga instructor.
                                  I binge-watch anime! Looking for someone to
                                  join me in downward dog and anime marathons.
                                  Fun fact: I can recite the entire script of my
                                  favorite anime movie from memory. Let's chat!
                                  👷‍♀️💕🐱‍💻
                                </p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
            <Col className="msg-box position-relative ">
              <div className="chat-window">
                {messages.map((message, index) => (
                  <div key={index} className={`chat-message ${message.sender}`}>
                    <label className="chat-label text-white">
                      {message.sender === 'user' ? 'Jessica' : 'Cutie'}
                    </label>
                    <img
                      src={message.sender === 'user' ? chatImage : chatImage1}
                      alt=""
                      className="chat-img"
                    />
                    <p className="chat-text text-white">{message.text}</p>
                  </div>
                ))}
              </div>
              <Form
                className="msg-form position-absolute"
                onSubmit={handleSend}
              >
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label className="form-label text-white">
                      Text
                    </Form.Label>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      className="toggle-switch"
                    />
                    <div className="d-flex">
                      <Form.Control
                        required
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter your message here...."
                        className="msg-input"
                      />
                      <Button
                        type="submit"
                        variant="outline-secondary"
                        id="button-addon2"
                        className="send-btn"
                      >
                        <IoIosSend className="text-white fs-4" />
                      </Button>
                    </div>
                  </Form.Group>
                </Row>
              </Form>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ChatApp;

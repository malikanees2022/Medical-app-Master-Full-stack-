import { useState } from "react";
import axios from "axios";
const Home = () => {
  const [questions, SetQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [question_input, setQuestionInput] = useState("");
  const [trackIndex, setTrackIndex] = useState(0);
  const generate_answer = async () => {
    try {
      if (question_input.length === 0) {
        SetQuestions([...questions, question_input]);
        setAnswers([
          ...answers,
          [
            "It seems like your query is empty please ask a proper query so i can answer you?",
          ],
        ]);
      } else {
        setSpinner(true);
        let sum = questions.length - 1;
        setTrackIndex(sum + 1);
        SetQuestions([...questions, question_input]);
        const response = await axios.post("http://52.165.89.34:8000/", {
          question: question_input,
        });
        const paragraphs = response.data.Output.split("\n");
        setAnswers([...answers, paragraphs]);
        setSpinner(false);
      }
    } catch (err) {
      setAnswers([
        ...answers,
        ["Sorry could'nt answer the question due to some errors"],
      ]);
      setSpinner(false);
    }
  };
  return (
    <div className="tyn-content tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base">
      <div className="tyn-aside tyn-aside-base">
        <div className="tyn-aside-head">
          <div className="tyn-aside-head-text">
            <h3 className="tyn-aside-title tyn-title">Chat Archive</h3>
            <span className="tyn-subtext">200+ Conversations </span>
          </div>
          <div className="tyn-aside-head-tools">
            <ul className="tyn-list-inline gap gap-3">
              <li>
                <a className="btn btn-icon btn-light btn-md btn-pill" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-lg"
                    viewBox={"0 0 16 16"}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tyn-aside-body" data-simplebar="">
          <ul className="tyn-aside-list">
            {questions.map((question, i) => {
              return (
                <li className="tyn-aside-item js-toggle-main" key={i}>
                  <div className="tyn-media-group">
                    <div className="tyn-media tyn-size-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chat-right-text-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"></path>
                      </svg>
                    </div>
                    <div className="tyn-media-col">
                      <div className="content">{question}</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="tyn-aside-foot">
          <div className="w-100">
            <ul className="row gx-3">
              <li className="col-6">
                <a
                  href="/"
                  className="btn btn-light tyn-size-lg w-100 flex-column py-2 pt-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-up"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"></path>
                  </svg>
                  <span className="small text-nowrap mt-n1">Become Pro</span>
                </a>
              </li>
              <li className="col-6">
                <button className="btn btn-light tyn-size-lg w-100 flex-column py-2 pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
                  </svg>
                  <span className="small text-nowrap mt-n1">Clear Archive</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tyn-main tyn-main-boxed tyn-main-boxed-lg" id="tynMain">
        <ul className="tyn-list-inline d-md-none translate-middle-x position-absolute start-50 z-1">
          <li>
            <button className="btn btn-icon btn-pill btn-white js-toggle-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
              </svg>
            </button>
          </li>
        </ul>
        <div
          className="tyn-chat-body m-4 rounded-3 js-scroll-to-end"
          id="tynBotBody"
        >
          <div className="tyn-qa" id="tynBotReply">
            {questions.map((question, i) => {
              return (
                <div key={i}>
                  <div className="tyn-qa-item">
                    <div className="tyn-qa-avatar">
                      <div className="tyn-media tyn-size-md">
                        <img src="images/avatar/1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="tyn-qa-message tyn-text-block">
                      {" "}
                      {question}{" "}
                    </div>
                  </div>
                  <div className="tyn-qa-item">
                    <div className="tyn-qa-avatar">
                      <div className="tyn-qa-avatar-wrap">
                        <div className="tyn-media tyn-size-md">
                          <img src="images/avatar/bot-1.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tyn-qa-message tyn-text-block">
                      {spinner && i === trackIndex && (
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      )}
                      {answers.length > 0 &&
                        answers[i] &&
                        answers[i].map((answer, index) => {
                          return <p key={index}>{answer}</p>;
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="tyn-chat-form border-0 ps-3 pe-4 py-3 bg-white mb-4 mx-4 rounded-3">
          <div className="tyn-chat-form-enter">
            <input
              className="tyn-chat-form-input"
              id="tynBotInput"
              placeholder="Ask a Question?"
              contentEditable=""
              onChange={(e) => {
                setQuestionInput(e.target.value);
              }}
            ></input>
            <ul className="tyn-list-inline me-n2 my-1">
              <li>
                <button
                  id="tynBotSend"
                  className="btn btn-icon btn-white btn-md btn-pill"
                  onClick={generate_answer}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

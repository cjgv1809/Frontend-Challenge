import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./ShowModalSection.css";
import Fade from "react-reveal/Fade";

function ShowModalSection() {
  const [image, setImage] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const API_KEY_PEXELS = process.env.REACT_APP_API_KEY_PEXELS;

  useEffect(() => {
    function fetchImage() {
      fetch("https://api.pexels.com/v1/search?query=Christianism", {
        headers: {
          Authorization: API_KEY_PEXELS,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          let randomPhoto = Math.floor(Math.random() * data.photos.length - 1);
          if (data.photos[randomPhoto] === undefined) {
            randomPhoto = 1;
          }
          setImage(data.photos[randomPhoto].src.original);
        });
    }

    fetchImage();
  }, []);

  return (
    <main
      className={`${
        openModal ? "image__container--disabled" : "image__container"
      }`}
    >
      <Fade top>
        <aside className="image__media">
          {openModal && (
            <div className="image__modal">
              <ReactPlayer
                url="https://youtu.be/iHndcVe_-2w?list=TLGG8HhrHplOnwgyMTA1MjAyMQ"
                controls
                playing
                width={"100%"}
              />
              <div
                className="image__closeIcon"
                onClick={() => setOpenModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                </svg>
              </div>
            </div>
          )}
          <figure>
            <img
              src={image}
              alt="description"
              onClick={() => setOpenModal(true)}
            />
            <figcaption>Click on the image to open the video</figcaption>
          </figure>
        </aside>
      </Fade>

      <Fade top>
        <section className="image__texts">
          <h1>
            Give the world the answer they need, become a Supernatural partner
            today
          </h1>
          <p>
            Thousands of people need you to bring revival to communities,
            nations, and governments around the world through God’s supernatural
            power. Today, you have the opportunity to partner with us and take
            the message of Jesus to people who have never had an encounter with
            God. Give the world the answer they need, become a Supernatural
            Partner today by sending God
          </p>
        </section>
      </Fade>
    </main>
  );
}

export default ShowModalSection;

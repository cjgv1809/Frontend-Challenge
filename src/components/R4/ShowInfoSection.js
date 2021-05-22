import "./ShowInfoSection.css";
import { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";

function ShowInfoSection() {
  const [infos, setInfos] = useState([]);
  const API_KEY_GOOGLE_NEWS = process.env.REACT_APP_API_KEY_GOOGLE_NEWS;

  useEffect(() => {
    function fetchAPInews() {
      fetch(
        `https://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=${API_KEY_GOOGLE_NEWS}`
      )
        .then((response) => response.json())
        .then((data) => {
          setInfos(data);
          console.log("data", data);
        });
    }

    fetchAPInews();
  }, []);

  return (
    <div className="tableInfo__container">
      <Zoom>
        <table className="tableInfo">
          <caption>Google News using its API</caption>
          <thead className="tableInfo__head">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody className="tableInfo__body">
            {infos?.articles?.map((info, index) => (
              <tr key={index}>
                <td></td>
                <td data-title="Title">{info.title}</td>
                <td data-title="Description">{info.description}</td>
                <td data-title="URL">
                  <a href={info.url} target="_blank" rel="noreferrer">
                    {info.url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Zoom>
    </div>
  );
}

export default ShowInfoSection;

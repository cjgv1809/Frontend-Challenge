import "./ShowTableSection.css";
import Slide from "react-reveal/Slide";

function ShowTableSection() {
  return (
    <div className="table__container">
      <Slide top>
        <table className="table">
          <caption>EU members countries, their capitals and currencies</caption>
          <thead className="table__head">
            <tr>
              <th>Country</th>
              <th>Capital</th>
              <th>Currency</th>
              <th>Country</th>
              <th>Capital</th>
              <th>Currency</th>
              <th>Country</th>
              <th>Capital</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr>
              <td data-title="Country">Austria</td>
              <td data-title="Capital">Vienna</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Belgium</td>
              <td data-title="Capital">Brussels</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Bulgaria</td>
              <td data-title="Capital">Sofia</td>
              <td data-title="Currency">Euro</td>
            </tr>
            <tr>
              <td data-title="Country">Croatia</td>
              <td data-title="Capital">Zagreb</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Cyprus</td>
              <td data-title="Capital">Nicosia</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Czech Republic</td>
              <td data-title="Capital">Prague</td>
              <td data-title="Currency">Euro</td>
            </tr>
            <tr>
              <td data-title="Country">Denmark</td>
              <td data-title="Capital">Copenhagen</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Estonia</td>
              <td data-title="Capital">Tallinn</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Finland</td>
              <td data-title="Capital">Helsinki</td>
              <td data-title="Currency">Euro</td>
            </tr>
            <tr>
              <td data-title="Country">France</td>
              <td data-title="Capital">Paris</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Germany</td>
              <td data-title="Capital">Berlin</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Greece</td>
              <td data-title="Capital">Athens</td>
              <td data-title="Currency">Euro</td>
            </tr>
            <tr>
              <td data-title="Country">Hungary</td>
              <td data-title="Capital">Budapest</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Ireland</td>
              <td data-title="Capital">Dublin</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Italy</td>
              <td data-title="Capital">Rome</td>
              <td data-title="Currency">Euro</td>
            </tr>
            <tr>
              <td data-title="Country">Latvia</td>
              <td data-title="Capital">Riga</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Lithuania</td>
              <td data-title="Capital">Vilnius</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Luxembourg</td>
              <td data-title="Capital">Luxembourg</td>
              <td data-title="Currency">Euro</td>
            </tr>
            <tr>
              <td data-title="Country">Malta</td>
              <td data-title="Capital">Valleta</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Netherlands</td>
              <td data-title="Capital">Amsterdam</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Poland</td>
              <td data-title="Capital">Warsaw</td>
              <td data-title="Currency">Euro</td>
            </tr>
            <tr>
              <td data-title="Country">Portugal</td>
              <td data-title="Capital">Lisbon</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Rumania</td>
              <td data-title="Capital">Bucharest</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Slovakia</td>
              <td data-title="Capital">Bratislava</td>
              <td data-title="Currency">Euro</td>
            </tr>
            <tr>
              <td data-title="Country">Slovenia</td>
              <td data-title="Capital">Ljubljana</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Spain</td>
              <td data-title="Capital">Madrid</td>
              <td data-title="Currency">Euro</td>

              <td data-title="Country">Sweden</td>
              <td data-title="Capital">Stockholm</td>
              <td data-title="Currency">Euro</td>
            </tr>
          </tbody>
        </table>
      </Slide>
    </div>
  );
}

export default ShowTableSection;

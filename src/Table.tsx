import { Table } from "react-bootstrap";
import {
  fixedHeaderEntries,
  dynamicHeaderEntries,
  tableContentInformation,
} from "./tableContent";

function TableComponent() {
  return (
    <Table striped bordered hover style={{ width: "80vw", margin: "auto" }}>
      <thead>
        <tr>
          {fixedHeaderEntries.map((fixedHeaderEntry) => (
            <td key={fixedHeaderEntry}>{fixedHeaderEntry}</td>
          ))}
          <td>{dynamicHeaderEntries[0]}</td>
          <td>{dynamicHeaderEntries[1]}</td>
          <td>{dynamicHeaderEntries[2]}</td>
          <td
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <button>prev</button>
            <button>next</button>
          </td>
        </tr>
      </thead>
      <tbody>
        {tableContentInformation.map((info) => (
          <tr>
            <td>
              <input type="checkbox" /> {info.position}
            </td>
            <td>{info.firstName}</td>
            <td>{info.lastName}</td>
            <td>{info.userName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;

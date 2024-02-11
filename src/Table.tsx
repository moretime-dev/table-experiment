import { Table } from "react-bootstrap";
import {
  fixedHeaderEntries,
  dynamicHeaderEntries,
  tableContentInformation,
} from "./tableContent";
import { useState } from "react";

function TableComponent() {
  const [index, setIndex] = useState(0);
  const [tableData, setTableData] = useState(tableContentInformation);

  const handleNextPage = () => {
    if (index === dynamicHeaderEntries.length - 3) return setIndex(0);
    setIndex((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    if (index === 0) return;
    setIndex((prev) => prev - 1);
  };

  const handleCheckboxClick = (position: number) => {
    console.log(position);
    setTableData((prevData) =>
      prevData.map((data) =>
        data.position === position
          ? { ...data, isChecked: !data.isChecked }
          : data
      )
    );
  };

  return (
    <Table striped bordered hover style={{ width: "80vw", margin: "auto" }}>
      <thead>
        <tr>
          {fixedHeaderEntries.map((fixedHeaderEntry) => (
            <td key={fixedHeaderEntry}>{fixedHeaderEntry}</td>
          ))}
          <td>{dynamicHeaderEntries[index]}</td>
          <td>{dynamicHeaderEntries[index + 1]}</td>
          <td>{dynamicHeaderEntries[index + 2]}</td>
          <td
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <button onClick={handlePrevPage}>prev</button>
            <button onClick={handleNextPage}>next</button>
          </td>
        </tr>
      </thead>
      <tbody>
        {tableData.map((info) => (
          <tr key={info.firstName}>
            <td>
              <input
                type="checkbox"
                value={info.position}
                checked={info.isChecked}
                onChange={() => handleCheckboxClick(info.position)}
              />{" "}
              {info.position}
            </td>
            <td>{info.firstName}</td>
            <td>{info.lastName}</td>
            <td>{info.userName}</td>
            <td>{info.innerPagesInfo[index]}</td>
            <td>{info.innerPagesInfo[index + 1]}</td>
            <td>{info.innerPagesInfo[index + 2]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;

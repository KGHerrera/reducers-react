import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="tabla">
      <h3>tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>pfp</th>
            <th>nombre</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <CrudTableRow
                key={item.id}
                item={item}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan={3}>sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;

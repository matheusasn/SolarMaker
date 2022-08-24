import React, { useState } from "react";
import DataTable from "react-data-table-component";

import "./tableCustom.css";

const customStyles = {
  headRow: {
    style: {
      minHeight: "36px",
    },
  },
  headCells: {
    style: {
      backgroundColor: "#F7FAFA",
      height: "36px",
      font: "normal normal bold 12px/15px Montserrat",
      color: "#333333",
      minHeight: "36px",
    },
  },
  rows: {
    style: {
      minHeight: "50px",
      font: "normal normal 12px/15px Montserrat",
    },
  },
};

function TableCustom(props) {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  return (
    <>
    <DataTable
      columns={props.columns}
      data={props.data}
      pagination
      paginationServer
      customStyles={customStyles}
      paginationTotalRows={props.total}
      noDataComponent="Não há registros para exibir"
      onChangeRowsPerPage={(rowPerPage) => {
        if (typeof props.onPaginationChanged !== "undefined") {
          const newLimit = rowPerPage;
          setLimit(newLimit);
          props.onPaginationChanged(skip, newLimit);
        }
      }}
      onChangePage={(page) => {
        if (typeof props.onPaginationChanged !== "undefined") {
          const newSkip = (page - 1) * limit;
          setSkip(newSkip);
          props.onPaginationChanged(newSkip, limit);
        }
      }}
    />
    </>
  );
}
export default TableCustom;
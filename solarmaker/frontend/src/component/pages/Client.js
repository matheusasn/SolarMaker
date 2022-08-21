import React, { useState } from "react";
import { Navbar, Row, Col, Form, Button } from "react-bootstrap"
import BottomHeader from "../layout/BottomHeader";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TableCustom from "../table/TableCustom"
import EditIcon from "@mui/icons-material/Edit";

import "./client.css"

function handleColumnClientList(handleDelete) {
    const columns = [
      {
        name: "name",
        selector: (row) => {
          if (navigator.language === "pt-BR") {
            return row.name_pt;
          } else {
            return row.name_en;
          }
        },
      },
      {
        name: "Ações",
        elector: (row) => row.actions,
        cell: (row) => (
          <div className="d-flex actionsIcons">
            <Link
              className="editIcon"
              to="/"
              state={{ id: row._id }}
            >
              <EditIcon className="me-3" type="button" />
            </Link>
            <Button
            //   id={row._id}
            //   handleDelete={handleDelete}
            //   title={t("deleteHealthInsurance")}
            //   description={t("deleteHealthInsuranceMsg", {
            //     name: navigator.language === "pt-BR" ? row.name_pt : row.name_en,
            //   })}
            />
          </div>
        ),
        maxWidth: "130px",
        style: {
          justifyContent: "flex-start",
          placeContent: "flex-start",
        },
      },
    ];
  return columns;
}

function Client() {
    var [client, setClient] = useState({ data: [], count: 0 });
    var [options, setOptions] = useState({ skip: 0, limit: 10 });

    const handleDelete = (id) => {
    };

    return (
        <>
            <BottomHeader>
                <Navbar.Brand href="#home">
                    <Row>
                        <Col>
                            <Link className="text-decoration-none" to="/">
                                <ArrowBackIcon className="text-light" />
                                <span className="text-light">Dashboard</span>
                            </Link>
                        </Col>
                    </Row>
                </Navbar.Brand>
                <Row>
                  <Col sm="auto">
                    <Form>
                        <Form.Group controlId="formBasicSearch">
                            <Form.Control className="search-style" type="text" placeholder="Pesquisar" />
                        </Form.Group>
                    </Form>
                  </Col>
                </Row>
            </BottomHeader>
            <div className="mt-3">
                <TableCustom
                    data={client.data}
                    columns={handleColumnClientList(handleDelete)}
                    onPaginationChanged={(skip, limit) => {
                    setOptions({ skip, limit });
                    }}
                    total={client.count}
                />
            </div>
        </>
    )
}

export default Client
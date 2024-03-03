import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Formulir.css";

const Formulir = ({
  namacustomer,
  nomeja,
  pesanan,
  totalharga,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4 className="tambah-pesanan text-center">
            {id ? "Edit Data" : "Tambah Pesanan"}
          </h4>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form onSubmit={handleSubmit} className="custom-form">
            <Form.Group className="mb-3" controlId="namaCustomer">
              <Form.Label>Nama Customer</Form.Label>
              <Form.Control
                type="text"
                name="namacustomer"
                value={namacustomer}
                onChange={(event) => handleChange(event)}
                placeholder="masukan nama anda"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="noMeja">
              <Form.Label>No Meja</Form.Label>
              <Form.Control
                type="number"
                name="nomeja"
                value={nomeja}
                onChange={(event) => handleChange(event)}
                placeholder="masukan nomor meja"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pesanan">
              <Form.Label>Pesanan</Form.Label>
              <Form.Control
                type="text"
                name="pesanan"
                value={pesanan}
                onChange={(event) => handleChange(event)}
                placeholder="masukan sesuai menu yang tertera diatas"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="totalHarga">
              <Form.Label>Total Harga</Form.Label>
              <Form.Control
                type="number"
                name="totalharga"
                value={totalharga}
                onChange={(event) => handleChange(event)}
                placeholder="total harga pesanan"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;

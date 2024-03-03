import React from "react";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";
import Formulir from "./Formulir";
import Menu from "./Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default class Crud extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          restos: [],
          namaCustomer: "",
          noMeja: "",
          pesanan: "",
          totalHarga: "",
          id: "",
        };
      }

      componentDidMount() {
        // Ambil data dari API server
        fetch("http://localhost:8080/api/restos")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ restos: data });
          })
          .catch((error) => console.error("Error:", error));
      }

      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
      
      handleSubmit = (event) => {
        event.preventDefault();
        
        const { id, namacustomer, nomeja, pesanan, totalharga } = this.state;
        const data = {
          nama_customer: namacustomer,
          no_meja: nomeja,
          pesanan,
          total_harga: totalharga,
        };
      
        if (!id) {
          // Menambahkan data baru
          fetch('http://localhost:8080/api/restos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((newResto) => {
              this.setState((prevState) => ({
                restos: [...prevState.restos, newResto],
                namacustomer: "",
                nomeja: "",
                pesanan: "",
                totalharga: "",
              }));
            })
            .catch((error) => console.error('Error:', error));
        } else {
          // Memperbarui data
          fetch(`http://localhost:8080/api/restos/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(() => {
              const updatedRestos = this.state.restos.map((resto) =>
                resto.id === id
                  ? {
                      ...resto,
                      namacustomer,
                      nomeja,
                      pesanan,
                      totalharga,
                    }
                  : resto
              );
      
              this.setState({
                restos: updatedRestos,
                namacustomer: "",
                nomeja: "",
                pesanan: "",
                totalharga: "",
                id: "",
              });
            })
            .catch((error) => console.error('Error:', error));
        }
      };
      
      
      
      editData = (id) => {
        const selectedResto = this.state.restos.find((resto) => resto.id === id);
      
        if (selectedResto) {
          this.setState({
            namaCustomer: selectedResto.namacustomer,
            noMeja: selectedResto.nomeja,
            pesanan: selectedResto.pesanan,
            totalHarga: selectedResto.totalharga,
            id: selectedResto.id,
          });
        }
      };
      
      

    hapusData = (id) => {
        // Kirim permintaan DELETE ke server
        fetch(`http://localhost:8080/api/restos/${id}`, {
          method: 'DELETE',
        })
        .then((response) => response.json())
        .then(() => {
          const filteredRestos = this.state.restos.filter((resto) => resto.id !== id);
          this.setState({
            restos: filteredRestos,
          });
    
          // Refresh halaman setelah penghapusan berhasil
          window.location.reload();
        })
        .catch((error) => console.error('Error:', error));
      };
      

    render() {
        return (
            <div>
                <NavbarComponent/>
                <div className="container mt-4">
                    <Menu/>
                    <Tabel restos={this.state.restos} editData={this.editData} hapusData={this.hapusData}/>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

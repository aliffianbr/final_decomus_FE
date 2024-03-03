// Import React dan komponen React Bootstrap yang diperlukan
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Buat komponen MenuMakanan
const MenuMakanan = () => {
  // Daftar menu makanan
  const menuItems = [
    {
      id: 1,
      nama: "Nasi Goreng",
      harga: "15.000",
      gambar:
        "https://asset.kompas.com/crops/vmDriSafVxhO05gc2dSOXby53Mc=/13x7:700x465/750x500/data/photo/2021/09/24/614dc6865eb24.jpg",
    },
    {
      id: 2,
      nama: "Mie Goreng",
      harga: "12.000",
      gambar:
        "https://asset.kompas.com/crops/032NyNKaO9X61kL1ZpU9AS4khrU=/52x28:954x629/750x500/data/photo/2020/11/19/5fb641f087a66.jpg",
    },
    {
      id: 3,
      nama: "Ayam Bakar",
      harga: "25.000",
      gambar:
        "https://asset.kompas.com/crops/mKXI6KFaStgz3hPSuUx65XSxbcM=/142x72:863x553/750x500/data/photo/2022/09/27/633297e88244b.jpg",
    },
    {
      id: 4,
      nama: "Sop Iga",
      harga: "30.000",
      gambar:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/05/12/resep-sop-iga-1242473731.png",
    },
    {
      id: 5,
      nama: "Rendang",
      harga: "25.000",
      gambar:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/19/rendang-1-513231778.jpg",
    },
    {
      id: 6,
      nama: "Sate Ayam",
      harga: "13.000",
      gambar:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/07/03/foto-content-2023-06-25T175036109-Ola-Anafi-Julian-2557030519.png",
    },
    {
      id: 7,
      nama: "Ayam Goreng",
      harga: "18.000",
      gambar:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1052/2024/01/04/Screenshot_2024-01-04-17-05-11-55_a23b203fd3aafc6dcb84e438dda678b6-3229801291.jpg",
    },
    {
      id: 8,
      nama: "Semur Sapi",
      harga: "35.000",
      gambar:
        "https://asset.kompas.com/crops/9TrbfycbiFB9YB1l2xmzYQR5srQ=/0x342:837x900/750x500/data/photo/2021/01/29/60137f833d1b4.jpg",
    },
  ];

  const menuMinum = [
    {
      id: 1,
      nama: "Es Teh",
      harga: "5.000",
      gambar:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/15093247/Ketahui-Fakta-Es-Teh-Manis.jpg",
    },
    {
      id: 2,
      nama: "Es Jeruk",
      harga: "7.000",
      gambar:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/jawapos/2019/01/minum-es-jeruk-usai-makan-berlemak-bahayakan-ginjal-mitos-atau-fakta_m_.jpg",
    },
    {
      id: 3,
      nama: "Lemon Tea",
      harga: "10.000",
      gambar:
        "https://asset.kompas.com/crops/S1W4fAdeTeetsyBEcoxQjLjSd-w=/0x0:698x465/750x500/data/photo/2023/05/16/6462f99c2ed3a.jpg",
    },
    {
      id: 4,
      nama: "Coffee",
      harga: "10.000",
      gambar:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/krjogja/news/2023/07/12/512408/mengenal-empat-jenis-kopi-mana-yang-lebih-nikmat-230712y.jpg",
    },
    {
      id: 5,
      nama: "Teh Tarik",
      harga: "8.000",
      gambar:
        "https://asset.kompas.com/crops/OyasbWn60BIgm0UGp5MU1noW-6o=/82x65:962x652/750x500/data/photo/2023/08/03/64cb23afde657.jpg",
    },
    {
      id: 6,
      nama: "Es Cendol",
      harga: "15.000",
      gambar:
        "https://static.promediateknologi.id/crop/75x53:675x453/750x500/webp/photo/p1/587/2023/10/23/cendol-2669604022.jpg",
    },
    {
      id: 7,
      nama: "Hot Chocolate",
      harga: "10.000",
      gambar:
        "https://static.promediateknologi.id/crop/44x300:719x746/750x500/webp/photo/p1/00/2023/11/17/Screenshot_2023-11-17-15-07-50-85-3810372216.jpg",
    },
    {
      id: 8,
      nama: "Es Buah",
      harga: "20.000",
      gambar:
        "https://asset.kompas.com/crops/-5UzmVItNVm3mnv7eiQQWVGPTU4=/0x0:697x465/750x500/data/photo/2021/04/18/607b83fbc7b61.jpeg",
    },
  ];

  return (
    <Container>
      <h1 className="text-white text-center">Menu Makanan</h1>
      <Row>
        {menuItems.map((item) => (
          <Col key={item.id} lg={3} md={4} sm={6} xs={12}>
            <Card className="mb-4">
              <Card.Img variant="top" src={item.gambar} alt={item.nama} />
              <Card.Body>
                <Card.Title>{item.nama}</Card.Title>
                <Card.Text>Harga: Rp {item.harga}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />

      <h1 className="text-white text-center">Menu Minuman</h1>
      <Row>
        {menuMinum.map((item) => (
          <Col key={item.id} lg={3} md={4} sm={6} xs={12}>
            <Card className="mb-4">
              <Card.Img variant="top" src={item.gambar} alt={item.nama} />
              <Card.Body>
                <Card.Title>{item.nama}</Card.Title>
                <Card.Text>Harga: Rp {item.harga}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuMakanan;

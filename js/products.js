/*
=============
Load sản phẩm
=============
 */
let product1 = {
  ma: 1,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2022/07/05/combo-boc-ghe-luoi-hat-xop-mau-do-hoa-van-co-70x70cm-homeazvn152456315.jpg",
  ten: " Combo bọc ghế lười hạt xốp màu đỏ  ",
  gia: "835.000₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Vải canvas",
  title: "ƯU ĐÃI MBBANK GIẢM 20K",
  loai: "Ghế",
  kinhthuoc: 'D70xR70xC70 cm',
  khoiluong: "3000g",
  khoiluongvo: "700g",
  mausac: "Màu be, đỏ",
  baogom: "1 bọc ghế lười hạt xốp (Không bao gồm phần bên trong)",
  review: 808,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>'
};
let product2 = {
  ma: 2,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2022/07/04/ghe-tua-lung-cao-cap-elbow-khung-sat-vai-long-cuu-ma-pkgh00018-homeazvn220239424.jpg",
  ten: " Ghế tựa lưng cao cấp Elbow khung sắt vải lông cừu  ",
  gia: "2.450.000 ₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Sắt, vải bông lông cừu",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: '40 x 80 x 80cm',
  khoiluong: "7 kg",
  khoiluongvo: "700g",
  mausac: "Màu hồng, vàng, nâu, trắng",
  baogom: "Ghế tựa lưng cao cấp (Thời gian đặt hàng: 4-6 tuần)",
  review: 1008,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product3 = {
  ma: 3,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2022/03/31/ghe-sofa-go-hien-dai-nuage-dem-bot-bien-ma-blanc001-homeazvn021854183.jpg",
  ten: " Ghế sofa gỗ hiện đại Nuage đệm bọt biển  ",
  gia: "5.450.000 đ",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Khung gỗ, vải flannel, đệm bọt biển",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: 'D120cm x R50cm x C43cm',
  khoiluong: "10 kg",
  khoiluongvo: "700g",
  mausac: "Màu trắng",
  baogom: "Ghế Ghế sofa (Thời gian đặt hàng: 2-3 tuần)",
  review: 108,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>'
};
let product4 = {
  ma: 4,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2022/07/05/combo-vo-boc-ghe-luoi-hat-xop-mau-ghi-sang-size-70x70x70cm-homeazvn162431990.jpg",
  ten: " Combo vỏ bọc ghế lười + hạt xốp màu ghi sáng  ",
  gia: "855.000₫",
  giagoc: "950.000₫",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Vải canvas",
  title: "ƯU ĐÃI MBBANK GIẢM 20K",
  loai: "Ghế",
  kinhthuoc: 'D70xR70xC70 cm',
  khoiluong: "3000g",
  khoiluongvo: "700g",
  mausac: "Màu be, Màu trắng",
  baogom: "1 bọc ghế lười hạt xốp (Không bao gồm phần bên trong)",
  review: 808,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product5 = {
  ma: 5,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2022/03/25/ghe-nhua-tua-lung-cao-cap-purity-phong-cach-bac-au-ma-pkgh0017-homeazvn172912300.jpg",
  ten: " Ghế nhựa tựa lưng cao cấp Purity phong cách Bắc Âu  ",
  gia: "1.390.000 đ",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Khung kim loại mặt nhựa",
  title: "ƯU ĐÃI MBBANK GIẢM 20K",
  loai: "Ghế",
  kinhthuoc: ' D47cm x R46cm x C79cm',
  khoiluong: "6 kg",
  khoiluongvo: "700g",
  mausac: "Màu be, Màu trắng",
  baogom: "1 Ghế nhựa (Thời gian đặt hàng: 3-6 tuần)",
  review: 80,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>'
};
let product6 = {
  ma: 6,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/09/17/ghe-banh-don-phong-khach-knox-hien-dai-ma-pkgh00090000-homeazvn-2173021384.png",
  ten: " Ghế bành đơn phòng khách Knox hiện đại  ",
  gia: "6.299.000 ₫",
  giagoc: "6.5000.000 ₫",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Khung sắt bọc da",
  title: "ƯU ĐÃI GIẢM 100K",
  loai: "Ghế",
  kinhthuoc: '',
  khoiluong: "",
  khoiluongvo: "",
  mausac: "Đen, trắng",
  baogom: "1 Ghế bành đơn ",
  review: 600,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>'
};
let product7 = {
  ma: 7,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2022/07/05/combo-vo-ghe-luoi-nau-vang-hat-xop-kich-co-70x70cm-homeazvn142450901.jpg",
  ten: " Combo vỏ ghế lười nâu vàng + hạt xốp  ",
  gia: "835.000₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Vải canvas",
  title: "ƯU ĐÃI MBBANK GIẢM 20K",
  loai: "Ghế",
  kinhthuoc: 'D70xR70xC70 cm',
  khoiluong: "3000g",
  khoiluongvo: "700g",
  mausac: "Màu nâu, vàng",
  baogom: "1 bọc ghế lười hạt xốp (Không bao gồm phần bên trong)",
  review: 600,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product8 = {
  ma: 8,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2022/07/02/combo-boc-ghe-luoi-hat-xop-co-lon-mau-do-do-soc-homeazvn0200559.jpg",
  ten: " Combo bọc ghế lười hạt xốp cỡ lớn màu đỏ đô sọc  ",
  gia: "949.000 ₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Vải canvas",
  title: "ƯU ĐÃI MBBANK GIẢM 20K",
  loai: "Ghế",
  kinhthuoc: '80 x 80 x 100cm',
  khoiluong: "3500g",
  khoiluongvo: "700g",
  mausac: "Màu đỏ đô",
  baogom: "1 Combo bọc ghế lười (Không bao gồm phần bên trong)",
  review: 600,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product9 = {
  ma: 9,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2022/07/04/ghe-sofa-don-thu-gian-maru-khung-sat-boc-long-cuu-ma-pkgh00020-homeazvn235929715.jpg",
  ten: " Ghế sofa đơn thư giãn Maru khung sắt bọc lông cừu mã  ",
  gia: "8.690.000 ₫",
  giagoc: "9.000.000 ₫",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Khung sắt vải bố",
  title: "ƯU ĐÃI MBBANK GIẢM 100K",
  loai: "Ghế",
  kinhthuoc: 'D79 x R63 x C75cm',
  khoiluong: "23kg",
  khoiluongvo: "1kg",
  mausac: "Có thể tùy chỉnh màu vải bọc ghế",
  baogom: "1 Ghế sofa (Thời gian đặt hàng: 15-20 ngày)",
  review: 10,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>'
};
let product10 = {
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/01/13/ghe-sofa-may-tre-dan-tu-nhien-cao-cap-ma-s1-homeazvn-214293980.png",
  ten: " Ghế sofa mây tre đan tự nhiên cao cấp  ",
  gia: "4.900.000 đ",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "100% mây tự nhiên và nệm vải êm ái",
  title: "ƯU ĐÃI MBBANK GIẢM 100K",
  loai: "Ghế",
  kinhthuoc: 'D79 x R63 x C75cm',
  khoiluong: "23kg",
  khoiluongvo: "1kg",
  mausac: "Gỗ tự nhiên",
  baogom: "1 Ghế sofa (Thời gian đặt hàng: 15-20 ngày)",
  review: 12,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>'
};
let product11 = {
  ma: 11,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/11/27/vo-ghe-luoi-hat-xop-boc-vai-bo-canada-mattgl0003-homeazvn062419983.png",
  ten: " Vỏ ghế lười hạt xốp cỡ lớn màu đỏ hoa văn  ",
  gia: "949.000 ₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Vải canvas + hạt xốp",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: '80 x 80 x 100cm',
  khoiluong: "3500g",
  khoiluongvo: "700g",
  mausac: "Màu đỏ có hoa văn",
  baogom: "1 Vỏ ghế lười",
  review: 340,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>'
};
let product12 = {
  ma: 12,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/01/18/ghe-sofa-may-tre-dan-tu-nhien-cao-cap-daybed-homeazvn130958279.png",
  ten: " Ghế sofa mây tre đan tự nhiên cao cấp  ",
  gia: "11.000.000 đ",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "100% mây tự nhiên chắc chắn và nệm vải êm ái",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: '80 x 80 x 100cm',
  khoiluong: "3500g",
  khoiluongvo: "700g",
  mausac: "gỗ tự nhiên",
  baogom: "1 Ghế sofa",
  review: 340,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>'
};

//Sản phẩm giảm giá
let product13 = {
  ma: 13,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/09/18/ghe-banh-sofa-don-thu-gian-bonnie-ma-pkgh00010000-homeazvn163735387.png",
  ten: " Ghế bành sofa đơn thư giãn Bonnie  ",
  gia: "4.490.000 ₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 200.000₫",
  chatlieu: "Khung gỗ thông, bọc vải bố",
  title: "ƯU ĐÃI SỐC GIẢM 200K",
  loai: "Ghế",
  kinhthuoc: 'Cao 79cm – Ngang 68cm – Sâu 80cm',
  khoiluong: "",
  khoiluongvo: "5kg",
  mausac: "Trắng (Có thể đặt màu vải ghế)",
  baogom: "1 Ghế bành sofa (Đặt hàng từ 5-7 ngày)",
  review: 500,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};

let product14 = {
  ma: 14,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/11/27/vo-ghe-luoi-hat-xop-boc-vai-bo-canada-mattgl0003-homeazvn062419983.png",
  ten: " Vỏ ghế lười hạt xốp, bọc vải bố Canada  ",
  gia: "665.000 ₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 100.000₫",
  chatlieu: "Vải bố Canada",
  title: "ƯU ĐÃI SỐC GIẢM 100K",
  loai: "Ghế",
  kinhthuoc: 'D70xR70xC70 cm',
  khoiluong: "3000 gram",
  khoiluongvo: "750 g",
  mausac: "Trắng (Có thể đặt màu vải ghế)",
  baogom: "1 Vỏ ghế lười + 1 bọc vải (Giá chưa bao gồm hạt xốp bên trong)",
  review: 100,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product15 = {
  ma: 15,
  img: "../img/phongkhach/banghe/ghethap.png",
  ten: " Ghế đôn vuông bằng gỗ cao su tự nhiên hiện đại giá rẻ  ",
  gia: "1.990.000₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Gỗ tự nhiên",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: 'Dài 60cm x Rộng 60cm x Cao 37cm',
  khoiluong: "5kg",
  khoiluongvo: "700g",
  mausac: "Màu be, nâu",
  baogom: "1 đôn vuông",
  review: 500,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product16 = {
  ma: 16,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/09/18/ghe-banh-sofa-don-boc-ni-tokyo-ma-pkgh00030000-homeazvn173451685.png",
  ten: " Ghế bành sofa đơn bọc nỉ Tokyo  ",
  gia: "2.190.000 ₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 100.000₫",
  chatlieu: "Khung gỗ tần bỉ, bọc vải nỉ",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: 'D60xR50xC73cm (chiều cao tính cả đệm ghế)',
  khoiluong: "",
  khoiluongvo: "5kg",
  mausac: "Màu be, trắng",
  baogom: "1 Ghế bành sofa (Thời gian đặt hàng: 1-2 tuần)",
  review: 124,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product17 = {
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/01/12/ghe-may-tron-papasan-thu-gian-cho-me-bau-duong-kinh-120-cm-ma-gm4-homeazvn-4162637106.png",
  ten: " Ghế mây tròn papasan thư giãn cho mẹ bầu đường kính  ",
  gia: "4.400.000 ₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 50.000₫",
  chatlieu: "100% mây tự nhiên",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: 'Đường kính 120cm',
  khoiluong: "",
  khoiluongvo: "5kg",
  mausac: "Gỗ tự nhiên",
  baogom: "bộ ghế mây tròn papasan gồm chảo ghế, chân ghế và nệm tặng kèm",
  review: 124,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product18 = {
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/01/12/ghe-sofa-may-tre-dan-cao-cap-ma-d02-homeazvn14272813.png",
  ten: " Ghế sofa mây tre đan cao cấp  ",
  gia: "4.400.000 ₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 50.000₫",
  chatlieu: "100% mây tự nhiên",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: 'Đường kính 120cm',
  khoiluong: "",
  khoiluongvo: "5kg",
  mausac: "Gỗ tự nhiên",
  baogom: "bộ ghế mây tròn papasan gồm chảo ghế, chân ghế và nệm tặng kèm",
  review: 124,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product19 = {
  ma: 19,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/09/22/ghe-sofa-doi-boc-ni-hien-dai-tokyo-ma-pkgh00040000-homeazvn092729290.png",
  ten: " Ghế sofa đôi bọc nỉ hiện đại Tokyo  ",
  gia: "2.790.000 ₫",
  giagoc: "3.000.000 ₫",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Khung gỗ tần bì, bọc vải nỉ",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: 'Dài 116cm - Rộng 65cm - Cao 75cm (Chiều cao tính cả nệm)',
  khoiluong: "",
  khoiluongvo: "",
  mausac: "Trắng (Có thể đặt màu vải ghế)",
  baogom: "1 Ghế sofa đôi ",
  review: 91,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product20 = {
  ma: 20,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2022/03/31/combo-vo-ghe-luoi-hat-xop-lon-mau-xanh-duong-ttgl10001-homeazvn181503973.jpg",
  ten: " Combo vỏ ghế lười hạt xốp lớn màu xanh dương  ",
  gia: "949.000 ₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Vải canvas + hạt xốp",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: '80 x 80 x 100cm',
  khoiluong: "3500g",
  khoiluongvo: "700g",
  mausac: "Màu xanh electric",
  baogom: "1 Combo vỏ ghế lười (Không bao gồm phần bên trong)",
  review: 88,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>'
};
let product21 = {
  ma: 21,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/01/14/ghe-may-sofa-don-may-tu-nhien-cao-cap-ma-s4-homeazvn141915336.png",
  ten: " Ghế mây sofa đơn 100% mây tự nhiên cao cấp ",
  gia: "4.800.000 đ",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Vải canvas + hạt xốp",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: '',
  khoiluong: "",
  khoiluongvo: "700g",
  mausac: "Màu gỗ tự nhiên",
  baogom: "1 Ghế mây sofa (Không bao gồm phần bên trong)",
  review: 54,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product22 = {
  ma: 22,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/01/05/ghe-papasan-may-tu-nhien-tang-kem-nem-ma-gp4-homeazvn173843843.png",
  ten: " Ghế papasan mây tự nhiên tặng kèm nệm ",
  gia: "3.400.000 đ",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Vải canvas + hạt xốp",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: '',
  khoiluong: "",
  khoiluongvo: "700g",
  mausac: "Màu gỗ tự nhiên",
  baogom: "1 Ghế mây sofa (Không bao gồm phần bên trong)",
  review: 88,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product23 = {
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/03/03/ghe-luoi-hat-xop-mau-den-homeazvn210246442.jpg",
  ten: " Bọc ghế lười hạt xốp ",
  gia: "835.000đ",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Vải canvas + hạt xốp",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: '',
  khoiluong: "",
  khoiluongvo: "700g",
  mausac: "Màu gỗ tự nhiên",
  baogom: "1 Ghế mây sofa (Không bao gồm phần bên trong)",
  review: 88,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product24 = {
  ma: 24,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/01/07/ban-may-tron-ban-may-tre-dan-gia-re-ma-bm2-homeazvn154659663.png",
  ten: " Bàn mây tròn - Bàn mây tre đan ",
  gia: "4.550.000 đ",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 20.000₫",
  chatlieu: "Vải canvas + hạt xốp",
  title: "ƯU ĐÃI MBBANK GIẢM 50K",
  loai: "Ghế",
  kinhthuoc: '',
  khoiluong: "",
  khoiluongvo: "700g",
  mausac: "Màu gỗ tự nhiên",
  baogom: "1 Ghế mây sofa (Không bao gồm phần bên trong)",
  review: 88,
  danhgia: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
//---------------Accessory---------------
let accessory1 = {
  ma: 1,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/07/16/ke-trang-tri-treo-tuong-116421821.jpg",
  ten: "Set kệ trang trí treo tường 3 ô vuông lồng",
  gia: "480.000 ₫",
  giagoc: "50.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>100.000₫</b>",
  tinhtrang: "NEW",
  title: "MBBANK GIẢM 20K",
  hang: "",
  uudaithem: "- Nhập mã NOITHAT12 giảm 20% tối đa 100.000đ khi thanh toán quét trên 2 triệu đồng",
  dacdiemnoibat:
    '<li>Set kệ treo tường trang trí TD48 có thiết kế bắt mắt gồm các kệ hình vuông lồng nhau. Thay vì là những chiếc giá lớn thì sản phẩm gồm nhiều kệ nhỏ có kích thước đa dạng, mỗi kệ lại là 1 mảnh ghép của 1 chiếc kệ lớn hơn, để bạn có thể thỏa sức sáng tạo bức tranh ghép của mình, tạo cho mình chiếc kệ trang trí treo tường riêng theo ý muốn. Sản phẩm dễ dàng thi công tại nhà, bạn có thể dễ dàng tháo lắp với ốc vít đi kèm. </li>' +
    '<li>Set kệ trang trí treo tường 3 ô vuông lồng TD48 được làm từ chất liệu gỗ MDF lõi xanh cao cấp, với khả năng chịu lực tốt, chống mối mọt, ẩm mốc tuyệt đối, không cong vênh, co ngót. Bề mặt sản phẩm được phủ thêm 1 lớp melamine, tăng khả năng chống trầy xước, chống thấm, tạo tính thẩm mỹ cho sản phẩm. Kệ có tuổi thọ lâu dài, giúp tiết kiệm chi phí cho gia đình bạn. Bộ kệ trang trí treo tường TD48 phù hợp với nhiều không gian, từ phòng ngủ, phòng khách đến phòng ăn, phòng làm việc,... </li>' +
    '<img style="margin-left: 200px;" src="https://i2.ex-cdn.com/homeaz.vn/files/content/2021/07/16/ke-trang-tri-treo-tuong-1703.jpg" </li>',
  review: 53,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>'
};
let accessory2 = {
  ma: 2,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/07/14/ke-sach-dung-dep202615718.png",
  ten: "Kệ sách đứng đẹp phong cách Bắc Âu tối giản",
  gia: "1.650.000 ₫",
  giagoc: "2.000.000₫",
  tlgiam: " -10%",
  qua: "",
  khuyenmai: "Giảm ngay <b>350.000₫</b>",
  tinhtrang: "NEW",
  title: "MBBANK GIẢM 100K",
  hang: "",
  uudaithem: "- Nhập mã NOITHAT12 giảm 20% tối đa 100.000đ khi thanh toán quét trên 2 triệu đồng",
  dacdiemnoibat:
    '<li>Set kệ treo tường trang trí TD48 có thiết kế bắt mắt gồm các kệ hình vuông lồng nhau. Thay vì là những chiếc giá lớn thì sản phẩm gồm nhiều kệ nhỏ có kích thước đa dạng, mỗi kệ lại là 1 mảnh ghép của 1 chiếc kệ lớn hơn, để bạn có thể thỏa sức sáng tạo bức tranh ghép của mình, tạo cho mình chiếc kệ trang trí treo tường riêng theo ý muốn. Sản phẩm dễ dàng thi công tại nhà, bạn có thể dễ dàng tháo lắp với ốc vít đi kèm. </li>' +
    '<li>Set kệ trang trí treo tường 3 ô vuông lồng TD48 được làm từ chất liệu gỗ MDF lõi xanh cao cấp, với khả năng chịu lực tốt, chống mối mọt, ẩm mốc tuyệt đối, không cong vênh, co ngót. Bề mặt sản phẩm được phủ thêm 1 lớp melamine, tăng khả năng chống trầy xước, chống thấm, tạo tính thẩm mỹ cho sản phẩm. Kệ có tuổi thọ lâu dài, giúp tiết kiệm chi phí cho gia đình bạn. Bộ kệ trang trí treo tường TD48 phù hợp với nhiều không gian, từ phòng ngủ, phòng khách đến phòng ăn, phòng làm việc,... </li>' +
    '<img style="margin-left: 200px;" src="https://i2.ex-cdn.com/homeaz.vn/files/content/2021/07/14/ke-sach-dung-dep-2026.jpg" </li>',
  review: 12,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory3 = {
  ma: 3,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/06/24/ke-treo-tuong-trang-tri-td15-2145751793.png",
  ten: "Kệ treo tường trang trí hình tổ ong",
  gia: "860.000 ₫",
  giagoc: "",
  tlgiam: " ",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "SOLD",
  title: "MBBANK GIẢM 100K",
  hang: "",
  uudaithem: "- Nhập mã NOITHAT12 giảm 20% tối đa 100.000đ khi thanh toán quét trên 2 triệu đồng",
  dacdiemnoibat:
    '<li>Set kệ treo tường trang trí TD48 có thiết kế bắt mắt gồm các kệ hình vuông lồng nhau. Thay vì là những chiếc giá lớn thì sản phẩm gồm nhiều kệ nhỏ có kích thước đa dạng, mỗi kệ lại là 1 mảnh ghép của 1 chiếc kệ lớn hơn, để bạn có thể thỏa sức sáng tạo bức tranh ghép của mình, tạo cho mình chiếc kệ trang trí treo tường riêng theo ý muốn. Sản phẩm dễ dàng thi công tại nhà, bạn có thể dễ dàng tháo lắp với ốc vít đi kèm. </li>' +
    '<li>Set kệ trang trí treo tường 3 ô vuông lồng TD48 được làm từ chất liệu gỗ MDF lõi xanh cao cấp, với khả năng chịu lực tốt, chống mối mọt, ẩm mốc tuyệt đối, không cong vênh, co ngót. Bề mặt sản phẩm được phủ thêm 1 lớp melamine, tăng khả năng chống trầy xước, chống thấm, tạo tính thẩm mỹ cho sản phẩm. Kệ có tuổi thọ lâu dài, giúp tiết kiệm chi phí cho gia đình bạn. Bộ kệ trang trí treo tường TD48 phù hợp với nhiều không gian, từ phòng ngủ, phòng khách đến phòng ăn, phòng làm việc,... </li>' +
    '<img style="margin-left: 200px;" src="https://i2.ex-cdn.com/homeaz.vn/files/content/2021/06/24/ke-treo-tuong-trang-tri-td15-3-1522.jpg" </li>',
  review: 45,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory4 = {
  ma: 4,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/12/16/den-chum-trang-tri-ban-an-cao-cap-chao-thuy-tinh-homeazvn141516567.png",
  ten: "Đèn chùm trang trí bàn ăn cao cấp chao thủy tinh",
  gia: "2.319.850 ₫",
  giagoc: "2.400.000 ₫",
  tlgiam: "-10% ",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "SOLD",
  title: "MBBANK GIẢM 100K",
  hang: "",
  uudaithem: "- Nhập mã NOITHAT12 giảm 20% tối đa 100.000đ khi thanh toán quét trên 2 triệu đồng",
  dacdiemnoibat:
    '<li>Set kệ treo tường trang trí TD48 có thiết kế bắt mắt gồm các kệ hình vuông lồng nhau. Thay vì là những chiếc giá lớn thì sản phẩm gồm nhiều kệ nhỏ có kích thước đa dạng, mỗi kệ lại là 1 mảnh ghép của 1 chiếc kệ lớn hơn, để bạn có thể thỏa sức sáng tạo bức tranh ghép của mình, tạo cho mình chiếc kệ trang trí treo tường riêng theo ý muốn. Sản phẩm dễ dàng thi công tại nhà, bạn có thể dễ dàng tháo lắp với ốc vít đi kèm. </li>' +
    '<li>Set kệ trang trí treo tường 3 ô vuông lồng TD48 được làm từ chất liệu gỗ MDF lõi xanh cao cấp, với khả năng chịu lực tốt, chống mối mọt, ẩm mốc tuyệt đối, không cong vênh, co ngót. Bề mặt sản phẩm được phủ thêm 1 lớp melamine, tăng khả năng chống trầy xước, chống thấm, tạo tính thẩm mỹ cho sản phẩm. Kệ có tuổi thọ lâu dài, giúp tiết kiệm chi phí cho gia đình bạn. Bộ kệ trang trí treo tường TD48 phù hợp với nhiều không gian, từ phòng ngủ, phòng khách đến phòng ăn, phòng làm việc,... </li>' +
    '<img style="margin-left: 200px;" src="https://i2.ex-cdn.com/homeaz.vn/files/content/2021/12/16/den-chum-trang-tri-ban-an-cao-cap-chao-thuy-tinh-homeazvn-1415.jpg" </li>',
  review: 99,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory5 = {
  ma: 5,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/12/15/den-chum-tha-ban-an-hien-dai-cao-cap-kieu-ngang-gan-den-tron-homeazvn12553591.png",
  ten: "Đèn chùm thả bàn ăn hiện đại, cao cấp kiểu ngang gắn đèn tròn",
  gia: "2.652.000 ₫",
  giagoc: "4.080.000 ₫",
  tlgiam: "-35% ",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "MBBANK GIẢM 100K",
  hang: "",
  uudaithem: "- Nhập mã NOITHAT12 giảm 20% tối đa 100.000đ khi thanh toán quét trên 2 triệu đồng",
  dacdiemnoibat:
    '<li> Trang trí TD48 có thiết kế bắt mắt gồm các kệ hình vuông lồng nhau. Thay vì là những chiếc giá lớn thì sản phẩm gồm nhiều kệ nhỏ có kích thước đa dạng, mỗi kệ lại là 1 mảnh ghép của 1 chiếc kệ lớn hơn, để bạn có thể thỏa sức sáng tạo bức tranh ghép của mình, tạo cho mình chiếc kệ trang trí treo tường riêng theo ý muốn. Sản phẩm dễ dàng thi công tại nhà, bạn có thể dễ dàng tháo lắp với ốc vít đi kèm. </li>' +
    '<li> Trang trí treo tường 3 ô vuông lồng TD48 được làm từ chất liệu gỗ MDF lõi xanh cao cấp, với khả năng chịu lực tốt, chống mối mọt, ẩm mốc tuyệt đối, không cong vênh, co ngót. Bề mặt sản phẩm được phủ thêm 1 lớp melamine, tăng khả năng chống trầy xước, chống thấm, tạo tính thẩm mỹ cho sản phẩm. Kệ có tuổi thọ lâu dài, giúp tiết kiệm chi phí cho gia đình bạn. Bộ kệ trang trí treo tường TD48 phù hợp với nhiều không gian, từ phòng ngủ, phòng khách đến phòng ăn, phòng làm việc,... </li>' +
    '<img style="margin-left: 200px;" src="https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/12/15/den-chum-tha-ban-an-hien-dai-cao-cap-kieu-ngang-gan-den-tron-homeazvn12553591.png" </li>',
  review: 9,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>'
};
let accessory6 = {
  ma: 6,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/12/13/den-chum-phong-khach-hien-dai-don-gian-tha-vong-xi-dong-homeazvn174826773.jpg",
  ten: "Đèn chùm phòng khách hiện đại đơn giản dạng thả vòng xi đồng",
  gia: "2.134.000đ - 3.860.000đ",
  giagoc: "",
  tlgiam: " ",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "MBBANK GIẢM 100K",
  hang: "",
  uudaithem: "- Nhập mã NOITHAT12 giảm 20% tối đa 100.000đ khi thanh toán quét trên 2 triệu đồng",
  dacdiemnoibat:
    '<li> Trang trí TD48 có thiết kế bắt mắt gồm các kệ hình vuông lồng nhau. Thay vì là những chiếc giá lớn thì sản phẩm gồm nhiều kệ nhỏ có kích thước đa dạng, mỗi kệ lại là 1 mảnh ghép của 1 chiếc kệ lớn hơn, để bạn có thể thỏa sức sáng tạo bức tranh ghép của mình, tạo cho mình chiếc kệ trang trí treo tường riêng theo ý muốn. Sản phẩm dễ dàng thi công tại nhà, bạn có thể dễ dàng tháo lắp với ốc vít đi kèm. </li>' +
    '<li> Trang trí treo tường 3 ô vuông lồng TD48 được làm từ chất liệu gỗ MDF lõi xanh cao cấp, với khả năng chịu lực tốt, chống mối mọt, ẩm mốc tuyệt đối, không cong vênh, co ngót. Bề mặt sản phẩm được phủ thêm 1 lớp melamine, tăng khả năng chống trầy xước, chống thấm, tạo tính thẩm mỹ cho sản phẩm. Kệ có tuổi thọ lâu dài, giúp tiết kiệm chi phí cho gia đình bạn. Bộ kệ trang trí treo tường TD48 phù hợp với nhiều không gian, từ phòng ngủ, phòng khách đến phòng ăn, phòng làm việc,... </li>' +
    '<img style="margin-left: 200px;" src="https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/12/13/den-chum-phong-khach-hien-dai-don-gian-tha-vong-xi-dong-homeazvn174826773.jpg" </li>',
  review: 9,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>'
};
let accessory7 = {
  ma: 7,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2022/12/04/ke-go-de-tivi-mau-nau-tram-hien-dai-moho-vline-301-homeazvn203259801.jpg",
  ten: "Kệ gỗ để tivi màu nâu tràm hiện đại",
  gia: "3.990.000 đ",
  giagoc: "",
  tlgiam: " ",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "MBBANK GIẢM 100K",
  hang: "",
  uudaithem: "- Nhập mã NOITHAT12 giảm 20% tối đa 100.000đ khi thanh toán quét trên 2 triệu đồng",
  dacdiemnoibat:
    '<li> Trang trí TD48 có thiết kế bắt mắt gồm các kệ hình vuông lồng nhau. Thay vì là những chiếc giá lớn thì sản phẩm gồm nhiều kệ nhỏ có kích thước đa dạng, mỗi kệ lại là 1 mảnh ghép của 1 chiếc kệ lớn hơn, để bạn có thể thỏa sức sáng tạo bức tranh ghép của mình, tạo cho mình chiếc kệ trang trí treo tường riêng theo ý muốn. Sản phẩm dễ dàng thi công tại nhà, bạn có thể dễ dàng tháo lắp với ốc vít đi kèm. </li>' +
    '<li> Trang trí treo tường 3 ô vuông lồng TD48 được làm từ chất liệu gỗ MDF lõi xanh cao cấp, với khả năng chịu lực tốt, chống mối mọt, ẩm mốc tuyệt đối, không cong vênh, co ngót. Bề mặt sản phẩm được phủ thêm 1 lớp melamine, tăng khả năng chống trầy xước, chống thấm, tạo tính thẩm mỹ cho sản phẩm. Kệ có tuổi thọ lâu dài, giúp tiết kiệm chi phí cho gia đình bạn. Bộ kệ trang trí treo tường TD48 phù hợp với nhiều không gian, từ phòng ngủ, phòng khách đến phòng ăn, phòng làm việc,... </li>' +
    '<img style="margin-left: 200px;" src="https://i2.ex-cdn.com/homeaz.vn/files/content/2022/12/04/ke-go-de-tivi-mau-nau-tram-hien-dai-moho-vline-301-homeazvn-9-2033.jpg" </li>',
  review: 9,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>'
};
let accessory8 = {
  ma: 8,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2020/10/31/ke-de-ruou-vang-kr009-homeaz.vn-.PNG233154731.png",
  ten: "Kệ để rượu vang làm bằng sắt mỹ thuật cao cấp",
  gia: "1.200.000 đ",
  giagoc: "1.500.000 đ",
  tlgiam: "-40%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "MBBANK GIẢM 100K",
  hang: "",
  uudaithem: "- Nhập mã NOITHAT12 giảm 20% tối đa 100.000đ khi thanh toán quét trên 2 triệu đồng",
  dacdiemnoibat:
    '<li> Trang trí TD48 có thiết kế bắt mắt gồm các kệ hình vuông lồng nhau. Thay vì là những chiếc giá lớn thì sản phẩm gồm nhiều kệ nhỏ có kích thước đa dạng, mỗi kệ lại là 1 mảnh ghép của 1 chiếc kệ lớn hơn, để bạn có thể thỏa sức sáng tạo bức tranh ghép của mình, tạo cho mình chiếc kệ trang trí treo tường riêng theo ý muốn. Sản phẩm dễ dàng thi công tại nhà, bạn có thể dễ dàng tháo lắp với ốc vít đi kèm. </li>' +
    '<li> Trang trí treo tường 3 ô vuông lồng TD48 được làm từ chất liệu gỗ MDF lõi xanh cao cấp, với khả năng chịu lực tốt, chống mối mọt, ẩm mốc tuyệt đối, không cong vênh, co ngót. Bề mặt sản phẩm được phủ thêm 1 lớp melamine, tăng khả năng chống trầy xước, chống thấm, tạo tính thẩm mỹ cho sản phẩm. Kệ có tuổi thọ lâu dài, giúp tiết kiệm chi phí cho gia đình bạn. Bộ kệ trang trí treo tường TD48 phù hợp với nhiều không gian, từ phòng ngủ, phòng khách đến phòng ăn, phòng làm việc,... </li>' +
    '<img style="margin-left: 200px;" src="https://i2.ex-cdn.com/homeaz.vn/files/content/2020/10/31/ke-de-ruou-vang-kr009-homeazvn-2-2334.jpg" </li>',
  review: 17,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory9 = {
  ma: 9,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/06/24/tu-ruou-dung-ngan-phong-td1243162428190.jpg",
  ten: "Tủ rượu đứng ngăn phòng nhiều kích thước",
  gia: "2.560.000đ - 3.840.000đ",
  giagoc: "",
  tlgiam: "-40%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "MBBANK GIẢM 100K",
  hang: "",
  uudaithem: "- Nhập mã NOITHAT12 giảm 20% tối đa 100.000đ khi thanh toán quét trên 2 triệu đồng",
  dacdiemnoibat:
    '<li> Trang trí TD48 có thiết kế bắt mắt gồm các kệ hình vuông lồng nhau. Thay vì là những chiếc giá lớn thì sản phẩm gồm nhiều kệ nhỏ có kích thước đa dạng, mỗi kệ lại là 1 mảnh ghép của 1 chiếc kệ lớn hơn, để bạn có thể thỏa sức sáng tạo bức tranh ghép của mình, tạo cho mình chiếc kệ trang trí treo tường riêng theo ý muốn. Sản phẩm dễ dàng thi công tại nhà, bạn có thể dễ dàng tháo lắp với ốc vít đi kèm. </li>' +
    '<li> Trang trí treo tường 3 ô vuông lồng TD48 được làm từ chất liệu gỗ MDF lõi xanh cao cấp, với khả năng chịu lực tốt, chống mối mọt, ẩm mốc tuyệt đối, không cong vênh, co ngót. Bề mặt sản phẩm được phủ thêm 1 lớp melamine, tăng khả năng chống trầy xước, chống thấm, tạo tính thẩm mỹ cho sản phẩm. Kệ có tuổi thọ lâu dài, giúp tiết kiệm chi phí cho gia đình bạn. Bộ kệ trang trí treo tường TD48 phù hợp với nhiều không gian, từ phòng ngủ, phòng khách đến phòng ăn, phòng làm việc,... </li>' +
    '<img style="margin-left: 200px;" src="https://i2.ex-cdn.com/homeaz.vn/files/content/2021/06/24/tu-ruou-dung-ngan-phong-td1243-2-1646.jpg" </li>',
  review: 9,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory10 = {
  ma: 10,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2022/09/18/giuong-ngu-go-tu-nhien-hien-dai-nhieu-kich-thuoc-moho-vline-601-homeazvn163543880.jpg",
  ten: "Giường ngủ gỗ tự nhiên hiện đại nhiều",
  gia: "4.990.000đ - 7.990.000đ",
  giagoc: "",
  tlgiam: "-20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "MBBANK GIẢM 100K",
  hang: "",
  uudaithem: "- Nhập mã NOITHAT12 giảm 20% tối đa 100.000đ khi thanh toán quét trên 2 triệu đồng",
  dacdiemnoibat:
    '<li> Trang trí TD48 có thiết kế bắt mắt gồm các kệ hình vuông lồng nhau. Thay vì là những chiếc giá lớn thì sản phẩm gồm nhiều kệ nhỏ có kích thước đa dạng, mỗi kệ lại là 1 mảnh ghép của 1 chiếc kệ lớn hơn, để bạn có thể thỏa sức sáng tạo bức tranh ghép của mình, tạo cho mình chiếc kệ trang trí treo tường riêng theo ý muốn. Sản phẩm dễ dàng thi công tại nhà, bạn có thể dễ dàng tháo lắp với ốc vít đi kèm. </li>' +
    '<li> Trang trí treo tường 3 ô vuông lồng TD48 được làm từ chất liệu gỗ MDF lõi xanh cao cấp, với khả năng chịu lực tốt, chống mối mọt, ẩm mốc tuyệt đối, không cong vênh, co ngót. Bề mặt sản phẩm được phủ thêm 1 lớp melamine, tăng khả năng chống trầy xước, chống thấm, tạo tính thẩm mỹ cho sản phẩm. Kệ có tuổi thọ lâu dài, giúp tiết kiệm chi phí cho gia đình bạn. Bộ kệ trang trí treo tường TD48 phù hợp với nhiều không gian, từ phòng ngủ, phòng khách đến phòng ăn, phòng làm việc,... </li>' +
    '<img style="margin-left: 200px;" src="https://i2.ex-cdn.com/homeaz.vn/files/content/2022/09/18/giuong-ngu-go-tu-nhien-hien-dai-nhieu-kich-thuoc-moho-vline-601-homeazvn-6-1638.jpg" </li>',
  review: 13,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>'
};
let accessory11 = {
  ma: 11,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2022/09/18/giuong-go-tram-tu-nhien-ma-nau-nhieu-kich-thuoc-moho-vline-601-homeazvn203652476.jpg",
  ten: "Giường gỗ tràm tự nhiên màu nâu nhiều",
  gia: "5.990.000đ - 7.990.000đ",
  giagoc: "",
  tlgiam: "-20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "MBBANK GIẢM 100K",
  hang: "",
  uudaithem: "- Nhập mã NOITHAT12 giảm 20% tối đa 100.000đ khi thanh toán quét trên 2 triệu đồng",
  dacdiemnoibat:
    '<li> Trang trí TD48 có thiết kế bắt mắt gồm các kệ hình vuông lồng nhau. Thay vì là những chiếc giá lớn thì sản phẩm gồm nhiều kệ nhỏ có kích thước đa dạng, mỗi kệ lại là 1 mảnh ghép của 1 chiếc kệ lớn hơn, để bạn có thể thỏa sức sáng tạo bức tranh ghép của mình, tạo cho mình chiếc kệ trang trí treo tường riêng theo ý muốn. Sản phẩm dễ dàng thi công tại nhà, bạn có thể dễ dàng tháo lắp với ốc vít đi kèm. </li>' +
    '<li> Trang trí treo tường 3 ô vuông lồng TD48 được làm từ chất liệu gỗ MDF lõi xanh cao cấp, với khả năng chịu lực tốt, chống mối mọt, ẩm mốc tuyệt đối, không cong vênh, co ngót. Bề mặt sản phẩm được phủ thêm 1 lớp melamine, tăng khả năng chống trầy xước, chống thấm, tạo tính thẩm mỹ cho sản phẩm. Kệ có tuổi thọ lâu dài, giúp tiết kiệm chi phí cho gia đình bạn. Bộ kệ trang trí treo tường TD48 phù hợp với nhiều không gian, từ phòng ngủ, phòng khách đến phòng ăn, phòng làm việc,... </li>' +
    '<img style="margin-left: 200px;" src="https://i2.ex-cdn.com/homeaz.vn/files/content/2022/09/18/giuong-go-tram-tu-nhien-ma-nau-nhieu-kich-thuoc-moho-vline-601-homeazvn-11-2258.jpg" </li>',
  review: 13,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>'
};
let accessory12 = {
  ma: 12,
  img: "https://i2.ex-cdn.com/homeaz.vn/files/sanpham/2021/01/06/ghe-xich-du-may-gia-re-tang-kem-nem-homeazvn-4165656239.png",
  ten: "Ghế xích đu mây giá rẻ 100% mây tự nhiên tặng kèm",
  gia: "7.000.000 đ ",
  giagoc: "",
  tlgiam: "-20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "MBBANK GIẢM 100K",
  hang: "",
  uudaithem: "- Nhập mã NOITHAT12 giảm 20% tối đa 100.000đ khi thanh toán quét trên 2 triệu đồng",
  dacdiemnoibat:
    '<li> Trang trí TD48 có thiết kế bắt mắt gồm các kệ hình vuông lồng nhau. Thay vì là những chiếc giá lớn thì sản phẩm gồm nhiều kệ nhỏ có kích thước đa dạng, mỗi kệ lại là 1 mảnh ghép của 1 chiếc kệ lớn hơn, để bạn có thể thỏa sức sáng tạo bức tranh ghép của mình, tạo cho mình chiếc kệ trang trí treo tường riêng theo ý muốn. Sản phẩm dễ dàng thi công tại nhà, bạn có thể dễ dàng tháo lắp với ốc vít đi kèm. </li>' +
    '<li> Trang trí treo tường 3 ô vuông lồng TD48 được làm từ chất liệu gỗ MDF lõi xanh cao cấp, với khả năng chịu lực tốt, chống mối mọt, ẩm mốc tuyệt đối, không cong vênh, co ngót. Bề mặt sản phẩm được phủ thêm 1 lớp melamine, tăng khả năng chống trầy xước, chống thấm, tạo tính thẩm mỹ cho sản phẩm. Kệ có tuổi thọ lâu dài, giúp tiết kiệm chi phí cho gia đình bạn. Bộ kệ trang trí treo tường TD48 phù hợp với nhiều không gian, từ phòng ngủ, phòng khách đến phòng ăn, phòng làm việc,... </li>' +
    '<img style="margin-left: 200px;" src="https://i2.ex-cdn.com/homeaz.vn/files/content/2021/01/06/ghe-xich-du-may-gia-re-tang-kem-nem-homeazvn-1657.jpg" </li>',
  review: 13,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory13 = {
  ma: 13,
  img: "../img/accessory/accessory13/acs13.jpeg",
  ten: "Tai nghe Bluetooth AirPods Pro Wireless Charge Apple MWP22",
  gia: "4.890.000₫",
  giagoc: "6.790.000₫",
  tlgiam: " -27%",
  qua: "",
  khuyenmai: "Giảm ngay <b>200.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD5 giảm 5% tối đa 400.000đ cho đơn hàng từ 500.000đ trở lên khi thanh toán qua Ví Moca trên ứng dụng Grab",
  dacdiemnoibat:
    '<li>Thiết kế in-ear hoàn toàn mới và độc đáo.</li>' +
    '<li>Tích hợp công nghệ <b>chống ồn chủ động</b> (Active Noise Cancellation).</li>' +
    '<li>Chip H1 mạnh mẽ, xử lý âm thanh kỹ thuật số với <b>độ trễ gần như bằng không</b>.</li>' +
    '<li>Nghe nhạc đến 4.5 giờ khi bật chống ồn, 5 giờ khi tắt chống ồn.</li>' +
    '<li>Sử dụng song song với hộp sạc có thể dùng được đến 24 giờ nghe nhạc.</li>' +
    '<li>Hỗ trợ sạc nhanh, cho thời gian <b>sử dụng đến 1 giờ chỉ với 5 phút sạc</b>.</li>' +
    '<li>Hộp sạc <b>hỗ trợ sạc không dây</b> chuẩn Qi, tiện lợi khi sạc lại.</li>' +
    '<li>Trang bị <b>chuẩn chống nước IPX4</b>, bảo vệ tai nghe an toàn dưới mưa nhỏ và mồ hôi.</li>' +
    '<li>Sản phẩm chính hãng Apple, nguyên seal 100%.</li>',
  review: 57,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory14 = {
  ma: 14,
  img: "../img/accessory/accessory14/acs14.jpeg",
  ten: "Ốp lưng MagSafe iPhone 13 Pro Nhựa dẻo Apple",
  gia: "795.000₫",
  giagoc: "1.590.000₫",
  tlgiam: " -50%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD5 giảm 5% tối đa 400.000đ cho đơn hàng từ 1.000.000đ trở lên khi thanh toán qua Ví Moca trên ứng dụng Grab",
  dacdiemnoibat:
    '<li>Tạo phong cách trẻ trung cho bạn với tông xanh tươi tắn.</li>' +
    '<li>Sạc pin đơn giản hơn nhờ tương thích sạc không dây <b>MagSafe</b>.</li>' +
    '<li>Hình dạng ốp lưng hoàn toàn vừa vặn với dòng <b>iPhone 13 Pro</b>.</li>' +
    '<li>Làm bằng <b>nhựa dẻo</b> cho phụ kiện bền đẹp, tháo lắp dễ dàng khi cần.</li>' +
    '<li>Uy tín về chất lượng với sản phẩm 100% chính hãng Apple.</li>',
  review: 2,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>'
};
let accessory15 = {
  ma: 15,
  img: "../img/accessory/accessory15/acs15.jpeg",
  ten: "Tai nghe nhét trong EarPods Lightning Apple MMTN2",
  gia: "632.000₫",
  giagoc: "790.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD10 giảm 10% tối đa 10.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat:
    '<li>Thiết kế hiện đại, đầu tai nghe tròn theo hình dáng của tai.</li>' +
    '<li>Có phím điều chỉnh âm lượng, nghe/nhận cuộc gọi.</li>' +
    '<li>Cổng lightning phù hợp với đa số iPhone, iPad...</li>' +
    '<li>Sản phẩm chính hãng nguyên seal 100%.</li>',
  review: 52,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory16 = {
  ma: 16,
  img: "../img/accessory/accessory16/acs16.jpeg",
  ten: "Ốp lưng iPhone 11 Nhựa dẻo Spigen Crystal Hybrid Quartz",
  gia: "503.000₫",
  giagoc: "839.000₫",
  tlgiam: " -40%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD10 giảm 10% tối đa 10.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat:
    '<li>Kiểu dáng thời trang và đẹp mắt.</li>' +
    '<li>Thiết kế vừa vặn và ôm sát thân máy.</li>' +
    '<li>Dễ dàng tháo/lắp ốp vào máy.</li>',
  review: 20,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>'
};
let accessory17 = {
  ma: 17,
  img: "../img/accessory/accessory17/acs17.jpeg",
  ten: "Chuột Bluetooth Apple MK2E3 Trắng",
  gia: "1.992.000₫",
  giagoc: "2.490.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>100.000₫</b>",
  tinhtrang: "NEW",
  title: "SALE LỚN",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat:
    '<li>Công nghệ <b>Multi-Touch</b>, cổng sạc <b>Lightning</b>.</li>' +
    '<li>Thiết kế siêu nhẹ và tính ứng dụng cao hơn.</li>' +
    '<li>Sản phẩm nhỏ gọn, trọng lượng chỉ khoảng <b>80 g, bề mặt đa cảm ứng</b> giúp cho bạn sử dụng nhanh nhạy đa điểm hơn.</li>' +
    '<li>Tương thích máy Mac hỗ trợ Bluetooth với <b>hệ điều hành Mac OS</b>.</li>' +
    '<li><b>Sản phẩm chính hãng Apple.</b></li>',
  review: 5,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>'
};
let accessory18 = {
  ma: 18,
  img: "../img/accessory/accessory18/acs18.jpeg",
  ten: "Xmobile P66D",
  gia: "600.000₫",
  giagoc: "750.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "X-mobile",
  uudaithem: "- FREEship đơn hàng từ 1.000.000đ",
  dacdiemnoibat:
    '<li>Thiết kế <b>gọn nhẹ</b>, lớp vỏ nhám <b>chống trơn trượt</b>.</li>' +
    '<li>Chuẩn Qi tương thích với các thiết bị có sạc không dây</li>' +
    '<li><b>Dung lượng pin 10.000 mAh</b>, hiệu suất sạc 65%.</li>' +
    '<li>Hỗ trợ 2 cổng ra (output) Type-C PD: 5V - 3A, 9V - 2A, 12V - 1.5A, USB: 5V - 3A, 9V - 2A, 12V - 1.5A.</li>' +
    '<li>Công nghệ sạc thông minh Power Delivery <b>điều chỉnh dòng điện</b> phù hợp với các thiết bị, <b>giúp sạc nhanh hơn, hiệu quả hơn</b>.</li>' +
    '<li>Cổng sạc nhanh USB Quick Charge 3.0 tương thích với nhiều thiết bị.</li>' +
    '<li><b>Công suất sạc không dây 10 W, sạc nhanh lên tới 18 W.</b></li>' +
    '<li>Trang bị 2 cổng sạc vào (input) Micro USB và Type C giúp cho việc lựa chọn cáp sạc dễ dàng hơn.</li>' +
    '<li>Đèn <b>led thông báo tình trạng pin</b>, mỗi vạch tương ứng với 25% mức pin.</li>',
  review: 103,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory19 = {
  ma: 19,
  img: "../img/accessory/accessory19/acs19.jpeg",
  ten: "Xmobile PowerLite P106WD",
  gia: "600.000₫",
  giagoc: "750.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 50K",
  hang: "X-mobile",
  uudaithem: "- FREEship đơn hàng từ 1.000.000đ",
  dacdiemnoibat:
    '<li>Thiết kế gọn nhẹ, chất liệu Fabric phủ lên mặt trước giúp chống bám vân tay, hạn chế trầy xước.</li>' +
    '<li>Trang bị cổng sạc nhanh Type C Power Delivery cho cả 2 cổng ra và cổng vào.</li>' +
    '<li>Cổng ra USB trang bị sạc nhanh Quick Charge 3.0.</li>' +
    '<li>Lõi pin Polymer chất lượng cao, dung lượng lớn 10.000 mAh.</li>' +
    '<li>Sạc cho nhiều loại điện thoại và máy tính bảng. </li>',
  review: 40,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory20 = {
  ma: 20,
  img: "../img/accessory/accessory20/acs20.jpeg",
  ten: "Samsung EB-P3300",
  gia: "891.000₫",
  giagoc: "990.000₫",
  tlgiam: " -10%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Samsung",
  uudaithem: "- Nhập mã THAD5 giảm 5% tối đa 400.000đ cho đơn hàng từ 500.000đ trở lên khi thanh toán qua Ví Moca trên ứng dụng Grab",
  dacdiemnoibat:
    '<li>Thiết kế nhỏ gọn, mỏng, trọng lượng nhẹ.</li>' +
    '<li>Trang bị công nghệ sạc nhanh <b>Super Fast Charging</b> và <b>Power Delivery</b>.</li>' +
    '<li>Dung lượng pin cao 10.000 mAh, lõi pin Polymer an toàn.</li>' +
    '<li>Nguồn ra tối đa cổng Type C 25W, cổng USB 18W.</li>' +
    '<li>Tương thích với nhiều loại thiết bị.</li>',
  review: 16,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory21 = {
  ma: 21,
  img: "../img/accessory/accessory21/acs21.jpeg",
  ten: "HyperJuice HJ-WL61TC",
  gia: "872.000₫",
  giagoc: "1.090.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>70.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Hyper",
  uudaithem: "- FREEship đơn hàng từ 1.000.000đ",
  dacdiemnoibat:
    '<li><b>Sạc không dây</b> với phụ kiện từ tính an toàn.</li>' +
    '<li>Sạc dự phòng Hyper có thể sạc cùng lúc 2 thiết bị (không dây + USB-C).</li>' +
    '<li>Hỗ trợ sạc không dây thông qua ngay cả khi pin hết dung lượng.</li>' +
    '<li>Đèn LED chỉ báo mức pin.</li>',
  review: 103,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>'
};
let accessory22 = {
  ma: 22,
  img: "../img/accessory/accessory22/acs22.jpeg",
  ten: "Xmobile PowerBox P72D",
  gia: "720.000₫",
  giagoc: "900.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>70.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "X-mobile",
  uudaithem: "- Nhập mã THAD100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat:
    '<li>Thiết kế hiện đại, chất liệu Fabric bao phủ giúp chống bám vân tay, hạn chế trầy xước hiệu quả.</li>' +
    '<li>Hỗ trợ 3 cổng ra (output) Type C Power Delivery và USB <b>Quick Charge 3.0</b> giúp sạc nhanh, an toàn với nhiều thiết bị.</li>' +
    '<li>2 cổng vào (input) Micro USB và Type C giúp cho việc lựa chọn cáp sạc dễ dàng hơn.</li>' +
    '<li>Lõi pin Polymer độ bền cao, dung lượng lớn <b>15.000 mAh</b>.</li>' +
    '<li>Sạc nhanh cho nhiều loại điện thoại và máy tính bảng.</li>',
  review: 44,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory23 = {
  ma: 23,
  img: "../img/accessory/accessory23/acs23.jpeg",
  ten: "Anker PowerCore Essential A1287",
  gia: "1.260.000₫",
  giagoc: "1.400.000₫",
  tlgiam: " -10%",
  qua: "",
  khuyenmai: "Giảm ngay <b>90.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 100K",
  hang: "Anker",
  uudaithem: "- Mua Đồng hồ thời trang giảm 40% cho Đồng hồ dưới 3 triệu, giảm 30% cho Đồng hồ từ 3 triệu trở lên",
  dacdiemnoibat:
    '<li>Hỗ trợ chuẩn <b>sạc nhanh Power Delivery</b> với công suất sạc tới <b>20 W</b>.</li>' +
    '<li>Sạc được nhiều thiết bị với dung lượng pin lớn đến <b>20.000 mAh</b>.</li>' +
    '<li>Lõi pin Polymer tuổi thọ cao, có đèn báo dung lượng pin dễ quan sát. </li>' +
    '<li>Có <b>1 cổng ra/vào Type-C</b> và <b>1 cổng ra USB</b> thông dụng.</li>' +
    '<li>Kiểu dáng hiện đại, gọn gàng, thiết kế hạn chế trầy xước. </li>',
  review: 13,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>'
};
let accessory24 = {
  ma: 24,
  img: "../img/accessory/accessory24/acs24.jpeg",
  ten: "Belkin Pocket Powver BPB002",
  gia: "1.520.000₫",
  giagoc: "1.900.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>100.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Belkin",
  uudaithem: "- Mua Đồng hồ thời trang giảm 40% cho Đồng hồ dưới 3 triệu, giảm 30% cho Đồng hồ từ 3 triệu trở lên",
  dacdiemnoibat:
    '<li>Thiết kế chắc chắn, có <b>2 phiên bản màu</b>: đen, trắng.</li>' +
    '<li>Dung lượng pin lớn <b>20.000 mAh</b>, lõi pin <b>Polymer</b> an toàn.</li>' +
    '<li>Cổng <b>Type C</b> trang bị công nghệ sạc nhanh <b>Power Delivery 30W</b> cho cả nguồn ra và nguồn vào.</li>' +
    '<li>Tương thích với nhiều loại điện thoại và máy tính bảng.</li>',
  review: 3,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>'
};
let accessory25 = {
  ma: 25,
  img: "../img/accessory/accessory25/acs25.jpeg",
  ten: "Belkin Pocket Power BP001",
  gia: "760.000₫",
  giagoc: "950.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 50K",
  hang: "Belkin",
  uudaithem: "- FREEship đơn hàng từ 1.000.000đ",
  dacdiemnoibat:
    '<li>Thiết kế chắc chắn, thời trang.</li>' +
    '<li>Dung lượng pin lớn <b>10.000 mAh</b>, lõi pin <b>Polymer</b> an toàn.</li>' +
    '<li>Cổng <b>Type C</b> trang bị công nghệ sạc nhanh <b>Power Delivery 18 W</b> cho cả nguồn ra và nguồn vào.</li>' +
    '<li>Tương thích với nhiều loại điện thoại và máy tính bảng.</li>',
  review: 43,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory26 = {
  ma: 26,
  img: "../img/accessory/accessory26/acs26.jpeg",
  ten: "Energizer QE10007PQ",
  gia: "800.000₫",
  giagoc: "1.000.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "X-mobile",
  uudaithem: "- Mua Đồng hồ thời trang giảm 40% cho Đồng hồ dưới 3 triệu, giảm 30% cho Đồng hồ từ 3 triệu trở lên",
  dacdiemnoibat:
    '<li>Thiết kế vỏ nhựa, kích thước nhỏ gọn.</li>' +
    '<li>Hỗ trợ sạc thông minh Power Delivery 18W, <b>sạc đầy 50% pin trong vòng 30 phút</b>, giúp sạc nhanh cho các thiết bị.</li>' +
    '<li>Công nghệ thông minh Multi Protocol Fast Charging (Sạc nhanh đa nền tảng), <b>hỗ trợ tất cả các chuẩn sạc nhanh</b>.</li>' +
    '<li>Tích hợp cổng ra (Ouput) USB-C, USB & <b>Sạc không dây Qi 10W</b>.</li>' +
    '<li>Cổng vào (Input) Type - C giúp sạc cho pin nhanh chóng hơn.</li>' +
    '<li>Tích hợp công nghệ Auto Voltage Sensing - Tự động cảm biến điện áp giúp <b>tương thích với mọi thiết bị di động</b>.</li>' +
    '<li><b>Chứng nhận về an toàn & chống cháy nổ</b>: CE, FCC, ETL, CB, EAC, RoHS, Reach, ERP6, DOE6.</li>',
  review: 25,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory27 = {
  ma: 27,
  img: "../img/accessory/accessory27/acs27.jpeg",
  ten: "Sạc 4 cổng Xmobile DS931-WB",
  gia: "199.000₫",
  giagoc: "450.000₫",
  tlgiam: " -55%",
  qua: "",
  khuyenmai: "Giảm ngay <b>20.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "X-mobile",
  uudaithem: "- FREEship đơn hàng từ 500.000đ",
  dacdiemnoibat:
    '<li>Thiết kế chắc chắn, tiện dụng.</li>' +
    '<li>Trang bị 3 cổng USB và 1 cổng Type C vô cùng tiện lợi.</li>' +
    '<li><b>Sạc riêng lẻ</b> nguồn ra 3 cổng USB: 5V - 2.4A, cổng Type C: 5V - 3A.</li>' +
    '<li>Sạc đồng thời cả 4 cổng nguồn ra Max: 5V - 4.8A.</li>' +
    '<li><b>Sạc được cho nhiều loại thiết bị</b>: Điện thoại, máy tính bảng, pin dự phòng, loa bluetooth,..</li>' +
    '<li>Sử dụng kèm các loại cáp như: Micro USB, Lightning, Type C.</li>',
  review: 4,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory28 = {
  ma: 28,
  img: "../img/accessory/accessory28/acs28.jpeg",
  ten: "Sạc Samsung EP-TA800N",
  gia: "490.000₫",
  giagoc: "",
  tlgiam: "",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 50K",
  hang: "Samsung",
  uudaithem: "- Nhập mã THAD100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat:
    '<li>Kiểu dáng nhỏ gọn, mang theo tiện lợi. </li>' +
    '<li>Sạc thường với đầu ra <b>Type-C 5V/3A, sạc nhanh PDO: 9V/2.77A, PPS: 3.3 - 5.9V/3A hoặc 3.3 - 11V/2.25A.</b></li>' +
    '<li>Tích hợp công nghệ <b>Power Delivery</b> sạc nhanh đến <b>25W</b>.</li>' +
    '<li>Tương thích tốt với nhiều thiết bị, cáp sạc.</li>',
  review: 34,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>'
};
let accessory29 = {
  ma: 29,
  img: "../img/accessory/accessory29/acs29.jpeg",
  ten: "Sạc OPPO VCA7JAUH",
  gia: "686.000₫",
  giagoc: "980.000₫",
  tlgiam: " -30%",
  qua: "",
  khuyenmai: "Giảm ngay <b>20.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Oppo",
  uudaithem: "- FREEship đơn hàng từ 1.000.000đ",
  dacdiemnoibat:
    '<li>Thiết kế tinh tế với tông màu trắng sang trọng.</li>' +
    '<li>Công nghệ sạc nhanh <b>SuperVOOC</b> cho dòng sạc tối đa <b>65 W</b>.</li>' +
    '<li>Sử dụng cổng ra <b>USB 10V - 6.5A</b> thông dụng.</li>' +
    '<li>Tương thích với nhiều thiết bị cáp, sạc.</li>',
  review: 4,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>'
};
let accessory30 = {
  ma: 30,
  img: "../img/accessory/accessory30/acs30.jpeg",
  ten: "Sạc 2 cổng Anker Powerport Speed 2",
  gia: "730.000₫",
  giagoc: "730.000₫",
  tlgiam: " -25%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 50K",
  hang: "Anker",
  uudaithem: "- Nhập mã THAD5 giảm 5% tối đa 400.000đ cho đơn hàng từ 500.000đ trở lên khi thanh toán qua Ví Moca trên ứng dụng Grab",
  dacdiemnoibat:
    '<li>Thiết kế nhỏ gọn, hiện đại.</li>' +
    '<li>Hỗ trợ sạc nhanh với dòng sạc tối đa đến <b>20W</b>.</li>' +
    '<li>2 cổng ra USB, giúp sạc cùng lúc 2 thiết bị với tốc độ ổn định.</li>' +
    '<li>Công nghệ <b>Quick Charge 3.0</b>, sạc 80% pin chỉ trong 35 phút (thiết bị được sạc phải hỗ trợ Quick Charge 3.0).</li>' +
    '<li>Trang bị chip thông minh PowerIQ và công nghệ <b>VoltageBoost</b>, giúp sạc cho mọi thiết bị với tốc độ nhanh nhất có thể.</li>' +
    '<li>Chất liệu nhựa cao cấp cho độ bền cao, cách điện tốt, đảm bảo an toàn.</li>',
  review: 107,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>'
};
let accessory31 = {
  ma: 31,
  img: "../img/accessory/accessory31/acs31.jpeg",
  ten: "Đế sạc không dây AUKEY LC-C6",
  gia: "354.000₫",
  giagoc: "590.000₫",
  tlgiam: " -40%",
  qua: "",
  khuyenmai: "Giảm ngay <b>20.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "AUKEY",
  uudaithem: "- FREEship đơn hàng từ 500.000đ",
  dacdiemnoibat:
    '<li>Thiết kế nhỏ gọn, tiện lợi, không chiếm quá nhiều diện tích khi đặt trên bàn.</li>' +
    '<li>Với chuẩn <b>sạc không dây Qi</b>, <b>có tốc độ sạc nhanh</b> cho các thiết bị tương thích chuẩn sạc Qi 10W.</li>' +
    '<li>Bộ sạc không dây được trang bị jack cắm Micro USB, sử dụng cáp Micro USB thông dụng.</li>' +
    '<li>Dây cáp dài <b>1 m</b>, cho bạn dễ dàng sử dụng và cuốn gọn khi mang theo khi cần.</li>',
  review: 1,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let accessory32 = {
  ma: 32,
  img: "../img/accessory/accessory32/acs32.jpeg",
  ten: "Cáp Type C - Type C 2m Hydrus DS465",
  gia: "200.000₫",
  giagoc: "",
  tlgiam: "",
  qua: "",
  khuyenmai: "Giảm ngay <b>10.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 20K",
  hang: "Hydrus",
  uudaithem: "- FREEship đơn hàng từ 300.000đ",
  dacdiemnoibat:
    '<li>Cáp sạc có chiều dài <b>2 m</b>.</li>' +
    '<li>Cả đầu vào và đầu ra đều có dạng giao tiếp là <b>Type-C</b>.</li>' +
    '<li>Sạc nhanh chóng với công suất tối đa lên đến <b>60 W</b>.</li>' +
    '<li>Hỗ trợ với nhiều mức điện áp khác nhau 5V - 3A, 9V - 2A, 12V - 3A, 15V - 3A, 20V - 3A.</li>',
  review: 5,
  danhgia2: '<div>' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>'
};

let products1 = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24];
let products2 = [product2, product1, product5, product7, product4, product6, product8, product3];
let apple = [product1, product4, product12];
let products_giamgia1 = [product13, product14, product15, product16, product17]
let products_giamgia2 = [accessory1, accessory2, accessory12, accessory11, accessory6]
let products_giamgia3 = [product19, product18, product20, product21, product22]
let product_noibat = [product1, product4, product15, product7, product2, product9, product20, product8, product19, product6]

let accessorys1 = [accessory1, accessory2, accessory3, accessory4, accessory5, accessory6, accessory7, accessory8, accessory9, accessory10, accessory11, accessory12, accessory13, accessory14, accessory15, accessory16, accessory17, accessory18, accessory19, accessory20, accessory21, accessory22, accessory23, accessory24, accessory25, accessory26, accessory27, accessory28, accessory29, accessory30, accessory31, accessory32]
let accessorys2 = [accessory1, accessory2, accessory3, accessory4, accessory5, accessory6, accessory7, accessory8, accessory9, accessory10]
let acsApple = [accessory1, accessory2, accessory5, accessory6, accessory11, accessory13, accessory14, accessory15, accessory16, accessory17]
let acsPinSacDuPhong = [accessory9, accessory18, accessory19, accessory20, accessory21, accessory22, accessory23, accessory24, accessory25, accessory26]
let acsCapSac = [accessory6, accessory4, accessory7, accessory10, accessory27, accessory28, accessory29, accessory30, accessory31, accessory32]

function hienthiChiTiet(ma) {
  let sp = products1.find(spTemp => spTemp.ma === ma);
  localStorage.setItem("ma", sp.ma);
  localStorage.setItem("hinhanh", sp.img);
  localStorage.setItem("ten", sp.ten);
  localStorage.setItem("gia", sp.gia);
  localStorage.setItem("star1", sp.star1);
  localStorage.setItem("star2", sp.star2);
  localStorage.setItem("star3", sp.star3);
  localStorage.setItem("star4", sp.star4);
  localStorage.setItem("star5", sp.star5);
  localStorage.setItem("hang", sp.hang);
  localStorage.setItem("loai", sp.loai);
  localStorage.setItem("kichthuoc", sp.kinhthuoc);
  localStorage.setItem("pin", sp.pin);
  localStorage.setItem("hedieuhanh", sp.hedieuhanh);
  localStorage.setItem("ram", sp.ram);
  localStorage.setItem("rom", sp.rom);
  localStorage.setItem("camerasau", sp.camerasau);
  localStorage.setItem("cameratruoc", sp.cameratruoc);
  localStorage.setItem("sim", sp.sim);
  localStorage.setItem("review", sp.review);
  localStorage.setItem("chip", sp.chip);
  localStorage.setItem("danhgia", sp.danhgia);
  localStorage.setItem("data_tieude", sp.data_tieude);
  localStorage.setItem("data_noibat", sp.data_noibat);
  localStorage.setItem("data_chitiet", sp.data_chitiet);
  localStorage.setItem("img_chitiet", sp.img_chitiet);
}

function hienthiChiTietPhuKien(ma) {
  let acs = accessorys1.find(acsTemp => acsTemp.ma === ma);
  localStorage.setItem("ma", acs.ma);
  localStorage.setItem("hinhanh", acs.img);
  localStorage.setItem("ten", acs.ten);
  localStorage.setItem("gia", acs.gia);
  localStorage.setItem("hang", acs.hang);
  localStorage.setItem("loai", acs.loai);
  localStorage.setItem("review", acs.review);
  localStorage.setItem("danhgia", acs.danhgia);
  localStorage.setItem("danhgia2", acs.danhgia2);
  localStorage.setItem("tinhtrang", acs.tinhtrang);
  localStorage.setItem("dacdiemnoibat", acs.dacdiemnoibat);
  localStorage.setItem("uudaithem", acs.uudaithem);
  localStorage.setItem("khuyenmai", acs.khuyenmai);
};

//-----------Load sản phẩm lên trang sản phẩm-----------
$(document).ready(function () {
  function displayProduct(product) {
    let productx =
      "<div class='col-lg-3 temp'>" +
      "<a href='ChiTietNoiThat.html' onclick='hienthiChiTiet(" + product.ma + ");' class='nav-link'>" +
      "<img src='" + product.img + "' alt='" + product.ten + "'>" +
      "<h3 >" + product.ten + "</h3>" +
      "<p style='font-size: 20px; color: black; font-weight: bold; line-height: 15px; text-align: center;'>" + product.gia + "</p>" +
      "<div class='rating' style='font-size: 20px; padding-left: 18px; margin-bottom: 40px'>" +
      product.danhgia +
      "</div>" +
      "</a>" +
      "</div>";

    $(".pro").append(productx);
  }
  products1.forEach(displayProduct);
});

//-----------Load phẩm trang Index
$(document).ready(function () {
  function displayProduct(product) {
    let producty =
      "<div class='slider-product-one-content-item'>" +
      '<a href="ChiTietNoiThat.html" onclick="hienthiChiTiet(' + product.ma + ');" class="nav-link">' +
      '<img src="' + product.img + '" alt=""></a>' +
      '<div class="slider-product-one-content-item-text">' +
      '<li><img src="../img/icon1.png" alt="">' +
      '<p>' + product.title + '</p>' +
      '</li>' +
      '<li>' + product.ten + '</li>' + '<li>' + '</li>' +
      '<li><a href="">' + product.giagoc + '</a><span>' + '&nbsp' + product.tlgiam + '</span></li>' +
      '<li>' + product.gia + '</li>' +
      '<li>' + product.qua + '</li>' +
      '<li>' +
      product.danhgia2 +
      '</li>' +
      '</div>' +
      '</div>'

    $(".pro2").append(producty);
  }
  products_giamgia1.forEach(displayProduct);
});

$(document).ready(function () {
  function displayProduct(accessory) {
    let accessoryy =
      "<div class='slider-product-one-content-item'>" +
      '<a href="ChiTietNoiThatKhac.html" onclick="hienthiChiTietNoiThatKhac(' + accessory.ma + ');" class="nav-link">' +
      '<img src="' + accessory.img + '" alt=""></a>' +
      '<div class="slider-product-one-content-item-text">' +
      '<li><img src="../img/icon1.png" alt="">' +
      '<p>' + accessory.title + '</p>' +
      '</li>' +
      '<li>' + accessory.ten + '</li>' + '<li>' + '</li>' +
      '<li><a href="">' + accessory.giagoc + '</a><span>' + accessory.tlgiam + '</span></li>' +
      '<li>' + accessory.gia + '</li>' +
      '<li>' + accessory.qua + '</li>' +
      '<li>' +
      accessory.danhgia2 +
      '</li>' +
      '</div>' +
      '</div>'

    $(".pro3").append(accessoryy);
  }
  products_giamgia2.forEach(displayProduct);
});

$(document).ready(function () {
  function displayProduct(product) {
    let productz =
      "<div class='slider-product-one-content-item'>" +
      '<a href="ChiTietNoiThat.html" onclick="hienthiChiTiet(' + product.ma + ');" class="nav-link">' +
      '<img src="' + product.img + '" alt=""></a>' +
      '<div class="slider-product-one-content-item-text">' +
      '<li><img src="../img/icon1.png" alt="">' +
      '<p>' + product.title + '</p>' +
      '</li>' +
      '<li>' + product.ten + '</li>' + '<li>' + '</li>' +
      '<li><a href="">' + product.giagoc + '</a><span>' + product.tlgiam + '</span></li>' +
      '<li>' + product.gia + '</li>' +
      '<li>' + product.qua + '</li>' +
      '<li>' +
      product.danhgia2 +
      '</li>' +
      '</div>' +
      '</div>'

    $(".pro5").append(productz);
  }
  products_giamgia3.forEach(displayProduct);
});

$(document).ready(function () {
  function displayProduct(product) {
    let producty =
      '<div class="product-gallery-one-content-product-item">' +
      '<a href="ChiTietNoiThat.html" onclick="hienthiChiTiet(' + product.ma + ');">' +
      '<img src="' + product.img + '" alt=""></a>' +
      '<div class="product-gallery-one-content-product-item-text">' +
      '<li><img src="../img/icon1.png" alt="">' +
      '<p>' + product.title + '</p>' +
      '</li>' +
      '<li>' + product.ten + '</li>' +
      '<li>' + '</li>' +
      '<li><del style="font-size: 14px;">' + product.giagoc + '</del>' + product.tlgiam + '</li>' +
      '<li>' + product.gia + '</li>' +
      '<li>' + product.qua + '</li>' +
      '<li>' +
      product.danhgia2 +
      '<i><span style="color: black; font-size: 12px;">' + '&nbsp <sup>' + product.review + '</sup></span></i>' +
      '</li>' +
      '</div>' +

      '</div>'

    $(".pro4").append(producty);
  }
  product_noibat.forEach(displayProduct);
});
//-------Load Phụ Kiện Trang Index-------
$(document).ready(function () {
  function displayProduct(accessory) {
    let accessoryx =
      '<div class="product-gallery-three-content-product-item">' +
      '<a href="ChiTietNoiThatKhac.html" onclick="hienthiChiTietNoiThatKhac(' + accessory.ma + ');" class="nav-link">' +
      '<img src="' + accessory.img + '" alt="">' +
      '</a>' +
      '<div class="product-gallery-three-content-product-item-text">' +
      '<li><img src="../img/icon1.png" alt="">' +
      '<p>' + accessory.title + '</p>' +
      '</li>' +
      '<li>' + accessory.ten + '</li>' +
      '<li>' + accessory.qua + '</li>' +
      '<li><del style="font-size: 14px;">' + accessory.giagoc + '</del>' + accessory.tlgiam + '</li>' +
      '<li>' + accessory.gia + '</li>' +
      '<li>' +
      accessory.danhgia +
      '<i><sup style="color: black; font-size: 10px;">' + '&nbsp&nbsp' + accessory.review + '</sup></i>' +
      '</li>' +
      '</div>' +
      '</div>'

    $(".acs1").append(accessoryx);
  }
  accessorys2.forEach(displayProduct);
});
//-------Load Phụ Kiện Trang Phụ Kiện-------
$(document).ready(function () {
  function displayAcsApple(acsApple) {
    let acsApplex =
      '<div class="product-gallery-three-content-product-item">' +
      '<a href="ChiTietNoiThatKhac.html" onclick="hienthiChiTietNoiThatKhac(' + acsApple.ma + ');" class="nav-link"><img src="' + acsApple.img + '" alt="" ></a>' +
      '<div class="product-gallery-three-content-product-item-text">' +
      '<li><img src="../img/icon1.png" alt=""><p>' + acsApple.title + '</p></li> ' +
      '<li>' + acsApple.ten + '</li>' +
      '<li> </li>' +
      '<li><del style="font-size: 14px;">' + acsApple.giagoc + '</del>' + acsApple.tlgiam + '</li>' +
      '<li>' + acsApple.gia + '</li>' +
      '<li>' +
      acsApple.danhgia +
      '<i><sup style="color: black; font-size: 10px;">' + '&nbsp&nbsp' + acsApple.review + '</sup></i>' +
      '</li>' +
      '</div>' +
      '</div>'
    $(".acsApple").append(acsApplex);
  }
  acsApple.forEach(displayAcsApple);
});

$(document).ready(function () {
  function displayAcsPinSacDuPhong(acsPinSacDuPhong) {
    let acsPinSacDuPhongx =
      '<div class="product-gallery-three-content-product-item">' +
      '<a href="ChiTietNoiThatKhac.html" onclick="hienthiChiTietNoiThatKhac(' + acsPinSacDuPhong.ma + ');" class="nav-link"><img src="' + acsPinSacDuPhong.img + '" alt="" ></a>' +
      '<div class="product-gallery-three-content-product-item-text">' +
      '<li><img src="../img/icon1.png" alt=""><p>' + acsPinSacDuPhong.title + '</p></li> ' +
      '<li>' + acsPinSacDuPhong.ten + '</li>' +
      '<li> </li>' +
      '<li><del style="font-size: 14px;">' + acsPinSacDuPhong.giagoc + '</del>' + acsPinSacDuPhong.tlgiam + '</li>' +
      '<li>' + acsPinSacDuPhong.gia + '</li>' +
      '<li>' +
      acsPinSacDuPhong.danhgia +
      '<i><sup style="color: black; font-size: 10px;">' + '&nbsp&nbsp' + acsPinSacDuPhong.review + '</sup></i>' +
      '</li>' +
      '</div>' +
      '</div>'
    $(".acsPinSacDuPhong").append(acsPinSacDuPhongx);
  }
  acsPinSacDuPhong.forEach(displayAcsPinSacDuPhong);
});

$(document).ready(function () {
  function displayAcsCapSac(acsCapSac) {
    let acsCapSacx =
      '<div class="product-gallery-three-content-product-item">' +
      '<a href="ChiTietNoiThatKhac.html" onclick="hienthiChiTietNoiThatKhac(' + acsCapSac.ma + ');" class="nav-link"><img src="' + acsCapSac.img + '" alt="" ></a>' +
      '<div class="product-gallery-three-content-product-item-text">' +
      '<li><img src="../img/icon1.png" alt=""><p>' + acsCapSac.title + '</p></li> ' +
      '<li>' + acsCapSac.ten + '</li>' +
      '<li> </li>' +
      '<li><del style="font-size: 14px;">' + acsCapSac.giagoc + '</del>' + acsCapSac.tlgiam + '</li>' +
      '<li>' + acsCapSac.gia + '</li>' +
      '<li>' +
      acsCapSac.danhgia +
      '<i><sup style="color: black; font-size: 10px;">' + '&nbsp&nbsp' + acsCapSac.review + '</sup></i>' +
      '</li>' +
      '</div>' +
      '</div>'
    $(".acsCapSac").append(acsCapSacx);
  }
  acsCapSac.forEach(displayAcsCapSac);
});
/*
=============
Sự kiện xử lý hình ảnh bên phía trái
=============
 */
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const picContainer = document.querySelector(".product__pictures");
const zoom = document.getElementById("zoom");
const pic = document.getElementById("pic");

// Picture List
const picList = [pic1, pic2, pic3, pic4, pic5];

// Active Picture
let picActive = 1;

["mouseover", "touchstart"].forEach(event => {
  if (picContainer) {
    picContainer.addEventListener(event, e => {
      const target = e.target.closest("img");
      if (!target) return;
      const id = target.id.slice(3);
      changeImage(`../img/product${id}.jpeg`, id);
    });
  }
});

// change active image
const changeImage = (imgSrc, n) => {
  // change the main image
  pic.src = imgSrc;
  // change the background-image
  zoom.style.backgroundImage = `url(${imgSrc})`;
  //   remove the border from the previous active side image
  picList[picActive - 1].classList.remove("img-active");
  // add to the active image
  picList[n - 1].classList.add("img-active");
  //   update the active side picture
  picActive = n;
};


// =============
// Product Details Bottom
// =============

const btns = document.querySelectorAll(".detail-btn");
const detail = document.querySelector(".product-detail__bottom");
const contents = document.querySelectorAll(".content");

if (detail) {
  detail.addEventListener("click", e => {
    const target = e.target.closest(".detail-btn");
    if (!target) return;

    const id = target.dataset.id;
    if (id) {
      Array.from(btns).forEach(btn => {
        // remove active from all btn
        btn.classList.remove("active");
        e.target.closest(".detail-btn").classList.add("active");
      });
      // hide other active
      Array.from(contents).forEach(content => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

function taoDoiTuongSanPham(hinhanh, ten, gia, ma) {
  var product = new Object();
  product.hinhanh = hinhanh;
  product.ten = ten;
  product.gia = gia;
  product.ma = ma;
}

function chuyenDoiTuongThanhSanPhamHTMLGioHang(product) {
  product = tao

}

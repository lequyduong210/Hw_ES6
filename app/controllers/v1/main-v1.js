import { layThongTinTuForm } from "./controller-v1.js";

let themMon = () => {
    let data = layThongTinTuForm();
    console.log(data);
    // destructuring
    let {ma, ten, loai, gia, khuyenMai, tinhTrang, hinhAnh, moTa, tinhGKM} = data;
    // show data len layout
    document.getElementById("spMa").innerText = ma;
    document.getElementById("spTenMon").innerText = ten;
    document.getElementById("spLoaiMon").innerText = loai  == "loai1"?"Chay":"Mặn";
    document.getElementById("spGia").innerText = gia;
    document.getElementById("spKM").innerText = khuyenMai + "%";
    document.getElementById("spGiaKM").innerText = data.tinhGKM().toLocaleString();
    document.getElementById("spTT").innerText = tinhTrang == "0"?"Hết":"Còn";
    document.getElementById("spMoTa").innerText = moTa;
    document.getElementById("imgMonAn").src = hinhAnh;
}

window.themMon = themMon;
// có () => 1
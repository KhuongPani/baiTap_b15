function tinhKetQua() {
    const diemChuan = parseFloat(document.getElementById('diemChuan').value);
    const diemMon1 = parseFloat(document.getElementById('diemMon1').value);
    const diemMon2 = parseFloat(document.getElementById('diemMon2').value);
    const diemMon3 = parseFloat(document.getElementById('diemMon3').value);
    const khuVuc = document.getElementById('khuVuc').value;
    const doiTuong = parseInt(document.getElementById('doiTuong').value);

    let diemUuTienKhuVuc = 0;
    let diemUuTienDoiTuong = 0;

    switch (khuVuc.toUpperCase()) {
        case 'A':
            diemUuTienKhuVuc = 2;
            break;
        case 'B':
            diemUuTienKhuVuc = 1;
            break;
        case 'C':
            diemUuTienKhuVuc = 0.5;
            break;
        default:
            diemUuTienKhuVuc = 0;
    }

    switch (doiTuong) {
        case 1:
            diemUuTienDoiTuong = 2.5;
            break;
        case 2:
            diemUuTienDoiTuong = 1.5;
            break;
        case 3:
            diemUuTienDoiTuong = 1;
            break;
        default:
            diemUuTienDoiTuong = 0;
    }

    const tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

    let ketQua = '';
    if (tongDiem >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        ketQua = `Đậu với tổng điểm: ${tongDiem}`;
    } else {
        ketQua = `Rớt với tổng điểm: ${tongDiem}`;
    }

    document.getElementById('ketQua').innerText = ketQua;
}

function tinhTienDien() {
    const ten = document.getElementById('ten').value;
    const soKw = parseFloat(document.getElementById('soKw').value);

    let tienDien = 0;

    if (soKw <= 50) {
        tienDien = soKw * 500;
    } else if (soKw <= 100) {
        tienDien = (50 * 500) + ((soKw - 50) * 650);
    } else if (soKw <= 200) {
        tienDien = (50 * 500) + (50 * 650) + ((soKw - 100) * 850);
    } else if (soKw <= 350) {
        tienDien = (50 * 500) + (50 * 650) + (100 * 850) + ((soKw - 200) * 1100);
    } else {
        tienDien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((soKw - 350) * 1300);
    }

    document.getElementById('ketQuaTienDien').innerText = `${ten} cần trả số tiền điện là: ${tienDien} đồng`;
}

function tinhThueThuNhap() {
    const hoTen = document.getElementById('hoTen').value;
    const tongThuNhapNam = parseFloat(document.getElementById('tongThuNhapNam').value);
    const soNguoiPhuThuoc = parseInt(document.getElementById('soNguoiPhuThuoc').value);

    const thuNhapChiuThue = tongThuNhapNam - 4 - (soNguoiPhuThuoc * 1.6);

    let thueSuat = 0;

    if (thuNhapChiuThue <= 60) {
        thueSuat = 5;
    } else if (thuNhapChiuThue <= 120) {
        thueSuat = 10;
    } else if (thuNhapChiuThue <= 210) {
        thueSuat = 15;
    } else if (thuNhapChiuThue <= 384) {
        thueSuat = 20;
    } else if (thuNhapChiuThue <= 624) {
        thueSuat = 25;
    } else if (thuNhapChiuThue <= 960) {
        thueSuat = 30;
    } else {
        thueSuat = 35;
    }

    const thuePhaiTra = thuNhapChiuThue * (thueSuat / 100);

    document.getElementById('ketQuaThueThuNhap').innerText = `${hoTen} phải trả số tiền thuế là: ${thuePhaiTra} triệu đồng`;
}


document.getElementById('customerType').addEventListener('change', function() {
    var customerType = this.value;
    var businessFields = document.getElementById('businessFields');
    if (customerType === 'business') {
        businessFields.style.display = 'block';
    } else {
        businessFields.style.display = 'none';
    }
});

function calculateBill() {
    var customerType = document.getElementById('customerType').value;
    var customerId = document.getElementById('customerId').value;
    var channels = parseInt(document.getElementById('channels').value);
    var connections = 0;
    if (customerType === 'business') {
        connections = parseInt(document.getElementById('connections').value);
    }
    
    var totalBill = 0;

    if (customerType === 'residential') {
        totalBill = calculateResidentialBill(channels);
    } else if (customerType === 'business') {
        totalBill = calculateBusinessBill(connections, channels);
    }
    
    document.getElementById('result').textContent = `Mã khách hàng: ${customerId}, Tổng tiền: ${totalBill.toFixed(2)}$`;
}

function calculateResidentialBill(channels) {
    var processingFee = 4.5;
    var basicServiceFee = 20.5;
    var premiumChannelFee = 7.5 * channels;
    return processingFee + basicServiceFee + premiumChannelFee;
}

function calculateBusinessBill(connections, channels) {
    var processingFee = 15;
    var basicServiceFee = 75;
    var additionalConnectionFee = 0;
    if (connections > 10) {
        additionalConnectionFee = (connections - 10) * 5;
    }
    var premiumChannelFee = 50 * channels;
    return processingFee + basicServiceFee + additionalConnectionFee + premiumChannelFee;
}

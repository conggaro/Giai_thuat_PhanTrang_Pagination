// ví dụ cho cái mảng 98 phần tử
var arr = [];

// thêm phần tử cho mảng
for(var i = 1; i <= 98; i++){
    arr.push(i);
}

// tạo biến tổng số bản ghi trên 1 trang
// tức là 1 trang có 10 bản ghi (10 cái item)
// (items per page)
var tong_item_tren_1_trang = 10;

// tạo biến tổng số trang
// (Total pages)
// tổng_số_trang = tổng_số_bản_ghi / tổng_bản_ghi_trên_1_trang
// ceil() là hàm làm tròn lên
var tong_so_trang = Math.ceil(arr.length / 10);

console.log(tong_so_trang);

// lấy phần tử "ul"
var dt_ul = document.querySelector(`ul[class="phan_trang"]`);
console.log(dt_ul);

// khởi tạo một chuỗi string
// để viết mã HTML cho item
var khoi_tao_item = "";

for(var i = 1; i <= tong_so_trang; i++){
    khoi_tao_item = khoi_tao_item + 
        `<li id="item_${i}" onclick="HienThi_BanGhi(${i});">
            ${i}
        </li>`;
}

// tạo ra 10 cái nút bấm phân trang
dt_ul.innerHTML = khoi_tao_item;

// tạo biến khởi_tạo cho bản ghi
var khoi_tao_ban_ghi = "";

// dùng vòng lặp for
// để tạo 98 cái bản ghi
for(var i = 1; i <= arr.length; i++){
    khoi_tao_ban_ghi = khoi_tao_ban_ghi + 
        `<div class="ban_ghi" id="ban_ghi_${i}">
            <div class="td_1">${i}</div>
            <div class="td_2">Nguyễn Văn A</div>
        </div>`;
}

// đưa bản ghi vào trong thẻ "tbody"
var dt_tbody = document.querySelector(`div[class="tbody"]`);
dt_tbody.innerHTML = khoi_tao_ban_ghi;
console.log(dt_tbody);

// mặc định in ra 10 bản ghi
for(var i = 1; i <= tong_item_tren_1_trang; i++){
    var dt = document.querySelector(`div[id="ban_ghi_${i}"]`);
    dt.style.display = "block";
}

// nếu click vào nút 1
// thì hiển thị 10 bản ghi
function HienThi_BanGhi(thamSo){
    var index_ket_thuc = thamSo * tong_item_tren_1_trang;
    var index_bat_dau = index_ket_thuc - tong_item_tren_1_trang + 1;

    for(var i = 1; i <= arr.length; i++){
        var dt = document.querySelector(`div[id="ban_ghi_${i}"]`);
        dt.style.display = "none";
    }

    if(tong_so_trang != thamSo){
        for(var i = index_bat_dau; i <= index_ket_thuc; i++){
            var dt = document.querySelector(`div[id="ban_ghi_${i}"]`);
            dt.style.display = "block";
        }
    }
    else if(tong_so_trang == thamSo){
        // đoạn thiếu
        // kiểu 100 bản ghi mà chỉ có 98 ấy
        // thì tới trang 10
        // đoạn thiếu = 2
        var doan_thieu =  tong_so_trang * 10 - arr.length;

        // thì tính lại index kết thúc
        index_ket_thuc = thamSo * tong_item_tren_1_trang - doan_thieu;

        for(var i = index_bat_dau; i <= index_ket_thuc; i++){
            var dt = document.querySelector(`div[id="ban_ghi_${i}"]`);
            dt.style.display = "block";
        }
    }
    
    console.log("Đã nhận", thamSo);
}
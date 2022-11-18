var dsnv=new DSNV();
getLocalStorage();

function getEle(id){
    return document.getElementById(id);
}
function setLocalStorage(){
    var datastring=JSON.stringify(dsnv.list);
    localStorage.setItem("DSNV",datastring);
}
function getLocalStorage(){
    if(localStorage.getItem("DSNV")){
        var data=localStorage.getItem("DSNV");
        dsnv.list=JSON.parse(data);
        renderTable(dsnv.list);
    }
}
function renderTable(data){
    var content="";
    for(var i=0;i<data.length;i++){
        var nv=data[i];      
        content+=`        
        <tr>
        <td>${nv.taikhoan}</td>
        <td>${nv.hoten}</td>
        <td>${nv.email}</td>
        <td>${nv.ngaylam}</td>
        <td>${nv.chucvu}</td>
        <td>${nv.tongluong}</td>
        <td>${nv.loainv}</td>
        <td>
            <button onclick="editNV('${nv.taikhoan}')" data-toggle="modal"
            data-target="#myModal" class="my-2 btn btn-info">Edit</button>
            <button onclick="deleteNV('${nv.taikhoan}')" class="btn btn-danger">Delete</button>
        </td>        
        </tr>
        `;
    }
    getEle("tableDanhSach").innerHTML=content;
}
function getInfoNV(){
    var username=getEle("tknv").value;
    var fullname=getEle("name").value;
    var email=getEle("email").value;
    var matkhau=getEle("password").value;
    var datepicker=getEle("datepicker").value;
    var luongcb=getEle("luongCB").value;
    var chucvu=getEle("chucvu").value;
    var giolam=getEle("gioLam").value;

    var isValid=true;
    var valid=new Validation();
    //username
    isValid&=valid.checkEmpty(username,"tbTKNV","(*) Vui lòng nhập tài khoản nhân viên")&&
    valid.checkValueLength(username,"tbTKNV","(*) Độ dài yêu cầu từ 4 đến 6 kí tự",4,6);
    //fullname
    isValid&=valid.checkEmpty(fullname,"tbTen","(*) Vui lòng nhập họ và tên nhân viên")&&
    valid.checkString(fullname,"tbTen","(*) Tên nhân viên phải là chữ");
    //email
    isValid&=valid.checkEmpty(email,"tbEmail","(*) Vui lòng nhập email nhân viên")&&
    valid.checkEmail(email,"tbEmail","(*) Vui lòng nhập email đúng định dạng name@domain");
    //matkhau
    isValid&=valid.checkEmpty(matkhau,"tbMatKhau","(*) Vui lòng nhập mật khẩu nhân viên")&&
    valid.checkValueLength(matkhau,"tbMatKhau","(*) Độ dài yêu cầu từ 6 đến 10 kí tự",6,10)&&
    valid.checkSpecialPass(matkhau,"tbMatKhau","(*) Yêu cầu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt");
    //ngaylam
    isValid&=valid.checkEmpty(datepicker,"tbNgay","(*) Vui lòng nhập ngày làm của nhân viên")&&
    valid.checkDateFormat(datepicker,"tbNgay","(*) Vui lòng nhập theo định dạng mm/dd/yyyy");
    //luongcb
    isValid&=valid.checkEmpty(luongcb,"tbLuongCB","(*) Vui lòng nhập lương cơ bản của nhân viên")&&
    valid.checkValue(luongcb,"tbLuongCB","(*) Vui lòng nhập lương cơ bản từ 1.000.000-20.000.000",1000000,20000000);
    //chucvu
    isValid&=valid.checkPosition("chucvu","tbChucVu","(*) Vui lòng chọn chức vụ của nhân viên");
    //sogiolam
    isValid=valid.checkValue(giolam,"tbGiolam","(*) Vui lòng nhập tổng số giờ làm",80,200);


    if(!isValid) return;
    var NV=new nhanVien(username,fullname,email,matkhau,datepicker,luongcb,chucvu,giolam);
    NV.tinhluong();
    NV.xeploainv();
    return NV;
}
getEle("btnThemNV").onclick=function(){
    var nv=getInfoNV();   
    if(nv){
        dsnv.addNV(nv);
    }   
    setLocalStorage();
    renderTable(dsnv.list);
}
function deleteNV(username){
    dsnv.deleteNV(username);
    renderTable(dsnv.list);
    setLocalStorage();
    
}
function editNV(username){
    var nv=dsnv.editNV(username);
    if(nv){
        getEle("tknv").value=nv.taikhoan;
        getEle("tknv").disabled=true;
        getEle("name").value=nv.hoten;
        getEle("email").value=nv.email;
        getEle("password").value=nv.matkhau;
        getEle("datepicker").value=nv.ngaylam;
        getEle("luongCB").value=nv.luongcb;
        getEle("chucvu").value=nv.chucvu;
        getEle("gioLam").value=nv.sogiolam;
        getEle("btnThemNV").style.display="none";
        getEle("btnCapNhat").style.display="inline-block";
    }

}
getEle("btnCapNhat").onclick=function(){
    var nv=getInfoNV();
    dsnv.updateNV(nv);
    renderTable(dsnv.list);
    setLocalStorage();   
    closeNV();
}
function closeNV(){
    getEle("loginNV").reset();   
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var output = ((''+month).length<2 ? '0' : '') + month  + '/' +
    ((''+day).length<2 ? '0' : '') + day + '/' +
    d.getFullYear(); 
    $('#datepicker').val(output); 
}

getEle("searchName").addEventListener("keyup",function(){
    var rankNV=getEle("searchName").value;
    var list=dsnv.findNV(rankNV);
    renderTable(list);
})

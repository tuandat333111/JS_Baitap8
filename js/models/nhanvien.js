function nhanVien(_username,_fullname,_email,_passWord,_ngayLam,_luongCB,_chucVu,_soGioLam,_tongLuong,_loaiNV){
    //property
    this.taikhoan=_username;
    this.hoten=_fullname;
    this.email=_email;
    this.matkhau=_passWord;
    this.ngaylam=_ngayLam;
    this.luongcb=_luongCB;
    this.chucvu=_chucVu;
    this.sogiolam=_soGioLam;
    this.tongluong=0;
    this.loainv="";
    //method
    this.tinhluong=function(){
        if(this.chucvu==="Sếp"){
            this.tongluong=parseFloat(this.luongcb*3);
        }
        else if(this.chucvu==="Trưởng phòng"){
            this.tongluong=parseFloat(this.luongcb*2);
        }
        else if(this.chucvu==="Nhân viên"){
            this.tongluong=parseFloat(this.luongcb);
        }
    }
    this.xeploainv=function(){
        if(this.sogiolam>=192){
            this.loainv="Nhân viên xuất sắc";
        }
        else if(this.sogiolam>=176&&this.sogiolam<192){
            this.loainv="Nhân viên xuất giỏi";
        }
        else if(this.sogiolam>=160&&this.sogiolam<176){
            this.loainv="Nhân viên khá";
        }
        else{
            this.loainv="Nhân viên trung bình";
        }
    }

}
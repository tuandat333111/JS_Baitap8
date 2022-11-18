function Validation(){
    this.checkEmpty=function(value,spanId,message){
        if(value===""){
            getEle(spanId).innerHTML=message;
            getEle(spanId).style.display="block";
            return false;
        }
        else{
            getEle(spanId).innerHTML="";
            getEle(spanId).style.display="none";
            return true;
        }
    }
    this.checkValueLength=function(value,spanId,message,min,max){
        if(min<=value.length&&value.length<=max){
            getEle(spanId).innerHTML="";
            getEle(spanId).style.display="none";
            return true;
        }
        else{
            getEle(spanId).innerHTML=message;
            getEle(spanId).style.display="block";
            return false;
        }
    }
    this.checkString=function(value,spanId,message){
        var letter="^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if(value.match(letter)){
            getEle(spanId).innerHTML="";
            getEle(spanId).style.display="none";
            return true;
        }
        else{
            getEle(spanId).innerHTML=message;
            getEle(spanId).style.display="block";
            return false;
        }
    }
    this.checkEmail=function(value,spanId,message){
        var letter=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(letter)){
            getEle(spanId).innerHTML="";
            getEle(spanId).style.display="none";
            return true;
        }
        else{
            getEle(spanId).innerHTML=message;
            getEle(spanId).style.display="block";
            return false;
        }
    }
    this.checkSpecialPass=function(value,spanId,message){
        var letter=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if(value.match(letter)){
            getEle(spanId).innerHTML="";
            getEle(spanId).style.display="none";
            return true;
        }
        else{
            getEle(spanId).innerHTML=message;
            getEle(spanId).style.display="block";
            return false;
        }
    }
    this.checkDateFormat=function(date,spanId,message){
        var dateFormat=/^(?:(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](19|20)[0-9]{2})$/;
        if(date.match(dateFormat)){
            getEle(spanId).innerHTML="";
            getEle(spanId).style.display="none";
            return true;
        }
        else{
            getEle(spanId).innerHTML=message;
            getEle(spanId).style.display="block";
            return false;
        
        }
    }
    this.checkValue=function(value,spanId,message,min,max){
        if(min<=value&&value<=max){
            getEle(spanId).innerHTML="";
            getEle(spanId).style.display="none";
            return true;
        }
        else{
            getEle(spanId).innerHTML=message;
            getEle(spanId).style.display="block";
            return false;        
        }
    }
    this.checkPosition=function(selectedId,spanId,message){
        if(getEle(selectedId).selectedIndex!=0){
            getEle(spanId).innerHTML="";
            getEle(spanId).style.display="none";
            return true;
        }
        else{
            getEle(spanId).innerHTML=message;
            getEle(spanId).style.display="block";
            return false;     
        }
    }

    
}
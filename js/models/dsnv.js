function DSNV(){
    this.list=[];
    //Method
    this.findIndex=function(username){
        var index=-1;
        for(var i=0;i<this.list.length;i++){
            if(this.list[i].taikhoan===username){
                index=i;
                break;
            }
        }
        return index;
    }
    this.addNV=function(nv){
        this.list.push(nv);
    }
    this.deleteNV=function(username){
        var index=this.findIndex(username);
        if(index!=-1){
            this.list.splice(index,1);
        }        
    }
    this.editNV=function(username){
        var index=this.findIndex(username)
        return this.list[index];
    }
    this.updateNV=function(nv){
        var index=this.findIndex(nv.taikhoan);
        this.list[index]=nv;
    }
    this.findNV=function(keyword){
        var array=[];
        for(var i=0;i<this.list.length;i++){
            var nv=this.list[i];
            var rankNVLower=nv.loainv.toLowerCase();
            var keywordLower=keyword.toLowerCase();
            if(rankNVLower.indexOf(keywordLower)!==-1){
                array.push(nv);
            }
        }
        return array;
        
    }
}
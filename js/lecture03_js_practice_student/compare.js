
function comparenum(a,b){
    var  A = parseInt(a.value, 10);
    var  B = parseInt(b.value, 10);
    if(A>B)
    {
        document.getElementById("c").value="A>B";

    }else if(A<B){
        document.getElementById("c").value="A<B";

    }else{
        document.getElementById("c").value="A=B";
        
    }
    document.getElementById("d").value=Math.abs(A-B);

}

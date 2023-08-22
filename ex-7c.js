function details1(){
    var e=document.getElementById("d22").value;
    console.log(e);
    if(e==1){
        document.getElementById("d22").value=0;
        document.getElementById("d22").innerHTML=
        "<div><a><p>View More</p></a></div>";
    }
    else{
        document.getElementById("d22").value=1;
        document.getElementById("d22").innerHTML=
        "<div><a><p>View Less</p></a><p>1)Web page development</p><p>2)I develop user interface</p></div>";
    }
}
function details2(){
    var e1=document.getElementById("d24").value;
    console.log(e1);
    if(e1==1){
        document.getElementById("d24").value=0;
        document.getElementById("d24").innerHTML=
        "<div><a><p>View More</p></a></div>";
    }
    else{
        document.getElementById("d24").value=1;
        document.getElementById("d24").innerHTML=
        "<div><a><p>View Less</p></a><p>1)Web page development</p><p>2)I develop user interface</p></div>";
    }
}
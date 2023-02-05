window.onload = function(){
    let tel = document.getElementById("tel").value;
    if(tel.length !== 0){
        let tel1 = tel.substr(0,3);
        let tel2 = tel.substr(3,4);
        let tel3 = tel.substr(7,4);
        
        document.getElementById("tel1").value = tel1;
        document.getElementById("tel2").value = tel2;
        document.getElementById("tel3").value = tel3;
    }

}

function tell(){
    let tel1 = document.getElementById("tel1").value;
    let tel2 = document.getElementById("tel2").value;
    let tel3 = document.getElementById("tel3").value;

    let tel = tel1 + tel2 + tel3; 
    document.getElementById("tel").value = tel;
}


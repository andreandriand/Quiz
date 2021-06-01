function totalNilai() {
        
    var nilai = 0;
    if (document.getElementById("c1").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c2").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c3").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c4").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c5").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c6").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c7").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c8").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c9").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c10").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c11").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c12").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c13").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c14").checked==true) {
      nilai += 10;
    }
    if (document.getElementById("c15").checked==true) {
      nilai += 10;
    }

    alert("Hasil quiz anda adalah " + nilai + " poin");

  }

    var counter = 900;
    var int1;

function update_display(){		
    if(counter>=0){
        document.getElementById("timer1").innerHTML = "Sisa Waktu = "+counter;
        counter--;
    }else{
        alert('Waktu telah habis');
        totalNilai()
        clearInterval(int1);
    }
}
    
function update_display_call(){
    int1 = setInterval(update_display,1000);
    var buttonTimer = document.getElementById("tombolTimer");
    if(buttonTimer.style.display === "block"){
      buttonTimer.style.display = "none";
    }
}
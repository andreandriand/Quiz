// Button untuk menampilkan jenis level
function showLevel(){
    var level = document.getElementById("button-showHide");
    // Menampillkan level jika button di klik.
    if(level.style.display === "none"){
        level.style.display = "block";
    // Menyembunyikan level, jika button di klik
    }else if(level.style.display === "block"){
        level.style.display = "none";
    }
}

// Bagian Button menampilkan dan menghilangkan Peraturan
function showPeraturan(){
    // var iconPlay = document.getElementById("button1");
    // var iconMute = document.getElementById("button2");
    var mainMenu = document.getElementById("menu-main");
    var peraturan = document.getElementById("peraturan-quis");
    var title = document.getElementById("title");
    var iconPeraturan = document.getElementById("peraturan");
    // Menampilkan peraturan dan menghilangkan button sound, peraturan dan main menu
    if(mainMenu.style.display === "block"){
        // iconPlay.style.display = "none";
        // iconMute.style.display = "none";
        mainMenu.style.display = "none";
        peraturan.style.display = "block";
        title.style.display = "none";
        iconPeraturan.style.display = "none";
    // Menampilkan main menu seperti semula
    }else{
        mainMenu.style.display = "block";
        peraturan.style.display = "none";
    }
}


// Bagian Button musik
// var musik = new Audio();
// musik.src = "sound.mp3";
// musik.play();
// // Button Play => Jika musik nyala, maka akan dipause
// function soundPlay(){
//     var play = document.getElementById("button1");
//     var mute = document.getElementById("button2");
//     if(musik.play){
//         musik.pause();
//         mute.style.display = "block";
//         play.style.display = "none";
//     }
// }
// // Button Mute => Jika musik pause, maka akan diplay
// function soundMute(){
//     var play = document.getElementById("button1");
//     var mute = document.getElementById("button2");
//     if(musik.pause){
//         musik.play();
//         mute.style.display = "none";
//         play.style.display = "block";
//     }
// }
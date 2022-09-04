var aud = document.getElementById("music");
var volume = document.getElementById("control-volume");
var pbtn = document.getElementById("playbtn");
var img_btn=document.getElementById("btn-img");
var img_menu=document.getElementById("menu_img");
var image_main=document.getElementById("img-main");
var container2=document.getElementById("container2");
var container=document.getElementById("container");
var openmenu=false;
var play=false;
//--------------volume-------///
volume.value = 100;
function volumedown(){
  if(aud.volume > 0.1111){
    aud.volume-=0.1;
  }
  volume.value=aud.volume*100;
}
function volumeup(){
  if(aud.volume < 0.89999){
    aud.volume+=0.1;
  }
  volume.value=aud.volume*100;
  
}
volume.addEventListener("change", function (e) {
  aud.volume = e.currentTarget.value / 100;
});
//----------- play & paused audio -----------
function play_paused(){
  if(play){
    aud.pause();
    img_btn.src="./icon/icons8-play-button-circled-100.png";
    play=false;
  }
  else{
    aud.play();
    dur();
    img_btn.src="./icon/icons8-pause-squared-100.png";
    play=true;
  }
}
//--- time audio
aud.addEventListener("timeupdate", function () {
  document.getElementById("load-bar").style.width=(aud.currentTime*100)/aud.duration+"%";
  document.getElementById("c-load").style.left=(aud.currentTime*100)/aud.duration+"%";
  document.getElementById("p").innerText = changetime(aud.currentTime);
  document.getElementById("p2").innerText =
    "- " + changetime(aud.duration - aud.currentTime);
});
function changetime(secnd) {
  var min = Math.floor(secnd / 60);
  var sec = Math.floor(secnd - min * 60);
  if (sec > 9) {
    return min + ":" + sec;
  } else {
    return min + ":0" + sec;
  }
}
//--- speed audio ----
function fastforward(){
  aud.playbackRate=1.5;
}
function lowforward(){
  aud.playbackRate=0.5;
}
function mid(){
  aud.playbackRate=1;
}
// menu bar --------------------------------------------------------------------------//
container2.style.display="none";
//-- audio src --//
var m1_src=container2.children[0].children[1].src;
var m2_src=container2.children[1].children[1].src;
var m3_src=container2.children[2].children[1].src;
//---- image src --------//
var img1_src=container2.children[0].children[0].src;
var img2_src=container2.children[1].children[0].src;
var img3_src=container2.children[2].children[0].src;
//---------------------------------------------------------------------------------------//
document.getElementById("m1").addEventListener("click",function(){
        aud.src=m1_src;
        image_main.src=img1_src;
        console.log(img1_src);
        aud.play();
        document.getElementById("m2").classList.remove("active");
        document.getElementById("m3").classList.remove("active");
        document.getElementById("m1").classList="active";
        img_btn.src="./icon/icons8-pause-squared-100.png";
        play=true;
});
document.getElementById("m2").addEventListener("click",function(){
  aud.src=m2_src;
  image_main.src=img2_src;
  aud.play();
  document.getElementById("m1").classList.remove("active");
  document.getElementById("m3").classList.remove("active");
  document.getElementById("m2").classList="active";
  img_btn.src="./icon/icons8-pause-squared-100.png";
  play=true;
});
document.getElementById("m3").addEventListener("click",function(){
  aud.src=m3_src;
  image_main.src=img3_src;
  aud.play();
  document.getElementById("m1").classList.remove("active");
  document.getElementById("m2").classList.remove("active");
  document.getElementById("m3").classList="active";
  img_btn.src="./icon/icons8-pause-squared-100.png";
  play=true;
});
//----------------------------------------------------------------------------------
console.log(m1_src);
function dur(){
console.log(container2.children[0].children[1].duration/60);
}
function open_close(){
    if(openmenu){
      img_menu.src="./icon/icons8-menu-100.png";
      container2.style.display="none";
      if(window.screen.width>800){
        container.style.width="50%";
      }
      openmenu=false;
    }
    else{
      img_menu.src="./icon/icons8-multiply-100.png";
      container2.style.display="flex";
      if(window.screen.width>800){
        container.style.width="40%";
      }
      openmenu=true;
    }
    container2.children[0].children[4].innerHTML=Math.floor(container2.children[0].children[1].duration/60)+":00";
    container2.children[1].children[4].innerHTML=Math.floor(container2.children[1].children[1].duration/60)+":00";
    container2.children[2].children[4].innerHTML=Math.floor(container2.children[2].children[1].duration/60)+":00";
}
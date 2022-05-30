alert ("Cieeee mau ngapain nih, kepo ya.")
var count = 0;
var str = "Halo perkenalkan nama saya muhammad Rifaldo Saputra  Biasa saya disapa Aldo  Saya berdomisili di kab,Pasaman Barat - prov ; Sumatera Barat. Saya saat ini duduk dibangku X Smk dengan jurusan yang saya fokuskan yaitu tjkt. Mungkin sekian perkenalan diri saya sekian terima kasih. ";

function myFunc() {
   document.getElementById("myInput").value += str[count];
   count++;
   if(count == 235 || count == 236)
   {
       //thanks @maz for checking my code
       if("vibrate" in navigator)
       navigator.vibrate(500);
       else
       alert("device successfully formatted!!");
       
   }
   
   //adding some randomness thanks for your idea guys!!
   if(count == 5 || count == 24 || count == 37 || count == 66 || count == 166)
   {
       clearInterval(x);
       x = setInterval(myFunc,600);
   }
   else if(count == 95 || count == 121 ||count == 236 || count == 295)
   {
       clearInterval(x);
       x = setInterval(myFunc,1000)
   }
   else if((count > 4 && count < 20) || (count > 35 && count < 50) || (count >122 && count < 135) || (count > 150 && count < 166)||(count > 178 && count < 188) || (count > 195 && count < 201) || (count > 206 && count < 214) || (count > 240 && count < 250) || (count > 260 && count < 271) || (count > 280 && count < 282) || (count > 302 && count < 315))
   {
       clearInterval(x);
       x = setInterval(myFunc,75)
   }
   
   else
   {
       clearInterval(x);
       x = setInterval(myFunc,150);
   }
   
   
   if(count >= str.length)
   {
       clearInterval(x);
   }
}
var x=setInterval(myFunc,150);

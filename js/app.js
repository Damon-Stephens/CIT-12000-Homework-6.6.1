var wrapper=document.body.querySelector(".wrapper");

var total_damage=0
wrapper.innerHTML=`Dragon Damage: ${total_damage}`

function attack(type,damage){
    if(type==="fire"){
        damage=damage-1
        total_damage=(total_damage+damage)
        wrapper.innerHTML=`Dragon Damage: ${total_damage}`
    }
    if(type==="ice"){
        damage=damage+1
        total_damage=(total_damage+damage)
        wrapper.innerHTML=`Dragon Damage: ${total_damage}`
    }
    if(type==="poison"){
        total_damage = (total_damage + damage)
        wrapper.innerHTML=`Dragon Damage: ${total_damage}`
    }
    if(total_damage>9){
        var ele=document.createElement("div");
        ele.innerHTML="Thou hath slain the dragon. Once thou art done admiring thine handiwork, return from whence thy came, to collect thine reward and pay remembrance to the mighty battle thou hath fought today.";
        wrapper.appendChild(ele);
        document.getElementById("flash").style.borderColor = "rgba(0, 0, 0, 0)";
        document.getElementById("flash").style.backgroundImage = "url(\"../images/please.jpg\")"
    }



}
document.body.querySelector(".fire").addEventListener("click",function(){
    var type="fire"
    var damage=3
    if(total_damage>9){
        ele.innerHTML="";
        var ele=document.createElement("div");
        ele.innerHTML="Thou hath slain the dragon. Once thou art done admiring thine handiwork, return from whence thy came, to collect thine reward and pay remembrance to the mighty battle thou hath fought today.";
        wrapper.appendChild(ele);
        document.getElementById("flash").style.borderColor = "rgba(0, 0, 0, 0)";
        die;
    }
    document.getElementById("flash").style.borderColor = "rgba(255, 69, 0, 0.50)";
    attack(type,damage)
})
document.body.querySelector(".ice").addEventListener("click",function(){
    var type="ice"
    var damage=1
    if(total_damage>9){
        ele.innerHTML="";
        var ele=document.createElement("div");
        ele.innerHTML="Thou hath slain the dragon. Once thou art done admiring thine handiwork, return from whence thy came, to collect thine reward and pay remembrance to the mighty battle thou hath fought today.";
        wrapper.appendChild(ele);
        document.getElementById("flash").style.borderColor = "rgba(0, 0, 0, 0)";

        die;
    }
    document.getElementById("flash").style.borderColor = "rgba(105, 160, 171, 0.5)";
    attack(type,damage)
})
document.body.querySelector(".poison").addEventListener("click",function(){
    var type="poison"
    var damage=4
    if(total_damage>9){
        ele.innerHTML="";
        var ele=document.createElement("div");
        ele.innerHTML="Thou hath slain the dragon. Once thou art done admiring thine handiwork, return from whence thy came, to collect thine reward and pay remembrance to the mighty battle thou hath fought today.";
        wrapper.appendChild(ele);
        document.getElementById("flash").style.borderColor = "rgba(0, 0, 0, 0)";
        die;
    }
    document.getElementById("flash").style.borderColor = "rgba(154, 205, 50, 0.5)";
    attack(type,damage)
})



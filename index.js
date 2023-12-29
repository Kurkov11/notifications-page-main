let notificationArray = document.getElementsByClassName("notification");
document.getElementById('mark-as-read').onclick = function(){
    for(let i = 0; i < notificationArray.length; i++){
        notificationArray[i].style.backgroundColor = 'white';
    }
}
for(let i = 0; i < notificationArray.length; i++){
    notificationArray[i].onclick = function(){
        notificationArray[i].style.backgroundColor = 'white';
    }
}
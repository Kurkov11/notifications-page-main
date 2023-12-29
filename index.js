let notificationArray = document.getElementsByClassName("notification");
let nCount = 0;
let dotArray = document.getElementsByClassName('dot');
for(let i = 0; i < notificationArray.length; i++){
    if(notificationArray[i].style.backgroundColor = 'hsl(210, 60%, 98%)'){
        nCount++;
    }
}
document.getElementById('notification-count').innerHTML = nCount;
document.getElementById('mark-as-read').onclick = function(){
    for(let i = 0; i < notificationArray.length; i++){
        if(notificationArray[i].style.backgroundColor != 'white'){
            notificationArray[i].style.backgroundColor = 'white';
            dotArray[i].style.opacity = '0';
        }
    }
    nCount = 0;
    document.getElementById('notification-count').innerHTML = nCount;
}
for(let i = 0; i < notificationArray.length; i++){
    notificationArray[i].onclick = function(){
        if(notificationArray[i].style.backgroundColor != 'white'){
            notificationArray[i].style.backgroundColor = 'white';
            nCount--;
            document.getElementById('notification-count').innerHTML = nCount;
            dotArray[i].style.opacity = '0';
        }
    }
}
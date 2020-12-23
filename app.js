//Reference to HTML Elements
const seconds = document.getElementById('second');
const minutes = document.getElementById('minute');
const hours = document.getElementById('hour');
const day = document.getElementById('day');
//Date Object
const currentDate = new Date();
console.log(currentDate)
//Current Date Info
let s = currentDate.getSeconds();
let m = currentDate.getMinutes();
let h = currentDate.getHours();
let d = currentDate.getDate();

function countDown(){
    setInterval(function(){
        s = s - 1;

        handleSeconds(s);
        
        handleMinutes(m);

        handleHours(h);
        
        handleDay(d);

        if(s === 0 ){
            s = 60;
            m = m - 1;
            if(m < 0){
                m = 59;
                h = h - 1;
                if(h < 0){
                    h = 23;
                    d = d - 1;
                }
            }
        }
    }, 1000);
}

//Formatting Date;
let handleSeconds = (s)=> {
    if(s < 10){
        seconds.innerHTML = `0${s}`;
    }else{
        seconds.innerHTML = s;
    }
}

let handleMinutes = (m)=> {
    if(m < 10){
        minutes.innerHTML = `0${m}`;
    }else{
        minutes.innerHTML = m;
    }
}

let handleHours = (h)=> {
    if(h < 10){
        hours.innerHTML = `0${h}`;
    }else{
        hours.innerHTML = h;
    }
}

let handleDay = (d)=>{
    if(d < 10){
        day.innerHTML = `0${d}`;
    }else{
        day.innerHTML = d;
    }
}


countDown();



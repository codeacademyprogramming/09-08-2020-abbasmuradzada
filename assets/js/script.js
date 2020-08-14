const date = new Date();


const RenderCalendar = () => {
    date.setDate(1);
    // console.log(date.getDate());

    const monthDays = document.querySelector(".days")
    const lastDay = new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(),0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1,0).getDay();
    const nextDays = 7- lastDayIndex - 1;
    const dateArea = document.querySelector(".date-area")


    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    document.querySelector(".date h1").innerText = `${months[date.getMonth()]} ${date.getFullYear()}`;
    var days = ""

    for(let k = firstDayIndex; k > 0; k--){
        days+=`<div class="calendar-day prev-date">${prevLastDay - k + 1}</div>`
    }

    for (let i = 1; i <= lastDay; i++) {
        if(i===new Date().getDate() && date.getMonth()===new Date().getMonth()){
            days += `<div class="calendar-day today">${i}</div>`;
        }else{
            days += `<div class="calendar-day">${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days+=`<div class="calendar-day next-date">${j}</div>`
        monthDays.innerHTML = days;
    }

    document.querySelectorAll(".prev-date").forEach(element => {
        element.addEventListener('click',function(){
            date.setMonth(date.getMonth()-1);
            RenderCalendar();
            // selectDay()
        })
    });

    document.querySelectorAll(".next-date").forEach(element => {
        element.addEventListener('click',function(){
            date.setMonth(date.getMonth()+1);
            RenderCalendar();
            // selectDay()
        })
    });

    document.querySelector(".prev").addEventListener('click',function(){
        date.setMonth(date.getMonth()-1);
        RenderCalendar();
        // selectDay()
    })
    
    document.querySelector(".next").addEventListener('click',function(){
        date.setMonth(date.getMonth()+1);
        RenderCalendar();
        // selectDay()
    })

    selectDay()

}
RenderCalendar();



function selectDay(){
    document.querySelectorAll(".days div").forEach(element => {
        element.addEventListener('click',function(){
            document.querySelectorAll(".days div").forEach(element => {
                element.classList.remove('active')
            });
            element.classList.add('active')
            document.querySelector(".date-area h1").innerHTML = `${element.innerText} ${document.querySelector(".date h1").innerText}`
            document.querySelector(".today").classList.add("today-light")
        })
    });
}

selectDay()


var newDate = new Date()

document.querySelector('.cancel').addEventListener("click",function(){
    date.setMonth(newDate.getMonth())
    date.setDate(newDate.getDate())
    date.setFullYear(newDate.getFullYear())
    RenderCalendar()

})

document.querySelector('.save').addEventListener("click",function(){
    // console.log("test");
    localStorage.setItem("selecdet date",document.querySelector(".date-area h1").innerHTML)
})

document.querySelector('.saved-date').innerText=localStorage.getItem("selecdet date")





const day =prompt ("Enter your day");
// if (day != "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday" || "sunday")
//     {console.log("invalid day");} 
const budget =prompt("Enter your budget");
if (budget < 1){
    console.log("invalid budget");
}else{
    if(day == "monday"){
        if  (budget > 1000){
            console.log("Deal 1 && Deal 2" );
        }else if(budget >= 500){
            console.log("Deal 1");
        }else if(budget < 500){
            console.log("Deal 2");
        }else{
            console.log("No deals available");
        }
    }else if (day == "friday"){
        if(budget == 1000){
            console.log("Buffet");
        }else{
            console.log("No deals available");
        }
    }else if (day == "sunday"){
        if(budget >= 1500){
            let desert = confirm("Want a desert?");
            if(desert){
                console.log("Deal and Desert");
            } else {
            console.log("Deal");
        }
    }else{
        console.log("No deals available");
    }
}
}

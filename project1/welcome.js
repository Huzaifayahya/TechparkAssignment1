const Welcome=alert("Welcome to Merath kabab House");
const day =prompt ("Enter your day");
// if (day != "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday" || "sunday")
//     {console.log("invalid day");} 
const budget =prompt("Enter your budget");
if (budget < 1){
    console.log("invalid budget");
}else{
    if(day == "monday" || day== "tuesday" || day== "wednesday" || day== "thursday"){
        if  (budget > 1000){
            console.log("Deal 1 && Deal 2" );
        }else if(budget >= 500){
            alert("Deal 1");
            console.log("Deal 1");
        }else if(budget < 500){
            alert("Deal 1");
            console.log("Deal 2");
        }else{
            alert("No deals available")
            console.log("No deals available");
        }
    }else if (day == "friday"){
        if(budget == 1000){
            alert("Buffet")
            console.log("Buffet");
        }else{
            alert("No deals available")
            console.log("No deals available");
        }
    }else if (day == "sunday"){
        var Desert =prompt("Do you want Desert?")
        if(budget >= 1500 && Desert == 'yes'){
                console.log("Mega Deal and Desert");
            } else if(budget >= 1500) {
            console.log("Mega Deal");
    }else{
        console.log("No deals available");
    }
}
}

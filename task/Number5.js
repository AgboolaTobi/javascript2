

function timechoice(schedule){
    const choice = schedule.filter((time) => time.slice(-2) == "PM" && 1 < time.charAt(0) < 5);
    return choice;
    
}




module.exports = {timechoice};


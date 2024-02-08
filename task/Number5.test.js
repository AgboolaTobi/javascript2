const {timechoice} = require("./Number5");

test("test for choice of afternoon class", ()=>{
    let schedule = ["9:00 AM","11:00 AM","1:00 PM","3:00 PM","5:00 PM"];
    let result = timechoice(schedule);
    let afternoonClasses = ["1:00 PM","3:00 PM","5:00 PM"]

    expect(result).toEqual(afternoonClasses)
})
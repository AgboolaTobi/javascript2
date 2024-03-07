const { AirConditioner } = require("./AirCondition");

test("test that bike can be turned on", ()=>{

    let myAc = new AirConditioner(true);
    let response = myAc.getIsOn()

    expect(response).toBe(true)

})


    test("test that bike can be turned off", ()=>{

        let myAc = new AirConditioner(false);
        let offStatus = myAc.getIsOff();

        expect(offStatus).toBe(false);

})


test('test that the AC temperature can be increased', ()=>{

    let myAc = new AirConditioner();

    let ACsTemp = myAc.setIncreaseTemperature(2);
    let result = myAc.getIncreasedTemperature();

    expect(ACsTemp).toBe(result);
})


function AirConditioner(isOn,temperature = 16){
    this. isOn = isOn;
    
    this.temperature =  temperature


        this.setIsOn = function(isOn){
            this.isOn = isOn;
            isOn = true
        }

        this.getIsOn = function(){
            return isOn;
        }


        this.setIsOff = function(isOn){
            this.isOn = isOn;
            isOn = false
        }

        this.getIsOff = function(){
            return isOn;
        }

        this.setIncreaseTemperature = function(temperature){
          if(temperature <= 30){
            this.temperature = temperature + 16 ;
          }
          else{
            console.log("Temperature cannot be increased beyond 30")
          }
        }


        this.getIncreasedTemperature = function(){
            return this.temperature;
        }

}




module.exports = {AirConditioner}
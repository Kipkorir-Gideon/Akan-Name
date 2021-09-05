function akanNaming() {
    function akanName() {
        var birthday = document.getElementById("birthday").value;
        var gender = document.getElementById("gender").value;
        var dateOfBirth = birthday.split('-');
        if(dateOfBirth.length !==3) {
            alert("Invalid date!");
        }
        else if(!dateOfBirth[0].match(/^\d\d\d\d$/) || 
            !dateOfBirth[1].match(/^\d\d$/) || 
            !dateOfBirth[2].match(/^\d\d$/)){
                alert("Invalid date!");
        }
        else if(gender.length===0){
            alert("Please select your gender")
        }
        else {
            document.getElementById("output").style.display = 'block';
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','friday','Saturday'];
            var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
            var femaleNames = ['Akosua','Adwoa','Abena','Akua','Yaa','Afua','Ama'];
            var time = new Date(parseInt(dateOfBirth[0]), parseInt(dateOfBirth[1]) - 1, parseInt(dateOfBirth[2]));
            var day = time.getDay();
            var dayName = days[day];

            switch(gender) {
                case "male":
                    if(dayName == days[0]){
                        var output = "You were born on " + dayName + " and your akan name is " + maleNames[0] + ".";
                        return output;
                    }
                    else if(dayName == days[1]){
                        var output = "You were born on " + dayName + " and your akan name is " + maleNames[1] + ".";
                        return output;
                    }
                    else if(dayName == days[2]){
                        var output = "You were born on " + dayName + " and your akan name is " + maleNames[2] + ".";
                        return output;
                    }
                    else if(dayName == days[3]){
                        var output = "You were born on " + dayName + " and your akan name is " + maleNames[3] + ".";
                        return output;
                    }
                    else if(dayName == days[4]){
                        var output = "You were born on " + dayName + " and your akan name is " + maleNames[4] + ".";
                    }
                    else if(dayName == days[5]){
                        var output = "You were born on " + dayName + " and your akan name is " + maleNames[5] + ".";
                        return output;
                    }
                    else if(dayName == days[6]){
                        var output = "You were born on " + dayName + " and your akan name is " + maleNames[6] + ".";
                        return output;
                    }
                break;

                case "female":
                    if(dayName == days[0]){
                        var output = "You were born on " + dayName + " and your akan name is " + femaleNames[0] + ".";
                        return output;
                    }
                    else if(dayName == days[1]){
                        var output = "You were born on " + dayName + "and your akan name is " + femaleNames[1] + ".";
                        return output;
                    }
                    else if(dayName == days[2]){
                        var output = "You were born on " + dayName + " and your akan name is " + femaleNames[2] + ".";
                        return output;
                    }
                    else if(dayName == days[3]){
                        var output = "You were born on " + dayName + " and your akan name is " + femaleNames[3] + ".";
                        return output;
                    }
                    else if(dayName == days[4]){
                        var output = "You were born on " + dayName + " and your akan name is " + femaleNames[4] + ".";
                        return output;
                    }
                    else if(dayName == days[5]){
                        var output = "You were born on " + dayName + " and your akan name is " + femaleNames[5] + ".";
                        return output;
                    }
                    else if(dayName == days[6]){
                        var output = "You were born on " + dayName + " and your akan name is " + femaleNames[6] + ".";
                        return output;
                    }
                break;
            }
        }
    }
    document.getElementById("output").innerHTML = akanName();
}
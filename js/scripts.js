function akanNaming() {
    function akanName() {
        var birthday = document.getElementById("birthday").value;
        var gender = document.getElementById("gender").value;
        var dateOfBirth = birthday.split('-');
        if(dateOfBirth.lenth !==3) {
            alert("Invalid date!");
        }
        else if(!bdayArray[0].match(/^\d\d\d\d$/) || 
            !bdayArray[1].match(/^\d\d$/) || 
            !bdayArray[2].match(/^\d\d$/)){
                alert("Invalid date!");
        }
        else {
            document.getElementById("post").style.display= 'block';
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','friday','Saturday'];
            var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
            var femaleNames = ['Akosua','Adwoa','Abena','Akua','Yaa','Afua','Ama'];
            var time = new Date(parseInt(dateOfBirth[0]),parseInt(dateOfBirth[1]) - 1,parseInt(dateOfBirth[2]));
            var day = time.getDay();
            var dayName = days[day];
        }
    }
}
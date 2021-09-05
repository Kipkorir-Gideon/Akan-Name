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
            
        }
    }
}
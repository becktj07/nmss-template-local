function donateFormRedirect(){            
    
    $("#nameSubmitButton").click(function() {      
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();

        if(firstName && lastName !== "") {
            window.open("https://secure.nationalmssociety.org/site/SPageServer?pagename=GEN_HOM_donate&first_name=" + firstName + "&last_name=" + lastName +"&fr_id=30912");
        }
        else {
            window.alert("Please enter a first and last name.");            
        }                
    });

    $("#teamSubmitButton").click(function() {
        var teamName = $('#teamName').val();

        if(teamName !== "") {
            window.open("https://secure.nationalmssociety.org/site/SPageServer?pagename=GEN_HOM_donate&team_name=" + teamName + "&fr_id=30912")
        }
        else {
            window.alert("Please enter a team name.");     
        }        
    });
}

donateFormRedirect();
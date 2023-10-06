function openDialog(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value 
    window.alert("Uspesno ste ulogovani. Vasi kredencijali su: Email: " +email +", "+ "Password: " + password)   
}

function openBurgerMenu(){
    document.getElementById("nav").style.width = "30%";
}

function closeBurgerMenu(){
    document.getElementById("nav").style.width = "0%";
}

// jquery- prikazi/sakrij listu
$(document).ready(function () {

    $('#hide').click(function(){
        $('#list').hide()
    })

    $(document).ready(function () {

        $('#show').click(function(){
            $('#list').show()
        })
    })   
})

function topFunction(){
    document.documentElement.scrollTop = 0;
}

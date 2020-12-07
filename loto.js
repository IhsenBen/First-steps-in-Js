

    function flash() {
        let elements = document.getElementsByClassName('numero_etoile');
        for (let i = 0; i < elements.length; i++) {
            var x = Math.floor((Math.random() * 12) + 1);
            elements[i].innerHTML= x;
        }

        
    //     let elements = document.getElementsByClassName('numero');
    // for (let i = 0; i < elements.length; i++) {
    //     var x = Math.floor((Math.random() * 50) + 1);
    //     elements[i].innerHTML= x;
    // }

    var x = Math.floor((Math.random() * 50) + 1);
    document.getElementsByClassName("numero")[0].innerHTML = x;

    var x = Math.floor((Math.random() * 50) + 1);
    document.getElementsByClassName("numero")[1].innerHTML = x;

    var x = Math.floor((Math.random() * 50) + 1);
    document.getElementsByClassName("numero")[2].innerHTML = x;

    var x = Math.floor((Math.random() * 50) + 1);
    document.getElementsByClassName("numero")[3].innerHTML = x;

    var x = Math.floor((Math.random() * 50) + 1);
    document.getElementsByClassName("numero")[4].innerHTML = x;
      }

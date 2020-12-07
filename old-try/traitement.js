function controle_saisie_nom()
{
	if (document.getElementById("zone_nom").value=="Saisir un nom !")
	{
	document.getElementById("zone_nom").value="";
	document.getElementById("zone_nom").style.background="yellow";
	}
	else
	{
	document.getElementById("zone_nom").style.background="yellow";
	}
}
function controle_saisie_prenom()
{
	if (document.getElementById("zone_prenom").value=="Saisir un prénom !")
	{
	document.getElementById("zone_prenom").value="";
	document.getElementById("zone_prenom").style.background="yellow";
	}
	else
	{
	document.getElementById("zone_prenom").style.background="yellow";
	}
}
function controle_vide_nom()
{
	if (document.getElementById("zone_nom").value=="")
	{
	document.getElementById("zone_nom").style.background="red";
	document.getElementById("zone_nom").value=="Saisir un nom !";
	}
	else
	{
	document.getElementById("zone_nom").style.background="white";
	}
}
function controle_vide_prenom()
{
	if (document.getElementById("zone_prenom").value=="")
	{
	document.getElementById("zone_prenom").style.background="red";
	document.getElementById("zone_prenom").value=="Saisir un prénom !";
	}
	else
	{
	document.getElementById("zone_prenom").style.background="white";
	}
	
	
}

function controle_entrer()
{
if (document.getElementById("zone_nom").value=="saisir un nom !")
{
 document.getElementById("validation_nom").innerHTML="erreur";
 }
 else if (document.getElementById("zone_nom").value=="")
{
document.getElementById("validation_nom").innerHTML="erreur";
}
else
{
document.getElementById("validation_nom").innerHTML="ok";
}



if (document.getElementById("zone_prenom").value=="saisir un prenom!")
 {
 document.getElementById("validation_prenom").innerHTML=="erreur";
 }
 else if (document.getElementById("zone_prenom").value=="")
 {
document.getElementById("validation_prenom").innerHTML="erreur";
 }
else
 {
document.getElementById("validation_prenom").innerHTML="ok";
 }
}
function verif_chaise_PrixHT()
{
	if(document.getElementById("form_chaise_PrixHT").value=="Indiquez le prix HT !")
	{
		document.getElementById("form_chaise_PrixHT").value="";
		document.getElementById("form_chaise_PrixHT").style.background="yellow";
	}
	else
	{
		document.getElementById("form_chaise_PrixHT").style.background="yellow";
	}
}

function quit_chaise_PrixHT()
{
var prixHT=document.getElementById("form_chaise_PrixHT").value;
	if(prixHT=="")
	{
		document.getElementById("form_chaise_PrixHT").style.background="red";
		document.getElementById("form_chaise_PrixHT").value="Indiquez le prix HT !";
	}
	else
	{
		document.getElementById("form_chaise_PrixHT").style.background="white";
	}
}
if(document.getElementById("form_chaise_PrixHT").value=="Indiquez le prix HT !")
	{
		document.getElementById("form_chaise_PrixHT").value="";
		document.getElementById("form_chaise_PrixHT").style.background="yellow";
	}
	else
	{
		document.getElementById("form_chaise_PrixHT").style.background="yellow";
	}

	
	
	
	function verif_chaise_Qte()
{
	if(document.getElementById("form_chaise_Qte").value=="Indiquez la quantitè !")
	{
		document.getElementById("form_chaise_Qte").value="";
		document.getElementById("form_chaise_Qte").style.background="yellow";
	}
	else
	{
		document.getElementById("form_chaise_Qte").style.background="yellow";
	}
}

function quit_chaise_Qte()
{
var Qte=document.getElementById("form_chaise_Qte").value;
	if(Qte=="")
	{
		document.getElementById("form_chaise_Qte").style.background="red";
		document.getElementById("form_chaise_Qte").value="Indiquez la quantitè !";
	}
	else
	{
		document.getElementById("form_chaise_Qte").style.background="white";
	}
}





/TABLE//
function verif_table_PrixHT()
{
	if(document.getElementById("form_table_PrixHT").value=="Indiquez le prix!")
	{
		document.getElementById("form_table_PrixHT").value="";
		document.getElementById("form_table_PrixHT").style.background="yellow";
	}
	else
	{
		document.getElementById("form_table_PrixHT").style.background="yellow";
	}
}

function quit_table_Qte()
{
var Qte=document.getElementById("form_table_PrixHT").value;
	if(Qte=="")
	{
		document.getElementById("form_table_PrixHT").style.background="red";
		document.getElementById("form_table_PrixHT").value="Indiquez le prix !";
	}
	else
	{
		document.getElementById("form_table_PrixHT").style.background="white";
	}
	}
	
if (document.getElementById("form_table_PrixHT").value=="Indiquez le prix HT !")
	{
		document.getElementById("form_table_PrixHT").value="";
		document.getElementById("form_table_PrixHT").style.background="yellow";
	}
	else
	{
		document.getElementById("form_table_PrixHT").style.background="yellow";
	}





function Calcul()
{
var valeur1=document.getElementById("form_chaise_PrixHT").value;
var valeur2=document.getElementById("form_chaise_Qte").value;
var montant_chaise_HT = valeur1*valeur2;

	document.getElementById("form_chaise_PrixTTC").value=montant_chaise_HT;
	document.getElementById("Erreur_chaise_TTC").innerHTML="";
	
	if (document.getElementById("form_chaise_PrixTTC").value=="NaN")
	{
	document.getElementById("Erreur_chaise_TTC").innerHTML="Erreur sur la ligne";
	}
}

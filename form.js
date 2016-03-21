function sub(nom,age,tel,birth){ 
	var text; 
	nom=document.getElementById("monnom").value;
	age=document.getElementById("monage").value;
	tel=document.getElementById("montel").value;
	birth=document.getElementById("mybirth").value; 
	if ((nom==null) || (age==null) || (tel==null) || (birth==null)){
		text = "Un champ est vide";
		document.getElementById("test").innerHTML = text;
	}
	else{
		text = "Etape reussie";
	}
}


function pizzaOrderSubmit(document){
	var name=orderForm.name_text.value;
	var address=orderForm.address_text.value;
	var city=orderForm.city_text.value;
	var phone_num=orderForm.phone_text.value;
	var size;
	var toppings="";
	var order="";

	for(i=0;i<=3;i++){
		if(orderForm.size_select[i].checked==true){
			size=orderForm.size_select[i].value;
		}
	}

	if(orderForm.chk_pepperoni.checked==true){
		toppings+=orderForm.chk_pepperoni.value;
		toppings+=", ";
	}
	if(orderForm.chk_sausage.checked==true){
		toppings+=orderForm.chk_sausage.value;
		toppings+=", ";
	}
	if(orderForm.chk_green_peps.checked==true){
		toppings+=orderForm.chk_green_peps.value;
		toppings+=", ";
	}
	if(orderForm.chk_onions.checked==true){
		toppings+=orderForm.chk_onions.value;
		toppings+=", ";
	}
	if(orderForm.chk_mushrooms.checked==true){
		toppings+=orderForm.chk_mushrooms.value;
		toppings+=", ";
	}
	if(orderForm.chk_hot_peps.checked==true){
		toppings+=orderForm.chk_hot_peps.value;
	}

	order+="Name: " + name;
	order+="\n";
	order+="Address: " + address;
	order+="\n";
	order+="City: " + city;
	order+="\n";
	order+="Phone Number: " + phone_num;
	order+="\n";
	order+="Size: " + size;
	order+="\n";
	order+="Toppings: " + toppings;

	orderConfirm.order_text.value=order;

}

btn.addEventListener('click', function handleClick()
{

orderConfirm.value += order;

}
)


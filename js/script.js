$(function(){
	var v1, v2 , op;

	 {
		$("button[name=num]").click(function(){
		$("#area").val($("#area").val() + $(this).val());
	});
}
	soma();
	subtrair();
	multiplicar();
	dividir();
	porcento();
	igual();
	limpar();

});

function soma(){
	$("button[name=soma]").click(function(){
		v1 = parseFloat($("#area").val());
		$("#area").val('');
		op = 'soma';
		$("#op").text("+");
	});	
}

function subtrair(){
	$("button[name=subtrair]").click(function(){
		v1 = parseFloat($("#area").val());
		$("#area").val('');
		op = 'subtrair';
		$("#op").text("-");
	});	
}

function multiplicar(){
	$("button[name=multiplicar]").click(function(){
		v1 = parseFloat($("#area").val());
		$("#area").val('');
		op = 'multiplicar';
		$("#op").text("*");
	});	
}

function dividir(){
	$("button[name=dividir]").click(function(){
		v1 = parseFloat($("#area").val());
		$("#area").val('');
		op = 'dividir';
		$("#op").text("/");
	});	
}

function porcento(){
	$("button[name=porcento]").click(function(){
		v1 = parseFloat($("#area").val());
		$("#area").val('');
		op = 'porcento';
		$("#op").text("%");
	});	
}

function igual() {
	$("button[name=igual]").click(function(){
		v2 = parseFloat($("#area").val());
	
			if (op == 'soma') {
				$("#area").val(v1 + v2);
			}
			else if (op == 'subtrair'){
				$("#area").val(v1 - v2);
			}
			else if (op == 'multiplicar'){
				$("#area").val(v1 * v2);
			}
			else if (op == 'dividir'){
				$("#area").val(v1 / v2);
			}
			else if (op == 'porcento'){
				$("#area").val((v1 * v2)/100);
			}

			$("#op").text("");
	});
}

function limpar() {
	$("button[name=limpar]").click(function(){
		
			$("#area").val("");
			$("#op").text("");
		
	});
}
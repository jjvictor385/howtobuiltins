
// Spliting an string

function f(t, k) {

	// Primeiro, verifica-se se uma string ocorre em certo índice
	var h = function (w, x, i) {
		for (let j = 0; j < x.length; j++, i++)
			if (w[i] !== x[j])
				return false;
		return true;
	};
	
	// Um array para o resultado, e uma string para guardar as partes
	var r = [], cr = '';
	for (let j = 0; j < t.length; j++) {
		/*
			Se ele achou a string separadora em certo índice
			do vetor de caracteres, ele adiciona o que foi 
			coletado na variável cr para o array, e depois deixa-se nula.
		*/
		if (h(t, k, j)) {
			r.push(cr);
			cr = '';
			// Continuar, só que em outro índice
			j += k.length - 1;
			// -1 pois aquele j++ adicionará 1
			continue;
		}
		cr += t[j];
	}

	// Adicionar o resto...
	r.push(cr);

	return r;

}
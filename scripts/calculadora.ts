document.getElementById('btn-calcular')?.addEventListener('click', function() {
    const mediakml = parseFloat((document.getElementById('mediakml') as HTMLInputElement).value);
    const distancia = parseFloat((document.getElementById('Distância') as HTMLInputElement).value);
    const valorGasolina = parseFloat((document.getElementById('valorGasolina') as HTMLInputElement).value);
    
    if (isNaN(mediakml) || isNaN(distancia) || isNaN(valorGasolina)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const quantidadeGasolina = distancia / mediakml;
    const custoTotal = quantidadeGasolina * valorGasolina;

    alert(`O custo total da gasolina para a viagem é: R$ ${custoTotal.toFixed(2)}`);
});

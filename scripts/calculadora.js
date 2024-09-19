document.getElementById('btn-calcular').addEventListener('click', function() {
    const mediakml = parseFloat(document.getElementById('mediakml').value);
    const distancia = parseFloat(document.getElementById('Distância').value);
    const valorGasolina = parseFloat(document.getElementById('valorGasolina').value);
    
    if (isNaN(mediakml) || isNaN(distancia) || isNaN(valorGasolina)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const quantidadeGasolina = distancia / mediakml;
    const custoTotal = quantidadeGasolina * valorGasolina;

    alert(`O custo total da gasolina para a viagem é: R$ ${custoTotal.toFixed(2)}`);
});

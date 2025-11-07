document.addEventListener('DOMContentLoaded', () => {
    const btnLuminoso = document.getElementById('btn-luminoso');
    const btnSombrio = document.getElementById('btn-sombrio');

    const marcarAtivo = (botao) => {
        document.querySelectorAll('.botoes button').forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');
    };


    btnLuminoso.addEventListener('click', () => {
        marcarAtivo(btnLuminoso);
        window.open('Luminoso/luminoso.html', '_blank',);
    });

    btnSombrio.addEventListener('click', () => {
        marcarAtivo(btnSombrio);
        window.open('Sombrio/sombrio.html', '_blank');
    });
});
// document.getElementById('btn-luminoso').addEventListener('click', function () {
//     window.open('luminoso.html', '_blank', 'noopener,noreferrer');
// });

// document.getElementById('btn-sombrio').addEventListener('click', function () {
//
// });






const personagens = [
    {
        nome: "Darth Vader",
        luta: "Forma V (Djem So) agressiva, força bruta com sabre.",
        habilidade: "Telecinese poderosa, estrangulamento da Força, piloto excepcional.",
        estreia: "Star Wars: Episódio IV – Uma Nova Esperança (1977).",
        arma: "Sabre Vermelho.",
        curiosidade: "Anakin Skywalker antes da armadura; voz original de James Earl Jones."
    },
     {
        nome: "Darth Sidious",
        luta: "Forma VII (Juyo) caótica + relâmpagos da Força.",
        habilidade: "Mestre em manipulação, relâmpagos, duplicação de sabres.",
        estreia: "Episódio I – A Ameaça Fantasma (1999).",
        arma: "Sabre Vermelho (duas lâminas ocultas).",
        curiosidade: "Senador Palpatine em segredo; riu ao ser 'morto' por Mace Windu."
    },
    {
        nome: "Darth Maul",
        luta: "Forma VII + sabre duplo (staff).",
        habilidade: "Acrobacias, fúria, sobrevivência cibernética.",
        estreia: "Episódio I – A Ameaça Fantasma (1999).",
        arma: "Sabre Vermelho duplo.",
        curiosidade: "Sobreviveu cortado ao meio; pernas mecânicas em Clone Wars."
    },
   {
        nome: "Conde Dooku",
        luta: "Forma II (Makashi) elegante, duelos de precisão.",
        habilidade: "Relâmpagos, esgrima clássica, ex-Jedi.",
        estreia: "Episódio II – Ataque dos Clones (2002).",
        arma: "Sabre Vermelho curvo.",
        curiosidade: "Ex-mestre de Qui-Gon Jinn; decapitado por Anakin."
    },
     {
        nome: "Kylo Ren",
        luta: "Forma híbrida (V + VII), instável e emocional.",
        habilidade: "Congelamento da Força, leitura mental, sabre cruzado.",
        estreia: "Episódio VII – O Despertar da Força (2015).",
        arma: "Sabre Vermelho instável (cruzado).",
        curiosidade: "Ben Solo, filho de Han e Leia; matou o pai."
    },
   {
        nome: "General Grievous",
        luta: "4 sabres simultâneos, treinamento de Dooku.",
        habilidade: "Ciborgue, coleciona sabres Jedi, tosse crônica.",
        estreia: "Episódio III – A Vingança dos Sith (2005).",
        arma: "Sabres Verde/azul (roubados), depois vermelhos.",
        curiosidade: "Não é sensível à Força; órgão humano restante: coração."
    },
    {
        nome: "Asajj Ventress",
        luta: "Forma dupla (Jar’Kai), acrobacias.",
        habilidade: "Sabres curvos, furtividade, ex-aprendiz de Dooku.",
        estreia: "Obi-Wan Kenobi série (2022, live-action).",
        arma: "Sabre Vermelho (duas lâminas curvas).",
        curiosidade: "Abandonada por Dooku; virou caçadora de recompensas."
    },
     {
        nome: "Capitã Phasma",
        luta: "Combate corpo a corpo, armadura cromada.",
        habilidade: "Liderança militar, blaster, resistência física.",
        estreia: "Episódio VII – O Despertar da Força (2015).",
        arma: "Bastão.",
        curiosidade: "Traiu a Primeira Ordem; jogada no triturador."
    },
     {
        nome: "Segunda Irmã (Trilla)",
        luta: "Forma IV (Ataru) + inquisitorial.",
        habilidade: "Ilusão mental, sabre giratório.",
        estreia: "Jedi: Fallen Order (2019, mencionada em live-action).",
        arma: "Sabre Vermelho duplo giratório.",
        curiosidade: "Ex-Padawan de Cere; morreu redimida."
    },
     {
        nome: "Quinta Irmão",
        luta: "Força bruta, sabre duplo.",
        habilidade: "Intimidação, perseguição Jedi.",
        estreia: "Obi-Wan Kenobi série (2022).",
        arma: "Sabre Vermelho duplo.",
        curiosidade: "Máscara assustadora; morto por Reva."
    },
     {
        nome: "Terceira Irmã (Reva)",
        luta: "Forma agressiva, sabre giratório.",
        habilidade: "Infiltração, vingança pessoal.",
        estreia: "Obi-Wan Kenobi série (2022).",
        arma: "Sabre Vermelho (depois duplo).",
        curiosidade: "Sobreviveu à Ordem 66; queria matar Vader."
    },
     {
        nome: "Snoke",
        luta: "Telecinese, relâmpagos (pouco mostrado).",
        habilidade: "Controle mental, líder da Primeira Ordem.",
        estreia: "Episódio VII – O Despertar da Força (2015).",
        arma: "Nenhum.",
        curiosidade: "Clone criado por Palpatine (revelado em Ascensão Skywalker)."
    },
     {
        nome: "Estrela da Morte",
        luta: "Supervarma planetária.",
        habilidade: "Destruir planetas com raio concentrado.",
        estreia: "Episódio IV – Uma Nova Esperança (1977).",
        curiosidade: "Dois modelos; ambas explodiram (Alderaan foi vítima)."
    },
     {
        nome: "Destructor Estelar Imperial",
        luta: "Artilharia espacial, caças TIE.",
        habilidade: "Bloqueio planetário, canhões turbolaser.",
        estreia: "Episódio IV – Uma Nova Esperança (1977).",
        curiosidade: "Maior que arranha-céus; Executor de Vader tinha 19 km."
    },
    {
        nome: "Stormtrooper",
        luta: "Tiro de precisão (em teoria), formação militar.",
        habilidade: "Lealdade cega, armadura branca.",
        estreia: "Episódio IV – Uma Nova Esperança (1977).",
        arma: "Blaster E-11.",
        curiosidade: "Nunca acertam tiro; 'These blast points are too accurate for Sand People'."
    },
    {
        nome: "Moff Gideon",
        luta: "Sabre negro (Darksaber), tática militar.",
        habilidade: "Estratégia, uso do Darksaber, beskar.",
        estreia: "The Mandalorian S01E07 (2019).",
        arma: "Darksaber.",
        curiosidade: "Queria clonar Grogu; morreu com nave em chamas."
    }
];

// Modal
const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalConteudo = document.getElementById("modal-conteudo");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".btn-personagem").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-personagem");
        const p = personagens[id];

        modalTitulo.textContent = p.nome;
        modalConteudo.innerHTML = `
            <strong>Estilo de Luta:</strong> ${p.luta}<br>
            <strong>Habilidades:</strong> ${p.habilidade}<br>
            <strong>1ª Aparição:</strong> ${p.estreia}<br>
            <strong>Arma:</strong> ${p.arma}<br><br>
            <strong>Curiosidade:</strong> ${p.curiosidade}
        `;
        modal.style.display = "block";
    });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
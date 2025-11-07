const personagens = [
    {
        nome: "Anakin Skywalker",
        luta: "Forma V (Djem So) agressiva, duelos intensos.",
        habilidade: "Piloto genial, mecânico, conexão poderosa com a Força.",
        estreia: "Episódio I – A Ameaça Fantasma (1999).",
        arma: "Sabre Azul.",
        curiosidade: "Escolhido da profecia; construiu C-3PO ainda criança."
    },
    {
        nome: "Leia Organa",
        luta: "Liderança estratégica, treinamento Jedi tardio.",
        habilidade: "Diplomacia, resistência à Força, tiro preciso.",
        estreia: "Episódio IV – Uma Nova Esperança (1977).",
        arma: "Nenhum (treinou com Luke, mas sem uso em filme).",
        curiosidade: "Princesa de Alderaan; matou Jabba com corrente."
    },
    {
        nome: "Luke Skywalker",
        luta: "Forma V + VI, equilíbrio entre ataque e defesa.",
        habilidade: "Visões da Força, construção de sabre, redenção.",
        estreia: "Episódio IV – Uma Nova Esperança (1977).",
        arma: "Sabre Verde (construiu sozinho).",
        curiosidade: "Destruiu a Estrela da Morte com torpedo guiado pela Força."
    },
    {
        nome: "Obi-Wan Kenobi",
        luta: "Forma III (Soresu) defensiva, mestre do contra-ataque.",
        habilidade: "Negociação, ilusão mental, duelo com sabre.",
        estreia: "Episódio IV – Uma Nova Esperança (1977).",
        arma: "Sabre Azul.",
        curiosidade: "Chamava Anakin de “irmão”; virou fantasma da Força."
    },
    {
        nome: "Han Solo",
        luta: "Tiro rápido, pilotagem arriscada, improvisação.",
        habilidade: "Contrabando, Millennium Falcon, lealdade.",
        estreia: "Episódio IV – Uma Nova Esperança (1977).",
        arma: "Blaster DL-44.",
        curiosidade: "Fez a Kessel Run em menos de 12 parsecs."
    },
    {
        nome: "Yoda",
        luta: "Forma IV (Ataru) acrobática, velocidade extrema.",
        habilidade: "Mestre da Força, visão do futuro, treinamento Jedi.",
        estreia: "Episódio V – O Império Contra-Ataca (1980).",
        arma: "Sabre Verde (pequeno).",
        curiosidade: "Viveu 900 anos; exilado em Dagobah."
    },
    {
        nome: "Chewbacca",
        luta: "Força bruta, bowcaster, combate corpo a corpo.",
        habilidade: "Mecânica, lealdade vitalícia, rugido intimidador.",
        estreia: "Episódio IV – Uma Nova Esperança (1977).",
        arma: "Bowcaster.",
        curiosidade: "Dívida de vida com Han; wookiee de Kashyyyk."
    },
    {
        nome: "C-3PO",
        luta: "Nenhum (pacifista, tradução).",
        habilidade: "Fluente em 6 milhões de formas de comunicação.",
        estreia: "Episódio IV – Uma Nova Esperança (1977).",
        arma: "Nenhum.",
        curiosidade: "Construído por Anakin; sempre reclama do perigo."
    },
    {
        nome: "R2-D2",
        luta: "Ferramentas, choques, voo (propulsores).",
        habilidade: "Hacker, reparos, projetor holográfico.",
        estreia: "Episódio IV – Uma Nova Esperança (1977).",
        arma: "Nenhum.",
        curiosidade: "Salvou a frota rebelde várias vezes; memória nunca apagada."
    },
    {
        nome: "Rey",
        luta: "Forma híbrida, instinto natural + treinamento.",
        habilidade: "Cura pela Força, ligação com Kylo, mecânica.",
        estreia: "Episódio VII – O Despertar da Força (2015).",
        arma: "Sabre Azul (depois amarelo).",
        curiosidade: "Sobrevivente de Jakku; adotou nome “Skywalker”."
    },
    {
        nome: "Finn",
        luta: "Treinamento stormtrooper, sabre (pouco).",
        habilidade: "Coragem, lealdade, deserção da Primeira Ordem.",
        estreia: "Episódio VII – O Despertar da Força (2015).",
        arma: "Sabre Azul (usou uma vez).",
        curiosidade: "Ex-FN-2187; primeiro stormtrooper a desertar."
    },
    {
        nome: "Poe Dameron",
        luta: "Pilotagem de X-wing, liderança de esquadrão.",
        habilidade: "Táticas aéreas, coragem, blaster.",
        estreia: "Episódio VII – O Despertar da Força (2015).",
        arma: "Blaster.",
        curiosidade: "Melhor piloto da Resistência; destruiu Starkiller."
    },
    {
        nome: "BB-8",
        luta: "Choques, projéteis, rolamento rápido.",
        habilidade: "Mapas, reparos, lealdade a Poe.",
        estreia: "Episódio VII – O Despertar da Força (2015).",
        arma: "Nenhum.",
        curiosidade: "Escondeu mapa de Luke; “polegar” de isqueiro."
    },
    {
        nome: "Grogu",
        luta: "Nenhum (bebê), usa Força instintivamente.",
        habilidade: "Levitação, cura, proteção (bolha).",
        estreia: "The Mandalorian S01E01 (2019).",
        arma: "Nenhum.",
        curiosidade: "Mesma espécie de Yoda; 50 anos, age como bebê."
    },
    {
        nome: "Mandaloriano (Din Djarin)",
        luta: "Beskar + armas, caçador de recompensas.",
        habilidade: "Jetpack, lança-chamas, Darksaber (temporário).",
        estreia: "The Mandalorian S01E01 (2019).",
        arma: "Darksaber (temporário).",
        curiosidade: "“This is the Way”; adotou Grogu como filho."
    },
    {
        nome: "Millennium Falcon",
        luta: "Pilotagem evasiva, manobras arriscadas em hiperespaço.",
        habilidade: "Velocidade 0.5 acima da luz, canhões quádruplos, escudos defletores.",
        estreia: "Episódio IV – Uma Nova Esperança (1977).",
        arma: "Canhões quádruplos.",
        curiosidade: "Modificada por Han e Lando; fez a Kessel Run em menos de 12 parsecs."
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
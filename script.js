document.addEventListener('DOMContentLoaded', () => {
    // 1. O script começa a rodar?
    console.log("Script iniciado. A página HTML foi carregada.");

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 2. O botão foi encontrado?
    if (themeToggle) {
        console.log("Botão de tema foi encontrado com sucesso!");
    } else {
        // Se esta mensagem aparecer, o ID do botão no HTML está errado ou faltando.
        console.error("ERRO CRÍTICO: Não foi possível encontrar o botão com id='theme-toggle'. Verifique seu arquivo index.html.");
        return; // Para a execução do script se o botão não for encontrado.
    }

    const links = [
        {
          url: "https://lucasraphael3.github.io/",
          icon: "briefcase",
          title: "Portfólio Profissional",
          description: "Conheça meus projetos e experiências"
        },
        {
          url: "https://github.com/LucasRaphael3",
          icon: "code",
          title: "GitHub",
          description: "Veja meus códigos e projetos open source"
        },
        {
          url: "https://buymeacoffee.com/lucasraphael",
          icon: "coffee",
          title: "Buy Me a Coffee",
          description: "Apoie meu trabalho com um cafezinho"
        }
      ];

    links.forEach(link => {
        const card = document.createElement("a");
        card.href = link.url;
        card.target = "_blank";
        card.className = "link-card";
    
        card.innerHTML = `
          <div class="link-icon"><i data-lucide="${link.icon}"></i></div>
          <div class="link-text">
            <strong>${link.title}</strong>
            <span>${link.description}</span>
          </div>
          <div class="link-action"><i data-lucide="arrow-up-right"></i></div>
        `;
    
        linksContainer.appendChild(card);
      });
    
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            body.classList.add('dark');
            console.log("Tema escuro aplicado.");
        } else {
            body.classList.remove('dark');
            console.log("Tema claro aplicado.");
        }
    };


    themeToggle.addEventListener('click', () => {
        console.log("Botão de tema foi clicado!");
        body.classList.toggle('dark');
        
        // Salva a preferência
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            console.log("Preferência salva: tema escuro.");
        } else {
            localStorage.setItem('theme', 'light');
            console.log("Preferência salva: tema claro.");
        }
    });

    // Aplica o tema inicial
    applyTheme();

});

// TEMPLATES DE LAYOUTS (aleatórios)
const layoutTemplates = [
    // Layout 1: Hero com imagem lateral
    (dados) => `
        <div class="lp-wrapper">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
                <div style="text-align: left;" class="hero-content">
                    <div class="lp-logo">${dados.logo}</div>
                    <h1 class="lp-titulo">${dados.titulo}</h1>
                    <p class="lp-sub">${dados.subtitulo}</p>
                    <button class="lp-cta">${dados.cta}</button>
                </div>
                <div class="lp-img-placeholder lp-img-animate">${dados.imgDesc}</div>
            </div>
            <div class="lp-features">
                ${dados.features.map((f, i) => `
                    <div class="lp-feature-card" style="animation-delay: ${i * 0.1}s;">
                        <h3>${f.titulo}</h3>
                        <p>${f.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    
    // Layout 2: Hero centralizado com features abaixo
    (dados) => `
        <div class="lp-wrapper">
            <div class="hero-center">
                <div class="lp-logo">${dados.logo}</div>
                <h1 class="lp-titulo">${dados.titulo}</h1>
                <p class="lp-sub">${dados.subtitulo}</p>
                <button class="lp-cta">${dados.cta}</button>
            </div>
            <div class="lp-img-placeholder lp-img-animate">${dados.imgDesc}</div>
            <div class="lp-features">
                ${dados.features.map((f, i) => `
                    <div class="lp-feature-card" style="animation-delay: ${i * 0.1}s;">
                        <h3>${f.titulo}</h3>
                        <p>${f.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    
    // Layout 3: Hero com features em coluna única
    (dados) => `
        <div class="lp-wrapper">
            <div class="hero-center">
                <div class="lp-logo">${dados.logo}</div>
                <h1 class="lp-titulo">${dados.titulo}</h1>
                <p class="lp-sub">${dados.subtitulo}</p>
            </div>
            <div class="lp-img-placeholder lp-img-animate" style="margin: 60px auto;">${dados.imgDesc}</div>
            <button class="lp-cta" style="margin-bottom: 60px;">${dados.cta}</button>
            <div style="max-width: 700px; margin: 0 auto;">
                ${dados.features.map((f, i) => `
                    <div class="lp-feature-card lp-feature-single" style="animation-delay: ${i * 0.1}s;">
                        <h3>${f.titulo}</h3>
                        <p>${f.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    
    // Layout 4: Imagem em primeiro, depois hero
    (dados) => `
        <div class="lp-wrapper">
            <div class="lp-img-placeholder lp-img-animate" style="margin-bottom: 60px;">${dados.imgDesc}</div>
            <div class="hero-center">
                <div class="lp-logo">${dados.logo}</div>
                <h1 class="lp-titulo">${dados.titulo}</h1>
                <p class="lp-sub">${dados.subtitulo}</p>
                <button class="lp-cta">${dados.cta}</button>
            </div>
            <div class="lp-features" style="margin-top: 80px;">
                ${dados.features.map((f, i) => `
                    <div class="lp-feature-card" style="animation-delay: ${i * 0.1}s;">
                        <h3>${f.titulo}</h3>
                        <p>${f.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `,

    // Layout 5: Cards flutuantes com grid agressivo
    (dados) => `
        <div class="lp-wrapper">
            <div class="hero-center" style="margin-bottom: 80px;">
                <div class="lp-logo">${dados.logo}</div>
                <h1 class="lp-titulo">${dados.titulo}</h1>
                <p class="lp-sub">${dados.subtitulo}</p>
                <button class="lp-cta">${dados.cta}</button>
            </div>
            <div class="lp-features" style="margin-bottom: 60px;">
                ${dados.features.map((f, i) => `
                    <div class="lp-feature-card lp-feature-floating" style="animation-delay: ${i * 0.15}s;">
                        <div class="feature-icon">✨</div>
                        <h3>${f.titulo}</h3>
                        <p>${f.desc}</p>
                    </div>
                `).join('')}
            </div>
            <div class="lp-img-placeholder lp-img-animate">${dados.imgDesc}</div>
        </div>
    `,

    // Layout 6: Hero com timeline de features
    (dados) => `
        <div class="lp-wrapper">
            <div class="hero-center" style="margin-bottom: 100px;">
                <div class="lp-logo">${dados.logo}</div>
                <h1 class="lp-titulo">${dados.titulo}</h1>
                <p class="lp-sub">${dados.subtitulo}</p>
                <button class="lp-cta">${dados.cta}</button>
            </div>
            <div class="lp-img-placeholder lp-img-animate" style="margin-bottom: 80px;">${dados.imgDesc}</div>
            <div class="lp-features-timeline">
                ${dados.features.map((f, i) => `
                    <div class="lp-feature-timeline-item" style="animation-delay: ${i * 0.15}s;">
                        <div class="timeline-number">${i + 1}</div>
                        <div class="timeline-content">
                            <h3>${f.titulo}</h3>
                            <p>${f.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,

    // Layout 7: Duas colunas invertidas com destaque
    (dados) => `
        <div class="lp-wrapper">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-bottom: 80px;">
                <div class="lp-img-placeholder lp-img-animate">${dados.imgDesc}</div>
                <div style="text-align: left;" class="hero-content">
                    <div class="lp-logo">${dados.logo}</div>
                    <h1 class="lp-titulo">${dados.titulo}</h1>
                    <p class="lp-sub">${dados.subtitulo}</p>
                    <button class="lp-cta">${dados.cta}</button>
                </div>
            </div>
            <div class="lp-features">
                ${dados.features.map((f, i) => `
                    <div class="lp-feature-card lp-feature-highlighted" style="animation-delay: ${i * 0.1}s;">
                        <div class="feature-badge">${i + 1}</div>
                        <h3>${f.titulo}</h3>
                        <p>${f.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `
];

const bibliotecaNichos = {
    "loja de tenis": {
        logo: "SneakerX Store",
        titulo: "Performance e estilo a cada passo",
        subtitulo: "Explore nossa nova coleção de tênis exclusivos com tecnologia de amortecimento avançada. Conforto sob medida para o seu dia a dia ou treinos intensos.",
        cta: "Garantir Meu Par",
        imgDesc: "Espaço para Foto do Tênis de Destaque",
        features: [
            { titulo: "Tecnologia Avançada", desc: "Amortecimento de última geração para máximo conforto" },
            { titulo: "Design Exclusivo", desc: "Modelos assinados por profissionais do esporte" },
            { titulo: "Durabilidade", desc: "Materiais de qualidade premium que duram muito tempo" }
        ]
    },
    "advocacia": {
        logo: "Silva & Associados",
        titulo: "Defendendo seus direitos com excelência",
        subtitulo: "Assessoria jurídica especializada para proteger seu patrimônio e sua empresa. Atendimento humanizado, transparente e focado em soluções ágeis.",
        cta: "Agendar Consulta",
        imgDesc: "Espaço para Foto do Escritório ou Equipe",
        features: [
            { titulo: "Expertise Comprovada", desc: "20+ anos de experiência em direito empresarial" },
            { titulo: "Atendimento Personalizado", desc: "Soluções adaptadas para sua situação específica" },
            { titulo: "Resultados Efetivos", desc: "Taxa de sucesso acima de 95% em casos" }
        ]
    },
    "saude": {
        logo: "Clínica Bem Estar",
        titulo: "Sua saúde é nossa prioridade",
        subtitulo: "Atendimento médico de qualidade com profissionais especializados. Estrutura moderna e humanizada para seu conforto.",
        cta: "Agendar Consulta",
        imgDesc: "Espaço para Foto da Clínica",
        features: [
            { titulo: "Profissionais Qualificados", desc: "Médicos especialistas e equipe de suporte" },
            { titulo: "Infraestrutura Moderna", desc: "Equipamentos de última geração" },
            { titulo: "Atendimento 24h", desc: "Sempre disponível para emergências" }
        ]
    },
    "agencia": {
        logo: "Creative Agency Pro",
        titulo: "Sua marca merece destaque",
        subtitulo: "Estratégias criativas e inovadoras para alavancar seu negócio. Resultados comprovados em marketing digital e design.",
        cta: "Solicitar Orçamento",
        imgDesc: "Espaço para Portfolio",
        features: [
            { titulo: "Design Criativo", desc: "Identidade visual que marca presença" },
            { titulo: "Estratégia Digital", desc: "Planos de marketing personalizados" },
            { titulo: "Resultado Mensurável", desc: "Aumentamos seu ROI significativamente" }
        ]
    },
    "ecommerce": {
        logo: "ShopMax",
        titulo: "Compre com segurança e confiança",
        subtitulo: "Ampla variedade de produtos com preços competitivos. Entrega rápida e suporte ao cliente de qualidade.",
        cta: "Começar a Comprar",
        imgDesc: "Espaço para Vitrine de Produtos",
        features: [
            { titulo: "Variedade", desc: "Milhares de produtos em estoque" },
            { titulo: "Preços Competitivos", desc: "Melhores valores do mercado" },
            { titulo: "Entrega Rápida", desc: "Chegue em até 24 horas" }
        ]
    },
    "padrao": {
        logo: "[Nome da Sua Marca]",
        titulo: "O título impactante do seu nicho fica aqui",
        subtitulo: "Texto explicativo curto e focado em conversão. Explique o maior benefício do seu produto ou serviço em poucas linhas.",
        cta: "Clique Aqui",
        imgDesc: "Espaço para Imagem Ilustrativa",
        features: [
            { titulo: "Benefício 1", desc: "Descrição do primeiro grande diferencial" },
            { titulo: "Benefício 2", desc: "Descrição do segundo grande diferencial" },
            { titulo: "Benefício 3", desc: "Descrição do terceiro grande diferencial" }
        ]
    }
};

let modoCodigo = false;
let htmlGeradoString = "";
let cssGeradoString = "";
let layoutSelecionado = 0;

// Carrega parâmetros da URL ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('tipo')) {
        document.getElementById('orientacao').value = params.get('tipo');
        document.getElementById('estilo').value = params.get('estilo') || 'moderno';
        document.getElementById('cor1').value = params.get('c1') || '#ffffff';
        document.getElementById('cor2').value = params.get('c2') || '#1e293b';
        document.getElementById('cor3').value = params.get('c3') || '#ff4500';
        gerarLayout(false);
    }
});

function gerarLayout(atualizarURL = true) {
    const estilo = document.getElementById('estilo').value;
    const orientacao = document.getElementById('orientacao').value.toLowerCase().trim();
    const c1 = document.getElementById('cor1').value;
    const c2 = document.getElementById('cor2').value;
    const c3 = document.getElementById('cor3').value;

    // Escolhe um layout aleatório
    layoutSelecionado = Math.floor(Math.random() * layoutTemplates.length);

    if (atualizarURL) {
        const novaURL = `?tipo=${encodeURIComponent(orientacao)}&estilo=${estilo}&c1=${encodeURIComponent(c1)}&c2=${encodeURIComponent(c2)}&c3=${encodeURIComponent(c3)}`;
        window.history.pushState({}, '', novaURL);
    }

    const preview = document.getElementById('preview-container');
    const render = document.getElementById('lp-render');

    if (estilo === 'moderno') {
        preview.style.setProperty('--font-layout', "'Inter', sans-serif");
        preview.style.setProperty('--radius-layout', '30px');
        preview.style.setProperty('--transform-titulo', 'none');
    } else if (estilo === 'classico') {
        preview.style.setProperty('--font-layout', "'Georgia', serif");
        preview.style.setProperty('--radius-layout', '0px');
        preview.style.setProperty('--transform-titulo', 'uppercase');
    } else if (estilo === 'minimalista') {
        preview.style.setProperty('--font-layout', "'Helvetica', sans-serif");
        preview.style.setProperty('--radius-layout', '8px');
        preview.style.setProperty('--transform-titulo', 'none');
    } else if (estilo === 'energico') {
        preview.style.setProperty('--font-layout', "'Poppins', sans-serif");
        preview.style.setProperty('--radius-layout', '15px');
        preview.style.setProperty('--transform-titulo', 'uppercase');
    }

    preview.style.setProperty('--cor-fundo', c1);
    preview.style.setProperty('--cor-texto', c2);
    preview.style.setProperty('--cor-primaria', c3);

    const dadosNicho = bibliotecaNichos[orientacao] || bibliotecaNichos["padrao"];
    
    // Usa o layout aleatório
    const layoutTemplate = layoutTemplates[layoutSelecionado];
    render.innerHTML = `<div class="lp-body">${layoutTemplate(dadosNicho)}</div>`;

    atualizarCodigoFonte(estilo, c1, c2, c3, dadosNicho);
    document.getElementById('btn-download').style.display = 'inline-block';
    document.getElementById('btn-abrir-aba').style.display = 'inline-block';
    document.getElementById('btn-novo-layout').style.display = 'inline-block';
}

function atualizarCodigoFonte(estilo, c1, c2, c3, dados) {
    const font = estilo === 'moderno' ? "'Inter', sans-serif" : 
                estilo === 'classico' ? "'Georgia', serif" :
                estilo === 'minimalista' ? "'Helvetica', sans-serif" :
                "'Poppins', sans-serif";
    const radius = estilo === 'moderno' ? "30px" : 
                  estilo === 'classico' ? "0px" :
                  estilo === 'minimalista' ? "8px" :
                  "15px";
    const textTransform = (estilo === 'classico' || estilo === 'energico') ? "uppercase" : "none";

    // Gera CSS separado com animações e transições
    cssGeradoString = `/* ESTILOS DA LANDING PAGE COM ANIMAÇÕES */
@keyframes slideInFromBottom {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInFromLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInFromRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes scaleUp {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

* { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
}

body { 
    background: linear-gradient(135deg, ${c1} 0%, ${c1} 100%);
    color: ${c2}; 
    font-family: ${font}; 
    padding: 80px 20px; 
    min-height: 100vh;
    transition: all 0.4s ease;
}

.wrapper { 
    max-width: 1000px; 
    margin: 0 auto; 
    text-align: center;
}

.logo { 
    font-size: 24px; 
    font-weight: bold; 
    margin-bottom: 40px; 
    color: ${c3}; 
    text-transform: ${textTransform};
    animation: slideInFromLeft 0.7s ease-out;
    letter-spacing: 1px;
}

.titulo { 
    font-size: 3rem; 
    margin-bottom: 20px; 
    font-weight: 800; 
    color: ${c2};
    text-transform: ${textTransform};
    animation: slideInFromBottom 0.8s ease-out;
    line-height: 1.2;
    letter-spacing: -1px;
}

.subtitulo { 
    font-size: 1.25rem; 
    margin-bottom: 40px; 
    opacity: 0.8; 
    line-height: 1.6;
    animation: slideInFromBottom 0.9s ease-out;
}

.cta { 
    display: inline-block; 
    background: linear-gradient(135deg, ${c3} 0%, ${c3} 100%);
    color: #ffffff; 
    padding: 15px 40px; 
    font-size: 1.1rem; 
    font-weight: bold; 
    text-decoration: none; 
    border: 2px solid ${c3};
    border-radius: ${radius}; 
    cursor: pointer; 
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    animation: scaleUp 1s ease-out;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.cta::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255,255,255,0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.cta:hover { 
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    filter: brightness(1.1);
}

.cta:hover::before {
    width: 300px;
    height: 300px;
}

.cta:active {
    transform: translateY(-1px);
}

.imagem { 
    width: 100%; 
    max-width: 500px; 
    height: 300px; 
    background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
    border-radius: ${radius}; 
    margin: 40px auto 0; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    border: 2px dashed #cbd5e1; 
    color: #64748b;
    transition: all 0.4s ease;
    animation: slideInFromRight 0.8s ease-out;
}

.imagem:hover {
    border-color: ${c3};
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.features { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
    gap: 30px; 
    margin-top: 60px;
    padding-top: 60px;
    border-top: 1px solid rgba(0,0,0,0.1);
    animation: slideInFromBottom 1s ease-out;
}

.feature-card { 
    padding: 30px 20px; 
    border-radius: ${radius}; 
    background-color: rgba(0,0,0,0.05);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    animation: slideInFromBottom 0.6s ease-out;
    border: 1px solid transparent;
}

.feature-card:hover {
    transform: translateY(-10px);
    background-color: rgba(0,0,0,0.08);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
    border-color: ${c3};
}

.feature-card h3 { 
    margin-bottom: 15px; 
    font-size: 1.3rem; 
    color: ${c3};
    transition: all 0.3s ease;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.5px;
}

.feature-card:hover h3 {
    transform: scale(1.05);
}

.feature-card p {
    opacity: 0.8;
    line-height: 1.6;
    transition: opacity 0.3s ease;
}

.feature-card:hover p {
    opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
    .titulo {
        font-size: 2rem;
    }

    .subtitulo {
        font-size: 1rem;
    }
}`;

    // Gera HTML com CSS separado
    htmlGeradoString = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${dados.titulo}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper">
        <div class="logo">${dados.logo}</div>
        <h1 class="titulo">${dados.titulo}</h1>
        <p class="subtitulo">${dados.subtitulo}</p>
        <button class="cta">${dados.cta}</button>
        <div class="imagem">${dados.imgDesc}</div>
        <div class="features">
            ${dados.features.map((f, i) => `
            <div class="feature-card" style="animation-delay: ${i * 0.1}s;">
                <h3>${f.titulo}</h3>
                <p>${f.desc}</p>
            </div>`).join('')}
        </div>
    </div>
</body>
</html>`;

    document.getElementById('codigo-container').textContent = htmlGeradoString;
}

function alternarVisao() {
    const preview = document.getElementById('preview-container');
    const codigo = document.getElementById('codigo-container');
    const btn = document.getElementById('btn-alternar');

    if (!modoCodigo) {
        preview.style.display = 'none';
        codigo.style.display = 'block';
        btn.textContent = 'Ver Visualização';
        modoCodigo = true;
    } else {
        preview.style.display = 'block';
        codigo.style.display = 'none';
        btn.textContent = 'Ver Código';
        modoCodigo = false;
    }
}

function abrirEmAba() {
    if (!htmlGeradoString) return;
    const blob = new Blob([htmlGeradoString], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}

function baixarCodigo() {
    if (!htmlGeradoString) return;
    
    // Download HTML
    const blobHtml = new Blob([htmlGeradoString], { type: 'text/html' });
    const linkHtml = document.createElement('a');
    linkHtml.href = URL.createObjectURL(blobHtml);
    linkHtml.download = 'index.html';
    document.body.appendChild(linkHtml);
    linkHtml.click();
    document.body.removeChild(linkHtml);
    
    // Download CSS após um pequeno delay
    setTimeout(() => {
        const blobCss = new Blob([cssGeradoString], { type: 'text/css' });
        const linkCss = document.createElement('a');
        linkCss.href = URL.createObjectURL(blobCss);
        linkCss.download = 'style.css';
        document.body.appendChild(linkCss);
        linkCss.click();
        document.body.removeChild(linkCss);
    }, 500);
}

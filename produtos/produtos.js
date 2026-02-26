const PRODUTOS = [
  // ================= PRODUTOS EM DESTAQUES =================
  {
    id: 100,
    nome: "Alicate para Anéis 7 Idea – Bico Reto para Anéis Internos e Externos",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/ALICATE BICO FINO.jpeg",
    descricao: "Alicate para Anéis Idea 7”, ferramenta essencial para montagem, manutenção e remoção de anéis de retenção (anéis elásticos). Projetado para oferecer precisão e firmeza, possui bico reto e pontas finas que facilitam o acesso a locais estreitos.",
  },

  {
    id: 101,
    nome: "Alicate Crimpador LUATEK LWJ-110 com Decapador – Ferramenta para RJ45/RJ117",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/ALICATE CRIPADOR.jpeg",
    descricao:"Alicate Crimpador LUATEK LWJ-110, uma ferramenta multifuncional indispensável para profissionais de redes, telefonia e instalações de cabeamento estruturado. Projetado para cortar, decapar e crimpar cabos com precisão, oferece praticidade e eficiência em um único equipamento.",
  },

  {
    id: 103,
    nome: "Alicate de Eletricista Desencapador ONEX G7-8522 – Multifuncional de Alta Precisão",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/ALICATE DE ELETRICISTA.jpeg",
    descricao:"Alicate de Eletricista ONEX G7-8522, ferramenta multifuncional desenvolvida para oferecer praticidade, precisão e segurança em trabalhos elétricos. Ideal para profissionais e usuários domésticos, ele permite desencapar, cortar e crimpar fios com eficiência, tornando as instalações elétricas mais rápidas e organizadas.",
  },

  {
    id: 104,
    nome: "Alicate Amperímetro Digital BOMVINK BOM-6004 – Medição Precisa e Segura",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/ALICATE ANPERÍMETRO DIGITAL.jpeg",
    descricao:"Alicate Amperímetro Digital BOMVINK BOM-6004, ferramenta essencial para medições elétricas seguras e precisas. Desenvolvido para profissionais e entusiastas da elétrica, permite medir corrente sem contato direto com o condutor, garantindo maior segurança durante o uso.",
  },

  {
    id: 105,
    nome: "Martelo Multifuncional BOMVINK BOM-1501 – Ferramenta 7 em 1 Compacta e Versátil",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/CANIVETE.jpeg",
    descricao:"Martelo Multifuncional BOMVINK BOM-1501, ferramenta prática e versátil, ideal para atividades domésticas, camping, emergências e pequenos reparos. Com design compacto e dobrável, reúne diversas funções em um único equipamento, oferecendo praticidade e economia de espaço. Fabricado com estrutura metálica resistente e cabo com acabamento em madeira, proporciona durabilidade, firmeza e conforto no manuseio.",
  },

  {
    id: 106,
    nome: "Kit de Precisão B-TEK Ferramentas – Jogo de Chaves e Bits para Manutenção Eletrônica",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/CHAVE DE BICOS.jpeg",
    descricao:"Kit de Precisão B-TEK Ferramentas, conjunto completo desenvolvido para trabalhos delicados que exigem precisão e cuidado. Ideal para manutenção de eletrônicos, celulares, notebooks, relógios, óculos e pequenos equipamentos, este kit oferece uma ampla variedade de bits e acessórios em um estojo compacto e organizado. Com design portátil e ferramentas de alta qualidade, é perfeito tanto para profissionais quanto para uso doméstico.",
  },

  {
    id: 107,
    nome: "Chave teste de tensão BOMVINK BOM-6403  ",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/CHAVE DE FENDA E TESTE DE TENSÃO.jpeg",
    descricao:"Chave teste de tensão BOMVINK BOM-6403, ideal para detectar corrente elétrica em tomadas, fios e instalações residenciais. Com design transparente, material isolante e chip inteligente, garante mais segurança e precisão na identificação de fase e neutro.",
  },

  {
    id: 108,
    nome: "Chave Inglesa Ajustável – Ferramenta Universal com Cabo Emborrachado Antiderrapante",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/CHAVE INGLESA COM LUVA.jpeg",
    descricao:"Chave Inglesa Ajustável, ferramenta essencial para apertar e soltar porcas e parafusos de diferentes tamanhos com praticidade e precisão. Seu mecanismo de ajuste por rosca permite adaptar a abertura da mandíbula de forma rápida, tornando-a ideal para diversas aplicações mecânicas, hidráulicas e domésticas. Com estrutura metálica resistente e cabo ergonômico emborrachado, oferece conforto, firmeza e segurança durante o uso.",
  },

  {
    id: 109,
    nome: "Chave Inglesa Ajustável Profissional AL-1694 Sality. ",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/CHAVE INGLESA.jpeg",
    descricao:"Chave Inglesa Ajustável Profissional AL-1694 Sality, ideal para apertar ou soltar porcas e parafusos de diversos tamanhos. Possui rosca recartilhada para ajuste fácil da abertura da mandíbula e escala métrica. Feita de Aço carbono com acabamento cromado para maior durabilidade. ",
  },

  {
    id: 110,
    nome: "Chave de corrente de 8 polegadas ID-2385C Idea ",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/CHAVES DE CORRENTE.jpeg",
    descricao:"Chave de corrente de 8 polegadas ID-2385C Idea, perfeita para remover filtros de óleo e serviços automotivos pesados. Construção robusta projetada para fácil utilização na remoção de filtros cilíndricos.",
  },

  {
    id: 111,
    nome: "Cotoveleira de compressão ortopédica verde",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/COTOVELEIRA.jpeg",
    descricao:"Cotoveleira de compressão ortopédica, design elástico e respirável, oferecendo conforto durante os movimentos e suporte para alívio de dores ou prevenção de lesões. Produzida com tecidos respiráveis e tecnologia de tecelagem tridimensional 3D para ajuste superior e compressão terapêutica. ",
  },

  {
    id: 112,
    nome: "Kit com 3 Escovas Multiuso Aço SQ",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/ESCOVA DE AÇO.jpeg",
    descricao:"Kit com 3 Escovas Multiuso Aço SQ, inclui uma escova com cerdas de aço, uma de latão e uma de nylon. Ideal para remover ferrugem, tinta, resíduos de solda e para limpezas delicadas. Cerdas metálicas/plásticas com cabo de plástico. ",
  },

  {
    id: 113,
    nome: "Mini Bands Faixas Elásticas de Resistência para Exercícios",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/FAIXA DE TREINO.jpeg",
    descricao: "Mini Bands ideais para exercícios, como condicionamento físico, fortalecimento muscular, alongamento, treino funcional e fisioterapia. Feitas de látex/TPE (elastômero termoplástico), que oferecem flexibilidade e durabilidade. ",
    cor: ["vermelho", "verde", "azul", "amarelo"] // NOVO CAMPO
  },

  {
    id: 114,
    nome: "Ferro de Solda Elétrico Bomvink BOM-9516. ",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/FERRO DE SOLDA.jpeg",
    descricao:"Ferro de Solda Elétrico Bomvink BOM-9516, tensão de 220V, potência de 30W, ideal para trabalhos de eletrônica, pequenos reparos e soldagem de componentes",
  },

  {
    id: 115,
    nome: "Ferro de Solda Aço Forte D14. ",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/FERRO DE SOLDA 1.jpeg",
    descricao:"Ferro de Solda Ato Forte D14, 60W, ideal para trabalhos que exigem eficiência, feita de aço inoxidável para condução de calor.",
  },

  {
    id: 116,
    nome: "Faixa Sub Patelar Ajustável para joelho MBFit",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/JOELHEIRA 2.jpeg",
    descricao:"Faixa Sub Patelar Ajustável para joelho MBFit, indicada para suporte e alívio de dores, prevenção e tratamento de lesões médias na região do joelho, Síndrome de Osgood Schlater, e prevenção de lesões durante a prática de exercícios;",
  },

  {
    id: 117,
    nome: "Par de joelheira Esportivas e Compressão Ortopédica",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/JOELHEIRA 3.jpeg",
    descricao:"Par de joelheira Esportivas e Compressão Ortopédica, projetadas para amortecer impactos e oferecer segurança durante atividades físicas intensas. Com almofada frontal acolchoada com espuma de alta densidade, dividida em gomos para permitir flexão natural do joelho sem perder a proteção central. ",
  },

  {
    id: 118,
    nome: "Joelheira Ortopédica Tensor Joelho Ajustável Verde",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/JOELHEIRA 4.jpeg",
    descricao:"Joelheira ortopédica de compressão Tensor possui faixas elásticas ajustáveis para estabilidade patelar e tecido confortável.",
  },

  {
    id: 119,
    nome: "Jogo de Chaves Torx Kapbom KA-1863",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/JOGO DE CHAVES ALLEN 1.jpeg",
    descricao:"Jogo de Chaves Torx Kapbom KA-1863 Kit com 9 peça, fabricado em aço Cromo-Vanádio (CR-V) para maior durabilidade, inclui tamanhos de T-10 a T-50, ferramenta ergonômica com tratamento especial para prolongar a vida útil.",
  },

  {
    id: 120,
    nome: "Jogo de Chaves Allen e Torx SQ",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/JOGO DE CHAVES ALLEN E TORX.jpeg",
    descricao:"Jogo de Chaves Torx e Allen com 08 peças, Tamanhos Allen: 1,5mm, 2,0mm, 2,5mm, Tamanhos Torx: T15, T20, T25, T27, T30. Ferramentas compactas em formato L, ideais para reparos rápidos, bicicletas e eletrônicos.",
  },

  {
    id: 121,
    nome: "Jogo de Chaves Allen profissional Idea",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/JOGO DE CHAVES ALLEN STATOOLS.jpeg",
    descricao:"Jogo de Chaves Allen profissional Idea com 9 peças. Inclui chaves de 3 mm a 14 mm (3, 4, 5, 6, 7, 8, 10, 12, 14 mm). Chaves sextavadas em formato L, ideais para parafusos com encaixe interno hexagonal. Ferramenta essencial para montagem de móveis, reparos em bicicletas, máquinas e equipamentos eletrônicos.",
  },

  {
    id: 122,
    nome: "jogo de chaves Allen hexagonal de 9 peças da marca Idea (modelo ID-4907H).",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/JOGO DE CHAVES ALLEN.jpeg",
    descricao:"Jogo de Chaves Allen profissional Idea com 9 peças. Inclui chaves de 3 mm a 14 mm (3, 4, 5, 6, 7, 8, 10, 12, 14 mm). Chaves sextavadas em formato L, ideais para parafusos com encaixe interno hexagonal. Ferramenta essencial para montagem de móveis, reparos em bicicletas, máquinas e equipamentos eletrônicos.",
  },

  {
    id: 123,
    nome: "Jogo de Chave Catraca com Soquetes Mik Tools",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/KIT DE CHAVE DE CATRACA.jpeg",
    descricao:"Jogo de Chave Catraca com Soquetes Mik Tools inclui chave catraca, alongador e diversos soquetes para apertar ou soltar parafusos e porcas. Produzido em aço cromo vanádio, garantindo maior durabilidade e resistência contra ferrugem e corrosão. Ferramenta indispensável para manutenção automotiva e consertos em geral. ",
  },

  {
    id: 124,
    nome: "Jogo de Soquetes e Bits ONEX",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/KIT DE CHAVES 1.jpeg",
    descricao:"Jogo de Soquetes e Bits ONEX contendo 46 peças organizadas em uma maleta portátil. Inclui uma catraca reversível de 1/4, soquetes de tamanhos variados (4mm a 14mm), chaves Allen, extensões e chaves de fenda/Phillips. Ideal para reparos automotivos, de bicicletas ou manutenção doméstica em geral. Geralmente fabricado em aço cromo vanádio para maior durabilidade.",
  },

  {
    id: 125,
    nome: "Kit Jogo Chave Catraca Soquete Bit 46 Peças Holda/Bomvik",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/KIT DE CHAVES.jpeg",
    descricao:"Kit Jogo Chave Catraca Soquete Bit 46 Peças Holda/Bomvik Inclui soquetes, bits de diversos tipos (fenda, phillips) e uma chave catraca de 1/4. Recomendado para uso automotivo, mecânico e doméstico. Chave catraca reversível para maior praticidade no aperto e desaperto de parafusos.",
  },

  {
    id: 126,
    nome: "Conjunto de Ferramentas ST-619 STARMEGA",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/KIT DE FERRAMENTA 1.jpeg",
    descricao:"Kit Jogo Chave Catraca Soquete Bit 46 Peças Holda/Bomvik Inclui soquetes, bits de diversos tipos (fenda, phillips) e uma chave catraca de 1/4. Recomendado para uso automotivo, mecânico e doméstico. Chave catraca reversível para maior praticidade no aperto e desaperto de parafusos.",
  },

  {
    id: 127,
    nome: "Kit de Ferramentas Luatek LWJ-176",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/KIT DE FERRAMENTA 2.jpeg",
    descricao:"Kit de Ferramentas Luatek LWJ-176 contendo alicate universal, estilete grande (18mm), chave de fenda e chave phillips. As chaves possuem cabos emborrachados antiderrapantes, ideal para reparos domésticos e manutenção geral.",
  },

  {
    id: 128,
    nome: "Kit de ferramentas multiuso Starmega ST-627.",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/KIT DE FERRAMENTA.jpeg",
    descricao:"Kit de ferramentas multiuso Starmega ST-627, inclui uma chave de fenda com ponta fenda e uma chave de fenda Phillips, acompanha um estilete de 18mm com lâmina SK5, um estojo com lâminas de reposição. Projetado com materiais duráveis e design ergonômico.",
  },

  {
    id: 129,
    nome: "Kit de Fusíveis Automotivos com Chave de Teste BOM-55311 Bomvink ",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/KIT DE FUSIVEIS.jpeg",
    descricao:"Kit de Fusíveis Automotivos com Chave de Teste BOM-55311 Bomvink inclui 10 fusíveis de lâmina (amperagens variadas de 3A a 30A), um testador de polaridade e um alicate jacaré para remoção. Projetado para proteger circuitos elétricos de veículos contra curto-circuito e sobrecargas. A chave de teste é usada para verificar circuitos elétricos e identificar fusíveis queimados em sistemas de 6v a 24v. Os fusíveis são coloridos para rápida identificação da amperagem. ",
  },

  {
    id: 130,
    nome: "Kit de Reparos de Pneus Linksky LSK-230",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/KIT DE REPAROS DE PNEUS.jpeg",
    descricao:"Kit de Reparos de Pneus Linksky LSK-230 inclui uma ferramenta escareadora, uma ferramenta aplicadora de reparo (agulha), um tubo de solução de borracha (cola) e três reparos tipo macarrão. É ideal para reparos de emergência em furos pequenos na banda de rodagem de pneus sem câmara de carros e motos. O escareador limpa o furo, a cola vulcaniza o local, e o aplicador insere o remendo de borracha para vedar o vazamento de ar.",
  },

  {
    id: 131,
    nome: "Luva de Musculação e Crossfit IT-BLUE LE-6107",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/LUVA 2.jpeg",
    descricao:"Luva de Musculação e Crossfit IT-BLUE LE-6107 desenvolvida para atletas de musculação, crossfit e ciclismo, ela combina proteção superior com um design ergonômico que garante máxima aderência e estabilidade. Fabricada em borracha de cloropreno (neoprene) de célula fechada, revestida com nylon elástico em ambos os lados, proporcionando durabilidade e um ajuste leve.",
  },

  {
    id: 132,
    nome: "Munhequeira Ortopédica de Compressão Ajustável",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/LUVA.jpeg",
    descricao:"Munhequeira Ortopédica de Compressão Ajustável projetada para oferecer suporte máximo, estabilidade e alívio de dores na região do punho e palma da mão. É o acessório ideal tanto para a prática esportiva quanto para auxílio na recuperação de lesões.  Possui uma bandagem elástica externa com fecho de alta aderência, permitindo que o usuário controle o nível de pressão conforme a necessidade.",
  },
  {
    id: 133,
    nome: "Lanterna de cabeça Bomvink BOM-4003 ",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/LUZ DE CABEÇA.jpeg",
    descricao:"Lanterna de cabeça Bomvink BOM-4003 dispositivo de iluminação recarregável, Tecnologia LED COB com potência de 500 lúmens. Bateria: Capacidade de 600mAh, proporcionando autonomia.  Ideal para trabalhos manuais, camping, pesca e atividades noturnas.",
  },

  {
    id: 134,
    nome: "Mini Massageador Elétrico Portátil",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/MASSAGEADOR.jpeg",
    descricao:"Mini Massageador Elétrico Portátil ideal para relaxamento muscular e alívio de tensões. Utiliza estimulação elétrica nervosa transcutânea (TENS) e eletroestimulação muscular (EMS). Possui chip inteligente, desligamento automático (Timed Close) e cinco modos de massagem. ",
  },

  {
    id: 135,
    nome: "Meias Esportivas Antiderrapantes NALEINING",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/MEIAS.jpeg",
    descricao:"Meias Esportivas Antiderrapantes NALEINING projetadas com almofadas de borracha na sola para melhorar a aderência e o desempenho em esportes como futebol e basquete. ",
    cor: ["branco", "azul", "verde", "laranja", "vermelho", "amarelo", "preto", "roxo", "azul"] // NOVO CAMPO
  }, 

  {
    id: 136,
    nome: "Multímetro Digital BOM-6012 BomvinK",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/MULTIMETRO DIGITAL 1.jpeg",
    descricao:"Multímetro Digital BOM-6012 BomvinK mede tensão AC/DC, corrente, resistência e capacitância, além de possuir teste de diodo e bipe de continuidade. Display digital de alta definição, proteção contra sobrecarga e função de manutenção de dados. Ferramenta versátil ideal para técnicos, eletricistas e profissionais de eletrônica. ",
  },

  {
    id: 136,
    nome: "Multímetro Digital BOM-6002 Bomvink ",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/MULTIMETRO DIGITAL 1.jpeg",
    descricao:"Multímetro Digital BOM-6002 Bomvink Mede tensão contínua (DCV) e alternada (ACV), corrente contínua (DCA), resistência (Ω), diodos e transistores. Visor LCD de 3 1/2 dígitos e teste de continuidade (sem bip sonoro). ",
  },

  {
    id: 137,
    nome: "Multímetro Digital da marca Bomvink, modelo BOM-6002",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/MULTIMETRO DIGITAL.jpeg",
    descricao:"Realiza medições de voltagem AC e DC, corrente contínua (DCA), resistência (\(\Omega \)), diodos e transistores (\(hFE\)). Possui visor LCD de 3 1/2 dígitos com capacidade máxima de 1999.  Funciona com uma bateria de 9V. Suporta tensão máxima de 1000V DC e 750V AC.  ",
  },

  {
    id: 138,
    nome: "Nível Laser Profissional com Trena BOM-62011 Bomvink ",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/NIVELADOR A LASER.jpeg",
    descricao:"Nível Laser Profissional com Trena BOM-62011 Bomvink Ferramenta 3 em 1 combina um laser de linha (horizontal, vertical ou cruz), uma trena de 2,5 metros e uma régua integrada de 15 cm. Possui bolhas de nível ajustáveis para garantir precisão em superfícies horizontais, verticais e em ângulos de 45º, ideal para decoração interna, como pendurar quadros, instalar prateleiras, alinhar móveis e assentar pisos. ",
  },

  {
    id: 139,
    nome: "Mini Projetor Portátil Smart HY300",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/PROJETOR.jpeg",
    descricao:"Mini Projetor Portátil Smart HY300 Android 11.0 integrado, permitindo acesso direto a aplicativos de streaming como Netflix e YouTube. Resolução nativa de 1080P e suporte para decodificação de vídeo 4K, com brilho de aproximadamente 150 a 200 ANSI Lumens. Possui Dual Band Wi-Fi 6 e Bluetooth 5.0 para conexão sem fio com dispositivos.  Tela ajustável de até 130 polegadas e design giratório de 180º para projeção no teto. ",
  },

  {
    id: 140,
    nome: "Jogo de Soquetes Canhão Magnéticos BOM-5009 Bomvink",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/SOQUETE 9 PEÇAS CANHÃO MAGNETICO 5MM AO 13MM.jpeg",
    descricao:"Jogo de Soquetes Canhão Magnéticos BOM-5009 Bomvink inclui 9 peças de soquetes canhão com tamanhos variando de 5mm a 13mm. Possui ponta magnética para facilitar a fixação de parafusos e porcas. Ferramentas projetadas para serem resistentes, duráveis e compactas.",
  },

  {
    id: 141,
    nome: "Kit de Chaves Soquete de 1/2 com 12 peças",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/SOQUETE DE CHAVES.jpeg",
    descricao:"Kit de chaves soquete de 1/2 com 12 peças, ideal para diversas aplicações mecânicas. Aço cromo vanádio (CR-V), proporcionando maior durabilidade e resistência.  Inclui chaves deslizantes e junta universal para versatilidade. Tamanho padrão de 1/2 polegada.",
  },

  {
    id: 142,
    nome: "Sugador de Solda BOMVINK.",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/SULGADOR DE SOLDA.jpeg",
    descricao:"Sugador de Solda BOMVINK utilizado para remover estanho derretido de placas de circuito ou componentes eletrônicos. Possui uma haste com mola que, ao ser acionada, cria um vácuo potente para aspirar a solda. Facilita a manutenção eletrônica e a substituição de componentes.",
  },

  {
    id: 143,
    nome: "Colete Esportivo Reflexivo com Suporte para Smartphone",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/SUPORTE DE CELULAR FRONTAL.jpeg",
    descricao:"Colete Esportivo Reflexivo com Suporte para Smartphone acessório essencial para atletas que buscam praticidade, conforto e segurança durante corridas, ciclismo ou trilhas. Fabricado em poliéster de alta qualidade com microperfurações, permitindo a circulação de ar e a rápida evaporação do suor, mantendo o corpo seco por mais tempo. Além do bolso principal, conta com bolsos menores nas alças (frequentemente com zíper) para chaves, cartões, gel de carboidrato ou dinheiro.",
  },

  {
    id: 144,
    nome: "Braçadeira Esportiva Multifuncional",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/SUPORTE DE CELULAR.jpeg",
    descricao:"Braçadeira Esportiva Multifuncional acessório indispensável para quem busca liberdade e segurança durante treinos, corridas ou caminhadas. Projetada para acomodar smartphones de grande porte e pequenos itens pessoais, ela combina praticidade com um design moderno e ergonômico.",
  },

  {
    id: 145,
    nome: "Corretor de Postura",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/SUPORTE DE COLUNA 1.jpeg",
    descricao:"Corretor de Postura auxilia no alinhamento da coluna e dos ombros, promovendo uma postura mais ereta e ajudando a aliviar dores nas costas e no pescoço. Possui um reforço lombar e alças ajustáveis que puxam os ombros para trás para corrigir o arqueamento das costas.  É um item unissex, podendo ser utilizado por baixo da roupa em atividades do dia a dia, no trabalho ou durante exercícios físicos.",
  },

  {
    id: 146,
    nome: "Cinta Ergonômica Lombar VIC41110 Vicsa",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/SUPORTE DE COLUNA.jpeg",
    descricao:"Cinta Ergonômica Lombar VIC41110 Vicsa, projetada para oferecer suporte à região lombar e abdominal durante atividades físicas que exigem esforço, como o levantamento de cargas. Confeccionada em elástico reforçado com costuras em nylon de alta resistência. Conta com suspensórios reguláveis e fechamento em velcro para um ajuste seguro e confortável ao corpo. Utilizada para prevenir dores e lesões na coluna.",
  },

  {
    id: 147,
    nome: "Voltímetro 8 em 1 Barcelona",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/TESTE DE TENSÃO DIGITAL 1.jpeg",
    descricao:"Voltímetro 8 em 1 Barcelona mede tensão em corrente contínua (DC) e alternada (AC). Identifica tensões de 6V, 12V, 24V, 50V, 110V, 220V e 380V através de indicadores LED. Utilizado para verificar a presença de energia em tomadas, componentes elétricos e baterias de carros. Possui design tipo caneta para fácil transporte e manuseio.",
  },

  {
    id: 148,
    nome: "Caneta de Teste de Voltagem Digital ST-471 Starmega ",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/TESTE DE TENSÃO DIGITAL.jpeg",
    descricao:"Caneta de Teste de Voltagem Digital ST-471 Starmega mede tensão AC/DC em 7 estágios. Inclui teste de polaridade para corrente contínua (DC) e indica o nível de voltagem através de luzes. ",
  },

  {
    id: 150,
    nome: "Caneta Detectora de Tensão (Volt Alert)",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/TESTE DE TENSÃO.jpeg",
    descricao:"Caneta Detectora de Tensão (Volt Alert) usada para verificar a presença de eletricidade sem contato físico direto.  Detecta campos eletrostáticos de tensão CA sem necessidade de contato com o condutor.  Emite um alerta visual (luz vermelha) e sonoro ao detectar tensão. ",
  },

  {
    id: 151,
    nome: "Ombreira Ortopédica",
    categoria: "produtos em destaques",
    preco: 199.90,
    imagem: "../produtosEmDestaques/UMBREIRA.jpeg",
    descricao:"Ombreira Ortopédica um suporte ajustável projetado para fornecer compressão e estabilidade à articulação do ombro. Auxilia no tratamento de lesões como tendinite, bursite, luxações e problemas no manguito rotador. Oferece suporte extra durante atividades físicas (como basquete, vôlei ou musculação) para evitar novas lesões. Ajuda a manter o ombro na posição correta e a reduzir a tensão muscular.",
  },

  // ================= EQUIPAMENTOS MILITARES =================
  {
    id: 202,
    nome: "Calça Masculina Jogger Cargo em Moletom – Conforto Streetwear com Bolsos Laterais",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CALÇAS 3.jpeg",
    descricao:"A Calça Jogger Cargo em Moletom é a peça-chave para quem busca unir o estilo urbano do streetwear ao máximo conforto térmico. Confeccionada em moletom de alta qualidade, muitas vezes com interior flanelado ou peluciado, ela é ideal para os dias mais frios e para o uso casual diário. Seu design moderno apresenta o prático corte jogger com punhos elásticos nos tornozelos e cintura ajustável por cordão, garantindo um caimento perfeito e arrojado. Os bolsos laterais estilo cargo não apenas conferem um visual utilitário e estiloso, mas também oferecem praticidade extra para carregar pequenos objetos com segurança. Versátil e resistente, esta calça é a escolha ideal para compor looks despojados, seja para atividades ao ar livre, treinos ou para relaxar com estilo."
  },

  {
    id: 203,
    nome: "Calça Masculina Jogger Cargo em Sarja – Bege Caqui com 6 Bolsos e Cordão Ajustável",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CALÇAS 4.jpeg",
    descricao:"A Calça Masculina Jogger Cargo é a união definitiva entre o estilo utilitário e o conforto moderno, sendo ideal para compor looks urbanos e casuais com atitude. Confeccionada em sarja de alta qualidade, a peça apresenta uma modelagem ajustada ao corpo com punhos elásticos nos tornozelos e cós com cordão para um ajuste personalizado e seguro. Seu design funcional conta com 6 bolsos estratégicos, incluindo os icônicos bolsos laterais cargo, perfeitos para carregar itens essenciais como celular e carteira com praticidade. Disponível na versátil cor bege caqui, esta calça resistente oferece um caimento impecável e durabilidade para o uso diário, sendo a escolha certa para quem não abre mão de versatilidade e bem-estar."
  },

  {
    id: 204,
    nome: "Calça Tática Militar Cargo – Resistente à Água e Anti-Rasgo com 9 Bolsos Utilitários",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CALÇAS 5.jpeg",
    descricao:"A Calça Tática Militar Cargo foi projetada para oferecer durabilidade extrema e funcionalidade superior em atividades ao ar livre, missões táticas ou trabalhos pesados. Confeccionada em tecido de alta resistência (Ripstop ou algodão com elastano), ela conta com tecnologia à prova d'água e proteção contra desgaste, garantindo conforto mesmo em condições adversas. Seu design inteligente inclui até 9 bolsos de desempenho, permitindo o armazenamento seguro de ferramentas e equipamentos essenciais com acesso rápido e organizado. Com corte reto e costuras reforçadas, esta peça une o estilo robusto do exército à flexibilidade necessária para escaladas, trilhas e treinamentos intensos."
  },

  {
    id: 205,
    nome: "Calça Tática Militar Masculina IX7 Verde Oliva – Impermeável com Bolsos Cargo e Reforço de Joelho",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CALÇAS 6.jpeg",
    descricao:"A Calça Tática Militar IX7 Verde Oliva é o equipamento definitivo para profissionais e entusiastas de aventura que exigem máxima resistência e funcionalidade em terrenos desafiadores. Confeccionada em tecido Ripstop de alta densidade com acabamento repelente à água, esta peça é imune a rasgos e furos, proporcionando segurança em trilhas, treinamentos táticos ou missões operacionais. Seu design estratégico conta com 10 bolsos utilitários de rápido acesso, joelhos articulados e reforçados para maior mobilidade, além de um corte anatômico que garante conforto absoluto durante longas jornadas. Combinando a robustez do padrão exército com a versatilidade urbana, esta calça tática oferece a durabilidade necessária para enfrentar qualquer missão com estilo e eficiência."
  },

  {
    id: 206,
    nome: "Calça Tática Militar Masculina IX9 Cinza Wolf – Resistente à Água com Bolsos Táticos e Joelho Reforçado",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CALÇAS 7.jpeg",
    descricao:"A Calça Tática Militar IX9 na cor Cinza Wolf é o equilíbrio perfeito entre discrição urbana e desempenho operacional extremo, sendo ideal para missões táticas, trabalho pesado ou aventuras ao ar livre. Confeccionada em tecido Ripstop de alta resistência com acabamento repelente a líquidos, esta peça é projetada para suportar rasgos e abrasões sem comprometer a flexibilidade do operador. Seu design estratégico conta com múltiplos bolsos de rápido acesso, incluindo compartimentos para canivetes e lanternas, além de joelhos articulados que proporcionam total liberdade de movimento em qualquer terreno. Com um corte slim moderno e durabilidade superior, esta calça une a funcionalidade do padrão exército a um visual versátil que transita perfeitamente entre a natureza e a cidade."
  },

  {
    id: 207,
    nome: "Calça Tática Militar Masculina Black Ops – Impermeável com 10 Bolsos e Tecido Ripstop Premium",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CALÇAS 8.jpeg",
    descricao:"A Calça Tática Militar Black Ops é a escolha definitiva para profissionais de segurança, entusiastas de airsoft e aventureiros que não abrem mão de resistência extrema e funcionalidade no dia a dia. Confeccionada em tecido Ripstop de alta durabilidade, esta peça é projetada para ser imune a rasgos e furos, contando com um acabamento repelente à água que mantém o usuário seco mesmo em condições adversas. Seu design estratégico de combate apresenta até 10 bolsos utilitários de rápido acesso, ideais para carregar carregadores, lanternas e ferramentas essenciais com organização e agilidade. Com reforços nos joelhos e um corte anatômico que permite total liberdade de movimento, esta calça une a robustez do padrão militar a um visual urbano discreto e imponente, sendo perfeita para missões táticas ou uso casual robusto. "
  },

  {
    id: 208,
    nome: "Cinto Tático Militar com Fivela de Metal e Engate Rápido – Nylon de Alta Resistência",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CINTO 1.jpeg",
    descricao:"O Cinto Tático Militar com Fivela de Engate Rápido é o acessório definitivo para quem exige máxima segurança, agilidade e durabilidade em operações táticas ou no uso cotidiano. Fabricado em nylon ecológico de alta densidade, ele oferece uma estrutura respirável e extremamente resistente a deformações, suportando o peso de coldres e acessórios sem ceder. O grande destaque deste modelo é sua fivela metálica de liberação rápida (quick-release), que permite travar o cinto de forma segura com um clique e soltá-lo instantaneamente quando necessário, proporcionando uma praticidade inigualável. Com design unissex e ajuste totalmente personalizável, este cinto adapta-se perfeitamente a calças táticas, jeans ou uniformes operacionais, sendo a escolha ideal para profissionais de segurança, praticantes de airsoft e entusiastas de atividades ao ar livre."
  },

  {
    id: 209,
    nome: "Mochila Tática Militar Assault 30L – Impermeável com Sistema MOLLE e 4 Compartimentos",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 1.jpeg",
    descricao:"A Mochila Tática Assault de 30 Litros foi projetada para oferecer o máximo de organização e resistência, sendo a escolha ideal para militares, praticantes de airsoft, pescadores e entusiastas de atividades ao ar livre. Confeccionada em tecido Oxford 600D de alta densidade com forro interno resinado, esta mochila é resistente à água e a abrasões, garantindo a proteção dos seus equipamentos em qualquer clima. Seu design funcional conta com dois compartimentos principais espaçosos e dois bolsos frontais de fácil acesso, todos com zíperes duplos reforçados para maior segurança. O sistema MOLLE frontal e lateral permite a fixação modular de bolsos extras e acessórios, enquanto as alças acolchoadas e ajustáveis com cintas de peito e abdômen proporcionam um ajuste ergonômico e estável mesmo em longas jornadas."
  },


  {
    id: 210,
    nome: "Mochila Tática Militar Assault 30L Black – Impermeável com Sistema MOLLE e Painel de Velcro",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 2.jpeg",
    descricao:"A Mochila Tática Assault Black de 30 Litros é o equipamento definitivo para quem busca versatilidade e resistência extrema, seja no uso operacional, em trilhas ou no cotidiano urbano. Fabricada em tecido de alta densidade com revestimento interno resinado, ela oferece excelente resistência à água e proteção para seus equipamentos. Seu design inteligente conta com o sistema modular MOLLE, que permite a fixação de bolsos extras, e um painel de velcro frontal para personalização com patches. Composta por dois compartimentos principais amplos e dois bolsos externos frontais, ela garante organização total, enquanto as alças acolchoadas e as cintas de compressão lateral proporcionam conforto ergonômico e estabilidade de carga durante o uso prolongado."
  },

  {
    id: 211,
    nome: "Mochila Tática Militar Combat 40L – Refletiva, Impermeável e com Sistema MOLLE",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 3.jpeg",
    descricao:"A Mochila Tática Militar Combat de 40 Litros foi projetada para aventureiros e profissionais que exigem durabilidade extrema e organização superior em suas missões. Confeccionada em tecido Oxford 900D de alta densidade com revestimento interno em PVC, ela é altamente resistente à água e a abrasões. Seu design robusto conta com o sistema modular MOLLE completo, permitindo a fixação de bolsos extras e acessórios, além de uma tira em Y frontal com fivela ideal para prender jaquetas ou equipamentos leves. Um diferencial de segurança é a faixa refletora noturna, que garante visibilidade em ambientes de pouca luz. Com alças acolchoadas, ventiladas e ergonômicas, além de compartimento acolchoado para notebook de até 17 polegadas, esta mochila oferece o conforto necessário para trilhas, camping, viagens ou uso tático intenso."
  },

  {
    id: 212,
    nome: "Mochila Tática Militar Combat 40L Verde Oliva – Impermeável com Sistema MOLLE e Faixa Refletiva",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 4.jpeg",
    descricao:"A Mochila Tática Militar Combat de 40 Litros na cor verde oliva foi projetada para aventureiros e profissionais que exigem durabilidade extrema e organização superior em suas missões. Confeccionada em tecido Oxford 900D de alta densidade com revestimento interno em PVC, ela é altamente resistente à água e a abrasões, protegendo seus equipamentos em qualquer ambiente. Seu design robusto conta com o sistema modular MOLLE completo para fixação de acessórios, além de uma prática tira em Y frontal para prender jaquetas ou sacos de dormir. Equipada com uma faixa refletora para segurança noturna, alças ergonômicas ventiladas e compartimento acolchoado para notebook de até 17 polegadas, esta mochila oferece o conforto e a versatilidade necessários para trilhas, camping, viagens ou uso tático intenso."
  },

  {
    id: 213,
    nome: "Mochila Tática Militar Combat 40L Black – Impermeável com Sistema MOLLE e Faixa Refletiva",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 5.jpeg",
    descricao:"A Mochila Tática Militar Combat de 40 Litros na cor preta é o equipamento definitivo para quem busca resistência extrema e um visual imponente, seja em missões táticas, trilhas ou no cotidiano urbano. Confeccionada em tecido Oxford 900D de alta densidade com revestimento interno em PVC, ela é altamente resistente à água e a abrasões, garantindo a proteção total dos seus pertences. Seu design funcional conta com o sistema modular MOLLE completo para fixação de acessórios, uma prática tira em Y frontal para prender jaquetas e faixas refletoras que proporcionam segurança em ambientes de baixa visibilidade. Com compartimento acolchoado para notebook de até 17 polegadas e alças ergonômicas ventiladas, esta mochila oferece o equilíbrio perfeito entre ampla capacidade de carga e conforto prolongado para qualquer desafio."
  },

  {
    id: 214,
    nome: "Mochila Tática Militar Assault 50L – Impermeável com Sistema MOLLE e Painel para Patches",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 6.jpeg",
    descricao:"A Mochila Tática Assault de 50 Litros é o equipamento definitivo para quem busca o máximo de espaço e resistência em missões de longa duração, expedições de sobrevivência ou viagens de aventura. Confeccionada em tecido Oxford 600D de alta densidade com revestimento interno resinado, esta mochila é projetada para ser impermeável e altamente resistente a rasgos e abrasões. Seu design funcional de grande porte conta com diversos compartimentos estratégicos, incluindo divisórias para notebook de até 17 polegadas, sistema modular MOLLE para acoplagem de acessórios extras e um amplo painel de velcro frontal para personalização com patches e identificadores. Equipada com alças ergonômicas acolchoadas, cintas de compressão lateral e cinturão abdominal, ela garante uma distribuição de peso equilibrada e conforto superior mesmo em caminhadas prolongadas com carga máxima."
  },

  {
    id: 215,
    nome: "Mochila Tática Militar Assault 45L/50L – Impermeável com Sistema MOLLE e Patch Bandeira",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 7.jpeg",
    descricao:"A Mochila Tática Militar Assault é o equipamento definitivo para quem busca máxima capacidade e resistência em missões táticas, acampamentos ou no uso diário intenso. Confeccionada em tecido Oxford de alta densidade com revestimento impermeável, ela oferece proteção total contra água e desgaste, garantindo a segurança de seus pertences em qualquer ambiente. Seu design funcional conta com múltiplos compartimentos espaçosos, incluindo divisórias para notebook de até 17 polegadas, sistema modular MOLLE para acoplar acessórios extras e um painel de velcro frontal que acompanha o patch da bandeira. Com alças acolchoadas ergonômicas e cintas de compressão, esta mochila de 45 a 50 litros assegura conforto superior e estabilidade de carga para longas jornadas e aventuras extremas."
  },

  {
    id: 216,
    nome: "Mochila Tática Militar Assault 50L Black – Impermeável com Sistema MOLLE e Patch EUA",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 8.jpeg",
    descricao:"A Mochila Tática Assault Black de 50 Litros é o equipamento definitivo para quem busca versatilidade e resistência extrema, seja no uso operacional, em trilhas ou no cotidiano urbano. Fabricada em tecido de alta densidade (Nylon 900D ou 1000D) com revestimento interno resinado, ela oferece excelente resistência à água e proteção contra rasgos e abrasões. Seu design funcional conta com o sistema modular MOLLE, que permite a fixação de bolsos extras, e um painel de velcro frontal que acompanha o patch da bandeira dos EUA. Composta por dois compartimentos principais amplos e dois bolsos externos frontais, ela garante organização total, enquanto as alças acolchoadas ergonômicas e as cintas de compressão lateral proporcionam estabilidade de carga e conforto durante o uso prolongado."
  },

  {
    id: 217,
    nome: "Mochila de Hidratação Tática Militar Camelback cor Baje – Refil de 3 Litros à Prova D'água",
    categoria: "equipamentos militares",
    preco: 170.00,
    imagem: "../produtosEmDestaques/camelback baje.jpeg",
    descricao:"A Mochila de Hidratação Tática Militar é o acessório essencial para manter a performance e o corpo hidratado em atividades de alta intensidade e longa duração. Projetada para oferecer o máximo de estabilidade e conforto, ela é ideal para ciclistas, motociclistas, corredores e praticantes de trilhas que precisam de água ao alcance imediato sem interromper o percurso. Confeccionada em náilon 600D de alta resistência e à prova d'água, esta mochila protege seus pertences em ambientes úmidos e suporta o desgaste de terrenos acidentados. O conjunto acompanha um reservatório de 3 litros de fácil higienização, equipado com mangueira e bico de sucção prático que garante um fluxo contínuo de água. Com alças de ombro ajustáveis e tirante de peito reforçado, a mochila permanece fixa ao corpo mesmo durante movimentos bruscos, evitando vibrações indesejadas. Além do compartimento principal para o refil, ela possui bolsos adicionais para armazenar itens essenciais como chaves, celular e ferramentas, unindo funcionalidade tática a um design leve e aerodinâmico."
  },

  {
    id: 218,
    nome: "Mochila de Hidratação Tática Militar Camelback cor Black – Refil de 3 Litros à Prova D'água",
    categoria: "equipamentos militares",
    preco: 170.00,
    imagem: "../produtosEmDestaques/camelback preto.jpeg",
    descricao:"A Mochila de Hidratação Tática Militar é o acessório essencial para manter a performance e o corpo hidratado em atividades de alta intensidade e longa duração. Projetada para oferecer o máximo de estabilidade e conforto, ela é ideal para ciclistas, motociclistas, corredores e praticantes de trilhas que precisam de água ao alcance imediato sem interromper o percurso. Confeccionada em náilon 600D de alta resistência e à prova d'água, esta mochila protege seus pertences em ambientes úmidos e suporta o desgaste de terrenos acidentados. O conjunto acompanha um reservatório de 3 litros de fácil higienização, equipado com mangueira e bico de sucção prático que garante um fluxo contínuo de água. Com alças de ombro ajustáveis e tirante de peito reforçado, a mochila permanece fixa ao corpo mesmo durante movimentos bruscos, evitando vibrações indesejadas. Além do compartimento principal para o refil, ela possui bolsos adicionais para armazenar itens essenciais como chaves, celular e ferramentas, unindo funcionalidade tática a um design leve e aerodinâmico."
  },

  {
    id: 219,
    nome: "Mochila de Hidratação Tática Militar Verde Oliva – Refil de 3 Litros à Prova D'água",
    categoria: "equipamentos militares",
    preco: 170.00,
    imagem: "../produtosEmDestaques/camelback verde.jpeg",
    descricao:"A Mochila de Hidratação Tática Militar na cor verde-oliva é o equipamento essencial para quem busca performance e autonomia em atividades de longa duração como ciclismo, corrida de montanha, trilhas e operações de airsoft. Fabricada em náilon 600D de alta densidade, ela oferece resistência superior a rasgos e é à prova d'água, protegendo seu reservatório e itens pessoais em qualquer condição climática. O kit completo inclui um refil interno de 3 litros fabricado em material atóxico, com mangueira revestida e bico de sucção ergonômico com trava, permitindo uma hidratação rápida e contínua sem que você precise parar o movimento. Seu design leve e aerodinâmico conta com alças de ombro e peitorais totalmente ajustáveis que garantem um encaixe firme ao corpo, eliminando vibrações e proporcionando o máximo de conforto térmico e mobilidade em todos os seus desafios ao ar livre."
  },

  {
    id: 220,
    nome: "Cantil Militar de Polipropileno 900ml Verde Oliva – Padrão Forças Armadas",
    categoria: "equipamentos militares",
    preco: 50.00,
    imagem: "../produtosEmDestaques/cantil.jpeg",
    descricao:"O Cantil Militar de 900ml é um item indispensável para quem busca resistência e funcionalidade em operações táticas, acampamentos ou treinamentos de sobrevivência. Fabricado em polipropileno de alta densidade, este modelo é extremamente robusto, imune a furos e rachaduras, além de não amassar nem enferrujar. Seu design clássico apresenta o visor texturizado com a inscrição EXCLUSIVO PARA ÁGUA, garantindo segurança no armazenamento de líquidos. Possui tampa com vedação eficiente e alça plástica integrada para evitar a perda do acessório. Leve e ergonômico, o cantil encaixa-se perfeitamente em capas térmicas e porta-cantis de cinto, sendo o padrão confiável utilizado por diversas forças armadas para hidratação em campo."
  },

  {
    id: 221,
    nome: "Colete Tático Militar Modular Assault – Sistema MOLLE e Multibolsos para Airsoft e Paintball",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../produtosEmDestaques/colete tático militar preto.jpeg",
    descricao:"O Colete Tático Militar Modular Assault foi desenvolvido para oferecer o máximo de funcionalidade, proteção e agilidade em operações de campo, treinamentos táticos ou jogos de Airsoft e Paintball. Confeccionado em poliéster de alta densidade (900D ou Oxford 600D), ele apresenta uma estrutura extremamente durável, resistente a rasgos e abrasões. Seu design versátil conta com o sistema modular MOLLE, permitindo que você reorganize ou adicione novos compartimentos conforme a necessidade da missão. O colete vem equipado com diversos bolsos estratégicos, incluindo três porta-carregadores frontais de fácil acesso, bolsos utilitários superiores para documentos ou rádio, e compartimentos laterais para equipamentos extras. Com alças de ombro acolchoadas e sistemas de ajuste lateral por fivelas de engate rápido, ele garante um caimento anatômico e confortável para diferentes biotipos (tamanho único ajustável). Além disso, o modelo permite a inserção de placas de proteção frontal e traseira, unindo segurança extrema a um visual operacional imponente e profissional."
  },

  {
    id: 222,
    nome: "Colete Tático Modular Plate Carrier – Sistema MOLLE com Porta-Carregadores e Bolsos Utilitários",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../produtosEmDestaques/colete tático militar.jpeg",
    descricao:"O Colete Tático Modular Plate Carrier foi desenvolvido para oferecer o máximo de eficiência operacional e proteção em jogos de Airsoft, Paintball ou treinamentos militares. Confeccionado em Nylon 1000D de alta densidade, este modelo é extremamente resistente ao desgaste e à tração, garantindo durabilidade em condições severas. Seu design modular conta com o sistema MOLLE em toda a superfície, permitindo a personalização total com a adição de novos bolsos e acessórios. O colete já vem equipado com três porta-carregadores frontais, bolsos utilitários laterais e compartimento para rádio, além de permitir a inserção de placas de proteção interna. Com alças acolchoadas e sistemas de ajuste rápido na cintura e ombros, ele proporciona um encaixe anatômico e confortável para qualquer missão."
  },

  {
    id: 223,
    nome: "Lenço Tático Shemagh Militar Verde Oliva – Proteção contra Sol, Vento e Areia",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../produtosEmDestaques/lenço tático verde militar.jpeg",
    descricao:"O Lenço Tático Shemagh (ou Keffiyeh) é um acessório envoltório extremamente versátil e tradicional, indispensável para quem busca proteção e estilo em ambientes externos. Originalmente utilizado no Oriente Médio para proteger a cabeça e o rosto de condições climáticas adversas, este modelo tornou-se um item padrão para praticantes de Airsoft, Paintball, trekking no deserto e entusiastas de sobrevivencialismo."
  },

  {
    id: 224,
    nome: "Lenço Tático Shemagh Militar – Proteção contra Sol, Vento e Poeira para Airsoft e Trekking",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../produtosEmDestaques/lenço tático verde musgo-verde militar.jpeg",
    descricao:"O Lenço Tático Shemagh (Keffiyeh) é um acessório indispensável para operadores de Airsoft e aventureiros que buscam proteção extrema com um visual autêntico e funcional. Confeccionado em tecido de alta qualidade, sua trama respirável e leve garante conforto térmico tanto no calor intenso quanto no frio, protegendo eficazmente o rosto e o pescoço contra poeira, areia, vento e detritos. Com dimensões generosas (geralmente 110cm x 110cm), este lenço versátil permite diversas formas de amarração, podendo ser utilizado como máscara facial, turbante, cachecol ou até bandagem de emergência. Seu design tradicional com padrão camuflado e franjas laterais não apenas oferece camuflagem tática superior em ambientes de mata e cerrado, mas também se destaca como um acessório de moda militar atemporal e resistente para qualquer missão ou aventura ao ar livre"
  },

  {
    id: 225,
    nome: "Lenço Tático Shemagh Militar Verde Oliva – Proteção para Cabeça e Rosto para Airsoft e Trilhas",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../produtosEmDestaques/lenço tático verde musgo.jpeg",
    descricao:"O Lenço Tático Shemagh (Keffiyeh) é o acessório definitivo para quem busca proteção absoluta contra as intempéries em missões de Airsoft, Paintball ou aventuras no deserto e mata fechada. Confeccionado em tecido de algodão de alta qualidade, ele oferece uma trama leve e respirável que garante conforto térmico tanto no calor quanto no frio, protegendo eficazmente o rosto, pescoço e cabeça contra sol intenso, vento, areia e insetos. Com dimensões aproximadas de 110cm x 110cm, sua versatilidade permite diversas formas de amarração, servindo como máscara facial, turbante ou até bandagem de emergência em situações críticas. Este modelo tradicional em verde oliva com padrão xadrez tático não apenas proporciona uma camuflagem eficiente em diversos ambientes, mas também agrega um visual robusto e profissional ao seu kit operacional."
  },

  {
    id: 226,
    nome: "Poncho Tático Militar Impermeável Patrol – Capa de Chuva com Compartimento para Mochila e Bolso Frontal",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../produtosEmDestaques/poncho verde militar.jpeg",
    descricao:"O Poncho Tático Militar Patrol é o equipamento definitivo para proteção contra intempéries em missões de longa duração, trekking e atividades de sobrevivência. Desenvolvido com um corte oversized inteligente, ele foi projetado para cobrir totalmente não apenas o operador, mas também sua mochila e equipamentos, garantindo que tudo permaneça seco mesmo sob chuvas intensas. Confeccionado em material de alta resistência (como Nylon Ripstop ou Poliéster emborrachado), este poncho é 100% impermeável e conta com costuras seladas para máxima vedação."
  },

  // ================= CALÇADOS SOCIETY =================
  {
    id: 301,
    nome: "SOCIETY ADIDAS",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY ADIDAS.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 302,
    nome: "SOCIETY CR7",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY CR7.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 303,
    nome: "SOCIETY MESSI LARANJA",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY MESSI LARANJA.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 304,
    nome: "SOCIETY MESSI PRETA",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY MESSI PRETA.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 305,
    nome: "SOCIETY MESSI",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY MESSI.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 306,
    nome: "SOCIETY NIKE CINZA AZUL",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY NIKE CINZA AZUL.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 307,
    nome: "SOCIETY NIKE CR7",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY NIKE CR7.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 308,
    nome: "SOCIETY NIKE PRETA AMARELA",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY NIKE PRETA AMARELA.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 309,
    nome: "SOCIETY NIKE",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY NIKE.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 310,
    nome: "SOCIETY UMBRO AZUL",
    categoria: "Society",
    preco:180.00,
    imagem: "../calcados/society/SOCIETY UMBRO AZUL.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 311,
    nome: "SOCIETY UMBRO BRANCO AZUL",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY UMBRO BRANCO AZUL.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 312,
    nome: "SOCIETY UMBRO BRANCO E PRETO",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY UMBRO BRANCO E PRETO.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 313,
    nome: "SOCIETY UMBRO CINZA",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY UMBRO CINZA.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 314,
    nome: "SOCIETY UMBRO LARANJA AZUL",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY UMBRO LARANJA AZUL.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 315,
    nome: "SOCIETY UMBRO PRETA VERDE",
    categoria: "Society",
    preco: 180.00,
    imagem: "../calcados/society/SOCIETY UMBRO PRETA VERDE.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 316,
    nome: "SOCIETY UMBRO PRETO PRATA",
    categoria: "Society",
    preco:180.00,
    imagem: "../calcados/society/SOCIETY UMBRO PRETO PRATA.png",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  // ================= CALÇADOS TENIS =================
  {
    id: 401,
    nome: "novo 1",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/novo 1.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 402,
    nome: "novo 2",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/novo 2.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 403,
    nome: "novo 3",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/novo 3.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 404,
    nome: "novo 4",
    categoria: "tenis",
    preco:190.00,
    imagem: "../calcados/tenis/novo 4.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 405,
    nome: "novo 5",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/novo 5.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 406,
    nome: "novo 6",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/novo 6.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 407,
    nome: "novo 7",
    categoria: "tenis",
    preco:190.00,
    imagem: "../calcados/tenis/novo 7.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 408,
    nome: "novo 8",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/novo 8.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 409,
    nome: "novo 9",
    categoria: "tenis",
    preco:190.00,
    imagem: "../calcados/tenis/novo 9.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 410,
    nome: "novo 10",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/novo 10.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 411,
    nome: "TENIS 1",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 1.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 412,
    nome: "TENIS 2",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 2.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 413,
    nome: "TENIS 3",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 3.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  {
    id: 414,
    nome: "TENIS 4",
    categoria: "tenis",
    preco:190.00,
    imagem: "../calcados/tenis/TENIS 4.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

    {
    id: 415,
    nome: "TENIS 5",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 5.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

    {
    id: 416,
    nome: "TENIS 6",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 6.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

    {
    id: 417,
    nome: "TENIS 7",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 7.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

    {
    id: 418,
    nome: "TENIS 8",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 8.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

    {
    id: 419,
    nome: "TENIS 9",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 9.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

    {
    id: 420,
    nome: "TENIS 10",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 10.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

    {
    id: 421,
    nome: "TENIS 11",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 11.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

    {
    id: 422,
    nome: "TENIS 12",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 12.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

    {
    id: 423,
    nome: "TENIS 13",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 13.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

    {
    id: 424,
    nome: "TENIS 14",
    categoria: "tenis",
    preco: 190.00,
    imagem: "../calcados/tenis/TENIS 14.jpeg",
    tamanho: ["38", "39", "40", "41"] // NOVO CAMPO
  },

  // ================= FARDAMENTOS MILITARES =================
  {
    id: 500,
    nome: "Calção tfm Oficiais e Sargentos",
    categoria: "fardamentos militar",
    preco: 299.90,
    imagem: "../fardamentosMilitares/fardasMilitaresFoto/calção tfm.jpg",
    tamanho: ["P", "M", "G", "GG"],
    descricao:"O Calção TFM Oficial é a peça indispensável para o treinamento físico militar, projetado especificamente para atender aos padrões de regulamento de uniformes do Exército Brasileiro. Este modelo em verde oliva, caracterizado pelas duas listras brancas laterais, é o padrão utilizado por Oficiais, Subtenentes e Sargentos. Confeccionado em tecido leve de alta durabilidade (disponível em Nylon ou Poliéster), ele oferece máxima liberdade de movimento e secagem rápida durante atividades intensas. Possui cintura com elástico reforçado e cordão interno para um ajuste seguro e personalizado, além de pequenas aberturas laterais que garantem maior mobilidade em corridas e exercícios. É o acessório que une tradição militar com a performance necessária para o dia a dia na caserna." // NOVO CAMPO
  },

  {
    id: 501,
    nome: "CAMISA CAMUFLADA + NOME",
    categoria: "fardamentos militar",
    preco: 299.90,
    imagem: "../fardamentosMilitares/fardasMilitaresFoto/CAMISA CAMUFLADA NOME.jpeg",
    descricao: "Camisa camuflada com seu nome de guerra",
    tamanho: ["P", "M", "G", "GG"], // NOVO CAMPO
    descricao:"A Camiseta Camuflada Dry Fit Padrão EB é desenvolvida para oferecer o máximo desempenho em atividades de alta intensidade e uso tático militar. Confeccionada com tecnologia Dry Fit de alta qualidade, seu tecido sintético afasta o suor da pele e acelera a evaporação, mantendo o corpo seco, ventilado e com conforto térmico em climas quentes. A estampa segue o padrão oficial do Exército Brasileiro em tons de verde, marrom e bege, ideal para camuflagem em ambientes de mata atlântica. Com modelagem que se ajusta ao corpo e toque macio, esta peça é extremamente leve, resistente e de secagem rápida, sendo a escolha perfeita para treinamentos militares, academia, airsoft ou aventuras ao ar livre."
  },

  {
    id: 502,
    nome: "Farda Exército Brasileiro Modelo Novo (RUE 2026) – Conjunto Gandola e Calça Camuflada",
    categoria: "fardamentos militar",
    preco: 299.90,
    imagem: "../fardamentosMilitares/fardasMilitaresFoto/FARDA MODELO NOVO.jpeg",
    tamanho: ["P", "M", "G", "GG"], // NOVO CAMPO
    descricao:"O novo fardamento operacional do Exército Brasileiro foi desenvolvido sob as diretrizes atualizadas do RUE, combinando alta tecnologia têxtil com funcionalidade tática superior. A gandola apresenta um design moderno com gola tipo padre, fechamento frontal por zíper e fechos de contato, além de bolsos inclinados nas mangas para facilitar o acesso rápido a equipamentos. A calça foi reforçada para máxima durabilidade, contando agora com oito bolsos estratégicos e um sistema de fechamento por velcro na barra, eliminando a necessidade do uso de bombacho. Confeccionado em tecido de alta solidez (Rip Stop ou liso), este conjunto oferece resistência a rasgos, baixa retenção de líquidos e conforto térmico essencial para operações prolongadas e treinamentos intensos."
  },

  {
    id: 503,
    nome: "Meia Esportiva Masculina Cano Médio – Branca Atoalhada Conforto",
    categoria: "fardamentos militar",
    preco: 20.00,
    imagem: "../fardamentosMilitares/fardasMilitaresFoto/meia tfm.jpg",
    descricao:"A Meia Esportiva Cano Médio é o acessório indispensável para quem busca o equilíbrio perfeito entre conforto e performance em seus treinos ou no dia a dia. Confeccionada com uma base majoritária de algodão, ela oferece um toque macio e alta respirabilidade, mantendo os pés secos através da eficiente absorção de suor. Seu design clássico com punho canelado garante que a meia permaneça no lugar sem apertar excessivamente, enquanto o acabamento interno atoalhado proporciona amortecimento extra e proteção contra o atrito no tornozelo. Versátil e durável, este modelo unissex é ideal para diversas modalidades, desde corridas e academia até o uso casual com tênis e botas."
  },

  {
    id: 504,
    nome: "CAMISA TFM + NOME",
    categoria: "fardamentos militar",
    preco: 299.90,
    imagem: "../fardamentosMilitares/fardasMilitaresFoto/CAMISA TFM NOME.jpeg",
    descricao:"A Regata Masculina Dry Fit Branca é a peça essencial para quem busca máxima performance e conforto térmico, seja em treinamentos militares (TFM) ou em atividades intensas na academia e ao ar livre. Confeccionada em tecido tecnológico de alta hidrofilidade, ela absorve o suor e o dispersa rapidamente para a superfície, garantindo uma evaporação ágil que mantém o corpo seco por muito mais tempo. Sua modelagem anatômica com cavas amplas proporciona total liberdade de movimento, enquanto a costura reforçada e o material 100% poliéster oferecem alta durabilidade, resistência a rasgos e facilidade de manutenção, já que não amassa e seca rapidamente. O grande diferencial deste modelo é o espaço frontal dedicado para personalização, permitindo a estampa ou bordado do seu nome, unidade ou logomarca com acabamento profissional."
  },

  // ================= PERFUMES =================
  {
    id: 600,
    nome: "Perfume Invictus",
    categoria: "perfumes",
    preco: 399.90,
    imagem: "../perfumes/perfume01.jpg"
  },
  {
    id: 601,
    nome: "Perfume One Million",
    categoria: "perfumes",
    preco: 429.90,
    imagem: "../perfumes/perfume01.jpg"
  },
  {
    id: 602,
    nome: "Perfume Malbec",
    categoria: "perfumes",
    preco: 199.90,
    imagem: "../perfumes/perfume01.jpg"
  },

  // ================= CELULAR =================
  {
    id: 700,
    nome: "IPHONE",
    categoria: "celulares",
    preco: 199.90,
    imagem: "../eletronicos/celularesFotos/iphone16.png"
  },

  // ================= CAIXAS DE SOM =================
  {
    id: 800,
    nome: "CAIXA DE SOM BOMBOX",
    categoria: "caixa de som",
    preco: 199.90,
    imagem: "../eletronicos/caixaDeSomFoto/bombox.jpg"
  },

  {
    id: 801,
    nome: "CAIXA DE SOM JBL",
    categoria: "caixa de som",
    preco: 199.90,
    imagem: "../eletronicos/caixaDeSomFoto/bombox.jpg"
  },

  // ================= ACESSORIO RELÓGIO ================
  {
    id: 901,
    nome: "Relógio esportivo digital C-SHOCK - BLACK",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/1.jpeg",
    descricao:"Resistência à água: Possui classificação de pelo menos 5 ATM (50 metros), adequado para natação e atividades aquáticas superficiais.\nRecursos: Inclui luz LED, cronômetro e alarme. Design: Conta com uma caixa de aproximadamente 47 mm. Uso indicado Ideal para esportes, academia, trabalho e aventura. "
  },

  {
    id: 902,
    nome: "Relógio esportivo digital C-SHOCK - VERELHO",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/2.jpeg",
    descricao:"Resistência à água: Possui classificação de pelo menos 5 ATM (50 metros), adequado para natação e atividades aquáticas superficiais.\nRecursos: Inclui luz LED, cronômetro e alarme. Design: Conta com uma caixa de aproximadamente 47 mm. Uso indicado Ideal para esportes, academia, trabalho e aventura. "
  },

  {
    id: 903,
    nome: "Relógio esportivo digital C-SHOCK - CINZA",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/3.jpeg",
    descricao:"Resistência à água: Possui classificação de pelo menos 5 ATM (50 metros), adequado para natação e atividades aquáticas superficiais.\nRecursos: Inclui luz LED, cronômetro e alarme. Design: Conta com uma caixa de aproximadamente 47 mm. Uso indicado Ideal para esportes, academia, trabalho e aventura. "
  },

  {
    id: 904,
    nome: "Relógio esportivo digital marca Aqua, modelo AQ-37. ",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/4.jpeg",
    descricao:"Resistência à Água: Suporta submersão de até 200 metros (20ATM). Recursos: Possui alarme, cronógrafo, calendário e luz de fundo. Estrutura: Construído em material resistente com pulseira de borracha/silicone para maior conforto. Tipo: Relógio digital masculino ou unissex de uso esportivo ou tático. "
  },

  {
    id: 905,
    nome: "Relógio Masculino Digital Sport Militar – Resistente à Água com Cronômetro e LED",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/5.jpeg",
    descricao:"Estilo e Durabilidade para o Seu Dia a Dia. O Relógio Digital Sport Militar é o acessório ideal para homens que buscam um design robusto unido à funcionalidade. Inspirado no estilo tático, ele é perfeito tanto para atividades físicas (academia, corrida, trilhas) quanto para o uso casual diário.Principais Funções:Visor Digital Completo: Exibição clara de horas, minutos e segundos.Calendário Automático: Visualize o dia do mês e o dia da semana com um toque.Cronômetro de Precisão: Função 1/100 segundos, ideal para cronometrar treinos e atividades.Alarme Diário: Programe seus lembretes e nunca perca um compromisso.Iluminação LED: Luz de fundo para visualização perfeita em ambientes escuros.Dual Time: Suporte para formato 12h ou 24h.Especificações Técnicas:Material da Pulseira: Borracha/Silicone de alta resistência e conforto.Material da Caixa: Resina/ABS reforçado.Resistência à Água: 30M / 3 ATM (Resistente a respingos e lavagem de mãos).Fecho: Fivela em aço inoxidável.O pacote inclui:1x Relógio Digital Sport Militar."
  },

  {
    id: 906,
    nome: "Relógio Digital Unissex Sport Square – Resistente à Água com Alarme e LED",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/6.jpeg",
    descricao:"O Relógio Digital Sport Square combina um design robusto e minimalista, sendo ideal para quem busca praticidade em atividades esportivas ou no cotidiano. Equipado com um visor digital de fácil leitura, ele oferece funções essenciais como cronômetro, alarme, calendário completo com dia da semana e iluminação LED para ambientes escuros. Sua construção em resina com pulseira de silicone ajustável garante leveza e durabilidade, enquanto a resistência à água de até 30 metros permite o uso seguro em situações de contato moderado com líquidos, como lavagem das mãos ou respingos de chuva. Este modelo unissex é a escolha perfeita para estudantes e adultos que valorizam um acessório funcional com excelente custo-benefício e um visual moderno de inspiração militar."
  },

  {
    id: 907,
    nome: "Relógio Digital Xufeng Sport Militar Verde – À Prova D'água 30M com LED e Cronômetro",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/7.jpeg",
    descricao:"O Relógio Xufeng Digital Sport é a combinação perfeita de resistência e funcionalidade, apresentando um design robusto em verde militar ideal para quem possui um estilo de vida ativo. Com visor digital completo, ele oferece recursos essenciais como alarme, cronômetro de precisão, calendário (mês, dia e semana) e uma potente iluminação LED para facilitar a leitura em qualquer ambiente. Sua estrutura em acetato com pulseira de borracha confortável garante leveza no pulso, enquanto a vedação para até 30 metros de profundidade permite o uso seguro em natação e atividades aquáticas superficiais. Este modelo original é reconhecido por sua durabilidade e excelente custo-benefício, sendo um acessório indispensável para treinos, trabalho ou uso casual."
  },

  {
    id: 908,
    nome: "Relógio Casio G-Shock Urban Utility DW-5610UU-3DR – Verde Militar",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/8.jpeg",
    descricao:"O G-Shock DW-5610UU-3DR une a icônica resistência absoluta da Casio a um design moderno inspirado na tendência gorpcore e no estilo utilitário urbano. Com sua clássica caixa quadrada em tom verde-oliva, o modelo é construído com resina de base biológica e conta com a estrutura Carbon Core Guard, garantindo proteção extrema contra choques e impactos em um corpo leve e sustentável. Equipado com resistência à água de até 200 metros, ele oferece funcionalidades completas como cronômetro de precisão, múltiplos alarmes, calendário automático e iluminação LED de alto brilho para visibilidade total. É a escolha definitiva para quem busca um acessório de alta durabilidade que transita perfeitamente entre aventuras ao ar livre e o uso cotidiano na cidade."
  },

  // ================= ACESSORIO ÓCULOS =================
  {
    id: 1000,
    nome: "Óculos de Sol Esportivo Performance – Ciclismo e Corrida com Lente Azul Espelhada e Proteção UV400",
    categoria: "oculos",
    preco: 80.00,
    imagem: "../acessorios/oculosFoto/BLACK BLUE.jpeg",
    descricao:"Desenvolvido para atletas que buscam alta performance e proteção, este óculos esportivo combina um design aerodinâmico com leveza extrema, sendo ideal para ciclismo, corrida, vôlei de praia e outras atividades ao ar livre. Suas lentes panorâmicas azuis espelhadas oferecem um amplo campo de visão e contam com tecnologia UV400, que bloqueia 100% dos raios UVA e UVB, garantindo máxima segurança para a saúde dos seus olhos mesmo sob sol intenso. A armação robusta em policarbonato preto possui encaixe anatômico e hastes com aberturas de ventilação que evitam o embaçamento, proporcionando conforto prolongado e estabilidade durante movimentos de alta intensidade. É o acessório indispensável para quem não abre mão de estilo, durabilidade e uma visão nítida em qualquer terreno ou aventura esportiva."
  },

  {
    id: 1001,
    nome: "Óculos de Sol Esportivo Black Gold – Proteção UV400 para Ciclismo, Corrida e Treino",
    categoria: "oculos",
    preco: 80.00,
    imagem: "../acessorios/oculosFoto/BLACK GOLD.jpeg",
    descricao:"Os Óculos de Sol Esportivo Black Gold foram projetados para oferecer o máximo de performance e estilo, apresentando uma lente panorâmica azul espelhada que garante um campo de visão amplo e sem distorções. Sua armação em policarbonato preto é leve, flexível e durável, contando com design anatômico e hastes ventiladas que proporcionam conforto e evitam o embaçamento durante atividades intensas como ciclismo, corrida e vôlei. A tecnologia de proteção UV400 bloqueia integralmente os raios UVA e UVB, enquanto a lente espelhada reduz o brilho excessivo, oferecendo segurança ocular e nitidez visual em diversas condições de iluminação ao ar livre. Combinando um visual moderno e esportivo, este modelo é o acessório indispensável para atletas que não abrem mão de proteção superior e resistência em seus treinos diários."
  },

  {
    id: 1002,
    nome: "Óculos de Sol Esportivo Black Green – Proteção UV400 para Ciclismo, Bike e MTB",
    categoria: "oculos",
    preco: 80.00,
    imagem: "../acessorios/oculosFoto/BLACK GREEN.jpeg",
    descricao:"O Óculos de Sol Esportivo Black Green é o acessório indispensável para ciclistas e corredores que buscam performance com segurança ocular superior. Sua lente panorâmica espelhada com proteção UV400 bloqueia 100% dos raios UVA e UVB, proporcionando uma visão nítida e confortável mesmo sob luz solar intensa. Com um design aerodinâmico e armação em policarbonato de alta qualidade, o modelo é extremamente leve (aprox. 30g) e resistente a impactos, garantindo durabilidade em trilhas de MTB ou asfalto. As hastes ventiladas auxiliam na circulação de ar para evitar o embaçamento, enquanto o formato anatômico oferece estabilidade e conforto prolongado durante movimentos de alta intensidade. Seja para ciclismo, corrida, vôlei ou lazer, este modelo combina estilo moderno e tecnologia para elevar o seu desempenho em qualquer atividade ao ar livre"
  },

  {
    id: 1005,
    nome: "Óculos de Sol Esportivo Spider Ciclismo – Lente Multicolor com Proteção UV400",
    categoria: "oculos",
    preco:80.00,
    imagem: "../acessorios/oculosFoto/RED.jpeg",
    descricao:"Os Óculos de Sol Esportivo Spider foram desenvolvidos para oferecer o máximo de performance e proteção para ciclistas e entusiastas de atividades ao ar livre. Com um design aerodinâmico e armação em plástico leve e resistente, este modelo garante um encaixe anatômico e estável mesmo durante movimentos intensos em trilhas de MTB ou corridas de asfalto. A lente panorâmica multicolorida possui tecnologia UV400 que bloqueia 100% dos raios UVA e UVB, enquanto as aberturas de ventilação estratégicas na armação auxiliam na circulação de ar, evitando o embaçamento em situações de alta transpiração. Combinando durabilidade extrema e um visual esportivo imponente em tons de vermelho e preto, este acessório é a escolha ideal para quem busca segurança, clareza visual e conforto prolongado em qualquer aventura sob o sol."
  },

  {
    id: 1006,
    nome: "Óculos de Sol Esportivo White Rainbow – Proteção UV400 para Ciclismo, Corrida e Beach Tennis",
    categoria: "oculos",
    preco: 80.00,
    imagem: "../acessorios/oculosFoto/WHITE RED GEEN.jpeg",
    descricao:"O Óculos de Sol Esportivo White Rainbow é o acessório de alta performance definitivo para atletas que buscam proteção total e um visual moderno. Sua armação branca em policarbonato de alta resistência é extremamente leve e flexível, apresentando detalhes em vermelho nas hastes que garantem um ajuste seguro e confortável durante movimentos intensos como pedalar ou correr. A lente panorâmica com efeito camaleão/arco-íris oferece um campo de visão ampliado e conta com tecnologia UV400, que bloqueia 100% dos raios UVA e UVB nocivos. Com design aerodinâmico e aberturas de ventilação que evitam o embaçamento, este modelo unissex é ideal para diversas modalidades ao ar livre, desde o ciclismo MTB até o vôlei de praia, unindo durabilidade extrema e o máximo de conforto visual em qualquer condição de luminosidade"
  },

  {
    id: 1003,
    nome: "Óculos de Sol Esportivo Black Wrap – Proteção UV400 para Caminhada, Corrida e Pesca",
    categoria: "oculos",
    preco: 80.00,
    imagem: "../acessorios/oculosFoto/Óculos black vision 1.jpeg",
    descricao:"O Óculos de Sol Esportivo Black Wrap foi desenvolvido para oferecer proteção total e conforto durante a prática de esportes ao ar livre, apresentando um design curvo que se ajusta perfeitamente ao rosto e protege contra o vento e poeira. Suas lentes com tecnologia UV400 garantem segurança absoluta ao bloquear 100% dos raios UVA e UVB, enquanto a estrutura ultra leve em policarbonato ou acetato permite o uso prolongado sem causar fadiga. Ideal para ciclismo, pesca e corrida, o modelo conta com lentes escuras que reduzem o brilho excessivo e melhoram a nitidez visual em dias de sol intenso. Com acabamento em preto fosco e hastes anatômicas, este óculos combina um estilo tático moderno com a durabilidade necessária para enfrentar qualquer aventura ou treino cotidiano"
  },

  {
    id: 1004,
    nome: "Óculos de Sol Esportivo Polarizado – Proteção UV400 para Ciclismo, Pesca e Corrida",
    categoria: "oculos",
    preco: 80.00,
    imagem: "../acessorios/oculosFoto/Óculos black vision.jpeg",
    descricao:"O Óculos de Sol Esportivo Polarizado é a escolha definitiva para quem busca o equilíbrio perfeito entre alta performance e proteção ocular superior em atividades ao ar livre. Sua armação robusta e ultraleve foi projetada com um design anatômico que garante estabilidade e conforto absoluto durante movimentos intensos, como corridas, trilhas ou ciclismo. Equipado com lentes polarizadas de alta tecnologia, este modelo elimina reflexos incômodos da água ou do asfalto, proporcionando uma visão nítida e com cores vibrantes. Além disso, a proteção UV400 integrada bloqueia 100% dos raios UVA e UVB, assegurando a máxima segurança para seus olhos mesmo sob exposição solar severa. Seja para praticar esportes de alto rendimento ou para um uso casual com visual imponente, este acessório durável é o companheiro indispensável para qualquer aventura ou para dirigir com total clareza."
  }
];

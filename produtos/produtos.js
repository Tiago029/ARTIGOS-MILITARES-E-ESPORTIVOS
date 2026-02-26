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
    nome: "CALÇA 3",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CALÇAS 3.jpeg"
  },

  {
    id: 203,
    nome: "CALÇA 4",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CALÇAS 4.jpeg"
  },

  {
    id: 204,
    nome: "CALÇA 5",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CALÇAS 5.jpeg"
  },

  {
    id: 205,
    nome: "CALÇA 6",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CALÇAS 6.jpeg"
  },

  {
    id: 206,
    nome: "CALÇA 7",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CALÇAS 7.jpeg"
  },

  {
    id: 207,
    nome: "CALÇA 8",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CALÇAS 8.jpeg"
  },

  {
    id: 208,
    nome: "CINTO",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../equipamentosMilitares/equipamentosFoto/CINTO 1.jpeg"
  },

  {
    id: 209,
    nome: "MOCHILA 1",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 1.jpeg"
  },


  {
    id: 210,
    nome: "MOCHILA 2",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 2.jpeg"
  },

  {
    id: 211,
    nome: "MOCHILA 3",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 3.jpeg"
  },

  {
    id: 212,
    nome: "MOCHILA 4",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 4.jpeg"
  },

  {
    id: 213,
    nome: "MOCHILA 5",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 5.jpeg"
  },

  {
    id: 214,
    nome: "MOCHILA 6",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 6.jpeg"
  },

  {
    id: 215,
    nome: "MOCHILA 7",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 7.jpeg"
  },

  {
    id: 216,
    nome: "MOCHILA 8",
    categoria: "equipamentos militares",
    preco: 290.00,
    imagem: "../equipamentosMilitares/equipamentosFoto/MOCHILA 8.jpeg"
  },

  {
    id: 217,
    nome: "camelback baje",
    categoria: "equipamentos militares",
    preco: 170.00,
    imagem: "../produtosEmDestaques/camelback baje.jpeg"
  },

  {
    id: 218,
    nome: "camelback preto",
    categoria: "equipamentos militares",
    preco: 170.00,
    imagem: "../produtosEmDestaques/camelback preto.jpeg"
  },

  {
    id: 219,
    nome: "camelback verde",
    categoria: "equipamentos militares",
    preco: 170.00,
    imagem: "../produtosEmDestaques/camelback verde.jpeg"
  },

  {
    id: 220,
    nome: "cantil",
    categoria: "equipamentos militares",
    preco: 50.00,
    imagem: "../produtosEmDestaques/cantil.jpeg"
  },

  {
    id: 221,
    nome: "colete tático militar preto",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../produtosEmDestaques/colete tático militar preto.jpeg"
  },

  {
    id: 222,
    nome: "colete tático militar",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../produtosEmDestaques/colete tático militar.jpeg"
  },

  {
    id: 223,
    nome: "lenço tático verde militar",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../produtosEmDestaques/lenço tático verde militar.jpeg"
  },

  {
    id: 224,
    nome: "lenço tático verde musgo-verde militar",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../produtosEmDestaques/lenço tático verde musgo-verde militar.jpeg"
  },

  {
    id: 225,
    nome: "lenço tático verde musgo",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../produtosEmDestaques/lenço tático verde musgo.jpeg"
  },

  {
    id: 226,
    nome: "poncho verde militar",
    categoria: "equipamentos militares",
    preco: 199.90,
    imagem: "../produtosEmDestaques/poncho verde militar.jpeg"
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
    nome: "Calção tfm",
    categoria: "fardamentos militar",
    preco: 299.90,
    imagem: "../fardamentosMilitares/fardasMilitaresFoto/calção tfm.jpg",
    tamanho: ["P", "M", "G", "GG"] // NOVO CAMPO
  },

  {
    id: 501,
    nome: "CAMISA CAMUFLADA NOME",
    categoria: "fardamentos militar",
    preco: 299.90,
    imagem: "../fardamentosMilitares/fardasMilitaresFoto/CAMISA CAMUFLADA NOME.jpeg",
    descricao: "Camisa camuflada com seu nome de guerra",
    tamanho: ["P", "M", "G", "GG"] // NOVO CAMPO
  },

  {
    id: 502,
    nome: "FARDA MODELO NOVO",
    categoria: "fardamentos militar",
    preco: 299.90,
    imagem: "../fardamentosMilitares/fardasMilitaresFoto/FARDA MODELO NOVO.jpeg",
    tamanho: ["P", "M", "G", "GG"] // NOVO CAMPO
  },

  {
    id: 503,
    nome: "MEIA DE TFM",
    categoria: "fardamentos militar",
    preco: 20.00,
    imagem: "../fardamentosMilitares/fardasMilitaresFoto/meia tfm.jpg",
  },

  {
    id: 504,
    nome: "CAMISA TFM NOME",
    categoria: "fardamentos militar",
    preco: 299.90,
    imagem: "../fardamentosMilitares/fardasMilitaresFoto/CAMISA TFM NOME.jpeg",
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
    nome: "RELÓGIO SMARTH 1",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/1.jpeg"
  },

  {
    id: 902,
    nome: "RELÓGIO SMARTH 2",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/2.jpeg"
  },

  {
    id: 903,
    nome: "RELÓGIO SMARTH 3",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/3.jpeg"
  },

  {
    id: 904,
    nome: "RELÓGIO SMARTH 4",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/4.jpeg"
  },

  {
    id: 905,
    nome: "RELÓGIO SMARTH 5",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/5.jpeg"
  },

  {
    id: 906,
    nome: "RELÓGIO SMARTH 6",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/6.jpeg"
  },

  {
    id: 907,
    nome: "RELÓGIO SMARTH 7",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/7.jpeg"
  },

  {
    id: 908,
    nome: "RELÓGIO SMARTH 8",
    categoria: "relogio",
    preco: 199.90,
    imagem: "../acessorios/relogioFoto/8.jpeg"
  },

  // ================= ACESSORIO ÓCULOS =================
  {
    id: 1000,
    nome: "BLACK BLUE",
    categoria: "oculos",
    preco: 80.00,
    imagem: "../acessorios/oculosFoto/BLACK BLUE.jpeg"
  },

  {
    id: 1001,
    nome: "BLACK GOLD",
    categoria: "oculos",
    preco: 80.00,
    imagem: "../acessorios/oculosFoto/BLACK GOLD.jpeg"
  },

  {
    id: 1002,
    nome: "BLACK GREEN",
    categoria: "oculos",
    preco: 80.00,
    imagem: "../acessorios/oculosFoto/BLACK GREEN.jpeg"
  },

  {
    id: 1003,
    nome: "ÓCULOS BLACK VISION",
    categoria: "oculos",
    preco: 80.00,
    imagem: "../acessorios/oculosFoto/Óculos black vision 1.jpeg"
  },

  {
    id: 1004,
    nome: "ÓCULOS BLACK",
    categoria: "oculos",
    preco: 80.00,
    imagem: "../acessorios/oculosFoto/Óculos black vision.jpeg"
  },

  {
    id: 1005,
    nome: "RED",
    categoria: "oculos",
    preco:80.00,
    imagem: "../acessorios/oculosFoto/RED.jpeg"
  },

  {
    id: 1006,
    nome: "WHITE RED GEEN",
    categoria: "oculos",
    preco: 80.00,
    imagem: "../acessorios/oculosFoto/WHITE RED GEEN.jpeg"
  },
];

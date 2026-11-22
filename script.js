// ============================================================
// Rádio Vida Nova — Player, Biblioteca & Vinhetas
// 100% gratuito. Substitua as URLs pelos seus arquivos MP3.
// ============================================================

// ---------- Biblioteca de louvores ----------
// genre: sertanejo | sertanejo-raiz | mpb | bossa | classico | adoracao | internacional | vinheta
const LIBRARY = [

  // === SERTANEJO GOSPEL (59 faixas) ===
  { title: 'Em Jesus', artist: 'Mattos Nascimento', genre: 'sertanejo', src: 'https://archive.org/download/harpa-crista-mattos-nascimento/Harpa%20Crist%C3%A3%20-%20Mattos%20Nascimento/01%20Em%20Jesus.mp3', dur: '2:34' },
  { title: 'Alvo Mais Que a Neve', artist: 'Mattos Nascimento', genre: 'sertanejo', src: 'https://archive.org/download/harpa-crista-mattos-nascimento/Harpa%20Crist%C3%A3%20-%20Mattos%20Nascimento/02%20Alvo%20Mais%20Que%20a%20Neve.mp3', dur: '7:28' },
  { title: 'Que Mudança', artist: 'Mattos Nascimento', genre: 'sertanejo', src: 'https://archive.org/download/harpa-crista-mattos-nascimento/Harpa%20Crist%C3%A3%20-%20Mattos%20Nascimento/03%20Que%20Mudan%C3%A7a.mp3', dur: '4:18' },
  { title: 'Bondoso Amigo', artist: 'Mattos Nascimento', genre: 'sertanejo', src: 'https://archive.org/download/harpa-crista-mattos-nascimento/Harpa%20Crist%C3%A3%20-%20Mattos%20Nascimento/04%20Bondoso%20Amigo.mp3', dur: '4:24' },
  { title: 'Alma Abatida', artist: 'Mattos Nascimento', genre: 'sertanejo', src: 'https://archive.org/download/harpa-crista-mattos-nascimento/Harpa%20Crist%C3%A3%20-%20Mattos%20Nascimento/05%20Alma%20Abatida.mp3', dur: '5:10' },
  { title: 'Louvai a Jesus', artist: 'Mattos Nascimento', genre: 'sertanejo', src: 'https://archive.org/download/harpa-crista-mattos-nascimento/Harpa%20Crist%C3%A3%20-%20Mattos%20Nascimento/06%20Louvai%20a%20Jesus.mp3', dur: '4:14' },
  { title: 'Conversão', artist: 'Mattos Nascimento', genre: 'sertanejo', src: 'https://archive.org/download/harpa-crista-mattos-nascimento/Harpa%20Crist%C3%A3%20-%20Mattos%20Nascimento/07%20Convers%C3%A3o.mp3', dur: '5:15' },
  { title: 'Mais Perto,Meus Deus, De Ti!', artist: 'Mattos Nascimento', genre: 'sertanejo', src: 'https://archive.org/download/harpa-crista-mattos-nascimento/Harpa%20Crist%C3%A3%20-%20Mattos%20Nascimento/08%20Mais%20Perto%2CMeus%20Deus%2C%20De%20Ti%21.mp3', dur: '6:39' },
  { title: 'O Exilado', artist: 'Mattos Nascimento', genre: 'sertanejo', src: 'https://archive.org/download/harpa-crista-mattos-nascimento/Harpa%20Crist%C3%A3%20-%20Mattos%20Nascimento/09%20O%20Exilado.mp3', dur: '6:41' },
  { title: 'Firmes Promessas', artist: 'Cícero Nogueira', genre: 'sertanejo', src: 'https://archive.org/download/cicero-nogueira-interpreta-harpa-crista/01%20-%20Firmes%20Promessas.MP3', dur: '3:44' },
  { title: 'Formosa Jerusalem', artist: 'Cícero Nogueira', genre: 'sertanejo', src: 'https://archive.org/download/cicero-nogueira-interpreta-harpa-crista/02%20-%20Formosa%20Jerusalem.MP3', dur: '3:13' },
  { title: 'Ao Estrugir da Trombeta', artist: 'Cícero Nogueira', genre: 'sertanejo', src: 'https://archive.org/download/cicero-nogueira-interpreta-harpa-crista/03%20-%20Ao%20Estrugir%20da%20Trombeta.MP3', dur: '3:18' },
  { title: 'Não Temas', artist: 'Cícero Nogueira', genre: 'sertanejo', src: 'https://archive.org/download/cicero-nogueira-interpreta-harpa-crista/04%20-%20N%C3%A3o%20Temas.MP3', dur: '4:26' },
  { title: 'Getsemane', artist: 'Cícero Nogueira', genre: 'sertanejo', src: 'https://archive.org/download/cicero-nogueira-interpreta-harpa-crista/05%20-%20Getsemane.MP3', dur: '3:41' },
  { title: 'Graca Nova', artist: 'Cícero Nogueira', genre: 'sertanejo', src: 'https://archive.org/download/cicero-nogueira-interpreta-harpa-crista/06%20-%20Graca%20Nova.MP3', dur: '3:41' },
  { title: 'Tensa Palma', artist: 'Cícero Nogueira', genre: 'sertanejo', src: 'https://archive.org/download/cicero-nogueira-interpreta-harpa-crista/07%20-%20Tensa%20Palma.MP3', dur: '3:14' },
  { title: 'Bem Aventurado', artist: 'Cícero Nogueira', genre: 'sertanejo', src: 'https://archive.org/download/cicero-nogueira-interpreta-harpa-crista/08%20-%20%20Bem%20Aventurado.MP3', dur: '2:53' },
  { title: 'Mais Perto', artist: 'Cícero Nogueira', genre: 'sertanejo', src: 'https://archive.org/download/cicero-nogueira-interpreta-harpa-crista/09%20-%20Mais%20Perto.MP3', dur: '4:54' },
  { title: 'Não deixo minha cruz', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/Brega-gospel/1%20-%20N%C3%A3o%20deixo%20minha%20cruz.mp3', dur: '3:12' },
  { title: 'Seu Nome É Jesus', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/Brega-gospel/10%20-%20Seu%20Nome%20%C3%89%20Jesus%20%28a89be2%29.mp3', dur: '3:21' },
  { title: 'Vou te Amar', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/Brega-gospel/11%20-%20Vou%20te%20Amar.mp3', dur: '3:01' },
  { title: 'Pode contar comigo', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/Brega-gospel/2%20-%20Pode%20contar%20comigo.mp3', dur: '3:05' },
  { title: 'Meu jeito de menino', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/Brega-gospel/3%20-%20Meu%20jeito%20de%20menino.mp3', dur: '4:20' },
  { title: 'Confia Em Jesus', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/Brega-gospel/4%20-%20Confia%20Em%20Jesus%20%283d3d7b%29.mp3', dur: '3:08' },
  { title: 'De volta pro sertão', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/Brega-gospel/5%20-%20De%20volta%20pro%20sert%C3%A3o.mp3', dur: '4:52' },
  { title: 'Alerta', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/Brega-gospel/6%20-%20Alerta.mp3', dur: '3:14' },
  { title: 'Foi Deus que me deu você', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/Brega-gospel/7%20-%20Foi%20Deus%20que%20me%20deu%20voc%C3%AA.mp3', dur: '4:15' },
  { title: 'Te Amo', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/Brega-gospel/8%20-%20Te%20Amo.mp3', dur: '3:50' },
  { title: 'Nova Criatura', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/Brega-gospel/9%20-%20Nova%20Criatura%20%281-ef51b9%29.mp3', dur: '3:19' },
  { title: 'Estou Indo Embora', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/voce-vai-vencer/1%20-%20Estou%20Indo%20Embora.mp3', dur: '3:01' },
  { title: 'A Vitória vai Chegar', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/voce-vai-vencer/10%20-%20A%20Vit%C3%B3ria%20vai%20Chegar.mp3', dur: '2:44' },
  { title: 'Eu Vou Subir', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/voce-vai-vencer/2%20-%20Eu%20Vou%20Subir.mp3', dur: '3:38' },
  { title: 'Nunca Mais vou Sofrer', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/voce-vai-vencer/3%20-%20Nunca%20Mais%20vou%20Sofrer.mp3', dur: '3:44' },
  { title: 'Você vai Vencer', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/voce-vai-vencer/4%20-%20Voc%C3%AA%20vai%20Vencer.mp3', dur: '3:39' },
  { title: 'Meninos Abandonados', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/voce-vai-vencer/5%20-%20Meninos%20Abandonados.mp3', dur: '3:32' },
  { title: 'Crianças Carentes', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/voce-vai-vencer/6%20-%20Crian%C3%A7as%20Carentes.mp3', dur: '3:35' },
  { title: 'Eu te Amo', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/voce-vai-vencer/7%20-%20Eu%20te%20Amo.mp3', dur: '4:26' },
  { title: 'A Trombeta vai Tocar', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/voce-vai-vencer/8%20-%20A%20Trombeta%20vai%20Tocar.mp3', dur: '3:24' },
  { title: 'As Portas vão se Abrir', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/voce-vai-vencer/9%20-%20As%20Portas%20v%C3%A3o%20se%20Abrir.mp3', dur: '3:49' },
  { title: 'Não Vou te Deixar', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/nao-desista/1%20-%20N%C3%A3o%20Vou%20te%20Deixar.mp3', dur: '3:47' },
  { title: 'Vencedor', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/nao-desista/10%20-%20Vencedor.mp3', dur: '3:50' },
  { title: 'Deus', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/nao-desista/2%20-%20Deus.mp3', dur: '3:32' },
  { title: 'Vai ser Tão bom', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/nao-desista/3%20-%20Vai%20ser%20T%C3%A3o%20bom.mp3', dur: '3:09' },
  { title: 'Eu te Amo Tanto', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/nao-desista/4%20-%20Eu%20te%20Amo%20Tanto.mp3', dur: '3:13' },
  { title: 'Mamãe eu Te amo', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/nao-desista/5%20-%20Mam%C3%A3e%20eu%20Te%20amo.mp3', dur: '3:02' },
  { title: 'Profecia', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/nao-desista/6%20-%20Profecia.mp3', dur: '4:16' },
  { title: 'Não Desista', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/nao-desista/7%20-%20N%C3%A3o%20Desista.mp3', dur: '3:45' },
  { title: 'Declaração de Amor', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/nao-desista/8%20-%20Declara%C3%A7%C3%A3o%20de%20Amor.mp3', dur: '3:38' },
  { title: 'Milagre', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/nao-desista/9%20-%20Milagre.mp3', dur: '3:48' },
  { title: 'É Hoje', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/e-hoje/01.%20%C3%89%20Hoje.mp3', dur: '3:23' },
  { title: 'Além do Infinito', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/e-hoje/02.%20Al%C3%A9m%20do%20Infinito.mp3', dur: '3:16' },
  { title: 'Amor Profundo', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/e-hoje/03.%20Amor%20Profundo.mp3', dur: '3:35' },
  { title: 'Outra Vez', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/e-hoje/04.%20Outra%20Vez.mp3', dur: '3:30' },
  { title: 'Pra te Socorrer', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/e-hoje/05.%20Pra%20te%20Socorrer.mp3', dur: '4:23' },
  { title: 'O Missionário', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/e-hoje/06.%20O%20Mission%C3%A1rio.mp3', dur: '3:16' },
  { title: 'O Convite', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/e-hoje/07.%20O%20Convite.mp3', dur: '3:15' },
  { title: 'Se Jesus Falou', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/e-hoje/08.%20Se%20Jesus%20Falou.mp3', dur: '2:33' },
  { title: 'Rico Insensato', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/e-hoje/10.%20Rico%20Insensato.mp3', dur: '4:01' },
  { title: 'Eu Sei', artist: 'Royce Camargo', genre: 'sertanejo', src: 'https://archive.org/download/e-hoje/9.%20Eu%20Sei.mp3', dur: '3:04' },

  // === SERTANEJO RAIZ GOSPEL (57 faixas) ===
  { title: 'O Dia Do Triunfo De Jesus', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-1/01%20.%20O%20Dia%20Do%20Triunfo%20De%20Jesus.mp3', dur: '3:18' },
  { title: 'Olhai Para O Cordeiro De Deus', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-1/02%20.%20Olhai%20Para%20O%20Cordeiro%20De%20Deus.mp3', dur: '2:43' },
  { title: 'Imploramos O Consolador', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-1/03%20.%20Imploramos%20O%20Consolador.mp3', dur: '3:27' },
  { title: 'Guarda O Contato', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-1/04%20.%20Guarda%20O%20Contato.mp3', dur: '2:49' },
  { title: 'Lugar De Delicias', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-1/05%20.%20Lugar%20De%20Delicias.mp3', dur: '3:15' },
  { title: 'Alvo Mais Que A Neve', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-1/06%20.%20Alvo%20Mais%20Que%20A%20Neve.mp3', dur: '3:30' },
  { title: 'Servir A Jesus', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-1/07%20.%20Servir%20A%20Jesus.mp3', dur: '2:48' },
  { title: 'Revela A Nos, Senhor', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-1/08%20.%20Revela%20A%20Nos%2C%20Senhor.mp3', dur: '4:57' },
  { title: 'Com Tua Mao Segura', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-1/09%20.%20Com%20Tua%20Mao%20Segura.mp3', dur: '1:58' },
  { title: 'A Alma Abatida', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-1/10%20.%20A%20Alma%20Abatida.mp3', dur: '4:14' },
  { title: 'As Firmes Promessas', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-2/01%20.%20As%20Firmes%20Promessas.mp3', dur: '2:54' },
  { title: 'Saudosa Lembranca', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-2/02%20.%20Saudosa%20Lembranca.mp3', dur: '3:46' },
  { title: 'A Mensagem Da Cruz', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-2/03%20.%20A%20Mensagem%20Da%20Cruz.mp3', dur: '4:31' },
  { title: 'Conversao', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-2/04%20.%20Conversao.mp3', dur: '3:07' },
  { title: 'O Aurio Dia', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-2/05%20.%20O%20Aurio%20Dia.mp3', dur: '3:16' },
  { title: 'A Formosa Jerusalem', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-2/06%20.%20A%20Formosa%20Jerusalem.mp3', dur: '2:42' },
  { title: 'O Senhor Da Ceifa Chama', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-2/07%20.%20O%20Senhor%20Da%20Ceifa%20Chama.mp3', dur: '5:02' },
  { title: 'Fala, Fala Senhor', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-2/08%20.%20Fala%2C%20Fala%20Senhor.mp3', dur: '2:37' },
  { title: 'Meu Redentor', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-2/09%20.%20Meu%20Redentor.mp3', dur: '3:04' },
  { title: 'De Valor Em Valor', artist: 'Jair Pires', genre: 'sertanejo-raiz', src: 'https://archive.org/download/jair-pires-harpa-crista-volume-2/10%20.%20De%20Valor%20Em%20Valor.mp3', dur: '2:56' },
  { title: 'Faze Já o Teu Querer', artist: 'Toinho de Aripibú', genre: 'sertanejo-raiz', src: 'https://archive.org/download/toinho-de-aripibu-nordestino-todo-harpa-crista/01%20-%20Faze%20J%C3%A1%20o%20Teu%20Querer.mp3', dur: '3:02' },
  { title: 'Abraão e o Seu Sacrificio', artist: 'Toinho de Aripibú', genre: 'sertanejo-raiz', src: 'https://archive.org/download/toinho-de-aripibu-nordestino-todo-harpa-crista/02%20-%20Abra%C3%A3o%20e%20o%20Seu%20Sacrificio.mp3', dur: '3:13' },
  { title: 'Conversão', artist: 'Toinho de Aripibú', genre: 'sertanejo-raiz', src: 'https://archive.org/download/toinho-de-aripibu-nordestino-todo-harpa-crista/03%20-%20Convers%C3%A3o.mp3', dur: '3:28' },
  { title: 'Nossa Esperança', artist: 'Toinho de Aripibú', genre: 'sertanejo-raiz', src: 'https://archive.org/download/toinho-de-aripibu-nordestino-todo-harpa-crista/04%20-%20Nossa%20Esperan%C3%A7a.mp3', dur: '4:18' },
  { title: 'O Senhor da Ceia Chama', artist: 'Toinho de Aripibú', genre: 'sertanejo-raiz', src: 'https://archive.org/download/toinho-de-aripibu-nordestino-todo-harpa-crista/05%20-%20O%20Senhor%20da%20Ceia%20Chama.mp3', dur: '3:20' },
  { title: 'Bem-Aventurança do Crente', artist: 'Toinho de Aripibú', genre: 'sertanejo-raiz', src: 'https://archive.org/download/toinho-de-aripibu-nordestino-todo-harpa-crista/06%20-%20Bem-Aventuran%C3%A7a%20do%20Crente.mp3', dur: '3:13' },
  { title: 'Ao Estrugir da Trombeta', artist: 'Toinho de Aripibú', genre: 'sertanejo-raiz', src: 'https://archive.org/download/toinho-de-aripibu-nordestino-todo-harpa-crista/07%20-%20Ao%20Estrugir%20da%20Trombeta.mp3', dur: '2:56' },
  { title: 'Vem a Cristo', artist: 'Toinho de Aripibú', genre: 'sertanejo-raiz', src: 'https://archive.org/download/toinho-de-aripibu-nordestino-todo-harpa-crista/08%20-%20Vem%20a%20Cristo.mp3', dur: '2:17' },
  { title: 'Sobre as Ondas do Mar', artist: 'Toinho de Aripibú', genre: 'sertanejo-raiz', src: 'https://archive.org/download/toinho-de-aripibu-nordestino-todo-harpa-crista/09%20-%20Sobre%20as%20Ondas%20do%20Mar.mp3', dur: '3:54' },
  { title: 'O Bondoso Amigo', artist: 'Toinho de Aripibú', genre: 'sertanejo-raiz', src: 'https://archive.org/download/toinho-de-aripibu-nordestino-todo-harpa-crista/10%20-%20O%20Bondoso%20Amigo.mp3', dur: '2:59' },
  { title: 'A Mao Invisivel - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/A%20Mao%20Invisivel%20-%20DJefferSongs.mp3', dur: '2:28' },
  { title: 'A Viagem Do Coracao - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/A%20Viagem%20Do%20Coracao%20-%20DJefferSongs.mp3', dur: '2:52' },
  { title: 'A Voz Do Coracao - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/A%20Voz%20Do%20Coracao%20-%20DJefferSongs.mp3', dur: '3:21' },
  { title: 'Brilho Da Fe - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Brilho%20Da%20Fe%20-%20DJefferSongs.mp3', dur: '2:50' },
  { title: 'Caminho Da Esperanca - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Caminho%20Da%20Esperanca%20-%20DJefferSongs.mp3', dur: '3:00' },
  { title: 'Caminho De Luz - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Caminho%20De%20Luz%20-%20DJefferSongs.mp3', dur: '3:19' },
  { title: 'Chuva De Bencaos - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Chuva%20De%20Bencaos%20-%20DJefferSongs.mp3', dur: '2:52' },
  { title: 'Coracao Que Ora - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Coracao%20Que%20Ora%20-%20DJefferSongs.mp3', dur: '3:08' },
  { title: 'Estrela Guia - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Estrela%20Guia%20-%20DJefferSongs.mp3', dur: '2:55' },
  { title: 'Fe No Sertao - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Fe%20No%20Sertao%20-%20DJefferSongs.mp3', dur: '2:58' },
  { title: 'Fe Que Move Montanhas - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Fe%20Que%20Move%20Montanhas%20-%20DJefferSongs.mp3', dur: '2:38' },
  { title: 'Jardim Da Promessa - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Jardim%20Da%20Promessa%20-%20DJefferSongs.mp3', dur: '3:04' },
  { title: 'Luz Do Amanha - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Luz%20Do%20Amanha%20-%20DJefferSongs.mp3', dur: '3:29' },
  { title: 'Luz Do Horizonte - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Luz%20Do%20Horizonte%20-%20DJefferSongs.mp3', dur: '3:04' },
  { title: 'Manha De Esperanca - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Manha%20De%20Esperanca%20-%20DJefferSongs.mp3', dur: '2:54' },
  { title: 'Milagre Na Estrada - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Milagre%20Na%20Estrada%20-%20DJefferSongs.mp3', dur: '3:16' },
  { title: 'Milagre No Por Do Sol - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Milagre%20No%20Por%20Do%20Sol%20-%20DJefferSongs.mp3', dur: '3:32' },
  { title: 'O Barco E O Vento - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/O%20Barco%20E%20O%20Vento%20-%20DJefferSongs.mp3', dur: '2:50' },
  { title: 'O Ceu No Campo - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/O%20Ceu%20No%20Campo%20-%20DJefferSongs.mp3', dur: '3:14' },
  { title: 'O Milagre Da Semente - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/O%20Milagre%20Da%20Semente%20-%20DJefferSongs.mp3', dur: '2:35' },
  { title: 'O Milagre Do Amor - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/O%20Milagre%20Do%20Amor%20-%20DJefferSongs.mp3', dur: '2:49' },
  { title: 'Oracao Do Amanhecer - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Oracao%20Do%20Amanhecer%20-%20DJefferSongs.mp3', dur: '3:28' },
  { title: 'Rio Da Esperanca - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Rio%20Da%20Esperanca%20-%20DJefferSongs.mp3', dur: '3:00' },
  { title: 'Semente Da Fe - DJefferSongs', artist: 'DJefferSongs', genre: 'sertanejo-raiz', src: 'https://archive.org/download/sertanejo-cristao-raiz-djjeffersongs-v3/Semente%20Da%20Fe%20-%20DJefferSongs.mp3', dur: '2:36' },
  { title: 'Uma Flor Gloriosa', artist: 'Ian Gleizer', genre: 'sertanejo-raiz', src: 'https://archive.org/download/uma-flor-gloriosa-ian-gleizer-canta-meu-sertao-harpa-crista-nordestina/Uma%20Flor%20Gloriosa%20Ian%20Gleizer%20Canta%20Meu%20Sert%C3%A3o%20Harpa%20Crist%C3%A3%20Nordestina.mp3', dur: '4:28' },
  { title: 'Vencendo Vem Jesus', artist: 'Ian Gleizer', genre: 'sertanejo-raiz', src: 'https://archive.org/download/vencendo-vem-jesus-ian-gleizer-canta-meu-sertao-harpa-crista-nordestina/Vencendo%20Vem%20Jesus%20Ian%20Gleizer%20Canta%20Meu%20Sert%C3%A3o%20Harpa%20Crist%C3%A3%20Nordestina.mp3', dur: '6:00' },
  { title: 'Medley: Plena Paz / Mais Perto Quero Estar', artist: 'Ian Gleizer', genre: 'sertanejo-raiz', src: 'https://archive.org/download/medley-plena-paz-mais-perto-quero-estar-ian-gleizer-canta-meu-sertao-harpa-crista-nordestina/Medley%20Plena%20Paz%20Mais%20Perto%20Quero%20Estar%20Ian%20Gleizer%20Canta%20Meu%20Sert%C3%A3o%20Harpa%20Crist%C3%A3%20Nordestina.mp3', dur: '3:29' },

  // === MPB GOSPEL (25 faixas) ===
  { title: 'Fala A Minha Alma', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/01%20Fala%20A%20Minha%20Alma.mp3', dur: '6:46' },
  { title: 'Mais Perto Quero Estar', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/02%20Mais%20Perto%20Quero%20Estar.mp3', dur: '5:48' },
  { title: 'Sossegai', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/03%20Sossegai.mp3', dur: '4:34' },
  { title: 'Tu És Fiel Senhor', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/04%20Tu%20%C3%89s%20Fiel%20Senhor.mp3', dur: '5:06' },
  { title: 'Alvo Mais Que A Neve', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/05%20Alvo%20Mais%20Que%20A%20Neve.mp3', dur: '6:07' },
  { title: 'Cristo Me Amou', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/06%20Cristo%20Me%20Amou.mp3', dur: '6:49' },
  { title: 'Oração Da Noite', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/07%20Ora%C3%A7%C3%A3o%20Da%20Noite.mp3', dur: '3:54' },
  { title: 'Brilhando', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/08%20Brilhando.mp3', dur: '5:13' },
  { title: 'Firme Nas Promessas', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/09%20Firme%20Nas%20Promessas.mp3', dur: '4:12' },
  { title: 'Bendita Hora De Oração', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/10%20Bendita%20Hora%20De%20Ora%C3%A7%C3%A3o.mp3', dur: '5:01' },
  { title: 'Segurança', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/11%20Seguran%C3%A7a.mp3', dur: '3:37' },
  { title: 'Corajosos', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/12%20Corajosos.mp3', dur: '4:49' },
  { title: 'Terra Feliz', artist: 'Nueva Expresión', genre: 'mpb', src: 'https://archive.org/download/nueva-expresion-gospel-collection-vol.-02-harpa-crista/13%20Terra%20Feliz.mp3', dur: '5:53' },
  { title: 'Jesus, O Bom Amigo', artist: 'Coletânea Patmos', genre: 'mpb', src: 'https://archive.org/download/coletanea-patmos-especial-harpa-crista-jesus-o-bom-amigo/01%20Jesus%2C%20O%20Bom%20Amigo.mp3', dur: '3:57' },
  { title: 'Conversao', artist: 'Coletânea Patmos', genre: 'mpb', src: 'https://archive.org/download/coletanea-patmos-especial-harpa-crista-jesus-o-bom-amigo/02%20Conversao.mp3', dur: '5:17' },
  { title: 'Vem a Mim', artist: 'Coletânea Patmos', genre: 'mpb', src: 'https://archive.org/download/coletanea-patmos-especial-harpa-crista-jesus-o-bom-amigo/03%20Vem%20a%20Mim.mp3', dur: '4:26' },
  { title: 'Uma Flor Gloriosa', artist: 'Coletânea Patmos', genre: 'mpb', src: 'https://archive.org/download/coletanea-patmos-especial-harpa-crista-jesus-o-bom-amigo/04%20Uma%20Flor%20Gloriosa.mp3', dur: '3:37' },
  { title: 'Meu Brasil', artist: 'Coletânea Patmos', genre: 'mpb', src: 'https://archive.org/download/coletanea-patmos-especial-harpa-crista-jesus-o-bom-amigo/05%20Meu%20Brasil.mp3', dur: '2:12' },
  { title: 'Deus Velara por Ti', artist: 'Coletânea Patmos', genre: 'mpb', src: 'https://archive.org/download/coletanea-patmos-especial-harpa-crista-jesus-o-bom-amigo/06%20Deus%20Velara%20por%20Ti.mp3', dur: '4:12' },
  { title: 'Pelo Sangue', artist: 'Coletânea Patmos', genre: 'mpb', src: 'https://archive.org/download/coletanea-patmos-especial-harpa-crista-jesus-o-bom-amigo/07%20Pelo%20Sangue.mp3', dur: '2:28' },
  { title: 'Manso e Suave', artist: 'Coletânea Patmos', genre: 'mpb', src: 'https://archive.org/download/coletanea-patmos-especial-harpa-crista-jesus-o-bom-amigo/08%20Manso%20e%20Suave.mp3', dur: '6:25' },
  { title: 'O Bondoso Amigo', artist: 'Coletânea Patmos', genre: 'mpb', src: 'https://archive.org/download/coletanea-patmos-especial-harpa-crista-jesus-o-bom-amigo/09%20O%20Bondoso%20Amigo.mp3', dur: '3:31' },
  { title: 'A Ultima Hora', artist: 'Coletânea Patmos', genre: 'mpb', src: 'https://archive.org/download/coletanea-patmos-especial-harpa-crista-jesus-o-bom-amigo/10%20A%20Ultima%20Hora.mp3', dur: '4:28' },
  { title: 'Ha Um Canto Novo', artist: 'Coletânea Patmos', genre: 'mpb', src: 'https://archive.org/download/coletanea-patmos-especial-harpa-crista-jesus-o-bom-amigo/11%20Ha%20Um%20Canto%20Novo.mp3', dur: '3:41' },
  { title: 'Mensagem da Palavra de Deus', artist: 'Coletânea Patmos', genre: 'mpb', src: 'https://archive.org/download/coletanea-patmos-especial-harpa-crista-jesus-o-bom-amigo/12%20Mensagem%20da%20Palavra%20de%20Deus.mp3', dur: '7:22' },

  // === CLÁSSICOS GOSPEL (HARPA CRISTÃ) (633 faixas) ===
  { title: 'Chuvas de Graça', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/1.Chuvas%20de%20Gra%C3%A7a.mp3', dur: '2:30' },
  { title: 'Eu te Louvo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/10.Eu%20te%20Louvo.mp3', dur: '2:59' },
  { title: 'O bom Consolador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/100.O%20bom%20Consolador.mp3', dur: '4:20' },
  { title: 'A Unção Real', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/101.A%20Un%C3%A7%C3%A3o%20Real.mp3', dur: '3:23' },
  { title: 'Crê Na Promessa', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/102.Cr%C3%AA%20Na%20Promessa.mp3', dur: '2:58' },
  { title: 'Caminhemos Na Luz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/103.Caminhemos%20Na%20Luz.mp3', dur: '2:42' },
  { title: 'Jesus Procura a Ovelha', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/104.Jesus%20Procura%20a%20Ovelha.mp3', dur: '2:50' },
  { title: 'A Gloriosa Esperança', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/105.A%20Gloriosa%20Esperan%C3%A7a.mp3', dur: '2:30' },
  { title: 'Viva Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/106.Viva%20Cristo.mp3', dur: '1:46' },
  { title: 'Firme Nas Promessas', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/107.Firme%20Nas%20Promessas.mp3', dur: '2:58' },
  { title: 'Pelejar Por Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/108.Pelejar%20Por%20Jesus.mp3', dur: '2:49' },
  { title: 'Venha a Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/109.Venha%20a%20Jesus.mp3', dur: '2:29' },
  { title: 'Ó Cristão, Eia Avante', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/11.%C3%93%20Crist%C3%A3o%2C%20Eia%20Avante.mp3', dur: '3:30' },
  { title: 'Clama Jesus, Jesus!', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/110.Clama%20Jesus%2C%20Jesus%21.mp3', dur: '2:33' },
  { title: 'Que Mudanca', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/111.Que%20Mudanca.mp3', dur: '3:08' },
  { title: 'O Nome Soberano', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/112.O%20Nome%20Soberano.mp3', dur: '3:01' },
  { title: 'O Celeste Diretor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/113.O%20Celeste%20Diretor.mp3', dur: '2:17' },
  { title: 'Aceita o Perdao de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/114.Aceita%20o%20Perdao%20de%20Jesus.mp3', dur: '2:45' },
  { title: 'Trabalhai e Orai', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/115.Trabalhai%20e%20Orai.mp3', dur: '2:20' },
  { title: 'Livre Estou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/116.Livre%20Estou.mp3', dur: '2:33' },
  { title: 'O Senhor Salva a Todo o Pecador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/117.O%20Senhor%20Salva%20a%20Todo%20o%20Pecador.mp3', dur: '2:51' },
  { title: 'Face a Face', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/118.Face%20a%20Face.mp3', dur: '3:29' },
  { title: 'Inesgotavel e Seu Amor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/119.Inesgotavel%20e%20Seu%20Amor.mp3', dur: '3:06' },
  { title: 'Vem Já, Pecador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/12.Vem%20J%C3%A1%2C%20Pecador.mp3', dur: '2:56' },
  { title: 'Noite de Paz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/120.Noite%20de%20Paz.mp3', dur: '2:20' },
  { title: 'Maravilhoso é Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/121.Maravilhoso%20%C3%A9%20Jesus.mp3', dur: '2:31' },
  { title: 'Fogo Divino', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/122.Fogo%20Divino.mp3', dur: '2:08' },
  { title: 'Cristo Voltara', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/123.Cristo%20Voltara.mp3', dur: '2:48' },
  { title: 'Adoração', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/124.Adora%C3%A7%C3%A3o.mp3', dur: '4:03' },
  { title: 'Quem Dera Hoje Vir', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/125.Quem%20Dera%20Hoje%20Vir.mp3', dur: '3:58' },
  { title: 'Bem Aventurança do Crente', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/126.Bem%20Aventuran%C3%A7a%20do%20Crente.mp3', dur: '2:55' },
  { title: 'O Senhor da Ceifa Chama', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/127.O%20Senhor%20da%20Ceifa%20Chama.mp3', dur: '2:59' },
  { title: 'Entrega o Teu Coração', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/128.Entrega%20o%20Teu%20Cora%C3%A7%C3%A3o.mp3', dur: '3:45' },
  { title: 'A Fonte Salvadora', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/129.A%20Fonte%20Salvadora.mp3', dur: '2:54' },
  { title: 'Jesus Comprou-me', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/13.Jesus%20Comprou-me.mp3', dur: '2:38' },
  { title: 'Cristo é Meu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/130.Cristo%20%C3%A9%20Meu.mp3', dur: '2:47' },
  { title: 'De Valor Em Valor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/131.De%20Valor%20Em%20Valor.mp3', dur: '4:33' },
  { title: 'Obreiros do Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/132.Obreiros%20do%20Senhor.mp3', dur: '5:26' },
  { title: 'No Rol do Livro', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/133.No%20Rol%20do%20Livro.mp3', dur: '3:50' },
  { title: 'Jesus a Porta do Coração', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/134.Jesus%20a%20Porta%20do%20Cora%C3%A7%C3%A3o.mp3', dur: '2:16' },
  { title: 'O Nome Precioso', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/135.O%20Nome%20Precioso.mp3', dur: '2:53' },
  { title: 'Jesus Nosso Socorro', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/136.Jesus%20Nosso%20Socorro.mp3', dur: '2:40' },
  { title: 'Liberto da Escravidao', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/137.Liberto%20da%20Escravidao.mp3', dur: '3:37' },
  { title: 'Quem Bate é Jesus Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/138.Quem%20Bate%20%C3%A9%20Jesus%20Cristo.mp3', dur: '3:58' },
  { title: 'Jesus Meu Eterno Redentor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/139.Jesus%20Meu%20Eterno%20Redentor.mp3', dur: '3:20' },
  { title: 'Gozo Em Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/14.Gozo%20Em%20Jesus.mp3', dur: '3:29' },
  { title: 'A Seguranca do Crente', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/140.A%20Seguranca%20do%20Crente.mp3', dur: '2:45' },
  { title: 'Guia-Me Sempre Meu Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/141.Guia-Me%20Sempre%20Meu%20Senhor.mp3', dur: '2:32' },
  { title: 'A Cidade Celeste', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/142.A%20Cidade%20Celeste.mp3', dur: '8:26' },
  { title: 'O Verdadeiro Amigo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/143.O%20Verdadeiro%20Amigo.mp3', dur: '2:16' },
  { title: 'Vem a Assembleia de Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/144.Vem%20a%20Assembleia%20de%20Deus.mp3', dur: '3:25' },
  { title: 'Uniao do Crente Com Seu Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/145.Uniao%20do%20Crente%20Com%20Seu%20Senhor.mp3', dur: '3:50' },
  { title: 'Caminho Brilhante', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/146.Caminho%20Brilhante.mp3', dur: '3:13' },
  { title: 'Servir a Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/147.Servir%20a%20Jesus.mp3', dur: '2:48' },
  { title: 'Bendirei a Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/148.Bendirei%20a%20Jesus.mp3', dur: '3:27' },
  { title: 'Canto do Pescador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/149.Canto%20do%20Pescador.mp3', dur: '4:11' },
  { title: 'Conversão', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/15.Convers%C3%A3o.mp3', dur: '3:01' },
  { title: 'Para Casamentos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/150.Para%20Casamentos.mp3', dur: '2:25' },
  { title: 'Fala Jesus Querido', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/151.Fala%20Jesus%20Querido.mp3', dur: '4:17' },
  { title: 'Pela Cruz Ao Ceu Irei', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/152.Pela%20Cruz%20Ao%20Ceu%20Irei.mp3', dur: '2:19' },
  { title: 'Soldados de Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/153.Soldados%20de%20Cristo.mp3', dur: '3:57' },
  { title: 'Doce Nome de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/154.Doce%20Nome%20de%20Jesus.mp3', dur: '3:01' },
  { title: 'Imploramos Teu Poder', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/155.Imploramos%20Teu%20Poder.mp3', dur: '2:54' },
  { title: 'A Ovelha Perdida', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/156.A%20Ovelha%20Perdida.mp3', dur: '4:18' },
  { title: 'Cristo Em Breve Vem', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/157.Cristo%20Em%20Breve%20Vem.mp3', dur: '2:36' },
  { title: 'Que Faras De Jesus Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/158.Que%20Faras%20De%20Jesus%20Cristo.mp3', dur: '2:45' },
  { title: 'Cantai Ó Peregrinos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/159.Cantai%20%C3%93%20Peregrinos.mp3', dur: '4:11' },
  { title: 'Despertar Para o Trabalho', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/16.Despertar%20Para%20o%20Trabalho.mp3', dur: '3:08' },
  { title: 'Deus Nos Quis Salvar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/160.Deus%20Nos%20Quis%20Salvar.mp3', dur: '3:08' },
  { title: 'Navegando Para a Terra Celeste', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/161.Navegando%20Para%20a%20Terra%20Celeste.mp3', dur: '2:33' },
  { title: 'O Estandarte da Verdade', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/162.O%20Estandarte%20da%20Verdade.mp3', dur: '1:58' },
  { title: 'Cristo Morreu Por Mim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/163.Cristo%20Morreu%20Por%20Mim.mp3', dur: '2:43' },
  { title: 'Paz Luz e Amor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/164.Paz%20Luz%20e%20Amor.mp3', dur: '2:06' },
  { title: 'A Armadura Crista', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/165.A%20Armadura%20Crista.mp3', dur: '3:02' },
  { title: 'Deixa Entrar o Rei da Gloria', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/166.Deixa%20Entrar%20o%20Rei%20da%20Gloria.mp3', dur: '2:43' },
  { title: 'As Testemunhas de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/167.As%20Testemunhas%20de%20Jesus.mp3', dur: '2:51' },
  { title: 'Meus Irmãos Nos Jubilemos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/168.Meus%20Irm%C3%A3os%20Nos%20Jubilemos.mp3', dur: '2:56' },
  { title: 'Oh Jesus Me Ama', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/169.Oh%20Jesus%20Me%20Ama.mp3', dur: '2:38' },
  { title: 'Pensando Em Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/17.Pensando%20Em%20Jesus.mp3', dur: '1:34' },
  { title: 'Ao Calvario de Horror', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/170.Ao%20Calvario%20de%20Horror.mp3', dur: '2:16' },
  { title: 'Um Pecador Remido', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/171.Um%20Pecador%20Remido.mp3', dur: '2:38' },
  { title: 'O Vem Te Entregar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/172.O%20Vem%20Te%20Entregar.mp3', dur: '2:45' },
  { title: 'Os Santos Louvam ao Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/173.Os%20Santos%20Louvam%20ao%20Senhor.mp3', dur: '2:20' },
  { title: 'Gloria Aleluia Gloria', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/174.Gloria%20Aleluia%20Gloria.mp3', dur: '2:52' },
  { title: 'Irmãos Amados', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/175.Irm%C3%A3os%20Amados.mp3', dur: '2:21' },
  { title: 'Sacerdotes do Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/176.Sacerdotes%20do%20Senhor.mp3', dur: '2:51' },
  { title: 'Salvo Estou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/177.Salvo%20Estou.mp3', dur: '2:13' },
  { title: 'Gloriosa Paz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/178.Gloriosa%20Paz.mp3', dur: '2:51' },
  { title: 'Redentor Formoso', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/179.Redentor%20Formoso.mp3', dur: '3:20' },
  { title: 'Grata Nova', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/18.Grata%20Nova.mp3', dur: '3:03' },
  { title: 'Em Cristo Fruimos a Paz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/180.Em%20Cristo%20Fruimos%20a%20Paz.mp3', dur: '3:37' },
  { title: 'Vem Celestge Redentor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/181.Vem%20Celestge%20Redentor.mp3', dur: '2:18' },
  { title: 'Jesus No Getsêmane', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/182.Jesus%20No%20Gets%C3%AAmane.mp3', dur: '4:22' },
  { title: 'Ressucitou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/183.Ressucitou.mp3', dur: '3:28' },
  { title: 'Meu Jesus Meu Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/184.Meu%20Jesus%20Meu%20Jesus.mp3', dur: '3:01' },
  { title: 'Invocação e Louvor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/185.Invoca%C3%A7%C3%A3o%20e%20Louvor.mp3', dur: '2:30' },
  { title: 'Mais Perto Meu Deus de Ti', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/187.Mais%20Perto%20Meu%20Deus%20de%20Ti.mp3', dur: '3:22' },
  { title: 'O Gozo do Céu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/188.O%20Gozo%20do%20C%C3%A9u.mp3', dur: '2:47' },
  { title: 'Glória ao Salvador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/189.Gl%C3%B3ria%20ao%20Salvador.mp3', dur: '2:19' },
  { title: 'O Convite de Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/19.O%20Convite%20de%20Cristo.mp3', dur: '1:47' },
  { title: 'Cristo Meu Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/190.Cristo%20Meu%20Cristo.mp3', dur: '2:37' },
  { title: 'O Meu Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/191.O%20Meu%20Jesus.mp3', dur: '2:56' },
  { title: 'Pelo Sangue', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/192.Pelo%20Sangue.mp3', dur: '2:10' },
  { title: 'A Alma Abatida', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/193.A%20Alma%20Abatida.mp3', dur: '2:53' },
  { title: 'Jesus Me Guiara', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/194.Jesus%20Me%20Guiara.mp3', dur: '2:36' },
  { title: 'Benigno Salvador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/195.Benigno%20Salvador.mp3', dur: '2:30' },
  { title: 'Uma Flor Gloriosa', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/196.Uma%20Flor%20Gloriosa.mp3', dur: '2:53' },
  { title: 'O Lar da Glória', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/197.O%20Lar%20da%20Gl%C3%B3ria.mp3', dur: '3:09' },
  { title: 'Jesus o Bom Amigo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/198.Jesus%20o%20Bom%20Amigo.mp3', dur: '4:47' },
  { title: 'A Ceia do Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/199.A%20Ceia%20do%20Senhor.mp3', dur: '2:13' },
  { title: 'Saudosa Lembrança', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/2.Saudosa%20Lembran%C3%A7a.mp3', dur: '3:38' },
  { title: 'Olhai Para o Cordeiro de Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/20.Olhai%20Para%20o%20Cordeiro%20de%20Deus.mp3', dur: '2:48' },
  { title: 'O Bondoso Amigo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/200.O%20Bondoso%20Amigo.mp3', dur: '2:17' },
  { title: 'Decisão', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/201.Decis%C3%A3o.mp3', dur: '3:22' },
  { title: 'Lugar de Delícias', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/202.Lugar%20de%20Del%C3%ADcias.mp3', dur: '2:52' },
  { title: 'Deixai as Ilusões', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/203.Deixai%20as%20Ilus%C3%B5es.mp3', dur: '3:01' },
  { title: 'O Peregrino Na Terra', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/204.O%20Peregrino%20Na%20Terra.mp3', dur: '3:14' },
  { title: 'Graca Graça', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/205.Graca%20Gra%C3%A7a.mp3', dur: '2:59' },
  { title: 'O Clarim Nos Alerta', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/206.O%20Clarim%20Nos%20Alerta.mp3', dur: '2:53' },
  { title: 'Jesuralem Divina', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/207.Jesuralem%20Divina.mp3', dur: '3:03' },
  { title: 'Vem a Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/208.Vem%20a%20Cristo.mp3', dur: '3:12' },
  { title: 'A Voz do Bom Pastor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/209.A%20Voz%20do%20Bom%20Pastor.mp3', dur: '2:45' },
  { title: 'Gloriosa Aurora', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/21.Gloriosa%20Aurora.mp3', dur: '3:14' },
  { title: 'Fala Fala Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/210.Fala%20Fala%20Senhor.mp3', dur: '2:37' },
  { title: 'Vem a Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/211.Vem%20a%20Deus.mp3', dur: '3:30' },
  { title: 'Os Guerreiros Se Preparam', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/212.Os%20Guerreiros%20Se%20Preparam.mp3', dur: '4:56' },
  { title: 'Sobre a Terra Vou Andando', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/213.Sobre%20a%20Terra%20Vou%20Andando.mp3', dur: '2:24' },
  { title: 'Desejamos Ir Lá', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/214.Desejamos%20Ir%20L%C3%A1.mp3', dur: '2:59' },
  { title: 'Ver-nos-emos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/215.Ver-nos-emos.mp3', dur: '2:45' },
  { title: 'Louvai a Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/216.Louvai%20a%20Deus.mp3', dur: '2:21' },
  { title: 'Ouve Sua Voz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/217.Ouve%20Sua%20Voz.mp3', dur: '2:32' },
  { title: 'Da Teu Fardo a Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/218.Da%20Teu%20Fardo%20a%20Jesus.mp3', dur: '3:29' },
  { title: 'O Amor do Criador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/219.O%20Amor%20do%20Criador.mp3', dur: '3:11' },
  { title: 'Ceia Do Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/22.Ceia%20Do%20Senhor.mp3', dur: '2:53' },
  { title: 'Ide Segar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/220.Ide%20Segar.mp3', dur: '2:06' },
  { title: 'Opera Em Mim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/221.Opera%20Em%20Mim.mp3', dur: '2:37' },
  { title: 'Vem a Jesus ó Perdido', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/222.Vem%20a%20Jesus%20%C3%B3%20Perdido.mp3', dur: '3:12' },
  { title: 'Na Minh Alma Reina a Paz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/223.Na%20Minh%20Alma%20Reina%20a%20Paz.mp3', dur: '2:36' },
  { title: 'É Tempo de Segar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/224.%C3%89%20Tempo%20de%20Segar.mp3', dur: '3:14' },
  { title: 'Se Valente', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/225.Se%20Valente.mp3', dur: '2:40' },
  { title: 'Cristo Teu Santo Amor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/226.Cristo%20Teu%20Santo%20Amor.mp3', dur: '2:57' },
  { title: 'Deus Amou Este Mundo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/227.Deus%20Amou%20Este%20Mundo.mp3', dur: '3:37' },
  { title: 'Este Mundo Não Compreende', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/228.Este%20Mundo%20N%C3%A3o%20Compreende.mp3', dur: '2:23' },
  { title: 'Jesus o Meigo Salvador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/229.Jesus%20o%20Meigo%20Salvador.mp3', dur: '1:45' },
  { title: 'Gloria Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/23.Gloria%20Jesus.mp3', dur: '2:13' },
  { title: 'Nos Vogamos Nesta Nau', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/230.Nos%20Vogamos%20Nesta%20Nau.mp3', dur: '3:14' },
  { title: 'Não Foi Com Ouro', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/231.N%C3%A3o%20Foi%20Com%20Ouro.mp3', dur: '2:53' },
  { title: 'Os Bemaventurados', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/232.Os%20Bemaventurados.mp3', dur: '2:41' },
  { title: 'O Gozo dos Santos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/234.O%20Gozo%20dos%20Santos.mp3', dur: '3:02' },
  { title: 'Já Sei Ja Sei', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/235.J%C3%A1%20Sei%20Ja%20Sei.mp3', dur: '3:37' },
  { title: 'Já Nos Lavou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/236.J%C3%A1%20Nos%20Lavou.mp3', dur: '2:31' },
  { title: 'O Gozo de Estar Preparado', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/237.O%20Gozo%20de%20Estar%20Preparado.mp3', dur: '2:16' },
  { title: 'O Pecador Desalentado', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/238.O%20Pecador%20Desalentado.mp3', dur: '2:36' },
  { title: 'Imploramos o Consolador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/239.Imploramos%20o%20Consolador.mp3', dur: '2:38' },
  { title: 'Poder Pentecostal', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/24.Poder%20Pentecostal.mp3', dur: '3:13' },
  { title: 'Oh Dia Alegre', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/240.Oh%20Dia%20Alegre.mp3', dur: '4:06' },
  { title: 'Marchemos Sem Temor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/241.Marchemos%20Sem%20Temor.mp3', dur: '2:11' },
  { title: 'Eu Confio Firmemente', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/242.Eu%20Confio%20Firmemente.mp3', dur: '3:21' },
  { title: 'Ao Abrir o Culto', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/243.Ao%20Abrir%20o%20Culto.mp3', dur: '1:56' },
  { title: 'Louvai ao Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/244.Louvai%20ao%20Senhor.mp3', dur: '2:16' },
  { title: 'Paz de Deus Em Jesus Eu Encontrei', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/245.Paz%20de%20Deus%20Em%20Jesus%20Eu%20Encontrei.mp3', dur: '2:08' },
  { title: 'O Descanso Em Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/246.O%20Descanso%20Em%20Jesus.mp3', dur: '2:19' },
  { title: 'Deus Nos Guarde No Seu Amor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/247.Deus%20Nos%20Guarde%20No%20Seu%20Amor.mp3', dur: '2:32' },
  { title: 'Hosana e Gloria', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/248.Hosana%20e%20Gloria.mp3', dur: '2:13' },
  { title: 'Ó Vem Senhor e Habita', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/249.%C3%93%20Vem%20Senhor%20e%20Habita.mp3', dur: '2:26' },
  { title: 'Jesus Tu És Bom', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/25.Jesus%20Tu%20%C3%89s%20Bom.mp3', dur: '2:09' },
  { title: 'Noiva de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/250.Noiva%20de%20Jesus.mp3', dur: '3:15' },
  { title: 'Ao Culto Não Faltar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/251.Ao%20Culto%20N%C3%A3o%20Faltar.mp3', dur: '1:33' },
  { title: 'Santosanto És Tu Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/252.Santosanto%20%C3%89s%20Tu%20Senhor.mp3', dur: '4:00' },
  { title: 'Avante ó Crentes', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/253.Avante%20%C3%B3%20Crentes.mp3', dur: '4:01' },
  { title: 'Mais Perto de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/254.Mais%20Perto%20de%20Jesus.mp3', dur: '2:30' },
  { title: 'Meu Redentor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/255.Meu%20Redentor.mp3', dur: '3:03' },
  { title: 'Abandona Este Mundo de Horror', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/256.Abandona%20Este%20Mundo%20de%20Horror.mp3', dur: '3:07' },
  { title: 'O Perdao Sem Igual', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/257.O%20Perdao%20Sem%20Igual.mp3', dur: '2:00' },
  { title: 'Na Rocha Eterna Firmado', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/258.Na%20Rocha%20Eterna%20Firmado.mp3', dur: '3:29' },
  { title: 'Creio Eu Na Bíblia', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/259.Creio%20Eu%20Na%20B%C3%ADblia.mp3', dur: '3:27' },
  { title: 'A Formosa Jerusalém', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/26.A%20Formosa%20Jerusal%C3%A9m.mp3', dur: '2:31' },
  { title: 'Avante Com o Nosso Capitão', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/260.Avante%20Com%20o%20Nosso%20Capit%C3%A3o.mp3', dur: '2:47' },
  { title: 'Alma Triste Abatida', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/261.Alma%20Triste%20Abatida.mp3', dur: '3:46' },
  { title: 'Senhor Estas Comigo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/262.Senhor%20Estas%20Comigo.mp3', dur: '2:13' },
  { title: 'Ao Fim do Culto', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/263.Ao%20Fim%20do%20Culto.mp3', dur: '1:33' },
  { title: 'Pai Celeste', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/264.Pai%20Celeste.mp3', dur: '3:40' },
  { title: 'Doce é Crer Em Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/265.Doce%20%C3%A9%20Crer%20Em%20Cristo.mp3', dur: '2:54' },
  { title: 'Resgatados Fomos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/266.Resgatados%20Fomos.mp3', dur: '3:00' },
  { title: 'Jesus Minha Forca', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/267.Jesus%20Minha%20Forca.mp3', dur: '1:50' },
  { title: 'Confiante Em Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/268.Confiante%20Em%20Deus.mp3', dur: '1:58' },
  { title: 'Louvarei ao Meu Amado', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/269.Louvarei%20ao%20Meu%20Amado.mp3', dur: '1:19' },
  { title: 'Amor Que Vence', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/27.Amor%20Que%20Vence.mp3', dur: '2:12' },
  { title: 'Louvando ao Nosso Criador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/270.Louvando%20ao%20Nosso%20Criador.mp3', dur: '2:54' },
  { title: 'Na Mansao do Salvador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/271.Na%20Mansao%20do%20Salvador.mp3', dur: '2:35' },
  { title: 'Quando Jesus Aparecer', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/272.Quando%20Jesus%20Aparecer.mp3', dur: '2:39' },
  { title: 'So a Ti Recorrerei', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/273.So%20a%20Ti%20Recorrerei.mp3', dur: '2:30' },
  { title: 'Jesus e a Luz do Mundo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/274.Jesus%20e%20a%20Luz%20do%20Mundo.mp3', dur: '3:01' },
  { title: 'O Acorda Desperta', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/275.O%20Acorda%20Desperta.mp3', dur: '2:17' },
  { title: 'Em Canaa Eu Entrarei', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/276.Em%20Canaa%20Eu%20Entrarei.mp3', dur: '4:07' },
  { title: 'Salvo Estas Limpo Estas', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/277.Salvo%20Estas%20Limpo%20Estas.mp3', dur: '2:41' },
  { title: 'Levar a Cruz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/278.Levar%20a%20Cruz.mp3', dur: '2:28' },
  { title: 'Ali Quero Ir e Tu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/279.Ali%20Quero%20Ir%20e%20Tu.mp3', dur: '3:14' },
  { title: 'Deus Vai Te Guiar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/28.Deus%20Vai%20Te%20Guiar.mp3', dur: '2:07' },
  { title: 'Ó Jesus Te Suplico', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/280.%C3%93%20Jesus%20Te%20Suplico.mp3', dur: '1:45' },
  { title: 'Vem Sem Tardar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/281.Vem%20Sem%20Tardar.mp3', dur: '3:24' },
  { title: 'Que Sangue Precioso', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/282.Que%20Sangue%20Precioso.mp3', dur: '2:31' },
  { title: 'O Pastor e Suas Ovelhas', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/283.O%20Pastor%20e%20Suas%20Ovelhas.mp3', dur: '4:29' },
  { title: 'Bendito Cristo Eis Me Aqui', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/284.Bendito%20Cristo%20Eis%20Me%20Aqui.mp3', dur: '2:47' },
  { title: 'Tu Es o Meu Gozo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/285.Tu%20Es%20o%20Meu%20Gozo.mp3', dur: '2:10' },
  { title: 'Nao Tarda Vir Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/286.Nao%20Tarda%20Vir%20Jesus.mp3', dur: '3:01' },
  { title: 'Oh Foi o Sangue', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/287.Oh%20Foi%20o%20Sangue.mp3', dur: '3:11' },
  { title: 'A Palavra da Cruz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/288.A%20Palavra%20da%20Cruz.mp3', dur: '4:23' },
  { title: 'Sob Sangue Teu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/289.Sob%20Sangue%20Teu.mp3', dur: '3:19' },
  { title: 'O Precioso Sangue', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/29.O%20Precioso%20Sangue.mp3', dur: '2:33' },
  { title: 'Teu Espirito Vem Derramar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/290.Teu%20Espirito%20Vem%20Derramar.mp3', dur: '3:36' },
  { title: 'A Mensagem da Cruz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/291.A%20Mensagem%20da%20Cruz.mp3', dur: '4:53' },
  { title: 'Qual o Preco do Perdao', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/292.Qual%20o%20Preco%20do%20Perdao.mp3', dur: '2:48' },
  { title: 'Jesus No Calvario', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/293.Jesus%20No%20Calvario.mp3', dur: '2:48' },
  { title: 'Eu Vou Com Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/294.Eu%20Vou%20Com%20Jesus.mp3', dur: '2:28' },
  { title: 'Novo Canto de Louvor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/295.Novo%20Canto%20de%20Louvor.mp3', dur: '4:18' },
  { title: 'No Jardim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/296.No%20Jardim.mp3', dur: '3:23' },
  { title: 'Abundância de Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/297.Abund%C3%A2ncia%20de%20Cristo.mp3', dur: '2:55' },
  { title: 'Avante Servos de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/298.Avante%20Servos%20de%20Jesus.mp3', dur: '3:38' },
  { title: 'Ha Um Canto Novo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/299.Ha%20Um%20Canto%20Novo.mp3', dur: '3:51' },
  { title: 'Plena Paz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/3.Plena%20Paz.mp3', dur: '3:05' },
  { title: 'Não Sou Meu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/30.N%C3%A3o%20Sou%20Meu.mp3', dur: '2:13' },
  { title: 'Nossa Esperanca', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/300.Nossa%20Esperanca.mp3', dur: '5:02' },
  { title: 'Vem Cear', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/301.Vem%20Cear.mp3', dur: '3:07' },
  { title: 'Nao Murmures Canta', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/302.Nao%20Murmures%20Canta.mp3', dur: '4:31' },
  { title: 'Precisamos de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/303.Precisamos%20de%20Jesus.mp3', dur: '2:58' },
  { title: 'A Face Adorada de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/304.A%20Face%20Adorada%20de%20Jesus.mp3', dur: '5:57' },
  { title: 'Campeoes da Luz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/305.Campeoes%20da%20Luz.mp3', dur: '4:06' },
  { title: 'A Palavra de Deus é Um Tesouro', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/306.A%20Palavra%20de%20Deus%20%C3%A9%20Um%20Tesouro.mp3', dur: '2:27' },
  { title: 'Louvor ao Deus Trino', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/307.Louvor%20ao%20Deus%20Trino.mp3', dur: '1:50' },
  { title: 'Só o Sangue de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/308.S%C3%B3%20o%20Sangue%20de%20Jesus.mp3', dur: '2:20' },
  { title: 'Ao Findar do Dia', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/309.Ao%20Findar%20do%20Dia.mp3', dur: '2:11' },
  { title: 'Glória ao Meu Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/31.Gl%C3%B3ria%20ao%20Meu%20Jesus.mp3', dur: '2:54' },
  { title: 'Avante Eu Vou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/310.Avante%20Eu%20Vou.mp3', dur: '3:09' },
  { title: 'Jesus Meu Salvador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/311.Jesus%20Meu%20Salvador.mp3', dur: '4:59' },
  { title: 'A Vinda de Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/312.A%20Vinda%20de%20Cristo.mp3', dur: '5:02' },
  { title: 'Louvor a Trindade', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/313.Louvor%20a%20Trindade.mp3', dur: '1:13' },
  { title: 'O Pai Bondoso', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/314.O%20Pai%20Bondoso.mp3', dur: '2:53' },
  { title: 'Oh Amor Bendito', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/315.Oh%20Amor%20Bendito.mp3', dur: '3:51' },
  { title: 'Em Busca de Sião', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/316.Em%20Busca%20de%20Si%C3%A3o.mp3', dur: '3:16' },
  { title: 'Jesus Vem Triunfante', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/317.Jesus%20Vem%20Triunfante.mp3', dur: '3:15' },
  { title: 'Ao Lar Paternal', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/318.Ao%20Lar%20Paternal.mp3', dur: '2:40' },
  { title: 'Ainda Ha Lugar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/319.Ainda%20Ha%20Lugar.mp3', dur: '3:12' },
  { title: 'Meu Cristo! Meu Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/32.Meu%20Cristo%21%20Meu%20Cristo.mp3', dur: '3:23' },
  { title: 'Seguir a Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/320.Seguir%20a%20Cristo.mp3', dur: '2:45' },
  { title: 'Só Em Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/321.S%C3%B3%20Em%20Jesus.mp3', dur: '2:11' },
  { title: 'As Santas Escrituras', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/322.As%20Santas%20Escrituras.mp3', dur: '2:53' },
  { title: 'Levantai os Vossos Olhos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/323.Levantai%20os%20Vossos%20Olhos.mp3', dur: '3:02' },
  { title: 'Jesus o Melhor Amigo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/324.Jesus%20o%20Melhor%20Amigo.mp3', dur: '3:43' },
  { title: 'A Luz do Céu Raiou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/325.A%20Luz%20do%20C%C3%A9u%20Raiou.mp3', dur: '3:04' },
  { title: 'Oh Meu Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/326.Oh%20Meu%20Jesus.mp3', dur: '4:25' },
  { title: 'Teu Nome Precioso', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/327.Teu%20Nome%20Precioso.mp3', dur: '2:48' },
  { title: 'O Pão da Vida', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/328.O%20P%C3%A3o%20da%20Vida.mp3', dur: '3:24' },
  { title: 'Jesus é Minha Paz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/329.Jesus%20%C3%A9%20Minha%20Paz.mp3', dur: '2:46' },
  { title: 'Com Tua Mão Segura', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/33.Com%20Tua%20M%C3%A3o%20Segura.mp3', dur: '2:19' },
  { title: 'A Fé dos Santos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/330.A%20F%C3%A9%20dos%20Santos.mp3', dur: '3:33' },
  { title: 'O Caro Salvador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/331.O%20Caro%20Salvador.mp3', dur: '2:37' },
  { title: 'Para o Céu Eu Vou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/332.Para%20o%20C%C3%A9u%20Eu%20Vou.mp3', dur: '3:13' },
  { title: 'O Céu Meu Lar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/333.O%20C%C3%A9u%20Meu%20Lar.mp3', dur: '2:07' },
  { title: 'O Fim Vem Cuidado', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/334.O%20Fim%20Vem%20Cuidado.mp3', dur: '3:06' },
  { title: 'Mui Perto Está o Dia', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/335.Mui%20Perto%20Est%C3%A1%20o%20Dia.mp3', dur: '1:39' },
  { title: 'Oracao de Elias', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/336.Oracao%20de%20Elias.mp3', dur: '3:25' },
  { title: 'O Bom Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/337.O%20Bom%20Jesus.mp3', dur: '2:11' },
  { title: 'Quero Jesus Tua Luz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/338.Quero%20Jesus%20Tua%20Luz.mp3', dur: '2:22' },
  { title: 'Jesus Ressucitado', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/339.Jesus%20Ressucitado.mp3', dur: '3:05' },
  { title: 'Milícia de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/34.Mil%C3%ADcia%20de%20Jesus.mp3', dur: '2:25' },
  { title: 'Um Povo Forte', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/340.Um%20Povo%20Forte.mp3', dur: '2:45' },
  { title: 'A Aspiração da Alma', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/341.A%20Aspira%C3%A7%C3%A3o%20da%20Alma.mp3', dur: '1:57' },
  { title: 'As Cordas do Coração', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/342.As%20Cordas%20do%20Cora%C3%A7%C3%A3o.mp3', dur: '2:59' },
  { title: 'Abre o Coração', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/343.Abre%20o%20Cora%C3%A7%C3%A3o.mp3', dur: '3:32' },
  { title: 'Um Amigo Entre os Lírios', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/344.Um%20Amigo%20Entre%20os%20L%C3%ADrios.mp3', dur: '2:57' },
  { title: 'Oh Tenho Gozo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/345.Oh%20Tenho%20Gozo.mp3', dur: '2:35' },
  { title: 'É Meu o Céu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/346.%C3%89%20Meu%20o%20C%C3%A9u.mp3', dur: '3:52' },
  { title: 'Longe de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/348.Longe%20de%20Jesus.mp3', dur: '3:06' },
  { title: 'Os Dons do Céu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/349.Os%20Dons%20do%20C%C3%A9u.mp3', dur: '3:26' },
  { title: 'O Grande Amor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/35.O%20Grande%20Amor.mp3', dur: '2:34' },
  { title: 'A Historia da Cruz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/350.A%20Historia%20da%20Cruz.mp3', dur: '3:43' },
  { title: 'A Felicidade da Salvação', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/351.A%20Felicidade%20da%20Salva%C3%A7%C3%A3o.mp3', dur: '4:13' },
  { title: 'Jesus Nossa Esperança', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/352.Jesus%20Nossa%20Esperan%C3%A7a.mp3', dur: '1:48' },
  { title: 'Vem o Pródigo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/353.Vem%20o%20Pr%C3%B3digo.mp3', dur: '3:17' },
  { title: 'O Cuidado da Alma', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/354.O%20Cuidado%20da%20Alma.mp3', dur: '2:13' },
  { title: 'Fala do Amor de Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/355.Fala%20do%20Amor%20de%20Cristo.mp3', dur: '4:29' },
  { title: 'Oração Dominical', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/356.Ora%C3%A7%C3%A3o%20Dominical.mp3', dur: '4:20' },
  { title: 'O Fim das Lutas', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/357.O%20Fim%20das%20Lutas.mp3', dur: '2:36' },
  { title: 'Senhor Manda Teu Poder', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/358.Senhor%20Manda%20Teu%20Poder.mp3', dur: '2:49' },
  { title: 'Vem a Mim Pecador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/359.Vem%20a%20Mim%20Pecador.mp3', dur: '3:53' },
  { title: 'O Exilado', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/36.O%20Exilado.mp3', dur: '2:49' },
  { title: 'A Preciosa Fonte', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/360.A%20Preciosa%20Fonte.mp3', dur: '3:06' },
  { title: 'O Peregrino e a Gloria', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/361.O%20Peregrino%20e%20a%20Gloria.mp3', dur: '3:31' },
  { title: 'O Espirito Diz Vem', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/362.O%20Espirito%20Diz%20Vem.mp3', dur: '4:01' },
  { title: 'Consagração', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/363.Consagra%C3%A7%C3%A3o.mp3', dur: '2:36' },
  { title: 'Oh Que Paz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/364.Oh%20Que%20Paz.mp3', dur: '3:46' },
  { title: 'Confianca Em Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/365.Confianca%20Em%20Jesus.mp3', dur: '2:42' },
  { title: 'O Nascimento de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/366.O%20Nascimento%20de%20Jesus.mp3', dur: '4:23' },
  { title: 'Espírito Consolador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/367.Esp%C3%ADrito%20Consolador.mp3', dur: '1:31' },
  { title: 'Jeus Tudo Pra Mim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/368.Jeus%20Tudo%20Pra%20Mim.mp3', dur: '4:12' },
  { title: 'Sob as Asas de Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/369.Sob%20as%20Asas%20de%20Deus.mp3', dur: '4:04' },
  { title: 'Cristo Pra Mim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/37.Cristo%20Pra%20Mim.mp3', dur: '2:34' },
  { title: 'Mais Grato a Ti', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/370.Mais%20Grato%20a%20Ti.mp3', dur: '4:06' },
  { title: 'Breve Vem o Dia', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/371.Breve%20Vem%20o%20Dia.mp3', dur: '2:18' },
  { title: 'Vencerá', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/372.Vencer%C3%A1.mp3', dur: '2:23' },
  { title: 'Vem a Teu Salvador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/373.Vem%20a%20Teu%20Salvador.mp3', dur: '2:27' },
  { title: 'Vida Abundante', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/374.Vida%20Abundante.mp3', dur: '2:20' },
  { title: 'Igreja Universal', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/375.Igreja%20Universal.mp3', dur: '3:33' },
  { title: 'Vamos Todos Trabalhar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/376.Vamos%20Todos%20Trabalhar.mp3', dur: '3:00' },
  { title: 'As Promessas Que Não Falham', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/377.As%20Promessas%20Que%20N%C3%A3o%20Falham.mp3', dur: '4:42' },
  { title: 'As Pisadas do Mestre', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/378.As%20Pisadas%20do%20Mestre.mp3', dur: '3:23' },
  { title: 'Salvo de Graça', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/379.Salvo%20de%20Gra%C3%A7a.mp3', dur: '3:21' },
  { title: 'O Senhor é Rei', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/38.O%20Senhor%20%C3%A9%20Rei.mp3', dur: '2:31' },
  { title: 'Abraão e Seu Sacrificio', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/380.Abra%C3%A3o%20e%20Seu%20Sacrificio.mp3', dur: '4:57' },
  { title: 'O Cordeiro de Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/381.O%20Cordeiro%20de%20Deus.mp3', dur: '4:23' },
  { title: 'Olhando Para o Calvário', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/382.Olhando%20Para%20o%20Calv%C3%A1rio.mp3', dur: '3:06' },
  { title: 'O Sustento da Alma', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/383.O%20Sustento%20da%20Alma.mp3', dur: '3:38' },
  { title: 'Sinto Vida No Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/384.Sinto%20Vida%20No%20Senhor.mp3', dur: '3:09' },
  { title: 'Amemos o Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/385.Amemos%20o%20Senhor.mp3', dur: '2:24' },
  { title: 'Vencidos os Combates', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/386.Vencidos%20os%20Combates.mp3', dur: '3:09' },
  { title: 'Derrama Teu Espírito', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/387.Derrama%20Teu%20Esp%C3%ADrito.mp3', dur: '2:57' },
  { title: 'Canta o Crente', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/388.Canta%20o%20Crente.mp3', dur: '2:27' },
  { title: 'Lava-me ó Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/389.Lava-me%20%C3%B3%20Deus.mp3', dur: '2:01' },
  { title: 'Alvo Mais Que A Neve', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/39.Alvo%20Mais%20Que%20A%20Neve.mp3', dur: '3:08' },
  { title: 'Um Coração Bondoso', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/390.Um%20Cora%C3%A7%C3%A3o%20Bondoso.mp3', dur: '2:21' },
  { title: 'Jesus No Monte da Ascensão', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/391.Jesus%20No%20Monte%20da%20Ascens%C3%A3o.mp3', dur: '4:58' },
  { title: 'Peregrinos Somos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/392.Peregrinos%20Somos.mp3', dur: '4:32' },
  { title: 'Há Um Amigo Mui Chegado', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/393.H%C3%A1%20Um%20Amigo%20Mui%20Chegado.mp3', dur: '2:14' },
  { title: 'A Mão No Arado', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/394.A%20M%C3%A3o%20No%20Arado.mp3', dur: '3:55' },
  { title: 'Ide Por Todo o Mundo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/395.Ide%20Por%20Todo%20o%20Mundo.mp3', dur: '2:43' },
  { title: 'Além do Nosso Entendimento', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/396.Al%C3%A9m%20do%20Nosso%20Entendimento.mp3', dur: '5:58' },
  { title: 'O Salvador Me Achou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/397.O%20Salvador%20Me%20Achou.mp3', dur: '4:30' },
  { title: 'Perto do Meu Redentor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/398.Perto%20do%20Meu%20Redentor.mp3', dur: '2:32' },
  { title: 'Terra de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/399.Terra%20de%20Jesus.mp3', dur: '3:04' },
  { title: 'Deus velará por Ti', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/4.Deus%20velar%C3%A1%20por%20Ti.mp3', dur: '3:17' },
  { title: 'A Cidade do Bom Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/40.%20A%20Cidade%20do%20Bom%20Jesus.mp3', dur: '3:14' },
  { title: 'Em Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/400.Em%20Jesus.mp3', dur: '1:49' },
  { title: 'Jesus Voltará', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/401.Jesus%20Voltar%C3%A1.mp3', dur: '2:15' },
  { title: 'Ao Gólgota', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/402.Ao%20G%C3%B3lgota.mp3', dur: '3:04' },
  { title: 'Gozo Real', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/403.Gozo%20Real.mp3', dur: '2:38' },
  { title: 'Em Glória Virá', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/404.Em%20Gl%C3%B3ria%20Vir%C3%A1.mp3', dur: '3:38' },
  { title: 'Queres Perdão', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/405.Queres%20Perd%C3%A3o.mp3', dur: '3:18' },
  { title: 'À Sombra do Meu Redentor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/406.%C3%80%20Sombra%20do%20Meu%20Redentor.mp3', dur: '3:39' },
  { title: 'Ó Criador Bendito', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/407.%C3%93%20Criador%20Bendito.mp3', dur: '3:20' },
  { title: 'Abre os Meus Olhos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/408.Abre%20os%20Meus%20Olhos.mp3', dur: '2:38' },
  { title: 'Trabalhadores do Evangelho', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/409.Trabalhadores%20do%20Evangelho.mp3', dur: '4:23' },
  { title: 'A Cristo Coroai', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/41.A%20Cristo%20Coroai.mp3', dur: '2:41' },
  { title: 'Jesus, Meu Rei Glorioso', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/410.Jesus%2C%20Meu%20Rei%20Glorioso.mp3', dur: '2:10' },
  { title: 'Nós Somos Teus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/411.N%C3%B3s%20Somos%20Teus.mp3', dur: '2:51' },
  { title: 'Jesus Cristo, Bem Amado', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/412.Jesus%20Cristo%2C%20Bem%20Amado.mp3', dur: '3:02' },
  { title: 'Meu Pastor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/413.Meu%20Pastor.mp3', dur: '2:50' },
  { title: 'Tem Compaixão do Pecador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/414.Tem%20Compaix%C3%A3o%20do%20Pecador.mp3', dur: '2:46' },
  { title: 'Jesus Te Quer Curar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/415.Jesus%20Te%20Quer%20Curar.mp3', dur: '2:59' },
  { title: 'Quando o Povo Salvo Entrar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/416.Quando%20o%20Povo%20Salvo%20Entrar.mp3', dur: '2:52' },
  { title: 'Bastante Para Mim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/417.Bastante%20Para%20Mim.mp3', dur: '3:33' },
  { title: 'Sou Um Soldado', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/418.Sou%20Um%20Soldado.mp3', dur: '3:18' },
  { title: 'Vinde, Pecadores', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/419.Vinde%2C%20Pecadores.mp3', dur: '3:47' },
  { title: 'Saudai Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/42.Saudai%20Jesus.mp3', dur: '2:46' },
  { title: 'O Que Buscas Ansioso', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/420.O%20Que%20Buscas%20Ansioso.mp3', dur: '2:54' },
  { title: 'Careço de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/421.Care%C3%A7o%20de%20Jesus.mp3', dur: '1:34' },
  { title: 'No Céu Não Entra Pecado', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/422.No%20C%C3%A9u%20N%C3%A3o%20Entra%20Pecado.mp3', dur: '3:58' },
  { title: 'De Ti Preciso Mais', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/423.De%20Ti%20Preciso%20Mais.mp3', dur: '4:01' },
  { title: 'Seu Precioso Sangue', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/424.Seu%20Precioso%20Sangue.mp3', dur: '1:55' },
  { title: 'Perdido Andei', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/425.Perdido%20Andei.mp3', dur: '4:05' },
  { title: 'União dos Irmãos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/426.Uni%C3%A3o%20dos%20Irm%C3%A3os.mp3', dur: '2:48' },
  { title: 'Vai Orando', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/427.Vai%20Orando.mp3', dur: '2:39' },
  { title: 'A Estrela da Alva', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/428.A%20Estrela%20da%20Alva.mp3', dur: '2:26' },
  { title: 'Escuta o Evangelho', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/429.Escuta%20o%20Evangelho.mp3', dur: '2:39' },
  { title: 'Doce Lar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/43.Doce%20Lar.mp3', dur: '2:41' },
  { title: 'O Evangelho da Salvação', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/430.O%20Evangelho%20da%20Salva%C3%A7%C3%A3o.mp3', dur: '3:27' },
  { title: 'Cristo Chama o Pecador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/431.Cristo%20Chama%20o%20Pecador.mp3', dur: '3:15' },
  { title: 'Consagrado ao Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/432.Consagrado%20ao%20Senhor.mp3', dur: '4:16' },
  { title: 'Sois Benvindos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/433.Sois%20Benvindos.mp3', dur: '3:03' },
  { title: 'A Teus Pés', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/434.A%20Teus%20P%C3%A9s.mp3', dur: '3:30' },
  { title: 'Jesus Me Levantou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/435.Jesus%20Me%20Levantou.mp3', dur: '2:58' },
  { title: 'Crentes, Cantai!', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/436.Crentes%2C%20Cantai%21.mp3', dur: '3:37' },
  { title: 'O Dom Celeste', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/437.O%20Dom%20Celeste.mp3', dur: '2:22' },
  { title: 'Voltai-vos Para Mim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/438.Voltai-vos%20Para%20Mim.mp3', dur: '1:58' },
  { title: 'Aos Pés de Cristo Prostrados', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/439.Aos%20P%C3%A9s%20de%20Cristo%20Prostrados.mp3', dur: '2:47' },
  { title: 'Oh! Que Glória', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/44.Oh%21%20Que%20Gl%C3%B3ria.mp3', dur: '3:09' },
  { title: 'Faze Já o Seu Querer', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/440.Faze%20J%C3%A1%20o%20Seu%20Querer.mp3', dur: '2:57' },
  { title: 'A Chuva do Consolador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/441.A%20Chuva%20do%20Consolador.mp3', dur: '2:49' },
  { title: 'Breve Verei o Bom Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/442.Breve%20Verei%20o%20Bom%20Jesus.mp3', dur: '3:15' },
  { title: 'Larga o Mundo!', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/443.Larga%20o%20Mundo%21.mp3', dur: '3:10' },
  { title: 'Escuta, Pobre Pecador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/444.Escuta%2C%20Pobre%20Pecador.mp3', dur: '2:54' },
  { title: 'Resgatado Com o Sangue de Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/445.Resgatado%20Com%20o%20Sangue%20de%20Cristo.mp3', dur: '3:13' },
  { title: 'Ó Vem Já!', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/446.%C3%93%20Vem%20J%C3%A1%21.mp3', dur: '3:42' },
  { title: 'Nascer de Novo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/447.Nascer%20de%20Novo.mp3', dur: '3:02' },
  { title: 'Crentes, Avançai', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/448.Crentes%2C%20Avan%C3%A7ai.mp3', dur: '2:13' },
  { title: 'A Beira da Estrada', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/449.A%20Beira%20da%20Estrada.mp3', dur: '2:57' },
  { title: 'Redentor Onipotente', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/45.Redentor%20Onipotente.mp3', dur: '4:39' },
  { title: 'O Sol da Justiça', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/450.O%20Sol%20da%20Justi%C3%A7a.mp3', dur: '2:25' },
  { title: 'Meu Jesus Vem', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/451.Meu%20Jesus%20Vem.mp3', dur: '3:41' },
  { title: 'Seguirei a Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/452.Seguirei%20a%20Cristo.mp3', dur: '0:39' },
  { title: 'Deus é o Mesmo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/453.Deus%20%C3%A9%20o%20Mesmo.mp3', dur: '3:01' },
  { title: 'Alegrai-vos ó Remidos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/454.Alegrai-vos%20%C3%B3%20Remidos.mp3', dur: '2:35' },
  { title: 'O Povo de Deus Na Terra', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/455.O%20Povo%20de%20Deus%20Na%20Terra.mp3', dur: '2:35' },
  { title: 'A Fonte Transbordante', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/456.A%20Fonte%20Transbordante.mp3', dur: '3:25' },
  { title: 'O Festim de Glória', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/457.O%20Festim%20de%20Gl%C3%B3ria.mp3', dur: '3:14' },
  { title: 'Guia Meus Passos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/458.Guia%20Meus%20Passos.mp3', dur: '3:43' },
  { title: 'As Firmes Promessas', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/459.As%20Firmes%20Promessas.mp3', dur: '3:37' },
  { title: 'Um Pendão Real', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/46.Um%20Pend%C3%A3o%20Real.mp3', dur: '2:45' },
  { title: 'Dize-o a Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/460.Dize-o%20a%20Cristo.mp3', dur: '3:16' },
  { title: 'Jesus Chorou Sobre Jerusalém', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/461.Jesus%20Chorou%20Sobre%20Jerusal%C3%A9m.mp3', dur: '4:13' },
  { title: 'Glória ao Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/462.Gl%C3%B3ria%20ao%20Senhor.mp3', dur: '1:04' },
  { title: 'O Povo de Abraão', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/463.O%20Povo%20de%20Abra%C3%A3o.mp3', dur: '2:44' },
  { title: 'Plena Graça', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/464.Plena%20Gra%C3%A7a.mp3', dur: '1:20' },
  { title: 'Ele Sofreu Por Mim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/465.Ele%20Sofreu%20Por%20Mim.mp3', dur: '4:47' },
  { title: 'Que Maravilha', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/466.Que%20Maravilha.mp3', dur: '5:06' },
  { title: 'Sobres as Ondas', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/467.Sobres%20as%20Ondas.mp3', dur: '3:38' },
  { title: 'Cristo Está Chamando', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/468.Cristo%20Est%C3%A1%20Chamando.mp3', dur: '3:27' },
  { title: 'Ao Estrulgir a Trombeta', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/469.Ao%20Estrulgir%20a%20Trombeta.mp3', dur: '3:45' },
  { title: 'Rocha Eterna', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/47.Rocha%20Eterna.mp3', dur: '2:32' },
  { title: 'Batismo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/470.Batismo.mp3', dur: '2:44' },
  { title: 'Avançai Fiéis', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/471.Avan%C3%A7ai%20Fi%C3%A9is.mp3', dur: '4:21' },
  { title: 'Em Meu Lugar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/472.Em%20Meu%20Lugar.mp3', dur: '1:26' },
  { title: 'Outro Bem Não Acharei', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/473.Outro%20Bem%20N%C3%A3o%20Acharei.mp3', dur: '3:31' },
  { title: 'Paz Doce Paz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/474.Paz%20Doce%20Paz.mp3', dur: '2:49' },
  { title: 'Em Belém', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/475.Em%20Bel%C3%A9m.mp3', dur: '3:22' },
  { title: 'O Cego de Jericó', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/476.O%20Cego%20de%20Jeric%C3%B3.mp3', dur: '4:01' },
  { title: 'Sede Fortes', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/477.Sede%20Fortes.mp3', dur: '3:58' },
  { title: 'Eis-me Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/478.Eis-me%20Jesus.mp3', dur: '4:44' },
  { title: 'Ao Raiar do Novo Ano', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/479.Ao%20Raiar%20do%20Novo%20Ano.mp3', dur: '3:27' },
  { title: 'O Dia do Triunfo de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/48.O%20Dia%20do%20Triunfo%20de%20Jesus.mp3', dur: '2:50' },
  { title: 'Fim do Ano', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/480.Fim%20do%20Ano.mp3', dur: '2:11' },
  { title: 'Cristo e Sua Humilhação', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/481.Cristo%20e%20Sua%20Humilha%C3%A7%C3%A3o.mp3', dur: '4:22' },
  { title: 'Comunhão', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/482.Comunh%C3%A3o.mp3', dur: '3:33' },
  { title: 'Ora Vem Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/483.Ora%20Vem%20Jesus.mp3', dur: '3:41' },
  { title: 'Meus Pecados Levou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/484.Meus%20Pecados%20Levou.mp3', dur: '2:41' },
  { title: 'Andando Para o Céu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/485.Andando%20Para%20o%20C%C3%A9u.mp3', dur: '3:20' },
  { title: 'Vasos Transbordantes', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/486.Vasos%20Transbordantes.mp3', dur: '2:44' },
  { title: 'Doxologia', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/487.Doxologia.mp3', dur: '2:25' },
  { title: 'O Áureo Dia', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/488.O%20%C3%81ureo%20Dia.mp3', dur: '3:21' },
  { title: 'Chegai Para Adorar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/489.Chegai%20Para%20Adorar.mp3', dur: '2:41' },
  { title: 'Aleluia! Já Creio', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/49.Aleluia%21%20J%C3%A1%20Creio.mp3', dur: '1:41' },
  { title: 'Passando Está', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/490.Passando%20Est%C3%A1.mp3', dur: '3:48' },
  { title: 'Há Poder no Sangue de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/491.H%C3%A1%20Poder%20no%20Sangue%20de%20Jesus.mp3', dur: '3:58' },
  { title: 'Jesus Virá do Céu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/492.Jesus%20Vir%C3%A1%20do%20C%C3%A9u.mp3', dur: '3:05' },
  { title: 'Ao Pai Voltai', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/493.Ao%20Pai%20Voltai.mp3', dur: '3:35' },
  { title: 'Jerusalém Celestial', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/494.Jerusal%C3%A9m%20Celestial.mp3', dur: '3:17' },
  { title: 'Cristo à Porta Está', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/495.Cristo%20%C3%A0%20Porta%20Est%C3%A1.mp3', dur: '2:32' },
  { title: 'Jesus me Tirou da Lama', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/496.Jesus%20me%20Tirou%20da%20Lama.mp3', dur: '3:22' },
  { title: 'Meu Bom Salvador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/497.Meu%20Bom%20Salvador.mp3', dur: '3:14' },
  { title: 'Guia-me ó Salvador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/498.Guia-me%20%C3%B3%20Salvador.mp3', dur: '3:27' },
  { title: 'A Santa Bíblia', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/499.A%20Santa%20B%C3%ADblia.mp3', dur: '2:30' },
  { title: 'Oh desce Fogo Santo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/5.Oh%20desce%20Fogo%20Santo.mp3', dur: '2:04' },
  { title: 'Sempre Fiéis', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/50.Sempre%20Fi%C3%A9is.mp3', dur: '3:31' },
  { title: 'Quero ver a Jesus Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/500.Quero%20ver%20a%20Jesus%20Cristo.mp3', dur: '3:33' },
  { title: 'Vencendo Com o Bom Capitão', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/501.Vencendo%20Com%20o%20Bom%20Capit%C3%A3o.mp3', dur: '4:02' },
  { title: 'Ó Pastor Bendito', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/502.%C3%93%20Pastor%20Bendito.mp3', dur: '1:55' },
  { title: 'Vidas Consagradas ao Trabalho', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/503.Vidas%20Consagradas%20ao%20Trabalho.mp3', dur: '3:38' },
  { title: 'Momento Solene', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/504.Momento%20Solene.mp3', dur: '2:25' },
  { title: 'As Palavras de Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/505.As%20Palavras%20de%20Jesus.mp3', dur: '4:19' },
  { title: 'Bíblia Sagrada', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/506.B%C3%ADblia%20Sagrada.mp3', dur: '1:55' },
  { title: 'Jesus Salva', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/507.Jesus%20Salva.mp3', dur: '3:09' },
  { title: 'Sua Palavra Revelada', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/508.Sua%20Palavra%20Revelada.mp3', dur: '2:33' },
  { title: 'Ao Passar o Jordão', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/509.Ao%20Passar%20o%20Jord%C3%A3o.mp3', dur: '4:33' },
  { title: 'Adoração Reconhecida', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/51.Adora%C3%A7%C3%A3o%20Reconhecida.mp3', dur: '2:14' },
  { title: 'A Riqueza Divinal', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/510.A%20Riqueza%20Divinal.mp3', dur: '7:26' },
  { title: 'Glorioso Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/511.Glorioso%20Deus.mp3', dur: '4:24' },
  { title: 'O Amor Inesgotável', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/512.O%20Amor%20Inesgot%C3%A1vel.mp3', dur: '4:20' },
  { title: 'Minha Alma Quer Ter', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/513.Minha%20Alma%20Quer%20Ter.mp3', dur: '4:27' },
  { title: 'Em Glória Esplendente', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/514.Em%20Gl%C3%B3ria%20Esplendente.mp3', dur: '4:40' },
  { title: 'Se Cristo Comigo Vai', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/515.Se%20Cristo%20Comigo%20Vai.mp3', dur: '5:40' },
  { title: 'Cristo Meu Vero Amigo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/516.Cristo%20Meu%20Vero%20Amigo.mp3', dur: '3:25' },
  { title: 'Cura Divina', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/517.Cura%20Divina.mp3', dur: '3:13' },
  { title: 'Salva-Vidas', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/518.Salva-Vidas.mp3', dur: '2:55' },
  { title: 'Achei Jesus, Meu Salvador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/519.Achei%20Jesus%2C%20Meu%20Salvador.mp3', dur: '3:30' },
  { title: 'Tudo está Bem', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/52.Tudo%20est%C3%A1%20Bem.mp3', dur: '3:48' },
  { title: 'A Doce e Preciosa Voz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/520.A%20Doce%20e%20Preciosa%20Voz.mp3', dur: '2:54' },
  { title: 'Vem o Passo Dar!', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/521.Vem%20o%20Passo%20Dar%21.mp3', dur: '3:16' },
  { title: 'Rei da Glória', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/522.Rei%20da%20Gl%C3%B3ria.mp3', dur: '3:18' },
  { title: 'Cristo, a Fonte Escondida', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/523.Cristo%2C%20a%20Fonte%20Escondida.mp3', dur: '4:46' },
  { title: 'Cristo Pensa em Mim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/524.Cristo%20Pensa%20em%20Mim.mp3', dur: '3:39' },
  { title: 'Vencendo Vem Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/525.Vencendo%20Vem%20Jesus.mp3', dur: '3:16' },
  { title: 'Grandioso És Tu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/526.Grandioso%20%C3%89s%20Tu.mp3', dur: '5:56' },
  { title: 'Dominador É Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/527.Dominador%20%C3%89%20Deus.mp3', dur: '1:49' },
  { title: 'Eu Te Amo, Ó Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/528.Eu%20Te%20Amo%2C%20%C3%93%20Deus.mp3', dur: '1:55' },
  { title: 'Em Sua Graça', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/529.Em%20Sua%20Gra%C3%A7a.mp3', dur: '0:58' },
  { title: 'A esperança da Igreja', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/53.A%20esperan%C3%A7a%20da%20Igreja.mp3', dur: '3:47' },
  { title: 'Vivifica a Tua Igreja', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/530.Vivifica%20a%20Tua%20Igreja.mp3', dur: '1:54' },
  { title: 'Cristo É Real Pra Mim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/534.Cristo%20%C3%89%20Real%20Pra%20Mim.mp3', dur: '1:20' },
  { title: 'Tu És Fiel, Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/535.Tu%20%C3%89s%20Fiel%2C%20Senhor.mp3', dur: '4:18' },
  { title: 'Amigo Sem Igual', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/536.Amigo%20Sem%20Igual.mp3', dur: '1:34' },
  { title: 'Sempre Comigo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/537.Sempre%20Comigo.mp3', dur: '1:41' },
  { title: 'Tu, Senhor, És Nosso Amigo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/538.Tu%2C%20Senhor%2C%20%C3%89s%20Nosso%20Amigo.mp3', dur: '1:13' },
  { title: 'Ao Pensar Na Dor Crucial', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/539.Ao%20Pensar%20Na%20Dor%20Crucial.mp3', dur: '2:56' },
  { title: 'Louvemos ao Redentor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/54.Louvemos%20ao%20Redentor.mp3', dur: '2:29' },
  { title: 'Ao Ver a Cruz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/540.Ao%20Ver%20a%20Cruz.mp3', dur: '2:06' },
  { title: 'Calvário, Revelação de Amor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/541.Calv%C3%A1rio%2C%20Revela%C3%A7%C3%A3o%20de%20Amor.mp3', dur: '2:44' },
  { title: 'História de Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/542.Hist%C3%B3ria%20de%20Cristo.mp3', dur: '4:39' },
  { title: 'Cristo, Meu redentor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/543.Cristo%2C%20Meu%20redentor.mp3', dur: '0:34' },
  { title: 'Creio, Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/544.Creio%2C%20Senhor.mp3', dur: '2:02' },
  { title: 'Porque Ele Vive', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/545.Porque%20Ele%20Vive.mp3', dur: '4:10' },
  { title: 'Manhã da Ressurreição', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/546.Manh%C3%A3%20da%20Ressurrei%C3%A7%C3%A3o.mp3', dur: '1:36' },
  { title: 'O Rei Está Voltando', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/547.O%20Rei%20Est%C3%A1%20Voltando.mp3', dur: '4:22' },
  { title: 'Breve Jesus Há de Vir', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/548.Breve%20Jesus%20H%C3%A1%20de%20Vir.mp3', dur: '0:38' },
  { title: 'Ora Vem, Senhor Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/549.Ora%20Vem%2C%20Senhor%20Jesus.mp3', dur: '1:47' },
  { title: 'Mais perto da tua Cruz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/55.Mais%20perto%20da%20tua%20Cruz.mp3', dur: '2:27' },
  { title: 'Breve Ele Volta', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/550.Breve%20Ele%20Volta.mp3', dur: '1:18' },
  { title: 'O Santo Espírito', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/551.O%20Santo%20Esp%C3%ADrito.mp3', dur: '0:55' },
  { title: 'Quando Para o Céu Nós Formos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/552.Quando%20Para%20o%20C%C3%A9u%20N%C3%B3s%20Formos.mp3', dur: '3:21' },
  { title: 'Oh! Pai, o Santo Espírito', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/553.Oh%21%20Pai%2C%20o%20Santo%20Esp%C3%ADrito.mp3', dur: '2:16' },
  { title: 'O Evangelho', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/554.O%20Evangelho.mp3', dur: '1:45' },
  { title: 'O Redentor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/555.O%20Redentor.mp3', dur: '2:01' },
  { title: 'Lê a Bíblia', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/556.L%C3%AA%20a%20B%C3%ADblia.mp3', dur: '2:49' },
  { title: 'A Palavra da Vida', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/557.A%20Palavra%20da%20Vida.mp3', dur: '3:08' },
  { title: 'Daí-me a Bíblia', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/558.Da%C3%AD-me%20a%20B%C3%ADblia.mp3', dur: '2:55' },
  { title: 'Tudo em Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/56.Tudo%20em%20Cristo.mp3', dur: '3:32' },
  { title: 'Tenho Paz em Meu Ser', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/560.Tenho%20Paz%20em%20Meu%20Ser.mp3', dur: '4:21' },
  { title: 'Que Bênção!', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/561.Que%20B%C3%AAn%C3%A7%C3%A3o%21.mp3', dur: '3:34' },
  { title: 'Autor da Vida', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/562.Autor%20da%20Vida.mp3', dur: '1:44' },
  { title: 'Sempre Feliz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/563.Sempre%20Feliz.mp3', dur: '1:08' },
  { title: 'Conta as Bênçãos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/564.Conta%20as%20B%C3%AAn%C3%A7%C3%A3os.mp3', dur: '3:26' },
  { title: 'Tu És Meu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/565.Tu%20%C3%89s%20Meu.mp3', dur: '2:25' },
  { title: 'Paz Perfeita, Sim, Busquei', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/566.Paz%20Perfeita%2C%20Sim%2C%20Busquei.mp3', dur: '4:17' },
  { title: 'Sou Feliz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/567.Sou%20Feliz.mp3', dur: '1:11' },
  { title: 'Manso e Suave', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/568.Manso%20e%20Suave.mp3', dur: '4:48' },
  { title: 'Morri Na Cruz Por Ti', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/569.Morri%20Na%20Cruz%20Por%20Ti.mp3', dur: '3:45' },
  { title: 'Vivifica-nos Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/57.Vivifica-nos%20Senhor.mp3', dur: '2:13' },
  { title: 'A Última Hora', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/570.A%20%C3%9Altima%20Hora.mp3', dur: '4:59' },
  { title: 'Rende o Coração', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/571.Rende%20o%20Cora%C3%A7%C3%A3o.mp3', dur: '1:15' },
  { title: 'A Porta Sou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/572.A%20Porta%20Sou.mp3', dur: '1:22' },
  { title: 'A Graça de Nosso Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/573.A%20Gra%C3%A7a%20de%20Nosso%20Senhor.mp3', dur: '1:32' },
  { title: 'Ó Pai Bondoso', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/574.%C3%93%20Pai%20Bondoso.mp3', dur: '0:57' },
  { title: 'Espero em Ti', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/575.Espero%20em%20Ti.mp3', dur: '2:36' },
  { title: 'Assim Como Estou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/576.Assim%20Como%20Estou.mp3', dur: '3:02' },
  { title: 'Em Fervente Oração', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/577.Em%20Fervente%20Ora%C3%A7%C3%A3o.mp3', dur: '4:00' },
  { title: 'Sossegai!', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/578.Sossegai%21.mp3', dur: '4:58' },
  { title: 'Porque te Afliges', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/579.Porque%20te%20Afliges.mp3', dur: '2:37' },
  { title: 'Não Temas', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/58.N%C3%A3o%20Temas.mp3', dur: '3:27' },
  { title: 'Salmo 121', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/580.Salmo%20121.mp3', dur: '1:55' },
  { title: 'Castelo Forte', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/581.Castelo%20Forte.mp3', dur: '4:36' },
  { title: 'A Barca da Vida', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/582.A%20Barca%20da%20Vida.mp3', dur: '4:17' },
  { title: 'Sê Tu Meu Guia', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/583.S%C3%AA%20Tu%20Meu%20Guia.mp3', dur: '2:18' },
  { title: 'O Piloto', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/584.O%20Piloto.mp3', dur: '2:13' },
  { title: 'Jesus Me Satisfaz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/585.Jesus%20Me%20Satisfaz.mp3', dur: '1:22' },
  { title: 'Gozo e Vida Tenho', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/586.Gozo%20e%20Vida%20Tenho.mp3', dur: '1:18' },
  { title: 'Neste Lenho me Glorio', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/587.Neste%20Lenho%20me%20Glorio.mp3', dur: '2:17' },
  { title: 'Sou Mui Feliz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/588.Sou%20Mui%20Feliz.mp3', dur: '2:03' },
  { title: 'Quádruplo Amém', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/589.Qu%C3%A1druplo%20Am%C3%A9m.mp3', dur: '0:37' },
  { title: 'Eu creio Sim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/59.Eu%20creio%20Sim.mp3', dur: '2:29' },
  { title: 'Contentamento', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/590.Contentamento.mp3', dur: '2:12' },
  { title: 'Pura, Sim, Mais Pura', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/591.Pura%2C%20Sim%2C%20Mais%20Pura.mp3', dur: '3:12' },
  { title: 'O Lugar de Bênção e Paz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/592.O%20Lugar%20de%20B%C3%AAn%C3%A7%C3%A3o%20e%20Paz.mp3', dur: '4:35' },
  { title: 'Estou Seguro', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/593.Estou%20Seguro.mp3', dur: '1:31' },
  { title: 'Fé Persistente', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/594.F%C3%A9%20Persistente.mp3', dur: '1:30' },
  { title: 'Somente a Ti!', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/595.Somente%20a%20Ti%21.mp3', dur: '1:27' },
  { title: 'Gratidão', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/596.Gratid%C3%A3o.mp3', dur: '3:43' },
  { title: 'Graça Dou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/597.Gra%C3%A7a%20Dou.mp3', dur: '3:01' },
  { title: 'Riquezas do Céu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/598.Riquezas%20do%20C%C3%A9u.mp3', dur: '2:18' },
  { title: 'Herdeiro do Reino', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/599.Herdeiro%20do%20Reino.mp3', dur: '1:44' },
  { title: 'Na maldição da Cruz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/6.Na%20maldi%C3%A7%C3%A3o%20da%20Cruz.mp3', dur: '3:11' },
  { title: 'Exultação do Crente', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/60.Exulta%C3%A7%C3%A3o%20do%20Crente.mp3', dur: '2:09' },
  { title: 'Mãos ao Trabalho', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/600.M%C3%A3os%20ao%20Trabalho.mp3', dur: '2:33' },
  { title: 'A Seara Está Madura', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/601.A%20Seara%20Est%C3%A1%20Madura.mp3', dur: '1:45' },
  { title: 'Juntos Trabalhamos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/602.Juntos%20Trabalhamos.mp3', dur: '1:46' },
  { title: 'Método de Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/603.M%C3%A9todo%20de%20Deus.mp3', dur: '2:25' },
  { title: 'Senhor, os Mensageiros Teus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/604.Senhor%2C%20os%20Mensageiros%20Teus.mp3', dur: '1:35' },
  { title: 'Quero te Servir', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/605.Quero%20te%20Servir.mp3', dur: '2:37' },
  { title: 'Triunfo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/606.Triunfo.mp3', dur: '1:26' },
  { title: 'Luz Após Trevas', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/607.Luz%20Ap%C3%B3s%20Trevas.mp3', dur: '2:11' },
  { title: 'Se Em Teu Caminho', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/608.Se%20Em%20Teu%20Caminho.mp3', dur: '2:02' },
  { title: 'Vitória Deus Dará a Mim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/609.Vit%C3%B3ria%20Deus%20Dar%C3%A1%20a%20Mim.mp3', dur: '1:54' },
  { title: 'Deus tomará conta de Ti', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/61.Deus%20tomar%C3%A1%20conta%20de%20Ti.mp3', dur: '3:16' },
  { title: 'Fé É a Vitória', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/610.F%C3%A9%20%C3%89%20a%20Vit%C3%B3ria.mp3', dur: '1:23' },
  { title: 'Cristo, Comandante', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/611.Cristo%2C%20Comandante.mp3', dur: '1:08' },
  { title: 'Ó Pai Eterno', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/612.%C3%93%20Pai%20Eterno.mp3', dur: '2:43' },
  { title: 'Vitória Final', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/613.Vit%C3%B3ria%20Final.mp3', dur: '1:57' },
  { title: 'Terra Feliz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/614.Terra%20Feliz.mp3', dur: '2:44' },
  { title: 'Vou Rumo ao Meu Lar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/615.Vou%20Rumo%20ao%20Meu%20Lar.mp3', dur: '2:18' },
  { title: 'Quanto Almejo!', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/616.Quanto%20Almejo%21.mp3', dur: '1:43' },
  { title: 'Quanto Anelo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/617.Quanto%20Anelo.mp3', dur: '1:36' },
  { title: 'É Nosso o Lar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/618.%C3%89%20Nosso%20o%20Lar.mp3', dur: '2:02' },
  { title: 'Meu Lar, Jerusalém', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/619.Meu%20Lar%2C%20Jerusal%C3%A9m.mp3', dur: '1:29' },
  { title: 'Achei Jesus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/62.Achei%20Jesus.mp3', dur: '2:15' },
  { title: 'Na Jornada Para Jerusalém', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/620.Na%20Jornada%20Para%20Jerusal%C3%A9m.mp3', dur: '5:17' },
  { title: 'Juntos, No Céu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/621.Juntos%2C%20No%20C%C3%A9u.mp3', dur: '1:24' },
  { title: 'Tão Grato Me é Lembrar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/622.T%C3%A3o%20Grato%20Me%20%C3%A9%20Lembrar.mp3', dur: '2:40' },
  { title: 'Oh, Sim, Bem Sei', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/623.Oh%2C%20Sim%2C%20Bem%20Sei.mp3', dur: '2:26' },
  { title: 'Anseio Um Lugar de Amor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/624.Anseio%20Um%20Lugar%20de%20Amor.mp3', dur: '1:41' },
  { title: 'Glória Indizível', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/625.Gl%C3%B3ria%20Indiz%C3%ADvel.mp3', dur: '7:46' },
  { title: 'Tríplice Amém', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/626.Tr%C3%ADplice%20Am%C3%A9m.mp3', dur: '0:20' },
  { title: 'Finda-se Minha Prisão', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/627.Finda-se%20Minha%20Pris%C3%A3o.mp3', dur: '1:45' },
  { title: 'Além do Céu Azul', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/628.Al%C3%A9m%20do%20C%C3%A9u%20Azul.mp3', dur: '2:30' },
  { title: 'Conversaremos Ali No Céu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/629.Conversaremos%20Ali%20No%20C%C3%A9u.mp3', dur: '1:33' },
  { title: 'Acordai, Acordai', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/63.Acordai%2C%20Acordai.mp3', dur: '3:37' },
  { title: 'Não Há Separação Na Glória', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/630.N%C3%A3o%20H%C3%A1%20Separa%C3%A7%C3%A3o%20Na%20Gl%C3%B3ria.mp3', dur: '1:15' },
  { title: 'Neste Lugar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/631.Neste%20Lugar.mp3', dur: '3:49' },
  { title: 'Mais Um Templo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/632.Mais%20Um%20Templo.mp3', dur: '2:33' },
  { title: 'Meu Brasil', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/633.Meu%20Brasil.mp3', dur: '2:23' },
  { title: 'Oração Pela Pátria', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/634.Ora%C3%A7%C3%A3o%20Pela%20P%C3%A1tria.mp3', dur: '2:09' },
  { title: 'Eis o Brasil Em Tuas Mãos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/635.Eis%20o%20Brasil%20Em%20Tuas%20M%C3%A3os.mp3', dur: '2:36' },
  { title: 'Por Nossa Pátria Oramos', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/636.Por%20Nossa%20P%C3%A1tria%20Oramos.mp3', dur: '3:22' },
  { title: 'Hino à Bandeira Nacional', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/637.Hino%20%C3%A0%20Bandeira%20Nacional.mp3', dur: '3:59' },
  { title: 'Hino Nacional Brasileiro', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/638.Hino%20Nacional%20Brasileiro.mp3', dur: '3:27' },
  { title: 'Hino da Independência', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/639.Hino%20da%20Independ%C3%AAncia.mp3', dur: '4:56' },
  { title: 'De todo o mundo Aleluia', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/64.De%20todo%20o%20mundo%20Aleluia.mp3', dur: '2:59' },
  { title: 'Hino da Proclamação da República do Brasil', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/640.Hino%20da%20Proclama%C3%A7%C3%A3o%20da%20Rep%C3%BAblica%20do%20Brasil.mp3', dur: '4:25' },
  { title: 'Quem Irá', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/65.Quem%20Ir%C3%A1.mp3', dur: '2:38' },
  { title: 'Pronto a Salvar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/66.Pronto%20a%20Salvar.mp3', dur: '1:09' },
  { title: 'Quem quer ir com Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/67.Quem%20quer%20ir%20com%20Cristo.mp3', dur: '2:06' },
  { title: 'Gozo de ter Salvação', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/68.Gozo%20de%20ter%20Salva%C3%A7%C3%A3o.mp3', dur: '2:36' },
  { title: 'Jesus quebrou os meus Grilhões', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/69.Jesus%20quebrou%20os%20meus%20Grilh%C3%B5es.mp3', dur: '2:35' },
  { title: 'Cristo cura Sim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/7.Cristo%20cura%20Sim.mp3', dur: '2:39' },
  { title: 'Cristo Jesus vai Voltar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/70.Cristo%20Jesus%20vai%20Voltar.mp3', dur: '3:06' },
  { title: 'Santo és tu Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/71.Santo%20%C3%A9s%20tu%20Senhor.mp3', dur: '2:28' },
  { title: 'Rasgou-se o Véu', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/72.Rasgou-se%20o%20V%C3%A9u.mp3', dur: '2:52' },
  { title: 'Vem, vem a Mim', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/73.Vem%2C%20vem%20a%20Mim.mp3', dur: '4:07' },
  { title: 'Cristo Virá', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/74.Cristo%20Vir%C3%A1.mp3', dur: '2:45' },
  { title: 'Em Jesus tens a palma da Vitória', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/75.Em%20Jesus%20tens%20a%20palma%20da%20Vit%C3%B3ria.mp3', dur: '2:41' },
  { title: 'Vem ó Pródigo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/76.Vem%20%C3%B3%20Pr%C3%B3digo.mp3', dur: '2:40' },
  { title: 'Guarda o Contacto', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/77.Guarda%20o%20Contacto.mp3', dur: '3:06' },
  { title: 'Meu forte Redentor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/78.Meu%20forte%20Redentor.mp3', dur: '3:11' },
  { title: 'Sua graça me Basta', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/79.Sua%20gra%C3%A7a%20me%20Basta.mp3', dur: '2:51' },
  { title: 'Cristo o fiel Amigo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/8.Cristo%20o%20fiel%20Amigo.mp3', dur: '3:35' },
  { title: 'Cristo te Chama', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/80.Cristo%20te%20Chama.mp3', dur: '2:27' },
  { title: 'Pode Salvar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/81.Pode%20Salvar.mp3', dur: '3:01' },
  { title: 'Um meigo Salvador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/82.Um%20meigo%20Salvador.mp3', dur: '3:09' },
  { title: 'Não posso Explicar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/83.N%C3%A3o%20posso%20Explicar.mp3', dur: '2:09' },
  { title: 'O Grande Eu Sou', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/84.O%20Grande%20%20Eu%20Sou.mp3', dur: '3:46' },
  { title: 'Deixai entrar o Espírito de Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/85.Deixai%20entrar%20o%20Esp%C3%ADrito%20de%20Deus.mp3', dur: '2:50' },
  { title: 'Satisfeito com Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/86.Satisfeito%20com%20Cristo.mp3', dur: '1:53' },
  { title: 'Meu Testemunho', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/87.Meu%20Testemunho.mp3', dur: '3:37' },
  { title: 'Revela a nós Senhor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/88.Revela%20a%20n%C3%B3s%20Senhor.mp3', dur: '4:42' },
  { title: 'Sublime e grande Amor', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/89.Sublime%20e%20grande%20Amor.mp3', dur: '4:16' },
  { title: 'Marchai soldados de Cristo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/9.Marchai%20soldados%20de%20Cristo.mp3', dur: '2:38' },
  { title: 'Há paz e Alegria', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/90.H%C3%A1%20paz%20e%20Alegria.mp3', dur: '1:45' },
  { title: 'Nívea Luz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/91.N%C3%ADvea%20Luz.mp3', dur: '3:09' },
  { title: 'O bondoso Salvador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/92.O%20bondoso%20Salvador.mp3', dur: '2:13' },
  { title: 'Há trabalho Pronto', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/93.H%C3%A1%20trabalho%20Pronto.mp3', dur: '4:53' },
  { title: 'Na Jerusalém de Deus', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/94.Na%20Jerusal%C3%A9m%20de%20Deus.mp3', dur: '3:11' },
  { title: 'Ouve, ó Pecador', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/95.Ouve%2C%20%C3%B3%20Pecador.mp3', dur: '2:01' },
  { title: 'Deixa penetrar a Luz', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/96.Deixa%20penetrar%20a%20Luz.mp3', dur: '3:47' },
  { title: 'Há um caminho Santo', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/97.H%C3%A1%20um%20caminho%20Santo.mp3', dur: '1:47' },
  { title: 'Estarás Vigiando', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/98.Estar%C3%A1s%20Vigiando.mp3', dur: '4:02' },
  { title: 'Eis o dia a Declinar', artist: 'Harpa Cristã', genre: 'classico', src: 'https://archive.org/download/harpa-crista-tradicional/99.Eis%20o%20dia%20a%20Declinar.mp3', dur: '3:13' },

  // === ADORAÇÃO (NACIONAL) (89 faixas) ===
  { title: 'Adestra', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Adestra.mp3', dur: '3:06' },
  { title: 'Batiza-Me', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Batiza-me.mp3', dur: '5:30' },
  { title: 'Cristo, Cordeiro de Deus', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Cristo%2C%20Cordeiro%20de%20Deus.mp3', dur: '3:36' },
  { title: 'Dono do Mundo', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Dono%20do%20Mundo.mp3', dur: '5:12' },
  { title: 'Eu Jamais Serei o Mesmo', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Eu%20Jamais%20Serei%20o%20Mesmo.mp3', dur: '4:48' },
  { title: 'Fogo Santo', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Fogo%20Santo.mp3', dur: '2:36' },
  { title: 'Galileu', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Galileu.mp3', dur: '4:30' },
  { title: 'Hosana', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Hosana.mp3', dur: '3:36' },
  { title: 'Há Poder', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/H%C3%A1%20Poder.mp3', dur: '3:48' },
  { title: 'Luz do Mundo', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Luz%20do%20Mundo.mp3', dur: '3:12' },
  { title: 'Ora Vem', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Ora%20Vem.mp3', dur: '2:42' },
  { title: 'Santa Euforia', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Santa%20Euforia.mp3', dur: '3:18' },
  { title: 'Seu Nome é Jesus', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Seu%20Nome%20%C3%A9%20Jesus.mp3', dur: '3:54' },
  { title: 'Superabundou a Graça', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Superabundou%20a%20Gra%C3%A7a.mp3', dur: '3:18' },
  { title: 'Yeshua', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Yeshua.mp3', dur: '3:24' },
  { title: 'Jesus Abriu A Porta', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/01JesusAbriuAPorta.mp3', dur: '3:00' },
  { title: 'Nem Tudo Acabou', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/02NemTudoAcabou.mp3', dur: '2:42' },
  { title: 'Jesus Não É Dinheiro', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/03JesusNoDinheiro.mp3', dur: '2:30' },
  { title: 'Conversa A Dois', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/04ConversaADois.mp3', dur: '3:12' },
  { title: 'O Inimigo Fugirá', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/05OInimigoFugir.mp3', dur: '3:06' },
  { title: 'Rasga-me Por Dentro', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/06Rasga-mePorDentro.mp3', dur: '2:36' },
  { title: 'Uma Chance', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/07UmaChance.mp3', dur: '3:30' },
  { title: 'O Escolhido', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/08OEscolhido.mp3', dur: '4:06' },
  { title: 'O Inimigo Fugirá (2)', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/09OInimigoFugir.mp3', dur: '3:48' },
  { title: 'Anjo Sem Asa', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/10AnjoSemAsa.mp3', dur: '3:24' },
  { title: 'Ligado', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/11Ligado.mp3', dur: '3:18' },
  { title: 'Que Se Abram os Céus (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/Abram%20Os%20C%C3%A9us%20%28Ao%20Vivo%29.mp3', dur: '4:36' },
  { title: 'Primeiro Amor (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/Ao%20Primeiro%20Amor%20%28Ao%20Vivo%29.mp3', dur: '3:54' },
  { title: 'Ao Teu Encontro / Manso e Suave (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/Ao%20Teu%20Encontro%20Manso%20e%20Suave%20%28Ao%20Vivo%29.mp3', dur: '7:36' },
  { title: 'Atraído', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/Atra%C3%ADdo.mp3', dur: '3:24' },
  { title: 'Cria em Mim', artist: 'Fernandinho e Paula', genre: 'adoracao', src: 'https://archive.org/download/santo2020/CRIA%20EM%20MIM.mp3', dur: '3:48' },
  { title: 'Deus Não Está Morto (Bônus)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/Deus%20N%C3%A3o%20Est%C3%A1%20Morto%20%28B%C3%B4nus%29.mp3', dur: '3:54' },
  { title: 'Eu Vou Amanhecer (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/EU%20VOU%20AMANHECER%20.mp3', dur: '4:48' },
  { title: 'Se Ele Está Comigo', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/Ele%20Est%C3%A1%20Comigo%20%28B%C3%B4nus%29.mp3', dur: '4:06' },
  { title: 'Fogo do Céu', artist: 'Fernandinho e Paula', genre: 'adoracao', src: 'https://archive.org/download/santo2020/FOGO%20DO%20C%C3%89U.mp3', dur: '5:48' },
  { title: 'O Senhor É Bom (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/O%20SENHOR%20%C3%89%20BOM.mp3', dur: '5:30' },
  { title: 'Quão Bom (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/QU%C3%83O%20BOM%20%5BAO%20VIVO%20-%20NOVO%20%C3%81LBUM%5D.mp3', dur: '7:00' },
  { title: 'Santo (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/SANTO%20%5BVERS%C3%83O%20AO%20VIVO%20-%20NOVO%20%C3%81LBUM%5D.mp3', dur: '6:48' },
  { title: 'Santos dos Santos', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/SANTOS%20DOS%20SANTOS%20FERNANDINHO%20NOVA%20M%C3%9ASICA%202020.mp3', dur: '1:54' },
  { title: 'Yahweh', artist: 'Fernandinho e Paula', genre: 'adoracao', src: 'https://archive.org/download/santo2020/YAHWEH.mp3', dur: '3:48' },
  { title: 'É Proibido (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/%C3%89%20Proibido%20%28Ao%20Vivo%29.mp3', dur: '6:00' },
  { title: 'É Tempo de Abrir o Coração (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/%C3%89%20TEMPO%20DE%20ABRIR%20O%20CORA%C3%87%C3%83O%20%5BAO%20VIVO%20-%20NOVO%20%C3%81LBUM%5D.mp3', dur: '6:12' },
  { title: 'Estrela da Manhã', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/001-EstrelaDaManhhighQuality.mp3', dur: '3:30' },
  { title: 'Alegria', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/002-AlegriahighQuality.mp3', dur: '4:48' },
  { title: 'Adorador', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/003-AdoradorhighQuality.mp3', dur: '3:24' },
  { title: 'Nunca Pare de Lutar', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/004-NuncaPareDeLutarhighQuality.mp3', dur: '4:06' },
  { title: 'Não Posso Te Deixar', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/005-NoPossoTeDeixarhighQuality.mp3', dur: '3:42' },
  { title: 'Ouro, Incenso e Mirra', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/007-OuroIncensoEMirrahighQuality.mp3', dur: '4:24' },
  { title: 'Vencer ou Vencer', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/008-VencerOuVencerhighQuality.mp3', dur: '4:12' },
  { title: 'Seguirei', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/011-SeguireihighQuality.mp3', dur: '4:48' },
  { title: 'Filhos do Homem', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/012-FilhosDoHmoemhighQuality.mp3', dur: '4:36' },
  { title: 'Fernanda Brum', artist: 'Fernanda Brum', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/016-FernandaBrumMusicahighQuality.mp3', dur: '5:36' },
  { title: 'Tua Presença', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/017-TuaPresenahighQuality.mp3', dur: '6:24' },
  { title: 'I Will Lift My Eyes', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/019-IWillLiftMyEyeshighQuality.mp3', dur: '5:24' },
  { title: 'Não Haverá Impossível', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/020-NoHaverImpossvelhighQuality.mp3', dur: '7:00' },
  { title: 'Aos Pés da Cruz', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/021-AosPsDaCruzhighQuality.mp3', dur: '3:36' },
  { title: 'Filho de Davi', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/022-FilhoDeDavihighQuality.mp3', dur: '7:12' },
  { title: 'Maior É Jesus', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/023-MaiorJesushighQuality.mp3', dur: '6:00' },
  { title: 'Eu Vou Lutar', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/025-EuVouLutarhighQuality.mp3', dur: '5:00' },
  { title: 'Olha Pra Mim', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/027-OlhaPraMimhighQuality.mp3', dur: '5:00' },
  { title: 'Deus Cuida de Mim', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/028-DeusCuidaDeMimhighQuality.mp3', dur: '5:24' },
  { title: 'A Solução', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/030-aSoluohighQuality.mp3', dur: '3:36' },
  { title: 'Correndo', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/031-CorrendohighQuality.mp3', dur: '7:24' },
  { title: 'Sem Você Não Dá', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/032-SemVocNoDhighQuality.mp3', dur: '6:00' },
  { title: 'Coração Valente', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/033-CoraoValentehighQuality.mp3', dur: '5:04' },
  { title: 'Perto de Deus', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/034-PertoDeDeushighQuality.mp3', dur: '3:36' },
  { title: 'Desejo do Meu Coração', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/035-DesejoDoMeuCoraohighQuality.mp3', dur: '7:48' },
  { title: 'Espelho Mágico', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/037-EspelhoMgicohighQuality.mp3', dur: '5:48' },
  { title: 'Derrama A Tua Glória', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/038-DerramaATuaGlriahighQuality.mp3', dur: '4:00' },
  { title: 'Espirito Santo', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/040-EspiritoSantohighQuality.mp3', dur: '5:00' },
  { title: 'Mostra Tua Força', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/041-MostraTuaForahighQuality.mp3', dur: '4:24' },
  { title: 'Toque No Altar', artist: 'Toque No Altar', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/042-ToqueNoAltar-ToqueNoAltarhighQuality.mp3', dur: '3:48' },
  { title: 'Autor Da Vida', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/043-AutorDaVidahighQuality.mp3', dur: '7:12' },
  { title: 'Sei que não sou Merecedor', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/044-SeiQueNaoSouMerecedorhighQuality.mp3', dur: '8:24' },
  { title: 'Deus de Promessa', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/045-DeusDePromessahighQuality.mp3', dur: '10:12' },
  { title: 'Eis-Me Aqui', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/046-Eis-meAquihighQuality.mp3', dur: '6:24' },
  { title: 'Casa de Davi, Casa de Oração', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/047-casaDeDaviCasaDeOraohighQuality.mp3', dur: '3:12' },
  { title: 'Sua Presença é Real', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/048-suaPresenaRealhighQuality.mp3', dur: '7:48' },
  { title: 'Sonda-me, Usa-me', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/050-Sonda-meUsa-mehighQuality.mp3', dur: '7:24' },
  { title: 'O Que Há de Melhor em Mim', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/051-OQueHDeMelhorEmMimhighQuality.mp3', dur: '4:48' },
  { title: 'Elias Silva Conte comigo', artist: 'Elias Silva', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/053-EliasSilvaConteComigohighQuality.mp3', dur: '4:00' },
  { title: 'Acenda Uma Luz', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/054-AcendaUmaLuzhighQuality.mp3', dur: '6:24' },
  { title: 'Acredita', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/055-AcreditahighQuality.mp3', dur: '4:48' },
  { title: 'Move as Águas', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/056-moveAsguashighQuality.mp3', dur: '4:48' },
  { title: 'A Fé Faz o Herói', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/057-AFFazOHerihighQuality.mp3', dur: '5:04' },
  { title: 'Quero Ser', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/058-QueroSerhighQuality.mp3', dur: '4:36' },
  { title: 'Signs', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/059-SignshighQuality.mp3', dur: '5:48' },
  { title: 'Eu Quero Ser Santo', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/061-EuQueroSerSantohighQuality.mp3', dur: '5:04' },
  { title: 'Somente Deus', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/063-SomenteDeushighQuality.mp3', dur: '4:36' },

  // === INTERNACIONAL (50 faixas) ===
  { title: 'Excess Love', artist: 'Mercy Chinwo', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Excess%20Love%20-%20Mercy%20Chinwo%20%28Official%20Video%29.mp3', dur: '4:06' },
  { title: 'Miracle Rain', artist: 'Frank Edwards', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Frank%20Edwards%20-%20Miracle%20Rain.mp3', dur: '3:30' },
  { title: 'Aka Jehovah', artist: 'Gabriel Eziashi', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Gabriel%20Eziashi%20-%20Aka%20Jehovah.mp3', dur: '2:30' },
  { title: 'God Is Awesome', artist: 'David G', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/David%20G%20-%20God%20Is%20Awesome.mp3', dur: '3:30' },
  { title: 'My Trust Is In You', artist: 'David G', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/David%20G%20-%20My%20Trust%20Is%20In%20You.mp3', dur: '2:24' },
  { title: 'Yahweh', artist: 'David G', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/David%20G%20-%20Yahweh%20-%20Nigerian%20Gospel%20Music.mp3', dur: '2:54' },
  { title: 'Victory', artist: 'Eben', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Eben%20-%20Victory%20%5BOfficial%20Video%5D.mp3', dur: '2:42' },
  { title: 'Cheta', artist: 'Ada', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Ada%20-%20Cheta%20%20%20The%20Official%20Video.mp3', dur: '3:06' },
  { title: 'Jesus (You Are Able)', artist: 'ADA', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/ADA%20-%20JESUS%20%28%20You%20Are%20Able%29%20%20%20Official%20Video.mp3', dur: '3:06' },
  { title: 'Only You Jesus', artist: 'ADA', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/ADA%20-%20ONLY%20YOU%20JESUS%20%20%20The%20Official%20Video.mp3', dur: '3:06' },
  { title: 'Abasi Amanamu', artist: 'Evang Paul Nwokocha', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Evang%20Paul%20Nwokocha%20-%20Abasi%20Amanamu.mp3', dur: '3:48' },
  { title: 'Ancient Of Days', artist: 'Evang Paul Nwokocha', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Evang%20Paul%20Nwokocha%20-%20Ancient%20Of%20Days.mp3', dur: '2:42' },
  { title: 'Ndi Nmuo Ozi', artist: 'Evang Paul Nwokocha', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Evang%20Paul%20Nwokocha%20-%20Ndi%20Nmuo%20Ozi.mp3', dur: '2:06' },
  { title: 'Mezie Ndu Gi', artist: 'Evang John Okah', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Evang%20John%20Okah%20-%20Mezie%20Ndu%20Gi.mp3', dur: '3:24' },
  { title: 'Alanu Mi (My Merciful God)', artist: 'Evang Christiana Akinbanjo', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Evang%20Christiana%20Akinbanjo%20-%20Alanu%20Mi%20%28My%20Merciful%20God%29.mp3', dur: '3:24' },
  { title: 'Temidayo', artist: 'Evang. Ajayi Aduke', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Evang.%20Ajayi%20Aduke%20-%20Temidayo.mp3', dur: '6:00' },
  { title: 'Mo Ne Yo (Well Done)', artist: 'Diana Hamilton', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Diana%20Hamilton%20MO%20NE%20YO%20%28%20Well%20Done%29.mp3', dur: '3:06' },
  { title: 'Consuming Fire', artist: 'Jimmy D Psalmist', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Consuming%20Fire%20-%20Jimmy%20D%20psalmist.%20Live.mp3', dur: '2:24' },
  { title: 'Excess Love (Oficial)', artist: 'Mercy Chinwo', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Excess%20Love%20-%20Mercy%20Chinwo%20%28Official%20Video%29.mp3', dur: '4:06' },
  { title: 'Miracle Rain (oficial)', artist: 'Frank Edwards', genre: 'internacional', src: 'https://archive.org/download/5HoursWorshipWithTheHolySpiritNigerianGospelMusic1/Frank%20Edwards%20-%20Miracle%20Rain.mp3', dur: '3:30' },
  { title: 'Prepare Ye The Way', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc101-PrepareYeTheWaydigitalEdit.mp3', dur: '4:00' },
  { title: 'A New Hallelujah', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc102-ANewHallelujahdigitalEditfeaturingTheAfricanChildrensChoir.mp3', dur: '4:00' },
  { title: 'When I Think Of You', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc103-WhenIThinkOfYoudigitalEditfeaturingTheAfricanChildrensChoir.mp3', dur: '3:00' },
  { title: 'Mighty To Save', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc104-MightyToSavedigitalEdit.mp3', dur: '6:00' },
  { title: 'Shout Unto God', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc105-ShoutUntoGoddigitalEdit.mp3', dur: '2:24' },
  { title: 'Amazing Grace (My Chains Are Gone)', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc106-AmazingGracemyChainsAreGonedigitalEdit.mp3', dur: '4:24' },
  { title: 'Deep In Love With You', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc107-DeepInLoveWithYou.mp3', dur: '4:36' },
  { title: 'Healing Rain / Let It Rain', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc108-HealingRain_LetItRain.mp3', dur: '2:24' },
  { title: 'Majesty', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc109-Majesty.mp3', dur: '3:00' },
  { title: 'I Surrender All', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc110-ISurrenderAllwithSpecialGuestCoaloZamorano.mp3', dur: '2:42' },
  { title: 'Grace', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc111-Grace.mp3', dur: '3:06' },
  { title: 'Help Is On The Way', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc113-HelpIsOnTheWaywithSpecialGuestIsraelHoughton.mp3', dur: '3:42' },
  { title: 'The River Is Rising', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc114-TheRiverIsRising.mp3', dur: '4:00' },
  { title: 'Oh Draw Me Lord (Draw Me Near)', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc201-OhDrawMeLorddrawMeNear.mp3', dur: '1:54' },
  { title: 'Love In His Right Hand', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc202-LoveInHisRightHand.mp3', dur: '2:48' },
  { title: 'A New Hallelujah (Radio Version)', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc203-ANewHallelujahradioVersion.mp3', dur: '3:06' },
  { title: 'A New Hallelujah (Live Radio Edit)', artist: 'Michael W. Smith', genre: 'internacional', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc204-ANewHallelujahliveRadioEdit.mp3', dur: '3:18' },
  { title: 'Hillsong - Diante da Cruz', artist: 'Hillsong', genre: 'internacional', src: 'https://archive.org/download/100MelhoresDeLouvores/024-hillsong-DianteDaCruz10highQuality.mp3', dur: '9:12' },
  { title: 'Amazing Grace', artist: 'Country Gospel', genre: 'internacional', src: 'https://archive.org/download/09-oh-happy-day/01%20Amazing%20Grace.mp3', dur: '2:54' },
  { title: 'Whispering Hope', artist: 'Country Gospel', genre: 'internacional', src: 'https://archive.org/download/09-oh-happy-day/02%20Whispering%20Hope.mp3', dur: '4:54' },
  { title: 'Wings of a Dove', artist: 'Country Gospel', genre: 'internacional', src: 'https://archive.org/download/09-oh-happy-day/03%20Wings%20of%20a%20Dove.mp3', dur: '3:20' },
  { title: 'One Day at a Time', artist: 'Country Gospel', genre: 'internacional', src: 'https://archive.org/download/09-oh-happy-day/04%20One%20Day%20at%20a%20Time.mp3', dur: '4:18' },
  { title: 'What a Friend We Have in Jesus', artist: 'Country Gospel', genre: 'internacional', src: 'https://archive.org/download/09-oh-happy-day/05%20What%20a%20Friend%20We%20Have%20in%20Jesus.mp3', dur: '4:06' },
  { title: 'In the Garden', artist: 'Country Gospel', genre: 'internacional', src: 'https://archive.org/download/09-oh-happy-day/06%20In%20the%20Garden.mp3', dur: '3:48' },
  { title: 'Just a Closer Walk With Thee', artist: 'Country Gospel', genre: 'internacional', src: 'https://archive.org/download/09-oh-happy-day/07%20Just%20a%20Closer%20Walk%20With%20Thee.mp3', dur: '3:42' },
  { title: 'Oh Happy Day', artist: 'Country Gospel', genre: 'internacional', src: 'https://archive.org/download/09-oh-happy-day/09%20Oh%20Happy%20Day.mp3', dur: '5:18' },
  { title: 'Why Me Lord?', artist: 'Country Gospel', genre: 'internacional', src: 'https://archive.org/download/09-oh-happy-day/11%20Why%20Me%20Lord-.mp3', dur: '4:48' },
  { title: 'Will the Circle Be Unbroken', artist: 'Country Gospel', genre: 'internacional', src: 'https://archive.org/download/09-oh-happy-day/12%20Will%20the%20Circle%20Be%20Unbroken.mp3', dur: '3:42' },
  { title: 'Amazing Grace (Worshipped)', artist: 'Abang Jedidiah', genre: 'internacional', src: 'https://archive.org/download/amazing-grace-worshipped_202111/Amazing%20Grace%20-%20Worshipped.mp3', dur: '5:15' },
  { title: 'You Are Life', artist: 'Hillsong Worship (cover)', genre: 'internacional', src: 'https://archive.org/download/youarelifehillsongworship/You%20Are%20Life%20-%20Hillsong%20Worship.mp3', dur: '4:30' },
];

// ---------- Vinhetas da rádio ----------
const VIGNETTES = [];

// ---------- Elementos ----------
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeEl = document.getElementById('volume');
const boostEl = document.getElementById('boost');
const boostValEl = document.getElementById('boostVal');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const trackGenre = document.getElementById('trackGenre');
const cover = document.getElementById('cover');
const playlistEl = document.getElementById('playlist');
const trackCount = document.getElementById('trackCount');
const statusText = document.getElementById('statusText');
const listenersEl = document.getElementById('listeners');
const prayerForm = document.getElementById('prayerForm');
const prayerList = document.getElementById('prayerList');
const vignetteGrid = document.getElementById('vignetteGrid');
const filterButtons = document.getElementById('filterButtons');
const autoVinhetaEl = document.getElementById('autoVinheta');
const voiceStatusEl = document.getElementById('voiceStatus');
const timeBtn = document.getElementById('timeBtn');
const blockBtn = document.getElementById('blockBtn');
const stopVoiceBtn = document.getElementById('stopVoiceBtn');

// ---------- Estado ----------
let currentList = [...LIBRARY];
let currentIndex = 0;
let isPlaying = false;
let currentFilter = 'all';

// ---------- Web Audio API (apenas para teste de som - beep) ----------
// NOTA: NÃO usamos MediaElementAudioSourceNode no elemento de áudio principal,
// pois isso redireciona o áudio para o grafo Web Audio e pode causar
// silêncio em alguns navegadores/dispositivos.
// O volume é controlado nativamente pelo elemento <audio>.

// ---------- Helpers ----------
function formatTime(s) {
  if (!isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

const GENRE_LABELS = {
  sertanejo: 'Sertanejo Gospel',
  'sertanejo-raiz': 'Sertanejo Raiz Gospel',
  mpb: 'MPB Gospel',
  bossa: 'Bossa Nova Gospel',
  classico: 'Clássicos Gospel',
  adoracao: 'Adoração',
  internacional: 'Internacional',
  vinheta: 'Vinheta',
};

const GENRE_COLORS = {
  sertanejo: '#e8a838',
  'sertanejo-raiz': '#c46a1f',
  mpb: '#4caf50',
  bossa: '#26a69a',
  classico: '#9c27b0',
  adoracao: '#ff5722',
  internacional: '#2196f3',
  vinheta: '#607d8b',
};

// Ordem dos blocos na programação
const GENRE_ORDER = [
  'sertanejo',
  'sertanejo-raiz',
  'mpb',
  'bossa',
  'classico',
  'adoracao',
  'internacional',
];

// ---------- Render playlist (com seções separadas por estilo) ----------
function renderPlaylist() {
  playlistEl.innerHTML = '';

  // Contagem por gênero (para os cabeçalhos de seção)
  const counts = {};
  currentList.forEach(t => { counts[t.genre] = (counts[t.genre] || 0) + 1; });

  let lastGenre = null;
  currentList.forEach((t, i) => {
    // Cabeçalho de seção quando muda o estilo
    if (t.genre !== lastGenre) {
      lastGenre = t.genre;
      const head = document.createElement('li');
      head.className = 'playlist-section';
      head.dataset.section = t.genre;
      head.innerHTML =
        `<span class="section-dot" style="background:${GENRE_COLORS[t.genre] || '#888'}"></span>` +
        `<span class="section-name">${GENRE_LABELS[t.genre] || t.genre}</span>` +
        `<span class="section-count">${counts[t.genre]}</span>`;
      playlistEl.appendChild(head);
    }

    const li = document.createElement('li');
    li.dataset.index = i;
    if (i === currentIndex) li.classList.add('active');
    const color = GENRE_COLORS[t.genre] || '#888';
    li.innerHTML = `
      <span class="idx">${(i + 1).toString().padStart(2, '0')}</span>
      <span class="title">${t.title} <span style="color:var(--muted)">— ${t.artist}</span></span>
      <span class="genre-dot" style="background:${color}" title="${GENRE_LABELS[t.genre]}"></span>
      <span class="dur">${t.dur}</span>
    `;
    li.addEventListener('click', () => loadTrack(i, true));
    playlistEl.appendChild(li);
  });
  trackCount.textContent = `${currentList.length} faixas`;
}

// ---------- Locução: vinhetas faladas em português ----------
// Usa a voz do próprio navegador (Web Speech API). Sem arquivos, sem custo.
let ptVoice = null;

function pickPtVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices() || [];
  ptVoice =
    voices.find(v => /pt[-_]BR/i.test(v.lang)) ||
    voices.find(v => /^pt/i.test(v.lang)) ||
    null;
  return ptVoice;
}

if ('speechSynthesis' in window) {
  pickPtVoice();
  window.speechSynthesis.addEventListener('voiceschanged', pickPtVoice);
}

function stopSpeech() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function speak(text, done) {
  if (!('speechSynthesis' in window)) {
    if (voiceStatusEl) voiceStatusEl.textContent = 'Este navegador não tem locução automática.';
    if (done) done();
    return;
  }
  window.speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'pt-BR';
  u.rate = 0.95;
  u.pitch = 1;
  u.volume = 1;
  const v = ptVoice || pickPtVoice();
  if (v) u.voice = v;

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    if (done) done();
  };
  u.onend = finish;
  u.onerror = finish;

  if (voiceStatusEl) voiceStatusEl.textContent = '🎙️ ' + text;
  window.speechSynthesis.speak(u);
  // rede de segurança caso o navegador não dispare onend
  setTimeout(finish, Math.min(30000, 3000 + text.length * 110));
}

// Hora oficial de Brasília
function brasiliaParts() {
  const fmt = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const parts = fmt.formatToParts(new Date());
  let hh = parseInt((parts.find(p => p.type === 'hour') || {}).value || '0', 10);
  const mm = parseInt((parts.find(p => p.type === 'minute') || {}).value || '0', 10);
  if (hh === 24) hh = 0;
  return { hh, mm };
}

function announceTime(done) {
  const { hh, mm } = brasiliaParts();
  let txt = 'Rádio Vida Nova informa: são ' + hh + (hh === 1 ? ' hora' : ' horas');
  if (mm > 0) txt += ' e ' + mm + (mm === 1 ? ' minuto' : ' minutos');
  txt += ', em Brasília.';
  speak(txt, done);
}

const BLOCK_INTRO = {
  sertanejo: 'Agora, no quadro Sertanejo Gospel.',
  'sertanejo-raiz': 'Agora, no quadro Sertanejo Raiz Gospel.',
  mpb: 'Agora, no quadro MPB Gospel.',
  bossa: 'Agora, no quadro Bossa Nova Gospel.',
  classico: 'Agora, no quadro Clássicos Gospel, os hinos da Harpa Cristã.',
  adoracao: 'Agora, no quadro Adoração.',
  internacional: 'Agora, no quadro Internacional.',
};

function announceBlock(genre, done) {
  const intro = BLOCK_INTRO[genre] || ('Agora, no quadro ' + (GENRE_LABELS[genre] || genre) + '.');
  speak('Você está ouvindo Rádio Vida Nova. ' + intro, done);
}

// Vinhetas de locução (faladas, sem arquivo)
const VOICE_VIGNETTES = [
  { title: 'Abertura da Rádio', desc: 'Identificação', text: 'Rádio Vida Nova. A sua rádio de louvor, fé e esperança. Vinte e quatro horas no ar, abençoando a sua vida.' },
  { title: 'Chamada para o Louvor', desc: 'Convite', text: 'Fique conosco. Agora, mais louvor e adoração na Rádio Vida Nova.' },
  { title: 'Vinheta de Bloco', desc: 'Transição', text: 'Rádio Vida Nova. Um novo bloco começa agora.' },
  { title: 'Chamada para Pedidos', desc: 'Interação', text: 'Faça o seu pedido de oração e a sua música. Rádio Vida Nova, a rádio que ora com você.' },
  { title: 'Hora Certa', desc: 'Hora de Brasília', text: '__TEMPO__' },
  { title: 'Encerramento', desc: 'Despedida', text: 'Obrigado por ouvir Rádio Vida Nova. Que Deus abençoe a sua vida. Até a próxima.' },
];

// ---------- Carregar faixa ----------
function loadTrack(index, autoplay = false) {
  if (currentList.length === 0) return;
  stopSpeech();
  currentIndex = (index + currentList.length) % currentList.length;
  const track = currentList[currentIndex];
  audio.src = track.src;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  trackGenre.textContent = GENRE_LABELS[track.genre] || '';
  trackGenre.style.background = GENRE_COLORS[track.genre] || '#888';
  cover.classList.remove('playing');
  progressFill.style.width = '0%';
  currentTimeEl.textContent = '0:00';
  durationEl.textContent = track.dur;

  renderPlaylist();

  if (autoplay) {
    audio.volume = parseFloat(volumeEl.value) || 1;
    audio.play().then(() => {
      isPlaying = true;
      updatePlayButton();
      cover.classList.add('playing');
      statusText.textContent = 'Tocando: ' + track.title;
    }).catch(err => {
      statusText.textContent = 'Clique em ▶ para iniciar (navegador bloqueia autoplay).';
      console.warn(err);
    });
  }
}

function updatePlayButton() {
  playBtn.textContent = isPlaying ? '⏸' : '▶';
}

// ---------- Controles ----------
playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    updatePlayButton();
    cover.classList.remove('playing');
    statusText.textContent = 'Pausado';
  } else {
    // Configura Web Audio API na primeira interação (necessário para mobile)
    audio.volume = parseFloat(volumeEl.value) || 1;
    isPlaying = true;
    updatePlayButton();
    const p = audio.play();
    if (p && typeof p.then === 'function') {
      p.then(() => {
        cover.classList.add('playing');
        statusText.textContent = 'Tocando: ' + currentList[currentIndex].title;
      }).catch(err => {
        isPlaying = false;
        updatePlayButton();
        cover.classList.remove('playing');
        if (err && err.name === 'AbortError') {
          // Tentativa interrompida por recarregamento; tenta novamente
          setTimeout(() => {
            audio.play().then(() => {
              isPlaying = true;
              updatePlayButton();
              cover.classList.add('playing');
              statusText.textContent = 'Tocando: ' + currentList[currentIndex].title;
            }).catch(e => console.warn(e));
          }, 300);
        } else {
          statusText.textContent = 'Não foi possível tocar. Verifique a conexão.';
          console.warn(err);
        }
      });
    }
  }
});

prevBtn.addEventListener('click', () => loadTrack(currentIndex - 1, isPlaying));
nextBtn.addEventListener('click', () => loadTrack(currentIndex + 1, isPlaying));

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const pct = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = pct + '%';
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
});

audio.addEventListener('ended', () => {
  advanceWithVinheta();
});

// Avança para a próxima faixa, com vinheta falada na troca de bloco
// e hora de Brasília a cada ANNOUNCE_EVERY faixas.
let tracksSinceAnnounce = 0;
const ANNOUNCE_EVERY = 4;

function advanceWithVinheta() {
  if (currentList.length === 0) return;
  const nextIdx = (currentIndex + 1) % currentList.length;
  const cur = currentList[currentIndex];
  const nxt = currentList[nextIdx];
  const autoOn = !autoVinhetaEl || autoVinhetaEl.checked;
  const changedBlock = cur && nxt && cur.genre !== nxt.genre;

  tracksSinceAnnounce++;

  if (autoOn && changedBlock) {
    tracksSinceAnnounce = 0;
    announceBlock(nxt.genre, () => loadTrack(nextIdx, true));
    return;
  }
  if (autoOn && tracksSinceAnnounce >= ANNOUNCE_EVERY) {
    tracksSinceAnnounce = 0;
    announceTime(() => loadTrack(nextIdx, true));
    return;
  }
  loadTrack(nextIdx, true);
}

// ---------- Botões de locução ----------
if (timeBtn) {
  timeBtn.addEventListener('click', () => announceTime());
}
if (blockBtn) {
  blockBtn.addEventListener('click', () => {
    const t = currentList[currentIndex];
    announceBlock(t ? t.genre : 'adoracao');
  });
}
if (stopVoiceBtn) {
  stopVoiceBtn.addEventListener('click', () => {
    stopSpeech();
    if (voiceStatusEl) voiceStatusEl.textContent = 'Locução parada.';
  });
}

audio.addEventListener('error', (e) => {
  console.error('Audio error:', e, audio.error);
  statusText.textContent = 'Erro ao carregar a faixa. Pulando para a próxima...';
  isPlaying = false;
  updatePlayButton();
  cover.classList.remove('playing');
  // Auto-skip after 1.5s
  setTimeout(() => loadTrack(currentIndex + 1, true), 1500);
});

progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  if (audio.duration) audio.currentTime = pct * audio.duration;
});

volumeEl.addEventListener('input', () => {
  audio.volume = parseFloat(volumeEl.value);
});

boostEl.addEventListener('input', () => {
  const val = parseFloat(boostEl.value);
  boostValEl.textContent = val.toFixed(1) + 'x';
  // Sem Web Audio API, o boost é limitado a 1.0 (volume máximo do elemento)
  // Para boost real, seria necessário Web Audio API (causa problemas em mobile)
  const vol = parseFloat(volumeEl.value) || 1;
  audio.volume = Math.min(1, vol * val);
});

// ---------- Filtro por gênero ----------
filterButtons.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  filterButtons.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = btn.dataset.genre;
  if (currentFilter === 'all') {
    currentList = [...LIBRARY];
  } else {
    currentList = LIBRARY.filter(t => t.genre === currentFilter);
  }
  currentIndex = 0;
  loadTrack(0, false);
  statusText.textContent = currentFilter === 'all'
    ? `Mostrando toda a biblioteca (${currentList.length} faixas).`
    : `Filtrado: ${GENRE_LABELS[currentFilter]} (${currentList.length} faixas).`;
});

// ---------- Vinhetas ----------
function renderVignettes() {
  vignetteGrid.innerHTML = '';

  // Vinhetas faladas em português (geradas pela voz do navegador)
  VOICE_VIGNETTES.forEach((v, i) => {
    const card = document.createElement('div');
    card.className = 'vignette-item voice-vignette';
    card.innerHTML = `
      <div class="v-icon">🗣️</div>
      <div class="v-info">
        <strong>${v.title}</strong>
        <span>${v.desc} · falada em português</span>
      </div>
      <span class="v-dur">voz</span>
      <button class="v-play" data-voice="${i}">▶</button>
    `;
    vignetteGrid.appendChild(card);
  });

  VIGNETTES.forEach((v, i) => {
    const card = document.createElement('div');
    card.className = 'vignette-item';
    card.innerHTML = `
      <div class="v-icon">🎙️</div>
      <div class="v-info">
        <strong>${v.title}</strong>
        <span>${v.desc}</span>
      </div>
      <span class="v-dur">${v.dur}</span>
      <button class="v-play" data-index="${i}">▶</button>
    `;
    vignetteGrid.appendChild(card);
  });
}

vignetteGrid.addEventListener('click', (e) => {
  const voiceBtn = e.target.closest('.v-play[data-voice]');
  if (voiceBtn) {
    const v = VOICE_VIGNETTES[parseInt(voiceBtn.dataset.voice, 10)];
    if (!v) return;
    if (v.text === '__TEMPO__') {
      announceTime();
    } else {
      speak(v.text);
    }
    return;
  }
  const btn = e.target.closest('.v-play');
  if (!btn) return;
  const idx = parseInt(btn.dataset.index);
  const v = VIGNETTES[idx];
  // Toca a vinheta sem alterar a playlist principal
  const wasPlaying = isPlaying;
  const prevSrc = audio.src;
  const prevIndex = currentIndex;
  audio.volume = parseFloat(volumeEl.value) || 1;
  audio.src = v.src;
  trackTitle.textContent = v.title;
  trackArtist.textContent = 'Vinheta da Rádio';
  trackGenre.textContent = 'Vinheta';
  trackGenre.style.background = GENRE_COLORS.vinheta;
  audio.play().then(() => {
    statusText.textContent = 'Tocando vinheta: ' + v.title;
  }).catch(err => console.warn(err));
  audio.onended = () => {
    audio.onended = () => loadTrack(currentIndex + 1, true);
    if (wasPlaying && prevSrc) {
      audio.src = prevSrc;
      loadTrack(prevIndex, true);
    }
  };
});

// ---------- Pedidos de oração (localStorage) ----------
function loadPrayers() {
  const saved = JSON.parse(localStorage.getItem('prayers') || '[]');
  prayerList.innerHTML = '';
  saved.slice().reverse().forEach(p => {
    const div = document.createElement('div');
    div.className = 'prayer-item';
    div.innerHTML = `<div class="name">${escapeHtml(p.name || 'Anônimo')}</div><div class="text">${escapeHtml(p.text)}</div>`;
    prayerList.appendChild(div);
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

prayerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('prayerName').value.trim();
  const text = document.getElementById('prayerText').value.trim();
  if (!text) return;
  const saved = JSON.parse(localStorage.getItem('prayers') || '[]');
  saved.push({ name, text, date: new Date().toISOString() });
  localStorage.setItem('prayers', JSON.stringify(saved));
  document.getElementById('prayerText').value = '';
  document.getElementById('prayerName').value = '';
  loadPrayers();
});

// ---------- Ouvintes (simulado) ----------
function updateListeners() {
  const base = 12;
  const variation = Math.floor(Math.random() * 8);
  listenersEl.textContent = base + variation;
}
setInterval(updateListeners, 5000);

// ---------- Teste de Som (Web Audio API) ----------
const testSoundBtn = document.getElementById('testSoundBtn');
const testSoundStatus = document.getElementById('testSoundStatus');
const diagInfo = document.getElementById('diagInfo');
const refreshDiag = document.getElementById('refreshDiag');

function playTestBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Retoma o contexto (necessário em mobile)
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 440; // Lá (A4)
    gain.gain.value = 0.5;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    testSoundStatus.textContent = '🔊 Tocando beep de teste (440 Hz)...';
    testSoundStatus.style.color = '#4caf50';
    setTimeout(() => {
      osc.stop();
      ctx.close();
      testSoundStatus.textContent = '✅ Beep concluído. Se você ouviu, seu navegador produz som!';
      testSoundStatus.style.color = '#4caf50';
    }, 1000);
  } catch (e) {
    testSoundStatus.textContent = '❌ Erro ao gerar som: ' + e.message;
    testSoundStatus.style.color = '#ff4d6d';
    console.error(e);
  }
}

testSoundBtn.addEventListener('click', playTestBeep);

// Fechar banner de diagnóstico
const closeBanner = document.getElementById('closeBanner');
const diagBanner = document.getElementById('diagBanner');
if (closeBanner && diagBanner) {
  closeBanner.addEventListener('click', () => {
    diagBanner.style.display = 'none';
  });
}

// ---------- Diagnóstico de Áudio ----------
function updateDiag() {
  const a = audio;
  const lines = [
    'src: ' + (a.src || '(vazio)'),
    'paused: ' + a.paused,
    'currentTime: ' + a.currentTime.toFixed(2) + 's',
    'duration: ' + (isFinite(a.duration) ? a.duration.toFixed(2) + 's' : 'N/A'),
    'readyState: ' + a.readyState + ' (0=vazio,1=metadata,2=atual,3=futuro,4=suficiente)',
    'volume: ' + a.volume,
    'muted: ' + a.muted,
    'networkState: ' + a.networkState + ' (0=vazio,1=ocioso,2=carregando,3=sem fonte)',
    'error: ' + (a.error ? a.error.code + ' - ' + a.error.message : 'nenhum'),
    'isPlaying (estado): ' + isPlaying,
    'navigator.userAgent: ' + navigator.userAgent.slice(0, 80),
  ];
  diagInfo.textContent = lines.join('\n');
}

refreshDiag.addEventListener('click', updateDiag);
setInterval(updateDiag, 2000);

// ---------- Seletor de arquivos MP3 (local) ----------
const fileInput = document.getElementById('fileInput');
const fileCount = document.getElementById('fileCount');
const dropZone = document.getElementById('dropZone');

// Contador de arquivos locais adicionados
let localFileCount = 0;

function addLocalFiles(files) {
  let added = 0;
  Array.from(files).forEach(file => {
    if (!file.type.startsWith('audio/') && !file.name.toLowerCase().endsWith('.mp3')) return;
    
    const url = URL.createObjectURL(file);
    const name = file.name.replace(/\.[^/.]+$/, ''); // Remove extensão
    
    LIBRARY.push({
      title: name,
      artist: 'Arquivo local',
      genre: 'adoracao',
      src: url,
      dur: '--:--',
      isLocal: true,
    });
    added++;
  });
  
  if (added > 0) {
    localFileCount += added;
    if (fileCount) {
      fileCount.textContent = `${localFileCount} arquivo(s) local(is)`;
    }
    // Recarrega a playlist mantendo o filtro atual
    if (currentFilter === 'all') {
      currentList = [...LIBRARY];
    } else {
      currentList = LIBRARY.filter(t => t.genre === currentFilter);
    }
    renderPlaylist();
    statusText.textContent = `${added} música(s) adicionada(s) do computador!`;
  }
}

if (fileInput) {
  fileInput.addEventListener('change', (e) => {
    addLocalFiles(e.target.files);
    fileInput.value = ''; // Reset para permitir selecionar os mesmos arquivos novamente
  });
}

// Drag & Drop
if (dropZone) {
  dropZone.addEventListener('click', () => {
    if (fileInput) fileInput.click();
  });
  
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.add('drag-over');
  });
  
  dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('drag-over');
  });
  
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('drag-over');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addLocalFiles(e.dataTransfer.files);
    }
  });
}

// ---------- Init ----------
// Garante que o áudio não esteja mutado (importante para mobile)
audio.muted = false;
audio.volume = parseFloat(volumeEl.value) || 1;

// Desativa os filtros de estilos que ainda não têm faixas
function updateFilterAvailability() {
  const counts = {};
  LIBRARY.forEach(t => { counts[t.genre] = (counts[t.genre] || 0) + 1; });
  filterButtons.querySelectorAll('.filter-btn').forEach(btn => {
    const g = btn.dataset.genre;
    if (g === 'all') return;
    const n = counts[g] || 0;
    if (n === 0) {
      btn.disabled = true;
      btn.classList.add('is-empty');
      btn.title = 'Ainda não temos faixas neste estilo';
    } else {
      btn.title = n + ' faixas';
    }
  });
}

updateFilterAvailability();
renderPlaylist();
renderVignettes();
loadTrack(0);
updateListeners();
loadPrayers();
updateDiag();
statusText.textContent = `Pronto! ${LIBRARY.length} louvores + ${VIGNETTES.length + VOICE_VIGNETTES.length} vinhetas. Clique em ▶ para ouvir.`;

// ---------- PWA: Service Worker (desabilitado - causava cache de versão antiga) ----------
// O Service Worker foi desabilitado para evitar problemas de cache.
// A rádio funciona normalmente sem ele. O manifest.json ainda permite instalação como app.

// ---------- PWA: Install Prompt ----------
let deferredPrompt = null;
const installBanner = document.getElementById('installBanner');
const installBtn = document.getElementById('installBtn');
const dismissInstall = document.getElementById('dismissInstall');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBanner) {
    installBanner.style.display = 'flex';
  }
});

if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('Instalação:', outcome);
      deferredPrompt = null;
      if (installBanner) {
        installBanner.style.display = 'none';
      }
    }
  });
}

if (dismissInstall) {
  dismissInstall.addEventListener('click', () => {
    if (installBanner) {
      installBanner.style.display = 'none';
    }
  });
}

window.addEventListener('appinstalled', () => {
  console.log('PWA instalado com sucesso!');
  if (installBanner) {
    installBanner.style.display = 'none';
  }
});
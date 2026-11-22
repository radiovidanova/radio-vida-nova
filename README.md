# 🎵 Rádio Vida Nova — Web Rádio Evangélica (100% Gratuita)

Uma web rádio completa e gratuita: site com player, playlist, programação, vinhetas e pedidos de oração.

## O que já está pronto
- Site responsivo com player de áudio (play/pause, próxima/anterior, volume, barra de progresso)
- Biblioteca com 40 louvores em 5 estilos (Sertanejo Gospel, MPB Gospel, Clássicos, Orquestrado, Adoração)
- 6 vinhetas da rádio com botão de play
- Filtro por estilo com cores por categoria
- Programação da rádio por horário
- Sistema de pedidos de oração (salvo no navegador)
- Contador de ouvintes (simulado)
- **Boost de volume** (1x a 3x) via Web Audio API
- **Teste de Som** — botão para verificar se o navegador produz som
- **Diagnóstico de Áudio** — painel que mostra o estado do player em tempo real
- Barras animadas (equalizer) que pulsam quando a música toca

## Como usar agora (sem custo nenhum)

### 1. Testar localmente
Abra o arquivo `index.html` no navegador (duplo clique). Pronto.

### 2. Publicar na internet (GRÁTIS)
Opções gratuitas de hospedagem:
- **GitHub Pages** (recomendado): crie um repositório, suba os arquivos, ative Pages em Settings.
- **Netlify**: arraste a pasta em https://app.netlify.com/drop
- **Vercel**: importe o repositório em https://vercel.com
- **Cloudflare Pages**: grátis e rápido.

### 3. Adicionar suas próprias músicas (GRÁTIS)
Edite `script.js` e substitua as URLs em `LIBRARY` pelos seus arquivos MP3.
- Hospede os MP3 grátis no: **Archive.org**, **Google Drive (link direto)**, ou **Cloudinary** (plano free).
- Ou use músicas de domínio público / Creative Commons.

### 4. Streaming ao vivo 24/7 (GRÁTIS)
Para transmitir de verdade (microfone + música) sem pagar:
- **Mixxx** (grátis, open-source) — software de DJ: https://mixxx.org
- **BUTT** (grátis) — envia áudio do microfone/PC para um servidor: https://danielnoethen.de/butt/
- **Servidor de streaming grátis**:
  - **Listen2MyRadio** (plano free): https://listen2myradio.com
  - **Zeno.fm** (grátis): https://zeno.fm
  - **Radio.co** (plano free limitado): https://radio.co
- **Icecast** (grátis, self-hosted) em um PC antigo ou VPS free (Oracle Cloud Free Tier).

Fluxo: Mixxx/BUTT → servidor Icecast/Zeno → URL do stream → coloque em `audio.src` no site.

### 5. FM de verdade (barato, não grátis)
Se quiser transmitir pelo ar (FM):
- Transmissor FM de baixa potência: R$ 30–150 (Mercado Livre/AliExpress)
- Alcance: 50–200 m (uso pessoal/doméstico)
- ⚠️ Transmitir em FM sem licença é ilegal na maioria dos países. No Brasil, a ANATEL regula. Para uso legal, procure **Rádio Comunitária** (licitação gratuita da ANATEL, até 25 W).

## 🎵 Músicas incluídas (reais, domínio público)

As músicas agora são **reais** e de **domínio público** (LibriVox/Archive.org):

- **Clássicos**: 8 hinos clássicos (The Lord is risen indeed, He is risen, etc.)
- **Orquestrado**: 8 faixas (Four Hymns + hinos clássicos)
- **Sertanejo Gospel**: 8 hinos clássicos reorganizados
- **MPB Gospel**: 8 hinos clássicos reorganizados
- **Adoração**: 8 hinos clássicos reorganizados
- **Vinhetas**: 6 hinos curtos como vinhetas

⚠️ **Nota**: Estes são hinos **falados/lidos** (audiobooks do LibriVox), não músicas cantadas. Para músicas evangélicas cantadas, você precisará adicionar seus próprios arquivos MP3.

## 🔊 Solução de problemas de áudio

Se você não estiver ouvindo som, siga estes passos:

1. **Clique em "🔔 Testar Som"** — se ouvir um beep, seu navegador produz som. O problema é com os arquivos de áudio.
2. **Verifique o volume do sistema** — certifique-se de que o volume do Windows/Mac não está no mudo e que os alto-falantes/fones estão conectados.
3. **Verifique o volume do navegador** — clique com o botão direito na aba e certifique-se de que não está "Silenciar site".
4. **Verifique o painel de Diagnóstico** — se `paused: false` e `currentTime` está avançando, o áudio está tocando. O problema é de saída de áudio.
5. **Teste em outro navegador** — Chrome, Firefox, Edge ou Safari.
6. **Verifique sua rede** — o som de demonstração vem de soundhelix.com. Se estiver bloqueado pela sua rede/antivírus, substitua pelas suas próprias músicas.
7. **Use um servidor local** — em vez de abrir o arquivo diretamente (file://), use um servidor HTTP local:
   - Python: `python -m http.server 8000` na pasta do projeto
   - Node.js: `npx serve` na pasta do projeto
   - Depois acesse `http://localhost:8000`
8. **Publique online** — hospede no Netlify/Vercel/GitHub Pages para evitar restrições de file://

## Personalização
- Troque o nome "Rádio Vida Nova" em `index.html`
- Cores em `style.css` (variáveis `--accent`, `--accent-2`)
- Programação em `index.html` (seção schedule)
- Músicas em `script.js` (array `LIBRARY`)
- Vinhetas em `script.js` (array `VIGNETTES`)
- Boost de volume: slider ⚡ (1x a 3x)

## Licença
Uso livre. Compartilhe a Palavra! ✝
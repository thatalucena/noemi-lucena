# By Noemi Lucena — Landing page

Site estático de página única da **By Noemi Lucena** (videomaker mobile, conteúdo, social media, tráfego pago e soluções digitais).
Assinatura: *Do conteúdo à conversão.*

## Executar localmente

Não há build. Basta servir a pasta `site/` por HTTP (abrir o `index.html` direto via `file://` também funciona, mas algumas APIs ficam limitadas):

```bash
cd site
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Publicar

Envie o conteúdo de `site/` para qualquer hospedagem estática (Vercel, Netlify, Cloudflare Pages, GitHub Pages ou um servidor Apache/Nginx). Para obter a nota máxima de performance, ative no servidor:

- **Compressão** gzip ou brotli para HTML, CSS, JS e SVG (Vercel, Netlify e Cloudflare já fazem isso por padrão).
- **Cache longo** (`Cache-Control: max-age=31536000, immutable`) para `assets/` e `js/vendor/`.

Depois de publicar, troque os caminhos relativos de `og:image` por URLs absolutas do domínio final e adicione `<link rel="canonical">`.

## Estrutura

```text
site/
├── index.html                 # marcação completa da página
├── css/
│   ├── variables.css          # design tokens + @font-face
│   ├── styles.css             # base, componentes e seções
│   └── responsive.css         # breakpoints, movimento reduzido
├── js/
│   ├── main.js                # CONFIG (WhatsApp), header, menu, abas, FAQ, timeline
│   ├── scroll.js              # Lenis + integração com ScrollTrigger + âncoras
│   ├── animations.js          # GSAP: reveals, marquees, timeline, parallax
│   └── vendor/                # gsap 3.12.5, ScrollTrigger 3.12.5, lenis 1.1.13 (locais)
└── assets/
    ├── fonts/                 # Archivo (variável 300–800) e JetBrains Mono 500, woff2
    ├── icons/                 # favicon.svg
    └── images/                # fotos oficiais (originais + variantes 480/640 para srcset) e og-image.jpg
```

Nenhuma dependência externa em tempo de execução: as fontes, o GSAP e o Lenis são servidos pelo próprio site.

## Configuração do contato (WhatsApp)

Em `js/main.js`:

```js
const CONFIG = {
  whatsappNumber: "5585998021639",   // (85) 99802-1639 — DDI + DDD + número
  ...
};
```

- **Botões gerais "Solicitar proposta"** (header, menu mobile, hero, CTA final e rodapé) levam à seção **Como contratar** (`#contratar`).
- **Botões dos cards** (os 7 painéis de serviço e os 3 cards de Como contratar) abrem o WhatsApp com a mensagem do atributo `data-cta`, por exemplo "Olá, Noemi! Tenho interesse no serviço de Tráfego pago (Meta Ads e Google Ads).". O `href` no HTML já aponta para `https://wa.me/5585998021639`, então o link funciona mesmo sem JavaScript (só sem a mensagem pronta).
- O rodapé mostra o link "WhatsApp · (85) 99802-1639".

## Seções

| # | Seção | Adaptação da referência Nevra |
|---|---|---|
| 0 | Header fixo | Logo (monograma oficial em SVG), navegação central, CTA em contorno; menu mobile em tela cheia |
| 1 | Hero | Etiqueta REC, título em 2 linhas com destaque magenta, CTA e perfil do Instagram (no lugar de avatares de clientes) |
| 2 | Faixa de mídia | Galeria full-bleed com as fotos reais e as etapas da claquete da Noemi (Ideia → Resultados) |
| 3 | Faixa de serviços | No lugar da faixa de logos de clientes: os 8 serviços em loop |
| 4 | Sobre | Título e texto lado a lado; os cards de KPI viraram pilares (Mobile, Estratégia, Conversão), sem números |
| 5 | Serviços | Seletor em abas com os 7 serviços (Meta Ads e Google Ads unidos em **Tráfego pago**), uma imagem por serviço e os itens de cada um |
| 6 | Método | Foto + timeline curva com as 4 etapas reais do processo (linha desenhada no scroll) |
| 7 | Portfólio | 11 posts e reels reais do @by.noemilucena em uma linha contínua (marquee que pausa com mouse ou foco); cada card abre o post no Instagram |
| 8 | Como contratar | No lugar de "Plans": avulso, combinado e estratégia, todos sob consulta, com a regra da verba de anúncios |
| 9 | Dúvidas | Acordeão com respostas extraídas do documento de contexto |
| 10 | CTA final | Card escuro com a linha de crescimento da marca |
| 11 | Rodapé | Monograma, links, contato e wordmark gigante |

## Decisões de design

- **Tipografia da marca no lugar da serifada da Nevra.** O logo oficial usa uma grotesca; adotamos a **Archivo** nos títulos e a **JetBrains Mono** nos microtextos, ecoando o "MARKETING · CONTEÚDO · AUDIOVISUAL" do logo. O contraste editorial dos títulos da Nevra (serifa itálica) foi traduzido em **contraste de peso**: linha principal em 600 e destaque em 300 magenta, como no "**NOEMI** LUCENA" da Opção C do logo.
- **Cores** tiradas do PDF oficial: preto `#131315`, off-white `#F5F0EA` e magenta `#C8235A`. Sobre fundo escuro, o texto em magenta usa `#EC5B88`, que atinge contraste AA. O magenta do `logo-horizontal.png` (`#F00F6B`) é mais saturado que o do PDF; seguimos o PDF.
- **Ritmo da Nevra preservado:** alternância de superfícies claras e escuras, etiquetas pequenas em areia (com o ponto REC no lugar da estrela), cards com raio de 24px, botões pílula, muito espaço negativo, galeria full-bleed, timeline curva, abas de serviços, acordeão e wordmark gigante no rodapé.
- **Seções que dependeriam de dados inventados** (planos com preço, cases, depoimentos, logos de clientes, KPIs numéricos) foram substituídas por conteúdo real do documento de contexto.
- **Monograma** redesenhado em SVG a partir do PDF (Opção A), com o ponto magenta. A linha de performance da Opção C do logo aparece no CTA final.

## Imagens dos serviços e do portfólio

| Arquivo | Origem |
|---|---|
| `trafego-pago-dashboard(-640).webp` | Foto do Unsplash (licença Unsplash, uso livre): `https://images.unsplash.com/photo-1460925895917-afdab827c52f` |
| `by-noemi-lucena-landing-page-mockup(-640).webp` | Print do hero desta landing page (1440×900) dentro de um monitor desenhado em CSS. Fonte: `references/composicoes/mockup.html` |
| `automacao-fluxo-chatbot(-640).webp` | Fluxo ilustrativo (comentário no Instagram → mensagem no direct → WhatsApp ou atendimento humano) nas cores da marca. Fonte: `references/composicoes/fluxo.html` |
| `portfolio/ig-*.webp` | Miniaturas do grid público do @by.noemilucena (capturadas em 24/10/2026). Ficou de fora um post pessoal (foto na praia) |

As composições foram renderizadas no Chrome headless a 2x e reduzidas para 1200 e 640 px. Para regerar, sirva `references/composicoes/` por HTTP junto com `lp-shot.png` (print da página) e a pasta `fonts/` (copiar de `assets/fonts/`).

**Atualizar o portfólio:** a seção não puxa os posts automaticamente. Para trocar, salve a miniatura em `assets/images/portfolio/ig-<código>.webp` e copie um `<li>` em `.portfolio__track`, ajustando o link (`/p/` para post, `/reel/` para reel), o `width` da imagem e o `alt`. As miniaturas dos reels têm 360×640 px, por isso ficam um pouco suaves em telas retina; se a Noemi enviar as capas originais, vale substituir.

## Animações e acessibilidade

- GSAP + ScrollTrigger: reveal das linhas dos títulos, entradas escalonadas, marquees que aceleram com a velocidade do scroll e pausam fora da tela, timeline desenhada no scroll, parallax suave e transições das abas e do acordeão.
- Lenis para o scroll suave, sincronizado ao ticker do GSAP; as âncoras compensam a altura do header.
- **`prefers-reduced-motion`:** Lenis e GSAP não são iniciados, todo o conteúdo fica visível e as faixas viram trilhos com rolagem manual.
- **Sem JavaScript, ou se o GSAP falhar:** o conteúdo permanece visível (o estado oculto só se aplica com a classe `has-anim`, removida automaticamente após 2,5s se o GSAP não carregar). Sem JS, todos os painéis de serviço aparecem empilhados.
- Abas seguem o padrão WAI-ARIA (setas, Home e End), o acordeão usa `aria-expanded`, o menu mobile prende o foco e fecha com Esc, e há skip link, foco visível e áreas de toque de pelo menos 44px nos controles.

## Validação realizada (18/10/2026)

| Verificação | Resultado |
|---|---|
| Chrome headless em 1440, 1280, 1024, 768, 390 e 360px | 0 erros de console, 0 requisições falhas, 0 overflow horizontal, 0 conteúdo oculto após o scroll |
| Mesmos viewports com `prefers-reduced-motion` e com JS desativado | Mesmo resultado; conteúdo íntegro |
| Testes de interação (âncoras, link ativo, abas por clique e teclado, acordeão, menu mobile com foco e Esc, marquee, timeline, CTAs) | 17/17 aprovados |
| Lighthouse desktop | Performance 100 · Acessibilidade 100 · Boas práticas 100 · SEO 100 |
| Lighthouse mobile (4G simulado, servidor local sem compressão) | Performance 89 · Acessibilidade 100 · Boas práticas 100 · SEO 100; FCP 1,5s; LCP 3,7s; CLS 0; TBT 0 ms |

| html-validate (regras recomendadas) | Sem erros |

Sobre o desempenho no mobile: os avisos restantes são compressão e cache (configuração do servidor, ver "Publicar"), minificação (cerca de 12 KiB) e o LCP. O LCP é o título do hero, que entra com a animação de linhas e só é pintado quando o GSAP carrega. Se o objetivo for priorizar a métrica, basta remover `data-lines` do `<h1>` para exibi-lo sem animação.

### Revalidação após as correções de 24/10/2026 (serviços, CTAs e portfólio)

Puppeteer + Chrome headless, 98/98 verificações aprovadas:

- 1440, 1280, 1024, 768, 390 e 360px, cada um em modo normal, com `prefers-reduced-motion` e sem JavaScript: 0 erros de console, 0 requisições falhas, 0 overflow horizontal, 0 conteúdo oculto após o scroll.
- 7 abas de serviço, cada uma com imagem carregada; teclado (End) nas abas.
- 5 botões gerais apontam para `#contratar`; o clique no header e no menu mobile rola até a seção. Os 10 botões de cards abrem `wa.me/5585998021639` com a mensagem certa.
- Portfólio: 11 posts com link e `alt`, uma única linha, movimento, pausa com mouse e com foco, cópias do loop fora da tabulação; com movimento reduzido vira trilho rolável.

Lighthouse não foi rodado de novo. O html-validate (v8.24.2) acusa apenas `doctype-style` (`<!doctype html>` em minúsculas), presente desde a versão anterior.

Não testado: Safari e Firefox reais, dispositivos físicos iOS e Android, e leitores de tela reais (VoiceOver e NVDA).

## Pendências (dependem do cliente)

1. ~~Número do WhatsApp comercial~~ — configurado: (85) 99802-1639.
2. **Política de Privacidade:** faltam o controlador dos dados e o e-mail de contato. A página não tem link de política até que esses dados existam (não há formulário, então nenhum dado é coletado hoje).
3. **E-mail exibido no rodapé:** `ny.lucena@gmail.com`, que consta no contexto como e-mail de contato. Confirmar se é o canal público desejado ou se haverá um e-mail comercial.
4. **Logo final:** confirmar a Opção A (monograma "N" com ponto), que é a usada no site e nas fotos. Se houver o SVG oficial, substituir o símbolo `#nl-mono` no `index.html` e o `assets/icons/favicon.svg`.
5. **Domínio final:** para URLs absolutas de `og:image` e `canonical`.
6. **Fotos e portfólio:** a foto do hero tem 720px de largura. Se houver uma versão em maior resolução, ou vídeos e projetos reais para portfólio e cases, eles podem ampliar a faixa de mídia.
7. **Outras redes** (TikTok, YouTube, LinkedIn): não foram incluídas por falta de confirmação; apenas o Instagram @by.noemilucena.

## Cuidados de conteúdo aplicados

- Nenhum número, depoimento, cliente, preço ou resultado inventado; os valores aparecem como "sob consulta".
- Nenhuma menção à L'Oréal nem ao perfil pessoal @oquenoemivive.
- "Videomaker mobile" como posicionamento principal, em vez de "audiovisual" genérico.

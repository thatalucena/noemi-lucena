# NEVRA — DESIGN SYSTEM COMPLETO

**Auditoria visual e especificação para reconstrução de interface**  
**Referência:** `nevra.framer.website` — 13 capturas de tela enviadas em 18/10/2026  
**Escopo:** landing page desktop, do cabeçalho ao rodapé; identidade visual, tipografia, paleta, grids, componentes, comportamento, conteúdo, acessibilidade e orientações de implementação.  
**Status de precisão:** análise forense visual, não extração do código do Framer.

> **IMPORTANTE — níveis de certeza.** **[OBSERVADO]**: elemento diretamente visível nas capturas. **[ESTIMADO]**: cor, dimensão, fonte ou comportamento inferido visualmente. **[RECOMENDADO]**: especificação para reprodução funcional, sem afirmar que seja o CSS original. As 13 imagens possuem resolução de arquivo de 2048 × 1280 px e incluem a interface do navegador, cuja escala de captura não necessariamente equivale a pixels CSS. Não é possível confirmar nomes exatos de fontes, breakpoints, propriedades CSS, textos ocultos dos acordeões, animações, links, conteúdo não capturado ou comportamento responsivo exclusivamente pelos prints.

---

## 01. Resumo executivo e DNA da marca

### 1.1 Conceito

A Nevra é apresentada como uma agência criativa *AI-first* voltada à produção de conteúdo visual, UGC e anúncios. Seu posicionamento visual contrasta **elegância editorial quase de marca de moda** com **clareza de uma landing page de serviço SaaS**. O sistema evita efeitos chamativos e usa fotografia de beleza, moda e produto como demonstração de capacidade.

**Palavras-chave:** editorial, refinado, caloroso, premium, minimalista, fashion-tech, humano, assertivo, modular, sofisticado.

### 1.2 Gramática visual

1. **Títulos grandes em serifada inclinada**: tensão entre inteligência artificial e sensibilidade humana.
2. **Neutros quentes**: creme/marfim, bege areia, vinho muito escuro e marrom avermelhado.
3. **Alternância de superfícies claras e escuras**: produz ritmo narrativo ao longo da página.
4. **Fotografia como prova**: fotos realistas de beleza, maquiagem, joalheria, moda e conteúdo de rede social.
5. **Componentes geométricos suaves**: retângulos com raios expressivos, pílulas, círculos numerados.
6. **Densidade controlada**: muito espaço vazio e blocos de texto deliberadamente curtos.
7. **Contrastes de escala**: números, manchetes e fotografias dominam; etiquetas e descrições permanecem discretas.
8. **Microelementos gráficos**: pequenos glifos de brilho/estrela, check circular, setas, aspas e numeradores.

### 1.3 O que NÃO caracteriza este design

Não há gradientes vibrantes, glassmorphism, elementos 3D decorativos generalizados, fundos tecnológicos azuis, neon, linhas de grid visíveis, ilustrações isométricas, excesso de sombras, botões com glow ou abundância de cores de acento. As imagens de beleza podem ter iluminação editorial intensa, mas os *controles da interface* permanecem limpos.

---

## 02. Inventário completo de seções e fluxo da página

**Ordem reconstruída a partir das capturas sequenciais:**

| Ordem | Seção | Superfície | Estrutura visual | Função |
|---|---|---|---|---|
| 0 | Navbar | Marfim fixo no topo | Logo à esquerda, menu central, CTA à direita | Navegação permanente |
| 1 | Hero | Marfim | Eyebrow central, H1 serifado 2 linhas, descrição, CTA e avatares | Proposta de valor e conversão |
| 2 | Faixa de portfólio | Imagens coloridas | Cards verticais de mídia em faixa horizontal, chips com visualizações | Prova visual imediata |
| 3 | Faixa de logos | Vinho quase preto | Wordmarks de empresas repetidos horizontalmente | Prova social |
| 4 | About us | Vinho quase preto | Título à esquerda, descrição à direita, três KPIs bege | Credibilidade e diferenciais |
| 5 | How we work | Marfim | Título central, foto à esquerda, timeline vertical com 3 etapas à direita | Explicação do processo |
| 6 | Plans | Marfim | Título central, 3 cartões com plano central em destaque | Conversão via precificação |
| 7 | Cases | Marfim, com transição subsequente ao vinho | Título central, estudos de caso alternados, mockups Instagram e KPIs | Demonstração de resultados |
| 8 | Services | Vinho quase preto | Título central, menu/abas verticais à esquerda, imagem e descrição à direita | Catálogo de serviços |
| 9 | Testimonials | Vinho quase preto | Título central, carrossel de 3 cards, setas e paginação | Prova social qualitativa |
| 10 | FAQs | Marfim | Título central, 4 linhas expansíveis arredondadas | Remoção de objeções |
| 11 | Footer | Marfim | Marca/CTA à esquerda, 3 colunas de links, wordmark gigante e copyright | Navegação final e conversão |

**Observações de fluxo:** a página funciona como um **one-page site** com âncoras de navegação para About us, Services, Plans, Cases e FAQs. O cabeçalho é visível em todas as capturas de diferentes posições verticais — forte indício de navegação `sticky` ou `fixed` [ESTIMADO]. A localização do bloco de precificação antes dos Cases, e de Services depois dos Cases, não coincide com a ordem dos links de navegação, mas é a ordem revelada pelas imagens.

---

## 03. Cores — extração e tokens

### 3.1 Paleta principal

Amostras de pixels representativos indicam que a cor de fundo claro dominante fica muito próxima de `#F6F0E9`, a superfície bege de `#EBE2D1` e o fundo escuro de `#110400`. **Essas três são extrações aproximadas das capturas**, suscetíveis a compressão, antialiasing e tratamento da screenshot. Tons restantes são aproximações coerentes com os elementos observados.

| Token | HEX | Uso | Confiança |
|---|---|---|---|
| `color.canvas` | `#F6F0E9` | Fundo marfim principal, navbar, hero, FAQ, footer | Alta — amostrado |
| `color.surface.sand` | `#EBE2D1` | Cards de métricas, FAQs, badges e numeradores | Alta — amostrado |
| `color.surface.sand.alt` | `#ECE2D2` | Variação de bege observada nos cards | Alta — amostrado |
| `color.ink` | `#110400` | Fundo escuro, texto escuro e botões quase pretos | Alta — amostrado |
| `color.ink.soft` | `#2B1F1D` | Card de serviço ativo escuro, tom grafite-marrom | Média |
| `color.accent.burgundy` | `#6A1B10` | Partes destacadas de títulos, pequenos acentos | Média — estimado |
| `color.accent.deep` | `#541407` | Painel Growth / gradiente sutil ou superfície vinho | Média — estimado |
| `color.text.primary` | `#160907` | H1/H2 em áreas claras | Alta por aparência |
| `color.text.secondary` | `#625954` | Corpo e legendas em superfícies claras | Média |
| `color.text.muted` | `#978D86` | Textos inativos, notas, copyright | Média |
| `color.text.inverse` | `#F6F0E9` | Texto principal nos fundos escuros | Alta |
| `color.white` | `#FFFFFF` | Cards de plano, chips, botões sobre vinho | Alta |
| `color.stroke` | `#251712` | Contorno de botão outline | Média |
| `color.icon.muted` | `#D6C9B7` | Aspas, estrelas menos ativas e ícones decorativos | Média |

### 3.2 Proporção de uso cromático

- **Fundo dominante**: grandes áreas marfim e vinho profundo.
- **Areia**: superfícies funcionais internas, para diferenciar cards do entorno.
- **Marrom-avermelhado**: acento tipográfico e plano prioritário, usado com moderação.
- **Branco puro**: reservado para cartões de pricing, ícones e contrastes pontuais.
- **Fotografia**: é o principal ponto de diversidade cromática; a interface em si é restrita.

### 3.3 Combinações e regras de contraste

| Contexto | Fundo | Texto | Acento |
|---|---|---|---|
| Hero e sessões claras | `canvas` | `ink` | `burgundy` em parte do título |
| About / Services / Testimonials | `ink` | `canvas` | Beige e marrom secundário |
| Cards estatísticos | `sand` | `ink` | Marrom-avermelhado nos glifos |
| Pricing padrão | `white` | `ink` | Botão `ink` |
| Pricing destaque | `accent.deep` / `ink` | `canvas` | Botão branco |
| Acordeão | `sand` | `ink` | Controle circular branco |

**Acessibilidade:** verificar contraste WCAG em texto pequeno vinho sobre creme e cinza claro em branco; não presumir aprovação automática por semelhança visual.

---

## 04. Tipografia — anatomia e hierarquia

### 4.1 Sistema dual

**Display editorial:** serifada de alto contraste óptico, com eixo inclinado (*italic*), curvas caligráficas, terminais elegantes e distribuição estreita/moderada. O logo e os títulos lembram a família visual de serifas editoriais como **DM Serif Display Italic**, **Cormorant Garamond Italic**, **Bodoni Moda Italic** ou **Instrument Serif Italic**. **Nenhuma fonte específica pode ser confirmada nos pixels.** Entre as substitutas, **Instrument Serif Italic** constitui um bom ponto de partida, sujeito a comparação lado a lado, especialmente no desenho de `a`, `g`, `W`, `f`, `y` e numerais.

**Interface e texto:** sans-serif neo-grotesca de traços limpos, moderadamente compacta, *a* de dois andares, desenho simples em botões. Parece próxima de **Inter**, **Arial/Helvetica Neue**, **Satoshi**, **Manrope** ou similar. **Recomendação:** usar `Inter` como fallback de engenharia até auditar a fonte real.

### 4.2 Escala tipográfica proposta para desktop [ESTIMADA]

| Papel | Família | Peso/estilo | Tamanho CSS sugerido | Line-height | Tracking | Alinhamento |
|---|---|---|---:|---:|---:|---|
| `display.hero` | Serif | 400 italic | `clamp(3.25rem, 4.6vw, 4.75rem)` | 0.99–1.05 | `-0.035em` | Centro |
| `display.section` | Serif | 400 italic | `clamp(2.8rem, 3.8vw, 4.1rem)` | 1.03–1.10 | `-0.035em` | Centro/esquerda |
| `display.metric` | Serif | 400 italic | 4.5–5.4rem | 0.95–1.0 | `-0.04em` | Esquerda / base |
| `display.price` | Serif | 400 italic | 2.1–2.5rem | 1.0 | `-0.03em` | Esquerda |
| `heading.serif.sm` | Serif | 400 italic | 1.65–2.1rem | 1.05–1.12 | `-0.025em` | Esquerda |
| `heading.card` | Sans | 400–500 | 1.65–1.9rem | 1.1 | `-0.04em` | Esquerda |
| `body.large` | Sans | 400 | 1.05–1.125rem | 1.4–1.55 | `-0.025em` | Variável |
| `body.default` | Sans | 400 | 0.95–1.025rem | 1.45 | `-0.018em` | Esquerda |
| `body.small` | Sans | 400 | 0.85–0.9rem | 1.35–1.45 | `-0.01em` | Esquerda |
| `label.micro` | Sans | 400–500 | 0.66–0.75rem | 1.2–1.35 | `-0.01em` | Esquerda |
| `nav.link` | Sans | 400 | 0.82–0.88rem | 1.2 | `-0.01em` | Centro |
| `button.label` | Sans | 400–500 | 0.9–1rem | 1.2 | `-0.02em` | Centro |

> Esses tamanhos são **valores sugeridos em CSS**, não medidas obtidas da inspeção do site. A imagem de 2048 px é uma captura da viewport do navegador e pode estar dimensionada. Priorizar proporção, quebra de linha e contraste, em vez de aderência cega ao valor sugerido.

### 4.3 Padrão de headline

A expressão típica consiste em **uma frase central de duas linhas**, com o trecho final ou palavras importantes em vinho. Toda a frase mantém a **mesma família serifada italic**. Exemplos observados:

- Hero: `Your content. Powered by AI.` / `Perfected by humans` (segunda linha em vinho).
- Process: `Behind the scenes of our AI` / `creative workflow` (AI / creative workflow em vinho).
- Plans: `Choose the right AI` / `package for your brand` (right AI / package em vinho).
- Cases: `We help brands scale` / `content with AI` (scale / content with AI em vinho).
- Services: `We handle everything,` / `so you don’t have to` (creme, sem a necessidade de acento).
- Testimonials: `Loved by modern brands` (creme, uma linha).
- FAQ: `Frequently Asked` / `Questions` (Questions em vinho).

**Regras:** limitar largura editorial (~680–880 px sugeridos), evitar 3–5 linhas no desktop, aplicar 1–2 *spans* de acento cromático no máximo, evitar bold pesado e manter a quebra de linha **intencional**.

### 4.4 Números

KPIs usam numerais serifados italic desproporcionalmente grandes e descritores sans em escala reduzida, frequentemente alinhados na base (`10x faster`, `60% cheaper`, `100+ projects`, `120+`, `55%`, `3x`, `48%`). O numeral funciona como título visual e não como mero valor em uma tabela.

### 4.5 Tipografia de interface

A navbar, corpo de cards, tabelas de preço, botões, FAQ e notas utilizam sans compacta. Títulos dos serviços são sans maiores e relativamente leves. Textos secundários tendem ao cinza quente, não ao preto saturado. Em cards escuros, as descrições são cinza claro, enquanto o título permanece marfim.

---

## 05. Layout, grid, espaçamentos e geometria

### 5.1 Container mestre

**[OBSERVADO]** Os blocos centrais têm bordas laterais consistentes e largura visual significativamente inferior à viewport inteira. Navbar, grids de cards e rodapé se alinham aproximadamente às mesmas linhas verticais. A faixa de portfólio é propositalmente **full-bleed**, vazando nas laterais.

**[RECOMENDADO]**:

```css
:root {
  --page-max: 1280px;
  --page-gutter: clamp(24px, 4vw, 48px);
  --section-space: clamp(96px, 12vw, 176px);
  --grid-gap: 20px;
  --radius-card: 24px;
  --radius-media: 24px;
  --radius-pill: 999px;
}
.container {
  width: min(calc(100% - (2 * var(--page-gutter))), var(--page-max));
  margin-inline: auto;
}
```

O conteúdo parece ocupar aproximadamente **dois terços a três quartos da largura da captura**, conforme o bloco. Em alguns trechos, o container pode ser ainda mais estreito. A largura de `1280px` é um ponto de partida e precisa ser calibrada.

### 5.2 Layouts recorrentes

- **3 colunas iguais**: KPIs, plans, testimonials; espaçamento horizontal relativamente pequeno.
- **2 colunas 45/55 ou 50/50**: workflow com imagem à esquerda e etapas à direita; serviços com lista à esquerda e imagem à direita.
- **2 colunas assimétricas**: About com headline dominante à esquerda, parágrafo menor à direita.
- **Estudos de caso**: composição assimétrica alternando texto com dois mockups paralelos.
- **Coluna única central**: hero, introduções de seção, FAQ e parte da precificação.

### 5.3 Sistema de espaçamento proposto

| Token | Valor | Uso sugerido |
|---|---:|---|
| `space.1` | 4px | Alinhamento fino |
| `space.2` | 8px | Glifos e badges |
| `space.3` | 12px | Ícone + texto |
| `space.4` | 16px | Conteúdo compacto |
| `space.5` | 20px | Gap cards, itens |
| `space.6` | 24px | Padding compact |
| `space.8` | 32px | Padding de card e blocos |
| `space.10` | 40px | Separações intermediárias |
| `space.12` | 48px | Distância subtítulo/cards |
| `space.16` | 64px | Distância entre grupos |
| `space.20` | 80px | Respiro de seções |
| `space.24` | 96px | Início/fim de seções |
| `space.32` | 128px | Grandes intervalos editoriais |
| `space.40` | 160px | Ritmo de seções longas |

**Atenção:** espaços maiores no site são deliberados e não devem ser reduzidos apenas para economizar rolagem.

### 5.4 Arredondamentos

- Cards grandes: raio aproximado de 20–28px.
- Fotos de destaque / mockups: aproximadamente 24–28px.
- FAQ: 22–28px.
- Botões e tags: `border-radius: 999px`.
- Números do workflow: círculo perfeito.
- Avatares: círculo com recorte limpo.
- Ícones circulares de FAQ e carousel: círculo branco/marfim.

### 5.5 Bordas e sombras

O design depende mais de diferença de superfície do que de sombras. **Não há sombra marcante em cards**. Bordas são raras; destacam principalmente o CTA outline do cabeçalho, mockups internos de plataforma e círculos/brancos em controles. Usar `box-shadow: none` como base. Qualquer sombra adicional deve ser imperceptível.

---

## 06. Navegação / Navbar

### 6.1 Anatomia [OBSERVADO]

- Barra horizontal marfim de ponta a ponta, permanecendo visível nos screenshots em diferentes pontos.
- Área de conteúdo com o mesmo alinhamento do container mestre.
- **Esquerda:** isotipo redondo cor de vinho escuro com brilho branco, seguido da assinatura `Nevra` serifada italic escura.
- **Centro:** links `About us`, `Services`, `Plans`, `Cases`, `FAQs`.
- **Direita:** botão pílula outline `Our services`.
- Conteúdo disposto em uma única linha e verticalmente centralizado.
- Altura visual compacta em relação ao hero.

### 6.2 Interação [INFERIDA]

- Links devem fazer scroll para IDs de seção e respeitar compensação do header (`scroll-margin-top`).
- CTA `Our services` deve direcionar para a seção services.
- Sticky navbar recomendada com `top:0`, `z-index` elevado e cor sólida marfim.
- Estados hover/focus não visíveis: especificar opacidade/transição discreta, com foco acessível.
- Menu mobile **não visível nas fontes**: requer projeto adaptativo separado.

### 6.3 Logo e isotipo

O símbolo é um **disco escuro** com **estrela de quatro pontas/centelha branca** no centro, de pontas alongadas e centro estreito. O wordmark ao lado é serifado italic de contraste marcado. O mesmo símbolo reaparece isoladamente no rodapé, ao lado do microtexto institucional, e como glifo em pequenas etiquetas. Recomenda-se vetor SVG próprio, evitando depender do caractere `✦` caso se busque fidelidade geométrica. **Não é possível garantir a geometria exata do logotipo sem ativo vetorial original.**

---

## 07. Hero

### 7.1 Estrutura [OBSERVADO]

```text
                           [ ✦ ✦ ✦ ]

                 Your content. Powered by AI.
                     Perfected by humans

          From AI videos and images to UGC and ads — we create
                  content that converts, without production limits

              [  Get in touch  ]   [5 avatares sobrepostos]
                                     Trusted by 100+ digital brands

                       (grande espaço em branco)
           [cards fotográficos rolando horizontalmente — full bleed]
```

- **H1**: duas linhas de serif italic; primeira quase preta, segunda vinho.
- **Eyebrow**: miniárea bege com três brilhos escuros, não um texto convencional.
- **Parágrafo**: duas linhas, sans cinza quente, comprimento deliberadamente controlado.
- **Grupo de ação**: CTA sólido vinho quase preto + cluster de retratos circulares e uma linha de prova social.
- **Alinhamento**: tudo centrado, exceto alinhamentos internos do conjunto CTA + avatares.
- **Distribuição vertical**: hero contém grande área vazia abaixo do CTA até o portfólio.

### 7.2 Especificação de reconstrução [RECOMENDADO]

- H1 `max-width` 950px, centralizado, `line-height` muito próximo de 1.
- Eyebrow separado do título por cerca de 24–36px.
- Título ao parágrafo por cerca de 32–40px.
- Parágrafo ao cluster CTA por 24–32px.
- CTA com altura alvo 48–54px, largura ~180px e `border-radius:999px`.
- Avatares de aproximadamente 28–34px com `margin-left` negativa de 6–8px para sobreposição.
- Espaço vazio após o grupo: grande, regulado por `padding-bottom` ou `min-height` (não fixar cegamente a imagem como elemento absoluto).

### 7.3 Componentes únicos

**Mini etiqueta de brilho:** fundo areia; texto/glifo quase preto; raio pequeno de 3–5px, diferente dos cards redondos.  
**Avatares:** 5 retratos, exibidos como uma pilha horizontal; sobreposição suave, com cada pessoa legível.  
**Prova social:** texto curto junto dos avatares, não um bloco de logos e não um depoimento extenso.

---

## 08. Galeria horizontal de imagens / portfólio

### 8.1 Desenho visual

- Sequência horizontal de **cards verticais** de largura similar, com cantos amplos e espaçamento regular.
- Cards excedem os limites horizontais da viewport: primeiro e último aparecem parcialmente cortados.
- Imagens editoriais: modelo com óculos escuros, close de sérum, pérolas/torneira dourada, retratos, produtos, mãos, acessórios.
- Crop com `object-fit:cover` e visualizações variadas do mesmo universo estético.
- Em parte dos cards, **overlay flutuante no canto inferior** com um ícone de olho, seguido de contagens como `2.2M`, `1.8M`, `1.5M`, `540K`, `944K`.
- Chip do contador tem base clara/bege, forma arredondada, conteúdo em coluna ou com ícone central.

### 8.2 Comportamento

**[NÃO COMPROVADO]**: autoplay, loop infinito, drag, hover, abertura de modal ou vídeo. Pela repetição visual e extrapolação lateral, é provável um slider/marquee horizontal. Implementar como `overflow:hidden` e trilho animado opcionalmente, com pausa por `prefers-reduced-motion` e sem inventar autoplay como característica observada.

### 8.3 Tokens propostos

- Item aproximadamente 230–310px de largura CSS dependendo da viewport.
- Proporção dos itens: retratos próximos de 3:4 a 4:5.
- Gap de ~16–22px.
- Raio de ~24px.
- Overlay no canto inferior direito com margem de ~8–12px.
- Sem texto longo sobre a imagem.

---

## 09. Marcas parceiras / logo strip

### 9.1 Elementos

Na primeira grande área escura, abaixo da faixa de fotos, surge uma linha única de marcas em cinza claro sobre fundo quase preto. Visíveis: `GlobalBank`, `Boltshift`, `Lightbox`, `FeatherDev`, `Spherule`; repetem-se parcialmente, sugerindo trilho contínuo. Cada marca tem pictograma e wordmark próprios, em tratamento monocromático.

### 9.2 Regras visuais

- Tudo em **cinza neutro/marfim dessaturado**, nunca multicolorido.
- Altura de marca relativamente uniforme, porém largura variável.
- Espaçamento horizontal generoso (~40–64px sugeridos).
- Alinhamento pelo centro de massa dos lockups.
- Não colocar moldura/card em cada logo.
- Caso seja marquee, duplicar sequência visualmente sem criar conteúdo redundante para leitores de tela.

**Nota:** os nomes demonstrados parecem marcas de template. Não reutilizar como depoimentos ou clientes reais de outro projeto sem autorização e confirmação.

---

## 10. About us — apresentação com KPIs

### 10.1 Cabeçalho assimétrico

- Pequena etiqueta bege com `✦ About us`.
- Título grande serifado italic à esquerda: `We are an AI-first creative agency built for you`.
- Parágrafo à direita em sans cinza-claro: combinação de IA + criatividade humana para produção mais rápida, econômica e escalável.
- O título é visualmente maior, ocupando aproximadamente 55–65% da área horizontal; o texto fica menor e alinhado próximo ao centro vertical do título.
- Fundo profundo escuro, sem gradiente perceptível de interface.

### 10.2 Cards KPI [OBSERVADO]

Três superfícies areia idênticas, com raios amplos:

| Card | Microdescrição superior | Métrica dominante | Complemento |
|---|---|---|---|
| 1 | `Content production compared to traditional teams` | `10x` | `faster` |
| 2 | `No studios, no crews, no production limits` | `60%` | `cheaper` |
| 3 | `Across SaaS, e-commerce and digital brands` | `100+` | `projects` |

**Composição interna:**

1. Três pequenos glifos de brilho/estrela no topo esquerdo; o preenchimento alterna de escuro a claro, como indicador de intensidade.
2. Microdescrição em 2 linhas, sans cinza-marrom.
3. Respiro vertical extremamente amplo.
4. Métrica grande serif italic encostada visualmente na base esquerda.
5. Complemento em sans pequeno, na linha de base do número ou à sua direita, e não abaixo como legenda comum.

**[RECOMENDADO]** altura uniforme ~290–350px, padding interno ~24–28px, `display:flex;flex-direction:column;justify-content:space-between`, `min-width:0` em colunas.

---

## 11. How we work — processo / timeline

### 11.1 Cabeçalho

Eyebrow `✦ How we work`; H2 de duas linhas com `AI` e `creative workflow` em vinho; texto descritivo central em duas linhas: `Meet the people and process behind our AI-powered content`.

### 11.2 Grid principal

- **Coluna esquerda:** imagem editorial ampla de rosto feminino, cantos arredondados, crop ajustado. A imagem ocupa grande parte da altura do processo e é protagonista.
- **Coluna direita:** sequência de 3 etapas empilhadas verticalmente.
- Entre as etapas, uma **linha curva sinuosa** bege/areia, passando atrás dos círculos numerados; mais orgânica do que uma linha reta de timeline.

### 11.3 Item da timeline

Cada etapa é composta por:

- Círculo bege suave com numerador `01`, `02`, `03` serif italic preto.
- Título serif italic escuro à direita, com escala intermediária.
- Descrição sans cinza-marrom, ~2 linhas.
- Espaçamento vertical substancial entre itens, mantendo a linha curva contínua.

| Número | Título | Descrição visível |
|---|---|---|
| 01 | `Research & Prompting` | We analyze your brand and build AI prompts that drive consistent, on-brand results |
| 02 | `Generate & Launch` | We produce and deliver ready-to-use AI content across formats and platforms |
| 03 | `Scale & Improve` | We continuously optimize and scale content to match your growth |

### 11.4 Vetor de conexão

**[OBSERVADO]** Traço bege curvo contínuo de aproximadamente 2–4px percebidos na imagem, sem setas, nós adicionais ou gradiente. **[RECOMENDADO]** usar SVG responsivo posicionado sob os círculos, com curvas Bézier, `fill:none`, `stroke: var(--color-surface-sand)`, `stroke-width:3`, `stroke-linecap:round`. Não usar uma div reta se a intenção for fidelidade.

---

## 12. Plans — cards de precificação

### 12.1 Cabeçalho

Eyebrow `✦ Plans`; H2 central em 2 linhas: `Choose the right AI` / `package for your brand`, com trechos de acento vinho. Sem parágrafo aparente diretamente sob o título nesta captura.

### 12.2 Grid

- **Três colunas iguais** e alinhadas no topo.
- Cards altos de raio ~24px.
- Laterais em branco puro; card central Growth com preenchimento vinho profundo, tornando-se o mais destacado.
- Gaps entre colunas discretos.
- CTA de cada plano ocupa quase toda largura disponível da coluna, com formato pílula.

### 12.3 Conteúdo visto

**Starter**

- Subtítulo: `A fast entry into AI content with ready-to-use visuals tailored to your brand.`
- Preço: `$299/project` (valor em destaque e unidade menor na mesma linha).
- CTA: `Buy now` em fundo escuro e texto claro.
- Itens positivos: `5 AI-generated images or short videos`; `On-brand style & visual direction`; `One content format of your choice`; `3–5 day delivery`; `1 round of revisions`; `Ready-to-use for social or ads`.
- Itens negativos/inativos vistos: `Custom AI prompts for your brand`; `Unlimited revisions`.

**Growth** (card em destaque)

- Subtítulo: `Unlimited AI content and ads delivered monthly and optimized for scale.`
- Preço: `$1,499/month`.
- CTA: `Subscribe` em branco com texto escuro.
- Itens: `Unlimited AI images & videos`; `AI UGC & ad creatives included`; `Performance optimization for ads`; `Custom prompts for your brand`; `1–3 day delivery per request`; `Unlimited revisions`; `Long-form AI video production`; `Custom AI systems & automation`.

**Enterprise**

- Subtítulo: `Fully adapted AI content management systems for your workflows and goals.`
- Preço: `Custom` serif italic.
- CTA: `Book a call` escuro.
- Itens: `Custom AI content systems`; `Flexible delivery & volumes`; `Ongoing optimization & collaboration`.

### 12.4 Anatomia dos cards

```text
┌──────────────────────────────────────────┐
│ Name (sans, tamanho grande)              │
│ Description (sans, 2-3 linhas)           │
│                                          │
│ Price (serif italic) /unit (sans small)  │
│ [           Primary CTA              ]  │
│                                          │
│ ● Feature                                │
│ ● Feature                                │
│ ● Feature                                │
│ ...                                      │
└──────────────────────────────────────────┘
```

**Checks:** círculo sólido escuro com tick claro nos cards brancos; círculo claro com tick escuro no card Growth. No Starter, itens indisponíveis usam círculo cinza com sinal menos e texto cinza desativado. **Não usar emoji como ícone final**; criar vetores consistentes.

### 12.5 Estados de interação [RECOMENDADO]

- Botões com hover sutil por alteração de luminância/opacidade e focus-ring visível.
- Cards inteiros não devem parecer clicáveis se apenas o CTA executa ação.
- Tornar nome, preço e unidade semanticamente distintos.
- Não inventar toggle mensal/anual: **não aparece nas capturas**.

---

## 13. Cases — estudos de caso e mockups sociais

### 13.1 Introdução

Eyebrow `✦ Cases`, título central `We help brands scale` / `content with AI`, com `scale` e a segunda linha em vinho.

### 13.2 Estrutura do caso 1 — NovaSkin

**Composição principal:** texto institucional em coluna à esquerda e dois mockups de interface do Instagram lado a lado à direita. Fundo marfim.

**Bloco textual:**

- `NovaSkin`: título serif italic, tamanho médio-grande.
- `E-commerce Beauty Brand`: etiqueta de segmento em marrom/vinho, sans pequena.
- `CHALLENGE`: microcaption em caixa alta e cinza escuro.
- Explicação: dificuldade em manter a demanda de conteúdo para social e paid ads; produção tradicional lenta e cara.
- `SOLUTION`: microcaption equivalente, cor ainda mais suave.
- Explicação: pipeline de conteúdo por IA com visuais de produto, lifestyle e short-form, alinhados à marca.

**Mockups:**

1. Tela de perfil de rede social com cabeçalho de app, avatar, métricas, botões de seguir, destaques circulares e grade 3 colunas.
2. Tela de post individual com barra superior, nome, retrato da campanha, ícones sociais, métricas de likes, legenda e tab bar inferior.

**Métricas inferiores vistas:** `120+ AI assets delivered`, `55% cost reduction`, com numerais serif italic gigantes.

### 13.3 Estrutura do caso 2 — Atelier Rue

O layout é **espelhado/alternado**: dois mockups sociais à esquerda, bloco textual à direita. Conteúdo textual mostrado:

- `Atelier Rue`.
- `Fashion & Accessories Brand`.
- Desafio: produzir um fluxo contínuo de visuais premium para campanhas sociais e ads, sem custos e lentidão do shooting tradicional.
- Solução: sistema de geração de conteúdo alinhado à marca, com fashion visuals, product shots e lifestyle content, otimizado para Instagram e campanhas pagas.

**Métricas vistas na passagem para fundo escuro:** `3x AI assets delivered` e `48% cost reduction` — redação exatamente como apresentada nas capturas, ainda que o primeiro indicador pareça semanticamente incomum.

### 13.4 Mockup de Instagram — subcomponentes

Para reconstruir fielmente, separar:

- `SocialProfileMockup`: shell branco, cantos redondos, header com seta e ícones, avatar, nome, 3 números grandes, bio, botões secundários, destaques e grid com imagens 3×N, bottom navigation.
- `SocialPostMockup`: shell branco, header com autor, foto editorial, ações de coração/comentário/compartilhar/salvar, paginação pontilhada, likes/caption/comments e nav inferior.
- Imagens coordenadas: close-up de maquiagem, jóias e peças de vestuário.
- Bordas internas finas e divisórias leves típicas de interfaces sociais, mas **o shell externo não tem sombra evidente**.

**Nota de fidelidade:** números de seguidores/posts/likes exibidos nesses mockups pertencem à demonstração visual do template; não devem ser tratados automaticamente como dados reais dos clientes.

### 13.5 Ritmo entre casos

Uma captura mostra a conclusão do segundo caso junto ao início da próxima seção escura. Esse contraste visual deve ser preservado: cases aparenta encerrar sua narrativa na transição para Services, com KPIs de grande porte conectando as seções.

---

## 14. Services — seção com seleção de serviços

### 14.1 Cabeçalho

Fundo vinho escuro; etiqueta `✦ Services`; H2 central em 2 linhas: `We handle everything,` / `so you don’t have to` em serif italic marfim.

### 14.2 Estrutura principal

Uma composição de **duas colunas**, aproximadamente metade para o menu de serviços e metade para painel de mídia:

**Esquerda:** quatro títulos de serviços, em sans clara, grandes, cada qual com índice `01`, `02`, `03`, `04` em microtexto mais claro/escuro. O primeiro item aparece selecionado dentro de um retângulo horizontal grafite/marrom escuro com cantos grandes. Os demais aparecem diretamente sobre o fundo escuro, sem cartão.

**Direita:** fotografia editorial horizontal/paisagem com cantos arredondados e, abaixo, label `ABOUT THE SERVICE` seguido de descrição curta. A imagem retrata modelo com óculos escuros e roupa vinho.

### 14.3 Serviços visíveis

1. `AI Prompt Engineering` — ativo na captura.
2. `AI UGC Video Creation`.
3. `AI Ad Creative Pack`.
4. `Brand Style Training for AI`.

Descrição ativa visível: `We create custom AI prompts tailored to your brand’s tone, visual style and content goals. Designed for consistent, repeatable results across all formats.`

### 14.4 Estados e microinterações

**[OBSERVADO]** primeiro item marcado visualmente como ativo. **[INFERIDO]** interface provavelmente de abas/tabs, onde selecionar outro serviço atualiza imagem, título e descrição do painel. Como capturas não mostram alternância, documentar como **interação recomendada**, não comprovada.

**[RECOMENDADO]** usar `role=tablist` / `role=tab` / `role=tabpanel` apenas se houver efetiva interação de alternância; senão usar lista comum. Área clicável com padding generoso (~24px), raio ~20–24px e transição rápida sem deslocamentos exagerados.

### 14.5 Conteúdo visual

- Títulos da lista em sans, não na serifada usada para headlines.
- Números minúsculos colocados à direita/superior da linha do título, com baixa opacidade.
- O item ativo recebe fundo marrom-grafite, quase sem borda.
- Descrição tem uma label uppercase pequena e um parágrafo de 2 linhas, em cinza claro.
- Fotografia provavelmente deve trocar com o item selecionado.

---

## 15. Testimonials — depoimentos em carrossel

### 15.1 Cabeçalho e navegação

Etiqueta `✦ Testimonials`; título `Loved by modern brands` serif italic claro, uma linha; subtítulo sans `See what our clients are saying.`. Abaixo, no canto superior direito do trilho de cards, **dois botões circulares claros** com setas de anterior/próximo.

### 15.2 Três cards visíveis

Cards areia com altura uniforme, bordas arredondadas e bastante espaço vazio no meio. Cada um possui:

- Avatar circular no topo esquerdo.
- Ícone de **aspas duplas gigantes e pálidas** no topo direito.
- Nome em sans grande.
- Função/segmento em sans pequena marrom/vinho.
- Depoimento em sans pequena, **ancorado visualmente na parte inferior**, não colado no nome.

| Pessoa apresentada | Função | Trecho observado |
|---|---|---|
| Alex Fran | Founder, SaaS startup | We went from slow, manual production to a fast, AI-powered workflow that actually delivers results. |
| Daniel Ramos | Growth Lead, DTC brand | We replaced traditional UGC production with AI videos and saved weeks of work. The quality and speed are unmatched. |
| Sofia Kim | Marketing Manager, E-commerce | The AI ad creatives performed better than expected. Fast delivery, great communication and content. |

### 15.3 Indicador de página

Três pequenos pontos sob os cards, centralizados; primeiro aparente ativo em marfim, demais cinza/vinho dessaturado. **[RECOMENDADO]** carrossel paginado de 3 itens no desktop, com indicadores e setas sincronizados; não afirmar quantidade total de depoimentos a partir dos 3 dots sem testar a página.

### 15.4 Implementação responsiva proposta

- Desktop: 3 cards visíveis.
- Tablet: 2 cards, com slide acessível.
- Mobile: 1 card, setas e dots funcionais; evitar que o texto corte.
- `aria-label` em setas e status de slide; não manter foco preso no carrossel.
- Se autoplay existir, pausar por hover/foco, e respeitar movimento reduzido. **Autoplay não é comprovado.**

---

## 16. FAQ — acordeão

### 16.1 Estrutura [OBSERVADO]

Seção marfim, bastante espaço livre acima, etiqueta `✦ FAQs`, H2 central `Frequently Asked` / `Questions`, com segunda linha vinho. Sob o cabeçalho, **coluna central mais estreita** que a seção de pricing, contendo quatro perguntas, cada uma em um retângulo bege com raio grande.

### 16.2 Perguntas exatamente visíveis

1. `How does AI content work?`
2. `Will the content match our brand style?`
3. `How fast can we get our content?`
4. `Is AI content suitable for ads and social media?`

### 16.3 Anatomia de item

```text
┌──────────────────────────────────────────────────────┐
│ How does AI content work?                        ( + )│
└──────────────────────────────────────────────────────┘
```

- Label à esquerda em sans média, sem serif e sem bold exagerado.
- Botão circular branco à direita, com ícone fino de `+` preto central.
- Fundo areia; raio ~22–28px.
- Gap entre linhas ~16–20px.
- Linha de FAQ com altura aproximada 64–76px, a depender da escala.
- Largura estimada ~620–760px em CSS desktop.

### 16.4 Comportamento recomendado — não visto aberto

Como nenhum print mostra o estado expandido, **não há base para transcrever respostas, confirmar se múltiplos itens abrem juntos, medir padding expandido ou afirmar que o + vira −.** Para implementação, sugerir:

- `<button aria-expanded>` com resposta vinculada por `aria-controls`.
- Alternar `+` para `−` ou rotacionar ícone, mantendo consistência.
- Expansão vertical suave, sem animação que corte conteúdo.
- Manter painel aberto no mesmo fundo areia; separar texto com 12–20px do título.
- Para conteúdo, redigir respostas posteriormente com a equipe — não inventar como se tivessem sido capturadas.

---

## 17. Footer

### 17.1 Layout superior

Rodapé marfim, sem divisor escuro evidente, organizado em aproximadamente **quatro zonas**:

**Coluna institucional à esquerda:** isotipo circular com estrela clara; tagline em duas linhas `AI that works.` / `Content that performs.`; botão sólido escuro `Book a call`.

**Coluna Navigate:** `About us`, `Services`, `Plans`, `Cases`, `FAQs`.

**Coluna Connect:** `Instagram`, `LinkedIn`, `Twitter`.

**Coluna Legal:** `Privacy Policy`, `Terms of Service`.

Títulos das colunas em sans maior que os links, pretos, de peso não muito alto; links em sans pequenos, cinza-marrom. Espaçamento vertical uniforme.

### 17.2 Wordmark decorativo e copyright

Na base direita, uma **enorme palavra `nevra` em serif italic**, muito pálida (bege de baixa ênfase), parcialmente integrada ao limite inferior. Ela funciona como elemento editorial de fundo e escala monumental, não como uma segunda navbar.

No canto inferior esquerdo aparece `© 2026 Built in Framer` em texto pequeno cinza quente. É crédito do template/site de referência: não transportar automaticamente para um novo projeto.

### 17.3 Recomendações

- Links utilizam agrupamentos semânticos com `<nav aria-label>` quando apropriado.
- Wordmark gigante deve ser decorativo para leitor de tela (`aria-hidden=true`) se repetição de marca.
- CTA com bom contraste e área de toque adequada.
- Garantir que o wordmark não cause overflow horizontal em telas pequenas.

---

## 18. Botões — catálogo de variantes

| Variante | Aparência | Contexto |
|---|---|---|
| `button.primary` | Pílula vinho quase preto, texto marfim | Hero `Get in touch`, rodapé `Book a call` |
| `button.outline` | Pílula transparente/marfim, borda escura ~1px, texto escuro | Navbar `Our services` |
| `button.dark` | Pílula preto/vinho quase preto, texto branco | Starter `Buy now`, Enterprise `Book a call` |
| `button.light` | Pílula branca, texto preto | Growth `Subscribe` |
| `button.icon.circle` | Disco bege/branco com ícone traço escuro | Setas de testimonials, + FAQ |
| `button.social` | Pequenos retângulos com borda cinza arredondada | Elementos internos dos mockups Instagram |

### 18.1 Dimensões propostas

- CTAs do hero/navbar: altura ~44–52px, padding horizontal ~28–36px.
- Pricing: altura ~44–52px, largura `100%` do card descontando padding.
- Footer: pílula com largura aproximada 160–190px.
- Botão círculo testimonial: diâmetro ~40–48px.
- Botão círculo FAQ: diâmetro ~38–44px.
- `border-width:1px` no botão outline.
- Hover: mudança suave de cor, sem expansão escala grande; `transition: background-color 180ms ease, color 180ms ease, border-color 180ms ease`.
- Focus: outline visível de 2px com offset; não depender apenas de cor.

---

## 19. Badges, ícones, vetores e ornamentos

### 19.1 Badges / Eyebrows

Usados antes de seções: `About us`, `How we work`, `Plans`, `Cases`, `Services`, `Testimonials`, `FAQs`. A aparência é a de **uma etiqueta minúscula em bege** com glifo de estrela/centelha à esquerda, texto sans muito pequeno e canto levemente arredondado. Não são grandes chips ou tags com caixa alta generalizada.

### 19.2 Família de ícones

- **Centelha / 4-point star:** logo, etiquetas e topo de KPI.
- **Olho:** métrica visual em cards do portfólio.
- **Círculo check:** features disponíveis nos planos.
- **Círculo minus:** features indisponíveis no plano Starter.
- **Plus fino:** acordeão FAQ.
- **Chevron/setas horizontais:** navegação testimonials.
- **Aspas duplas enormes:** fundo decorativo em depoimentos.
- **Ícones Instagram:** seta voltar, sino, menu, heart, chat, airplane/share, bookmark, home, search, plus, reels/tab, perfil e similares dentro dos mockups.
- **Linha Bézier do processo:** percurso entre três etapas.
- **Três dots:** paginação testimonials.

### 19.3 Estilo vetorial

- Ícones de interface em traço fino a médio (~1.5–2px).
- Ícones funcionais de preenchimento simplificado em check/status.
- Sem sombras internas ou contornos externos pesados.
- Cores monocromáticas por superfície: escuro sobre marfim, claro sobre vinho, areia em ornamentos de fundo.
- As aspas têm escala bem superior à do texto, mas baixo contraste para não competir.

---

## 20. Fotografia, direção de arte e proporções

### 20.1 Direção fotográfica

**Moda/beleza premium**: retratos femininos, close-up de pele e maquiagem, produtos cosméticos e acessórios. O look combina iluminação editorial controlada, pele nítida com textura natural, maquiagem clean-glam, fundos neutros/avermelhados, cortes muito próximos e objetos aspiracionais.

**Características vistas:**

- Retratos em close, com rosto ocupando grande parte do frame.
- Tons vinho, nude, champanhe e off-white nos cenários.
- Pele com reflexo especular suave.
- Mãos e produtos entrando pelo enquadramento.
- Acessórios como pérolas, metal dourado, óculos e joalheria.
- Em contraste com essa riqueza da imagem, UI lisa e minimalista.

### 20.2 Regras de crop

- Cards de portfólio: retrato vertical, `object-fit:cover`.
- Imagem workflow: composição aproximadamente quadrada/paisagem curta, crop central de rosto.
- Painel services: fotografia paisagem, com recorte horizontal sem esticar o sujeito.
- Imagens dentro de mockups de social: grade quadrada e post vertical.
- `object-position` deve ser ajustado por imagem, não fixado cegamente em `center`.
- **Nunca adicionar texto editorial dentro das fotos** quando a interface já contém o texto fora delas, exceto os overlays próprios dos mockups sociais.

### 20.3 Tratamento e qualidade

Recomenda-se material de alta qualidade, compressão moderna (AVIF/WebP), carga responsiva (`srcset`) e reservação do `aspect-ratio` para evitar saltos de layout. Usar alternativas textuais para imagens informativas e `alt=""` em imagens genuinamente decorativas.

---

## 21. Hierarquia de conteúdo / padrões de redação

### 21.1 Estrutura de seção

`Eyebrow (micro)` → `Headline editorial (hero)` → `Descrição curta (opcional)` → `Demonstração visual ou componente funcional` → `Prova social/métrica/CTA quando necessário`.

### 21.2 Tom de voz

- Direto, premium, confortável com termos de marketing digital.
- Ênfase em `AI`, `content`, `brands`, `scale`, `creativity` e `performance`.
- Frases curtas com benefício concreto: rapidez, menor custo, escala, adequação à marca.
- Sem parágrafos longos na landing page.
- Em geral, título = promessa aspiracional; corpo = racional operacional.
- Métricas = evidência visual condensada.

### 21.3 Marcação semântica sugerida

- Um `<h1>` no hero.
- Um `<h2>` por bloco maior.
- `<h3>` para nomes de planos, services e cases, conforme contexto.
- Eyebrows como `<span>`/`p`, não necessariamente headings.
- Metrics em `data`/`dl` quando semanticamente relevante.
- FAQ com headings e botões expansíveis, não divs genéricas clicáveis.

---

## 22. Sistema de componentes — arquitetura sugerida

```text
App
├── SiteHeader
│   ├── BrandMark
│   ├── DesktopNav
│   ├── HeaderCTA
│   └── MobileNav [proposto]
├── HeroSection
│   ├── SparkleBadge
│   ├── EditorialHeading
│   ├── BodyCopy
│   ├── PillButton
│   └── AvatarSocialProof
├── PortfolioMarquee
│   └── PortfolioMediaCard + ViewCountBadge
├── ClientLogoMarquee
│   └── PartnerBrandLockup
├── AboutSection
│   ├── SectionEyebrow
│   ├── SplitIntro
│   └── MetricCard × 3
├── WorkflowSection
│   ├── CenteredSectionHeading
│   ├── EditorialMedia
│   └── Timeline / TimelineItem × 3 / CurvedConnector
├── PricingSection
│   ├── CenteredSectionHeading
│   └── PricingCard × 3
│       ├── PriceLabel
│       ├── PillButton
│       └── FeatureRow × N
├── CaseStudiesSection
│   ├── CenteredSectionHeading
│   └── CaseStudy × N
│       ├── CaseStudyNarrative
│       ├── SocialProfileMockup
│       ├── SocialPostMockup
│       └── CaseKPI
├── ServicesSection
│   ├── CenteredSectionHeading
│   └── ServiceSelector
│       ├── ServiceTab × 4
│       └── ServiceDetailPanel
├── TestimonialsSection
│   ├── CenteredSectionHeading
│   └── TestimonialCarousel
│       ├── TestimonialCard × 3 visible
│       ├── CarouselArrow × 2
│       └── PaginationDots
├── FAQSection
│   ├── CenteredSectionHeading
│   └── Accordion / AccordionItem × 4
└── SiteFooter
    ├── FooterBrandCTA
    ├── FooterNavColumns
    ├── OversizedWordmark
    └── Copyright
```

### 22.1 Componentes base reutilizáveis

`Container`, `Section`, `SectionEyebrow`, `EditorialHeading`, `BodyText`, `PillButton`, `IconButton`, `RoundedSurface`, `EditorialImage`, `Stat`, `Stack`, `SplitLayout`, `CarouselControls`, `LinkGroup`, `BrandSymbol`.

### 22.2 Princípio de composição

**Reutilizar os estilos, não engessar todos os layouts.** Os mesmos tokens unem About, Plans, Testimonials e FAQ, mas cada seção preserva sua estrutura editorial específica. Tornar tudo um grid genérico de cards sacrificaria a identidade da referência.

---

## 23. Responsividade — especificação inferida para adaptação

**Limite da análise:** todas as capturas são de layout desktop. Não há prova visual de design mobile/tablet. A tabela abaixo é uma **proposta técnica**, não comportamento observado no Framer.

| Faixa | Container | Navbar | Grids | Tipografia |
|---|---|---|---|---|
| `≥1280px` | max-width ~1280px | 3 áreas, 5 links | 3 cards em about/plans/testimonials | Display grande |
| `1024–1279px` | gutters 32–40px | manter se couber | 3 cards com compressão controlada | Display fluido |
| `768–1023px` | gutters 24–32px | reduzir gaps / menu adaptado | 2 colunas ou cards em trilho | Display médio |
| `≤767px` | gutters 20–24px | logo + botão menu | Uma coluna, timeline e cases empilhados | H1 ~44–54px |
| `≤390px` | gutters 16–20px | mobile compacto | Uma coluna sem overflow lateral | H1 ~38–44px |

### 23.1 Diretrizes mobile por seção

- Hero: H1 quebrado em 3–4 linhas quando necessário, CTA e social proof empilháveis, preservar o respiro mas reduzir altura vazia.
- Marquee: manter cards verticais visíveis parcialmente para comunicar continuidade.
- Logos: trilho horizontal monocromático.
- About: título e parágrafo empilhados; KPIs em uma coluna ou trilho horizontal acessível.
- Workflow: imagem acima, 3 etapas abaixo, conexão curva simplificada se não couber.
- Plans: um card por linha, com Growth em destaque; preservar integralmente informações.
- Cases: narrativa seguida de mockups; mockups empilhados ou em área deslizável, nunca minúsculos ilegíveis.
- Services: seletor em lista acima da imagem, conteúdo ativo abaixo.
- Testimonials: 1 cartão por tela ou rolagem suave.
- FAQ: largura plena do container, quebrar labels sem sobrepor plus.
- Footer: colunas reorganizadas, wordmark decorativo dimensionado com `clamp`.

---

## 24. Motion e estados de interface

### 24.1 O que as imagens permitem concluir

Os prints são **estáticos**. Não confirmam duração, easing, scroll reveal, sticky animation, transições de abas, autoplay de carrosséis, hover, dropdown ou modal. Não atribuir ao site propriedades que não foram inspecionadas em execução.

### 24.2 Motion recomendado, coerente com o estilo

| Componente | Sugestão | Duração |
|---|---|---:|
| Botões | Alteração discreta de cor | 150–200ms |
| Link navbar | Cor/opacity | 150ms |
| Accordion | Expandir altura/opacidade | 200–300ms |
| Service selector | Crossfade imagem + conteúdo | 200–350ms |
| Testimonial carousel | Deslizamento horizontal moderado | 350–500ms |
| Marquee de logos | Linear lento, se habilitado | 20–45s por ciclo |
| Marquee de portfólio | Linear lento, se habilitado | 25–50s por ciclo |
| Scroll reveal | Fade/translateY muito curto, opcional | 350–600ms |

**Regra de identidade:** animações devem parecer silenciosas, não tecnológicas/espetaculares. Respeitar `prefers-reduced-motion: reduce` desabilitando movimento contínuo.

### 24.3 Estados mínimos

- `default`, `hover`, `focus-visible`, `active`, `disabled` em botões/links.
- `selected` em serviços.
- `expanded/collapsed` em FAQs.
- `currentIndex` e `canPrev/canNext` no slider, quando não circular.
- Indicadores de loading se ações externas demorarem.

---

## 25. Acessibilidade, UX e qualidade

1. **Hierarquia correta:** H1 único e H2s por seção; não escolher tags com base apenas no visual.
2. **Contraste:** checar textos de cinza claro em cards brancos/bege e legendas no vinho.
3. **Navegação por teclado:** os accordions, abas, setas de carrossel e menu mobile devem funcionar sem mouse.
4. **Hit area:** ícones funcionais devem ter alvo interativo ~44px.
5. **Motion reduction:** parar marquees e evitar reveals obrigatórios para acesso ao conteúdo.
6. **Semântica:** listas de features como `<ul>`, testemunhos com `<blockquote>` quando apropriado.
7. **Imagens:** alternativa textual significativa somente quando agrega informação; mockups complexos podem ter descrição resumida na seção.
8. **Ancoragem:** aplicar `scroll-margin-top` para cabeçalho fixo.
9. **Layout shift:** definir aspect ratios e alturas mínimas pertinentes.
10. **Interação clara:** nem todos os cards devem se comportar como botões se não houver affordance.
11. **Cuidado com conteúdo demonstrativo:** exemplos de métricas e depoimentos não devem ser apresentados como fatos sem validação.
12. **Localização:** se reproduzir em português, prever quebras de linha mais longas e preços em formatos locais sem perder a composição.

---

## 26. Tokens prontos para projeto — JSON

> **Tokens de partida inferidos:** boas aproximações para implementar o estilo, não exportação oficial do Framer.

```json
{
  "name": "Nevra-Inspired-Visual-System",
  "version": "1.0-visual-audit",
  "colors": {
    "canvas": "#F6F0E9",
    "sand": "#EBE2D1",
    "sandAlt": "#ECE2D2",
    "ink": "#110400",
    "inkSoft": "#2B1F1D",
    "burgundy": "#6A1B10",
    "burgundyDeep": "#541407",
    "textSecondary": "#625954",
    "textMuted": "#978D86",
    "white": "#FFFFFF",
    "decorativeMuted": "#D6C9B7"
  },
  "fontFamilies": {
    "display": "Instrument Serif, Cormorant Garamond, Georgia, serif",
    "body": "Inter, Helvetica Neue, Arial, sans-serif"
  },
  "fontStyles": {
    "display": "italic",
    "body": "normal"
  },
  "radii": {
    "sm": "5px",
    "md": "16px",
    "lg": "24px",
    "xl": "28px",
    "pill": "999px"
  },
  "spacing": [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160],
  "layout": {
    "maxWidth": "1280px",
    "gutterDesktop": "48px",
    "gutterMobile": "20px",
    "cardGap": "20px"
  },
  "motion": {
    "quick": "180ms ease",
    "standard": "300ms ease",
    "carousel": "450ms cubic-bezier(0.22, 1, 0.36, 1)"
  }
}
```

---

## 27. Base CSS para implementação

```css
/* Aproximação de implementação; NÃO é código extraído do site. */
:root {
  --nv-canvas: #F6F0E9;
  --nv-sand: #EBE2D1;
  --nv-ink: #110400;
  --nv-ink-soft: #2B1F1D;
  --nv-accent: #6A1B10;
  --nv-accent-deep: #541407;
  --nv-secondary: #625954;
  --nv-muted: #978D86;
  --nv-white: #FFFFFF;
  --nv-display: 'Instrument Serif', 'Cormorant Garamond', Georgia, serif;
  --nv-body: Inter, 'Helvetica Neue', Arial, sans-serif;
  --nv-radius: 24px;
  --nv-pill: 999px;
  --nv-max-width: 1280px;
  --nv-gutter: clamp(20px, 4vw, 48px);
}
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--nv-ink);
  background: var(--nv-canvas);
  font-family: var(--nv-body);
  -webkit-font-smoothing: antialiased;
}
button, a { -webkit-tap-highlight-color: transparent; }
button { font: inherit; }
a { color: inherit; }
:focus-visible { outline: 2px solid var(--nv-accent); outline-offset: 3px; }
.container {
  width: min(calc(100% - 2 * var(--nv-gutter)), var(--nv-max-width));
  margin-inline: auto;
}
.section { padding-block: clamp(96px, 11vw, 168px); }
.section--dark { background: var(--nv-ink); color: var(--nv-canvas); }
.section__eyebrow {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 5px 9px;
  border-radius: 5px;
  background: var(--nv-sand);
  color: var(--nv-ink);
  font: 500 11px/1.2 var(--nv-body);
}
.display-heading {
  margin: 0;
  font-family: var(--nv-display);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(48px, 4.2vw, 72px);
  letter-spacing: -0.035em;
  line-height: 1.04;
}
.display-heading em { color: var(--nv-accent); font-style: inherit; }
.section__intro { text-align: center; }
.section__description { color: var(--nv-secondary); font-size: 16px; line-height: 1.45; }
.button {
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 48px; padding: 12px 30px;
  border: 1px solid transparent;
  border-radius: var(--nv-pill);
  background: var(--nv-ink); color: var(--nv-canvas);
  cursor: pointer; text-decoration: none;
  transition: background-color 180ms ease, color 180ms ease, border-color 180ms ease;
}
.button--outline { background: transparent; color: var(--nv-ink); border-color: var(--nv-ink); }
.button--light { background: white; color: var(--nv-ink); }
.card { border-radius: var(--nv-radius); overflow: hidden; }
.card--sand { background: var(--nv-sand); }
.card--white { background: var(--nv-white); }
.metric {
  display: flex; align-items: baseline; gap: 8px;
}
.metric__number {
  font: italic 400 clamp(56px, 5.2vw, 84px)/1 var(--nv-display);
  letter-spacing: -0.04em;
}
.metric__descriptor { font-size: 14px; color: var(--nv-secondary); }
.pricing-grid, .metrics-grid, .testimonial-grid {
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px;
}
.accordion-item {
  background: var(--nv-sand); border-radius: var(--nv-radius);
  margin-block: 16px;
}
.accordion-trigger {
  width: 100%; border: 0; background: none;
  display: flex; align-items: center; justify-content: space-between;
  gap: 20px; padding: 16px 20px;
  color: inherit; text-align: left; cursor: pointer;
}
.media { display:block; width:100%; height:100%; object-fit:cover; }
section[id] { scroll-margin-top: 96px; }
@media (max-width: 900px) {
  .pricing-grid, .metrics-grid, .testimonial-grid { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

**Importante para fidelidade:** importar/licenciar as fontes escolhidas e testar numa viewport de referência; ajustes finos de tipografia geralmente têm mais impacto do que dezenas de pixels de padding.

---

## 28. Checklist de implementação pixel-conscious

### Branding

- [ ] Fundo marfim consistente em hero, process, plans, cases, FAQ e footer.
- [ ] Preto vinho quase absoluto em About, Services e Testimonials.
- [ ] Wordmark italic e símbolo com estrela de 4 pontas.
- [ ] Cor vinho só em palavras-chave e superfícies prioritárias.

### Tipografia

- [ ] Todos os H1/H2 editoriais em italic serif de alto contraste.
- [ ] Quebras de linha intencionais equivalentes às capturas.
- [ ] Sans de boa legibilidade nos textos funcionais.
- [ ] Métricas e preços com numerais serifados grandes.
- [ ] Corpo não muito pesado, evitar bold generalizado.

### Layout

- [ ] Navbar preserva os 3 grupos e aparece no scroll.
- [ ] Hero tem respiro considerável antes do portfólio.
- [ ] Portfolio gallery é full-bleed e mostra cortes laterais.
- [ ] Cards KPI em 3 colunas, alturas iguais.
- [ ] Workflow mantém a foto + timeline curva.
- [ ] Pricing usa 3 colunas e Growth escuro destacado.
- [ ] Cases alternam posição de mockups e texto.
- [ ] Services usa painel de seleção com mídia associada.
- [ ] Testimonials tem exatamente o tratamento de carrossel, não uma tabela de quotes.
- [ ] FAQ fica mais estreito que a largura total do site.
- [ ] Footer contém wordmark gigante de baixa ênfase.

### Componentes

- [ ] Botões 100% arredondados (pílula) e sem sombras chamativas.
- [ ] Cards com raio amplo e superfícies planas.
- [ ] Badges pequeninos, quase retangulares, com estrela.
- [ ] Círculos de timeline com numerais serifados.
- [ ] Checklist com ticks em círculos sólidos.
- [ ] Plus dentro de disco claro no FAQ.
- [ ] Setas circulares e três dots em Testimonials.
- [ ] Quotes decorativos pálidos dentro dos cards.

### Conteúdo e verificação

- [ ] Não reivindicar dados de template como fatos reais.
- [ ] Não usar textos de respostas FAQ inventados como cópia original.
- [ ] Não afirmar a fonte exata sem verificação técnica.
- [ ] Validar links, CTA, mobile, keyboard e contraste.
- [ ] Reservar espaço para todas as fotos e evitar layout shift.

---

## 29. Mapa de evidências das 13 capturas

| Imagem (horário no nome) | Elementos cobertos |
|---|---|
| 6.51.00 PM | Navbar, hero, headline, CTA, avatares, início da galeria |
| 6.51.06 PM | Fim da galeria, contagens de views, logos, início do About |
| 6.51.09 PM | About completo, 3 cards estatísticos |
| 6.51.13 PM | Transição About → How we work, composição de headline |
| 6.51.15 PM | How we work: foto e timeline de 3 passos |
| 6.51.21 PM | Planos Starter / Growth / Enterprise |
| 6.51.25 PM | Cases: NovaSkin, narrativa, mockups sociais |
| 6.51.27 PM | Métricas NovaSkin, caso Atelier Rue e mockups |
| 6.51.30 PM | Transição Cases → Services, título da seção |
| 6.51.33 PM | Services: lista 4 opções, seleção ativa e mídia |
| 6.51.36 PM | Testimonials: 3 cards, setas e paginação |
| 6.51.39 PM | FAQ: título e 4 itens fechados |
| 6.51.41 PM | FAQ final e footer completo |

---

## 30. O que precisa ser verificado para uma réplica 1:1

**Esta análise é altamente detalhada para uma reconstrução visual, mas não substitui a inspeção do arquivo Framer/CSS.** Para atingir correspondência exata, ainda faltam os dados abaixo:

1. **Fontes reais:** verificar os arquivos carregados e nomes `font-family` computados; compará-los aos candidatos aqui citados.
2. **Cores exatas:** ler `background-color`, `color` e tokens do editor, sem interferência de screenshot/antialiasing.
3. **Unidades CSS reais:** confirmar tamanhos de H1/H2, `max-width`, largura de cards, gaps e `border-radius` no DevTools.
4. **Viewport e zoom:** determinar os pixels CSS efetivos nos prints para calibrar escala.
5. **Ativos originais:** exportar/obter logo em SVG, fotografias, avatares e mockups reais.
6. **Bônus de motion:** verificar comportamento de gallery, logos e transições de service tabs.
7. **FAQ aberto:** inspecionar conteúdo, animação e possibilidade de múltiplos painéis.
8. **Responsividade real:** capturar tablet e mobile, incluindo menu e reflow de cada seção.
9. **Links e integrações:** confirmar destinos de CTAs, política de privacidade e links sociais.
10. **Performance/acessibilidade:** verificar LCP, CLS, navegação por teclado e contraste final.

### Priorização para máxima fidelidade

**P0:** font display correta + background marfim/vinho + medidas gerais do container + quebras de headlines.  
**P1:** proporções das fotos, raios dos cards, espaço entre seções, grid de pricing, mockups.  
**P2:** ícones, glifos, overlap de avatares, conectores SVG, aspas e dots.  
**P3:** hover, animações, pequenos ajustes de tracking e offsets de decoração.

---

## 31. Direção final resumida para handoff

> Construa uma landing page editorial, fashion-tech e premium inspirada na referência Nevra. Use marfim quente `#F6F0E9`, areia `#EBE2D1`, vinho-preto `#110400` e acento marrom-vinho moderado. Combine títulos enormes em serifada italic elegante com uma sans limpa e compacta para interface. Preservar muito espaço negativo, imagens editoriais de beleza e moda, cards grandes suavemente arredondados e botões pílula. Estruture: navbar sticky, hero central, gallery full-bleed, logos, about com KPIs, workflow com timeline curva, pricing 3 colunas com plano central escuro, cases alternados com mockups sociais, services em tabs, depoimentos em carrossel, FAQ em acordeão e footer com wordmark gigante. Evite gradientes chamativos, sombras fortes, excesso de ornamentação e mudanças arbitrárias de padrão entre seções. Teste a composição em desktop e desenvolva responsividade mobile sem perder a hierarquia editorial.

**Fim do documento — auditoria visual de 13 capturas.**

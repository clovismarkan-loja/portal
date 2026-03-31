# Portal do Pesquisador IDOR — Especificação de Estrutura do Site

## Informações do Projeto

| Campo | Valor |
|-------|-------|
| **Cliente** | IDOR — Instituto D'Or de Pesquisa e Ensino (Rede D'Or São Luiz) |
| **Projeto** | Redesign do Portal do Pesquisador |
| **URL atual** | https://portaldopesquisador.idor.org/ |
| **Plataforma** | A definir (WordPress ou HTML estático — primeira versão em HTML navegável para validação) |
| **Público-alvo** | Pesquisadores, colaboradores e alunos do IDOR (uso interno, com acesso público parcial) |
| **Cor primária** | Azul profundo `#01498E` |
| **Cor secundária** | Dourado champanhe `#CDA176` |
| **Tom visual** | Científico, premium, institucional |
| **Portal atual** | https://portaldopesquisador.idor.org/ |
| **Novo site IDOR** | https://www.idor.org/ (referência de identidade visual) |
| **Versão** | 1.0 — Março 2026 |

> **Nota sobre identidade visual:** O Portal do Pesquisador é um site apartado do site institucional do IDOR, porém a identidade visual deve estar alinhada com a do novo site (idor.org) — mesma família tipográfica, paleta de cores institucional, tratamento de imagens e tom visual. O portal deve ser reconhecível como parte do ecossistema digital do IDOR, mesmo sendo um produto independente.

---

## Sobre este documento

Este documento define a **estrutura completa do site** — páginas, templates, tipos de conteúdo, taxonomias, níveis de acesso e wireframes textuais. Serve como base de trabalho para o time de **design** e **desenvolvimento**.

**O que está aqui:**
- Mapa de navegação (sitemap)
- Detalhamento de cada página/template com wireframes
- Custom Post Types e taxonomias WordPress
- Sistema de autenticação e perfis de acesso
- Busca avançada
- Diferenças visuais por tipo de conteúdo
- Sites de referência para o designer

**O que NÃO está aqui:**
- Design visual (cores, fontes, espaçamentos) — será definido pelo designer
- Código-fonte ou especificação técnica de desenvolvimento
- Conteúdo real dos artigos (será migrado do portal atual)

---

## 1. Mapa de Navegação (Sitemap)

```
HOME
├── 🔍 Busca Unificada
│   └── Resultados diferenciados por tipo (Artigo / Oportunidade / Serviço)
│       Filtros: Todos | Artigos | Oportunidades | Serviços | Editais
│
├── 📂 Categorias (15 áreas temáticas)
│   ├── NAPE → lista de artigos
│   ├── TI → lista de artigos
│   ├── Software de Apoio Acadêmico → lista de artigos
│   ├── Agendamento de Salas → lista de artigos
│   ├── Acesso a Publicações Científicas → lista de artigos
│   ├── Inovação e Propriedade Intelectual → lista de artigos
│   ├── Recursos Humanos (RH) → lista de artigos
│   ├── Plataformas IDOR → lista de artigos
│   ├── Editais IDOR → lista de artigos
│   ├── Eventos IDOR → lista de artigos
│   ├── Apoio à Captação de Recursos → lista de artigos
│   ├── Assessoria Científica → lista de artigos
│   ├── Lattes Desk → lista de artigos
│   ├── Editais Externos → lista de artigos
│   └── Apoio à Gestão de Projetos → lista de artigos
│
├── 🎯 Oportunidades (banco pesquisável com filtros)
│   └── Detalhe da Oportunidade (template próprio)
│
├── ⚖️ Compliance e Ética (página estática com accordions)
│
├── 🔬 Open Science / Gestão de Dados (cards + tutoriais)
│
├── 👤 Autenticação
│   ├── Login
│   ├── Cadastro
│   ├── Recuperar Senha
│   └── Minha Conta
│
└── 📞 Fale Conosco
```

---

## 2. Templates / Páginas

O portal requer **8 templates/páginas distintas**, cada uma com estrutura visual própria:

| # | Página | URL padrão | Observação |
|---|--------|-----------|------------|
| 1 | Home | `/` | Landing page com busca + grid de categorias + destaques |
| 2 | Lista de Artigos | `/categoria/{slug}/` | Lista paginada com sidebar |
| 3 | Artigo Individual | `/artigo/{slug}/` | Texto rico + anexos + relacionados |
| 4 | Banco de Oportunidades | `/oportunidades/` | Banco pesquisável com filtros laterais (template diferente de artigos) |
| 5 | Detalhe Oportunidade | `/oportunidade/{slug}/` | Ficha completa da oportunidade |
| 6 | Compliance e Ética | `/compliance/` | Página estática com accordion |
| 7 | Open Science | `/open-science/` | Cards com ícones + links |
| 8 | Auth (Login/Cadastro/Conta) | `/login/` `/cadastro/` `/minha-conta/` | Telas de autenticação |

> **Nota técnica:** A primeira versão será entregue em **HTML navegável** para validação de layout e UX. A integração com WordPress (ou outra plataforma) será definida após aprovação do design.

---

## 3. Detalhamento por Página

### 3.1 HOME (Landing Page)

**URL:** `/`
**Acesso:** Público (com elementos extras para logados)
**Página:** Home

**Objetivo:** Ponto de entrada principal. O pesquisador deve encontrar rapidamente o que precisa via busca ou navegação por categorias.

#### Elementos da página (de cima para baixo):

**a) Header fixo (presente em todas as páginas)**
- Logo IDOR (à esquerda) + texto "Portal do Pesquisador"
- Menu hamburger (mobile) / menu horizontal (desktop)
- Botão "Login" (se não logado) ou avatar/nome do usuário (se logado)
- O header deve ser fixo no topo ao rolar a página

**b) Hero com busca centralizada**
- Título: "Procure informações sobre serviços e plataformas do IDOR" (ou similar)
- Campo de busca grande e centralizado
- Placeholder: "Busque por serviços, artigos, oportunidades, editais..."
- Abaixo do campo: filtros rápidos em formato de pills/tabs: `Todos` | `Artigos` | `Oportunidades` | `Serviços` | `Editais`
- Ao digitar, pode exibir sugestões em tempo real (autocomplete)

**c) Grid de Categorias**
- 15 cards visuais organizados em grade (3-4 por linha no desktop, 2 no mobile)
- Cada card contém:
  - Ícone **único e diferenciado** por área (IMPORTANTE: não usar ícones genéricos iguais como no portal atual)
  - Título da categoria
  - Descrição curta (1 linha)
- As 15 categorias são:
  1. NAPE
  2. TI
  3. Software de Apoio Acadêmico
  4. Agendamento de Salas
  5. Acesso a Publicações Científicas
  6. Inovação e Propriedade Intelectual
  7. Recursos Humanos (RH)
  8. Plataformas IDOR
  9. Editais IDOR
  10. Eventos IDOR
  11. Apoio à Captação de Recursos
  12. Assessoria Científica
  13. Lattes Desk
  14. Editais Externos
  15. Apoio à Gestão de Projetos
- **Nota:** Todas as 15 categorias devem aparecer ativas (no portal atual, 5 estavam com 🚧 "em construção")

**d) Destaques / Editais Recentes**
- Carrossel horizontal com 3-5 oportunidades/editais com prazo próximo
- Se o usuário estiver logado, filtrar por perfil
- Card do carrossel: título + financiador + prazo + badge de status

**e) Artigos Recentes**
- 4-6 cards de artigos mais recentes ou destacados pelo admin
- Card: título + resumo (1-2 linhas) + categoria + data

**f) CTA "Fale Conosco"**
- Banner com texto "Não encontrou o que procura?" + botão "Fale Conosco"

**g) Footer (presente em todas as páginas)**
- Copyright © Instituto D'Or de Pesquisa e Ensino, 2026
- Links institucionais (site IDOR, Rede D'Or)
- Redes sociais (se aplicável)

#### Wireframe textual:

```
+================================================================+
| [Logo IDOR]  Portal do Pesquisador          [≡ Menu]  [Login]  |
+================================================================+
|                                                                 |
|        Procure informações sobre serviços e                     |
|        plataformas do IDOR                                      |
|                                                                 |
|   [________________________________________________________]   |
|   [Todos] [Artigos] [Oportunidades] [Serviços] [Editais]       |
|                                                                 |
+================================================================+
|                                                                 |
|   +----------+  +----------+  +----------+  +----------+       |
|   | 🔬 ícone |  | 💻 ícone |  | 📊 ícone |  | 🏢 ícone |       |
|   |   NAPE   |  |    TI    |  | Software |  |  Salas   |       |
|   | Apoio à  |  | Suporte  |  | de Apoio |  | Agenda-  |       |
|   | pesquisa |  | técnico  |  | Acadêm.  |  | mento    |       |
|   +----------+  +----------+  +----------+  +----------+       |
|                                                                 |
|   +----------+  +----------+  +----------+  +----------+       |
|   | 📚 ícone |  | 💡 ícone |  | 👥 ícone |  | ⚙️ ícone |       |
|   | Publica- |  | Inovação |  |    RH    |  | Plataf.  |       |
|   | ções     |  | e P.I.   |  |          |  |  IDOR    |       |
|   +----------+  +----------+  +----------+  +----------+       |
|                                                                 |
|   ... (+ 7 categorias restantes no mesmo padrão)                |
|                                                                 |
+================================================================+
|                                                                 |
|   EDITAIS E OPORTUNIDADES RECENTES                    [Ver todos]|
|   [◀] [Card Edital 1] [Card Edital 2] [Card Edital 3] [▶]     |
|                                                                 |
+================================================================+
|                                                                 |
|   ARTIGOS RECENTES                                              |
|   +------------------+  +------------------+  +--------------+ |
|   | Como submeter    |  | Acesso a bases   |  | Agendamento  | |
|   | um projeto?      |  | de dados         |  | de salas     | |
|   | NAPE · 15/03     |  | TI · 10/03       |  | Admin · 05/03| |
|   +------------------+  +------------------+  +--------------+ |
|                                                                 |
+================================================================+
|  Não encontrou o que procura?       [Fale Conosco]              |
+================================================================+
|  Footer: © IDOR 2026 | Site Institucional | Rede D'Or          |
+================================================================+
```

---

### 3.2 Página de Categoria (Topic Page)

**URL:** `/categoria/{slug}/` (ex: `/categoria/nape/`)
**Acesso:** Público (conteúdo restrito oculto para não-logados)
**Página:** Lista de Artigos por Categoria

**Objetivo:** Listar todos os artigos de uma área específica. Permitir navegação lateral entre categorias e busca filtrada.

#### Elementos:

**a) Header da categoria**
- Ícone da área (o mesmo usado no card da home)
- Título da categoria (ex: "NAPE")
- Descrição curta da área (1-2 linhas)

**b) Lista de artigos (área principal)**
- Cards verticais empilhados, cada um com:
  - Título do artigo (link clicável)
  - Resumo (2-3 linhas)
  - Data de publicação
  - Tag de nível de acesso: `Público` (verde) ou `🔒 Restrito` (laranja)
- Paginação se mais de 10 artigos
- Se o artigo é restrito e o usuário não está logado: aparece o card com cadeado e mensagem "Faça login para acessar"

**c) Sidebar (à direita no desktop, abaixo no mobile)**
- Campo de busca filtrado por esta categoria
- Subcategorias (se houver)
- "Artigos mais lidos" desta categoria (3-5 links)

#### Wireframe textual:

```
+================================================================+
| [Logo IDOR]  Portal do Pesquisador          [≡ Menu]  [Perfil] |
+================================================================+
| Home > NAPE                                                     |
+================================================================+
|                                                                 |
|   🔬 NAPE                                                      |
|   Núcleo de Apoio à Pesquisa e Ensino — suporte à              |
|   submissão de projetos e documentação institucional.           |
|                                                                 |
+================================================================+
|                                                                 |
| +------------------------------------------+ +---------------+ |
| |                                          | |               | |
| | +--------------------------------------+ | | 🔍 Buscar     | |
| | | Como submeter um Projeto?            | | | nesta         | |
| | | Bem-vindo à área de submissão de     | | | categoria:    | |
| | | Projetos do NAPE. Cadastre-se como   | | | [___________] | |
| | | proponente na Plataforma NAPE...     | | |               | |
| | | 📅 15/03/2026          [Público]     | | | Mais lidos:   | |
| | +--------------------------------------+ | | · Artigo X    | |
| |                                          | | · Artigo Y    | |
| | +--------------------------------------+ | | · Artigo Z    | |
| | | Estruturação de documentos           | | |               | |
| | | Como solicitar apoio na estruturação | | |               | |
| | | de documentos para publicação...     | | |               | |
| | | 📅 10/03/2026       [🔒 Restrito]   | | |               | |
| | +--------------------------------------+ | |               | |
| |                                          | |               | |
| | [< 1  2  3  >]                           | |               | |
| +------------------------------------------+ +---------------+ |
+================================================================+
```

---

### 3.3 Página de Artigo (Article Page)

**URL:** `/artigo/{slug}/`
**Acesso:** Conforme nível definido pelo admin (público / restrito / confidencial)
**Tipo de conteúdo:** Artigo

**Objetivo:** Exibir o conteúdo completo de um artigo com formatação rica, documentos para download e artigos relacionados.

#### Elementos:

**a) Breadcrumbs**
- Home > Categoria > Título do Artigo

**b) Cabeçalho do artigo**
- Título
- Badge de nível de acesso: `Público` / `🔒 Restrito` / `🔐 Confidencial`
- Metadata: área responsável, data de publicação, data da última atualização

**c) Corpo do artigo**
- Rich text completo: parágrafos, listas, tabelas, imagens, links
- Suporte a embed de vídeos (se necessário)

**d) Documentos para download**
- Seção "Documentos" com lista de arquivos anexos
- Cada item: ícone do tipo (PDF/DOC/XLS) + nome do arquivo + tamanho + botão "Download"

**e) Tags**
- Lista de tags clicáveis para filtro (ex: "submissão", "ética", "CONEP")

**f) Feedback**
- "Este artigo foi útil?" com botões [Sim] [Não]
- Dados coletados para analytics/melhoria do conteúdo

**g) Artigos relacionados**
- 3-4 cards de artigos da mesma categoria
- Mesma estrutura de card da listagem (título + resumo + data)

#### Wireframe textual:

```
+================================================================+
| Home > NAPE > Como submeter um Projeto?                         |
+================================================================+
|                                                                 |
|   Como submeter um Projeto?                       [Público]     |
|   ──────────────────────────────────────────────────            |
|   NAPE  ·  Publicado: 15/03/2026  ·  Atualizado: 20/03/2026   |
|                                                                 |
|   Bem-vindo à área de submissão de Projetos do NAPE.           |
|                                                                 |
|   Cadastre-se como proponente na Plataforma NAPE e registre    |
|   seu projeto para avaliação e aprovação prévia pela diretoria |
|   do IDOR.                                                      |
|                                                                 |
|   O credenciamento garante:                                     |
|   • Rastreabilidade institucional                               |
|   • Integração com outras unidades da Rede D'Or                |
|   • Geração de indicadores de pesquisa                          |
|                                                                 |
|   [Clique aqui] para saber mais sobre:                          |
|   • Como submeter um Projeto de Pesquisa                        |
|   • Diretório de Documentos                                     |
|   • Resoluções e Normativas (CONEP)                             |
|                                                                 |
|   ──────────────────────────────────────────────────            |
|   📎 DOCUMENTOS                                                |
|   [PDF] Formulário de Submissão de Projeto (120KB)  [Download]  |
|   [PDF] Manual CONEP - Orientações (2.1MB)          [Download]  |
|   [DOC] Template de Projeto de Pesquisa (45KB)      [Download]  |
|                                                                 |
|   ──────────────────────────────────────────────────            |
|   Tags: submissão · ética · CONEP · projeto · NAPE             |
|                                                                 |
|   ──────────────────────────────────────────────────            |
|   Este artigo foi útil?  [👍 Sim]  [👎 Não]                    |
|                                                                 |
|   ──────────────────────────────────────────────────            |
|   ARTIGOS RELACIONADOS                                          |
|   +------------------+  +------------------+  +--------------+ |
|   | Estruturação de  |  | Afiliação para   |  | FAQ - NAPE   | |
|   | documentos       |  | produções        |  |              | |
|   | NAPE · 10/03     |  | NAPE · 05/03     |  | NAPE · 01/03 | |
|   +------------------+  +------------------+  +--------------+ |
+================================================================+
```

---

### 3.4 Banco de Oportunidades (Opportunities Bank)

**URL:** `/oportunidades/`
**Acesso:** Público (listagem) / Restrito (detalhes de algumas oportunidades)
**Tipo de conteúdo:** Oportunidade

> ⚠️ **NOTA PARA O DESIGNER:** Este é o template de maior diferenciação visual do portal. Deve parecer um **banco de dados pesquisável** (estilo marketplace/job board), NÃO uma lista de artigos. A experiência deve ser claramente diferente da navegação por categorias/artigos.

**Objetivo:** Permitir que pesquisadores encontrem rapidamente editais, grants, bolsas e financiamentos relevantes para sua área, com filtros poderosos.

#### Elementos:

**a) Título e busca**
- Título: "Banco de Oportunidades"
- Campo de busca específico para oportunidades

**b) Filtros laterais (sidebar à esquerda)**
- **Tipo:** checkbox — Edital | Grant | Bolsa | Financiamento
- **Área de pesquisa:** checkbox — Saúde | Biomedicina | Neurociência | Oncologia | Genética | Multidisciplinar
- **Faixa de valor:** checkbox — Até R$50k | R$50k-200k | R$200k-1M | Acima de R$1M
- **Prazo:** checkbox — Em aberto | Próximos 30 dias | Próximos 90 dias | Encerrados
- **Elegibilidade:** checkbox — Pesquisador | Pós-doc | Doutorando | Equipe
- **Origem:** checkbox — IDOR Interno | Nacional | Internacional
- Botão "Limpar filtros"
- Os filtros devem atualizar os resultados em tempo real (AJAX) sem recarregar a página

**c) Lista de resultados (área principal)**
- Cards horizontais, cada um com:
  - **Título** da oportunidade (link para detalhe)
  - **Instituição/Agência** financiadora (ex: FAPESP, NIH, CNPq, IDOR)
  - **Prazo** de inscrição
    - Se prazo < 15 dias: badge vermelha `⚠️ URGENTE`
    - Se encerrado: badge cinza `ENCERRADO`
  - **Valor** estimado (ex: "Até R$200.000" ou "R$8.000/mês")
  - **Área(s)** de pesquisa (tags)
  - **Status:** badge verde `ABERTO` ou cinza `ENCERRADO`
- Ordenação: por data de encerramento (mais próximos primeiro) ou por relevância
- Paginação

#### Wireframe textual — Listagem:

```
+================================================================+
| Home > Oportunidades                                            |
+================================================================+
|                                                                 |
|   🎯 Banco de Oportunidades                                    |
|   [Buscar oportunidades..._________________________________]   |
|                                                                 |
+================================================================+
|                                                                 |
| +-------------------+ +-------------------------------------+  |
| | FILTROS           | |                                     |  |
| |                   | | +--[ABERTO]-------------------------+|  |
| | Tipo:             | | | Edital FAPESP 2026/02             ||  |
| | ☑ Edital          | | | FAPESP · Biomedicina              ||  |
| | ☐ Grant           | | | Até R$200.000                     ||  |
| | ☐ Bolsa           | | | Prazo: 15/04/2026  ⚠️ URGENTE    ||  |
| | ☐ Financiamento   | | +-----------------------------------+|  |
| |                   | |                                     |  |
| | Área:             | | +--[ABERTO]-------------------------+|  |
| | ☑ Saúde           | | | Grant NIH R21 — Neuroscience      ||  |
| | ☐ Biomedicina     | | | NIH · Neurociência                ||  |
| | ☐ Neurociência    | | | Até US$275,000                    ||  |
| | ☐ Oncologia       | | | Prazo: 30/06/2026                 ||  |
| | ☐ Genética        | | +-----------------------------------+|  |
| | ☐ Multidisciplinar| |                                     |  |
| |                   | | +--[ENCERRADO]----------------------+|  |
| | Prazo:            | | | Bolsa IDOR Pós-Doc 2026           ||  |
| | ☑ Em aberto       | | | IDOR Interno · Oncologia          ||  |
| | ☐ Próximos 30 dias| | | R$8.000/mês                      ||  |
| | ☐ Próximos 90 dias| | | Encerrado em 01/03/2026           ||  |
| | ☐ Encerrados      | | +-----------------------------------+|  |
| |                   | |                                     |  |
| | Valor:            | |                                     |  |
| | ☐ Até R$50k       | |                                     |  |
| | ☑ R$50k-200k      | |                                     |  |
| | ☐ R$200k-1M       | |                                     |  |
| | ☐ Acima de R$1M   | |                                     |  |
| |                   | |                                     |  |
| | Elegibilidade:    | |                                     |  |
| | ☐ Pesquisador     | |                                     |  |
| | ☐ Pós-doc         | |                                     |  |
| | ☐ Doutorando      | |                                     |  |
| | ☐ Equipe          | |                                     |  |
| |                   | |                                     |  |
| | Origem:           | |                                     |  |
| | ☐ IDOR Interno    | |                                     |  |
| | ☐ Nacional        | |                                     |  |
| | ☐ Internacional   | |                                     |  |
| |                   | |                                     |  |
| | [Limpar filtros]  | |                                     |  |
| +-------------------+ +-------------------------------------+  |
+================================================================+
```

---

### 3.5 Detalhe da Oportunidade

**URL:** `/oportunidade/{slug}/`
**Acesso:** Público ou Restrito (conforme configuração)
**Tipo de conteúdo:** Oportunidade (detalhe)

**Objetivo:** Exibir todas as informações de uma oportunidade específica, com dados estruturados.

#### Elementos:

**a) Cabeçalho**
- Título da oportunidade
- Badge de status: `ABERTO` (verde) / `ENCERRADO` (cinza)

**b) Resumo rápido (metadata box)**
- Financiador: nome da instituição
- Tipo: Edital / Grant / Bolsa / Financiamento
- Área(s): tags
- Valor: estimativa ou faixa
- Origem: IDOR Interno / Nacional / Internacional

**c) Datas importantes**
- Abertura das inscrições
- Encerramento das inscrições
- Resultado previsto

**d) Descrição completa**
- Rich text com detalhes da oportunidade

**e) Elegibilidade**
- Lista de requisitos (quem pode se candidatar)

**f) Documentação necessária**
- Lista de documentos exigidos para candidatura

**g) Link para inscrição**
- Botão destacado que leva ao formulário/site de inscrição

**h) Contato no IDOR**
- Área/pessoa responsável por orientar pesquisadores interessados
- E-mail de contato

#### Wireframe textual:

```
+================================================================+
| Home > Oportunidades > Edital FAPESP 2026/02                    |
+================================================================+
|                                                                 |
|   Edital FAPESP 2026/02 — Auxílio à Pesquisa       [ABERTO]    |
|   ──────────────────────────────────────────────────            |
|                                                                 |
|   +---------------------------------------------------------+  |
|   | Financiador: FAPESP                                      |  |
|   | Tipo: Edital          Área: Biomedicina, Saúde           |  |
|   | Valor: Até R$200.000  Origem: Nacional                   |  |
|   +---------------------------------------------------------+  |
|                                                                 |
|   📅 DATAS IMPORTANTES                                         |
|   ┌─────────────────────────────────────────────────┐          |
|   │ Abertura:      01/03/2026                        │          |
|   │ Encerramento:  15/04/2026  (em 16 dias)          │          |
|   │ Resultado:     Julho 2026 (previsão)             │          |
|   └─────────────────────────────────────────────────┘          |
|                                                                 |
|   📋 DESCRIÇÃO                                                 |
|   Chamada para projetos de pesquisa na área de biomedicina     |
|   e saúde, com foco em investigações translacionais...         |
|   (texto completo)                                              |
|                                                                 |
|   ✅ ELEGIBILIDADE                                              |
|   • Pesquisadores com doutorado concluído                       |
|   • Vínculo institucional ativo com o IDOR                      |
|   • Não possuir auxílio regular FAPESP vigente                  |
|                                                                 |
|   📎 DOCUMENTAÇÃO NECESSÁRIA                                   |
|   • Projeto de pesquisa (máximo 10 páginas)                     |
|   • CV Lattes atualizado                                        |
|   • Carta de anuência institucional                             |
|   • Orçamento detalhado                                         |
|                                                                 |
|   [➡️  Acessar inscrição na FAPESP]                            |
|                                                                 |
|   ──────────────────────────────────────────────────            |
|   📞 Contato IDOR: NAPE — nape@idor.org.br                    |
+================================================================+
```

---

### 3.6 Compliance e Ética

**URL:** `/compliance/`
**Acesso:** Público
**Página:** Compliance e Ética

**Objetivo:** Centralizar orientações sobre boas práticas de pesquisa, comitês de ética, regulamentações e formulários. Estrutura em accordion expansível.

#### Seções (accordion):

1. **Boas práticas de pesquisa** — Orientações gerais + links para documentos
2. **Comitês de ética (CEP, CONEP)** — O que são, como submeter, prazos
3. **Regulamentações e normativas** — Documentos regulatórios aplicáveis
4. **Formulários para download** — PDFs e templates necessários
5. **Afiliação para produções científicas** — Como afiliar publicações ao IDOR
6. **Links úteis** — Plataforma Brasil, CONEP, CNPq, etc.
7. **FAQ de compliance** — Perguntas frequentes

#### Wireframe textual:

```
+================================================================+
| Home > Compliance e Ética                                       |
+================================================================+
|                                                                 |
|   ⚖️ Compliance, Ética e Integridade na Pesquisa              |
|   ──────────────────────────────────────────────────            |
|                                                                 |
|   [▼] Boas Práticas de Pesquisa                                |
|       O IDOR segue as diretrizes internacionais de boas        |
|       práticas em pesquisa científica, incluindo...            |
|       [PDF] Guia de Boas Práticas (2026)     [Download]         |
|       [PDF] Código de Conduta em Pesquisa    [Download]         |
|                                                                 |
|   [▶] Comitês de Ética (CEP, CONEP)                            |
|   [▶] Regulamentações e Normativas                              |
|   [▶] Formulários para Download                                 |
|   [▶] Afiliação para Produções Científicas                      |
|   [▶] Links Úteis                                               |
|   [▶] FAQ                                                       |
+================================================================+
```

---

### 3.7 Open Science / Gestão de Dados

**URL:** `/open-science/`
**Acesso:** Público (tutoriais) / Restrito (ferramentas internas)
**Página:** Open Science / Gestão de Dados

**Objetivo:** Orientar pesquisadores sobre gestão de dados, repositórios abertos e políticas de ciência aberta.

#### Seções (cards com ícones):

1. **Planos de Gestão de Dados (DMP)** — O que é, templates, exemplos
2. **Repositórios de dados abertos** — Onde e como depositar dados
3. **Boas práticas de Open Science** — Princípios FAIR, pré-registro
4. **Ferramentas e tutoriais** — Softwares, guias passo a passo
5. **Políticas institucionais** — Política de dados do IDOR

**Nota para o designer:** Visual mais moderno que Compliance — orientado a "ferramentas" e "ação". Cards grandes com ícones ilustrativos.

---

### 3.8 Sistema de Autenticação

#### 3.8.1 Login

**URL:** `/login/`
**Acesso:** Público

**Elementos:**
- Logo IDOR centralizado
- Título "Portal do Pesquisador"
- Campo de e-mail
- Campo de senha
- Botão "Entrar" (cor primária)
- Link "Esqueci minha senha" → `/recuperar-senha/`
- Link "Criar conta" → `/cadastro/`
- Design limpo, minimalista, centrado na tela

#### Wireframe textual:

```
+================================================================+
|                                                                 |
|                      [Logo IDOR]                                |
|                 Portal do Pesquisador                            |
|                                                                 |
|                 E-mail:                                          |
|                 [__________________________________]            |
|                                                                 |
|                 Senha:                                           |
|                 [__________________________________]            |
|                                                                 |
|                 [         Entrar         ]                       |
|                                                                 |
|                 Esqueci minha senha                              |
|                 ─────────────────                               |
|                 Ainda não tem conta? Criar conta                 |
|                                                                 |
+================================================================+
```

#### 3.8.2 Cadastro

**URL:** `/cadastro/`
**Acesso:** Público

**Campos do formulário:**
- Nome completo (obrigatório)
- E-mail institucional (obrigatório)
- Senha (obrigatório, com requisitos mínimos)
- Confirmar senha
- Tipo de vínculo (dropdown): Pesquisador | Colaborador | Aluno | Externo
- Área/Departamento (dropdown)
- Unidade (dropdown): IDOR RJ - Botafogo | IDOR SP - Jabaquara | IDOR BA - CBTC | Outra

**Lógica de validação de domínio:**
- E-mail `@idor.org.br` ou `@rededorsaoluiz.com.br` → **cadastro interno**
  - Ativado automaticamente após confirmação de e-mail
  - Acesso a conteúdo público + restrito
- Outros domínios → **cadastro externo**
  - Pode requerer aprovação manual do admin
  - Acesso apenas a conteúdo público

**Após cadastro:** Envio de e-mail de confirmação com link de ativação.

#### 3.8.3 Recuperar Senha

**URL:** `/recuperar-senha/`
- Campo de e-mail
- Botão "Enviar link de redefinição"
- Mensagem de confirmação: "Se o e-mail estiver cadastrado, você receberá um link para redefinir sua senha."

#### 3.8.4 Minha Conta

**URL:** `/minha-conta/`
**Acesso:** Logado

**Seções:**
- Dados pessoais: nome, e-mail (não editável), unidade
- Alterar senha
- Tipo de perfil e nível de acesso (informativo, não editável pelo usuário)

---

## 4. Tipos de Conteúdo e Categorização

### 4.1 Tipos de Conteúdo

| Tipo | Slug | Campos específicos |
|------|------|-------------------|
| **Artigo** | `artigo` | Título, corpo (rich text), categoria, tags, nível de acesso (público/restrito/confidencial), área responsável, data de publicação, data de atualização, anexos (PDFs/DOCs) |
| **Oportunidade** | `oportunidade` | Título, descrição (rich text), tipo (edital/grant/bolsa/financiamento), área de pesquisa, valor estimado, prazo de inscrição, elegibilidade, status (aberto/encerrado), link de inscrição, instituição financiadora, origem (interno/nacional/internacional), datas importantes |
| **Serviço** | `servico` | Título, descrição curta, ícone, área/categoria, link de acesso, ordem de exibição na home |

### 4.2 Categorização / Taxonomias

| Taxonomia | Aplica-se a | Exemplos de termos |
|-----------|------------|-------------------|
| **Categoria** | Artigo, Serviço | NAPE, TI, Software de Apoio Acadêmico, Agendamento de Salas, Acesso a Publicações Científicas, Inovação e Propriedade Intelectual, RH, Plataformas IDOR, Editais IDOR, Eventos IDOR, Apoio à Captação de Recursos, Assessoria Científica, Lattes Desk, Editais Externos, Apoio à Gestão de Projetos |
| **Área de Pesquisa** | Oportunidade, Artigo | Saúde, Biomedicina, Neurociência, Oncologia, Genética, Cardiologia, Imunologia, Multidisciplinar |
| **Nível de Acesso** | Artigo | Público, Restrito, Confidencial |
| **Tipo de Oportunidade** | Oportunidade | Edital Interno, Edital Externo, Grant, Bolsa, Financiamento |
| **Tag** | Artigo, Oportunidade | submissão, ética, CONEP, dados, open science, FAPESP, CNPq, NIH, lattes, publicação |

---

## 5. Níveis de Acesso

### Perfis de usuário

| Perfil | Quem é | Como se identifica | O que pode ver |
|--------|--------|-------------------|----------------|
| **Visitante** (não logado) | Qualquer pessoa | — | Conteúdo marcado como "Público", listagem geral de oportunidades, compliance, Open Science |
| **Pesquisador** | Pesquisador vinculado ao IDOR | E-mail `@idor.org.br` ou `@rededorsaoluiz.com.br` + tipo "Pesquisador" | Público + Restrito (artigos internos, ferramentas, oportunidades detalhadas, editais internos) |
| **Colaborador / Aluno** | Funcionários e alunos do IDOR | E-mail `@idor.org.br` ou `@rededorsaoluiz.com.br` + tipo "Colaborador" ou "Aluno" | Público + Restrito (pode variar por área, configurável pelo admin) |
| **Administrador** | Equipe gestora do portal | Designado manualmente | Tudo + painel admin WordPress (cadastrar artigos, oportunidades, gerenciar usuários, definir níveis de acesso) |

### Como funciona o controle de acesso

- Cada **artigo** tem um campo "Nível de Acesso": Público, Restrito ou Confidencial
- **Público:** visível para todos, mesmo sem login
- **Restrito:** visível apenas para usuários logados com perfil interno (pesquisador, colaborador, aluno)
- **Confidencial:** visível apenas para perfis específicos designados pelo admin (ex: lideranças, comitê de ética)
- Na listagem de artigos, conteúdos restritos aparecem com cadeado 🔒 e mensagem "Faça login para acessar"
- Conteúdos confidenciais não aparecem na listagem para quem não tem acesso

---

## 6. Busca Avançada (Relevanssi)

### Como funciona

- **Campo único** na home que busca em **todos os CPTs** (Artigos + Oportunidades + Serviços)
- Usa o plugin **Relevanssi** para busca inteligente
- Resultados diferenciados visualmente por tipo de conteúdo

### Funcionalidades da busca

| Funcionalidade | Descrição |
|---------------|-----------|
| **Fuzzy matching** | Busca aproximada — encontra resultados mesmo com erros de digitação |
| **Sinônimos** | Configurados pelo admin (ex: "grant" = "financiamento") |
| **Palavras parciais** | Buscar "submis" encontra "submissão" |
| **Ordenação por relevância** | Resultados mais relevantes primeiro |
| **Filtro por tipo** | Tabs: Todos / Artigos / Oportunidades / Serviços / Editais |
| **Filtro por acesso** | Se logado, mostra conteúdo restrito; se não, mostra badge 🔒 |

### Diferenciação visual nos resultados

| Tipo | Ícone | Informações exibidas |
|------|-------|---------------------|
| **Artigo** | 📄 | Título + resumo + categoria + data + badge de acesso |
| **Oportunidade** | 🎯 | Título + prazo + valor + status (Aberto/Encerrado) + área |
| **Serviço** | ⚙️ | Título + área + link direto |

### Wireframe — Resultados de busca:

```
+================================================================+
| Resultados para: "edital biomedicina"                           |
| [Todos (12)] [Artigos (5)] [Oportunidades (6)] [Serviços (1)]  |
+================================================================+
|                                                                 |
|   🎯 Edital FAPESP 2026/02                          [ABERTO]   |
|      FAPESP · Biomedicina · Até R$200k · Prazo: 15/04          |
|                                                                 |
|   📄 Como se candidatar a editais de pesquisa                  |
|      NAPE · Artigo · 10/02/2026                    [Público]    |
|                                                                 |
|   🎯 Grant NIH R21 — Neuroscience                   [ABERTO]   |
|      NIH · Neurociência · Até US$275k · Prazo: 30/06           |
|                                                                 |
|   📄 Orientações para submissão de projetos      [🔒 Restrito] |
|      NAPE · Artigo · 05/01/2026                                 |
|                                                                 |
|   ⚙️ NAPE — Núcleo de Apoio à Pesquisa                        |
|      Serviço · NAPE · [Acessar →]                               |
|                                                                 |
+================================================================+
```

---

## 7. Diferenças Visuais por Tipo de Conteúdo

> ⚠️ **IMPORTANTE PARA O DESIGNER:** Cada tipo de conteúdo deve ter tratamento visual DISTINTO. A experiência de navegar artigos deve ser claramente diferente de navegar oportunidades.

| Aspecto | Artigo | Oportunidade | Serviço |
|---------|--------|-------------|---------|
| **Card na listagem** | Simples: título + resumo + categoria + data | Com badges: título + prazo + valor + status + área | Com ícone: título + descrição + link direto |
| **Página de detalhe** | Texto rico + anexos + artigos relacionados + feedback | Ficha estruturada: requisitos + documentação + link inscrição + datas + contato | Redireciona para categoria ou link externo |
| **Indicadores visuais** | Badge de acesso (Público/Restrito) | Badge de status (Aberto/Encerrado) + badge Urgente | Ícone da área |
| **Tom visual** | Informativo, editorial | Urgente, orientado à ação | Utilitário, funcional |

---

## 8. Sites de Referência para o Designer

Portais de grandes instituições de pesquisa que servem como referência visual e funcional:

| Instituição | URL | O que observar |
|------------|-----|----------------|
| **Leiden University** | researchsupport.universiteitleiden.nl | Portal unificado de suporte à pesquisa: funding, ética, dados, Open Science. Layout limpo e acessível. |
| **Karolinska Institutet** | staff.ki.se/research-support | Staff portal com pesquisa clínica, compliance EU/NIH, inovação. Navegação por categorias de serviço. |
| **Harvard** | research.fas.harvard.edu | Banco de funding com programas internos, busca por disciplina. Design institucional premium. |
| **Stanford** | doresearch.stanford.edu | Portal centralizado: seed funding, GrantForward (20.000+ sponsors), compliance. UX moderna. |
| **MIT** | research.mit.edu | Funding interno (Bose Fellows, HEALS), suporte a pesquisadores. Layout funcional e direto. |
| **Tilburg University** | research.tilburguniversity.edu | Portal de pesquisa com perfis de pesquisadores, publicações, projetos, datasets. |
| **Lund University** | portal.research.lu.se | Busca por pesquisador, publicação, projeto, infraestrutura. Design escandinavo limpo. |

### O que observar nessas referências:
- Como organizam as categorias de serviço na home
- Como diferenciam visualmente artigos informativos vs. oportunidades de funding
- Como estruturam a busca e os filtros
- Tratamento de níveis de acesso (conteúdo público vs. restrito)
- Design responsivo (desktop vs. mobile)
- Iconografia e identidade visual institucional

---

## 9. Observações Finais

- Este documento cobre **apenas a estrutura** — não define cores, fontes, espaçamentos ou componentes visuais específicos. Essas decisões são do designer.
- As **15 categorias** são as mesmas do portal atual (10 ativas + 5 que estavam em construção), agora todas ativas.
- O **Banco de Oportunidades** é a funcionalidade de maior impacto e deve receber atenção especial no design.
- O **controle de acesso por domínio de e-mail** é a forma mais simples e segura de separar usuários internos de externos.
- A **busca unificada via Relevanssi** deve funcionar como ponto central de descoberta — o pesquisador pode encontrar qualquer coisa (artigo, oportunidade, serviço) a partir de um único campo.
- Todo o conteúdo existente no portal atual será **migrado** para a nova estrutura.
- A **primeira entrega** será um **HTML navegável** (todas as páginas clicáveis com conteúdo de exemplo) para validação de layout e UX antes de qualquer integração com CMS.

# Análise do Briefing vs. Portal — 14/05/2026

**Documento de referência:** `BRIEFING-14-5-26.md`
**Ambiente de homologação:** https://clovismarkan-loja.github.io/portal/
**Data da análise:** 14/05/2026

---

## ✅ O que já está implementado

### Arquitetura geral
- **Seção "Serviços para Pesquisadores"** na home (§2.1) — com cards NAPE, TI, Software Acadêmico, Salas, etc.
- **Login obrigatório ao clicar nos cards** quando deslogado (modal de login intercepta — §2.1)
- **NAPE e Plataformas IDOR fora do bloco restrito**, em modo público (§2.1) — `.nape-section` + `.platforms-section`
- **Sinalização "em breve"** nos cards sem conteúdo (Captação, Assessoria, Editais Externos, Gestão) — §2.3
- **Filtros revistos**: removida a barra `.areas-nav` com ícones de todas as páginas (§4.3)

### LPI (§3.1)
- Título correto, descrição da intro, 12 acordeões com subtópicos
- Bloco "Diferenciais do LPI" branco
- CTA "Solicite seu orçamento" com `lpi@idor.org`
- 2 boxes em colunas (Informações recomendadas + Principais solicitações)
- **`form-cadastro.html`** criado com os campos sugeridos pelo Ivanei (descrição, organograma com foto+CV, lista de serviços, fotos dos equipamentos)

### NAPE (§3.2)
- Texto institucional no `nape.html` (banner + intro + box "Atuação do NAPE")
- **4 cards da aba pública** — todos criados:
  - `artigo-nape-fluxo-regulatorio.html` (timeline NAPE→Anuência→Plataforma Brasil→CEP + 2 PDFs)
  - `artigo-nape-etica-e-consentimento.html` (TCLE + Modelo download)
  - `artigo-nape-submissao-passo-a-passo.html` (chevron flow IDOR)
  - `artigo-nape-manual-do-pesquisador.html` (Manual PDF)
- **Artigos NAPE**:
  - `artigo-nape-como-solicitar-apoio-na-estruturacao-de-documentos.html` renomeado para "Modelos de documentos" — 12 downloads (10 DOC + 2 PDF)
  - `artigo-nape-textos-de-apoio.html` com 5 referências bibliográficas (ANVISA, Lei 14.874, Norma 001/2013, Resolução 466, Manual CEP 3.3)
  - `artigo-nape-como-submeter-um-projeto.html` com o passo a passo (Cadastro REDCap + Plataforma)
- Links REDCap reais inseridos (`RHMKLT8NME` cadastro + `T497TDKETE` plataforma)

### Lattes Desk (§3.3)
- `lattes.html` com todo o conteúdo (intro, "O que fazemos", "Fluxo Simplificado", "Compromisso NAPE", CTA REDCap)

### Home (§4.1)
- Vídeo removido (v2/v3/v4)
- Carrossel de eventos no hero (v2/v3/v4)
- Oportunidades urgentes em cima (DAAD, Connections) nos Grants do v3
- Conteúdo do PDF "oportunidades e grants" aplicado nos cards

---

## ⚠️ Pendências / divergências com o briefing

### LPI — itens que ficaram fora
- **Subtópico "Sobre o LPI"** (descrição + equipe + infraestrutura) — não foi criado como subtópico separado
- **Subtópico "Como solicitar acesso aos Serviços e Recursos do LPI"** que deve ser **visível apenas na área logada** — não existe
- **Organograma da equipe** (foto + mini-CV no estilo dos PIs do IDOR) — só está no formulário, não na página
- **Fotos dos equipamentos e infraestrutura** — pendente envio do Ivanei
- **Tabela completa dos ~60 equipamentos** — pendente envio do Ivanei
- Estrutura: o briefing fala em **subtópicos como sub-páginas** dentro do LPI; foram feitos acordeões na mesma página — pode precisar virar páginas separadas

### NAPE
- A briefing fala que **modelos de documentos** e **textos de apoio** ficam na **área logada** ("Acessar área NAPE" §3.2.4) — hoje estão como artigos públicos em `area-nape.html`
- **Filtro do NAPE não está funcionando** (§4.3) — não foi corrigido

### Inovação e Propriedade Intelectual / Open D'Or (§3.4)
- **Não implementado**. Briefing pede 2 subtópicos:
  - "Como solicitar apoio a Projetos de Inovação?" → `opendor@idor.org`
  - "Como solicitar apoio com Propriedade Intelectual?" → `ip@idor.org`
- 3º subtópico "Formulário de Comunicação de Invenção" — pendente do cliente

### Programação, Eventos, Grants, Editais (§3.5)
- Conteúdo de **Programação e Eventos / Editais IDOR** segue genérico/placeholder — Manuelly ainda não enviou referências
- Card de **Editais IDOR** tem 5 itens fictícios — provavelmente serão substituídos pelos editais reais quando chegarem

### Ajustes home (§4.1, §4.2, §4.4)
- **Ícones dos links / dos filtros**: alguns ainda têm ícones — verificar caso a caso
- **Botões clicáveis para mesma página**: não foi consolidado
- **Data nos cards**: ainda presente — não foi removida
- **Áreas e serviços visíveis sem scroll**: dependendo da resolução, o hero ainda ocupa boa parte da tela
- **"Esse azul está na paleta?"** (§4.4): paleta cromática não foi revisitada

### Outros
- **Experiência do pesquisador sem e-mail @idor.org** (§2.5, §4.5) — pendente definição do cliente
- **Variantes da home** (index, v2, v3, v4) — 4 versões. Definir qual é a oficial antes de 09/06

---

## 🎯 Próximas ações sugeridas (em ordem de urgência para 09/06)

1. **Criar páginas do Open D'Or** (Inovação e PI) com os 2 e-mails de contato
2. **Mover "Modelos de documentos" e "Textos de Apoio"** para área NAPE logada
3. **Definir variante oficial da home** (provável v3 ou v4) e descartar as demais
4. **Corrigir filtros do NAPE** (§4.3) ou removê-los
5. **Decidir sobre data nos cards** (§4.2)
6. **Revisar paleta** (§4.4)
7. Aguardar envios pendentes (LPI fotos+equipe, Manuelly Eventos/Grants/Editais, política sem e-mail IDOR)

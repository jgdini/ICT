# ICT — Industrial Chemicals Trading | Website

Site institucional trilíngue (EN / PT-BR / 中文) para a ICT — Industrial Chemicals Trading Co., Ltd.

Publicado via GitHub Pages: https://jgdini.github.io/ict/

## Estrutura

```
en/ pt/ zh/    Home, Who We Are, Products, Services & Solutions, Contact
index.html     detecta idioma do navegador e redireciona
assets/        imagens, logo original, css e js do site
briefing/      briefing original + dados extraídos da apresentação institucional + PDFs de referência
```

## Como visualizar

Não há dependência de build — é HTML/CSS/JS estático. Basta abrir `en/index.html`
(ou `pt/index.html`, `zh/index.html`) direto no navegador, ou servir a pasta com qualquer
servidor estático (ex.: `npx serve .`). Também está publicado ao vivo em
https://jgdini.github.io/ict/.

## Pendências conhecidas

- Logo definitivo (o `assets/Logo.ai` é vetorial e não pode ser lido pelo navegador — o site usa uma marca placeholder até termos um export em SVG/PNG).
- Fotos próprias para os segmentos sem imagem de referência: Ceramics, Metals & Metallurgy, Surface Treatment & Electroplating, Water Treatment, Home & Household Care.
- Endereço e contato oficial de México e Colômbia (marcados como "a confirmar" na página de contato).
- Formulário de contato é apenas visual — falta conectar a um serviço de e-mail/CRM.
- Domínio final `icttradingco.com` ainda não configurado.

Ver [briefing/briefing.md](briefing/briefing.md) e [briefing/company-profile-extracted.md](briefing/company-profile-extracted.md) para o briefing completo e os dados extraídos do material institucional.

> **Nota:** este repositório é público, a pedido do proprietário. `briefing/` contém dados internos (faturamento, fornecedores) — ciente e intencional.

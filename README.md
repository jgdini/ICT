# ICT — Industrial Chemicals Trading | Website

Site institucional trilíngue (EN / PT-BR / 中文) para a ICT — Industrial Chemicals Trading Co., Ltd.

## Estrutura

```
briefing/     briefing original + dados extraídos da apresentação institucional + PDFs de referência
assets/       imagens e logo originais enviados pela ICT (fonte, não usados diretamente pelo site)
src/          código do site (estático, sem build step)
  ├─ index.html         detecta idioma do navegador e redireciona
  ├─ en/ pt/ zh/         Home, Who We Are, Products, Services & Solutions, Contact
  └─ assets/css, js      estilos e comportamento compartilhados
```

## Como visualizar

Não há dependência de build — é HTML/CSS/JS estático. Basta abrir `src/en/index.html`
(ou `src/pt/index.html`, `src/zh/index.html`) direto no navegador, ou servir a pasta `src/`
com qualquer servidor estático (ex.: `npx serve src`).

## Pendências conhecidas

- Logo definitivo (o `assets/Logo.ai` é vetorial e não pode ser lido pelo navegador — o site usa uma marca placeholder até termos um export em SVG/PNG).
- Fotos próprias para os segmentos sem imagem de referência: Ceramics, Metals & Metallurgy, Surface Treatment & Electroplating, Water Treatment, Home & Household Care.
- Endereço e contato oficial de México e Colômbia (marcados como "a confirmar" na página de contato).
- Formulário de contato é apenas visual — falta conectar a um serviço de e-mail/CRM.

Ver [briefing/briefing.md](briefing/briefing.md) e [briefing/company-profile-extracted.md](briefing/company-profile-extracted.md) para o briefing completo e os dados extraídos do material institucional.

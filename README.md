# Daniel Henrique Nutricionista — Landing Page

Landing page profissional desenvolvida para o nutricionista Daniel Henrique, com foco em conversão via WhatsApp, design moderno e otimização para SEO.

![Preview do site](src/assets/images/printDoSite.jpg)

🌐 **[danielhenriquenutri.com.br](https://danielhenriquenutri.com.br)**

---

## Seções

- **Início** — Hero com chamada principal e botão de contato
- **Dor** — Identificação dos problemas do público-alvo
- **Método** — Como funciona o acompanhamento
- **Diferencial** — Comparativo entre dieta comum e acompanhamento personalizado
- **Planos** — Basic, Platinum e Black com carrossel e mensagem personalizada por plano no WhatsApp
- **Transformação** — Resultados que o paciente pode alcançar
- **Quem Sou** — Apresentação e credenciais do nutricionista
- **Depoimentos** — Resultados reais de pacientes
- **CTA Final** — Chamada para ação com urgência
- **Footer** — Links e contato

---

## Tecnologias

- [React 19](https://react.dev/)
- [Vite 8](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/) — animações
- [Lucide React](https://lucide.dev/) — ícones
- CSS por componente (sem framework CSS)
- Google Fonts — Montserrat + Lato
- Deploy via [Vercel](https://vercel.com/)

---

## Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/EduardoDevPy/Landing-page-daniel.git

# Entre na pasta
cd Landing-page-daniel

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Build para produção

```bash
npm run build
```

---

## Estrutura do projeto

```
src/
├── assets/
│   └── images/          # Imagens e logo
├── components/          # Componentes React de cada seção
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Dor.jsx
│   ├── Metodo.jsx
│   ├── Diferencial.jsx
│   ├── Planos.jsx
│   ├── Transformacao.jsx
│   ├── QuemSou.jsx
│   ├── Depoimentos.jsx
│   ├── CtaFinal.jsx
│   ├── Footer.jsx
│   └── WhatsappButton.jsx
├── styles/              # CSS individual por componente
└── App.jsx
```

---

## Funcionalidades

- Menu hamburguer que fecha ao clicar fora ou pressionar `Escape`
- Botão flutuante do WhatsApp com delay de aparecimento
- Mensagem personalizada no WhatsApp para cada plano
- Scroll suave entre seções
- Animações com Framer Motion (respeita `prefers-reduced-motion`)
- Skip-to-content para acessibilidade por teclado
- Lazy loading nas imagens secundárias
- SEO completo: meta tags, Open Graph, JSON-LD, canonical URL
- Imagem de preview ao compartilhar o link no WhatsApp

---

## Deploy

Projeto com deploy automático na Vercel a cada push na branch `main`.  
Domínio configurado via Registro.br apontando para os servidores da Vercel.

---

Desenvolvido por [Eduardo Vieira](https://github.com/EduardoDevPy)

# Lamort Studio 🖤

Site desenvolvido para um estúdio de tatuagem — com foco em portfólio visual, identidade estética e contato direto com o cliente.

**[→ Ver projeto ao vivo](https://lamort-studio.vercel.app)**

---

## Sobre o projeto

A ideia era simples: criar um espaço online que representasse o trabalho do estúdio sem poluição visual. Galeria limpa, navegação direta e acesso rápido ao WhatsApp para quem quiser agendar.

O projeto tem frontend em React e um backend próprio em Node.js que serve as imagens da galeria via API — sem depender de serviços externos para o gerenciamento de fotos.

---

## Funcionalidades

- 🖼 Galeria de trabalhos carregada via API
- 🔄 Carrossel de imagens com navegação entre artes
- 🔍 Modal para visualização ampliada
- 📱 Layout responsivo (desktop e mobile)
- 💬 Botão de contato direto pelo WhatsApp
- 🔗 Links para redes sociais

---

## Stack

**Frontend**
- React
- CSS

**Backend**
- Node.js
- Express
- Multer (upload de imagens)
- FS (leitura local de arquivos)

---

## Como rodar localmente

**Pré-requisitos:** Node.js instalado

```bash
# Clone o repositório
git clone https://github.com/LuigiHub97/Lamort-Studio.git
cd Lamort-Studio
```

**Backend** (roda na porta 5000)
```bash
cd backend
npm install
node server.js
```

**Frontend** (roda na porta 3000)
```bash
cd frontend
npm install
npm start
```

> Para acessar pelo celular na mesma rede, use o IP da máquina no lugar de `localhost` — ex: `http://192.168.0.5:3000`

---

## Estrutura do projeto

```
Lamort-Studio/
├── frontend/        # Aplicação React
├── backend/         # API de galeria
│   └── uploads/
│       └── galeria/ # Imagens armazenadas localmente
└── pages/
    └── api/         # Rotas da API
```

---

## Feito por

[Luigi Scaglione](https://github.com/LuigiHub97) — aberto a feedbacks e sugestões.


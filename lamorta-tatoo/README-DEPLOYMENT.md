# 🚀 Deploy Vercel - Solução

## Problema
O seu app estava usando uma URL hardcoded (`http://192.168.0.5:5000`) que não funciona no Vercel.

## ✅ O que foi feito

1. **Criado `.env.local`** - Para desenvolvimento local (usa `http://localhost:5000`)
2. **Criado `.env.production`** - Para produção no Vercel
3. **Atualizado `useGallery.js`** - Agora lê a URL da variável de ambiente
4. **Criado `vercel.json`** - Configuração do Vercel

## 📋 Próximos passos

### 1️⃣ Deploy do Backend (IMPORTANTE!)
Você precisa fazer deploy do seu backend para um serviço como:
- **Render.com** (recomendado, grátis)
- **Railway.app**
- **Heroku** (pagando)
- **Fly.io**
- **AWS/DigitalOcean**

**Exemplo com Render:**
1. Faça push do seu repo para GitHub
2. Vá para render.com e crie um novo Web Service
3. Conecte seu repositório GitHub
4. Configure:
   - Build command: `npm install` (em backend/)
   - Start command: `npm start`
5. Copie a URL (ex: `https://seu-backend.onrender.com`)

### 2️⃣ Atualizar as URLs de Ambiente

**Em `.env.production`**, troque:
```
REACT_APP_API_URL=https://seu-backend.onrender.com
```

**E em `vercel.json`**, troque todas as ocorrências de `https://seu-backend-url.com` para sua URL real.

### 3️⃣ Deploy no Vercel
```bash
npm install -g vercel
vercel
```

Vercel vai fazer deploy automaticamente.

### 4️⃣ Testar Localmente (opcional)
```bash
npm start  # Usa .env.local com localhost:5000
```

## 🛠️ Configuração CORS do Backend

Se ainda tiver problemas, certifique-se que o backend tem CORS habilitado (já está em server.js):
```javascript
app.use(cors());
```

## 📝 Resumo
- ✅ Frontend: Variáveis de ambiente adicionadas
- ✅ Arquivo vercel.json criado
- ⏳ Backend: Precisa fazer deploy em algum serviço
- ⏳ Atualizar URLs em `.env.production` e `vercel.json`

Depois que o backend estiver deployado, é só atualizar as URLs e fazer deploy novamente!

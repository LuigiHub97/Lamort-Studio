# 🚀 Deploy Render - Guia Completo

## ✅ Arquivos criados automaticamente:
- `render.yaml` - Configuração do Render para backend
- `backend/.npmrc` - Fix para dependências

## 📋 Passo a Passo no Render

### 1. Crie um novo Web Service no Render
1. Vá para https://render.com/dashboard
2. Clique em **New** → **Web Service**
3. Selecione seu repositório GitHub

### 2. Configure com estes valores:
| Campo | Valor |
|-------|-------|
| **Name** | `lamorta-backend` |
| **Environment** | `Node` |
| **Build Command** | `cd backend && npm install` |
| **Start Command** | `cd backend && npm start` |
| **Plan** | `Free` |

### 3. Clique em **Create Web Service**

Render vai ler automaticamente o `render.yaml` e fazer deploy corretamente!

### 4. Após deploy, copie a URL
Será algo como: `https://lamorta-backend.onrender.com`

### 5. Atualize os arquivos com sua URL

**Edite `.env.production`:**
```
REACT_APP_API_URL=https://lamorta-backend.onrender.com
```

**Edite `vercel.json`:**
```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://lamorta-backend.onrender.com/api/:path*"
    }
  ]
}
```

### 6. Deploy do Frontend (Vercel)
```bash
npm install -g vercel
vercel
```

Vercel vai ler `.env.production` automaticamente.

## 🐛 Se der erro no Render:

**Erro: "Exited with status 254"**
- Verifique se os arquivos da pasta `backend/` existem
- Certifique-se que `backend/package.json` tem todas as dependências

**Erro: "Root directory does not exist"**
- O render.yaml está resolvendo isso
- Se mesmo assim der erro, use build command: `cd backend && npm install && npm start`

## ✅ Checklist Final
- [ ] `render.yaml` está na raiz do projeto
- [ ] `backend/.npmrc` foi criado
- [ ] `.env.production` tem sua URL do backend
- [ ] `vercel.json` tem sua URL do backend
- [ ] Frontend deployado no Vercel
- [ ] Backend deployado no Render

## 🔗 Testar após deploy
```
GET https://lamorta-backend.onrender.com/api/test
```
Deve retornar: `{ "message": "API NOVA FUNCIONANDO AGORA" }`

Se funcionar, seu app React consegue fazer chamadas de API!

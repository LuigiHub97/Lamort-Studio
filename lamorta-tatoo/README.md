# Lamort Tattoo Studio

Site desenvolvido para um estúdio de tatuagem com foco em portfólio visual e identidade estética.

A proposta foi criar uma interface simples, com navegação clara e destaque total para as artes, evitando excesso de informação na tela.

---

## Funcionalidades

* Galeria de imagens carregada via API
* Carrousel com navegação entre as artes
* Visualização ampliada em modal
* Layout responsivo (desktop e mobile)
* Contato direto via WhatsApp
* Links para redes sociais

---

## Tecnologias

Frontend:

* React
* CSS

Backend:

* Node.js
* Express
* Multer
* FS (leitura de arquivos locais)

---

## Estrutura

```
frontend/
backend/
```

* frontend: aplicação React
* backend: API responsável pela galeria

---

## Como rodar o projeto

### Backend

```
cd backend
npm install
node server.js
```

Disponível em:

```
http://localhost:5000
```

---

### Frontend

```
cd LAMORTA-TATOO
npm install
npm start
```

Disponível em:

```
http://localhost:3000
```

---

## Acesso via celular

Na mesma rede, utilize o IP da máquina:

```
http://SEU-IP:3000
```

Exemplo:

```
http://192.168.0.5:3000
```

---

## Galeria

As imagens ficam em:

```
backend/uploads/galeria
```

Também é possível enviar imagens via endpoint:

```
POST /api/galeria/upload
```

---

## Objetivo

Construir uma base sólida e simples para um site de estúdio, com possibilidade de evolução para funcionalidades mais completas, como painel administrativo e integração com banco de dados.

---

## Autor

Luigi

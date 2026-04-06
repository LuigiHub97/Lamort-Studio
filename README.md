🖤 Lamort Tattoo Studio
Projeto de site para um estúdio de tatuagem, desenvolvido com foco em identidade visual forte e experiência mais imersiva.

A ideia principal foi fugir de site “cheio de informação” e criar algo mais limpo, onde o conteúdo aparece conforme o usuário interage, deixando o visual em destaque.

🧠 Sobre o projeto
Esse projeto surgiu como prática de front-end, mas acabou evoluindo para algo mais próximo de um projeto real.

Durante o desenvolvimento, trabalhei bastante em:

organização da interface
navegação por seções
consumo de API
ajustes de layout com base em feedback
A principal mudança foi reduzir a quantidade de conteúdo visível na tela e dar mais espaço para o fundo e a identidade visual.

💻 Tecnologias
React
JavaScript
HTML5
CSS3
API REST

⚙️ O que o projeto faz
Navegação por seções (sem recarregar a página)
Galeria dinâmica carregada via API
Modal para visualizar imagens maiores
Navegação por teclado no modal
Layout responsivo
Conteúdo exibido apenas quando necessário (menu lateral + painel)

🔌 API
A galeria consome dados de uma API local:

http://localhost:5000/api/galeria

As imagens são carregadas dinamicamente e exibidas em grid.


📦 Como rodar

git clone https://github.com/LuigiHub97/Lamort-Studio
cd Lamort-Studio
npm install
npm start
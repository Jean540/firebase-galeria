# Galeria de Fotos 📸

Bem-vindo ao repositório da "Galeria de Fotos"! Este projeto é uma aplicação simples desenvolvida com Next.js e Firebase. O objetivo principal foi estudar e entender o funcionamento do Firebase, especialmente no que diz respeito ao upload e exclusão de imagens.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web modernas.
- **Firebase**: Plataforma do Google que oferece diversas ferramentas para desenvolvimento de apps, incluindo Firebase Storage para armazenamento de arquivos.

## Funcionalidades

- **Upload de Imagens**: Suba suas fotos facilmente para o Firebase Storage diretamente pela aplicação.
- **Deleção de Imagens**: Remova arquivos do servidor com apenas alguns cliques.
- **Interface Rápida e Moderna**: Utilizando Next.js para proporcionar uma experiência de usuário fluida.

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js instalado
- Conta no Firebase e um projeto configurado

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/galeria-de-fotos.git
   cd galeria-de-fotos
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure o Firebase:**

   Crie um arquivo `.env.local` na raiz do projeto e adicione suas credenciais do Firebase:

   ```plaintext
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- `pages/`: Contém as páginas da aplicação.
- `components/`: Componentes reutilizáveis da aplicação.
- `lib/`: Configurações e inicialização do Firebase.
- `styles/`: Arquivos de estilo (CSS).

## Contribuindo

Fique à vontade para contribuir com o projeto. Para isso, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch com a sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona minha feature'`.
4. Envie para a sua branch: `git push origin minha-feature`.
5. Abra um pull request no GitHub.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

---

Espero que você aproveite este projeto tanto quanto eu gostei de desenvolvê-lo. Se tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato. 🚀

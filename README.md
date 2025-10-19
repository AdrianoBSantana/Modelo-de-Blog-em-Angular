# 📝 Angular Blog - DIO

<div align="center">

![Angular](https://img.shields.io/badge/Angular-17.0.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Um blog pessoal moderno desenvolvido com Angular 17, demonstrando conceitos fundamentais do framework.

[Demo](https://seu-blog.vercel.app) · [Reportar Bug](https://github.com/AdrianoBSantana/Modelo-de-Blog-em-Angular/issues) · [Solicitar Feature](https://github.com/AdrianoBSantana/Modelo-de-Blog-em-Angular/issues)

</div>

---

## 📋 Sobre o Projeto

Este é um projeto de blog pessoal desenvolvido como parte do curso da Digital Innovation One (DIO). O objetivo é demonstrar conhecimentos em Angular, incluindo componentização, roteamento, serviços e boas práticas de desenvolvimento.

### ✨ Funcionalidades

- ✅ Listagem de artigos em cards
- ✅ Página de detalhes do artigo
- ✅ Sistema de roteamento
- ✅ Componentes reutilizáveis
- ✅ Página 404 personalizada
- ✅ Design responsivo
- ✅ Service para gerenciamento de dados
- ✅ Interfaces TypeScript tipadas

## 🚀 Tecnologias Utilizadas

- **Angular 17** - Framework principal
- **TypeScript** - Linguagem de programação
- **RxJS** - Programação reativa
- **Angular Router** - Gerenciamento de rotas
- **CSS3** - Estilização

## 📁 Estrutura do Projeto

```
blog/
├── src/
│   ├── app/
│   │   ├── components/        # Componentes reutilizáveis
│   │   │   ├── big-card/
│   │   │   ├── small-card/
│   │   │   ├── menu-bar/
│   │   │   └── menu-title/
│   │   ├── pages/             # Páginas da aplicação
│   │   │   ├── home/
│   │   │   ├── content/
│   │   │   └── not-found/
│   │   ├── services/          # Serviços
│   │   │   └── article.service.ts
│   │   ├── models/            # Interfaces e tipos
│   │   │   └── article.model.ts
│   │   ├── data/              # Dados mockados
│   │   │   └── dataFake.ts
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   ├── assets/                # Recursos estáticos
│   └── styles.css            # Estilos globais
└── angular.json
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório
```bash
git clone https://github.com/AdrianoBSantana/Modelo-de-Blog-em-Angular.git
```

2. Navegue até o diretório do projeto
```bash
cd Modelo-de-Blog-em-Angular/blog
```

3. Instale as dependências
```bash
npm install
```

4. Execute o servidor de desenvolvimento
```bash
npm start
```

5. Abra o navegador em `http://localhost:4200/`

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos de build serão gerados no diretório `dist/`.

## 🧪 Testes

```bash
npm test
```

## 🎨 Melhorias Implementadas

### Arquitetura
- ✅ Criação de interfaces TypeScript para tipagem forte
- ✅ Implementação de Service para gerenciamento de dados
- ✅ Separação de responsabilidades (Components, Services, Models)

### Funcionalidades
- ✅ Página 404 personalizada
- ✅ Tratamento de erros
- ✅ Validação de rotas
- ✅ Loading states
- ✅ Dados mais completos e realistas

### Código
- ✅ Padronização de nomenclatura (id vs Id)
- ✅ Uso de RxJS Observables
- ✅ Melhores práticas de Angular
- ✅ Código mais limpo e documentado

### Estilos
- ✅ Estilos globais melhorados
- ✅ Responsividade aprimorada
- ✅ Classes utilitárias

## 📝 Próximos Passos (Roadmap)

- [ ] Migrar para Standalone Components (Angular 17+)
- [ ] Implementar lazy loading de módulos
- [ ] Adicionar sistema de busca
- [ ] Implementar filtros por categoria
- [ ] Adicionar paginação
- [ ] Integrar com API real (Backend)
- [ ] Implementar sistema de comentários
- [ ] Adicionar testes unitários
- [ ] Implementar SEO (meta tags dinâmicas)
- [ ] Adicionar animações
- [ ] Dark mode
- [ ] Internacionalização (i18n)

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## 👤 Autor

**Adriano B. Santana**

- GitHub: [@AdrianoBSantana](https://github.com/AdrianoBSantana)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

## 🙏 Agradecimentos

- [Digital Innovation One](https://www.dio.me/) - Pelo curso e conhecimento
- [Angular](https://angular.io/) - Framework incrível
- [Angular CLI](https://angular.io/cli) - Ferramentas de desenvolvimento

---

<div align="center">
  Desenvolvido com ❤️ por Adriano B. Santana
</div>

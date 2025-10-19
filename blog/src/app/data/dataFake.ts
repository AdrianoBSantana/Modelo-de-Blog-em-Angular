import { Article } from '../models/article.model';

export const dataFake: Article[] = [
  {
    id: "1",
    title: "Sobre mim",
    description: "Desenvolvedor full-stack apaixonado por tecnologia e inovação",
    photoCover: "https://avatars.githubusercontent.com/u/101372228?v=4",
    content: `
      <h2>Olá! 👋</h2>
      <p>Sou um desenvolvedor apaixonado por criar soluções tecnológicas que fazem a diferença.</p>
      <p>Com experiência em desenvolvimento web, trabalho com as mais modernas tecnologias do mercado.</p>
      <h3>Tecnologias que utilizo:</h3>
      <ul>
        <li>Angular</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>HTML5 & CSS3</li>
      </ul>
    `,
    author: "Adriano",
    publishDate: new Date('2024-01-15'),
    category: "Pessoal",
    tags: ["sobre-mim", "desenvolvedor", "portfolio"]
  },
  {
    id: "2",
    title: "Experiências Profissionais",
    description: "Conheça minha trajetória profissional e projetos desenvolvidos",
    photoCover: "https://icons.iconarchive.com/icons/bootstrap/bootstrap/256/Bootstrap-pc-display-icon.png",
    content: `
      <h2>Minha Trajetória 💼</h2>
      <p>Ao longo da minha carreira, tive a oportunidade de trabalhar em diversos projetos desafiadores.</p>
      <h3>Principais Experiências:</h3>
      <ul>
        <li><strong>Desenvolvimento Web:</strong> Criação de aplicações modernas e responsivas</li>
        <li><strong>Angular:</strong> Desenvolvimento de SPAs complexas</li>
        <li><strong>APIs REST:</strong> Integração e desenvolvimento de serviços backend</li>
      </ul>
    `,
    author: "Adriano",
    publishDate: new Date('2024-02-20'),
    category: "Profissional",
    tags: ["experiencia", "carreira", "projetos"]
  },
  {
    id: "3",
    title: "Conhecimentos Técnicos",
    description: "Stack de tecnologias e ferramentas que domino",
    photoCover: "https://icons.iconarchive.com/icons/github/octicons/256/book-24-icon.png",
    content: `
      <h2>Stack Tecnológica 🛠️</h2>
      <p>Estou sempre aprendendo e me atualizando com as últimas tendências do mercado.</p>
      <h3>Frontend:</h3>
      <ul>
        <li>Angular 17+</li>
        <li>TypeScript</li>
        <li>HTML5 & CSS3</li>
        <li>Responsive Design</li>
      </ul>
      <h3>Backend:</h3>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>RESTful APIs</li>
      </ul>
      <h3>Ferramentas:</h3>
      <ul>
        <li>Git & GitHub</li>
        <li>VS Code</li>
        <li>npm/yarn</li>
      </ul>
    `,
    author: "Adriano",
    publishDate: new Date('2024-03-10'),
    category: "Conhecimento",
    tags: ["tecnologias", "skills", "aprendizado"]
  },
  {
    id: "4",
    title: "Projetos Recentes",
    description: "Últimos projetos desenvolvidos e em desenvolvimento",
    photoCover: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    content: `
      <h2>Projetos 🚀</h2>
      <p>Confira alguns dos projetos que desenvolvi recentemente:</p>
      <h3>Angular Blog - DIO</h3>
      <p>Blog pessoal desenvolvido com Angular 17, demonstrando conhecimentos em:</p>
      <ul>
        <li>Componentização</li>
        <li>Roteamento</li>
        <li>Data Binding</li>
        <li>Services</li>
      </ul>
    `,
    author: "Adriano",
    publishDate: new Date('2024-04-05'),
    category: "Projetos",
    tags: ["portfolio", "projetos", "github"]
  }
]

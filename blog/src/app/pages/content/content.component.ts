import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  contentBody: string = "";
  private id: string | null = "0";
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      this.loadArticle(this.id);
    });
  }

  loadArticle(id: string | null): void {
    if (!id) {
      this.router.navigate(['/']);
      return;
    }

    this.isLoading = true;
    this.hasError = false;

    this.articleService.getArticleById(id).subscribe({
      next: (article: Article | undefined) => {
        if (article) {
          this.setValuesToComponent(article);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar artigo:', error);
        this.hasError = true;
        this.isLoading = false;
        // Redirecionar para página 404 após 2 segundos
        setTimeout(() => this.router.navigate(['/404']), 2000);
      }
    });
  }

  setValuesToComponent(article: Article): void {
    this.contentTitle = article.title;
    this.contentDescription = article.description;
    this.photoCover = article.photoCover;
    this.contentBody = article.content || article.description;
  }
}

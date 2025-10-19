import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Article } from '../models/article.model';
import { dataFake } from '../data/dataFake';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  /**
   * Retorna todos os artigos
   */
  getAllArticles(): Observable<Article[]> {
    return of(dataFake);
  }

  /**
   * Busca um artigo específico por ID
   * @param id - ID do artigo
   */
  getArticleById(id: string): Observable<Article | undefined> {
    const article = dataFake.find(article => article.id === id);
    
    if (!article) {
      return throwError(() => new Error(`Artigo com ID ${id} não encontrado`));
    }
    
    return of(article);
  }

  /**
   * Busca artigos por categoria
   * @param category - Categoria do artigo
   */
  getArticlesByCategory(category: string): Observable<Article[]> {
    const articles = dataFake.filter(article => 
      article.category?.toLowerCase() === category.toLowerCase()
    );
    return of(articles);
  }

  /**
   * Busca artigos por termo de pesquisa
   * @param searchTerm - Termo de pesquisa
   */
  searchArticles(searchTerm: string): Observable<Article[]> {
    const term = searchTerm.toLowerCase();
    const articles = dataFake.filter(article =>
      article.title.toLowerCase().includes(term) ||
      article.description.toLowerCase().includes(term) ||
      article.content?.toLowerCase().includes(term)
    );
    return of(articles);
  }
}

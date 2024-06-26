import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-articles',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './news-articles.component.html',
  styleUrl: './news-articles.component.css',
})
export class NewsArticlesComponent {
  joke: string = '';
  constructor(private newsService: NewsService) {}
  fetchNews(): void {
    this.newsService.getNews().subscribe((data: any) => {
      this.joke = data.joke;
    });
  }
}

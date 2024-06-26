import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-articles',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './news-articles.component.html',
  styleUrl: './news-articles.component.css',
})
export class NewsArticlesComponent {
  constructor(private newsService: NewsService) {
    this.newsService.getNews().subscribe((news) => {
      console.log(news);
    });
  }
}

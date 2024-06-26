import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NewsService } from '../news.service';
import { Newsitem } from '../news';

@Component({
  selector: 'app-news-articles',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './news-articles.component.html',
  styleUrl: './news-articles.component.css',
})
export class NewsArticlesComponent implements OnInit {
  joke: string = '';
  categories: string = '';

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe((news: any) => {
      this.joke = news.joke;
      this.categories = news.category;
    });
  }
}

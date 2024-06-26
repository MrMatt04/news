import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsArticlesComponent } from './news-articles/news-articles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsArticlesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'News Angular App';
}

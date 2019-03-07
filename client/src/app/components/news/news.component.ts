import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api/api.service";
import { NewsResponse } from "../../models/news-response";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: NewsResponse;

  constructor(private api: ApiService) { }

  ngOnInit() {
    const data: object = {
      method: 'GET',
      path: '/news',
    };

    this.api.getany(data).subscribe( (response: any) => {
      console.log(response.body);
      this.news = response.body;
    })
  }

  deleteNews(newsId) {
    const data: object = {
      method: 'DELETE',
      path: `/news/${newsId}`,
    };
    this.api.getany(data).subscribe( (response: any) => {
      console.log(response.body);
      this.news.data = this.news.data.filter((news) => news.objectID !== newsId);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { mock_data } from 'src/app/data/mock-data';
import { Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  bigpost: Post = {
    id: "",
    cover_url: "",
    alt_text: "",
    post_title: "",
    post_description: "",
  }
  posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getHomePagePosts(mock_data);
  }

  getHomePagePosts(data: Post[]) {                
    this.bigpost = data[0];
    this.posts = data.slice(1, data.length);
    console.table(this.bigpost)
  }

}

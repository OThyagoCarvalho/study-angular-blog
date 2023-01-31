import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-post',
  templateUrl: './small-post.component.html',
  styleUrls: ['./small-post.component.css'],
})
export class SmallPostComponent implements OnInit {
  @Input()
  postCover: string = '';
  @Input()
  postTitle: string = '';

  constructor() {}
  ngOnInit(): void {
    this.postTitle = this.normalizeTitle(this.hideTitle(this.postTitle));
  }

  //normalize title
  normalizeTitle(title: string): string {
    return title.replace(/ /g, ' ').toLowerCase();
  }

  //hide titles bigger than 50 characters
  hideTitle(title: string): string {
    if (title.length > 40) {
      return title.slice(0, 40) + '...';
    }
    return title;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-post',
  templateUrl: './big-post.component.html',
  styleUrls: ['./big-post.component.css'],
})
export class BigPostComponent implements OnInit {
  @Input()
  postCover: string = '';
  @Input()
  postTitle: string = '';
  @Input()
  postDescription: string = '';

  constructor() {}
  ngOnInit(): void {}

}

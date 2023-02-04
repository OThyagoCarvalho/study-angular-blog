import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mock_data } from 'src/app/data/mock-data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contentCover: string = "";
  contentCoverAlt: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  private id:string = "000"
  
  constructor ( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
   });
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string) {
    const result = mock_data.find((item) => item.id === id);
    if (result) {
      this.contentCover = result.cover_url;
      this.contentCoverAlt = result.alt_text;
      this.contentTitle = result.post_title;
      this.contentDescription = result.post_description;
    } else {
      this.contentCover = "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png";
      this.contentCoverAlt = "404";
      this.contentTitle = "A publicação que você tentou acessar não existe ou está temporariamente indisponível."

    }
  }
}

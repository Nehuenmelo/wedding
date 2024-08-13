import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
@Component({
  selector: 'app-we',
  templateUrl: './we.component.html',
  styleUrls: ['./we.component.scss']
})
export class WeComponent implements OnInit {
  images: string[] | undefined;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '668px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getImages().subscribe((images: string[]) => {
			this.images = images;
		});
  }
}

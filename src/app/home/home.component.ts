import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
    }, 3000);
  }


  loading:boolean = false;
  lockStatus:boolean = true;
  unlock() {
    this.homeService.callApi("on");
    this.lockStatus = false;
  }

  lock() {
    this.homeService.callApi("off");
    this.lockStatus = true;
  }
}

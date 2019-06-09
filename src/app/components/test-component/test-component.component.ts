import { Component, OnInit } from '@angular/core';
import { ConfigProviderService } from './../../../services/config-provider.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor(private configService:ConfigProviderService) { }

  ngOnInit() {
      console.log(this.configService.getMessage());

  }

}

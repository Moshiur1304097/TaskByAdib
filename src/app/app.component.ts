import { Component } from '@angular/core';
import { DataServicesService } from './shared-services/data-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task';
  name ="Moshiur"

  public message="";

}

import { Component } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent {

  public Name = "Marvellous";

  public NewName = " Infosystems";

  public NewString = this.Name.concat(this.NewName);

}


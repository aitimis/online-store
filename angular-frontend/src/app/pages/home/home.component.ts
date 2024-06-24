import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
cols = 3;
category: string | undefined;

  onColumnsCountChange(colsNum: number): void{
    this.cols = colsNum;
    console.log("I'm working and colsNum is: " + colsNum);

  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    console.log("I'm working and NewCategory is: " + newCategory);
  }
}

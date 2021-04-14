import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import { MatSliderModule } from '@angular/material/slider';
import {ThemePalette} from '@angular/material/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  items: Array<any>=[];

  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  formGroup4: FormGroup;
  formGroup5: FormGroup;
  inOptional: boolean=false;

  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  beverages = new FormControl();

  beverageList: string[] = ['Pepsi', 'Coke', 'Sprite', 'Thumbsup', 'Mountain Dew','Fanta' ];

  deserts = new FormControl();

  desertList: string[] = ['Choco Lava Cake', 'Butterscotch Mousse', 'Brownie Fantasy' ];

  genders = new FormControl();

  genderList: string[] = ['Male', 'Female', 'Others' ];


  centered = false;
  disabled = false;
  unbounded = false;


  constructor(private _formBuilder: FormBuilder){}

  

    ngOnInit() {

      this.items=[
        {name: '../../assets/back4 (2).jpg'},
        {name: '../../assets/back5.jpg'},
        {name: '../../assets/back6.jpg'},
        {name: '../../assets/back7.jpg'},
        {name: '../../assets/back8.jpg'},
        {name: '../../assets/back9.jpg'},

    
      ];
      
      this.formGroup1 = this._formBuilder.group({
        firstCtlr: ['']
        
      });

      this.formGroup2 = this._formBuilder.group({
        secondCtlr: ['']
      });   
      
      this.formGroup3 = this._formBuilder.group({
        thirdCtlr: ['']
      }); 

      this.formGroup4 = this._formBuilder.group({
        forthCtlr: ['']
      }); 

      this.formGroup5 = this._formBuilder.group({
        fiveCtlr: ['',Validators.required]
      }); 
    }

    images = ['../../assets/back.jpg','../../assets/back2.jpg','../../assets/back3.jpg'];

}

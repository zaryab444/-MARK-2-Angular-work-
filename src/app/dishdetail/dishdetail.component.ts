import { Component, OnInit, ViewChild } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Comment } from '../shared/comment';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  @ViewChild('fform') feedbackFormDirective;
  formErrors = {
    
    'author': '',
    'comment': '',
                                        
   
  };
  validationMessages = {
    
    'author': {
      'required':      'name is required.',
      'minlength':     'Author Name must be at least 2 characters long.',
      'maxlength':     'Author Name cannot be more than 25 characters long.'
      
    },
    'comment': {
      'required':      'Comment is required.',
      'minlength':     'Comment must be at least 1 characters long.'
      
    },
    
  };
 // orderFormDirective :FormGroup;
  feedbackForm: FormGroup;
  arr: string[];
  comment : Comment;
    dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  
  
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,private fb: FormBuilder
    ) { this.createForm();
     }

  ngOnInit() {
    //const id = this.route.snapshot.params['id'];
   // this.dish = 
   //this.dishservice.getDish(id).subscribe(dish => this.dish = dish);
   this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
   this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
   .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }
  
  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  
  goBack(): void {
    this.location.back();
  }
  createForm() {
    this.feedbackForm = this.fb.group({
     
    
      author: ['', [Validators.required] ],
      comment: ['', [Validators.required ] ], 
      rating: 5
    });
    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

  this.onValueChanged(); // (re)set validation messages now

  }
  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  onSubmit() {
    this.comment = this.feedbackForm.value;
    console.log(this.comment);
    this.feedbackForm.reset({
      
      
      author: '',
      comment: '',
      rating: 5

    });
    this.feedbackForm.reset();
  }
}

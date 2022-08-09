import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;
  isDisabled = true;

  ngOnInit() {
    this.form = new FormGroup({
      // optionA: new FormControl(false),
      // optionB: new FormControl(false),
      // optionBExtra: new FormControl(''),
      // optionCExtra: new FormControl(''),
      text1: new FormControl(''),
      text2: new FormControl(''),
    });
  }
  //   this.optionB.valueChanges.subscribe((checked) => {
  //     if (checked) {
  //       this.optionBExtra.setValidators([
  //         Validators.required,
  //         Validators.minLength(5),
  //         Validators.maxLength(15),
  //       ]);
  //       this.optionCExtra.setValidators([
  //         Validators.required,
  //         Validators.minLength(5),
  //         Validators.maxLength(15),
  //       ]);
  //     } else {
  //       this.optionBExtra.setValidators(null);
  //       this.optionCExtra.setValidators(null);
  //       this.optionBExtra.setValue('');
  //       this.optionCExtra.setValue('');
  //     }
  //     this.optionBExtra.updateValueAndValidity();
  //   });

  //   this.optionA.valueChanges.subscribe((checked) => {
  //     if (checked) {
  //       this.optionCExtra.setValidators([
  //         Validators.required,
  //         Validators.minLength(5),
  //         Validators.maxLength(10),
  //       ]);
  //     } else {
  //       this.optionCExtra.setValidators(null);
  //       this.optionCExtra.setValue('');
  //     }
  //     this.optionCExtra.updateValueAndValidity();
  //   });
  // }

  // get optionA() {
  //   return this.form.get('optionA') as FormControl;
  // }

  // get optionB() {
  //   return this.form.get('optionB') as FormControl;
  // }

  // get optionBExtra() {
  //   return this.form.get('optionBExtra') as FormControl;
  // }

  // get optionCExtra() {
  //   return this.form.get('optionCExtra') as FormControl;
  // }

  // keyPressNumbers(event) {
  //   var charCode = (event.which) ? event.which : event.keyCode;
  //   // Only Numbers 0-9
  //   if ((charCode < 48 || charCode > 57)) {
  //     event.preventDefault();
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  get fc() {
    return this.form.controls;
  }
  onchanges() {
    this.form.valueChanges.subscribe((value) => {
      if (value) {
        this.fc.text1.setValidators([Validators.required]);
      } else {
        this.fc.text1.setValidators(null);
      }
      this.fc.text1.updateValueAndValidity();
    });
  }
  save() {
    let canSave = this.form.valid;
    console.log(canSave);
    if (canSave) {
      this.isDisabled = true;
    }
  }
}

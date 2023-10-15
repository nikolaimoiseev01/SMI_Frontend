import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  constructor(private router: Router) {
  }

  form = new FormGroup({
    search_input: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  submit() {
    this.router.navigate([`search/${this.form.value.search_input}`])
  }
}

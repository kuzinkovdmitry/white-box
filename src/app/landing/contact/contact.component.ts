import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EMenuIds } from 'src/app/enums/menu-ids.enum';

@Component({
  selector: 'wb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public form: FormGroup;
  public menuIds = EMenuIds;

  ngOnInit(): void {
    this.initForm();
  }

  public sendMessage(): void {
    const formData = this.form.value;

  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

}

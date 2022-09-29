import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EMenuIds } from 'src/app/enums/menu-ids.enum';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'wb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public form: FormGroup;
  public menuIds = EMenuIds;

  private successToastMessage = '<div class="toast-icon-block"><i class="icon-success"></i></div> <p class="toast-message-text">Your Message has been sent!</p> <i class="icon-phone toast-close-icon"></i>';
  private errorToastMessage = '<div class="toast-icon-block"><i class="icon-error"></i></div> <p class="toast-message-text">Oops!<br>Something went wrong.<br><span>Please let’s try again.</span></p> <i class="icon-phone toast-close-icon"></i>';

  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.initForm();
  }

  public sendMessage(): void {
    const formData = this.form.value;
    // this.toastrService.success(this.successToastMessage);
    this.toastrService.error(this.errorToastMessage);
  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

}

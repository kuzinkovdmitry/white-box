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
  public isLoading = false;

  private successToastMessage = '<div class="toast-icon-block"><i class="icon-success"></i></div> <p class="toast-message-text">Your Message has been sent!</p> <p class="toast-close-icon">X</p>';
  private errorToastMessage = '<div class="toast-icon-block"><i class="icon-error"></i></div> <p class="toast-message-text">Oops!<br>Something went wrong.<br><span>Please let’s try again.</span></p> <p class="toast-close-icon">X</p>';

  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.initForm();
  }

  public sendMessage(): void {
    this.isLoading = true;
    const formData = this.form.value;
    setTimeout(() => {
      this.toastrService.success(this.successToastMessage);
      // this.toastrService.error(this.errorToastMessage);
      this.form.reset();
      this.isLoading = false;
    }, 4000)
  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

}

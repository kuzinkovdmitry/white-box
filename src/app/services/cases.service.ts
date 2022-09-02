import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  public onCaseChange: Subject<number> = new Subject<number>();

  public emitCaseChange(caseId: number): void {
    this.onCaseChange.next(caseId);
  }

}

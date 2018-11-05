import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()

export class CreditService {

  constructor(private http: HttpClient) {}

  SITEURL = "https://localhost:44388/api/";

  GetCreditorsByTransactionId = (transactionId): Observable<any> => this.http.get<any>(this.SITEURL + 'Credit/GetCreditorsByTransaction/' + transactionId);

}

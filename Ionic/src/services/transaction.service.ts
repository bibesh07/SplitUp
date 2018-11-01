import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class TransactionService {

  constructor(private http: HttpClient) {}

  SaveTransaction(billDetails: any, emails) {
    return this.http.post<any>(
      'https://localhost:44388/api/transaction/SaveTransaction',
      {'Transaction': billDetails, 'emails': emails});
  }
}

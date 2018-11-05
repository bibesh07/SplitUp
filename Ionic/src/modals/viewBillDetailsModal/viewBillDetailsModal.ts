import {Component, OnInit} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import { ModalController} from "ionic-angular";
import {TransactionService} from "../../services/transaction.service";
import {CreditService} from "../../services/credit.service";

@Component({
  templateUrl: 'viewBillDetailsModal.html',
})

export class ViewBillDetailsModal {
  constructor(public viewCtrl: ViewController,
              public _transactionService: TransactionService,
              public navParam: NavParams,
              public _creditSerice: CreditService) {
    this.getBillDetail(this.navParam.get('billId'));
    console.log("I am here");
  }

  billName: any;
  billDetails: any;
  amountPaid: any;
  memo: any;
  purchaseDate: any;
  noOfIndividuals: any;
  totalAmountRemaining: any = 0;
  creditors: any;

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getBillDetail(billId) {
    this._creditSerice.GetCreditorsByTransactionId(billId).subscribe(response => {
      console.log(response);
      this.billDetails = response[0].transaction;
      this.billName = this.billDetails.billName;
      this.amountPaid = this.billDetails.amountPaid;
      this.memo = this.billDetails.memo;
      this.purchaseDate = new Date(this.billDetails.purchaseDate);
      this.purchaseDate = (this.purchaseDate.getMonth()+1) +
        '/'+this.purchaseDate.getDate() + '/' + this.purchaseDate.getFullYear();
      this.noOfIndividuals = this.billDetails.noOfIndividuals;
      response.map(u => {
        console.log(!u.status + " " + u.creditorId + " " + localStorage.getItem('userId'));
        if(!u.status && u.creditorId != localStorage.getItem('userId')) {
          this.totalAmountRemaining += u.amountToPay;
        }
      });

      this.creditors = response;
    })
  }
}

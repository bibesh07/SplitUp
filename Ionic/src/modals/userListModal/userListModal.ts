import {Component} from '@angular/core';
import {AlertController} from "ionic-angular";
import {ViewController} from "ionic-angular";
import {UserService} from "../../services/user.service";
import { NavParams} from "ionic-angular";

@Component({
  templateUrl: 'userListModal.html',
})

export class UserListModal {
  constructor(public alertController: AlertController,
              public viewCtrl: ViewController,
              public _userService: UserService, params: NavParams) {
    this.setEmails();
    this.showEmails = this.allEmails;
    this.billDetails = params.get('billDetails');
  }

  selectedEmails:any = [];
  email: string = "";
  allEmails: any = [];
  showEmails:any = [];
  billDetails:any;

  setEmails = () => {
    this._userService.getAllUsersEmail().subscribe(response => {
      this.allEmails = response;
    });
  }

  setEmailToInput = (email) => {
    this.email = email;
  }

  addEmails = () => {
    if(this.showEmails.find((email) => email == this.email)) {
      this.selectedEmails.push(this.email);
      let indexToDelete = this.showEmails.indexOf(this.email);
      this.showEmails.splice(indexToDelete, 1);
      this.email = "";
    } else {
      this.invalidEmailAlert();
    }
  }

  delete = (chip, email) => {
    this.selectedEmails.splice(chip, 1);
    this.showEmails.push(email);
  }

  invalidEmailAlert = () => {
    let alert = this.alertController.create({
      title: 'Invalid Email',
      subTitle: 'Please enter a valid user email',
      buttons: ["Dismiss"]
    });
    alert.present();
  }

  filterItems = (val) => {
    this.setEmailToInput(val);
    if(this.selectedEmails.length > 0) {
      this.showEmails = this.allEmails.filter(item => !this.selectedEmails.includes(item));
      this.showEmails = this.showEmails.filter(item =>  item.toLowerCase().includes(val.toLowerCase()));
    } else {
      this.showEmails = this.allEmails.filter(item => item.toLowerCase().includes(val.toLowerCase()));
    }
  }

  dismiss = () => {
    this.viewCtrl.dismiss();
  }

  nextStep = () => {
    console.log("Aight");
  }

  goBack = () => {
    this.dismiss();
  }
}

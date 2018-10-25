import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from "ionic-angular";
import { BillDetailsModal } from "../../modals/billDetailsModal/billDetailsModal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  genderIcon: string;
  gender: string;

  history= [
    {'icon': 'checkmark-circle', 'message': 'Amrit Subedi paid $45.89 for Walmart bill of 14th August'},
    {'icon': 'checkmark-circle', 'message': 'Pratikshya Timalsina paid $15.89 for Restaurant bill of 11th September'},
    {'icon': 'add-circle', 'message': 'Sizan Tiwari added you in walmart Bill of total $13.33 on 4th August'},
    {'icon': 'checkmark-circle', 'message': 'Amrit Subedi paid $45.89 for Walmart bill of 14th August'},
    {'icon': 'add-circle', 'message': 'Amrit Subedi added you in Grocery bill of $45.89 as of 14th August'},
  ];

  constructor(public navCtrl: NavController,
              public modalController: ModalController) {
      this.username = localStorage.getItem('fullName');
      this.gender = localStorage.getItem('gender');
      if(this.gender == 'M') {
        this.genderIcon = "https://www.shareicon.net/download/2016/11/09/851666_user_512x512.png";
      } else if (this.gender == 'F') {
        this.genderIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBNKVpuJZE0JcC6XD4rhGVgrIGQcBqDZ805aWiRk_EWZXB6cg";
      } else {
        this.genderIcon = "https://image.flaticon.com/icons/png/512/23/23228.png";
      }
  }

  openModal() {
    let amountModal = this.modalController.create(BillDetailsModal);
    amountModal.present();
  }
}

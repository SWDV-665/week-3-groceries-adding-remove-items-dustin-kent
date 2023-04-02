import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity: 2
    }, 
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    },
  ];

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController) {}

  async removeItem(item: any, index: number) {
    console.log("Removing Item -", item, index);
    const toast = await this.toastCtrl.create({
      message: "Removing Item - " + index + " ...",
      duration: 3000
    });
    toast.present();

    this.items.splice(index,1);
  }

  addItem() {
    console.log ("Adding Item")
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const prompt = await this.alertCtrl.create({
      header: "Add Item",
      message: "Please enter item...",
      inputs: [
        {
          name: "name",
          placeholder: "Name",
        },
        {
          name: "quantity",
          placeholder: "Quantity",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Cancel Clicked");
          }
        },
        {
          text: "Save",
          handler: item => {
            console.log("Saved Clicked", item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

}


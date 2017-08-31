import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from "../../core/auth.service";

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  admin: boolean = false;
  items: FirebaseListObservable<Item[]>;

  showSpinner: boolean = false;


  constructor(private itemSvc: ItemService, public auth: AuthService) { }

  ngOnInit() {
    this.items = this.itemSvc.getItemsList({limitToLast: 5})
    this.items.subscribe(() => this.showSpinner = false)

    //check username and show data if user is admin
    if(this.auth.currentUserDisplayName == "Dwayne Patel" || this.auth.currentUserDisplayName == "Paul Williamsonss"){
      this.admin = true;
    }
  }

  deleteItems() {
    this.itemSvc.deleteAll()
  }



}

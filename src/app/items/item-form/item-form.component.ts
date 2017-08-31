import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';
import { AuthService } from "../../core/auth.service";

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  item: Item = new Item();

  constructor(private itemSvc: ItemService, public auth: AuthService) { }

  ngOnInit() {
  }

  createItem() {
    this.item.name = this.auth.currentUserDisplayName;
    this.item.date = new Date().toDateString();
    this.itemSvc.createItem(this.item)

    this.item = new Item() // reset item
  }
 
   

}

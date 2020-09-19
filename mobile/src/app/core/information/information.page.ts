import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  public items: any = [];
  
  constructor(

  ) {
    this.items = [
      { expanded: false, title:'Protect small children from hazard', message: "Toddlers and small children are very curious- and they love to explore just about everything. Parents of small children " +
      "should put tamper-resistant safety caps on all unused electrical outlets. In addition, all loose cards should be tidied up and put " +
      "out of reach to avoid kids tugging on them."},
      { expanded: false, title:'Avoid extension cord as much as possible' , message: "Running extension cords through the house can trip up residents; this can cause injury and damage to the wire or outlet " +
      "if it causes the cord to be ripped out of the wall. If you find yourself using extension cords very often, consider having an " +
      "electrican install new outlets throughout your home."},
      { expanded: false, title:'Keep electrical equipment or outlet away from water', message: "Water conducts electricity, so even the slightest exposure to this dangerous mix can lead to injury. Make sure you wipe " +
      "up any spills to ensure that plugs don\'t get well."},
      { expanded: false, title:'Don\'t overload your outlets', message:"Every outlet in your home is designed to deliver a certain amount of electricity; by plugging too many devices into it at " +
      "once, you could cause a small explosion or a fire. If you have a lot of things to plug in, use a power strip (an energy saving "+
      "one of course!)that can safely accommodate your needs. "},
      { expanded: false, title:'Replace and repair the damage power cords', message: "Exposed wiring is a danger that cannot go overlooked, the NFPA wrote. If you see the protective coating on a wire is stripped "+
      "away, be sure to replace it or cover it with electrical tape as soon as possible."}
    ];
  }

  ngOnInit() {
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

}

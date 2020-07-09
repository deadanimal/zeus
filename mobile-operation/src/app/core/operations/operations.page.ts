import { Component, OnInit } from '@angular/core';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.page.html',
  styleUrls: ['./operations.page.scss'],
})
export class OperationsPage implements OnInit {

  // Data
  scannedWifis: any[] = []
  
  // Loader
  wifiLoader: any

  // Checker
  isEmpty: boolean = true
  isSearching: boolean = false

  // Icon
  iconEmpty = 'assets/icon/no-wifi.svg'

  constructor(
    private hotspot: Hotspot
  ) { }

  ngOnInit() {
    this.wifiLoader = setInterval(() => {
      this.hotspot.scanWifi().then((networks: HotspotNetwork[]) => {
        this.scannedWifis = networks
        if (this.scannedWifis) {
          this.isEmpty = false
          console.log(this.scannedWifis);
        }
      })
    }, 5000)
  }

  connect(selectedConnection) {
    let ssid = selectedConnection
    let password = ''
    this.hotspot.connectToWifi(ssid.SSID, password).then( () => {
      //connection to the WiFi network was successfull
      console.log('Connected')
    }).catch( () => {
        //connection to the WiFi network failed
        console.log('Error')
    });
  }

}

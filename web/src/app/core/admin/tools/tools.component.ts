import { Component, OnInit } from '@angular/core';
import { CsvService } from 'src/app/shared/services/csv/csv.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  dataVacuum: boolean = false
  dataWashingMachine: boolean = false
  dataDryer: boolean = false
  dataACCassette: boolean = false
  dataACWall: boolean = false
  dataIron: boolean = false
  dataFridge: boolean = false
  dataMicrowave: boolean = false
  dataInductionCooker: boolean = false
  dataBlender: boolean = false
  dataAirFryer: boolean = false
  dataDeepFryer: boolean = false

  isFirst = true
  iterationFirst = 0

  constructor(
    private csvService: CsvService
  ) { }

  ngOnInit() {
    let intr = setInterval(
      () => {
        this.getData()
        // this.checker()
      }, 1000
    )
  }

  getData() {
    this.csvService.get().subscribe(
      (res) => {
        console.log(res.body.length)
        if (res.body.length < 30) {
          let row = res.body.split(",")
          let powerValue = 0
          row[0] = +row[0]
          row[1] = +row[1]
          row[2] = +row[2]
          console.log('response: ', res)
          console.log('row: ', row)

          if (this.isFirst) {
            this.isFirst = false
            this.iterationFirst = Math.max(...row)
            console.log(this.iterationFirst)
          }

          if (this.dataVacuum) {
            powerValue = Number(Math.max(...row)) - this.iterationFirst
            console.log(powerValue)
            if (powerValue >= 1) {
              this.csvService.post({power: powerValue, label: 'Vacuum', time: res.test}).subscribe()
            }
            console.log('dataVacuum')
          }
          if (this.dataWashingMachine) {
            powerValue = Number(Math.max(...row)) - this.iterationFirst
            console.log(powerValue)
            if (powerValue >= 1) {
              this.csvService.post({power: powerValue, label: 'Washing', time: res.test}).subscribe()
            }
            console.log('dataWashingMachine')
          }
          if (this.dataDryer) {
            powerValue = Number(Math.max(...row)) - this.iterationFirst
            console.log(powerValue)
            if (powerValue >= 1) {
              this.csvService.post({power: powerValue, label: 'Dryer', time: res.test}).subscribe()
            }
            console.log('dataDryer')
          }
          if (this.dataACCassette) {
            powerValue = Number(Math.max(...row)) - this.iterationFirst
            console.log(powerValue)
            if (powerValue >= 1) {
              this.csvService.post({power: powerValue, label: 'AC', time: res.test}).subscribe()
            }
            console.log('dataACCassette')
          }
          if (this.dataACWall) {
            powerValue = Number(Math.max(...row)) - this.iterationFirst
            console.log(powerValue)
            if (powerValue >= 1) {
              this.csvService.post({power: powerValue, label: 'AC', time: res.test}).subscribe()
            }
            console.log('dataACWall')
          }
          if (this.dataIron) {
            powerValue = Number(Math.max(...row)) - this.iterationFirst
            console.log(powerValue)
            if (powerValue >= 1) {
              this.csvService.post({power: powerValue, label: 'Iron', time: res.test}).subscribe()
            }
            console.log('dataIron')
          }
          if (this.dataFridge) {
            powerValue = Number(Math.max(...row)) - this.iterationFirst
            console.log(powerValue)
            if (powerValue >= 1) {
              this.csvService.post({power: powerValue, label: 'Fridge', time: res.test}).subscribe()
            }
            console.log('dataFridge')
          }
          if (this.dataMicrowave) {
            powerValue = Number(Math.max(...row)) - this.iterationFirst
            console.log(powerValue)
            if (powerValue >= 1) {
              this.csvService.post({power: powerValue, label: 'Microwave', time: res.test}).subscribe()
            }
            console.log('dataMicrowave')
          }
          if (this.dataInductionCooker) {
            powerValue = Number(Math.max(...row)) - this.iterationFirst
            console.log(powerValue)
            if (powerValue >= 1) {
              this.csvService.post({power: powerValue, label: 'Induction', time: res.test}).subscribe()
            }
            console.log('dataInductionCooker')
          }
          if (this.dataBlender) {
            powerValue = Number(Math.max(...row)) - this.iterationFirst
            console.log(powerValue)
            if (powerValue >= 1) {
              this.csvService.post({power: powerValue, label: 'Blender', time: res.test}).subscribe()
            }
            console.log('dataBlender')
          }
          if (this.dataAirFryer) {
            powerValue = Number(Math.max(...row)) - this.iterationFirst
            console.log(powerValue)
            if (powerValue >= 1) {
              this.csvService.post({power: powerValue, label: 'Air', time: res.test}).subscribe()
            }
            console.log('dataAirFryer')
          }
          if (this.dataDeepFryer) {
            powerValue = Number(Math.max(...row)) - this.iterationFirst
            console.log(powerValue)
            if (powerValue >= 1) {
              this.csvService.post({power: powerValue, label: 'Deep', time: res.test}).subscribe()
            }
            console.log('dataDeepFryer')
          }
        }
      }
    )
  }

  checker() {
    if (this.dataVacuum) {
      console.log('dataVacuum')
    }
    if (this.dataWashingMachine) {
      console.log('dataWashingMachine')
    }
    if (this.dataDryer) {
      console.log('dataDryer')
    }
    if (this.dataACCassette) {
      console.log('dataACCassette')
    }
    if (this.dataACWall) {
      console.log('dataACWall')
    }
    if (this.dataIron) {
      console.log('dataIron')
    }
    if (this.dataFridge) {
      console.log('dataFridge')
    }
    if (this.dataMicrowave) {
      console.log('dataMicrowave')
    }
    if (this.dataInductionCooker) {
      console.log('dataInductionCooker')
    }
    if (this.dataBlender) {
      console.log('dataBlender')
    }
    if (this.dataAirFryer) {
      console.log('dataAirFryer')
    }
    if (this.dataDeepFryer) {
      console.log('dataDeepFryer')
    }
  }

}

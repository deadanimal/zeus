import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivitiesService } from 'src/app/shared/services/activities/activities.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  activityForm: FormGroup
  iconCh = 'assets/icon/business-and-finance.svg'

  constructor(
    private activityService: ActivitiesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.activityForm = this.fb.group({
      at_state: new FormControl(''),
      appliance: new FormControl('')
    })
  }

  create(type: string, state: string) {

    if (type == 'Steamer' && state == 'ON') {
      this.activityForm.controls['appliance'].setValue('a420e192-f89f-440a-a43b-89b42f05cfe3')
      this.activityForm.controls['at_state'].setValue('ON')
    }
    else if (type == 'Steamer' && state == 'OFF') {
      this.activityForm.controls['appliance'].setValue('a420e192-f89f-440a-a43b-89b42f05cfe3')
      this.activityForm.controls['at_state'].setValue('OF')
    }
    else if (type == 'Heater' && state == 'ON') {
      this.activityForm.controls['appliance'].setValue('9aadb299-ee03-4e6f-9272-396c15295be1')
      this.activityForm.controls['at_state'].setValue('ON')
    }
    else if (type == 'Heater' && state == 'OFF') {
      this.activityForm.controls['appliance'].setValue('9aadb299-ee03-4e6f-9272-396c15295be1')
      this.activityForm.controls['at_state'].setValue('OF')
    }
    else if (type == 'Blender' && state == 'ON') {
      this.activityForm.controls['appliance'].setValue('cefc16b8-56ed-4cf2-bc5f-c5cd0347f587')
      this.activityForm.controls['at_state'].setValue('ON')
    }
    else if (type == 'Blender' && state == 'OFF') {
      this.activityForm.controls['appliance'].setValue('cefc16b8-56ed-4cf2-bc5f-c5cd0347f587')
      this.activityForm.controls['at_state'].setValue('OF')
    }
    else if (type == 'Oven' && state == 'ON') {
      this.activityForm.controls['appliance'].setValue('4ea59be9-d7de-45b3-99ad-58da7f4a8e60')
      this.activityForm.controls['at_state'].setValue('ON')
    }
    else if (type == 'Oven' && state == 'OFF') {
      this.activityForm.controls['appliance'].setValue('4ea59be9-d7de-45b3-99ad-58da7f4a8e60')
      this.activityForm.controls['at_state'].setValue('OF')
    }
    else if (type == 'Vacuum' && state == 'ON') {
      this.activityForm.controls['appliance'].setValue('1e51076c-b2f4-45c1-aa5b-4b0aa26368a1')
      this.activityForm.controls['at_state'].setValue('ON')
    }
    else if (type == 'Vacuum' && state == 'OFF') {
      this.activityForm.controls['appliance'].setValue('1e51076c-b2f4-45c1-aa5b-4b0aa26368a1')
      this.activityForm.controls['at_state'].setValue('OF')
    }
    else if (type == 'Microwave' && state == 'ON') {
      this.activityForm.controls['appliance'].setValue('3e857401-b412-4cee-b2ef-852eaa0919f7')
      this.activityForm.controls['at_state'].setValue('ON')
    }
    else if (type == 'Microwave' && state == 'OFF') {
      this.activityForm.controls['appliance'].setValue('3e857401-b412-4cee-b2ef-852eaa0919f7')
      this.activityForm.controls['at_state'].setValue('OF')
    }
    else if (type == 'Iron' && state == 'ON') {
      this.activityForm.controls['appliance'].setValue('b5367745-3cb8-41ee-a9b0-2141f3fbc0c1')
      this.activityForm.controls['at_state'].setValue('ON')
    }
    else if (type == 'Iron' && state == 'OFF') {
      this.activityForm.controls['appliance'].setValue('b5367745-3cb8-41ee-a9b0-2141f3fbc0c1')
      this.activityForm.controls['at_state'].setValue('OF')
    }
    else if (type == 'Toaster' && state == 'ON') {
      this.activityForm.controls['appliance'].setValue('2e60f56b-7d72-4e0a-9953-a8792aca2315')
      this.activityForm.controls['at_state'].setValue('ON')
    }
    else if (type == 'Toaster' && state == 'OFF') {
      this.activityForm.controls['appliance'].setValue('2e60f56b-7d72-4e0a-9953-a8792aca2315')
      this.activityForm.controls['at_state'].setValue('OF')
    }
    else if (type == 'Kettle' && state == 'ON') {
      this.activityForm.controls['appliance'].setValue('a7d1d358-cd9c-4854-a2ef-ac35c3d80a1f')
      this.activityForm.controls['at_state'].setValue('ON')
    }
    else if (type == 'Kettle' && state == 'OFF') {
      this.activityForm.controls['appliance'].setValue('a7d1d358-cd9c-4854-a2ef-ac35c3d80a1f')
      this.activityForm.controls['at_state'].setValue('OF')
    }
    else if (type == 'Rice' && state == 'ON') {
      this.activityForm.controls['appliance'].setValue('d83116f3-b7fc-4b0b-ad4e-48957a143a56')
      this.activityForm.controls['at_state'].setValue('ON')
    }
    else if (type == 'Rice' && state == 'OFF') {
      this.activityForm.controls['appliance'].setValue('d83116f3-b7fc-4b0b-ad4e-48957a143a56')
      this.activityForm.controls['at_state'].setValue('OF')
    }
    else if (type == 'Pressure' && state == 'ON') {
      this.activityForm.controls['appliance'].setValue('b9005511-f36d-4cca-8d39-5bff95aaf6d5')
      this.activityForm.controls['at_state'].setValue('ON')
    }
    else if (type == 'Pressure' && state == 'OFF') {
      this.activityForm.controls['appliance'].setValue('b9005511-f36d-4cca-8d39-5bff95aaf6d5')
      this.activityForm.controls['at_state'].setValue('OF')
    }
    else if (type == 'AC' && state == 'ON') {
      this.activityForm.controls['appliance'].setValue('9ee236f0-dc38-4bc3-951d-eb7a8d4d63e2')
      this.activityForm.controls['at_state'].setValue('ON')
    }
    else if (type == 'AC' && state == 'OFF') {
      this.activityForm.controls['appliance'].setValue('9ee236f0-dc38-4bc3-951d-eb7a8d4d63e2')
      this.activityForm.controls['at_state'].setValue('OF')
    }


    // Rumah Boss
    // if (type == 'ACW' && state == 'ON') {
    //   this.activityForm.controls['appliance'].setValue('0cffcfe7-a66b-498e-affd-330c57b349bb')
    //   this.activityForm.controls['at_state'].setValue('ON')
    // }
    // else if (type == 'ACW' && state == 'OFF') {
    //   this.activityForm.controls['appliance'].setValue('0cffcfe7-a66b-498e-affd-330c57b349bb')
    //   this.activityForm.controls['at_state'].setValue('OF')
    // }
    // else if (type == 'ACC' && state == 'ON') {
    //   this.activityForm.controls['appliance'].setValue('31db4dc4-f7cd-43e7-865f-abcaf2b6d8af')
    //   this.activityForm.controls['at_state'].setValue('ON')
    // }
    // else if (type == 'ACC' && state == 'OFF') {
    //   this.activityForm.controls['appliance'].setValue('31db4dc4-f7cd-43e7-865f-abcaf2b6d8af')
    //   this.activityForm.controls['at_state'].setValue('OF')
    // }
    // else if (type == 'TV' && state == 'ON') {
    //   this.activityForm.controls['appliance'].setValue('1ccd45ae-92e6-4537-b6f9-7f1e1f390196')
    //   this.activityForm.controls['at_state'].setValue('ON')
    // }
    // else if (type == 'TV' && state == 'OFF') {
    //   this.activityForm.controls['appliance'].setValue('1ccd45ae-92e6-4537-b6f9-7f1e1f390196')
    //   this.activityForm.controls['at_state'].setValue('OF')
    // }
    // else if (type == 'Heater' && state == 'ON') {
    //   this.activityForm.controls['appliance'].setValue('a37c8b39-689d-4205-95ce-c7d2b468898e')
    //   this.activityForm.controls['at_state'].setValue('ON')
    // }
    // else if (type == 'Heater' && state == 'OFF') {
    //   this.activityForm.controls['appliance'].setValue('a37c8b39-689d-4205-95ce-c7d2b468898e')
    //   this.activityForm.controls['at_state'].setValue('OF')
    // }
    // else if (type == 'Vacuum' && state == 'ON') {
    //   this.activityForm.controls['appliance'].setValue('36533f03-603f-458a-ba1d-7df1d5ba01fc')
    //   this.activityForm.controls['at_state'].setValue('ON')
    // }
    // else if (type == 'Vacuum' && state == 'OFF') {
    //   this.activityForm.controls['appliance'].setValue('36533f03-603f-458a-ba1d-7df1d5ba01fc')
    //   this.activityForm.controls['at_state'].setValue('OF')
    // }
    // else if (type == 'Iron' && state == 'ON') {
    //   this.activityForm.controls['appliance'].setValue('fcd6c6a5-da8b-4582-af6c-f6d789d30aaf')
    //   this.activityForm.controls['at_state'].setValue('ON')
    // }
    // else if (type == 'Iron' && state == 'OFF') {
    //   this.activityForm.controls['appliance'].setValue('fcd6c6a5-da8b-4582-af6c-f6d789d30aaf')
    //   this.activityForm.controls['at_state'].setValue('OF')
    // }
    // else if (type == 'Toaster' && state == 'ON') {
    //   this.activityForm.controls['appliance'].setValue('7c368d67-f95a-4671-b3f8-959ecd843749')
    //   this.activityForm.controls['at_state'].setValue('ON')
    // }
    // else if (type == 'Toaster' && state == 'OFF') {
    //   this.activityForm.controls['appliance'].setValue('7c368d67-f95a-4671-b3f8-959ecd843749')
    //   this.activityForm.controls['at_state'].setValue('OF')
    // }

    this.activityService.post(this.activityForm.value).subscribe(
      () => {}
    )

  }

}

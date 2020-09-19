import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { DatabaseComponent } from './database/database.component';
import { DatabaseAppliancesComponent } from './database-appliances/database-appliances.component';
import { DatabaseDevicesComponent } from './database-devices/database-devices.component';
import { BillingComponent } from './billing/billing.component';
import { ToolsComponent } from './tools/tools.component';
import { UsersComponent } from './users/users.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceReadingsComponent } from './device-readings/device-readings.component';
import { DeviceInstallMaintenanceComponent } from './device-install-maintenance/device-install-maintenance.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { AppliancesBaseComponent } from './appliances-base/appliances-base.component';
import { AppliancesTransactionComponent } from './appliances-transaction/appliances-transaction.component';
import { AppliancesModeComponent } from './appliances-mode/appliances-mode.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ControlTowerComponent } from './control-tower/control-tower.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    DatabaseComponent,
    DatabaseAppliancesComponent,
    DatabaseDevicesComponent,
    BillingComponent,
    ToolsComponent,
    UsersComponent,
    DevicesComponent,
    DeviceReadingsComponent,
    DeviceInstallMaintenanceComponent,
    AppliancesComponent,
    AppliancesBaseComponent,
    AppliancesTransactionComponent,
    AppliancesModeComponent,
    AccountsComponent,
    NotificationsComponent,
    ControlTowerComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }

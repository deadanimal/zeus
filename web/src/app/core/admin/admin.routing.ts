import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { BillingComponent } from './billing/billing.component';
import { ToolsComponent } from './tools/tools.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UsersComponent } from './users/users.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceReadingsComponent } from './device-readings/device-readings.component';
import { DeviceInstallMaintenanceComponent } from './device-install-maintenance/device-install-maintenance.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { AppliancesBaseComponent } from './appliances-base/appliances-base.component';
import { AppliancesModeComponent } from './appliances-mode/appliances-mode.component';
import { AppliancesTransactionComponent } from './appliances-transaction/appliances-transaction.component';
import { ControlTowerComponent } from './control-tower/control-tower.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'billing',
                children: [
                    {
                        path: 'summary', 
                        component: BillingComponent
                    }
                ]
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'database',
                children: [
                    {
                        path: 'appliances',
                        children: [
                            {
                                path: 'appliances',
                                component: AppliancesComponent
                            },
                            {
                                path: 'appliances-base',
                                component: AppliancesBaseComponent
                            },
                            {
                                path: 'appliances-mode',
                                component: AppliancesModeComponent
                            },
                            {
                                path: 'appliances-transaction',
                                component: AppliancesTransactionComponent
                            }
                        ]
                    },
                    {
                        path: 'devices',
                        children: [
                            {
                                path: 'devices',
                                component: DevicesComponent
                            },
                            {
                                path: 'device-readings',
                                component: DeviceReadingsComponent
                            },
                            {
                                path: 'device-install-maintain',
                                component: DeviceInstallMaintenanceComponent
                            }
                        ]
                    },
                    {
                        path: 'accounts',
                        component: AccountsComponent
                    },
                    {
                        path: 'users',
                        component: UsersComponent
                    },
                    {
                        path: 'notifications',
                        component: NotificationsComponent
                    }
                ]
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'tools',
                component: ToolsComponent
            },
            {
                path: 'control-tower',
                component: ControlTowerComponent
            }
        ]
    }
]
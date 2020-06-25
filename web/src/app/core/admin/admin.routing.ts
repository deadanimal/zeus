import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { DatabaseComponent } from './database/database.component';
import { DatabaseAppliancesComponent } from './database-appliances/database-appliances.component';
import { DatabaseDevicesComponent } from './database-devices/database-devices.component';
import { BillingComponent } from './billing/billing.component';
import { ToolsComponent } from './tools/tools.component';

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
                        path: 'summary',
                        component: DatabaseComponent
                    },
                    {
                        path: 'appliances',
                        component: DatabaseAppliancesComponent
                    },
                    {
                        path: 'devices',
                        component: DatabaseDevicesComponent
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
            }
        ]
    }
]
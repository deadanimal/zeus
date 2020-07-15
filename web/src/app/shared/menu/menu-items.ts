export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-primary'
  },
  {
    path: '/admin/database',
    title: 'Database',
    type: 'sub',
    icontype: 'fas fa-database text-primary',
    collapse: 'database',
    isCollapsed: true,
    children: [
      // { path: 'summary', title: 'Summary', type: 'link' },
      { 
        path: 'appliances', title: 'Appliances', type: 'sub', isCollapsed: true, collapse: 'appliances', children: [
          { path: 'appliances', title: 'Appliances', type: 'link' },
          { path: 'appliances-base', title: 'Appliance Bases', type: 'link' },
          { path: 'appliances-mode', title: 'Appliance Modes', type: 'link' },
          { path: 'appliances-transaction', title: 'Appliance Transactions', type: 'link' },
        ]
      },
      { 
        path: 'devices', title: 'Devices', type: 'sub', isCollapsed: true, collapse: 'devices', children: [
          { path: 'devices', title: 'Devices', type: 'link' },
          { path: 'device-readings', title: 'Devices Reading', type: 'link' },
          { path: 'device-install-maintain', title: 'Devices Install & Reading', type: 'link' },
        ]
      },
      { path: 'accounts', title: 'Accounts', type: 'link' },
      { path: 'users', title: 'Users', type: 'link'},
      { path: 'notifications', title: 'Notifications', type: 'link'}
      // { path: '', title: '', type: 'link' },
    ]
  },
  // {
  //   path: '/admin/billing',
  //   title: 'Billing',
  //   type: 'sub',
  //   icontype: 'fas fa-file-invoice text-primary',
  //   collapse: 'billing',
  //   isCollapsed: true,
  //   children: [
  //     { path: 'summary', title: 'Summary', type: 'link' },
  //     // { path: '', title: '', type: 'link' },
  //   ]
  // },
  {
    path: '/admin/control-tower',
    title: 'Control Tower',
    type: 'link',
    icontype: 'fas fa-broadcast-tower text-primary',
  },
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-primary'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];
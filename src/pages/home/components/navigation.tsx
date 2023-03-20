// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import SideNavigation, { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

const items: SideNavigationProps['items'] = [
  // More pages got added as part of the workshop.
  { type: 'link', text: 'Dashboard', href: '/home/index.html' },
  { type: 'link', text: 'Savings', href: '/home/index.html' },
  { type: 'link', text: 'Commitments', href: '/home/index.html' },
  { type: 'link', text: 'Alerting', href: '/home/index.html' },
  { type: 'link', text: 'Allocations', href: '/home/index.html' },
  { type: 'link', text: 'Reporting', href: '/home/index.html' },
];

export default function Navigation() {
  return (
    <>
      <SideNavigation
        activeHref={location.pathname}
        header={{ href: '/home/index.html', text: 'Service' }}
        items={items}
      />
    </>
  );
}

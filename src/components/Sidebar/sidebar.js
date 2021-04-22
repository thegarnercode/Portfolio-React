import React from 'react';
import {Link, useLocation } from 'react-router-dom';
import {SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';

import { StyledSideNav } from './styles';

const items = [
    { name: 'Me', path: '/'},
    { name: 'Projects', path: '/projects'},
    { name: 'Work', Path: '/work'},
    { name: 'Education', path: '/education'},
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <StyledSideNav is FixedNav expanded isChildofHeader={false} aria-label="Side navigation">
            <SideNavItems>
                {items.map(i => (
                    <SideNavLink
                    isActive={
                        location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
                    }
                    element={link}
                    to={i.path}
                    key={i.name}
                    >
                        {i.name}
                    </SideNavLink>
                ))}
            </SideNavItems>
        </StyledSideNav>
    );
};

export default Sidebar;
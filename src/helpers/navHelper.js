export const navItems = ['home', 'gigs', 'bookings', 'acts', 'venues', 'people', 'organisations'];

export const getNavItemClass = (navItem, selectedItem) => {
    return navItem===selectedItem ? 'selected-nav' : 'unselected-nav'
};



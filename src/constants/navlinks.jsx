import { ABOUT_ROUTE, CONTACT_ROUTE, HOME_ROUTE, SERVICE_ROUTE } from "./routes";

const NavLinks = [
    {
        route: HOME_ROUTE,
        label: "Home",
    },
    {
        route: ABOUT_ROUTE,
        label: 'About'
    },
    {
        route: CONTACT_ROUTE,
        label: "Contact"
    }
    , {
        route: SERVICE_ROUTE,
        label: "Service"
    }
]
export default NavLinks;
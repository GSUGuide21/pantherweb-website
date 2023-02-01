const HEADER_SELECTOR = "#pw-header";
const MOBILE_NAV_SELECTOR = "#pw-mobile-nav";
const MOBILE_NAV_TRIGGER_SELECTOR = "#pw-mobile-nav-trigger";

const mobileNavTrigger = document.querySelector( MOBILE_NAV_TRIGGER_SELECTOR );
const mobileNav = document.querySelector( MOBILE_NAV_SELECTOR );

const toggleMobileNav = ( ) => mobileNav.classList.toggle( "active" );

const detectOutsideHeader = e => {
	if ( !e.target.closest( HEADER_SELECTOR ) ) {
		return mobileNav.classList.remove( "active" );
	}
};

mobileNavTrigger.addEventListener( "click", toggleMobileNav );
document.addEventListener( "click", detectOutsideHeader );
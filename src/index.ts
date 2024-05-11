import ContactBanner from '$components/contact-banner.svelte';

export default {
    ContactBanner: (target: HTMLElement) => new ContactBanner({ target }),
}

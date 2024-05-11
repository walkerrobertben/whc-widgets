import ContactBanner from '$components/contact-banner.svelte';

const Mount = (Component: any) => {
    const mountInContainer = () => {
        const container = document.createElement('div');
        const component = new Component({ target: container});
        return container;
    };
    return {
        before: (element: HTMLElement) => {
            if (element.parentNode) {
                const component = mountInContainer();
                element.parentNode.insertBefore(component, element);
            }
        },
        after: (element: HTMLElement) => {
            if (element.parentNode) {
                const component = mountInContainer();
                if (element.nextSibling) {
                    element.parentNode.insertBefore(component, element.nextSibling);
                } else {
                    element.parentNode.appendChild(component);
                }
            }
        },
    };
};

export default {
    Mount,
    ContactBanner,
};

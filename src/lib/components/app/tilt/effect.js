import VanillaTilt from 'vanilla-tilt';

export function tilt(node, options = {}) {
    VanillaTilt.init(node, options);

    return {
        destroy() {
            node.vanillaTilt.destroy();
        }
    };
}
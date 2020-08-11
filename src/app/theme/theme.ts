export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: 'light',
    properties: {
        '--foreground-default': '#ffffff',
        '--background-default': '#B0ACAE',
        '--primary-default': '#000000'
    }
};

export const dark: Theme = {
    name: 'dark',
    properties: {
        '--foreground-default': '#ffffff',
        '--background-default': '#000000',
        '--primary-default': '#ffffff'
    }
};

export const blue: Theme = {
    name: 'blue',
    properties: {
        '--foreground-default': '#254694',
        '--background-default': '#6B799B',
        '--primary-default': '#041E59'
    }
};


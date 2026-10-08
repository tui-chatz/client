type TStyle = {
    primary: string;
    backgroundColor: string;
    secondary: string;
    success: string;
    warning: string;
}

type TTheme = 'default' | 'dark'

export class Style {
    private primary: string = '';
    private backgroundColor: string = '';
    private secondary: string = '';
    private success: string = '';
    private warning: string = '';

    constructor(theme: TTheme) {
        this.success = '#28a745';
        this.warning = '#ffc107';
        switch (theme) {
            case 'dark':
                this.primary = '#ffffffaa';
                this.backgroundColor = '#30303a';
                this.secondary = '#ffffffaa';
                break;
        
            default:
                this.primary = '#04DFDB';
                this.backgroundColor = '#061C33';
                this.secondary = '#04DFDB55';
                break;
        }
    }

    get(): TStyle {
        return {
            primary: this.primary,
            backgroundColor: this.backgroundColor,
            secondary: this.secondary,
            success: this.success,
            warning: this.warning,
        }
    }
}
import { Observer } from "../../patterns/observer/observer";
import { Subject } from "../../patterns/observer/subject";

type TText = {
    primary: string;
    secondary: string;
    tertiary: string;
}

type TStyle = {
    primary: string;
    backgroundColor: string;
    secondary: string;
    success: string;
    warning: string;
    text: TText;
}

export type TTheme = 'default' | 'dark'

export class Style implements Subject {
    private observers: Observer[] = [];
    private style: TStyle = {
        primary: '',
        secondary: '',
        backgroundColor: '',
        success: '',
        warning: '',
        text: {
            primary: '',
            secondary: '',
            tertiary: '',
        }
    };

    constructor(theme: TTheme) {
        this.set(theme)
    }

    get(): TStyle {
        return this.style;
    }

    set(theme: TTheme): void {
        this.style.primary = '#04DFDB';
        this.style.backgroundColor = '#061C33';
        this.style.secondary = '#04DFDB55';
        this.style.success = '#28a745';
        this.style.warning = '#ffc107';
        this.style.text.primary = '#FFFFFF';
        this.style.text.secondary = '#AAAAAA';
        this.style.text.tertiary = '#666666';
        switch (theme) {
            case 'dark':
                this.style.primary = '#ffffffaa';
                this.style.backgroundColor = '#30303a';
                this.style.secondary = '#ffffffaa';
                break;

            default:
                break;
        }

        this.notify();
    }

    subscribe(...observers: Observer[]): void {
        for (const observer of observers) {
            if (!this.observers.includes(observer)) this.observers.push(observer);   
        }
    }

    unsubscribe(observer: Observer): void {
        if (this.observers.includes(observer)) {
            this.observers = this.observers.filter(o => o !== observer);
        }
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }
}
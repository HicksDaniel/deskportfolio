import "primereact/menubar";
import "primereact/menuitem";
import type { ComponentType } from "react";

export interface ObserverContextType {
    registerSection: (id: string, element: HTMLElement | null) => void;
    getSectionState: (id: string) => boolean;
    sectionStates: Record<string, boolean>;
}


export interface TechStackItem {
    name: string;
    src?: string;
    icon?: ComponentType<{ size?: number }>;
}

declare module "primereact/menuitem" {
    export interface MenuItem {
        key: string;

    }
}
export interface ObserverConfig {
    threshold?: number | number[];
    rootMargin?: string;
    triggerOnce?: boolean;
}

declare module "primereact/menubar" {
    export interface MenubarPassThroughOptions {
        menuButton?: any;
        menuIcon?: any;
    }
}
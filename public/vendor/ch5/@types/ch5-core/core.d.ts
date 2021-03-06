import { Subscription } from 'rxjs';
export declare type TSignalNonStandardTypeName = "boolean" | "b" | "number" | "numeric" | "n" | "string" | "s" | "object" | "o";
export declare type TSignalStandardTypeName = "boolean" | "number" | "string" | "object";
export declare type TRepeatDigitalSignalValue = {
    [key: string]: boolean | string | number | object;
};
export declare type TSignalValue = boolean | string | number | object;
export declare type TActionLogic = "set" | "link" | "toggle" | "pulse" | "increment" | "decrement" | "rcb";
export declare type TStringSet = Set<string>;
export declare type TSignalsSubscriptionsByType = {
    "boolean": TStringSet;
    "number": TStringSet;
    "string": TStringSet;
    "object": TStringSet;
    [key: string]: TStringSet;
};
export declare type TSignalSubscriptions = {
    [key: string]: Subscription;
};
export declare class Core {
}

export type PropertiesType<T> = T extends {[key:string]: infer U} ? U : never;
export type InferActionType<T extends {[key:string]:(...arg: any[])=> any}> = ReturnType<PropertiesType<T>>
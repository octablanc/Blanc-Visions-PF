export interface Category {
    map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
    id: Number;
    name: String;
    description: String;
    state: Boolean;
}
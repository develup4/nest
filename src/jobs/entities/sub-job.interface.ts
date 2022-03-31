export interface SubJob {
    trigger(): boolean;
    check(): boolean;
    getStatus(): object;
}
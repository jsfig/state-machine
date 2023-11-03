export interface TransitionInterface {
  getName(): string | number;

  getFroms(): Array<string | number>;

  getTos(): Array<string | number>;
}

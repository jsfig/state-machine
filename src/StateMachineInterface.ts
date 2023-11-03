import { TransitionInterface } from './TransitionInterface';

export interface StateMachineInterface {
  can(subject: object, transitionName: string): boolean;

  apply(subject: object, transitionName: string, context: any): void;

  getEnabledTransitions(subject: object): Array<TransitionInterface>;

  getName(): string;
}

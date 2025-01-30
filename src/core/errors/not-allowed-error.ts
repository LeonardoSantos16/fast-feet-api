import { InterfaceError } from './error-interface';

export class NotAllowedError extends Error implements InterfaceError {
  constructor() {
    super('Not Allowed');
  }
}

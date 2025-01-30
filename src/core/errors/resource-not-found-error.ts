import { InterfaceError } from './error-interface';

export class ResourceNotFound extends Error implements InterfaceError {
  constructor() {
    super('Resource not found');
  }
}

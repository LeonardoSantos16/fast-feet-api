import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';

export type role = 'admin' | 'deliveryMan';
interface UserProps {
  cpf: number;
  telephone: number;
  password: string;
  email: string;
  role: role;
  name: string;
  address: string;
}
export class User extends Entity<UserProps> {
  get cpf() {
    return this.props.cpf;
  }

  get telephone() {
    return this.props.telephone;
  }

  get password() {
    return this.props.password;
  }

  get role() {
    return this.props.role;
  }

  get email() {
    return this.props.email;
  }

  get name() {
    return this.props.name;
  }

  get address() {
    return this.props.address;
  }

  static create(props: UserProps, id?: UniqueEntityID) {
    const user = new User(props, id);

    return user;
  }
}

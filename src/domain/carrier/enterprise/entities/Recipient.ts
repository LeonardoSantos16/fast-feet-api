import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';

interface RecipientProps {
  addressRecipient: string;
  telephone: string;
  cpf: string;
  name: string;
}

export class Recipient extends Entity<RecipientProps> {
  get addressRecipient() {
    return this.props.addressRecipient;
  }

  get telephone() {
    return this.props.telephone;
  }

  get cpf() {
    return this.props.cpf;
  }

  get name() {
    return this.props.name;
  }

  static create(props: RecipientProps, id: UniqueEntityID) {
    const recipient = new Recipient(props, id);

    return recipient;
  }
}

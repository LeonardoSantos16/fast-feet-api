import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';
import { Optional } from 'src/core/types/optional';

export type status = 'Waiting' | 'Returned' | 'Delivered';

interface OrderProps {
  recipientId: UniqueEntityID;
  userId: UniqueEntityID;
  status: status;
  items: string[];
  description: string;
  created_at: Date;
  deliveryDate: Date | null;
  deliveryPhoto: string | null;
}

export class Order extends Entity<OrderProps> {
  get status() {
    return this.props.status;
  }

  get description() {
    return this.props.description;
  }

  get deliveryDate() {
    return this.props.deliveryDate;
  }

  get items() {
    return this.props.items;
  }

  get deliveryPhoto() {
    return this.props.deliveryPhoto;
  }
  set description(description: string) {
    this.props.description = description;
  }

  set deliveryDate(deliveryDate: Date | null) {
    this.props.deliveryDate = deliveryDate;
  }

  set status(status: status) {
    this.props.status = status;
  }

  set items(items: string[]) {
    this.props.items = items;
  }

  set deliveryPhoto(photo: string | null) {
    this.props.deliveryPhoto = photo;
  }

  static create(
    props: Optional<OrderProps, 'created_at' | 'deliveryPhoto'>,
    id?: UniqueEntityID,
  ) {
    const order = new Order(
      {
        ...props,
        created_at: props.created_at ?? new Date(),
        deliveryPhoto: props.deliveryPhoto ?? null,
      },
      id,
    );
    return order;
  }
}

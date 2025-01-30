import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';

interface NotificationProps {
  message: string;
  date: Date;
  status: string;
  orderId: UniqueEntityID;
  recipientId: UniqueEntityID;
}
export class Notification extends Entity<NotificationProps> {
  get message() {
    return this.props.message;
  }

  get date() {
    return this.props.date;
  }

  get status() {
    return this.props.status;
  }

  static create(props: NotificationProps, id: UniqueEntityID) {
    const notification = new Notification(props, id);

    return notification;
  }
}

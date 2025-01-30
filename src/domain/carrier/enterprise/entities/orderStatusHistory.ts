import { Entity } from 'src/core/entities/entity';
import { status } from './order';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';
import { Optional } from 'src/core/types/optional';

interface StatusHistoryProps {
  status: status;
  date: Date;
  orderId: UniqueEntityID;
  changed: UniqueEntityID;
}
export class orderStatusHistory extends Entity<StatusHistoryProps> {
  get status() {
    return this.props.status;
  }

  get date() {
    return this.props.date;
  }

  static create(
    props: Optional<StatusHistoryProps, 'date'>,
    id: UniqueEntityID,
  ) {
    const orderHistory = new orderStatusHistory(
      {
        ...props,
        date: props.date ?? new Date(),
      },
      id,
    );
    return orderHistory;
  }
}

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Menu } from './Menu';
import { Account } from './Account';
import { Reservation } from './Reservation';
import { Review } from './Review';

export enum cuisineTypes {
  AMERICAN = 'American',
  CHINESE = 'Chinese',
  JAPANESE = 'Japanese',
  MEXICAN = 'Mexican',
  CAJUN = 'Cajun',
  KOREAN = 'Korean',
  MEDITERRANEAN = 'Mediterranean',
  CUBAN = 'Cuban',
  MIDDLE_EASTERN = 'Middle Eastern',
  SUSHI_BAR = 'Sushi Bar',
  FRENCH = 'French',
  SANDWICH = 'Sandwich',
  STEAKHOUSE = 'Steakhouse',
  THAI = 'Thai',
  UNKNOWN = 'Unknown',
}

@Entity()
export class Restaurant extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    length: 50,
  })
  public name: string;

  @Column({
    unique: true,
    nullable: true,
  })
  public email: string;

  @Column({
    unique: true,
  })
  public address: string;

  @Column({
    type: 'simple-json',
    default: { lat: 37.95807, lon: -91.77349 },
    unique: true,
  })
  public location: {};

  @Column({
    default: 'default_img.jpg',
  })
  public imgPath: string;

  @Column({
    default: null,
  })
  public phoneNum: string;

  @Column({
    type: 'float',
    default: 0,
  })
  public review: number;

  @Column({
    type: 'enum',
    enum: cuisineTypes,
    default: cuisineTypes.AMERICAN,
  })
  public cuisineType: cuisineTypes;

  @Column({
    type: 'simple-json',
    default: {
      Monday: { startTime: '07:00', endTime: '21:00' },
      Tuesday: { startTime: '07:00', endTime: '21:00' },
      Wednesday: { startTime: '07:00', endTime: '21:00' },
      Thursday: { startTime: '07:00', endTime: '21:00' },
      Friday: { startTime: '07:00', endTime: '21:00' },
      Saturday: { startTime: '07:00', endTime: '21:00' },
      Sunday: { startTime: '07:00', endTime: '21:00' },
    },
  })
  public hours: {};

  @CreateDateColumn()
  public dateCreated: Date;

  @Column({
    default: true,
  })
  public isActive: boolean;

  @Column({
    default: false,
  })
  public hasWifi: boolean;

  @Column({
    default: false,
  })
  public hasTV: boolean;

  @Column({
    default: false,
  })
  public hasParking: boolean;

  @OneToMany((type) => Menu, (menu) => menu.restaurant)
  public menus: Menu[];

  @OneToMany((type) => Review, (review) => review.restaurant)
  public reviews: Review[];

  @ManyToMany((type) => Account, (account) => account.restaurants)
  public managers: Account[];

  @ManyToOne((type) => Reservation, (reservation) => reservation.restaurant)
  public reservations: Reservation[];
}

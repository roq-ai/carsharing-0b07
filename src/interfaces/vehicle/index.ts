import { PerformanceInterface } from 'interfaces/performance';
import { ReservationInterface } from 'interfaces/reservation';
import { UsageInterface } from 'interfaces/usage';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  vehicle_info: string;
  owner_id: string;
  created_at?: any;
  updated_at?: any;
  performance?: PerformanceInterface[];
  reservation?: ReservationInterface[];
  usage?: UsageInterface[];
  user?: UserInterface;
  _count?: {
    performance?: number;
    reservation?: number;
    usage?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_info?: string;
  owner_id?: string;
}

import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface UsageInterface {
  id?: string;
  vehicle_id: string;
  usage_date: any;
  usage_duration: number;
  created_at?: any;
  updated_at?: any;

  vehicle?: VehicleInterface;
  _count?: {};
}

export interface UsageGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_id?: string;
}

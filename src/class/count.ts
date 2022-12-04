import store from '../app/store';
import * as countsSlice from '../features/counts';
import Storable from './interface/storable';

export default class Counts implements Storable
{
  name: string;
  value: number;
  iconName: string;

  constructor(name:string, value:number, iconName:string)
  {
    this.name = name;
    this.value = value;
    this.iconName = iconName;
  }

  push()
  {
    store.dispatch(countsSlice.pushCounts(this));
  }

  delete()
  {
   store.dispatch(countsSlice.deleteCounts(this)); 
  }

  edit(newOnes:Counts)
  { 
    store.dispatch(countsSlice.editCounts({old:this,new:newOnes})); 
  }

  static getCounts()
  {
    return store.getState().counts.counts;
  }
}
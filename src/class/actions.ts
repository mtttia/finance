import store from '../app/store';
import * as actionsSlice from './../features/actions';
import Counts from './count';
import Storable from './interface/storable';

export default class Action implements Storable
{
  value: number;
  countName: string;
  type: ActionType;
  date: Date;
  
  constructor(value: number, count: Counts, type: ActionType, date:Date = new Date())
  {
    this.value = value;
    this.countName = count.name;
    this.type = type;
    this.date = date;
  }

  push()
  {
    store.dispatch(actionsSlice.pushAction(this));
  }

  delete(): void {
    store.dispatch(actionsSlice.deleteAction(this));
  }

  static getEntry(from:Date, to:Date):Action[]
  {
    let data = store.getState().actions.actions;
    data = data.filter((value) => value.type == ActionType.Entry && value.date >= from && value.date <= to);
    return data;
  }

  static getExit(from:Date, to:Date):Action[]
  {
    let data = store.getState().actions.actions;
    data = data.filter((value) => value.type == ActionType.Exit && value.date >= from && value.date <= to);
    return data;
  }
}

enum ActionType
{
  Entry,
  Exit,
  periodicEntry
}
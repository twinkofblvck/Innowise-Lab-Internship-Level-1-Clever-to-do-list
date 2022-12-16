import { addDoc, CollectionReference, doc, Query, query, updateDoc, where } from "firebase/firestore";
import { Firestore, collection } from "firebase/firestore";
import { IInternalTask, ITask, t_TaskData } from "../../types/task";


export default class TasksController
{
  private _firestore: Firestore;

  public constructor(firestore: Firestore)
  {
    this._firestore = firestore;
  }

  public async Add(task: ITask): Promise<void>
  {
    await addDoc(this._GetCollection(), task);
  }

  public async Update(id: string, data: t_TaskData): Promise<void>
  {
    await updateDoc(doc(this._firestore, "tasks", id), data);
  }

  public Query(): Query<IInternalTask>
  {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return query(this._GetCollection(),
      where("date", ">=", today));
  }

  private _GetCollection(): CollectionReference<IInternalTask>
  {
    return collection(this._firestore, "tasks") as CollectionReference<IInternalTask>;
  }
}
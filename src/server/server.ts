import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import AuthController from "./auth/AuthController";
import TasksController from "./tasks/TasksController";
import config from "./config";


class Server
{
  private static _instance: Server;

  private _tasks: TasksController;
  private _auth: AuthController;

  private constructor()
  {
    const app = initializeApp(config);

    this._tasks = new TasksController(getFirestore(app));
    this._auth = new AuthController(getAuth(app));
  }

  public get tasks(): TasksController
  {
    return this._tasks;
  }

  public get auth(): AuthController
  {
    return this._auth;
  }

  public static GetInstance(): Server
  {
    if (!this._instance) this._instance = new Server();
    return this._instance;
  }
}

export default Server.GetInstance();
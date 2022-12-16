import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


export default class AuthController
{
  private _ref: Auth;

  public constructor(auth: Auth)
  {
    this._ref = auth;
  }

  public get ref(): Auth
  {
    return this._ref;
  }

  public async SignUp(email: string, password: string): Promise<void>
  {
    await createUserWithEmailAndPassword(this._ref, email, password);
  }

  public async LogIn(email: string, password: string): Promise<void>
  {
    await signInWithEmailAndPassword(this._ref, email, password);
  }

  public async LogOut(): Promise<void>
  {
    await signOut(this._ref);
  }
}
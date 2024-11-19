/** @format */

import instance from "../instance";

export class AuthService {
  private static readonly basePath: string = "/auth";

  static signUp(payload: any): Promise<any> {
    return instance.post(`${this.basePath}/sign-up`, payload);
  }

  static signIn(payload: any): Promise<any> {
    return instance.post(`${this.basePath}/sign-in`, payload);
  }
}

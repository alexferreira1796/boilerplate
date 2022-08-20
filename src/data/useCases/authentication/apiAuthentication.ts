import { HttpPostClient } from "../../protocols/http/http-post-client";

export class ApiAuthentication {
  private readonly url: string;
  private readonly httpPostClient: HttpPostClient;

  constructor(url: string, httpPostClient: HttpPostClient) {
    this.url = url;
    this.httpPostClient = httpPostClient;
  }

  async auth(): Promise<void> {
    return Promise.resolve();
  }
}

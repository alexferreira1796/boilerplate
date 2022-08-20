import { HttpPostClientSpy } from "@/data/test/mock-http-client";
import { ApiAuthentication } from "./apiAuthentication";

type SutTypes = {
  sut: ApiAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (): SutTypes => {
  const url = "any_url";
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new ApiAuthentication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe("APIAuthentication", () => {
  test("shoud call HttpPostClient with corret URL", async () => {
    const url = "other_url";
    const { sut, httpPostClientSpy } = makeSut();

    await sut.auth();

    expect(httpPostClientSpy).toBe(url);
  });
});

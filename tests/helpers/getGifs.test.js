import { getGifs } from "../../src/helpers/getGifs";
describe("Tets in getGifs", () => {
  test("return array of gifs", async () => {
    const gif = await getGifs("One Punch");
    expect(gif.length).toBeGreaterThan(0);
    expect(gif[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});

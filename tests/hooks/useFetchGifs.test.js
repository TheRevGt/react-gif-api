import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Test in hook useFetch", () => {
  test("should init state ", () => {
    const { result } = renderHook(() => useFetchGifs("One punch man"));
    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });
  test("should return array and isLoading false", async () => {
    const { result } = renderHook(() => useFetchGifs("One punch man"));
    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));
    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});

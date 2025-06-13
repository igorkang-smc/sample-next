describe("The API /v1/weather/[zipcode]", () => {
  test("returns the correct data for the zipcode 96815", async () => {
    const zip = "96815";
        const response = await fetch(`http://localhost:3000/api/v1/weather/${zip}`);
    const body = await response.json();
    expect(body.zip).toEqual(zip);
  });
});
export {};

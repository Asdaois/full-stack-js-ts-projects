import { render, screen } from "@testing-library/react";

import axios from "axios";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

const URL = "http://hn.algolia.com/api/v1/search";

interface Story {
  title: string;
  objectID: string;
  url: string;
}

const Stories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [error, setError] = useState<boolean>(false);

  async function handleFetch() {
    try {
      const response = await axios.get(`${URL}?query=react`);
      setStories(response.data.hits);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <>
      <h1>Stories</h1>
      <button onClick={handleFetch}>Fetch Stories</button>

      {error && <div data-testid="error">Something went wrong ...</div>}

      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href=">{story.url}">{story.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

const defaultStories = [
  {
    title: "React",
    objectID: "1",
  },
  {
    title: "Vue",
    objectID: "2",
  },
];

describe("Stories", () => {
  test("render", () => {
    render(<Stories />);
    expect(screen.getByText("Stories")).toBeInTheDocument();
  });

  test("have button to fetch stories", () => {
    render(<Stories />);
    expect(screen.getByText("Fetch Stories")).toBeInTheDocument();
  });

  test("fetch stories", async () => {
    const mock = jest.spyOn(axios, "get");

    mock.mockResolvedValueOnce({
      data: {
        hits: defaultStories,
      },
    });

    render(<Stories />);
    userEvent.click(screen.getByRole("button"));
    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBeGreaterThan(0);
  });

  test("fetch stories from an API fail", async () => {
    const mock = jest.spyOn(axios, "get");
    mock.mockImplementationOnce(() =>
      Promise.reject(new Error("Network Error"))
    );
    render(<Stories />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByTestId("error")).toBeInTheDocument();
  });
});

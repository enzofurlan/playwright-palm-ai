import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://todomvc.com/examples/react/#/");

  // Add a new todo item
  await page.type(".new-todo", "Test todo");
  await page.press(".new-todo", "Enter");
});

import { logger } from "../../config/logger";
import { getApi } from "../../core/pactum_client";
import { Given, When, Then } from "@cucumber/cucumber";

Given("I make a GET request to {string}", (url) => {
  logger.info("Sending GET request to " + url);
  getApi().get(url);
});

When("I receive a response", async () => {
  await getApi().toss();
});

Then("status is {int}", async (code) => {
  getApi().response().should.have.status(code);
});
import { logger } from "../../config/logger";
import { getApi, close } from "../../core/pactum_client";
import { Given, When, Then, After } from "@cucumber/cucumber";

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

After((scenario) => {
  logger.info("Ending scenario: " + scenario.pickle.name);
  close();
});

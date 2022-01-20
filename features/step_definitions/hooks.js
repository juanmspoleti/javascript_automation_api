import { logger } from "../../config/logger";
import { close } from "../../core/pactum_client";
import { After, Before } from "@cucumber/cucumber";
import http from "http";
import mockserver from "mockserver";
let server = null;

Before((scenario) => {
  logger.info("Starting scenario: " + scenario.pickle.name);
  server = http.createServer(mockserver("./mocks")).listen(3000);
});

After((scenario) => {
  logger.info("Ending scenario: " + scenario.pickle.name);
  close();
  server.close();
});

import { logger } from "../../config/logger";
import { close } from "../../core/pactum_client";
import { After } from "@cucumber/cucumber";

After((scenario) => {
  logger.info("Ending scenario: " + scenario.pickle.name);
  close();
});

import pactum from "pactum";

let spec = null;

export function getApi() {
  if (spec == null) {
    spec = pactum.spec();
  }
  return spec;
}

export function close() {
  spec = null;
}

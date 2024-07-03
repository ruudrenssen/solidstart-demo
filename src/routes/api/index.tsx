import type { APIEvent } from "@solidjs/start/server";

export function GET({ request }: APIEvent) {
  // GET
  console.log(request);

  return {
    id: 0,
    content: "Solid start demo API",
  };
}

export function POST({ request, params }: APIEvent) {
  // POST
}

export function PATCH({ request, params }: APIEvent) {
  // PATCH
}

export function DELETE() {
  // DELETE
}

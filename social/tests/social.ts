import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Social } from "../target/types/social";

describe("social", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Social as Program<Social>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});

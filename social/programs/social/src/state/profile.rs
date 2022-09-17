use anchor_lang::prelude::*;

//add reputation
//get rid of display name


#[account]
pub struct SolanaTwitterProfile  {
    pub handle: String,
    pub tweet_count: u32,
   // pub reputation: u32,
    pub authority: Pubkey,
    pub bump: u8,
}

impl SolanaTwitterProfile {

    pub const ACCOUNT_SPACE: usize = 8 + 40 + 4 + 4 + 32 + 1;

    pub const SEED_PREFIX: &'static str = "profile";

    pub fn new(
        handle: String,
        authority: Pubkey,
        bump: u8,
    ) -> Self {
        
        SolanaTwitterProfile {
            handle,
            tweet_count: 0,
           // reputation: 0,
            authority,
            bump,
        }
    }
}
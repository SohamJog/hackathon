use anchor_lang::prelude::*;


#[account]
pub struct SolanaLike {
    pub wallet_pubkey: Pubkey,
    pub profile_pubkey: Pubkey,
    pub tweet_pubkey: Pubkey,
    pub authority: Pubkey,
    pub bump: u8,
}


impl SolanaLike {

    pub const ACCOUNT_SPACE: usize = 8 + 32 + 32 + 32 + 32 + 1;

    pub const SEED_PREFIX: &'static str = "like";

    pub fn new(
        wallet_pubkey: Pubkey,
        profile_pubkey: Pubkey,
        tweet_pubkey: Pubkey,
        authority: Pubkey,
        bump: u8,
    ) -> Self {
        
        SolanaLike {
            wallet_pubkey,
            profile_pubkey,
            tweet_pubkey,
            authority,
            bump,
        }
    }
}
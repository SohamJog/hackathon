use anchor_lang::prelude::*;

use crate::state::SolanaDislike;
use crate::state::SolanaTweet;
use crate::state::SolanaTwitterProfile;


pub fn create_dislike(
    ctx: Context<CreateDislike>,
) -> Result<()> {

    let tweet = &mut ctx.accounts.tweet;

    let dislike = SolanaDislike::new(
        ctx.accounts.authority.key(),
        ctx.accounts.profile.key(),
        tweet.key(),
        ctx.accounts.authority.key(),
        *ctx.bumps.get(SolanaDislike::SEED_PREFIX).expect("Bump not found."),
    );
    ctx.accounts.dislike.set_inner(dislike.clone());
    tweet.like_count -= 1;


    Ok(())
}

#[derive(Accounts)]
pub struct CreateDislike<'info> {
    #[account(
        init,
        payer = authority,
        space = SolanaDislike::ACCOUNT_SPACE,
        seeds = [
            SolanaDislike::SEED_PREFIX.as_bytes().as_ref(),
            profile.key().as_ref(),
            tweet.key().as_ref(),
        ],
        bump
    )]
    pub dislike: Account<'info, SolanaDislike>,
    #[account(
        mut,
        seeds = [
            SolanaTweet::SEED_PREFIX.as_ref(),
            tweet.profile_pubkey.as_ref(),
            tweet.tweet_number.to_string().as_ref(),
        ],
        bump = tweet.bump,
    )]
    pub tweet: Account<'info, SolanaTweet>,
    #[account(
        mut,
        has_one = authority,
        seeds = [
            SolanaTwitterProfile::SEED_PREFIX.as_ref(),
            authority.key().as_ref(),
        ],
        bump = profile.bump,
    )]
    pub profile: Account<'info, SolanaTwitterProfile>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

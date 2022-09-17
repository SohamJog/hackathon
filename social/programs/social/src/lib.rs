use anchor_lang::prelude::*;
use anchor_lang::system_program;
use instructions::*;

pub mod instructions;
pub mod state;

//change this once you deploy
declare_id!("AfjULZsRAw3TDX2m5pdMe27TpWNU33VWVKDCgDn5MvTA");


#[program]
pub mod solana_twitter_v1 {
    use super::*;

    // Create Profile instruction
    //
    pub fn create_profile(
        ctx: Context<CreateProfile>, 
        handle: String,
    ) -> Result<()> {

        // Calls 'create_profile' from instructions/create_profile.rs
        instructions::create_profile::create_profile(
            ctx, 
            handle,
        )
    }

    // Create Tweet instruction
    //
    pub fn create_tweet(
        ctx: Context<CreateTweet>, 
        title: String,
        body: String,
    ) -> Result<()> {

        // Calls 'create_tweet' from instructions/create_tweet.rs
        instructions::create_tweet::create_tweet(
            ctx, 
            title,
            body,
        )
    }

    // Create Like instructions
    //
    pub fn create_like(
        ctx: Context<CreateLike>, 
    ) -> Result<()> {

        // Calls 'create_like' from instructions/create_like.rs
        instructions::create_like::create_like(
            ctx, 
        )
    }

    pub fn create_dislike(
        ctx: Context<CreateDislike>, 
    ) -> Result<()> {

        // Calls 'create_like' from instructions/create_like.rs
        instructions::create_dislike::create_dislike(
            ctx, 
        )
    }

    /*
    // Create Retweet instructions
    //
    pub fn create_retweet(
        ctx: Context<CreateRetweet>, 
    ) -> Result<()> {

        // Calls 'create_retweet' from instructions/create_retweet.rs
        instructions::create_retweet::create_retweet(
            ctx, 
        )
    }
    */

    
    
    pub fn transfer_sol(ctx: Context<TransferSol>, amount: u64) -> Result<()> {
        
        msg!("Received request to transfer {:?} lamports from {:?} to {:?}.", 
            amount, &ctx.accounts.payer.key(), &ctx.accounts.recipient.key());
        msg!("  Processing transfer...");

        system_program::transfer(
            CpiContext::new(
                ctx.accounts.system_program.to_account_info(),
                system_program::Transfer {
                    from: ctx.accounts.payer.to_account_info(),
                    to: ctx.accounts.recipient.to_account_info(),
                },
            ),
            amount,
        )?;
        
        msg!("Transfer completed successfully.");
        Ok(())
    }
    
}




#[derive(Accounts)]
pub struct TransferSol<'info> {
    /// CHECK: We're initializing this account via the transfer
    #[account(mut)]
    recipient: AccountInfo<'info>,
    #[account(mut)]
    payer: Signer<'info>,
    system_program: Program<'info, System>,
}


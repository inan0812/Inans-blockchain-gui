import Big from 'big.js';
import TransactionType from '../constants/TransactionType';
import type Wallet from '../types/Wallet';

// deprecated
export default function computeStatistics(wallets: Wallet[]): {
  totalinanFarmed: Big;
  biggestHeight: number;
  biggestRewardHeight: number;
  poolCoins: Big;
  farmerCoins: Big;
  totalBlockRewards: Big;
  userTransactionFees: Big;
  blockRewards: Big;
} {
  let biggestHeight = 0;
  let biggestRewardHeight = 0;
  let poolCoins = Big(0);
  let farmerCoins = Big(0);

  wallets.forEach((wallet) => {
    if (!wallet) {
      return;
    }

    wallet.transactions.forEach((tx) => {
      const {
        additions,
        type,
        amount,
        confirmed_at_height: confirmedAtHeight,
      } = tx;
      if (additions.length === 0) {
        return;
      }

      const isFromReward = [
        TransactionType.COINBASE_REWARD,
        TransactionType.FEE_REWARD,
      ].includes(tx.type);

      if (type === TransactionType.COINBASE_REWARD) {
        poolCoins = poolCoins.plus(amount);
      } else if (type === TransactionType.FEE_REWARD) {
        farmerCoins = farmerCoins.plus(amount);
      }

      if (confirmedAtHeight > biggestHeight) {
        biggestHeight = confirmedAtHeight;
      }

      if (isFromReward && confirmedAtHeight > biggestRewardHeight) {
        biggestRewardHeight = confirmedAtHeight;
      }
    });
  });

  const totalinanFarmed = Big(farmerCoins);
  const totalBlockRewards = Big(farmerCoins);
  const userTransactionFees = Big(farmerCoins).minus(
    Big(totalBlockRewards),
  );
  const blockRewards = Big(farmerCoins)
    .minus(userTransactionFees);

  return {
    totalinanFarmed,
    biggestHeight,
    biggestRewardHeight,
    poolCoins,
    farmerCoins,
    totalBlockRewards,
    userTransactionFees,
    blockRewards,
  };
}

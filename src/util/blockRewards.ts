import Big from 'big.js';

const MOJO_PER_INAN = Big(1000000000000);
const BLOCKS_PER_YEAR = 6721840;

export function calculatePoolReward(height: number): Big {
  return MOJO_PER_INAN.times(3);
}

export function calculateBaseFarmerReward(height: number): Big {
  if (height === 0) {
    return MOJO_PER_INAN.times(2);
  }
  if (height < 3 * BLOCKS_PER_YEAR) {
    return MOJO_PER_INAN.times(1024);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MOJO_PER_INAN.times(2);
  }
  if (height < 9 * BLOCKS_PER_YEAR) {
    return MOJO_PER_INAN.times(2);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_INAN.times(2);
  }

  return MOJO_PER_INAN.times(2);
}

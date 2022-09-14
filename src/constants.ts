import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 16718,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  AMBTEST = 22040,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0xe0540d44fCb9413bf11220CB5a47B6BAc2D16c68'

export const INIT_CODE_HASH = '0x5fc9303e33e5f1b648c63c03bf2175d65f320921c3118513740f497429c70904'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

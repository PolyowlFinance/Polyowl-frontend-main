import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'OWL-USDC LP',
    decimal: 18,
    lpAddresses: {
      137: '0xcf509cbde7ffaa1d90512a9567be5f9d5a59046a',
    },
    tokenSymbol: 'OWL',
    tokenAddresses: {
      137: '0xc7553307eD737dcE132aE7915E6496864617B261',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'OWL-WMATIC LP',
    decimal: 18,
    lpAddresses: {
      137: '0xf0c5c573e89fa9cd298a05e174c4a75e94a478fb',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },

  // {
  //   pid: 1,
  //   risk: 5,
  //   lpSymbol: 'EGG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
  //   },
  //   tokenSymbol: 'EGG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 2,
  //   risk: 3,
  //   lpSymbol: 'USDC-USDT LP',
  //   lpAddresses: {
  //     137: '0x2cF7252e74036d1Da831d11089D326296e64a728'
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 12,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'EGG',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
  //   },
  //   tokenSymbol: 'EGG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 1,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'OWL',
    decimal: 18,
    lpAddresses: {
      137: '0xcf509cbde7ffaa1d90512a9567be5f9d5a59046a'
    },
    tokenSymbol: 'OWL',
    tokenAddresses: {
      137: '0xc7553307eD737dcE132aE7915E6496864617B261'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 2,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WMATIC',
    decimal: 18,
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 4,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'QUICK',
    decimal: 18,
    lpAddresses: {
      137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb'
    },
    tokenSymbol: 'QUICK',
    tokenAddresses: {
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 5,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WETH',
    decimal: 18,
    lpAddresses: {
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d'
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 6,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    decimal: 6,
    lpAddresses: {
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498'
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },


  {
    pid: 7,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'AAVE',
    decimal: 18,
    lpAddresses: {
      137: '0x7c76b6b3fe14831a39c0fec908da5f17180df677'
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  



  {
    pid: 8,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    decimal: 18,
    lpAddresses: {
      137: '0xf04adbf75cdfc5ed26eea4bbbb991db002036bdd'
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      137: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    decimal: 6,
    lpAddresses: {
      137: '0x2cf7252e74036d1da831d11089d326296e64a728'
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  
  {
    pid: 10,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'SUSHI',
    decimal: 18,
    lpAddresses: {
      137: '0xd9f57d9ed738ae20c5a60241a32fd076e69af005'
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      137: '0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },




]

export default farms

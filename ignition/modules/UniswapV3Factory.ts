import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const uniswapV3FactoryModule = buildModule('UniswapV3Factory', (m) => {
  const uniswapV3Factory = m.contract('UniswapV3Factory')
  return { uniswapV3Factory }
})

export default uniswapV3FactoryModule

// pnpm hardhat ignition deploy --network localhost ignition/modules/UniswapV3Factory.ts

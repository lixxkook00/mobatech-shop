import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from 'layout'
import DashboardPage from 'feature/dashboard'
import AccountDashboard from 'feature/dashboard/account'

import EggBasketsPage from 'feature/eggbaskets'

import MyAssetsPage from 'feature/myassets'
import NotOnMarketMyAssets from 'feature/myassets/notOnMarket'
import OnMarketMyAssets from 'feature/myassets/onMarket'

import MarketplacePage from 'feature/marketplace'
import DetailPage from 'feature/marketplace/detail'

import StakingPage from 'feature/staking'
import AcountStaking from 'feature/staking/account'
import LeaderboardStaking from 'feature/staking/leaderboard'
import InformationStaking from 'feature/staking/information'

import VestingPage from 'feature/vesting'
import PublicSale from 'feature/vesting/public-sale'
import Airdrop from 'feature/vesting/airdrop'
import Presale from 'feature/vesting/presale'
import PrivateSale from 'feature/vesting/private-sale'
// import PublicSaleOld from 'feature/vesting/publicsale-old'
// import ComingSoonVesting from 'feature/vesting/comingsoon'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>


        <Route path="/" element={<StakingPage />}>
          <Route path="/:_addressForReflink" element={<AccountDashboard/>} />
          <Route index element={<AccountDashboard />} />
          <Route path="account" element={<AccountDashboard />} />
        </Route>

        <Route path="marketplace" element={<MarketplacePage />} />
        <Route path="marketplace/:itemId" element={<DetailPage />} />
        <Route path="egg-baskets" element={<EggBasketsPage />} />

        <Route path="my-assets" element={<MyAssetsPage />}>
          <Route index element={<NotOnMarketMyAssets />} />
          <Route path="not-on-market" element={<NotOnMarketMyAssets />} />
          <Route path="on-market" element={<OnMarketMyAssets />} />
        </Route>

        <Route path="staking" element={<StakingPage />}>
          <Route index element={<AcountStaking />} />
          <Route path="account" element={<AcountStaking />} />
          <Route path="leaderboard" element={<LeaderboardStaking />} />
          <Route path="staked" element={<InformationStaking />} />
        </Route>
        <Route path="vesting" element={<VestingPage />}>
          {/* <Route index element={<PublicSaleOld />} />
          <Route path="public-sale" element={<PublicSaleOld />} /> */}
          <Route index element={<PublicSale />} />
          <Route path="public-sale" element={<PublicSale />} />
          <Route path="private-sale" element={<PrivateSale />} />
          <Route path="presale" element={<Presale />} />
          <Route path="airdrop" element={<Airdrop />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router

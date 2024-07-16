import React from 'react'

function Navbar() {
  return (
    <div classNameName="bg-white">
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAmVBMVEX////0WAD0TwDzTADzSQD0VQD0UgD7y7nzSAD///34n4T5sZf0WwD6uab5s5zzRAD808T/+fX94NT+9O/6wa395dv5p4r+8On82s380sP70MX2fEv3jGT4o4T3iF77xrP1cDf3lHD5qo/2eET2fkz1bC/3k2/4nXz0XxP1ZiP2czz5sJr2glb4mnb5rpL2e03zNQD+6uD0YB2UYSYlAAAPtklEQVR4nO1d22KqOhDFhCC0KuLd7V1rq7Z2H/v/H3cQCOROAth2K+uxBUwWyWQyszJYVo0aNWrUqFGjRo0aNX4DvJ9uwLfAq7KbXjDudVedxWZ2tFcVPvf3Yuocvo779fq0m718LOeb89NotN0+m+Bzu33azF9O+wOCrg0hAA5C9vSne/Yt+GOjFE4MYI7wrusDGhng5Kd79i34Axs3gd376Z59C25Fn3v56Z59C242+sY/3bNvwR8fAucG9MH+T/fse9Dvvi+RCx0k4UFrJeHvBsFPd+wbMW4udhCKGETn904u3s97lxnCziPRd0XQ3PF2ELQ17x6+MDc/xq6DQtvmTFhT++aOS97YumEzfy3e2FXEgD6rQ5CPvm7XyN+LsVuCPmuZkY+ON2vjbwa7ehjRF2TmD+1v1sTfjDUqQZ/1CVL6TjmXehFKtPRXYleKvmz4oZn6ypEPQ/xXpqm/ER+l6LPO2Po5H+oLZ9Hv+CVa+iuxdErRN8GLrzNXXufFV90dffNy9FmtZPQ6G+VlQ7umTwQ8e5035WVtcJ/0vZakr5ksHs6T8rLERtwdfeeS9PUT4wcWqqs8cKe2j921mdJn7WPjB0aqi7rwTulbgJL0JfyDT9VF2ETcHX3bsvQlAws8K67xsHtzd/S9l6UvoUYZJxzAe6WvU5Y+6yOamGCguGSP7pW+dmn64idAhUajm8YFa/o4XKKQIfwjvyKL6tT08WhdU2++XOKyyoLSd0ffoDx9q9F2u10MZf8OiJjO/dEHS9OXAzKmU9NnCiqZd3f0rUzpG0bQFrR0/UZNH4H/7BC+codLoEsnkovR1+8124vzZv76el68D5qTy+8RNDQN6YvDy7pahAGThjenb7x6PUAbRoLMWMkJbRs0dm/tiSmJHnuDKnWlmdUype8510kmmnBms8gkfZ4XjC+9yZ/m4FnWVG+ws8VaJuQAG6xHmaI1+GwPmn+6k97wMg6CKKsXjIfh41ftz9HT68dp/9U4MI9vw9bhuF/vXpbz89No+7kdPW3mH7PT/vh1UAfgUkwN6fsbdUblJKdotgDbazDovI/O1yYeWwi6rm0r8m/eJxKKmDIOgd3AkYq+D66PCoemGwKGqz1IHh9JiSMtMiuEaMNGJlLGmuP40pz4ZYquGX1efHm+kNkbHG1B30W6aCSWx6wcjn3B83CKpc+pdXi2OfoUP+DchL4ks6YWMnvDwVKsfhN366/oGUty4iNwHVeQF3amRvjfoC82fUoh8+qAbGiiX3Ve+Yf0j1nXEAS70SA0a5Pm85KZz+k06LNmlmcPNFj6XPkr1py8EzP64mx3w1Uocdum4mlBnL/fyDoG9ytiyfSmO3KcudgBDW2fYrhfR+9hw8bUhueDLbkLuXrbBzP6vGRUuYplXTUlxPRxXpD3lXYK8Yv8lFiLQdqQ8XOLFbxiOP7sfSp+4ZfO2heZ6IZ0C09jwtgMNX295GqnSvr4n1xmyqODYH/Tx7l5RhY3XAjHEnhR7pGGM2YEIQDOulqmnhF9mBqVlLTjOhmY7jjJGS6HXHm5dWia2TEo7HnaaFaY1N/z/DnLPA7odBlotfWFYGb0vSDBS2fQfXvKQAu4QLsf2v/259Pry/4Qem0xlz5LUTZ1oWR3gx/LKWsCfuhrnJggSbeVKUMWRvSNk2GeK+ZL8USZI8rKef3xsNscfL7Nmc1UM2uSI3ksjhOBrew/KfKUc1cQ9sbu6nYtghF9M0e/STEU9EmRjVip7gjrCkGH+9eRtRe5c5fcekH+gUoY0DfcAYMmxShAH+EAy9N3cXqvAfkLmkyHdETX6cbfWGKsRZ/njaeLfbYJEzm6YhSgjwihyd9l0mEoyLAcmOHn5h/1XOBWumZTNxXeZWN90+l0ohPP26fzZr78mO3WX+H2mwp85MipCBSgj1DdyOkLktEn2HuzbnuOdO4K7AihtUb7KLD0EUfaEteDPvUc0/Cu+/gC9P1FOtfHukTR3tvjnOe8XxxiR0kvDkfdmr/V5iGw2BIUoK+V0acwEnEY2xZtDkaM85K7mKY3yBZ6OX4ffeTcA/LLIpJtUeiCjR7k6IYtK/01zg3KRTH6bjl5ydySzG0O8QZDM/OfMPLDKmZVW8wQU0yBbX4kmaePN3U8fdqvqQB91NiRnxKe7F4X7ZXw30Nm+InWZwIfWJ6tPhwgBEdf64oGchxg+77vxhFvQMcpNWOJViH66F9am3fJsk70CFC7qWPMgIaHw4Glj/IVvKA/vgyv29TtR4OIvWv4AgkK0EdvG8CswEGuKdMpV5WUwwJRc6/FyqGPQnedrmi5xjhFAfqYoxJgX6DGBOM6CzYnGfBKb+61WGZ73k26wGtbiQL0PTN+BwLm/WJEn2gnvzQbqca/YhmGDNI40S33vGyLwrk3M60Rw8atuJhYhiQGV8RrETRWSd8luRjlnP/LUCTiwq/8yH01nMHMcRW5cH2M/SS/UCEVs3BpIja7bcCK3TVc4dgboxF4oZRJirAL/rEiXotlSl8SGFPZEhpF6OsLU3WOvTRxLGb0GHZlqR98WRGvxTJNFSXb8dvSxx3VwQT6O/0id4zvIvNUcaSvaC0BM/qSxUPfRSpEn8eG7DCQfdAtM0NGHiKIr9qV8Vos4zR5bCr0y2YUoo/bdREEQtTRE6Yxvos47HLBP4QKVlkwpC8e7IiVeklRjD6rSVt+CsDZ6hAY0B0TLw04NKs+0KiAocYlqfuiXTKoIH3WQMFfSKBOwGxD+y5QwHkaWS1cPc+QPhwb0x3rRekLTb8q8AMP+UkJxgKINm44q1nQa7HM5ZFxdCcngpahMH3W+KgSeyB3ntsEOu4iyk3j9LhbuO6qKX3P9jUBopIIUShOX+i/KPRj4Rts5HlqjOqd37hhn7dEBSRTbbMXRNB9fBn6rOFJNYORm/M0j76ZP7CNo9LKgIwapvQZohR9YesOKgLdnPWSdr85dyHAyxM0bBUB43MdZihJX9i+vWIKu2o5z5hevlkLhyNjhb0Wq0r6vEkvBBO3KE1f6BvsZLLH0J6pNwsfdOCfCfLivU2Zmr/VnWlb+bZt/8fY8wroC0383JatwlAZh2HONNHlVfGuWD94KUAFB1ITRF6AzywqldAXTsMFFIuQc6Ry9MaX3tjOSnstViXHoWNMIi+VzWtXRF9oGjoN4VEHW9leeuNLBYqwV12ubmNl9EXSFG4wVEZfiEFLEAhURy+Y0CFp5c7lvRarOvrijB0nSqmSvutg4hcRWzn36LQd4fql2RDtDZQQVdEXb9C5fEu19Fn9JZdHUuecJ9TGF2VRP9xvzeMvMpSv4xIhkYRyM6Fi+sL1nXUDJSfiMOikezZUsdeiyMHpoHQRphhJxgWygZDK6bMurAZHnSKjZ1caWkm9Fu2coRhsWqsYfbjAHCcYM6eveX57ezsrLhgz/KmNX0DPdhz1w0F69c35WDDGuBh9WBDLCaLM6YtO1fiqcB6THMxZOmm1WqJ4GybbudLFukvX74uALQli/8HQpxEljrZB6jlFz5icd9KjF4919MdNJV6LxYW0i9HXlAbOGPo0NudxAFJp0T2avpx3Qi8eUcI3dQfLeS1W+dqlEXBclw960/Q5KpuWIJ6aan+Csjh59NFK+6gJ22q8Fqt85dwrUueKT0Yz9GnszhPFnDJzSKUH8yYgIxcKB1waR3VLf1+pZNnrCKkggjdDNH06Cc4kl6ckhTp5zzlLLJjFY5WOx7JeS4glW3TdPN3eTY0zLyKm6Wv4+bYmiQGrd/Lk6MsdQszicUoXOuMzRDz+MvQpa5CKkUkq+FMqjFup42b5smcRoGxf7hPpQ74Af+ahik+MMCrqAsHDTcYQr+xn9oQ6GsSEPmXulRh9Gjla5pgW5l5x6kEbnBrHNlzLyS8WIS4Dx+RBxZ/koWdfWiZWns4jbZ+GsQ6EircGLP/1kIAT4+ifGIpAscfPhgvzfJFSp+9TUxqPV4UZIaUROgepWO8svlH7eIAcgroN6vQBgw1VrEYg+2N0YgKG+18OVbEg7arcpyW2Slq2uidSbAkPdJnhIngtCGlvo5sHOp4hOMHH7moA+857IcHoQEzU9JFA5mSTn0jSU9uwR8wbJvpsKQbiLy3ay25+o7zJ9sBkH0QLw4R98Ta1cfNGUR6cZCq7QVaKhnglmtVqBJPMsGgBi6C7EOUOIjg22L2O3mXYjs4fa8gX4BGenf9ir4K71CW5jJIyX6T0mMhti7s4yAgGmsfa+cWjjNcyHJyPvvwjn9HjlV/65Aq0xMSIervizxy6h3N70N7OW65g70ktZr5gHSMWK/0Tb9ziUdRrGW9nQFJTsCzEnu6Jt6/xu0nbQI0Eeq2GJ8YQkzV/wF7b9eDO2oCCXssfUc2maiAOm49lJgIDOeR9TEeRvX/uJQuLd2nvCMkQNDktyJQXKuy13Orr0A2ppzFVCW3DuxDlQbCim2uNSHDcvbzs9sglzC3yjaJNzM7DL+q13I4+qTVuqgY83NNj9llUSS6ukUn+AR7MzrHQi4f+sSgWN6RPVAUywsSRaaQcn3N2xp2Tm1M+EcGWseWnFo/iXsufpEbqtZplVCfVtq9GvKWL61C4VkqFUY3V6zPs5HmuPNoQLIUqPcddCidRf3BdlSXLGwLuqcAhlp56d6mLS2ewajan0+4kKtI77kdiW88EQYL++HrWvDeZdKfT5mrQVr3SycylJyVyoHNWFBkcDl6/QheBIjEqN3zqFLNbxM6jdIboB3DZHl07Lq5zHbqt8zR34Qx6q9F83bATNHZn82LXKcidx7/5pdZg0t6+bTZv74OJ0enZ6zjvl620nn5vyjSoVCNC9jXXf3Pw/TCGWAphVB+yRgKcOCi6X3ts4Ag/NE+G1cgy2pwO59Ex/Fy8vhxytsBN99/1+W6Lre84yFHXV8Df66oiuXtniLez6pQbnrqlTnHcJ47yUogYnSqOEN0nkiP1qnx5Gi/QKCH+aEgK8CkEIAGOO5hWtX4EJJoDudzM22OfZf2NzfpXgEMpUodul1a1Li2HvEPgUIBMD/2BI1V2BZKq+wPW2ElkprP09Fp5WcY9AidvhGqhPrZ7DdT6Pd9m/EUYp8J0gU83yfJzvubnhx4MmdiPD4MushSpX/mHh+8Dmf6X1a2Q+jmzb+g8EIiTKYBInXurNSnoqEBKep8gFXBwGzsv4+bGIcWHULvQ9KMhoBQ0wG+cTkfIyBRsjcNgDwq2gl6D/zyLW6gk82Pgk9fdMnQWrUv6EJjlyBXBV+3vyRGo1Z6GKsDHw0pcXSgmz93VQy8HXqclJBA57q78kclHQPMF0mL3q5KttahHni76zbeTHX0X6Kr6dFvzTs2dKcbDSXfanQzrmHKNGjVq1KhRo0aNIvgfEwfftcdDkL4AAAAASUVORK5CYII=" className="h-8" alt="Etsy logo" />

  </a>
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
      </button>
      
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  </div>
  )
}

export default Navbar
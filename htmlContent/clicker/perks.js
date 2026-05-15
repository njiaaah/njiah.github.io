// 001 шанс на крит при клике



function perksCriticalChance () {
var randomClick = Math.random() + 0.02 * perk001Level;
if(randomClick > 1){
  console.log('crit')

  perksIsClickCritical = true
  perksCriticalMultipliyer = 1
  } else {console.log('no crit')
    perksCriticalMultipliyer = 0
    perksIsClickCritical = false
    }
}

function levelUpPerk001 () {
if(perkPoints>=perk001Cost){
  perk001Level++
  perkPoints= perkPoints - BigInt(perk001Cost)
  perk001Cost+=2
} else alert('not enough skill poins')

}

// 002 Увеличение $ на % от пассивного инкама

// function moreClickFromIncome() {//функция прибавки % к клику
// 	currentMoney += (income / 100n) * click2XpUpgradeBonus
// }

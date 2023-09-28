let gold;
let food;
let land;

let houses;
let farms;
let banks;
let castles;
let armories;

const endDayButton = document.querySelector("#endDayButton");

const housesBuiltStat = document.querySelector("#housesBuilt");
const farmsBuiltStat = document.querySelector("#farmsBuilt");
const banksBuiltStat = document.querySelector("#banksBuilt");
const castlesBuiltStat = document.querySelector("#castlesBuilt");
const armoriesBuiltStat = document.querySelector("#armoriesBuilt");
const buildButton = document.querySelector("#buildButton");
const recruitButton = document.querySelector("#recruitButton");
const battleButton = document.querySelector("#battleButtonOne");

const currentGold = document.querySelector("#currentGold");
const currentFood = document.querySelector("#currentFood");
const currentLand = document.querySelector("#currentLand");

const goldPerTurn = document.querySelector("#goldPerTurn");
const foodPerTurn = document.querySelector("#foodPerTurn");

const currentGenerals = document.querySelector("#currentGenerals");
const currentSoldiers = document.querySelector("#currentSoldiers");
const currentCavalry = document.querySelector("#currentCavalry");
const currentArchers = document.querySelector("#currentArchers");
const currentTrebuchets = document.querySelector("#currentTrebuchets");
const currentDragons = document.querySelector("#currentDragons");

const housesBuiltStatTwo = document.querySelector("#housesBuiltTwo");
const farmsBuiltStatTwo = document.querySelector("#farmsBuiltTwo");
const banksBuiltStatTwo = document.querySelector("#banksBuiltTwo");
const castlesBuiltStatTwo = document.querySelector("#castlesBuiltTwo");
const armoriesBuiltStatTwo = document.querySelector("#armoriesBuiltTwo");
const buildButtonTwo = document.querySelector("#buildButtonTwo");
const recruitButtonTwo = document.querySelector("#recruitButtonTwo");
const battleButtonTwo = document.querySelector("#battleButtonTwo");

const currentGoldTwo = document.querySelector("#currentGoldTwo");
const currentFoodTwo = document.querySelector("#currentFoodTwo");
const currentLandTwo = document.querySelector("#currentLandTwo");

const goldPerTurnTwo = document.querySelector("#goldPerTurnTwo");
const foodPerTurnTwo = document.querySelector("#foodPerTurnTwo");

const currentGeneralsTwo = document.querySelector("#currentGeneralsTwo");
const currentSoldiersTwo = document.querySelector("#currentSoldiersTwo");
const currentCavalryTwo = document.querySelector("#currentCavalryTwo");
const currentArchersTwo = document.querySelector("#currentArchersTwo");
const currentTrebuchetsTwo = document.querySelector("#currentTrebuchetsTwo");
const currentDragonsTwo = document.querySelector("#currentDragonsTwo");

const INIT_STATE = {
  playerOne: {
    gold: 200,
    food: 50,
    land: 20,
    houses: 5,
    farms: 5,
    banks: 5,
    castles: 2,
    armories: 2,
    army: {
      generals: 2,
      soldiers: 300,
      cavalry: 100,
      archers: 100,
      trebuchets: 10,
      dragons: 0,
    },
  },
  playerTwo: {
    gold: 200,
    food: 50,
    land: 20,
    houses: 5,
    farms: 5,
    banks: 5,
    castles: 2,
    armories: 2,
    army: {
      generals: 2,
      soldiers: 300,
      cavalry: 100,
      archers: 100,
      trebuchets: 10,
      dragons: 0,
    },
  },
};

const render = () => {
  renderStats();
};

const renderStats = () => {
  housesBuiltStat.innerHTML = state.playerOne.houses;
  farmsBuiltStat.innerHTML = state.playerOne.farms;
  banksBuiltStat.innerHTML = state.playerOne.banks;
  castlesBuiltStat.innerHTML = state.playerOne.castles;
  armoriesBuiltStat.innerHTML = state.playerOne.armories;
  currentGold.innerHTML = state.playerOne.gold;
  currentFood.innerHTML = state.playerOne.food;
  currentLand.innerHTML = state.playerOne.land;
  goldPerTurn.innerHTML = state.playerOne.banks * 1;
  foodPerTurn.innerHTML = state.playerOne.farms * 1;
  currentGenerals.innerHTML = state.playerOne.army.generals;
  currentSoldiers.innerHTML = state.playerOne.army.soldiers;
  currentCavalry.innerHTML = state.playerOne.army.cavalry;
  currentArchers.innerHTML = state.playerOne.army.archers;
  currentTrebuchets.innerHTML = state.playerOne.army.trebuchets;
  currentDragons.innerHTML = state.playerOne.army.dragons;

  housesBuiltStatTwo.innerHTML = state.playerTwo.houses;
  farmsBuiltStatTwo.innerHTML = state.playerTwo.farms;
  banksBuiltStatTwo.innerHTML = state.playerTwo.banks;
  castlesBuiltStatTwo.innerHTML = state.playerTwo.castles;
  armoriesBuiltStatTwo.innerHTML = state.playerTwo.armories;
  currentGoldTwo.innerHTML = state.playerTwo.gold;
  currentFoodTwo.innerHTML = state.playerTwo.food;
  currentLandTwo.innerHTML = state.playerTwo.land;
  goldPerTurnTwo.innerHTML = state.playerTwo.banks * 1;
  foodPerTurnTwo.innerHTML = state.playerTwo.farms * 1;
  currentGeneralsTwo.innerHTML = state.playerTwo.army.generals;
  currentSoldiersTwo.innerHTML = state.playerTwo.army.soldiers;
  currentCavalryTwo.innerHTML = state.playerTwo.army.cavalry;
  currentArchersTwo.innerHTML = state.playerTwo.army.archers;
  currentTrebuchetsTwo.innerHTML = state.playerTwo.army.trebuchets;
  currentDragonsTwo.innerHTML = state.playerTwo.army.dragons;
};

const init = () => {
  state = {
    ...INIT_STATE,
  };

  cycles = 0;

  // interval = 5000;
  // timer = setInterval(runGame, interval);
  render();
};
const generateResources = () => {
  state.playerOne.gold = state.playerOne.gold + state.playerOne.banks * 1;
  state.playerOne.food = state.playerOne.food + state.playerOne.farms * 1;

  state.playerTwo.gold = state.playerTwo.gold + state.playerTwo.banks * 1;
  state.playerTwo.food = state.playerTwo.food + state.playerTwo.farms * 1;
};

const runGame = () => {
  cycles++;
  if (cycles < 1000) {
    // updateStats()

    generateResources();
    console.log("i updated");
  } else {
    return gameOver();
  }
  render();
};

const gameOver = () => {
  console.log("game over");

  clearInterval(timer);
};

const handleBtnClick = () => {
  let houseInput = parseInt(document.querySelector("#buildHouseInput").value);
  let farmInput = parseInt(document.querySelector("#buildFarmInput").value);
  let bankInput = parseInt(document.querySelector("#buildBankInput").value);
  let castleInput = parseInt(document.querySelector("#buildCastleInput").value);
  let armoryInput = parseInt(document.querySelector("#buildArmoryInput").value);
  let totalBeingBuilt =
    houseInput + farmInput + bankInput + castleInput + armoryInput;
  let totalCost =
    houseInput * 5 +
    farmInput * 5 +
    bankInput * 10 +
    castleInput * 10 +
    armoryInput * 10;

  if (totalCost > state.playerOne.gold) {
    alert("You don't have enough gold");
  } else if (totalBeingBuilt > state.playerOne.land) {
    alert("You don't have enough land to build on");
  } else {
    if (
      houseInput != 0 ||
      farmInput != 0 ||
      bankInput != 0 ||
      castleInput != 0 ||
      armoryInput != 0
    ) {
      state.playerOne.gold = state.playerOne.gold - houseInput * 5;
      state.playerOne.land = state.playerOne.land - houseInput;
      state.playerOne.houses = state.playerOne.houses + parseInt(houseInput);

      state.playerOne.gold = state.playerOne.gold - farmInput * 5;
      state.playerOne.land = state.playerOne.land - farmInput;

      state.playerOne.farms = state.playerOne.farms + parseInt(farmInput);

      state.playerOne.gold = state.playerOne.gold - bankInput * 10;
      state.playerOne.land = state.playerOne.land - bankInput;

      state.playerOne.banks = state.playerOne.banks + parseInt(bankInput);

      state.playerOne.gold = state.playerOne.gold - castleInput * 50;
      state.playerOne.land = state.playerOne.land - castleInput * 2;

      state.playerOne.castles = state.playerOne.castles + parseInt(castleInput);

      state.playerOne.gold = state.playerOne.gold - armoryInput * 50;
      state.playerOne.land = state.playerOne.land - armoryInput;

      state.playerOne.armories =
        state.playerOne.armories + parseInt(armoryInput);

      render();
    } else {
      return;
    }
  }

  render();
};

const handleBtnClickTwo = () => {
  let houseInput = parseInt(
    document.querySelector("#buildHouseInputTwo").value
  );
  let farmInput = parseInt(document.querySelector("#buildFarmInputTwo").value);
  let bankInput = parseInt(document.querySelector("#buildBankInputTwo").value);
  let castleInput = parseInt(
    document.querySelector("#buildCastleInputTwo").value
  );
  let armoryInput = parseInt(
    document.querySelector("#buildArmoryInputTwo").value
  );
  let totalBeingBuilt =
    houseInput + farmInput + bankInput + castleInput + armoryInput;
  let totalCost =
    houseInput * 5 +
    farmInput * 5 +
    bankInput * 10 +
    castleInput * 10 +
    armoryInput * 10;

  if (totalCost > state.playerTwo.gold) {
    alert("You don't have enough gold");
  } else if (totalBeingBuilt > state.land) {
    alert("You don't have enough land to build on");
  } else {
    if (
      houseInput != 0 ||
      farmInput != 0 ||
      bankInput != 0 ||
      castleInput != 0 ||
      armoryInput != 0
    ) {
      state.playerTwo.gold = state.playerTwo.gold - houseInput * 5;
      state.playerTwo.land = state.playerTwo.land - houseInput;
      state.playerTwo.houses = state.playerTwo.houses + parseInt(houseInput);

      state.playerTwo.gold = state.playerTwo.gold - farmInput * 5;
      state.playerTwo.land = state.playerTwo.land - farmInput;

      state.playerTwo.farms = state.playerTwo.farms + parseInt(farmInput);

      state.playerTwo.gold = state.playerTwo.gold - bankInput * 10;
      state.playerTwo.land = state.playerTwo.land - bankInput;

      state.playerTwo.banks = state.playerTwo.banks + parseInt(bankInput);

      state.playerTwo.gold = state.playerTwo.gold - castleInput * 50;
      state.playerTwo.land = state.playerTwo.land - castleInput * 2;

      state.playerTwo.castles = state.playerTwo.castles + parseInt(castleInput);

      state.playerTwo.gold = state.playerTwo.gold - armoryInput * 50;
      state.playerTwo.land = state.playerTwo.land - armoryInput;

      state.playerTwo.armories =
        state.playerTwo.armories + parseInt(armoryInput);

      render();
    } else {
      return;
    }
  }

  render();
};

const battleCalculator = (chosenOpponentFighting, playerFighting) => {
  let opponentTotalLand =
    chosenOpponentFighting.houses +
    chosenOpponentFighting.farms +
    chosenOpponentFighting.banks +
    chosenOpponentFighting.castles +
    chosenOpponentFighting.armories +
    chosenOpponentFighting.land;
  let playerArmoryPower = playerFighting.armories * 0.01 + 1;
  let myMilitaryPower =
    playerArmoryPower *
    (playerFighting.army.generals * 50 +
      playerFighting.army.soldiers * 1 +
      playerFighting.army.cavalry * 3 +
      playerFighting.army.archers * 2 +
      playerFighting.army.trebuchets * 100 +
      playerFighting.army.dragons * 500);
  let opponentCastlePower = chosenOpponentFighting.castles * 0.02 + 1;

  let opponentMilitaryPower =
    opponentCastlePower *
    (chosenOpponentFighting.army.generals * 50 +
      chosenOpponentFighting.army.soldiers * 1 +
      chosenOpponentFighting.army.cavalry * 3 +
      chosenOpponentFighting.army.archers * 2 +
      chosenOpponentFighting.army.dragons * 500);
  if (myMilitaryPower > opponentMilitaryPower) {
    if (chosenOpponentFighting.gold > 0) {
      playerFighting.gold =
        parseInt(playerFighting.gold + 0.1 * chosenOpponentFighting.gold);
      chosenOpponentFighting.gold = parseInt(chosenOpponentFighting.gold * 0.9);
    } else {
      return;
    }

    if (opponentTotalLand > 0) {
      if (chosenOpponentFighting.land > 0) {
        chosenOpponentFighting.land = chosenOpponentFighting.land - 1;
        playerFighting.land = playerFighting.land + 1;
      } else if (chosenOpponentFighting.farms > 0) {
        chosenOpponentFighting.farms = chosenOpponentFighting.farms - 1;
        playerFighting.land = playerFighting.land + 1;
      } else if (chosenOpponentFighting.houses > 0) {
        chosenOpponentFighting.houses = chosenOpponentFighting.houses - 1;
        playerFighting.land = playerFighting.land + 1;
      } else if (chosenOpponentFighting.banks > 0) {
        chosenOpponentFighting.banks = chosenOpponentFighting.banks - 1;
        playerFighting.land = playerFighting.land + 1;
      } else if (chosenOpponentFighting.armories > 0) {
        chosenOpponentFighting.armories = chosenOpponentFighting.armories - 1;
        playerFighting.land = playerFighting.land + 1;
      } else if (chosenOpponentFighting.castles > 0) {
        chosenOpponentFighting.castles = chosenOpponentFighting.castles - 1;
        playerFighting.land = playerFighting.land + 1;
      } else {
        return;
      }
    } else {
      return;
    }

    Object.keys(chosenOpponentFighting.army).forEach((element) => {
      chosenOpponentFighting.army[element] = Math.floor(
        chosenOpponentFighting.army[element] * 0.8
      );
    });
    Object.keys(playerFighting.army).forEach((element) => {
      playerFighting.army[element] = Math.floor(
        playerFighting.army[element] * 0.9
      );
    });
  } else if (opponentMilitaryPower > myMilitaryPower) {
    playerFighting.army.forEach((element) => {
      playerFighting.army[element] = Math.floor(
        playerFighting.army[element] * 0.7
      );
    });

    Object.keys(chosenOpponentFighting.army).forEach((element) => {
      chosenOpponentFighting.army[element] = Math.floor(
        chosenOpponentFighting.army[element] * 0.9
      );
    });
  } else {
    return;
  }
  console.log(playerFighting.army);
  console.log(chosenOpponentFighting.army);
};

battleButton.addEventListener("click", function () {
  let chosenOpponentFighting = state.playerTwo;
  let playerFighting = state.playerOne;
  battleCalculator(chosenOpponentFighting, playerFighting);
  render();
});

battleButtonTwo.addEventListener("click", function () {
  let chosenOpponentFighting = state.playerOne;
  let playerFighting = state.playerTwo;
  battleCalculator(chosenOpponentFighting, playerFighting);
  render();
});

const handleRecruitClick = () => {
  let generalInput = parseInt(
    document.querySelector("#recruitGeneralInput").value
  );
  let soldierInput = parseInt(
    document.querySelector("#recruitSoldierInput").value
  );
  let cavalryInput = parseInt(
    document.querySelector("#recruitCavalryInput").value
  );
  let archerInput = parseInt(
    document.querySelector("#recruitArcherInput").value
  );
  let trebuchetInput = parseInt(
    document.querySelector("#recruitTrebuchetInput").value
  );
  let dragonInput = parseInt(
    document.querySelector("#recruitDragonInput").value
  );

  let totalCost =
    generalInput * 100 +
    soldierInput * 2 +
    cavalryInput * 6 +
    archerInput * 4 +
    trebuchetInput * 200 +
    dragonInput * 1000;

  if (totalCost > state.playerOne.gold) {
    alert("You don't have enough gold");
  } else if (
    state.playerOne.army.generals <
      (soldierInput + state.playerOne.army.soldiers) / 300 ||
    state.playerOne.army.generals <
      (cavalryInput + state.playerOne.army.cavalry) / 75 ||
    state.playerOne.army.generals <
      (archerInput + state.playerOne.army.archers) / 150 ||
    state.playerOne.army.generals <
      (trebuchetInput + state.playerOne.army.trebuchets) / 10 ||
    state.playerOne.army.generals < dragonInput + state.playerOne.army.dragons
  ) {
    alert("You don't have enough Generals. Recruit more Generals first.");
  } else {
    if (
      generalInput != 0 ||
      soldierInput != 0 ||
      cavalryInput != 0 ||
      archerInput != 0 ||
      trebuchetInput != 0 ||
      dragonInput != 0
    ) {
      state.playerOne.gold = state.playerOne.gold - generalInput * 100;
      state.playerOne.army.generals =
        state.playerOne.army.generals + parseInt(generalInput);

      state.playerOne.gold = state.playerOne.gold - soldierInput * 2;
      state.playerOne.army.soldiers =
        state.playerOne.army.soldiers + parseInt(soldierInput);

      state.playerOne.gold = state.playerOne.gold - cavalryInput * 6;

      state.playerOne.army.cavalry =
        state.playerOne.army.cavalry + parseInt(cavalryInput);

      state.playerOne.gold = state.playerOne.gold - archerInput * 4;

      state.playerOne.army.archers =
        state.playerOne.army.archers + parseInt(archerInput);

      state.playerOne.gold = state.playerOne.gold - trebuchetInput * 200;

      state.playerOne.army.trebuchets =
        state.playerOne.army.trebuchets + parseInt(trebuchetInput);

      render();
    } else {
      return;
    }
  }

  render();
};

const handleRecruitTwoClick = () => {
  let generalInput = parseInt(
    document.querySelector("#recruitGeneralInputTwo").value
  );
  let soldierInput = parseInt(
    document.querySelector("#recruitSoldierInputTwo").value
  );
  let cavalryInput = parseInt(
    document.querySelector("#recruitCavalryInputTwo").value
  );
  let archerInput = parseInt(
    document.querySelector("#recruitArcherInputTwo").value
  );
  let trebuchetInput = parseInt(
    document.querySelector("#recruitTrebuchetInputTwo").value
  );
  let dragonInput = parseInt(
    document.querySelector("#recruitDragonInputTwo").value
  );

  let totalCost =
    generalInput * 100 +
    soldierInput * 2 +
    cavalryInput * 6 +
    archerInput * 4 +
    trebuchetInput * 200 +
    dragonInput * 1000;

  if (totalCost > state.playerTwo.gold) {
    alert("You don't have enough gold");
  } else if (
    state.playerTwo.army.generals <
      (soldierInput + state.playerTwo.army.soldiers) / 300 ||
    state.playerTwo.army.generals <
      (cavalryInput + state.playerTwo.army.cavalry) / 75 ||
    state.playerTwo.army.generals <
      (archerInput + state.playerTwo.army.archers) / 150 ||
    state.playerTwo.army.generals <
      (trebuchetInput + state.playerTwo.army.trebuchets) / 10 ||
    state.playerTwo.army.generals < dragonInput + state.playerTwo.army.dragons
  ) {
    alert("You don't have enough Generals. Recruit more Generals first.");
  } else {
    if (
      generalInput != 0 ||
      soldierInput != 0 ||
      cavalryInput != 0 ||
      archerInput != 0 ||
      trebuchetInput != 0 ||
      dragonInput != 0
    ) {
      state.playerTwo.gold = state.playerTwo.gold - generalInput * 100;
      state.playerTwo.army.generals =
        state.playerTwo.army.generals + parseInt(generalInput);

      state.playerTwo.gold = state.playerTwo.gold - soldierInput * 2;
      state.playerTwo.army.soldiers =
        state.playerTwo.army.soldiers + parseInt(soldierInput);

      state.playerTwo.gold = state.playerTwo.gold - cavalryInput * 6;

      state.playerTwo.army.cavalry =
        state.playerTwo.army.cavalry + parseInt(cavalryInput);

      state.playerTwo.gold = state.playerTwo.gold - archerInput * 4;

      state.playerTwo.army.archers =
        state.playerTwo.army.archers + parseInt(archerInput);

      state.playerTwo.gold = state.playerTwo.gold - trebuchetInput * 200;

      state.playerTwo.army.trebuchets =
        state.playerTwo.army.trebuchets + parseInt(trebuchetInput);

      render();
    } else {
      return;
    }
  }

  render();
};

buildButton.addEventListener("click", handleBtnClick);
buildButtonTwo.addEventListener("click", handleBtnClickTwo);

recruitButton.addEventListener("click", handleRecruitClick);
recruitButtonTwo.addEventListener("click", handleRecruitTwoClick);

endDayButton.addEventListener("click", runGame);

let dropDownListOne = document.querySelector("#houseOne");
let dropDownListTwo = document.querySelector("#houseTwo");

dropDownListOne.onchange = (e) => {
  let selectedI = dropDownListOne.selectedIndex;
  let chosenHouseOne = dropDownListOne.options[selectedI].value;
  // let playerCrestSpace= document.querySelector("#playerOneCrest").src
  // console.log(playerCrestSpace)
  // console.log(`${chosenHouseOne}.png`)
  // document.querySelector("#playerOneCrest").src=`${chosenHouseOne}.png`
  document.querySelector("#playerOneScreen").className = "";
  document.querySelector("#playerOneScreen").classList.add(`${chosenHouseOne}`);
};

dropDownListTwo.onchange = (e) => {
  let selectedITwo = dropDownListTwo.selectedIndex;
  let chosenHouseTwo = dropDownListTwo.options[selectedITwo].value;
  document.querySelector("#playerTwoScreen").className = "";
  document.querySelector("#playerTwoScreen").classList.add(`${chosenHouseTwo}`);
};
init();

// formulas for tracking current resources and spending resources

// formulas for the buildings which generate resources

// formulas for how armies work and how many resources they spend per day or spend during movement and battle

//formulas for resolving battles and taking resources from loser and assigning them to winner

//win conditions?
//house with most resources after X turns? or until only 1 house standing?
// or add logic for houses to concede defeat and "bend the knee" and after all X number of houses concede determine winner?

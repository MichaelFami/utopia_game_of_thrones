let gold;
let food;
let land;

let houses;
let farms;
let banks;

const housesBuiltStat = document.querySelector("#housesBuilt");
const farmsBuiltStat = document.querySelector("#farmsBuilt");
const banksBuiltStat = document.querySelector("#banksBuilt");
const buildButton = document.querySelector("#buildButton");
const battleButtons = document.querySelectorAll(".battleButton");

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

const INIT_STATE = {
  gold: 200,
  food: 50,
  land: 20,
  houses: 5,
  farms: 5,
  banks: 5,
  army:{
    generals: 2,
  soldiers: 300,
  cavalry: 100,
  archers: 100,
  trebuchets: 10,
  dragons: 1,

  }
  
};

const starkResources = {
  gold: 200,
  food: 50,
  land: 20,
  houses: 5,
  farms: 5,
  banks: 5,
};
const starkArmy = {
  generals: 3,
  soldiers: 300,
  cavalry: 100,
  archers: 100,
  trebuchets: 10,
  dragons: 0,
};
const opponents = {
  stark: { name: stark, army: starkArmy, resources: starkResources },
  lannister: {},
  targaryen: {},
};

const render = () => {
  renderStats();
};

const renderStats = () => {
  housesBuiltStat.innerHTML = state.houses;
  farmsBuiltStat.innerHTML = state.farms;
  banksBuiltStat.innerHTML = state.banks;
  currentGold.innerHTML = state.gold;
  currentFood.innerHTML = state.food;
  currentLand.innerHTML = state.land;
  goldPerTurn.innerHTML = state.banks * 1;
  foodPerTurn.innerHTML = state.farms * 1;
  currentGenerals.innerHTML = state.army.generals;
  currentSoldiers.innerHTML = state.army.soldiers;
  currentCavalry.innerHTML = state.army.cavalry;
  currentArchers.innerHTML = state.army.archers;
  currentTrebuchets.innerHTML = state.army.trebuchets;
  currentDragons.innerHTML = state.army.dragons;


};

const init = () => {
  state = {
    ...INIT_STATE,
  };

  cycles = 0;

  interval = 5000;
  timer = setInterval(runGame, interval);
  render();
};
const generateResources = () => {
  state.gold = state.gold + state.banks * 1;
  state.food = state.food + state.farms * 1;
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
  let totalBeingBuilt = houseInput + farmInput + bankInput;
  let totalCost = houseInput * 5 + farmInput * 5 + bankInput * 10;
  console.log(totalBeingBuilt);
  console.log(totalCost);
  if (totalCost > state.gold) {
    alert("You don't have enough gold");
  } else if (totalBeingBuilt > state.land) {
    alert("You don't have enough land to build on");
  } else {
    if (houseInput != 0) {
      state.gold = state.gold - houseInput * 5;
      state.land = state.land - houseInput;
      state.houses = state.houses + parseInt(houseInput);

      console.log("houseadded");
      render();
    } else {
      return;
    }

    if (farmInput != 0) {
      state.gold = state.gold - farmInput * 5;
      state.land = state.land - farmInput;

      state.farms = state.farms + parseInt(farmInput);

      console.log("farmadded");
      render();
    } else {
      return;
    }

    if (bankInput != 0) {
      state.gold = state.gold - bankInput * 10;
      state.land = state.land - bankInput;

      state.banks = state.banks + parseInt(bankInput);

      console.log("bankadded");
      render();
    } else {
      return;
    }
  }

  render();
};

const battleCalculator=(chosenOpponentArmy)=>{
    let myMilitaryPower = (
        (state.army.generals*50)+(state.army.soldiers*1)+(state.army.cavalry*3)+(state.army.archers*2)+(state.army.trebuchets*100)+(state.army.dragons*500)
    )
    let opponentMilitaryPower=(
        (chosenOpponentArmy.generals*50)+(chosenOpponentArmy.soldiers*1)+(chosenOpponentArmy.cavalry*3)+(chosenOpponentArmy.archers*2)+(chosenOpponentArmy.trebuchets*100)+(chosenOpponentArmy.dragons*500)
    )
    if (myMilitaryPower>opponentMilitaryPower) {
        Object.keys(chosenOpponentArmy).forEach(element => {
            chosenOpponentArmy[element] =Math.floor(chosenOpponentArmy[element]*0.5)
            console.log(chosenOpponentArmy)

        });
    } else if(opponentMilitaryPower>myMilitaryPower){
        state.army.forEach(element => {
            state.army[element] =Math.floor(state.army[element]*0.5)
        });
    }else{
        return
    }
   
}

battleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let chosenOpponentArmy = opponents[button.id].army
    battleCalculator(chosenOpponentArmy)
    render()
  });
  
});

buildButton.addEventListener("click", handleBtnClick);

init();


// formulas for tracking current resources and spending resources

// formulas for the buildings which generate resources

// formulas for how armies work and how many resources they spend per day or spend during movement and battle

//formulas for resolving battles and taking resources from loser and assigning them to winner

//win conditions?
//house with most resources after X turns? or until only 1 house standing?
// or add logic for houses to concede defeat and "bend the knee" and after all X number of houses concede determine winner?

import './App.css';
import AddPlayerModal from './components/player/AddPlayerModal';
import AddEnemyModal from './components/enemy/AddEnemyModal';
import { Card, Center, Flex, Spacer } from '@chakra-ui/react';
import ClearEnemiesModal from './components/enemy/ClearEnemiesModal';
import StartCombatModal from './components/combat/StartCombatModal';
import { useSelector } from 'react-redux';
import CharacterPage from './pages/CharacterPage';
import CombatPage from './pages/CombatPage';
import CombatHeader from './components/Nav/CombatHeader';
import EndCombat from './components/combat/EndCombat';

function App() {
  const page = useSelector((state) => {
    return state.page.current;
  });

  const currentPage = () =>
    page === 'COMBAT_PAGE' ?
      (<CombatPage />) :
      (<CharacterPage />);

  return (
    <div className="App">
      <Flex direction={"column"}>
        <Card backgroundColor="gray">
          <Center margin={"0.5em"}>
            {page === 'CHARACTERS_PAGE' && <AddPlayerModal />}
            {page === 'COMBAT_PAGE' && <CombatHeader />}
            <AddEnemyModal />
            <Spacer />
            {page === 'CHARACTERS_PAGE' && <StartCombatModal />}
            {page === 'COMBAT_PAGE' && <EndCombat />}
            {page === 'CHARACTERS_PAGE' && <ClearEnemiesModal />}
          </Center>
        </Card>
        {currentPage()}
      </Flex>
    </div>
  );
}

export default App;

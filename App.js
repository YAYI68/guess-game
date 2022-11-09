import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground,SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useCallback, useEffect, useState } from 'react';
import GameScreen from './screens/GameScreen';
import { Colors } from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();
export default function App() {
   const [ userNumber, setUserNumber] = useState();
   const [ gameIsOver, setGameIsOver ] = useState(true);
   const [guessRounds, setGuessRounds] = useState(0);


   const [fontsLoaded] =  useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  

   const pickNumberHandler =(pickedNum)=>{
    setUserNumber(pickedNum)
    setGameIsOver(false)
   }
     
   const gameOver = (roundsNumber)=>{
    setGameIsOver(true)
    setGuessRounds(roundsNumber)
   }

   const startNewGameHandler = () => {
    setUserNumber(null)
    setGuessRounds(0);
   }

   let screen = <StartGameScreen  onPickedNum={pickNumberHandler}/>

   if(userNumber){
    screen= <GameScreen gameOver={gameOver}  userNumber={userNumber} />
   }
   if(gameIsOver && userNumber){
    screen= <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber}  onStartNewGame={startNewGameHandler}    />
   }

  return (
   <LinearGradient colors={[Colors.primary500,Colors.secondary500]} style={styles.screenContainer}>
     <ImageBackground 
      source={require("./assets/images/guessbackground.png")}
      resizeMode="cover"
      style={styles.screenContainer} 
      imageStyle={styles.bgImage}
      >
        <SafeAreaView onLayout={onLayoutRootView} style={styles.screenContainer}>  
        {screen}
        </SafeAreaView> 
     </ImageBackground>
   </LinearGradient>
  
  );
}

const styles = StyleSheet.create({
      screenContainer: {
        flex:1,
        // backgroundColor:'#ddb52f',
      },
      bgImage:{
       opacity:0.15,
      }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground,SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { Colors } from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
AppLoading

export default function App() {
   const [ userNumber, setUserNumber] = useState();
   const [ gameIsOver, setGameIsOver ] = useState(true);
   
   const [fontsLoaded] =  useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

   const pickNumberHandler =(pickedNum)=>{
    setUserNumber(pickedNum)
    setGameIsOver(false)
   }

   let screen = <StartGameScreen  onPickedNum={pickNumberHandler}/>

   if(userNumber){
    screen= <GameScreen gameOver={setGameIsOver}  userNumber={userNumber} />
   }
   if(gameIsOver && userNumber){
    screen= <GameOverScreen />
   }

  return (
   <LinearGradient colors={[Colors.primary500,Colors.secondary500]} style={styles.screenContainer}>
     <ImageBackground 
      source={require("./assets/images/guessbackground.png")}
      resizeMode="cover"
      style={styles.screenContainer} 
      imageStyle={styles.bgImage}
      >
        <SafeAreaView style={styles.screenContainer}>  
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
   <LinearGradient colors={["#4e0329",'#ddb52f']} style={styles.screenContainer}>
     <ImageBackground 
      source={require("./assets/images/guessbackground.png")}
      resizeMode="cover"
      style={styles.screenContainer} 
      imageStyle={styles.bgImage}
      >
     <StartGameScreen />
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

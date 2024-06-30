import { TouchableOpacity, Text } from "react-native";
export default function Child({onPress} :{onPress:any}){
function onPress_()
{
    onPress("tatta");
}

return (
    // la function hello est  est au niveau de l'enfant.
//mais l'exécution est au niveau du parentc'est le parent va afficher coucou, 
        <TouchableOpacity onPress={onPress_}  >
          <Text  style={{fontSize:40 }} >click me </Text>
        </TouchableOpacity>

)
    

}
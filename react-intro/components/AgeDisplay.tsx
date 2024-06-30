import { Text} from 'react-native';

export function AgeDisplay({salaire}){  //: {age:any} pour éviter Binding element 'age' implicitly has an 'any' type
    return (
        <Text  style={{fontSize:40 }}>  mon salaire est : {salaire}
    </Text>
   
    )
};
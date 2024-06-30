import React from "react";
import { Text, View } from "react-native"

import { Image } from "react-native";


//version avvec distructions des propos
export function Human({name, age, children}){
    return (
<>
        <Text > je suis un humain et mon nom est {name}  
            </Text>
               <Text > et mon age est le varis {age}
            </Text>
            <Text > children {age}
            </Text>
            
            <Image   source={{uri: "https://picsum.photos/id/273/200/300"}} 
            style={{width: 40, height: 40}}            
            />

            {children}
            
            </>
    )
}

//version avec props 
//export function Human({props}){
// export function Human({props}){
//     return (
// <>
//         <Text > je suis un humain et mon nom est {props.name}  
//             </Text>
//                <Text > et mon age est le varis {props.age}
//             </Text>
//             <Text > children {props.age}
//             </Text>
            
//             <Image   source={{uri: "https://picsum.photos/id/273/200/300"}} 
//             style={{width: 40, height: 40}}            
//             />
// {props.children}
//             </>
//     )
// }
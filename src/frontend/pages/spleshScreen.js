import React, { useEffect } from 'react';

import { View, Text, Image } from 'react-native';

export default function Splesh(props) {

    useEffect(()=>{
        setTimeout(() => { props.navigation.navigate('Main')},3000)
      },[])

    return (
        <View 
            style={{ 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor: '#fff' 
            }}>
             <View 
                style={{
                    height: 130,
                    width: 130,
                    borderRadius: 20,
                    backgroundColor: '#70DB93',
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}>   
                    <Image style={{width: 120, height: 120}} source={require('./imagesTestes/splesh.jpg')}/>
                </View>
        </View>      
       
    )
}

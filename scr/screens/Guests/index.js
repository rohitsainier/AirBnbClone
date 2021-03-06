import React, { useState } from 'react';
import {View,Text,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const GuestsScreen = () =>{
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const navigation = useNavigation();

    return (
        <View style={{justifyContent:'space-between',height:'100%'}}>
            <View>
                <View style={styles.row}>
            <View style={styles.leftView}>
                <Text style={styles.title}>Adults</Text>
                <Text style={styles.subtitle}>Ages 13 or above</Text>
            </View>

            <View style={styles.rightView}>
                <Pressable
                    onPress={ () => setAdults(adults<1 ? 0 : adults - 1) }
                    style={styles.button}
                >
                <Text style={{fontSize:20}}>-</Text>
                </Pressable>
                <Text style={styles.countValue}>{adults}</Text>
                <Pressable
                    onPress={ () => setAdults(adults + 1) }
                    style={styles.button}
                >
                <Text style={{fontSize:20}}>+</Text>
                </Pressable>
            </View>
            </View>

                <View style={styles.row}>
            <View style={styles.leftView}>
                <Text style={styles.title}>Children</Text>
                <Text style={styles.subtitle}>Ages 13 or below</Text>
            </View>

            <View style={styles.rightView}>
                <Pressable
                    onPress={ () => setChildren(children<1 ? 0 : children - 1) }
                    style={styles.button}
                >
                <Text style={{fontSize:20}}>-</Text>
                </Pressable>
                <Text style={styles.countValue}>{children}</Text>
                <Pressable
                    onPress={ () => setChildren(children + 1) }
                    style={styles.button}
                >
                <Text style={{fontSize:20}}>+</Text>
                </Pressable>
            </View>
            </View>

                <View style={styles.row}>
            <View style={styles.leftView}>
                <Text style={styles.title}>Infants</Text>
                <Text style={styles.subtitle}>Ages 5 or below</Text>
            </View>

            <View style={styles.rightView}>
                <Pressable
                    onPress={ () => setInfants(infants<1 ? 0 : infants - 1) }
                    style={styles.button}
                >
                <Text style={{fontSize:20}}>-</Text>
                </Pressable>
                <Text style={styles.countValue}>{infants}</Text>
                <Pressable
                    onPress={ () => setInfants(infants + 1) }
                    style={styles.button}
                >
                <Text style={{fontSize:20}}>+</Text>
                </Pressable>
            </View>
            </View>
            </View>
            <View>
                <Pressable 
                onPress={() => navigation.navigate('Home',{
                    screen:'Explore',
                    params:{
                        screen:'SearchResults',
                    },
                })
                }
                style={{
                    marginBottom:20,
                    backgroundColor:'#f15454',
                    alignItems:'center',
                    justifyContent:'center',
                    height:50,
                    marginHorizontal:20,
                    borderRadius:10,
                }
                }>
                    <Text style={{
                        fontSize:20,
                        color:'white',
                        fontWeight:'bold',
                    }}>
                        Search
                    </Text>
                </Pressable>
            </View>

        </View>
    );
}

export default GuestsScreen;
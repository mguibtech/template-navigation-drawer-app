import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'


export function FooterMenu() {
    return (
        <View style={styles.container}>
            {/* <DrawerContentScrollView>
                <DrawerItemList {...props} />
            </DrawerContentScrollView> */}
            <Image 
                source={{ uri: 'https://github.com/mguibtech.png' }}
                style={styles.avatar}
            />

            <View style={styles.userInfo}>
                <Text style={styles.userName}>Marcos Guibson</Text>
                <Text style={styles.userEmail}>Marcos Guibson</Text>

            </View>

            <TouchableOpacity>
                <Feather name='log-out' size={22} color='#999'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#1a1a1a'
        padding: 16,
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center'
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22
    },
    userInfo:{
        flex: 1
    },
    userName:{
        color: '#fff',
        fontSize: 16
    },
    userEmail: {
        color: '#999',
        fontSize: 12
    }
})
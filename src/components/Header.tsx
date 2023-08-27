import { TouchableOpacity, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/routers'
import { useDrawerStatus } from '@react-navigation/drawer'


export function Header() {

    const navigation = useNavigation();
    const isDrawerOpen = useDrawerStatus() === 'open'

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Feather name={isDrawerOpen ? "chevron-left" : 'menu'} size={24} style={!isDrawerOpen ? {} : {
                backgroundColor: '#ec0505', padding: 2, borderRadius: 50
            }} color='#fff' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 42,
        right: 24,
        zIndex: 1,
        alignItems: 'flex-end'
    }
})
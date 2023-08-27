import { StyleSheet, View } from 'react-native'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { FooterMenu } from './FooterMenu'

export function CustomDrawer(props: DrawerContentComponentProps) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <FooterMenu/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a'
    }
})
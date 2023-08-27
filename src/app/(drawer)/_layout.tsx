import { Drawer } from 'expo-router/drawer'
import { Feather } from '@expo/vector-icons'
import { CustomDrawer } from '../../components/CustomDrawer'

export default function DrawerLayout() {
    return (
        <Drawer
            drawerContent={(props) => <CustomDrawer {...props}/>}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#2b2b2b',
                drawerActiveTintColor: '#ffff',
                drawerInactiveTintColor: '#9999'
            }}
        >
            <Drawer.Screen
                name='index'
                options={{
                    drawerLabel: 'Dashboard',
                    drawerIcon: ({size, color}) => <Feather name='home' color={color} size={size}/>
                }}
            />

            <Drawer.Screen
                name='schedules'
                options={{
                    drawerLabel: 'Agendamentos',
                    drawerIcon: ({size, color}) => <Feather name='calendar' color={color} size={size}/>
                }}
            />
            <Drawer.Screen
                name='posts'
                options={{
                    drawerLabel: 'Posts',
                    drawerIcon: ({size, color}) => <Feather name='edit' color={color} size={size}/>
                }}
            />
        </Drawer>
    )
} 
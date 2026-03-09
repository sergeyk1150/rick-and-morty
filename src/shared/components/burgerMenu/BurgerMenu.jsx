import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer } from '@mantine/core';
import { Navbar } from '../navbar';

export const BurgerMenu = () => {
    const [opened, { close, toggle }] = useDisclosure();
    return (
        <div className='burger-menu'>
            <Drawer 
                opened={opened}
                size="xs"
                position='right'
                onClose={close}
                title="Menu"
                overlayProps={{ backgroundOpacity: 0.1, blur: 4 }}
            >
                <Navbar close={close}/>
            </Drawer>
             <Burger 
                color="#22d3ee" 
                lineSize={3} size={28} 
                opened={opened} onClick={toggle} 
                aria-label="Toggle navigation" 
             />
        </div>
    )
}
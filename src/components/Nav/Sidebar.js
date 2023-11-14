import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"

function Sidebar() {
    const { onClose } = useDisclosure()

    return (
        <>
            <Drawer
                isOpen={true}
                placement='right'
                size={'xs'}
                returnFocusOnClose={false}
            >
                <DrawerContent>
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                    </DrawerBody>

                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Sidebar;